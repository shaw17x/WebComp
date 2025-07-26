// Enhanced Subscription Management Page - v4.0 with Real Supabase Integration
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

.action-button:disabled{
  opacity: 0.5;
  cursor: not-allowed;
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

.action-button.danger{
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.4);
  color: rgba(239, 68, 68, 0.9);
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

/* Modal Styles */
.modal-overlay{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(8px);
}

.modal-content{
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 24px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.modal-title{
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.modal-close{
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
}

.modal-close:hover{
  color: #ffffff;
}

.modal-body{
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.modal-footer{
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 20px;
}

/* Form Styles */
.form-group{
  margin-bottom: 16px;
}

.form-label{
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 4px;
}

.form-input{
  width: 100%;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: 13px;
  color: #ffffff;
  font-family: inherit;
}

.form-input:focus{
  outline: none;
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(255, 255, 255, 0.08);
}

.form-input::placeholder{
  color: rgba(255, 255, 255, 0.4);
}

/* Alert Styles */
.alert{
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 13px;
}

.alert-success{
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: rgba(34, 197, 94, 0.9);
}

.alert-error{
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: rgba(239, 68, 68, 0.9);
}

.alert-warning{
  background: rgba(234, 179, 8, 0.1);
  border: 1px solid rgba(234, 179, 8, 0.3);
  color: rgba(234, 179, 8, 0.9);
}

/* Table Styles */
.data-table{
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

.data-table th,
.data-table td{
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.data-table th{
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.data-table td{
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
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

// Enhanced Supabase Integration Class
class SubscriptionManager {
  constructor() {
    this.supabase = null;
    this.currentUser = null;
    this.userLicense = null;
    this.userProfile = null;
    this.init();
  }

  async init() {
    console.log('🚀 SubscriptionManager initializing...');
    
    // Load Supabase if not available
    if (!window.supabase) {
      await this.loadSupabase();
    }

    // Initialize Supabase client
    const supabaseUrl = 'https://mfrlmxrjhkyuphklzxdt.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mcmxteHJqaGt5dXBoa2x6eGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0NzE0NzcsImV4cCI6MjA1MTA0NzQ3N30.MQS_Q7VzOgx5VEzUHVLvNFKWW9HTI9Y8t3t1mGOSgAY';
    
    this.supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
    console.log('✅ Supabase client initialized');

    // Get current session
    await this.getCurrentSession();
  }

  async loadSupabase() {
    return new Promise((resolve, reject) => {
      if (window.supabase) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/dist/umd/supabase.min.js';
      script.onload = () => {
        console.log('✅ Supabase script loaded');
        resolve();
      };
      script.onerror = (error) => {
        console.error('❌ Failed to load Supabase script:', error);
        reject(error);
      };
      document.head.appendChild(script);
    });
  }

  async getCurrentSession() {
    try {
      const { data: { session }, error } = await this.supabase.auth.getSession();
      
      if (error) {
        console.error('❌ Error getting session:', error);
        return null;
      }

      if (session?.user) {
        this.currentUser = session.user;
        console.log('✅ Current user found:', this.currentUser.email);
        
        // Load user profile and license
        await this.loadUserProfile();
        await this.loadUserLicense();
        
        return session;
      }

      console.log('ℹ️ No active session found');
      return null;
    } catch (error) {
      console.error('❌ Error in getCurrentSession:', error);
      return null;
    }
  }

  async loadUserProfile() {
    if (!this.currentUser) return null;

    try {
      const { data, error } = await this.supabase
        .from('user_profiles')
        .select('*')
        .eq('id', this.currentUser.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('❌ Error loading user profile:', error);
        return null;
      }

      this.userProfile = data;
      console.log('✅ User profile loaded:', data);
      return data;
    } catch (error) {
      console.error('❌ Error in loadUserProfile:', error);
      return null;
    }
  }

  async loadUserLicense() {
    if (!this.currentUser) return null;

    try {
      const { data, error } = await this.supabase
        .from('license_records')
        .select('*')
        .eq('user_id', this.currentUser.id)
        .eq('status', 'active')
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('❌ Error loading user license:', error);
        // Create default FREE license if none exists
        return await this.createFreeLicense();
      }

      this.userLicense = data;
      console.log('✅ User license loaded:', data);
      return data;
    } catch (error) {
      console.error('❌ Error in loadUserLicense:', error);
      return await this.createFreeLicense();
    }
  }

  async createFreeLicense() {
    if (!this.currentUser) return null;

    try {
      const licenseKey = `IC-FREE-${Date.now()}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
      const machineId = await this.getMachineId();

      const { data, error } = await this.supabase
        .from('license_records')
        .insert({
          user_id: this.currentUser.id,
          license_key: licenseKey,
          tier: 'FREE',
          machine_id: machineId,
          status: 'active'
        })
        .select()
        .single();

      if (error) {
        console.error('❌ Error creating FREE license:', error);
        return null;
      }

      this.userLicense = data;
      console.log('✅ FREE license created:', data);
      return data;
    } catch (error) {
      console.error('❌ Error in createFreeLicense:', error);
      return null;
    }
  }

  async getMachineId() {
    // Create a simple machine ID based on available browser data
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Machine fingerprint', 2, 2);
    
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      canvas.toDataURL()
    ].join('|');

    // Create a simple hash
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    return Math.abs(hash).toString(36);
  }

  async getUsageStats() {
    if (!this.currentUser) return null;

    try {
      const { data, error } = await this.supabase.rpc('get_user_usage_stats', {
        p_user_id: this.currentUser.id
      });

      if (error) {
        console.error('❌ Error getting usage stats:', error);
        return this.getDefaultUsageStats();
      }

      console.log('✅ Usage stats loaded:', data[0]);
      return data[0];
    } catch (error) {
      console.error('❌ Error in getUsageStats:', error);
      return this.getDefaultUsageStats();
    }
  }

  getDefaultUsageStats() {
    return {
      screenshots_used: 0,
      screenshots_limit: 10,
      screenshots_remaining: 10,
      ai_requests_used: 0,
      ai_requests_limit: 10,
      ai_requests_remaining: 10,
      usage_reset_time: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      tier: 'FREE'
    };
  }

  async updateTier(newTier) {
    if (!this.currentUser || !this.userLicense) return false;

    try {
      const { data, error } = await this.supabase
        .from('license_records')
        .update({ tier: newTier })
        .eq('id', this.userLicense.id)
        .select()
        .single();

      if (error) {
        console.error('❌ Error updating tier:', error);
        return false;
      }

      this.userLicense = data;
      console.log('✅ Tier updated:', data);
      return true;
    } catch (error) {
      console.error('❌ Error in updateTier:', error);
      return false;
    }
  }

  async updateUserProfile(updates) {
    if (!this.currentUser) return false;

    try {
      const { data, error } = await this.supabase
        .from('user_profiles')
        .update(updates)
        .eq('id', this.currentUser.id)
        .select()
        .single();

      if (error) {
        console.error('❌ Error updating profile:', error);
        return false;
      }

      this.userProfile = data;
      console.log('✅ Profile updated:', data);
      return true;
    } catch (error) {
      console.error('❌ Error in updateUserProfile:', error);
      return false;
    }
  }

  // Export usage data as CSV
  async exportUsageData() {
    try {
      // For now, return demo data
      // In production, this would query actual usage history
      const csvData = [
        'Date,Screenshots,AI Requests,Plan',
        `${new Date().toISOString().split('T')[0]},${this.userLicense?.daily_screenshots_used || 0},${this.userLicense?.daily_ai_requests_used || 0},${this.userLicense?.tier || 'FREE'}`
      ].join('\n');

      const blob = new Blob([csvData], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `usage-data-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);

      return true;
    } catch (error) {
      console.error('❌ Error exporting usage data:', error);
      return false;
    }
  }
}

// Modal Helper Class
class ModalManager {
  static show(title, content, buttons = []) {
    // Remove existing modal
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">${title}</h2>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          ${content}
        </div>
        <div class="modal-footer">
          ${buttons.map(btn => `<button class="action-button ${btn.class || ''}" data-action="${btn.action}">${btn.text}</button>`).join('')}
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Handle close
    modal.querySelector('.modal-close').onclick = () => modal.remove();
    modal.onclick = (e) => {
      if (e.target === modal) modal.remove();
    };

    // Handle button clicks
    buttons.forEach(btn => {
      if (btn.handler) {
        modal.querySelector(`[data-action="${btn.action}"]`).onclick = btn.handler;
      }
    });

    return modal;
  }

  static alert(title, message, type = 'info') {
    const alertClass = type === 'error' ? 'alert-error' : type === 'success' ? 'alert-success' : type === 'warning' ? 'alert-warning' : '';
    const content = `<div class="alert ${alertClass}">${message}</div>`;
    
    return this.show(title, content, [
      { text: 'OK', action: 'ok', class: 'primary', handler: () => document.querySelector('.modal-overlay').remove() }
    ]);
  }

  static confirm(title, message, onConfirm) {
    const content = `<p>${message}</p>`;
    
    return this.show(title, content, [
      { text: 'Cancel', action: 'cancel', handler: () => document.querySelector('.modal-overlay').remove() },
      { 
        text: 'Confirm', 
        action: 'confirm', 
        class: 'primary', 
        handler: () => {
          document.querySelector('.modal-overlay').remove();
          onConfirm();
        }
      }
    ]);
  }
}

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
  
  console.log('🚀 Enhanced subscription management component starting (v4.0 - Real Supabase Integration)...');
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
  
  let subscriptionManager;
  
  function initializeSubscriptionPage() {
    console.log('🔧 Initializing enhanced subscription page...');
    
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
    
    // Initialize enhanced subscription functionality
    initializeEnhancedSubscriptionLogic();
  }
  
  async function initializeEnhancedSubscriptionLogic() {
    console.log('🔧 Initializing enhanced subscription logic...');
    
    // Initialize subscription manager
    subscriptionManager = new SubscriptionManager();
    
    // Wait for initialization
    await subscriptionManager.init();
    
    // Check authentication
    if (!subscriptionManager.currentUser) {
      console.log('❌ User not authenticated, redirecting to login');
      ModalManager.alert('Authentication Required', 'Please log in to access your subscription management.', 'error');
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
      return;
    }
    
    console.log('✅ User authenticated:', subscriptionManager.currentUser.email);
    
    // Initialize the interface
    initializeNavigation();
    await updateUserInterface();
    setupAllEnhancedButtons();
    setupToggles();
    setupSearch();
    
    console.log('✅ Enhanced subscription functionality initialized');
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

        // Load page-specific data
        loadPageData(targetPage);
      });
    });
    
    console.log('✅ Navigation setup complete');
  }
  
  async function updateUserInterface() {
    console.log('🔧 Updating user interface...');
    
    // Update user info in sidebar
    const userEmailElement = document.getElementById('userEmail');
    const userPlanElement = document.getElementById('userPlan');
    
    if (userEmailElement) userEmailElement.textContent = subscriptionManager.currentUser.email;
    if (userPlanElement) userPlanElement.textContent = (subscriptionManager.userLicense?.tier || 'FREE') + ' Plan';
    
    // Update plan info
    await updatePlanInfo();
    
    // Update usage stats
    await updateUsageInterface();
    
    console.log('✅ User interface updated');
  }
  
  async function updatePlanInfo() {
    const license = subscriptionManager.userLicense;
    if (!license) return;
    
    const currentPlanNameElement = document.getElementById('currentPlanName');
    const planBadgeElement = document.getElementById('planBadge');
    const planDescriptionElement = document.getElementById('planDescription');
    
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
    
    const config = planConfigs[license.tier] || planConfigs['FREE'];
    
    if (currentPlanNameElement) currentPlanNameElement.textContent = config.name;
    if (planDescriptionElement) planDescriptionElement.textContent = config.description;
    if (planBadgeElement) {
      planBadgeElement.textContent = config.badge;
      planBadgeElement.className = `plan-badge ${config.badgeClass}`;
    }

    // Update plan buttons
    updatePlanButtons(license.tier);
  }

  function updatePlanButtons(currentTier) {
    const buttons = {
      'freeBtn': { tier: 'FREE', text: currentTier === 'FREE' ? 'Current' : 'Downgrade', class: currentTier === 'FREE' ? 'success' : 'danger' },
      'proBtn': { tier: 'PRO', text: currentTier === 'PRO' ? 'Current' : 'Upgrade', class: currentTier === 'PRO' ? 'success' : 'primary' },
      'ultraBtn': { tier: 'ULTRA', text: currentTier === 'ULTRA' ? 'Current' : 'Upgrade', class: currentTier === 'ULTRA' ? 'success' : 'primary' }
    };

    Object.entries(buttons).forEach(([buttonId, config]) => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.textContent = config.text;
        button.className = `action-button ${config.class}`;
        button.disabled = currentTier === config.tier;
      }
    });
  }
  
  async function updateUsageInterface() {
    const usageStats = await subscriptionManager.getUsageStats();
    if (!usageStats) return;
    
    // Screenshots
    const screenshotUsage = document.getElementById('screenshotUsage');
    const screenshotLimit = document.getElementById('screenshotLimit');
    const screenshotBar = document.getElementById('screenshotBar');
    
    if (screenshotUsage) screenshotUsage.textContent = usageStats.screenshots_used;
    if (screenshotLimit) {
      if (usageStats.screenshots_limit === -1) {
        screenshotLimit.textContent = 'unlimited';
      } else {
        screenshotLimit.textContent = `of ${usageStats.screenshots_limit} daily limit`;
      }
    }
    if (screenshotBar) {
      let percentage = 0;
      if (usageStats.screenshots_limit > 0) {
        percentage = (usageStats.screenshots_used / usageStats.screenshots_limit) * 100;
      }
      screenshotBar.style.width = `${Math.min(percentage, 100)}%`;
      screenshotBar.className = `usage-fill ${getUsageClass(percentage)}`;
    }
    
    // AI Requests
    const aiUsage = document.getElementById('aiUsage');
    const aiLimit = document.getElementById('aiLimit');
    const aiBar = document.getElementById('aiBar');
    
    if (aiUsage) aiUsage.textContent = usageStats.ai_requests_used;
    if (aiLimit) {
      if (usageStats.ai_requests_limit === -1) {
        aiLimit.textContent = 'unlimited';
      } else {
        aiLimit.textContent = `of ${usageStats.ai_requests_limit} daily limit`;
      }
    }
    if (aiBar) {
      let percentage = 0;
      if (usageStats.ai_requests_limit > 0) {
        percentage = (usageStats.ai_requests_used / usageStats.ai_requests_limit) * 100;
      }
      aiBar.style.width = `${Math.min(percentage, 100)}%`;
      aiBar.className = `usage-fill ${getUsageClass(percentage)}`;
    }
    
    // Reset time
    const resetTimeElement = document.getElementById('resetTime');
    if (resetTimeElement && usageStats.usage_reset_time) {
      const resetTime = new Date(usageStats.usage_reset_time);
      const timeString = resetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      resetTimeElement.textContent = timeString;
    }
  }
  
  function getUsageClass(percentage) {
    if (percentage < 60) return 'usage-low';
    if (percentage < 90) return 'usage-medium';
    return 'usage-high';
  }
  
  function setupAllEnhancedButtons() {
    console.log('🔧 Setting up all enhanced buttons...');
    
    // Plan management buttons
    setupPlanButtons();
    
    // Account management buttons
    setupAccountButtons();
    
    // Usage & billing buttons
    setupUsageBillingButtons();
    
    // Security buttons
    setupSecurityButtons();
    
    // Preferences buttons
    setupPreferencesButtons();
    
    // Support buttons
    setupSupportButtons();
    
    console.log('✅ All enhanced buttons setup complete');
  }

  function setupPlanButtons() {
    // Plan upgrade/downgrade buttons
    ['freeBtn', 'proBtn', 'ultraBtn', 'changePlanBtn'].forEach(buttonId => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener('click', function() {
          const planType = buttonId.replace('Btn', '').toUpperCase();
          if (planType === 'CHANGE') {
            showPlanChangeModal();
          } else {
            handlePlanChange(planType);
          }
        });
      }
    });
  }

  function setupAccountButtons() {
    // Manage account button
    const manageAccountBtn = document.getElementById('manageAccountBtn');
    if (manageAccountBtn) {
      manageAccountBtn.addEventListener('click', function() {
        showAccountManagementModal();
      });
    }
  }

  function setupUsageBillingButtons() {
    // Usage history button
    const viewHistoryBtn = document.getElementById('viewHistoryBtn');
    if (viewHistoryBtn) {
      viewHistoryBtn.addEventListener('click', function() {
        showUsageHistoryModal();
      });
    }

    // Export data button
    const exportDataBtn = document.getElementById('exportDataBtn');
    if (exportDataBtn) {
      exportDataBtn.addEventListener('click', async function() {
        this.disabled = true;
        this.innerHTML = '<div class="loading-spinner"></div>Exporting...';
        
        const success = await subscriptionManager.exportUsageData();
        
        if (success) {
          ModalManager.alert('Export Successful', 'Your usage data has been downloaded as a CSV file.', 'success');
        } else {
          ModalManager.alert('Export Failed', 'There was an error exporting your usage data. Please try again.', 'error');
        }
        
        this.disabled = false;
        this.innerHTML = 'Export';
      });
    }

    // Billing buttons
    const updatePaymentBtn = document.getElementById('updatePaymentBtn');
    if (updatePaymentBtn) {
      updatePaymentBtn.addEventListener('click', function() {
        showPaymentMethodModal();
      });
    }

    const billingHistoryBtn = document.getElementById('billingHistoryBtn');
    if (billingHistoryBtn) {
      billingHistoryBtn.addEventListener('click', function() {
        showBillingHistoryModal();
      });
    }

    const downloadReceiptsBtn = document.getElementById('downloadReceiptsBtn');
    if (downloadReceiptsBtn) {
      downloadReceiptsBtn.addEventListener('click', function() {
        showReceiptDownloadModal();
      });
    }
  }

  function setupSecurityButtons() {
    // Change password button
    const changePasswordBtn = document.getElementById('changePasswordBtn');
    if (changePasswordBtn) {
      changePasswordBtn.addEventListener('click', function() {
        showChangePasswordModal();
      });
    }

    // 2FA button
    const enable2FABtn = document.getElementById('enable2FABtn');
    if (enable2FABtn) {
      enable2FABtn.addEventListener('click', function() {
        show2FAModal();
      });
    }

    // Manage sessions button
    const manageSessionsBtn = document.getElementById('manageSessionsBtn');
    if (manageSessionsBtn) {
      manageSessionsBtn.addEventListener('click', function() {
        showSessionsModal();
      });
    }
  }

  function setupPreferencesButtons() {
    // Theme button
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function() {
        showThemeModal();
      });
    }
  }

  function setupSupportButtons() {
    // Contact support button
    const contactSupportBtn = document.getElementById('contactSupportBtn');
    if (contactSupportBtn) {
      contactSupportBtn.addEventListener('click', function() {
        showContactSupportModal();
      });
    }

    // Documentation button
    const docsBtn = document.getElementById('docsBtn');
    if (docsBtn) {
      docsBtn.addEventListener('click', function() {
        window.open('https://docs.ghostpilot.ai', '_blank');
      });
    }

    // Feedback button
    const feedbackBtn = document.getElementById('feedbackBtn');
    if (feedbackBtn) {
      feedbackBtn.addEventListener('click', function() {
        showFeedbackModal();
      });
    }
  }
  
  function setupToggles() {
    console.log('🔧 Setting up toggle switches...');
    
    const toggles = ['autoSaveToggle', 'privacyToggle', 'notificationsToggle', 'autoUpdateToggle'];
    
    toggles.forEach(toggleId => {
      const toggle = document.getElementById(toggleId);
      if (toggle) {
        toggle.addEventListener('click', async function() {
          this.classList.toggle('enabled');
          const isEnabled = this.classList.contains('enabled');
          console.log(`🔧 ${toggleId} toggled:`, isEnabled);
          
          // Save preference to database
          await saveTogglePreference(toggleId, isEnabled);
        });
      }
    });
    
    console.log('✅ Toggle switches setup complete');
  }

  function setupSearch() {
    const searchInput = document.getElementById('settingsSearch');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterSettings(searchTerm);
      });
    }
  }

  function filterSettings(searchTerm) {
    const settingsItems = document.querySelectorAll('.settings-item');
    
    settingsItems.forEach(item => {
      const title = item.querySelector('.item-title').textContent.toLowerCase();
      const description = item.querySelector('.item-description').textContent.toLowerCase();
      
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        item.style.display = 'flex';
      } else {
        item.style.display = searchTerm ? 'none' : 'flex';
      }
    });
  }

  async function saveTogglePreference(toggleId, isEnabled) {
    try {
      const preferences = JSON.parse(localStorage.getItem('subscription_preferences') || '{}');
      preferences[toggleId] = isEnabled;
      localStorage.setItem('subscription_preferences', JSON.stringify(preferences));
      
      // Also save to Supabase if available
      if (subscriptionManager && subscriptionManager.currentUser) {
        await subscriptionManager.updateUserProfile({
          preferences: preferences
        });
      }
    } catch (error) {
      console.error('❌ Error saving toggle preference:', error);
    }
  }

  async function loadPageData(page) {
    console.log('📄 Loading data for page:', page);
    
    switch (page) {
      case 'usage':
        await updateUsageInterface();
        break;
      case 'billing':
        // Load billing data
        break;
      case 'security':
        // Load security settings
        break;
      // Add more cases as needed
    }
  }

  // Modal Functions
  function showPlanChangeModal() {
    const content = `
      <div class="alert alert-warning">
        <strong>Plan Change Information</strong><br>
        • Upgrades take effect immediately<br>
        • Downgrades take effect at the end of current billing period<br>
        • Pro Plan: $19.99/month<br>
        • Ultra Plan: $99.99/month
      </div>
      <p>Select your desired plan from the Subscription tab to proceed with the change.</p>
    `;
    
    ModalManager.show('Change Plan', content, [
      { text: 'OK', action: 'ok', class: 'primary', handler: () => document.querySelector('.modal-overlay').remove() }
    ]);
  }

  function showAccountManagementModal() {
    const content = `
      <div class="form-group">
        <label class="form-label">Email Address</label>
        <input type="email" class="form-input" value="${subscriptionManager.currentUser?.email || ''}" disabled>
      </div>
      <div class="form-group">
        <label class="form-label">Full Name</label>
        <input type="text" class="form-input" value="${subscriptionManager.userProfile?.full_name || ''}" id="fullNameInput">
      </div>
      <div class="form-group">
        <label class="form-label">Username</label>
        <input type="text" class="form-input" value="${subscriptionManager.userProfile?.username || ''}" id="usernameInput">
      </div>
    `;
    
    ModalManager.show('Account Management', content, [
      { text: 'Cancel', action: 'cancel', handler: () => document.querySelector('.modal-overlay').remove() },
      { 
        text: 'Save Changes', 
        action: 'save', 
        class: 'primary', 
        handler: async () => {
          const fullName = document.getElementById('fullNameInput').value;
          const username = document.getElementById('usernameInput').value;
          
          const success = await subscriptionManager.updateUserProfile({
            full_name: fullName,
            username: username
          });
          
          if (success) {
            ModalManager.alert('Success', 'Account information updated successfully.', 'success');
          } else {
            ModalManager.alert('Error', 'Failed to update account information.', 'error');
          }
        }
      }
    ]);
  }

  function showUsageHistoryModal() {
    const content = `
      <p>Usage history for the past 30 days:</p>
      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Screenshots</th>
            <th>AI Requests</th>
            <th>Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${new Date().toLocaleDateString()}</td>
            <td>${subscriptionManager.userLicense?.daily_screenshots_used || 0}</td>
            <td>${subscriptionManager.userLicense?.daily_ai_requests_used || 0}</td>
            <td>${subscriptionManager.userLicense?.tier || 'FREE'}</td>
          </tr>
          <tr>
            <td colspan="4" style="text-align: center; color: rgba(255,255,255,0.5);">
              Previous days' data would be loaded from database
            </td>
          </tr>
        </tbody>
      </table>
    `;
    
    ModalManager.show('Usage History', content, [
      { text: 'Close', action: 'close', class: 'primary', handler: () => document.querySelector('.modal-overlay').remove() }
    ]);
  }

  function showPaymentMethodModal() {
    const content = `
      <div class="alert alert-warning">
        This is a demo version. In the production app, this would integrate with Stripe to manage payment methods.
      </div>
      <div class="form-group">
        <label class="form-label">Card Number</label>
        <input type="text" class="form-input" placeholder="**** **** **** ****" disabled>
      </div>
      <div style="display: flex; gap: 12px;">
        <div class="form-group" style="flex: 1;">
          <label class="form-label">Expiry</label>
          <input type="text" class="form-input" placeholder="MM/YY" disabled>
        </div>
        <div class="form-group" style="flex: 1;">
          <label class="form-label">CVC</label>
          <input type="text" class="form-input" placeholder="123" disabled>
        </div>
      </div>
    `;
    
    ModalManager.show('Update Payment Method', content, [
      { text: 'Cancel', action: 'cancel', handler: () => document.querySelector('.modal-overlay').remove() },
      { text: 'Update', action: 'update', class: 'primary', handler: () => {
        ModalManager.alert('Demo Mode', 'This feature would integrate with Stripe in the production version.', 'warning');
      }}
    ]);
  }

  function showBillingHistoryModal() {
    const content = `
      <p>Billing history and invoices:</p>
      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="4" style="text-align: center; color: rgba(255,255,255,0.5);">
              No billing history available (Demo mode)
            </td>
          </tr>
        </tbody>
      </table>
    `;
    
    ModalManager.show('Billing History', content, [
      { text: 'Close', action: 'close', class: 'primary', handler: () => document.querySelector('.modal-overlay').remove() }
    ]);
  }

  function showReceiptDownloadModal() {
    const content = `
      <div class="alert alert-warning">
        This is a demo version. In the production app, this would allow you to download receipts and invoices for tax purposes.
      </div>
      <p>Available receipts:</p>
      <div style="text-align: center; color: rgba(255,255,255,0.5); padding: 20px;">
        No receipts available (Demo mode)
      </div>
    `;
    
    ModalManager.show('Download Receipts', content, [
      { text: 'Close', action: 'close', class: 'primary', handler: () => document.querySelector('.modal-overlay').remove() }
    ]);
  }

  function showChangePasswordModal() {
    const content = `
      <div class="form-group">
        <label class="form-label">Current Password</label>
        <input type="password" class="form-input" id="currentPassword">
      </div>
      <div class="form-group">
        <label class="form-label">New Password</label>
        <input type="password" class="form-input" id="newPassword">
      </div>
      <div class="form-group">
        <label class="form-label">Confirm New Password</label>
        <input type="password" class="form-input" id="confirmPassword">
      </div>
    `;
    
    ModalManager.show('Change Password', content, [
      { text: 'Cancel', action: 'cancel', handler: () => document.querySelector('.modal-overlay').remove() },
      { 
        text: 'Change Password', 
        action: 'change', 
        class: 'primary', 
        handler: async () => {
          const currentPassword = document.getElementById('currentPassword').value;
          const newPassword = document.getElementById('newPassword').value;
          const confirmPassword = document.getElementById('confirmPassword').value;
          
          if (!currentPassword || !newPassword || !confirmPassword) {
            ModalManager.alert('Error', 'Please fill in all fields.', 'error');
            return;
          }
          
          if (newPassword !== confirmPassword) {
            ModalManager.alert('Error', 'New passwords do not match.', 'error');
            return;
          }
          
          try {
            const { error } = await subscriptionManager.supabase.auth.updateUser({
              password: newPassword
            });
            
            if (error) {
              ModalManager.alert('Error', 'Failed to change password: ' + error.message, 'error');
            } else {
              ModalManager.alert('Success', 'Password changed successfully.', 'success');
            }
          } catch (error) {
            ModalManager.alert('Error', 'An error occurred while changing your password.', 'error');
          }
        }
      }
    ]);
  }

  function show2FAModal() {
    const content = `
      <div class="alert alert-warning">
        Two-Factor Authentication setup would be integrated with an authenticator app like Google Authenticator or Authy in the production version.
      </div>
      <p>Steps to enable 2FA:</p>
      <ol style="color: rgba(255,255,255,0.8); line-height: 1.6;">
        <li>Download an authenticator app</li>
        <li>Scan the QR code</li>
        <li>Enter the verification code</li>
        <li>Save your backup codes</li>
      </ol>
    `;
    
    ModalManager.show('Two-Factor Authentication', content, [
      { text: 'Close', action: 'close', class: 'primary', handler: () => document.querySelector('.modal-overlay').remove() }
    ]);
  }

  function showSessionsModal() {
    const content = `
      <p>Active sessions and devices:</p>
      <table class="data-table">
        <thead>
          <tr>
            <th>Device</th>
            <th>Location</th>
            <th>Last Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Current Session</td>
            <td>Unknown</td>
            <td>Now</td>
            <td><span style="color: rgba(34,197,94,0.9);">Current</span></td>
          </tr>
        </tbody>
      </table>
    `;
    
    ModalManager.show('Active Sessions', content, [
      { text: 'Close', action: 'close', class: 'primary', handler: () => document.querySelector('.modal-overlay').remove() }
    ]);
  }

  function showThemeModal() {
    const content = `
      <div class="form-group">
        <label class="form-label">Select Theme</label>
        <select class="form-input" id="themeSelect">
          <option value="dark">Dark (Current)</option>
          <option value="light">Light</option>
          <option value="auto">Auto (System)</option>
        </select>
      </div>
      <div class="alert alert-warning">
        Theme customization would be fully implemented in the production version.
      </div>
    `;
    
    ModalManager.show('Theme Settings', content, [
      { text: 'Cancel', action: 'cancel', handler: () => document.querySelector('.modal-overlay').remove() },
      { text: 'Apply', action: 'apply', class: 'primary', handler: () => {
        const theme = document.getElementById('themeSelect').value;
        ModalManager.alert('Success', `Theme changed to ${theme}. This is a demo - full theme support would be implemented in production.`, 'success');
      }}
    ]);
  }

  function showContactSupportModal() {
    const content = `
      <div class="form-group">
        <label class="form-label">Subject</label>
        <select class="form-input" id="supportSubject">
          <option value="billing">Billing Question</option>
          <option value="technical">Technical Issue</option>
          <option value="feature">Feature Request</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="form-input" rows="5" id="supportMessage" placeholder="Describe your issue or question..."></textarea>
      </div>
      <div class="alert alert-warning">
        In the production version, this would send an email to our support team.
      </div>
    `;
    
    ModalManager.show('Contact Support', content, [
      { text: 'Cancel', action: 'cancel', handler: () => document.querySelector('.modal-overlay').remove() },
      { 
        text: 'Send Message', 
        action: 'send', 
        class: 'primary', 
        handler: () => {
          const subject = document.getElementById('supportSubject').value;
          const message = document.getElementById('supportMessage').value;
          
          if (!message.trim()) {
            ModalManager.alert('Error', 'Please enter a message.', 'error');
            return;
          }
          
          ModalManager.alert('Success', 'Your support request has been submitted. We will get back to you within 24 hours.', 'success');
        }
      }
    ]);
  }

  function showFeedbackModal() {
    const content = `
      <div class="form-group">
        <label class="form-label">Feedback Type</label>
        <select class="form-input" id="feedbackType">
          <option value="feature">Feature Request</option>
          <option value="improvement">Improvement Suggestion</option>
          <option value="bug">Bug Report</option>
          <option value="general">General Feedback</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Your Feedback</label>
        <textarea class="form-input" rows="5" id="feedbackMessage" placeholder="Share your thoughts and suggestions..."></textarea>
      </div>
    `;
    
    ModalManager.show('Send Feedback', content, [
      { text: 'Cancel', action: 'cancel', handler: () => document.querySelector('.modal-overlay').remove() },
      { 
        text: 'Send Feedback', 
        action: 'send', 
        class: 'primary', 
        handler: () => {
          const type = document.getElementById('feedbackType').value;
          const message = document.getElementById('feedbackMessage').value;
          
          if (!message.trim()) {
            ModalManager.alert('Error', 'Please enter your feedback.', 'error');
            return;
          }
          
          ModalManager.alert('Success', 'Thank you for your feedback! Your input helps us improve the product.', 'success');
        }
      }
    ]);
  }

  async function handlePlanChange(planType) {
    console.log(`🚀 ${planType} plan change requested`);
    
    const currentTier = subscriptionManager.userLicense?.tier || 'FREE';
    
    if (planType === currentTier) {
      ModalManager.alert('Plan Change', 'You are already on this plan!', 'warning');
      return;
    }

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
    
    try {
      if (planType === 'FREE') {
        // Downgrade confirmation
        ModalManager.confirm(
          'Confirm Downgrade',
          'Are you sure you want to downgrade to the FREE plan? You will lose access to premium features and your usage will be limited.',
          async () => {
            const success = await subscriptionManager.updateTier('FREE');
            if (success) {
              await updateUserInterface();
              ModalManager.alert('Success', 'Successfully downgraded to FREE plan.', 'success');
            } else {
              ModalManager.alert('Error', 'Failed to downgrade plan. Please contact support.', 'error');
            }
          }
        );
      } else {
        // Upgrade confirmation
        const prices = { PRO: '$19.99', ULTRA: '$99.99' };
        ModalManager.confirm(
          'Confirm Upgrade',
          `Upgrade to ${planType} plan for ${prices[planType]}/month?\n\nNote: This is a demo. In production, this would redirect to Stripe checkout.`,
          async () => {
            // In production, this would redirect to Stripe
            // For demo, we'll simulate success
            const success = await subscriptionManager.updateTier(planType);
            if (success) {
              await updateUserInterface();
              ModalManager.alert('Success', `Successfully upgraded to ${planType} plan!`, 'success');
            } else {
              ModalManager.alert('Error', 'Failed to upgrade plan. Please contact support.', 'error');
            }
          }
        );
      }
    } finally {
      // Reset button
      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
      }, 1000);
    }
  }
})(); 
