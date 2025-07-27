// Steley Subscription Management Page Combined - CSS + HTML Content (Component Only) - v4.0 With Full Modal Functionality
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

/* Modal Overlay */
.subscription-modal-overlay{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.subscription-modal-overlay.active{
  display: flex;
}

/* Modal Content */
.subscription-modal{
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

/* Modal Header */
.modal-header{
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.02);
  flex-shrink: 0;
}

.modal-title{
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.modal-close{
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.15s;
}

.modal-close:hover{
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.05);
}

/* Modal Body */
.modal-body{
  padding: 20px;
  overflow-y: auto;
  flex: 1;
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
  margin-bottom: 6px;
}

.form-input{
  width: 100%;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  font-family: inherit;
  transition: all 0.15s;
}

.form-input:focus{
  outline: none;
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

.form-input::placeholder{
  color: rgba(255, 255, 255, 0.4);
}

.form-textarea{
  min-height: 80px;
  resize: vertical;
}

.form-select{
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 8px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 36px;
}

/* Modal Footer */
.modal-footer{
  padding: 16px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  background: rgba(255, 255, 255, 0.01);
  flex-shrink: 0;
}

.modal-button{
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.15s;
  min-width: 64px;
  text-align: center;
}

.modal-button:hover{
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.modal-button.primary{
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: rgba(59, 130, 246, 0.9);
}

.modal-button.primary:hover{
  background: rgba(59, 130, 246, 0.3);
  border-color: rgba(59, 130, 246, 0.6);
  color: #ffffff;
}

.modal-button.success{
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.4);
  color: rgba(34, 197, 94, 0.9);
}

.modal-button.danger{
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.4);
  color: rgba(239, 68, 68, 0.9);
}

/* Data Table Styles */
.data-table{
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

.data-table th,
.data-table td{
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.data-table th{
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.data-table td{
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
}

.data-table tr:hover{
  background: rgba(255, 255, 255, 0.02);
}

/* Chart Container */
.chart-container{
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  padding: 16px;
  margin: 16px 0;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

/* Status Badge */
.status-badge{
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}

.status-active{
  background: rgba(34, 197, 94, 0.2);
  color: rgba(34, 197, 94, 0.9);
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-pending{
  background: rgba(234, 179, 8, 0.2);
  color: rgba(234, 179, 8, 0.9);
  border: 1px solid rgba(234, 179, 8, 0.3);
}

.status-cancelled{
  background: rgba(239, 68, 68, 0.2);
  color: rgba(239, 68, 68, 0.9);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

/* Plan Comparison */
.plan-comparison{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin: 16px 0;
}

.plan-card{
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 16px;
  text-align: center;
  transition: all 0.15s;
  cursor: pointer;
}

.plan-card:hover{
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
}

.plan-card.current{
  border-color: rgba(34, 197, 94, 0.5);
  background: rgba(34, 197, 94, 0.05);
}

.plan-name{
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 0;
}

.plan-price{
  font-size: 20px;
  font-weight: 700;
  color: rgba(59, 130, 246, 0.9);
  margin: 0 0 12px 0;
}

.plan-features{
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.plan-features li{
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin: 4px 0;
  text-align: left;
}

.plan-features li:before{
  content: "✓ ";
  color: rgba(34, 197, 94, 0.8);
  font-weight: 600;
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

/* Success/Error Messages */
.message{
  padding: 12px 16px;
  border-radius: 4px;
  margin: 16px 0;
  font-size: 13px;
  font-weight: 500;
}

.message.success{
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: rgba(34, 197, 94, 0.9);
}

.message.error{
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: rgba(239, 68, 68, 0.9);
}

.message.info{
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: rgba(59, 130, 246, 0.9);
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
  
  .subscription-modal{
    width: 95%;
    max-height: 85vh;
  }
}
`;

const subscriptionHTML = `
<div class="subscription-manage-component">
  <!-- Modal Overlay (Initially Hidden) -->
  <div class="subscription-modal-overlay" id="modalOverlay">
    <div class="subscription-modal" id="modalContent">
      <!-- Modal content will be populated dynamically -->
    </div>
  </div>

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
               <span style="font-size: 12px; color: rgba(255,255,255,0.6);">$40/month</span>
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
  
  // Only load if this is actually a subscription management page
  if (!isSubscriptionPage) {
    return;
  }
  
  // Add CSS
  const style = document.createElement('style');
  style.textContent = subscriptionCSS;
  document.head.appendChild(style);
  
  // Add HTML when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeSubscriptionPage();
    });
  } else {
    initializeSubscriptionPage();
  }
  
  function initializeSubscriptionPage() {
    // Check if subscription content already exists
    if (document.querySelector('.subscription-manage-component')) {
      return;
    }
    
    // Use exact same logic as working signup page
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    // Exact same injection logic as signup
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
    
    // Initialize subscription functionality
    initializeSubscriptionLogic();
  }
  
  function initializeSubscriptionLogic() {
    // Check authentication using the same format as ProfileDropdown
    let userEmail = null;
    let isAuthenticated = false;
    
    // Check multiple localStorage keys (same as ProfileDropdown)
    const userStr = localStorage.getItem('supabase_user');
    const sessionStr = localStorage.getItem('steley_session');
    
    // Try to get user email from any available source
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        if (user.email) {
          userEmail = user.email;
          isAuthenticated = true;
        }
      } catch {
        // Failed to parse user data
      }
    } else if (sessionStr) {
      try {
        const session = JSON.parse(sessionStr);
        
        // Handle multiple session formats (same as ProfileDropdown)
        if (session.user && session.user.email) {
          userEmail = session.user.email;
          isAuthenticated = true;
        } else if (session.email && !session.user) {
          userEmail = session.email;
          isAuthenticated = true;
        }
      } catch {
        // Failed to parse session data
      }
    }
    
    if (!isAuthenticated) {
      alert('Please log in to access your subscription management.');
        window.location.href = '/login';
        return;
      }
       
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
    
    // Initialize the interface
    initializeNavigation();
    updateUserInfo(userData);
    setupAllButtons(userData);
    setupToggles();
  }
  
  function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const contentPages = document.querySelectorAll('.content-page');
    
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        const targetPage = this.getAttribute('data-page');
        
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
  }
  
  function updateUserInfo(userData) {
    
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
  }
  
  function updateUsageStats(usage, resetTime) {
    
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
  }
  
  function getUsageClass(percentage) {
    if (percentage < 60) return 'usage-low';
    if (percentage < 90) return 'usage-medium';
    return 'usage-high';
  }
  
  function setupAllButtons(userData) {
    
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
    
    // Action buttons with modal functionality
    const actionButtons = {
      'manageAccountBtn': () => showManageAccountModal(userData),
      'changePlanBtn': () => showChangePlanModal(userData),
      'updatePaymentBtn': () => showUpdatePaymentModal(userData),
      'viewHistoryBtn': () => showUsageHistoryModal(userData),
      'billingHistoryBtn': () => showBillingHistoryModal(userData),
      'downloadReceiptsBtn': () => showDownloadReceiptsModal(userData),
      'changePasswordBtn': () => showChangePasswordModal(userData),
      'enable2FABtn': () => show2FAModal(userData),
      'manageSessionsBtn': () => showManageSessionsModal(userData),
      'themeBtn': () => showThemeModal(userData),
      'contactSupportBtn': () => showContactSupportModal(userData),
      'docsBtn': () => showDocumentationModal(userData),
      'feedbackBtn': () => showFeedbackModal(userData),
      'exportDataBtn': () => showExportDataModal(userData)
    };
    
    Object.entries(actionButtons).forEach(([buttonId, handler]) => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener('click', handler);
      }
    });
  }
  
  function setupToggles() {
    
    const toggles = ['autoSaveToggle', 'privacyToggle', 'notificationsToggle', 'autoUpdateToggle'];
    
    toggles.forEach(toggleId => {
      const toggle = document.getElementById(toggleId);
      if (toggle) {
        toggle.addEventListener('click', function() {
          this.classList.toggle('enabled');
        });
      }
    });
  }
  
  function handlePlanUpgrade(planType, userData) {
    
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
        const prices = { PRO: '$19.99', ULTRA: '$40' };
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

  // ================== MODAL FUNCTIONS ==================

  function showModal(title, content, actions = []) {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modalContent');
    
    modal.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${title}</h3>
        <button class="modal-close" onclick="hideModal()">×</button>
      </div>
      <div class="modal-body">
        ${content}
      </div>
      <div class="modal-footer">
        ${actions.map(action => `<button class="modal-button ${action.class || ''}" onclick="${action.onclick}">${action.text}</button>`).join('')}
        <button class="modal-button" onclick="hideModal()">Cancel</button>
      </div>
    `;
    
    overlay.classList.add('active');
    
    // Close modal when clicking overlay
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) hideModal();
    });
  }
  
  function hideModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
  }

  function showMessage(text, type = 'info') {
    return `<div class="message ${type}">${text}</div>`;
  }

    function showManageAccountModal(userData) {
     const content = `
       <div class="form-group">
         <label class="form-label">Email Address</label>
         <input type="email" class="form-input" value="${userData?.email || 'user@example.com'}" id="userEmailInput">
       </div>
       <div class="form-group">
         <label class="form-label">Display Name</label>
         <input type="text" class="form-input" value="${userData?.email?.split('@')[0] || 'user'}" id="userNameInput">
       </div>
      <div class="form-group">
        <label class="form-label">Timezone</label>
        <select class="form-input form-select" id="timezoneSelect">
          <option value="UTC-8">Pacific Time (UTC-8)</option>
          <option value="UTC-5">Eastern Time (UTC-5)</option>
          <option value="UTC+0" selected>UTC</option>
          <option value="UTC+1">Central European Time (UTC+1)</option>
        </select>
      </div>
      ${showMessage('Changes to your email will require verification.', 'info')}
    `;
    
    const actions = [
      { text: 'Save Changes', class: 'primary', onclick: 'saveAccountChanges()' }
    ];
    
    showModal('Manage Account', content, actions);
  }

    function showChangePlanModal(userData) {
     const plans = [
       { 
         id: 'FREE', 
         name: 'Free Plan', 
         price: '$0', 
         features: ['10 screenshots/day', '10 AI requests/day', 'Basic features'],
         current: (userData?.currentPlan || 'FREE') === 'FREE'
       },
       { 
         id: 'PRO', 
         name: 'Pro Plan', 
         price: '$19.99', 
         features: ['100 screenshots/day', '100 AI requests/day', 'Premium AI models', 'Priority support'],
         current: (userData?.currentPlan || 'FREE') === 'PRO'
       },
       { 
         id: 'ULTRA', 
         name: 'Ultra Plan', 
                   price: '$40', 
         features: ['Unlimited usage', 'All AI models', 'Ultra features', 'Dedicated support'],
         current: (userData?.currentPlan || 'FREE') === 'ULTRA'
       }
     ];

    const content = `
      <div class="plan-comparison">
        ${plans.map(plan => `
          <div class="plan-card ${plan.current ? 'current' : ''}" onclick="selectPlan('${plan.id}')">
            <div class="plan-name">${plan.name}</div>
            <div class="plan-price">${plan.price}/month</div>
            <ul class="plan-features">
              ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            ${plan.current ? '<div class="status-badge status-active">Current Plan</div>' : `<button class="modal-button primary">Select Plan</button>`}
          </div>
        `).join('')}
      </div>
      ${showMessage('Plan changes take effect immediately. Downgrades will be processed at the end of your billing cycle.', 'info')}
    `;
    
    showModal('Change Subscription Plan', content);
  }

    function showUsageHistoryModal(userData) {
     // Demo implementation - userData parameter available for future integration
     const sampleData = [
      { date: '2024-01-15', screenshots: 8, aiRequests: 12 },
      { date: '2024-01-14', screenshots: 5, aiRequests: 7 },
      { date: '2024-01-13', screenshots: 10, aiRequests: 15 },
      { date: '2024-01-12', screenshots: 3, aiRequests: 4 },
      { date: '2024-01-11', screenshots: 7, aiRequests: 9 }
    ];

    const content = `
      <div class="chart-container">
        📊 Usage trends chart would be displayed here
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Screenshots</th>
            <th>AI Requests</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${sampleData.map(row => `
            <tr>
              <td>${row.date}</td>
              <td>${row.screenshots}</td>
              <td>${row.aiRequests}</td>
              <td><span class="status-badge status-active">Normal</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    
    const actions = [
      { text: 'Export CSV', class: 'primary', onclick: 'exportUsageData()' }
    ];
    
    showModal('Usage History', content, actions);
  }

  function showBillingHistoryModal(userData) {
    const sampleInvoices = [
      { id: 'INV-001', date: '2024-01-01', amount: '$19.99', status: 'paid' },
      { id: 'INV-002', date: '2023-12-01', amount: '$19.99', status: 'paid' },
      { id: 'INV-003', date: '2023-11-01', amount: '$19.99', status: 'paid' }
    ];

    const content = `
      <table class="data-table">
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${sampleInvoices.map(invoice => `
            <tr>
              <td>${invoice.id}</td>
              <td>${invoice.date}</td>
              <td>${invoice.amount}</td>
              <td><span class="status-badge status-${invoice.status}">${invoice.status.toUpperCase()}</span></td>
              <td><button class="modal-button" onclick="downloadInvoice('${invoice.id}')">Download</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      ${showMessage('Invoices are automatically generated and sent to your email address.', 'info')}
    `;
    
    showModal('Billing History', content);
  }

  function showChangePasswordModal(userData) {
    const content = `
      <div class="form-group">
        <label class="form-label">Current Password</label>
        <input type="password" class="form-input" id="currentPassword" placeholder="Enter current password">
      </div>
      <div class="form-group">
        <label class="form-label">New Password</label>
        <input type="password" class="form-input" id="newPassword" placeholder="Enter new password">
      </div>
      <div class="form-group">
        <label class="form-label">Confirm New Password</label>
        <input type="password" class="form-input" id="confirmPassword" placeholder="Confirm new password">
      </div>
      ${showMessage('Password must be at least 8 characters long and contain letters and numbers.', 'info')}
    `;
    
    const actions = [
      { text: 'Update Password', class: 'primary', onclick: 'updatePassword()' }
    ];
    
    showModal('Change Password', content, actions);
  }

  function show2FAModal(userData) {
    const content = `
      <div class="form-group">
        <label class="form-label">Two-Factor Authentication</label>
        <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 8px 0;">
          Add an extra layer of security to your account by enabling two-factor authentication.
        </p>
      </div>
      <div style="text-align: center; padding: 20px; background: rgba(255,255,255,0.02); border-radius: 6px; margin: 16px 0;">
        <div style="font-size: 32px; margin-bottom: 12px;">📱</div>
        <p style="color: rgba(255,255,255,0.8);">Scan QR code with your authenticator app</p>
        <div style="width: 120px; height: 120px; background: rgba(255,255,255,0.1); margin: 16px auto; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5);">
          QR Code
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Verification Code</label>
        <input type="text" class="form-input" id="verificationCode" placeholder="Enter 6-digit code">
      </div>
    `;
    
    const actions = [
      { text: 'Enable 2FA', class: 'primary', onclick: 'enable2FA()' }
    ];
    
    showModal('Two-Factor Authentication', content, actions);
  }

  function showManageSessionsModal(userData) {
    const sampleSessions = [
      { device: 'Chrome on Windows', location: 'New York, US', lastActive: '2024-01-15 14:30', current: true },
      { device: 'Safari on iPhone', location: 'New York, US', lastActive: '2024-01-15 09:15', current: false },
      { device: 'Firefox on Windows', location: 'Los Angeles, US', lastActive: '2024-01-14 16:45', current: false }
    ];

    const content = `
      <table class="data-table">
        <thead>
          <tr>
            <th>Device</th>
            <th>Location</th>
            <th>Last Active</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${sampleSessions.map(session => `
            <tr>
              <td>${session.device}</td>
              <td>${session.location}</td>
              <td>${session.lastActive}</td>
              <td><span class="status-badge ${session.current ? 'status-active' : 'status-pending'}">${session.current ? 'Current' : 'Active'}</span></td>
              <td>${session.current ? '<em style="color: rgba(255,255,255,0.5);">This device</em>' : '<button class="modal-button danger" onclick="revokeSession()">Revoke</button>'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      ${showMessage('You can revoke access from any device. This will require re-authentication on that device.', 'info')}
    `;
    
    const actions = [
      { text: 'Revoke All Sessions', class: 'danger', onclick: 'revokeAllSessions()' }
    ];
    
    showModal('Manage Sessions', content, actions);
  }

  function showUpdatePaymentModal(userData) {
    const content = `
      <div class="form-group">
        <label class="form-label">Payment Method</label>
        <div style="padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 4px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>💳</span>
            <span>•••• •••• •••• 4242</span>
            <span style="color: rgba(255,255,255,0.5);">Expires 12/2025</span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">New Card Number</label>
        <input type="text" class="form-input" id="cardNumber" placeholder="1234 5678 9012 3456">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Expiry Date</label>
          <input type="text" class="form-input" id="expiry" placeholder="MM/YY">
        </div>
        <div class="form-group">
          <label class="form-label">CVC</label>
          <input type="text" class="form-input" id="cvc" placeholder="123">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Cardholder Name</label>
        <input type="text" class="form-input" id="cardholderName" placeholder="John Doe">
      </div>
    `;
    
    const actions = [
      { text: 'Update Payment Method', class: 'primary', onclick: 'updatePaymentMethod()' }
    ];
    
    showModal('Update Payment Method', content, actions);
  }

  function showDownloadReceiptsModal(userData) {
    const content = `
      <div class="form-group">
        <label class="form-label">Select Period</label>
        <select class="form-input form-select" id="receiptPeriod">
          <option value="2024">2024 (Current Year)</option>
          <option value="2023">2023</option>
          <option value="all">All Available Receipts</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Format</label>
        <select class="form-input form-select" id="receiptFormat">
          <option value="pdf">PDF (Recommended)</option>
          <option value="csv">CSV (Spreadsheet)</option>
        </select>
      </div>
      ${showMessage('Receipts will be downloaded as a ZIP file containing all invoices for the selected period.', 'info')}
    `;
    
    const actions = [
      { text: 'Download Receipts', class: 'primary', onclick: 'downloadReceipts()' }
    ];
    
    showModal('Download Receipts', content, actions);
  }

  function showThemeModal(userData) {
    const themes = [
      { id: 'dark', name: 'Dark Theme', current: true },
      { id: 'light', name: 'Light Theme', current: false },
      { id: 'auto', name: 'Auto (System)', current: false }
    ];

    const content = `
      <div class="form-group">
        <label class="form-label">Select Theme</label>
        ${themes.map(theme => `
          <div style="display: flex; align-items: center; padding: 8px; margin: 4px 0; background: rgba(255,255,255,0.02); border-radius: 4px;">
            <input type="radio" name="theme" value="${theme.id}" ${theme.current ? 'checked' : ''} style="margin-right: 8px;">
            <label style="color: rgba(255,255,255,0.8);">${theme.name}</label>
            ${theme.current ? '<span style="margin-left: auto; color: rgba(34, 197, 94, 0.8); font-size: 12px;">Current</span>' : ''}
          </div>
        `).join('')}
      </div>
      ${showMessage('Theme changes will be applied immediately.', 'info')}
    `;
    
    const actions = [
      { text: 'Apply Theme', class: 'primary', onclick: 'applyTheme()' }
    ];
    
    showModal('Theme Settings', content, actions);
  }

  function showContactSupportModal(userData) {
    const content = `
      <div class="form-group">
        <label class="form-label">Subject</label>
        <select class="form-input form-select" id="supportSubject">
          <option value="">Select a topic</option>
          <option value="billing">Billing & Payments</option>
          <option value="technical">Technical Issue</option>
          <option value="feature">Feature Request</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Priority</label>
        <select class="form-input form-select" id="supportPriority">
          <option value="low">Low</option>
          <option value="medium" selected>Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="form-input form-textarea" id="supportMessage" placeholder="Describe your issue or question..."></textarea>
      </div>
      ${showMessage('Support tickets are typically responded to within 24 hours. Pro and Ultra subscribers receive priority support.', 'info')}
    `;
    
    const actions = [
      { text: 'Submit Ticket', class: 'primary', onclick: 'submitSupportTicket()' }
    ];
    
    showModal('Contact Support', content, actions);
  }

  function showDocumentationModal(userData) {
    const docSections = [
      { title: 'Getting Started', description: 'Basic setup and first steps' },
      { title: 'Features Guide', description: 'Comprehensive feature documentation' },
      { title: 'API Reference', description: 'Developer API documentation' },
      { title: 'Troubleshooting', description: 'Common issues and solutions' },
      { title: 'FAQ', description: 'Frequently asked questions' }
    ];

    const content = `
      <div style="margin-bottom: 16px;">
        <input type="text" class="form-input" placeholder="Search documentation..." id="docSearch">
      </div>
      ${docSections.map(section => `
        <div style="padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 4px; margin: 8px 0; cursor: pointer;" onclick="openDocSection('${section.title}')">
          <div style="font-weight: 500; color: rgba(255,255,255,0.9); margin-bottom: 4px;">${section.title}</div>
          <div style="font-size: 12px; color: rgba(255,255,255,0.6);">${section.description}</div>
        </div>
      `).join('')}
      ${showMessage('Documentation is also available online at docs.steley.com', 'info')}
    `;
    
    const actions = [
      { text: 'Open Online Docs', class: 'primary', onclick: 'openOnlineDocs()' }
    ];
    
    showModal('Documentation', content, actions);
  }

  function showFeedbackModal(userData) {
    const content = `
      <div class="form-group">
        <label class="form-label">Feedback Type</label>
        <select class="form-input form-select" id="feedbackType">
          <option value="general">General Feedback</option>
          <option value="bug">Bug Report</option>
          <option value="feature">Feature Request</option>
          <option value="improvement">Improvement Suggestion</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Rating</label>
        <div style="display: flex; gap: 8px; padding: 8px 0;">
          ${[1,2,3,4,5].map(star => `<span style="font-size: 24px; cursor: pointer; color: rgba(255,255,255,0.3);" onclick="setRating(${star})">⭐</span>`).join('')}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Your Feedback</label>
        <textarea class="form-input form-textarea" id="feedbackMessage" placeholder="Tell us what you think..."></textarea>
      </div>
      ${showMessage('Thank you for helping us improve Steley! Your feedback is valuable to us.', 'info')}
    `;
    
    const actions = [
      { text: 'Submit Feedback', class: 'primary', onclick: 'submitFeedback()' }
    ];
    
    showModal('Send Feedback', content, actions);
  }

  function showExportDataModal(userData) {
    const dataTypes = [
      { id: 'profile', name: 'Profile Information', description: 'Your account details and preferences' },
      { id: 'usage', name: 'Usage Statistics', description: 'Historical usage data and analytics' },
      { id: 'billing', name: 'Billing Information', description: 'Invoices and payment history' },
      { id: 'settings', name: 'Settings & Preferences', description: 'App settings and configurations' }
    ];

    const content = `
      <div class="form-group">
        <label class="form-label">Select Data to Export</label>
        ${dataTypes.map(type => `
          <div style="display: flex; align-items: center; padding: 8px; margin: 4px 0; background: rgba(255,255,255,0.02); border-radius: 4px;">
            <input type="checkbox" id="${type.id}" checked style="margin-right: 8px;">
            <div>
              <div style="color: rgba(255,255,255,0.8); font-weight: 500;">${type.name}</div>
              <div style="color: rgba(255,255,255,0.5); font-size: 12px;">${type.description}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="form-group">
        <label class="form-label">Export Format</label>
        <select class="form-input form-select" id="exportFormat">
          <option value="json">JSON (Recommended)</option>
          <option value="csv">CSV (Spreadsheet)</option>
          <option value="pdf">PDF Report</option>
        </select>
      </div>
      ${showMessage('Your data will be compiled and available for download. Large exports may take a few minutes to prepare.', 'info')}
    `;
    
    const actions = [
      { text: 'Export Data', class: 'primary', onclick: 'exportUserData()' }
    ];
    
    showModal('Export Your Data', content, actions);
  }

  // ================== MODAL ACTION HANDLERS ==================
  
  window.saveAccountChanges = function() {
    const email = document.getElementById('userEmailInput').value;
    const name = document.getElementById('userNameInput').value;
    const timezone = document.getElementById('timezoneSelect').value;
    
    // Simulate API call
    setTimeout(() => {
      alert('Account updated successfully!');
      hideModal();
    }, 1000);
  };

  window.selectPlan = function(planId) {
    if (confirm(`Change to ${planId} plan?`)) {
      setTimeout(() => {
        alert(`Plan changed to ${planId}!`);
        hideModal();
      }, 1000);
    }
  };

  window.exportUsageData = function() {
    setTimeout(() => {
      alert('Usage data exported successfully!');
      hideModal();
    }, 1000);
  };

  window.downloadInvoice = function(invoiceId) {
    alert(`Downloading invoice ${invoiceId}...`);
  };

  window.updatePassword = function() {
    const current = document.getElementById('currentPassword').value;
    const newPass = document.getElementById('newPassword').value;
    const confirm = document.getElementById('confirmPassword').value;
    
    if (newPass !== confirm) {
      alert('Passwords do not match!');
      return;
    }
    
    setTimeout(() => {
      alert('Password updated successfully!');
      hideModal();
    }, 1000);
  };

  window.enable2FA = function() {
    const code = document.getElementById('verificationCode').value;
    if (code.length === 6) {
      setTimeout(() => {
        alert('Two-factor authentication enabled!');
        hideModal();
      }, 1000);
    } else {
      alert('Please enter a valid 6-digit code.');
    }
  };

  window.revokeSession = function() {
    if (confirm('Revoke this session?')) {
      alert('Session revoked successfully!');
    }
  };

  window.revokeAllSessions = function() {
    if (confirm('Revoke all other sessions? You will need to re-authenticate on other devices.')) {
      alert('All sessions revoked successfully!');
      hideModal();
    }
  };

  window.updatePaymentMethod = function() {
    setTimeout(() => {
      alert('Payment method updated successfully!');
      hideModal();
    }, 1000);
  };

  window.downloadReceipts = function() {
    const period = document.getElementById('receiptPeriod').value;
    const format = document.getElementById('receiptFormat').value;
    setTimeout(() => {
      alert(`Receipts for ${period} downloaded as ${format.toUpperCase()}!`);
      hideModal();
    }, 1000);
  };

  window.applyTheme = function() {
    const theme = document.querySelector('input[name="theme"]:checked').value;
    setTimeout(() => {
      alert(`Theme changed to ${theme}!`);
      hideModal();
    }, 500);
  };

  window.submitSupportTicket = function() {
    const subject = document.getElementById('supportSubject').value;
    const message = document.getElementById('supportMessage').value;
    
    if (!subject || !message) {
      alert('Please fill in all fields.');
      return;
    }
    
    setTimeout(() => {
      alert('Support ticket submitted! You will receive a confirmation email shortly.');
      hideModal();
    }, 1000);
  };

  window.openDocSection = function(section) {
    alert(`Opening ${section} documentation...`);
  };

  window.openOnlineDocs = function() {
    window.open('https://docs.steley.com', '_blank');
    hideModal();
  };

  window.setRating = function(rating) {
    // Update visual feedback for rating
    const stars = document.querySelectorAll('[onclick^="setRating"]');
    stars.forEach((star, index) => {
      star.style.color = index < rating ? '#fbbf24' : 'rgba(255,255,255,0.3)';
    });
  };

  window.submitFeedback = function() {
    const message = document.getElementById('feedbackMessage').value;
    if (!message.trim()) {
      alert('Please enter your feedback.');
      return;
    }
    
    setTimeout(() => {
      alert('Feedback submitted! Thank you for helping us improve.');
      hideModal();
    }, 1000);
  };

  window.exportUserData = function() {
    const format = document.getElementById('exportFormat').value;
    setTimeout(() => {
      alert(`Data export prepared! Download will begin shortly (${format.toUpperCase()} format).`);
      hideModal();
    }, 2000);
  };

})(); 
