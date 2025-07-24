// Steley Subscription Management Page Combined - CSS + HTML Content (Component Only) - v3.0 Program Settings Style
const subscriptionCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Main Container - Exact Program Style */
.subscription-manage-component{
  max-width: 1400px;
  width: 100%;
  margin: 40px auto;
  padding: 0;
  position: relative;
  z-index: 999;
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(20px);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  display: flex;
  min-height: 600px;
  overflow: hidden;
}

/* Left Sidebar Navigation - Exact Match */
.subscription-sidebar{
  width: 240px;
  background: rgba(0, 0, 0, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

/* User Info Header in Sidebar */
.sidebar-user-info{
  padding: 20px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
}

.user-email{
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 2px 0;
  line-height: 1.3;
}

.user-plan{
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.3;
}

/* Navigation Items */
.sidebar-nav{
  flex: 1;
  padding: 12px 0;
}

.nav-item{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  margin: 0 8px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.15s;
  border: none;
  background: none;
  width: calc(100% - 16px);
  text-align: left;
}

.nav-item:hover{
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
}

.nav-item:hover .nav-icon{
  color: rgba(255, 255, 255, 0.8);
}

.nav-item.active{
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-weight: 500;
}

.nav-item.active .nav-icon{
  color: rgba(255, 255, 255, 0.9);
}

.nav-icon{
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.15s;
}

/* Search Bar */
.sidebar-search{
  padding: 12px 16px;
  margin: 8px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-family: inherit;
}

.sidebar-search::placeholder{
  color: rgba(255, 255, 255, 0.4);
}

.sidebar-search:focus{
  outline: none;
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
}

/* Right Content Area - Exact Match */
.subscription-content{
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

/* Content Header */
.content-header{
  padding: 20px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.01);
  flex-shrink: 0;
}

.content-title{
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

/* Content Body */
.content-body{
  flex: 1;
  padding: 0;
}

/* Section Groups */
.content-section{
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.content-section:last-child{
  border-bottom: none;
}

.section-header{
  padding: 20px 32px 8px 32px;
  margin: 0;
}

.section-title{
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Settings Items - Exact Match */
.settings-item{
  padding: 12px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.15s;
  min-height: 44px;
}

.settings-item:hover{
  background: rgba(255, 255, 255, 0.02);
}

.item-info{
  display: flex;
  flex-direction: column;
  flex: 1;
}

.item-title{
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 2px 0;
  line-height: 1.3;
}

.item-description{
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.3;
}

/* Action Buttons - Exact Match */
.action-button{
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.15s;
  min-width: 54px;
  text-align: center;
  flex-shrink: 0;
}

.action-button:hover{
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.action-button.primary{
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: rgba(59, 130, 246, 0.9);
}

.action-button.success{
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.4);
  color: rgba(34, 197, 94, 0.9);
}

/* Usage Display */
.usage-display{
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.usage-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.usage-item{
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  padding: 12px;
}

.usage-label{
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 4px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.usage-value{
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 4px 0;
}

.usage-limit{
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;
}

.usage-bar{
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 8px;
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

/* Toggle Switches - Program Style */
.toggle-switch{
  width: 36px;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.toggle-switch.enabled{
  background: rgba(34, 197, 94, 0.3);
  border-color: rgba(34, 197, 94, 0.5);
}

.toggle-slider{
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.toggle-switch.enabled .toggle-slider{
  transform: translateX(16px);
}

/* Plan Badge */
.plan-badge{
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-free{
  background: rgba(107, 114, 128, 0.2);
  color: rgba(107, 114, 128, 0.9);
  border: 1px solid rgba(107, 114, 128, 0.3);
}

.badge-pro{
  background: rgba(59, 130, 246, 0.2);
  color: rgba(59, 130, 246, 0.9);
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.badge-ultra{
  background: rgba(168, 85, 247, 0.2);
  color: rgba(168, 85, 247, 0.9);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

/* Content Pages (Hidden by default) */
.content-page{
  display: none;
}

.content-page.active{
  display: block;
}

/* Loading Spinner */
.loading-spinner{
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 6px;
}

@keyframes spin{
  to{ transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 768px){
  .subscription-manage-component{
    flex-direction: column;
    margin: 20px;
    border-radius: 8px;
    min-height: auto;
  }
  
  .subscription-sidebar{
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .sidebar-nav{
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    padding: 8px;
  }
  
  .nav-item{
    margin: 0 4px;
    min-width: 120px;
    justify-content: center;
  }
  
  .content-header,
  .section-header,
  .settings-item,
  .usage-display{
    padding-left: 20px;
    padding-right: 20px;
  }
}
`;

const subscriptionHTML = `
<div class="subscription-manage-component">
  <!-- Left Sidebar Navigation -->
  <div class="subscription-sidebar">
    <!-- User Info -->
    <div class="sidebar-user-info">
      <div class="user-email" id="userEmail">Loading...</div>
      <div class="user-plan" id="userPlan">Loading...</div>
    </div>

    <!-- Search -->
    <input type="text" class="sidebar-search" placeholder="Search settings Ctrl+F" id="settingsSearch">

         <!-- Navigation -->
     <div class="sidebar-nav">
       <button class="nav-item active" data-page="general">
         <span class="nav-icon">⚙</span>
         <span>General</span>
       </button>
       
       <button class="nav-item" data-page="subscription">
         <span class="nav-icon">∞</span>
         <span>Subscription</span>
       </button>
       
       <button class="nav-item" data-page="usage">
         <span class="nav-icon">→</span>
         <span>Usage</span>
       </button>
       
       <button class="nav-item" data-page="billing">
         <span class="nav-icon">$</span>
         <span>Billing</span>
       </button>
       
       <button class="nav-item" data-page="security">
         <span class="nav-icon">◦</span>
         <span>Security</span>
       </button>
       
       <button class="nav-item" data-page="preferences">
         <span class="nav-icon">≫</span>
         <span>Preferences</span>
       </button>
       
       <button class="nav-item" data-page="support">
         <span class="nav-icon">?</span>
         <span>Support</span>
       </button>
     </div>
  </div>

  <!-- Right Content Area -->
  <div class="subscription-content">
    <!-- General Page (Default) -->
    <div class="content-page active" id="generalPage">
      <div class="content-header">
        <h1 class="content-title">General</h1>
      </div>
      
      <div class="content-body">
                 <div class="content-section">
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">⚙</span>
                 Manage Account
               </div>
               <div class="item-description">Manage your account and billing</div>
             </div>
             <button class="action-button" id="manageAccountBtn">Open</button>
      </div>
    </div>
    
        <div class="content-section">
          <div class="section-header">
            <div class="section-title">Current Plan</div>
          </div>
          
          <div class="settings-item">
            <div class="item-info">
              <div class="item-title">
                <span id="currentPlanName">Free Plan</span>
                <span class="plan-badge badge-free" id="planBadge">Free</span>
              </div>
              <div class="item-description" id="planDescription">10 screenshots/day, 10 AI requests/day</div>
            </div>
            <button class="action-button" id="changePlanBtn">Change</button>
          </div>
        </div>

        <div class="content-section">
          <div class="section-header">
            <div class="section-title">Preferences</div>
          </div>
          
                     <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Auto-Save Screenshots
               </div>
               <div class="item-description">Automatically save screenshots to your device</div>
             </div>
             <div class="toggle-switch" id="autoSaveToggle">
               <div class="toggle-slider"></div>
             </div>
           </div>
           
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Privacy Mode
               </div>
               <div class="item-description">Enhanced privacy protection during screenshots</div>
             </div>
             <div class="toggle-switch enabled" id="privacyToggle">
               <div class="toggle-slider"></div>
             </div>
           </div>
        </div>
      </div>
    </div>

    <!-- Subscription Page -->
    <div class="content-page" id="subscriptionPage">
      <div class="content-header">
        <h1 class="content-title">Subscription</h1>
      </div>
      
      <div class="content-body">
        <div class="content-section">
          <div class="section-header">
            <div class="section-title">Available Plans</div>
          </div>
          
                     <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Free Plan
               </div>
               <div class="item-description">10 screenshots/day, 10 AI requests/day, basic features</div>
             </div>
             <div style="display: flex; align-items: center; gap: 12px;">
               <span style="font-size: 12px; color: rgba(255,255,255,0.6);">$0/month</span>
               <button class="action-button success" id="freeBtn">Current</button>
             </div>
           </div>
           
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Pro Plan
               </div>
               <div class="item-description">100 screenshots/day, 100 AI requests/day, premium features</div>
             </div>
             <div style="display: flex; align-items: center; gap: 12px;">
               <span style="font-size: 12px; color: rgba(255,255,255,0.6);">$19.99/month</span>
               <button class="action-button primary" id="proBtn">Upgrade</button>
             </div>
           </div>
           
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Ultra Plan
               </div>
               <div class="item-description">Unlimited usage, all AI models, priority support</div>
             </div>
             <div style="display: flex; align-items: center; gap: 12px;">
               <span style="font-size: 12px; color: rgba(255,255,255,0.6);">$99.99/month</span>
               <button class="action-button primary" id="ultraBtn">Upgrade</button>
             </div>
           </div>
        </div>
      </div>
    </div>

    <!-- Usage Page -->
    <div class="content-page" id="usagePage">
      <div class="content-header">
        <h1 class="content-title">Usage</h1>
      </div>
      
      <div class="usage-display">
        <div class="usage-grid">
          <div class="usage-item">
            <div class="usage-label">Screenshots Today</div>
            <div class="usage-value" id="screenshotUsage">3</div>
            <div class="usage-limit" id="screenshotLimit">of 10 daily limit</div>
        <div class="usage-bar">
              <div class="usage-fill usage-low" id="screenshotBar" style="width: 30%"></div>
        </div>
      </div>
          
          <div class="usage-item">
            <div class="usage-label">AI Requests Today</div>
            <div class="usage-value" id="aiUsage">7</div>
            <div class="usage-limit" id="aiLimit">of 10 daily limit</div>
        <div class="usage-bar">
              <div class="usage-fill usage-medium" id="aiBar" style="width: 70%"></div>
        </div>
      </div>
          
          <div class="usage-item">
            <div class="usage-label">Next Reset</div>
            <div class="usage-value" id="resetTime">23:45</div>
            <div class="usage-limit">Daily limits reset</div>
      </div>
    </div>
  </div>

      <div class="content-body">
                 <div class="content-section">
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">→</span>
                 View Usage History
          </div>
               <div class="item-description">Detailed usage statistics and trends</div>
             </div>
             <button class="action-button" id="viewHistoryBtn">View</button>
        </div>
        
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">↓</span>
                 Export Usage Data
          </div>
               <div class="item-description">Download your usage data as CSV</div>
          </div>
             <button class="action-button" id="exportDataBtn">Export</button>
          </div>
         </div>
          </div>
        </div>
        
    <!-- Billing Page -->
    <div class="content-page" id="billingPage">
      <div class="content-header">
        <h1 class="content-title">Billing</h1>
        </div>
      
      <div class="content-body">
                 <div class="content-section">
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">$</span>
                 Payment Method
               </div>
               <div class="item-description">Update payment information and billing details</div>
             </div>
             <button class="action-button" id="updatePaymentBtn">Update</button>
      </div>

           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">≡</span>
                 Billing History
          </div>
               <div class="item-description">View past invoices and payment history</div>
             </div>
             <button class="action-button" id="billingHistoryBtn">View</button>
        </div>
        
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">↓</span>
                 Download Receipts
          </div>
               <div class="item-description">Download receipts for tax purposes</div>
          </div>
             <button class="action-button" id="downloadReceiptsBtn">Download</button>
          </div>
          </div>
          </div>
        </div>
        
    <!-- Security Page -->
    <div class="content-page" id="securityPage">
      <div class="content-header">
        <h1 class="content-title">Security</h1>
        </div>
      
      <div class="content-body">
                 <div class="content-section">
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Change Password
               </div>
               <div class="item-description">Update your account password</div>
             </div>
             <button class="action-button" id="changePasswordBtn">Change</button>
      </div>

           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Two-Factor Authentication
          </div>
               <div class="item-description">Add extra security to your account</div>
             </div>
             <button class="action-button" id="enable2FABtn">Enable</button>
        </div>
        
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Active Sessions
          </div>
               <div class="item-description">Manage devices and active sessions</div>
          </div>
             <button class="action-button" id="manageSessionsBtn">Manage</button>
          </div>
          </div>
          </div>
          </div>

    <!-- Preferences Page -->
    <div class="content-page" id="preferencesPage">
      <div class="content-header">
        <h1 class="content-title">Preferences</h1>
        </div>
        
      <div class="content-body">
                 <div class="content-section">
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Theme
        </div>
               <div class="item-description">Choose your preferred theme</div>
      </div>
             <button class="action-button" id="themeBtn">Dark</button>
           </div>
           
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Notifications
               </div>
               <div class="item-description">Configure notification preferences</div>
             </div>
             <div class="toggle-switch enabled" id="notificationsToggle">
               <div class="toggle-slider"></div>
    </div>
  </div>

           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">◦</span>
                 Auto-Update
               </div>
               <div class="item-description">Automatically update Steley when new versions are available</div>
             </div>
             <div class="toggle-switch enabled" id="autoUpdateToggle">
               <div class="toggle-slider"></div>
             </div>
           </div>
         </div>
      </div>
      </div>
      
    <!-- Support Page -->
    <div class="content-page" id="supportPage">
      <div class="content-header">
        <h1 class="content-title">Support</h1>
      </div>
      
      <div class="content-body">
                 <div class="content-section">
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">?</span>
                 Contact Support
               </div>
               <div class="item-description">Get help with your subscription or technical issues</div>
             </div>
             <button class="action-button" id="contactSupportBtn">Contact</button>
      </div>
      
           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">≡</span>
                 Documentation
      </div>
               <div class="item-description">View help articles and user guides</div>
    </div>
             <button class="action-button" id="docsBtn">Open</button>
  </div>

           <div class="settings-item">
             <div class="item-info">
               <div class="item-title">
                 <span style="color: rgba(255,255,255,0.5); margin-right: 8px;">→</span>
                 Send Feedback
    </div>
               <div class="item-description">Share your thoughts and suggestions</div>
             </div>
             <button class="action-button" id="feedbackBtn">Send</button>
           </div>
         </div>
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
  
  console.log('🚀 Subscription management component starting (v3.0 - Program Settings Style)...');
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
    
    // Initialize the interface
    initializeNavigation();
    updateUserInfo(userData);
    setupAllButtons(userData);
    setupToggles();
    
    console.log('✅ Subscription functionality initialized');
  }
  
  function initializeNavigation() {
    console.log('🔧 Setting up navigation...');
    
    const navItems = document.querySelectorAll('.nav-item');
    const contentPages = document.querySelectorAll('.content-page');
    
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        const targetPage = this.getAttribute('data-page');
        console.log('📄 Switching to page:', targetPage);
        
        // Update active nav item
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        // Show target content page
        contentPages.forEach(page => page.classList.remove('active'));
        const targetElement = document.getElementById(targetPage + 'Page');
        if (targetElement) {
          targetElement.classList.add('active');
        }
      });
    });
    
    console.log('✅ Navigation setup complete');
  }
  
  function updateUserInfo(userData) {
    console.log('🔧 Updating user info...');
    
    const userEmailElement = document.getElementById('userEmail');
    const userPlanElement = document.getElementById('userPlan');
    const currentPlanNameElement = document.getElementById('currentPlanName');
    const planBadgeElement = document.getElementById('planBadge');
    const planDescriptionElement = document.getElementById('planDescription');
    
    // Update user info in sidebar
    if (userEmailElement) userEmailElement.textContent = userData.email;
    if (userPlanElement) userPlanElement.textContent = userData.currentPlan + ' Plan';
    
    // Update current plan info
    const planConfigs = {
      'FREE': { 
        name: 'Free Plan', 
        description: '10 screenshots/day, 10 AI requests/day',
        badge: 'Free',
        badgeClass: 'badge-free'
      },
      'PRO': { 
        name: 'Pro Plan', 
        description: '100 screenshots/day, 100 AI requests/day',
        badge: 'Pro',
        badgeClass: 'badge-pro'
      },
      'ULTRA': { 
        name: 'Ultra Plan', 
        description: 'Unlimited usage, all AI models',
        badge: 'Ultra',
        badgeClass: 'badge-ultra'
      }
    };
    
    const config = planConfigs[userData.currentPlan] || planConfigs['FREE'];
    
    if (currentPlanNameElement) currentPlanNameElement.textContent = config.name;
    if (planDescriptionElement) planDescriptionElement.textContent = config.description;
    if (planBadgeElement) {
      planBadgeElement.textContent = config.badge;
      planBadgeElement.className = `plan-badge ${config.badgeClass}`;
    }
    
    // Update usage stats
    updateUsageStats(userData.usage, userData.resetTime);
    
    console.log('✅ User info updated');
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
  
  function setupAllButtons(userData) {
    console.log('🔧 Setting up all buttons...');
    
    // Plan buttons
    const planButtons = ['freeBtn', 'proBtn', 'ultraBtn'];
    planButtons.forEach(buttonId => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener('click', function() {
          const planType = buttonId.replace('Btn', '').toUpperCase();
          handlePlanUpgrade(planType, userData);
        });
      }
    });
    
    // Action buttons
    const actionButtons = {
      'manageAccountBtn': 'Manage account',
      'changePlanBtn': 'Change plan',
      'updatePaymentBtn': 'Update payment method',
      'viewHistoryBtn': 'View usage history',
      'billingHistoryBtn': 'View billing history',
      'downloadReceiptsBtn': 'Download receipts',
      'changePasswordBtn': 'Change password',
      'enable2FABtn': 'Enable two-factor authentication',
      'manageSessionsBtn': 'Manage sessions',
      'themeBtn': 'Change theme',
      'contactSupportBtn': 'Contact support',
      'docsBtn': 'Open documentation',
      'feedbackBtn': 'Send feedback',
      'exportDataBtn': 'Export data'
    };
    
    Object.entries(actionButtons).forEach(([buttonId, action]) => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener('click', function() {
          console.log(`🔧 ${action} clicked`);
          alert(`${action} functionality would be implemented here in a real application!`);
        });
      }
    });
    
    console.log('✅ All buttons setup complete');
  }
  
  function setupToggles() {
    console.log('🔧 Setting up toggle switches...');
    
    const toggles = ['autoSaveToggle', 'privacyToggle', 'notificationsToggle', 'autoUpdateToggle'];
    
    toggles.forEach(toggleId => {
      const toggle = document.getElementById(toggleId);
      if (toggle) {
        toggle.addEventListener('click', function() {
          this.classList.toggle('enabled');
          const isEnabled = this.classList.contains('enabled');
          console.log(`🔧 ${toggleId} toggled:`, isEnabled);
        });
      }
    });
    
    console.log('✅ Toggle switches setup complete');
  }
  
  function handlePlanUpgrade(planType, userData) {
    console.log(`🚀 ${planType} plan button clicked`);
    
    // Show loading state
    const button = document.getElementById(`${planType.toLowerCase()}Btn`);
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
})(); 
