// Ghost Pilot Authentication Client - Shared Supabase Integration (FIXED VERSION)
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

    // Expose config for debugging
    this.supabaseUrl = this.config.url;
    this.supabaseKey = this.config.anonKey;
  }

  // Initialize Supabase client
  async initialize() {
    if (this.initialized) return;

    try {
      console.log('🔄 Initializing Supabase auth client...');
      
      // Load Supabase from CDN
      await this.loadSupabaseScript();
      
      // Initialize client
      this.supabase = window.supabase.createClient(
        this.config.url,
        this.config.anonKey
      );

      console.log('✅ Supabase client created');

      // Check current session
      const { data: { session } } = await this.supabase.auth.getSession();
      this.currentUser = session?.user || null;
      
      console.log('👤 Current session user:', this.currentUser?.email || 'None');

      // Listen for auth changes
      this.supabase.auth.onAuthStateChange((event, session) => {
        this.currentUser = session?.user || null;
        this.onAuthStateChange(event, session);
      });

      this.initialized = true;
      console.log('✅ Ghost Pilot Auth initialized successfully');
      
    } catch (error) {
      console.error('❌ Auth initialization failed:', error);
      throw error;
    }
  }

  // Load Supabase script from CDN
  loadSupabaseScript() {
    return new Promise((resolve, reject) => {
      if (window.supabase) {
        console.log('✅ Supabase already loaded');
        resolve();
        return;
      }

      console.log('📥 Loading Supabase from CDN...');
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      script.onload = () => {
        console.log('✅ Supabase script loaded');
        resolve();
      };
      script.onerror = (error) => {
        console.error('❌ Supabase script failed to load:', error);
        reject(error);
      };
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

  // Sign up new user (FIXED VERSION)
  async signUp(email, password, additionalData = {}) {
    console.log('🚀 Starting signup process with email:', email);
    
    if (!this.initialized) {
      console.log('⏳ Auth not initialized, initializing now...');
      await this.initialize();
    }

    try {
      console.log('📝 Calling Supabase signUp...');
      
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

      console.log('📥 Supabase signup response:');
      console.log('📥 Data:', data);
      console.log('📥 Error:', error);
      console.log('📥 User created:', !!data?.user);
      console.log('📥 User ID:', data?.user?.id);

      if (error) {
        console.error('❌ Supabase signup error:', error);
        return { success: false, error: error.message, details: error };
      }

      // Check if user was created
      if (!data?.user) {
        console.error('❌ No user returned from signup');
        return { success: false, error: 'No user data returned from signup' };
      }

      console.log('✅ User signup successful, user ID:', data.user.id);

      // Try to create initial license record (NON-BLOCKING)
      if (data.user) {
        console.log('🔧 Creating initial license...');
        try {
          await this.createInitialLicense(data.user.id);
          console.log('✅ Initial license created successfully');
        } catch (licenseError) {
          console.warn('⚠️ License creation failed (non-blocking):', licenseError);
          // Don't fail the whole signup if license creation fails
        }
      }

      console.log('🎉 Signup process completed successfully');
      return { success: true, data, user: data.user };
      
    } catch (error) {
      console.error('💥 Signup process failed with error:');
      console.error('💥 Error type:', error.constructor.name);
      console.error('💥 Error message:', error.message);
      console.error('💥 Error stack:', error.stack);
      
      return { 
        success: false, 
        error: error.message || 'Unknown signup error',
        details: error 
      };
    }
  }

  // Sign in existing user
  async signIn(email, password) {
    console.log('🔑 Starting signin process with email:', email);
    
    if (!this.initialized) {
      console.log('⏳ Auth not initialized, initializing now...');
      await this.initialize();
    }

    try {
      console.log('📝 Calling Supabase signIn...');
      
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password
      });

      console.log('📥 Supabase signin response:');
      console.log('📥 Data:', data);
      console.log('📥 Error:', error);

      if (error) {
        console.error('❌ Supabase signin error:', error);
        return { success: false, error: error.message, details: error };
      }

      console.log('✅ Signin successful');
      return { success: true, data, user: data?.user };
      
    } catch (error) {
      console.error('💥 Signin process failed:', error);
      return { 
        success: false, 
        error: error.message || 'Unknown signin error',
        details: error 
      };
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

  // Create initial FREE license for new user (IMPROVED)
  async createInitialLicense(userId) {
    try {
      console.log('🎫 Creating initial license for user:', userId);
      
      // Check if license table exists
      const { error: tableError } = await this.supabase
        .from('license_records')
        .select('id')
        .limit(1);

      if (tableError) {
        console.warn('⚠️ License table might not exist:', tableError.message);
        throw new Error(`License table error: ${tableError.message}`);
      }

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

      console.log('📋 License data to insert:', licenseData);

      const { data, error } = await this.supabase
        .from('license_records')
        .insert(licenseData)
        .select()
        .single();

      if (error) {
        console.error('❌ Failed to create initial license:', error);
        throw error;
      } else {
        console.log('✅ Initial FREE license created:', data);
        return data;
      }
      
    } catch (error) {
      console.error('💥 License creation error details:');
      console.error('💥 Error type:', error.constructor.name);
      console.error('💥 Error message:', error.message);
      console.error('💥 Error code:', error.code);
      throw error; // Re-throw so caller can handle
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
