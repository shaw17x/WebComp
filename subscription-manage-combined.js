// Steley Subscription Management Page Combined - CSS + HTML Content (Component Only) - v2.0 Program Style
const subscriptionCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Subscription Management Container - Program Style */
.subscription-manage-component{
  max-width: 1000px;
  width: 100%;
  margin: 40px auto;
  padding: 0;
  position: relative;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(20px);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

/* Header Section - Program Style */
.subscription-header{
  padding: 24px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px 12px 0 0;
}

.subscription-title{
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.subscription-subtitle{
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 400;
}

/* Main Content */
.subscription-content{
  padding: 0;
}

/* Section Styles - Program Style */
.subscription-section{
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.subscription-section:last-child{
  border-bottom: none;
  border-radius: 0 0 12px 12px;
}

.section-header{
  padding: 20px 32px 16px 32px;
  margin: 0;
}

.section-title{
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 4px 0;
}

.section-description{
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.4;
}

/* Current Plan Display - Program Style */
.current-plan-item{
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.current-plan-item:hover{
  background: rgba(255, 255, 255, 0.02);
}

.current-plan-info{
  display: flex;
  align-items: center;
  gap: 12px;
}

.plan-icon{
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.plan-details{
  display: flex;
  flex-direction: column;
}

.plan-name{
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

.plan-description{
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.3;
}

.plan-status{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.status-active{
  background: rgba(34, 197, 94, 0.1);
  color: rgba(34, 197, 94, 0.9);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.status-free{
  background: rgba(107, 114, 128, 0.1);
  color: rgba(107, 114, 128, 0.9);
  border: 1px solid rgba(107, 114, 128, 0.2);
}

/* Usage Stats - Program Style */
.usage-stats{
  padding: 16px 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.usage-item{
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  padding: 16px;
  transition: all 0.2s;
}

.usage-item:hover{
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
}

.usage-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.usage-label{
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.usage-value{
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.usage-bar{
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.usage-fill{
  height: 100%;
  border-radius: 2px;
  transition: all 0.3s;
}

.usage-low{ background: rgba(34, 197, 94, 0.8); }
.usage-medium{ background: rgba(234, 179, 8, 0.8); }
.usage-high{ background: rgba(239, 68, 68, 0.8); }

/* Plan Options - Program Style */
.plan-options{
  padding: 0;
}

.plan-option{
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.plan-option:hover{
  background: rgba(255, 255, 255, 0.02);
}

.plan-option:last-child{
  border-bottom: none;
}

.plan-option-info{
  display: flex;
  align-items: center;
  gap: 12px;
}

.plan-option-details{
  display: flex;
  flex-direction: column;
}

.plan-option-name{
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 2px 0;
  line-height: 1.3;
}

.plan-option-description{
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.3;
}

.plan-price{
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-right: 12px;
}

.plan-button{
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.2s;
  min-width: 64px;
  text-align: center;
}

.plan-button:hover{
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.plan-button.current{
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  color: rgba(34, 197, 94, 0.9);
}

.plan-button.primary{
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: rgba(59, 130, 246, 0.9);
}

.plan-button.premium{
  background: rgba(168, 85, 247, 0.2);
  border-color: rgba(168, 85, 247, 0.4);
  color: rgba(168, 85, 247, 0.9);
}

/* Account Management - Program Style */
.account-options{
  padding: 0;
}

.account-option{
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.account-option:hover{
  background: rgba(255, 255, 255, 0.02);
}

.account-option:last-child{
  border-bottom: none;
}

.account-option-info{
  display: flex;
  align-items: center;
  gap: 12px;
}

.account-icon{
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}

.account-option-details{
  display: flex;
  flex-direction: column;
}

.account-option-name{
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 2px 0;
  line-height: 1.3;
}

.account-option-description{
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.3;
}

.account-button{
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.2s;
  min-width: 48px;
  text-align: center;
}

.account-button:hover{
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

/* User Info Display */
.user-info{
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-details{
  display: flex;
  flex-direction: column;
}

.user-email{
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 2px 0;
}

.user-status{
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

/* Loading States */
.loading-spinner{
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin{
  to{ transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 768px){
  .subscription-manage-component{
    margin: 20px;
    border-radius: 8px;
  }
  
  .subscription-header,
  .section-header,
  .current-plan-item,
  .usage-stats,
  .plan-option,
  .account-option,
  .user-info{
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .usage-stats{
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .plan-option,
  .account-option{
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .plan-option-info,
  .account-option-info{
    width: 100%;
  }
}
`;

const subscriptionHTML = `
<div class="subscription-manage-component">
  <!-- Header -->
  <div class="subscription-header">
    <h1 class="subscription-title">
      <span>⚙️</span>
      Subscription Management
    </h1>
    <p class="subscription-subtitle">Manage your account and billing preferences</p>
  </div>

  <div class="subscription-content">
    <!-- Current Plan Section -->
    <div class="subscription-section">
      <div class="section-header">
        <h2 class="section-title">Current Plan</h2>
        <p class="section-description">Your active subscription and usage information</p>
      </div>
      
      <div class="current-plan-item">
        <div class="current-plan-info">
          <div class="plan-icon" id="currentPlanIcon">🛡️</div>
          <div class="plan-details">
            <div class="plan-name" id="currentPlanName">Loading...</div>
            <div class="plan-description" id="currentPlanDescription">Loading subscription details...</div>
          </div>
        </div>
        <div class="plan-status status-free" id="planStatus">
          <span>●</span>
          <span id="statusText">Loading...</span>
        </div>
      </div>

      <div class="usage-stats">
        <div class="usage-item">
          <div class="usage-header">
            <span class="usage-label">Daily Screenshots</span>
            <span class="usage-value" id="screenshotUsage">0/0</span>
          </div>
          <div class="usage-bar">
            <div class="usage-fill usage-low" id="screenshotBar" style="width: 0%"></div>
          </div>
        </div>
        
        <div class="usage-item">
          <div class="usage-header">
            <span class="usage-label">Daily AI Requests</span>
            <span class="usage-value" id="aiUsage">0/0</span>
          </div>
          <div class="usage-bar">
            <div class="usage-fill usage-low" id="aiBar" style="width: 0%"></div>
          </div>
        </div>
        
        <div class="usage-item">
          <div class="usage-header">
            <span class="usage-label">Reset Time</span>
            <span class="usage-value" id="resetTime">--:--</span>
          </div>
          <div style="font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 4px;">
            Daily limits reset automatically
          </div>
        </div>
      </div>
    </div>

    <!-- Available Plans Section -->
    <div class="subscription-section">
      <div class="section-header">
        <h2 class="section-title">Available Plans</h2>
        <p class="section-description">Upgrade or change your subscription plan</p>
      </div>
      
      <div class="plan-options">
        <div class="plan-option" id="freePlan">
          <div class="plan-option-info">
            <div class="plan-icon">🛡️</div>
            <div class="plan-option-details">
              <div class="plan-option-name">Free Plan</div>
              <div class="plan-option-description">10 screenshots/day, 10 AI requests/day, basic features</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span class="plan-price">$0/month</span>
            <button class="plan-button current" id="freeButton">Current</button>
          </div>
        </div>
        
        <div class="plan-option" id="proPlan">
          <div class="plan-option-info">
            <div class="plan-icon">⭐</div>
            <div class="plan-option-details">
              <div class="plan-option-name">Pro Plan</div>
              <div class="plan-option-description">100 screenshots/day, 100 AI requests/day, premium features</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span class="plan-price">$19.99/month</span>
            <button class="plan-button primary" id="proButton">Upgrade</button>
          </div>
        </div>
        
        <div class="plan-option" id="ultraPlan">
          <div class="plan-option-info">
            <div class="plan-icon">👑</div>
            <div class="plan-option-details">
              <div class="plan-option-name">Ultra Plan</div>
              <div class="plan-option-description">Unlimited usage, all AI models, priority support</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span class="plan-price">$99.99/month</span>
            <button class="plan-button premium" id="ultraButton">Upgrade</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Account Management Section -->
    <div class="subscription-section">
      <div class="section-header">
        <h2 class="section-title">Account</h2>
        <p class="section-description">Manage your account settings and preferences</p>
      </div>
      
      <div class="account-options">
        <div class="account-option">
          <div class="account-option-info">
            <div class="account-icon">💳</div>
            <div class="account-option-details">
              <div class="account-option-name">Payment Method</div>
              <div class="account-option-description">Update payment information and billing details</div>
            </div>
          </div>
          <button class="account-button" id="updatePaymentBtn">Update</button>
        </div>
        
        <div class="account-option">
          <div class="account-option-info">
            <div class="account-icon">📊</div>
            <div class="account-option-details">
              <div class="account-option-name">Usage History</div>
              <div class="account-option-description">View detailed usage statistics and billing history</div>
            </div>
          </div>
          <button class="account-button" id="viewHistoryBtn">View</button>
        </div>
        
        <div class="account-option">
          <div class="account-option-info">
            <div class="account-icon">🔐</div>
            <div class="account-option-details">
              <div class="account-option-name">Security Settings</div>
              <div class="account-option-description">Manage password, two-factor authentication, and security</div>
            </div>
          </div>
          <button class="account-button" id="securityBtn">Open</button>
        </div>
        
        <div class="account-option">
          <div class="account-option-info">
            <div class="account-icon">📞</div>
            <div class="account-option-details">
              <div class="account-option-name">Support</div>
              <div class="account-option-description">Get help with your subscription or technical issues</div>
            </div>
          </div>
          <button class="account-button" id="contactSupportBtn">Contact</button>
        </div>
      </div>
    </div>

    <!-- User Info Footer -->
    <div class="user-info">
      <div class="user-details">
        <div class="user-email" id="userEmail">Loading...</div>
        <div class="user-status">Account Status: Active</div>
      </div>
      <div style="font-size: 11px; color: rgba(255,255,255,0.4);">
        Last updated: <span id="lastUpdated">--</span>
      </div>
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
    const planDescription = document.getElementById('currentPlanDescription');
    const planStatus = document.getElementById('planStatus');
    const statusText = document.getElementById('statusText');
    const userEmailElement = document.getElementById('userEmail');
    
    // Update plan display
    const planConfigs = {
      'FREE': { icon: '🛡️', name: 'Free Plan', description: '10 screenshots/day, 10 AI requests/day, basic features', class: 'status-free' },
      'PRO': { icon: '⭐', name: 'Pro Plan', description: '100 screenshots/day, 100 AI requests/day, premium features', class: 'status-active' },
      'ULTRA': { icon: '👑', name: 'Ultra Plan', description: 'Unlimited usage, all AI models, priority support', class: 'status-active' }
    };
    
    const config = planConfigs[userData.currentPlan] || planConfigs['FREE'];
    
    if (planIcon) planIcon.textContent = config.icon;
    if (planName) planName.textContent = config.name;
    if (planDescription) planDescription.textContent = config.description;
    if (userEmailElement) userEmailElement.textContent = userData.email;
    
    if (planStatus) {
      planStatus.className = `plan-status ${config.class}`;
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
    const screenshotBar = document.getElementById('screenshotBar');
    
    if (screenshotUsage) screenshotUsage.textContent = `${usage.screenshots.used}/${usage.screenshots.limit}`;
    if (screenshotBar) {
      const percentage = (usage.screenshots.used / usage.screenshots.limit) * 100;
      screenshotBar.style.width = `${percentage}%`;
      screenshotBar.className = `usage-fill ${getUsageClass(percentage)}`;
    }
    
    // AI Requests
    const aiUsage = document.getElementById('aiUsage');
    const aiBar = document.getElementById('aiBar');
    
    if (aiUsage) aiUsage.textContent = `${usage.aiRequests.used}/${usage.aiRequests.limit}`;
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
    const planButtons = {
      'FREE': { button: document.getElementById('freeButton') },
      'PRO': { button: document.getElementById('proButton') },
      'ULTRA': { button: document.getElementById('ultraButton') }
    };
    
    Object.entries(planButtons).forEach(([plan, elements]) => {
      const { button } = elements;
      if (!button) return;
      
      if (plan === currentPlan) {
        button.textContent = '✓ Current Plan';
        button.className = 'plan-button current';
      } else {
        if (plan === 'FREE') {
          button.textContent = 'Downgrade to Free';
          button.className = 'plan-button';
        } else if (plan === 'PRO') {
          button.textContent = 'Upgrade to Pro';
          button.className = 'plan-button primary';
        } else if (plan === 'ULTRA') {
          button.textContent = 'Upgrade to Ultra';
          button.className = 'plan-button premium';
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
      { id: 'updatePaymentBtn', action: 'Update payment method' },
      { id: 'viewHistoryBtn', action: 'View usage history' },
      { id: 'securityBtn', action: 'Open account settings' },
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
