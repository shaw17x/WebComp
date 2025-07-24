// Steley Subscription Management Page Combined - CSS + HTML Content (Component Only)
const subscriptionCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Subscription Management Container */
.subscription-manage-component{max-width:1200px;width:100%;margin:80px auto 40px auto;padding:20px;position:relative;z-index:999}

/* Page Header */
.subscription-header{text-align:center;margin-bottom:3rem;position:relative;z-index:1000}
.subscription-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;animation:badgeEntry 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s both;position:relative;z-index:1000}
.subscription-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6b7280;animation:spin 3s linear infinite}
.subscription-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#9ca3af 50%,#6b7280 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:20px;position:relative;z-index:1000}
.subscription-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;opacity:0.8;text-align:center;position:relative;z-index:1000}

/* Current Status Card */
.current-status-card{background:rgba(0,0,0,0.8);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:2rem;margin-bottom:2rem;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards}
.status-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem}
.status-title{font-size:1.5rem;font-weight:700;color:#fff;display:flex;align-items:center;gap:0.75rem}
.status-badge{padding:0.5rem 1rem;border-radius:9999px;font-size:0.875rem;font-weight:500;display:flex;align-items:center;gap:0.5rem}
.badge-active{background:rgba(34,197,94,0.2);color:#86efac;border:1px solid rgba(34,197,94,0.3)}
.badge-expired{background:rgba(239,68,68,0.2);color:#fca5a5;border:1px solid rgba(239,68,68,0.3)}
.badge-free{background:rgba(107,114,128,0.2);color:#d1d5db;border:1px solid rgba(107,114,128,0.3)}

/* Usage Statistics */
.usage-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:2rem}
.usage-stat{background:rgba(255,255,255,0.02);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:1.5rem;transition:all 0.2s}
.usage-stat:hover{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.1);transform:translateY(-2px)}
.stat-label{color:rgba(255,255,255,0.7);font-size:0.875rem;font-weight:500;margin-bottom:0.5rem}
.stat-value{color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:0.25rem}
.stat-limit{color:rgba(255,255,255,0.5);font-size:0.75rem}
.usage-bar{width:100%;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;margin-top:0.75rem;overflow:hidden}
.usage-fill{height:100%;border-radius:3px;transition:all 0.3s}
.usage-low{background:linear-gradient(to right,#22c55e,#4ade80)}
.usage-medium{background:linear-gradient(to right,#eab308,#facc15)}
.usage-high{background:linear-gradient(to right,#ef4444,#f87171)}

/* Plan Cards Grid */
.plans-section{margin-bottom:3rem}
.plans-title{font-size:2rem;font-weight:700;color:#fff;text-align:center;margin-bottom:1rem}
.plans-subtitle{font-size:1rem;color:rgba(255,255,255,0.7);text-align:center;margin-bottom:2rem}
.plans-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-bottom:2rem}

/* Individual Plan Card */
.plan-card{background:rgba(0,0,0,0.6);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:2rem;position:relative;transition:all 0.3s;opacity:0;animation:cardEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards}
.plan-card:hover{transform:translateY(-5px);border-color:rgba(255,255,255,0.2);box-shadow:0 20px 40px rgba(0,0,0,0.3)}
.plan-card.current{border-color:rgba(34,197,94,0.4);background:rgba(34,197,94,0.05)}
.plan-card.recommended{border-color:rgba(59,130,246,0.4);background:rgba(59,130,246,0.05)}
.plan-card.premium{border-color:rgba(168,85,247,0.4);background:rgba(168,85,247,0.05)}

.plan-header{margin-bottom:1.5rem}
.plan-name{font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.75rem}
.plan-description{color:rgba(255,255,255,0.7);font-size:0.875rem;margin-bottom:1rem}
.plan-price{display:flex;align-items:baseline;gap:0.5rem;margin-bottom:1rem}
.price-amount{font-size:2.5rem;font-weight:800;color:#fff}
.price-period{color:rgba(255,255,255,0.6);font-size:1rem}
.price-label{color:rgba(34,197,94,0.8);font-size:0.75rem;font-weight:500;margin-left:0.5rem}

.plan-features{margin-bottom:2rem}
.feature-item{display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;color:rgba(255,255,255,0.8)}
.feature-icon{width:1rem;height:1rem;border-radius:50%;background:rgba(34,197,94,0.2);border:1px solid rgba(34,197,94,0.4);display:flex;align-items:center;justify-content:center;font-size:0.625rem;color:#86efac}

.plan-action{margin-top:auto}
.plan-button{width:100%;padding:0.875rem 1.5rem;border-radius:8px;font-size:0.875rem;font-weight:600;transition:all 0.2s;cursor:pointer;border:none}
.button-primary{background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:#fff}
.button-primary:hover{background:linear-gradient(135deg,#2563eb,#1e40af);transform:translateY(-1px)}
.button-premium{background:linear-gradient(135deg,#a855f7,#7c3aed);color:#fff}
.button-premium:hover{background:linear-gradient(135deg,#9333ea,#6d28d9);transform:translateY(-1px)}
.button-current{background:rgba(34,197,94,0.2);color:#86efac;border:1px solid rgba(34,197,94,0.3)}
.button-secondary{background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.9);border:1px solid rgba(255,255,255,0.2)}
.button-secondary:hover{background:rgba(255,255,255,0.15);border-color:rgba(255,255,255,0.3)}

/* Account Management Section */
.account-section{background:rgba(0,0,0,0.6);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:2rem;margin-bottom:2rem;position:relative;z-index:1000}
.account-title{font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:1.5rem}
.account-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem}
.account-item{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:1.5rem;transition:all 0.2s}
.account-item:hover{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.1)}
.account-item-title{color:#fff;font-weight:600;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.5rem}
.account-item-description{color:rgba(255,255,255,0.7);font-size:0.875rem;margin-bottom:1rem}
.account-button{padding:0.5rem 1rem;border-radius:6px;font-size:0.875rem;font-weight:500;transition:all 0.2s;cursor:pointer;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.9)}
.account-button:hover{background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.3)}

/* Plan Icons */
.icon-free{color:#9ca3af}
.icon-pro{color:#3b82f6}
.icon-ultra{color:#a855f7}

/* Footer */
.subscription-footer{text-align:center;margin-top:3rem;padding:2rem;border-top:1px solid rgba(255,255,255,0.1)}
.footer-text{color:rgba(255,255,255,0.6);font-size:0.875rem;margin-bottom:1rem}
.footer-links{display:flex;justify-content:center;gap:2rem;flex-wrap:wrap}
.footer-link{color:rgba(255,255,255,0.7);text-decoration:none;font-size:0.875rem;transition:color 0.2s}
.footer-link:hover{color:#fff}

/* Loading Spinner */
.loading-spinner{width:14px;height:14px;border:2px solid rgba(255,255,255,0.2);border-top:2px solid rgba(255,255,255,0.8);border-radius:50%;animation:spin 1s linear infinite}

/* Animations */
@keyframes containerEntry{from{opacity:0;transform:translateY(30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes cardEntry{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes badgeEntry{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

/* Responsive Design */
@media (max-width: 768px){
  .subscription-manage-component{margin:20px auto;padding:15px}
  .subscription-title{font-size:2rem}
  .plans-grid{grid-template-columns:1fr;gap:1rem}
  .usage-stats{grid-template-columns:1fr}
  .account-grid{grid-template-columns:1fr}
  .footer-links{flex-direction:column;gap:1rem}
}
`;

const subscriptionHTML = `
<div class="subscription-manage-component">
  <!-- Page Header -->
  <div class="subscription-header">
    <div class="subscription-badge">
      <div class="subscription-badge-dot"></div>
      Subscription Management
    </div>
    <h1 class="subscription-title">Manage Your Plan</h1>
    <p class="subscription-subtitle">Control your Steley subscription and usage</p>
  </div>

  <!-- Current Status Card -->
  <div class="current-status-card">
    <div class="status-header">
      <h2 class="status-title">
        <span id="currentPlanIcon">🛡️</span>
        <span id="currentPlanName">Loading...</span>
      </h2>
      <div id="statusBadge" class="status-badge badge-free">
        <span>●</span>
        <span id="statusText">Loading...</span>
      </div>
    </div>
    
    <!-- Usage Statistics -->
    <div class="usage-stats">
      <div class="usage-stat">
        <div class="stat-label">Screenshots</div>
        <div class="stat-value" id="screenshotUsage">0</div>
        <div class="stat-limit" id="screenshotLimit">of 0 daily limit</div>
        <div class="usage-bar">
          <div class="usage-fill usage-low" id="screenshotBar" style="width: 0%"></div>
        </div>
      </div>
      <div class="usage-stat">
        <div class="stat-label">AI Requests</div>
        <div class="stat-value" id="aiUsage">0</div>
        <div class="stat-limit" id="aiLimit">of 0 daily limit</div>
        <div class="usage-bar">
          <div class="usage-fill usage-low" id="aiBar" style="width: 0%"></div>
        </div>
      </div>
      <div class="usage-stat">
        <div class="stat-label">Next Reset</div>
        <div class="stat-value" id="resetTime">--:--</div>
        <div class="stat-limit">Daily limits reset</div>
      </div>
    </div>
    
    <!-- User Info -->
    <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.02); border-radius: 8px;">
      <p style="color: rgba(255,255,255,0.7); font-size: 0.875rem; margin: 0;">
        Logged in as: <span id="userEmail" style="color: #fff; font-weight: 500;">Loading...</span>
      </p>
    </div>
  </div>

  <!-- Available Plans -->
  <div class="plans-section">
    <h2 class="plans-title">Choose Your Plan</h2>
    <p class="plans-subtitle">Upgrade or change your subscription at any time</p>
    
    <div class="plans-grid">
      <!-- Free Plan -->
      <div class="plan-card" id="freePlan">
        <div class="plan-header">
          <h3 class="plan-name">
            <span class="icon-free">🛡️</span>
            FREE
          </h3>
          <p class="plan-description">Perfect for trying out Steley</p>
          <div class="plan-price">
            <span class="price-amount">$0</span>
            <span class="price-period">/month</span>
            <span class="price-label">Forever Free</span>
          </div>
        </div>
        
        <div class="plan-features">
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>10 Screenshots/day</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>10 AI Requests/day</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>Basic stealth mode</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>Community support</span>
          </div>
        </div>
        
        <div class="plan-action">
          <button class="plan-button button-current" id="freeButton">Current Plan</button>
        </div>
      </div>

      <!-- Pro Plan -->
      <div class="plan-card recommended" id="proPlan">
        <div class="plan-header">
          <h3 class="plan-name">
            <span class="icon-pro">⭐</span>
            PRO
          </h3>
          <p class="plan-description">Best for regular interview preparation</p>
          <div class="plan-price">
            <span class="price-amount">$19.99</span>
            <span class="price-period">/month</span>
            <span class="price-label">Best Value</span>
          </div>
        </div>
        
        <div class="plan-features">
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>100 Screenshots/day</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>100 AI Requests/day</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>Advanced stealth mode</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>Priority support</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>Premium AI models</span>
          </div>
        </div>
        
        <div class="plan-action">
          <button class="plan-button button-primary" id="proButton">Upgrade to Pro</button>
        </div>
      </div>

      <!-- Ultra Plan -->
      <div class="plan-card premium" id="ultraPlan">
        <div class="plan-header">
          <h3 class="plan-name">
            <span class="icon-ultra">👑</span>
            ULTRA
          </h3>
          <p class="plan-description">Maximum power for professional use</p>
          <div class="plan-price">
            <span class="price-amount">$99.99</span>
            <span class="price-period">/month</span>
            <span class="price-label">Max Power</span>
          </div>
        </div>
        
        <div class="plan-features">
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>Unlimited Screenshots</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>Unlimited AI Requests</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>Ultimate stealth mode</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>24/7 priority support</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>All AI models</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <span>Team collaboration</span>
          </div>
        </div>
        
        <div class="plan-action">
          <button class="plan-button button-premium" id="ultraButton">Upgrade to Ultra</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Account Management -->
  <div class="account-section">
    <h2 class="account-title">Account Management</h2>
    <div class="account-grid">
      <div class="account-item">
        <h3 class="account-item-title">
          <span>📊</span>
          Usage History
        </h3>
        <p class="account-item-description">View detailed usage statistics and billing history</p>
        <button class="account-button" id="viewHistoryBtn">View History</button>
      </div>
      
      <div class="account-item">
        <h3 class="account-item-title">
          <span>💳</span>
          Payment Method
        </h3>
        <p class="account-item-description">Update your payment information and billing details</p>
        <button class="account-button" id="updatePaymentBtn">Update Payment</button>
      </div>
      
      <div class="account-item">
        <h3 class="account-item-title">
          <span>⚙️</span>
          Account Settings
        </h3>
        <p class="account-item-description">Manage your account preferences and security settings</p>
        <button class="account-button" id="accountSettingsBtn">Open Settings</button>
      </div>
      
      <div class="account-item">
        <h3 class="account-item-title">
          <span>📞</span>
          Support
        </h3>
        <p class="account-item-description">Get help with your subscription or technical issues</p>
        <button class="account-button" id="contactSupportBtn">Contact Support</button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="subscription-footer">
    <p class="footer-text">
      Secure payments powered by industry-leading encryption. Cancel anytime.
    </p>
    <div class="footer-links">
      <a href="/privacy" class="footer-link">Privacy Policy</a>
      <a href="/terms" class="footer-link">Terms of Service</a>
      <a href="/refund" class="footer-link">Refund Policy</a>
      <a href="/support" class="footer-link">Support</a>
    </div>
  </div>
</div>
`;

// Auto-execute function to inject CSS and HTML
(function() {
  // 🎯 STRICT URL DETECTION - Only load on specific subscription URLs
  const pathname = location.pathname.toLowerCase();
  const hash = location.hash.toLowerCase();
  
  const isSubscriptionPage = pathname === '/subscription' || 
                            pathname === '/subscription/' ||
                            pathname === '/manage' || 
                            pathname === '/manage/' ||
                            pathname === '/account' ||
                            pathname === '/account/' ||
                            pathname.endsWith('/subscription') ||
                            pathname.endsWith('/manage') ||
                            pathname.endsWith('/account') ||
                            hash === '#subscription' ||
                            hash === '#manage' ||
                            hash === '#account';
  
  console.log('🚀 Subscription management component starting...');
  console.log('📍 Current URL:', location.href);
  console.log('📍 Pathname:', pathname);
  console.log('📍 Hash:', hash);
  console.log('📍 Is subscription page?', isSubscriptionPage);
  
  // Only load if this is actually a subscription management page
  if (!isSubscriptionPage) {
    console.log('❌ Not a subscription page, skipping...');
    return;
  }
  
  // Add CSS
  const style = document.createElement('style');
  style.textContent = subscriptionCSS;
  document.head.appendChild(style);
  console.log('✅ Subscription CSS added');
  
  // Add HTML when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeSubscriptionPage();
    });
  } else {
    initializeSubscriptionPage();
  }
  
  function initializeSubscriptionPage() {
    console.log('🔧 Initializing subscription page...');
    
    // Check if subscription content already exists
    if (document.querySelector('.subscription-manage-component')) {
      console.log('✅ Subscription component already loaded');
      return;
    }
    
    // 🎯 USE EXACT SAME LOGIC AS WORKING SIGNUP PAGE
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    console.log('📍 Main content element:', mainContent.tagName);
    
    // 🚀 EXACT SAME INJECTION LOGIC AS SIGNUP
    if (mainContent !== document.body) {
      mainContent.innerHTML = subscriptionHTML;
    } else {
      // If we're using body, insert at the beginning but after header
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        header.insertAdjacentHTML('afterend', subscriptionHTML);
      } else {
        document.body.insertAdjacentHTML('afterbegin', subscriptionHTML);
      }
    }
    
    console.log('✅ Subscription HTML added');
    
    // Initialize subscription functionality
    initializeSubscriptionLogic();
  }
  
  function initializeSubscriptionLogic() {
    console.log('🔧 Initializing subscription logic...');
    
    // 🎯 CHECK AUTHENTICATION USING THE SAME FORMAT AS PROFILEDROPDOWN
    let userEmail = null;
    let isAuthenticated = false;
    
    // Check multiple localStorage keys (same as ProfileDropdown)
    const userStr = localStorage.getItem('supabase_user');
    const sessionStr = localStorage.getItem('steley_session');
    const supabaseSessionStr = localStorage.getItem('supabase_session');
    const tokenStr = localStorage.getItem('supabase.auth.token');
    
    console.log('🔍 Checking authentication...');
    console.log('👤 User data:', userStr ? 'FOUND' : 'NOT FOUND');
    console.log('🔐 Steley session:', sessionStr ? 'FOUND' : 'NOT FOUND');
    console.log('🔐 Supabase session:', supabaseSessionStr ? 'FOUND' : 'NOT FOUND');
    console.log('🎫 Token data:', tokenStr ? 'FOUND' : 'NOT FOUND');
    
    // Try to get user email from any available source
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        if (user.email) {
          userEmail = user.email;
          isAuthenticated = true;
          console.log('✅ User found in user data:', userEmail);
        }
      } catch {
        console.log('❌ Failed to parse user data');
      }
    } else if (sessionStr) {
      try {
        const session = JSON.parse(sessionStr);
        console.log('🔍 Session structure:', session);
        
        // Handle multiple session formats (same as ProfileDropdown)
        if (session.user && session.user.email) {
          userEmail = session.user.email;
          isAuthenticated = true;
          console.log('✅ User found in Supabase session format:', userEmail);
        } else if (session.email && !session.user) {
          userEmail = session.email;
          isAuthenticated = true;
          console.log('✅ User found in login session format:', userEmail);
        }
      } catch {
        console.log('❌ Failed to parse session data');
      }
    }
    
    if (!isAuthenticated) {
      console.log('❌ User not authenticated, redirecting to login');
      alert('Please log in to access your subscription management.');
      window.location.href = '/login';
      return;
    }
    
    console.log('✅ User authenticated:', userEmail);
    
    // Prepare demo user data (since this is a demo without real Supabase)
    const userData = {
      email: userEmail,
      currentPlan: 'FREE',
      isActive: true,
      usage: {
        screenshots: { used: 3, limit: 10 },
        aiRequests: { used: 7, limit: 10 }
      },
      resetTime: new Date(Date.now() + 24 * 60 * 60 * 1000)
    };
    
    console.log('📊 Using demo user data:', userData);
    
    // Update UI with user data
    updateCurrentStatus(userData);
    setupPlanButtons(userData);
    setupAccountButtons();
    
    console.log('✅ Subscription functionality initialized');
  }
  
  function updateCurrentStatus(userData) {
    console.log('🔧 Updating status display...');
    
    const planIcon = document.getElementById('currentPlanIcon');
    const planName = document.getElementById('currentPlanName');
    const statusBadge = document.getElementById('statusBadge');
    const statusText = document.getElementById('statusText');
    const userEmailElement = document.getElementById('userEmail');
    
    // Update plan display
    const planConfigs = {
      'FREE': { icon: '🛡️', name: 'Free Plan', class: 'badge-free' },
      'PRO': { icon: '⭐', name: 'Pro Plan', class: 'badge-active' },
      'ULTRA': { icon: '👑', name: 'Ultra Plan', class: 'badge-active' }
    };
    
    const config = planConfigs[userData.currentPlan] || planConfigs['FREE'];
    
    if (planIcon) planIcon.textContent = config.icon;
    if (planName) planName.textContent = config.name;
    if (userEmailElement) userEmailElement.textContent = userData.email;
    
    if (statusBadge) {
      statusBadge.className = `status-badge ${config.class}`;
    }
    if (statusText) {
      statusText.textContent = userData.isActive ? 'Active' : 'Expired';
    }
    
    // Update usage statistics
    updateUsageStats(userData.usage, userData.resetTime);
    
    console.log('✅ Status display updated');
  }
  
  function updateUsageStats(usage, resetTime) {
    console.log('🔧 Updating usage stats...');
    
    // Screenshots
    const screenshotUsage = document.getElementById('screenshotUsage');
    const screenshotLimit = document.getElementById('screenshotLimit');
    const screenshotBar = document.getElementById('screenshotBar');
    
    if (screenshotUsage) screenshotUsage.textContent = usage.screenshots.used;
    if (screenshotLimit) screenshotLimit.textContent = `of ${usage.screenshots.limit} daily limit`;
    if (screenshotBar) {
      const percentage = (usage.screenshots.used / usage.screenshots.limit) * 100;
      screenshotBar.style.width = `${percentage}%`;
      screenshotBar.className = `usage-fill ${getUsageClass(percentage)}`;
    }
    
    // AI Requests
    const aiUsage = document.getElementById('aiUsage');
    const aiLimit = document.getElementById('aiLimit');
    const aiBar = document.getElementById('aiBar');
    
    if (aiUsage) aiUsage.textContent = usage.aiRequests.used;
    if (aiLimit) aiLimit.textContent = `of ${usage.aiRequests.limit} daily limit`;
    if (aiBar) {
      const percentage = (usage.aiRequests.used / usage.aiRequests.limit) * 100;
      aiBar.style.width = `${percentage}%`;
      aiBar.className = `usage-fill ${getUsageClass(percentage)}`;
    }
    
    // Reset time
    const resetTimeElement = document.getElementById('resetTime');
    if (resetTimeElement && resetTime) {
      const timeString = resetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      resetTimeElement.textContent = timeString;
    }
    
    console.log('✅ Usage stats updated');
  }
  
  function getUsageClass(percentage) {
    if (percentage < 60) return 'usage-low';
    if (percentage < 90) return 'usage-medium';
    return 'usage-high';
  }
  
  function setupPlanButtons(userData) {
    console.log('🔧 Setting up plan buttons...');
    
    const freeButton = document.getElementById('freeButton');
    const proButton = document.getElementById('proButton');
    const ultraButton = document.getElementById('ultraButton');
    
    // Update button states based on current plan
    [freeButton, proButton, ultraButton].forEach(btn => {
      if (btn) {
        btn.addEventListener('click', function() {
          const planType = this.id.replace('Button', '').toUpperCase();
          handlePlanUpgrade(planType, userData);
        });
      }
    });
    
    // Update current plan styling
    updatePlanCardStyling(userData.currentPlan);
    
    console.log('✅ Plan buttons setup complete');
  }
  
  function updatePlanCardStyling(currentPlan) {
    const planCards = {
      'FREE': { card: document.getElementById('freePlan'), button: document.getElementById('freeButton') },
      'PRO': { card: document.getElementById('proPlan'), button: document.getElementById('proButton') },
      'ULTRA': { card: document.getElementById('ultraPlan'), button: document.getElementById('ultraButton') }
    };
    
    Object.entries(planCards).forEach(([plan, elements]) => {
      const { card, button } = elements;
      if (!card || !button) return;
      
      if (plan === currentPlan) {
        card.classList.add('current');
        button.textContent = '✓ Current Plan';
        button.className = 'plan-button button-current';
      } else {
        card.classList.remove('current');
        if (plan === 'FREE') {
          button.textContent = 'Downgrade to Free';
          button.className = 'plan-button button-secondary';
        } else if (plan === 'PRO') {
          button.textContent = 'Upgrade to Pro';
          button.className = 'plan-button button-primary';
        } else if (plan === 'ULTRA') {
          button.textContent = 'Upgrade to Ultra';
          button.className = 'plan-button button-premium';
        }
      }
    });
  }
  
  function handlePlanUpgrade(planType, userData) {
    console.log(`🚀 ${planType} plan button clicked`);
    
    // Show loading state
    const button = document.getElementById(`${planType.toLowerCase()}Button`);
    if (!button) return;
    
    const originalText = button.innerHTML;
    button.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
        <div class="loading-spinner"></div>
        Processing...
      </div>
    `;
    button.disabled = true;
    
    // Simulate processing
    setTimeout(() => {
      if (planType === userData.currentPlan) {
        alert('You are already on this plan!');
      } else if (planType === 'FREE') {
        const confirmDowngrade = confirm('Are you sure you want to downgrade to the FREE plan? You will lose access to premium features.');
        if (confirmDowngrade) {
          alert('Downgrade successful! This is a demo - in production, this would update your subscription.');
        }
      } else {
        const prices = { PRO: '$19.99', ULTRA: '$99.99' };
        const confirmUpgrade = confirm(`Upgrade to ${planType} plan for ${prices[planType]}/month?\n\nNote: This is a demo. In production, this would redirect to Stripe checkout.`);
        if (confirmUpgrade) {
          alert('Upgrade successful! This is a demo - in production, this would process payment and update your subscription.');
        }
      }
      
      // Reset button
      button.innerHTML = originalText;
      button.disabled = false;
    }, 2000);
  }
  
  function setupAccountButtons() {
    console.log('🔧 Setting up account buttons...');
    
    const buttons = [
      { id: 'viewHistoryBtn', action: 'View usage history' },
      { id: 'updatePaymentBtn', action: 'Update payment method' },
      { id: 'accountSettingsBtn', action: 'Open account settings' },
      { id: 'contactSupportBtn', action: 'Contact support' }
    ];
    
    buttons.forEach(({ id, action }) => {
      const button = document.getElementById(id);
      if (button) {
        button.addEventListener('click', function() {
          console.log(`🔧 ${action} clicked`);
          alert(`${action} functionality would be implemented here in a real application!`);
        });
      }
    });
    
    console.log('✅ Account buttons setup complete');
  }
})(); 
