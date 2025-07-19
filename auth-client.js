// Ghost Pilot Authentication Client - Shared Supabase Integration
// This module provides authentication functionality for all website components

class GhostPilotAuth {
  constructor() {
    this.supabase = null;
    this.currentUser = null;
    this.initialized = false;
    
    // Your Supabase configuration - configured with your actual credentials
    this.config = {
      url: 'https://hmzpsbeeeqldffajfckh.supabase.co',
      anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtenBzYmVlZXFsZGZmYWpmY2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMzY5NjUsImV4cCI6MjA2NDkxMjk2NX0.suyzPHjjw7t27tCS8e_hNjjAOaGCU8mdOWOL6kxEVvM'
    };
  }

  // Initialize Supabase client
  async initialize() {
    if (this.initialized) return;

    try {
      // Load Supabase from CDN
      await this.loadSupabaseScript();
      
      // Initialize client
      this.supabase = window.supabase.createClient(
        this.config.url,
        this.config.anonKey
      );

      // Check current session
      const { data: { session } } = await this.supabase.auth.getSession();
      this.currentUser = session?.user || null;

      // Listen for auth changes
      this.supabase.auth.onAuthStateChange((event, session) => {
        this.currentUser = session?.user || null;
        this.onAuthStateChange(event, session);
      });

      this.initialized = true;
      console.log('✅ Ghost Pilot Auth initialized');
      
    } catch (error) {
      console.error('❌ Auth initialization failed:', error);
      throw error;
    }
  }

  // Load Supabase script from CDN
  loadSupabaseScript() {
    return new Promise((resolve, reject) => {
      if (window.supabase) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Handle auth state changes
  onAuthStateChange(event, session) {
    console.log('🔄 Auth state changed:', event, session?.user?.email);
    
    // Emit custom event for components to listen to
    window.dispatchEvent(new CustomEvent('authStateChanged', {
      detail: { event, session, user: session?.user }
    }));
  }

  // Sign up new user
  async signUp(email, password, additionalData = {}) {
    if (!this.initialized) await this.initialize();

    try {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            created_via: 'website',
            ...additionalData
          }
        }
      });

      if (error) throw error;

      // Create initial license record for new user
      if (data.user) {
        await this.createInitialLicense(data.user.id);
      }

      return { success: true, data };
      
    } catch (error) {
      console.error('❌ Signup failed:', error);
      return { success: false, error: error.message };
    }
  }

  // Sign in existing user
  async signIn(email, password) {
    if (!this.initialized) await this.initialize();

    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      return { success: true, data };
      
    } catch (error) {
      console.error('❌ Login failed:', error);
      return { success: false, error: error.message };
    }
  }

  // Sign out user
  async signOut() {
    if (!this.initialized) await this.initialize();

    try {
      const { error } = await this.supabase.auth.signOut();
      if (error) throw error;

      return { success: true };
      
    } catch (error) {
      console.error('❌ Logout failed:', error);
      return { success: false, error: error.message };
    }
  }

  // Create initial FREE license for new user
  async createInitialLicense(userId) {
    try {
      // Generate a machine ID for website users (different from desktop)
      const websiteMachineId = `website-${userId.substring(0, 8)}`;
      
      const licenseData = {
        user_id: userId,
        license_key: `IC-FREE-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        tier: 'FREE',
        machine_id: websiteMachineId,
        machine_fingerprint: {
          platform: 'web',
          userAgent: navigator.userAgent,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        status: 'active',
        max_devices: 1
      };

      const { error } = await this.supabase
        .from('license_records')
        .insert(licenseData);

      if (error) {
        console.error('❌ Failed to create initial license:', error);
      } else {
        console.log('✅ Initial FREE license created for user');
      }
      
    } catch (error) {
      console.error('❌ License creation error:', error);
    }
  }

  // Get current user's subscription data
  async getUserSubscription() {
    if (!this.initialized) await this.initialize();
    if (!this.currentUser) return null;

    try {
      const { data, error } = await this.supabase
        .from('license_records')
        .select('*')
        .eq('user_id', this.currentUser.id)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        throw error;
      }

      return data;
      
    } catch (error) {
      console.error('❌ Failed to get subscription:', error);
      return null;
    }
  }

  // Get current user's usage statistics
  async getUserUsage() {
    if (!this.initialized) await this.initialize();
    if (!this.currentUser) return null;

    try {
      const { data, error } = await this.supabase
        .rpc('get_user_usage_stats', { p_user_id: this.currentUser.id });

      if (error) throw error;

      return data[0]; // Function returns array, we want first item
      
    } catch (error) {
      console.error('❌ Failed to get usage stats:', error);
      return null;
    }
  }

  // Update user's subscription tier
  async updateSubscriptionTier(newTier) {
    if (!this.initialized) await this.initialize();
    if (!this.currentUser) return { success: false, error: 'Not authenticated' };

    try {
      const { data, error } = await this.supabase
        .from('license_records')
        .update({ tier: newTier })
        .eq('user_id', this.currentUser.id)
        .eq('status', 'active')
        .select()
        .single();

      if (error) throw error;

      return { success: true, data };
      
    } catch (error) {
      console.error('❌ Failed to update subscription:', error);
      return { success: false, error: error.message };
    }
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.currentUser;
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }
}

// Create global instance
window.ghostPilotAuth = new GhostPilotAuth();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GhostPilotAuth;
} 
