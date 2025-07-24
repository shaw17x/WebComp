// Steley Subscription Management Page Combined - CSS + HTML Content (Enhanced v2.0) 
const subscriptionCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Subscription Management Container - Optimized Performance */
.subscription-manage-component{max-width:1200px;width:100%;margin:80px auto 40px auto;padding:20px;position:relative;z-index:999;opacity:0;transform:translate3d(0,30px,0) scale(0.95);animation:smoothPageEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards;will-change:transform,opacity;backface-visibility:hidden;perspective:1000px}

/* Enhanced Page Header with Professional Styling */
.subscription-header{text-align:center;margin-bottom:3rem;position:relative;z-index:1000;opacity:0;transform:translate3d(0,20px,0);animation:headerEntry 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s both}
.subscription-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.02);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:8px 20px;margin-bottom:20px;font-size:12px;font-weight:600;color:rgba(255,255,255,0.8);text-transform:uppercase;letter-spacing:1.2px;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);position:relative;overflow:hidden}
.subscription-badge::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent);animation:shimmer 3s infinite}
.subscription-badge:hover{background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.2);transform:translateY(-2px)}
.subscription-badge-dot{width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#1d4ed8);box-shadow:0 0 12px rgba(59,130,246,0.5);animation:pulse 2s ease-in-out infinite}
.subscription-title{font-size:clamp(2.5rem,4vw,3.5rem);font-weight:800;background:linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.9) 40%,rgba(156,163,175,0.8) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-align:center;margin-bottom:16px;position:relative;z-index:1000;letter-spacing:-0.02em}
.subscription-subtitle{font-size:1.2rem;color:rgba(255,255,255,0.7);font-weight:400;margin:0 0 40px 0;text-align:center;position:relative;z-index:1000;opacity:0.9}

/* Enhanced Status Card with Floating Animation */
.current-status-card{background:rgba(0,0,0,0.8);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:2.5rem;margin-bottom:3rem;position:relative;z-index:1000;opacity:0;transform:translate3d(0,40px,0) scale(0.95);animation:cardEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s both;box-shadow:0 20px 40px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.1);will-change:transform,opacity;backface-visibility:hidden}
.current-status-card::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;border-radius:20px;background:linear-gradient(135deg,rgba(255,255,255,0.1) 0%,transparent 50%,rgba(255,255,255,0.05) 100%);pointer-events:none;opacity:0;transition:opacity 0.3s}
.current-status-card:hover::before{opacity:1}
.current-status-card:hover{transform:translateY(-5px) scale(1.02);border-color:rgba(255,255,255,0.2);box-shadow:0 25px 50px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.2)}

/* Professional Status Header */
.status-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;flex-wrap:wrap;gap:1rem}
.status-title{font-size:1.75rem;font-weight:700;color:#fff;display:flex;align-items:center;gap:1rem;letter-spacing:-0.01em}
.status-badge{padding:0.75rem 1.5rem;border-radius:50px;font-size:0.875rem;font-weight:600;display:flex;align-items:center;gap:0.75rem;transition:all 0.3s;backdrop-filter:blur(10px);position:relative;overflow:hidden}
.status-badge::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;filter:brightness(1.2);opacity:0;transition:opacity 0.3s}
.status-badge:hover::before{opacity:1}
.badge-active{background:rgba(34,197,94,0.2);color:#86efac;border:1px solid rgba(34,197,94,0.4);box-shadow:0 0 20px rgba(34,197,94,0.1)}
.badge-expired{background:rgba(239,68,68,0.2);color:#fca5a5;border:1px solid rgba(239,68,68,0.4);box-shadow:0 0 20px rgba(239,68,68,0.1)}
.badge-free{background:rgba(107,114,128,0.2);color:#d1d5db;border:1px solid rgba(107,114,128,0.4);box-shadow:0 0 20px rgba(107,114,128,0.1)}

/* Enhanced Usage Statistics Grid */
.usage-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem;margin-bottom:2.5rem}
.usage-stat{background:rgba(255,255,255,0.03);backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:2rem;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);position:relative;overflow:hidden;will-change:transform;opacity:0;transform:translateY(20px);animation:statEntry 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards}
.usage-stat:nth-child(1){animation-delay:0.4s}
.usage-stat:nth-child(2){animation-delay:0.5s}
.usage-stat:nth-child(3){animation-delay:0.6s}
.usage-stat::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,rgba(255,255,255,0.1) 0%,transparent 50%);opacity:0;transition:opacity 0.3s;border-radius:16px}
.usage-stat:hover{background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.15);transform:translateY(-5px) scale(1.02);box-shadow:0 15px 30px rgba(0,0,0,0.2)}
.usage-stat:hover::before{opacity:1}
.stat-label{color:rgba(255,255,255,0.7);font-size:0.875rem;font-weight:600;margin-bottom:0.75rem;text-transform:uppercase;letter-spacing:0.5px}
.stat-value{color:#fff;font-size:2rem;font-weight:800;margin-bottom:0.5rem;background:linear-gradient(135deg,#fff,rgba(255,255,255,0.8));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-limit{color:rgba(255,255,255,0.5);font-size:0.8rem;font-weight:500}
.usage-bar{width:100%;height:8px;background:rgba(255,255,255,0.1);border-radius:4px;margin-top:1rem;overflow:hidden;position:relative}
.usage-bar::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent);animation:barShimmer 2s infinite}
.usage-fill{height:100%;border-radius:4px;transition:all 0.6s cubic-bezier(0.25,0.46,0.45,0.94);position:relative;overflow:hidden}
.usage-fill::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);animation:fillShimmer 3s infinite}
.usage-low{background:linear-gradient(135deg,#22c55e,#16a34a);box-shadow:0 0 15px rgba(34,197,94,0.3)}
.usage-medium{background:linear-gradient(135deg,#eab308,#d97706);box-shadow:0 0 15px rgba(234,179,8,0.3)}
.usage-high{background:linear-gradient(135deg,#ef4444,#dc2626);box-shadow:0 0 15px rgba(239,68,68,0.3)}

/* Enhanced Plan Cards Section */
.plans-section{margin-bottom:4rem;opacity:0;transform:translateY(30px);animation:sectionEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.6s both}
.plans-title{font-size:2.5rem;font-weight:800;background:linear-gradient(135deg,#fff,rgba(255,255,255,0.8));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-align:center;margin-bottom:1rem;letter-spacing:-0.02em}
.plans-subtitle{font-size:1.1rem;color:rgba(255,255,255,0.7);text-align:center;margin-bottom:3rem;font-weight:400}
.plans-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:2rem;margin-bottom:2rem}

/* Professional Plan Cards with Enhanced Hover Effects */
.plan-card{background:rgba(0,0,0,0.7);backdrop-filter:blur(25px);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:2.5rem;position:relative;transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);opacity:0;transform:translateY(30px);animation:cardEntry 1s cubic-bezier(0.25,0.46,0.45,0.94) forwards;overflow:hidden;will-change:transform;box-shadow:0 10px 30px rgba(0,0,0,0.3)}
.plan-card:nth-child(1){animation-delay:0.7s}
.plan-card:nth-child(2){animation-delay:0.8s}
.plan-card:nth-child(3){animation-delay:0.9s}
.plan-card::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,rgba(255,255,255,0.05) 0%,transparent 50%,rgba(255,255,255,0.02) 100%);opacity:0;transition:opacity 0.4s;border-radius:24px;pointer-events:none}
.plan-card:hover{transform:translateY(-8px) scale(1.03);border-color:rgba(255,255,255,0.25);box-shadow:0 25px 50px rgba(0,0,0,0.4),0 0 0 1px rgba(255,255,255,0.1)}
.plan-card:hover::before{opacity:1}
.plan-card.current{border-color:rgba(34,197,94,0.5);background:rgba(34,197,94,0.08);box-shadow:0 15px 40px rgba(34,197,94,0.15)}
.plan-card.recommended{border-color:rgba(59,130,246,0.5);background:rgba(59,130,246,0.08);box-shadow:0 15px 40px rgba(59,130,246,0.15)}
.plan-card.premium{border-color:rgba(168,85,247,0.5);background:rgba(168,85,247,0.08);box-shadow:0 15px 40px rgba(168,85,247,0.15)}

/* Plan Card Content */
.plan-header{margin-bottom:2rem}
.plan-name{font-size:1.75rem;font-weight:800;color:#fff;margin-bottom:0.75rem;display:flex;align-items:center;gap:1rem;letter-spacing:-0.01em}
.plan-description{color:rgba(255,255,255,0.7);font-size:0.95rem;margin-bottom:1.5rem;line-height:1.6}
.plan-price{display:flex;align-items:baseline;gap:0.75rem;margin-bottom:1.5rem;flex-wrap:wrap}
.price-amount{font-size:3rem;font-weight:900;background:linear-gradient(135deg,#fff,rgba(255,255,255,0.8));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-0.02em}
.price-period{color:rgba(255,255,255,0.6);font-size:1.1rem;font-weight:500}
.price-label{color:rgba(34,197,94,0.9);font-size:0.8rem;font-weight:600;padding:0.25rem 0.75rem;background:rgba(34,197,94,0.15);border-radius:12px;text-transform:uppercase;letter-spacing:0.5px}

/* Enhanced Feature List */
.plan-features{margin-bottom:2.5rem}
.feature-item{display:flex;align-items:center;gap:1rem;margin-bottom:1rem;color:rgba(255,255,255,0.85);font-size:0.95rem;transition:all 0.2s}
.feature-item:hover{color:#fff;transform:translateX(4px)}
.feature-icon{width:1.25rem;height:1.25rem;border-radius:50%;background:rgba(34,197,94,0.2);border:1px solid rgba(34,197,94,0.4);display:flex;align-items:center;justify-content:center;font-size:0.7rem;color:#86efac;font-weight:700;flex-shrink:0}

/* Professional Plan Buttons */
.plan-action{margin-top:auto}
.plan-button{width:100%;padding:1rem 1.5rem;border-radius:12px;font-size:0.95rem;font-weight:700;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);cursor:pointer;border:none;position:relative;overflow:hidden;text-transform:uppercase;letter-spacing:0.5px;backdrop-filter:blur(10px)}
.plan-button::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transition:left 0.6s}
.plan-button:hover::before{left:100%}
.button-primary{background:linear-gradient(135deg,#3b82f6,#1e40af);color:#fff;box-shadow:0 8px 25px rgba(59,130,246,0.3)}
.button-primary:hover{background:linear-gradient(135deg,#2563eb,#1d4ed8);transform:translateY(-2px);box-shadow:0 12px 35px rgba(59,130,246,0.4)}
.button-premium{background:linear-gradient(135deg,#a855f7,#7c3aed);color:#fff;box-shadow:0 8px 25px rgba(168,85,247,0.3)}
.button-premium:hover{background:linear-gradient(135deg,#9333ea,#6d28d9);transform:translateY(-2px);box-shadow:0 12px 35px rgba(168,85,247,0.4)}
.button-current{background:rgba(34,197,94,0.2);color:#86efac;border:1px solid rgba(34,197,94,0.4);box-shadow:0 8px 25px rgba(34,197,94,0.15)}
.button-current:hover{background:rgba(34,197,94,0.3);border-color:rgba(34,197,94,0.6)}
.button-secondary{background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.9);border:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 25px rgba(255,255,255,0.05)}
.button-secondary:hover{background:rgba(255,255,255,0.15);border-color:rgba(255,255,255,0.3);transform:translateY(-2px)}

/* Enhanced Account Management Section */
.account-section{background:rgba(0,0,0,0.7);backdrop-filter:blur(25px);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:3rem;margin-bottom:3rem;position:relative;z-index:1000;box-shadow:0 15px 40px rgba(0,0,0,0.3);opacity:0;transform:translateY(30px);animation:sectionEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 1s both}
.account-title{font-size:2rem;font-weight:700;background:linear-gradient(135deg,#fff,rgba(255,255,255,0.8));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:2rem;letter-spacing:-0.01em}
.account-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem}
.account-item{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:2rem;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);position:relative;overflow:hidden;backdrop-filter:blur(10px)}
.account-item::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,rgba(255,255,255,0.05) 0%,transparent 50%);opacity:0;transition:opacity 0.3s;border-radius:16px}
.account-item:hover{background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.15);transform:translateY(-3px);box-shadow:0 10px 25px rgba(0,0,0,0.2)}
.account-item:hover::before{opacity:1}
.account-item-title{color:#fff;font-weight:700;margin-bottom:0.75rem;display:flex;align-items:center;gap:0.75rem;font-size:1.1rem}
.account-item-description{color:rgba(255,255,255,0.7);font-size:0.9rem;margin-bottom:1.5rem;line-height:1.6}
.account-button{padding:0.75rem 1.5rem;border-radius:10px;font-size:0.875rem;font-weight:600;transition:all 0.3s;cursor:pointer;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.9);backdrop-filter:blur(10px);text-transform:uppercase;letter-spacing:0.5px}
.account-button:hover{background:rgba(255,255,255,0.12);border-color:rgba(255,255,255,0.35);transform:translateY(-1px);box-shadow:0 5px 15px rgba(255,255,255,0.1)}

/* Enhanced Icons */
.icon-free{color:#9ca3af;filter:drop-shadow(0 0 8px rgba(156,163,175,0.3))}
.icon-pro{color:#3b82f6;filter:drop-shadow(0 0 8px rgba(59,130,246,0.4))}
.icon-ultra{color:#a855f7;filter:drop-shadow(0 0 8px rgba(168,85,247,0.4))}

/* Professional Footer */
.subscription-footer{text-align:center;margin-top:4rem;padding:3rem 2rem;border-top:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.3);backdrop-filter:blur(20px);border-radius:20px 20px 0 0}
.footer-text{color:rgba(255,255,255,0.6);font-size:0.9rem;margin-bottom:1.5rem;font-weight:400}
.footer-links{display:flex;justify-content:center;gap:2.5rem;flex-wrap:wrap}
.footer-link{color:rgba(255,255,255,0.7);text-decoration:none;font-size:0.875rem;transition:all 0.3s;font-weight:500;position:relative}
.footer-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:linear-gradient(135deg,#3b82f6,#a855f7);transition:width 0.3s}
.footer-link:hover{color:#fff;transform:translateY(-1px)}
.footer-link:hover::after{width:100%}

/* Enhanced Loading Spinner */
.loading-spinner{width:16px;height:16px;border:2px solid rgba(255,255,255,0.2);border-top:2px solid rgba(255,255,255,0.8);border-radius:50%;animation:spin 1s linear infinite}

/* Professional Animations with Hardware Acceleration */
@keyframes smoothPageEntry{from{opacity:0;transform:translate3d(0,40px,0) scale(0.95)}to{opacity:1;transform:translate3d(0,0,0) scale(1)}}
@keyframes headerEntry{from{opacity:0;transform:translate3d(0,30px,0)}to{opacity:1;transform:translate3d(0,0,0)}}
@keyframes cardEntry{from{opacity:0;transform:translate3d(0,40px,0) scale(0.95)}to{opacity:1;transform:translate3d(0,0,0) scale(1)}}
@keyframes statEntry{from{opacity:0;transform:translate3d(0,20px,0)}to{opacity:1;transform:translate3d(0,0,0)}}
@keyframes sectionEntry{from{opacity:0;transform:translate3d(0,30px,0)}to{opacity:1;transform:translate3d(0,0,0)}}
@keyframes shimmer{0%{left:-100%}100%{left:100%}}
@keyframes barShimmer{0%{left:-100%}50%{left:100%}100%{left:100%}}
@keyframes fillShimmer{0%{left:-100%}100%{left:100%}}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.7;transform:scale(1.1)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

/* Enhanced Responsive Design */
@media (max-width: 768px){
  .subscription-manage-component{margin:40px auto 20px auto;padding:15px}
  .subscription-title{font-size:2.25rem}
  .plans-grid{grid-template-columns:1fr;gap:1.5rem}
  .usage-stats{grid-template-columns:1fr;gap:1rem}
  .account-grid{grid-template-columns:1fr}
  .footer-links{flex-direction:column;gap:1.5rem}
  .status-header{flex-direction:column;align-items:stretch;text-align:center}
  .plan-price{justify-content:center}
  .current-status-card{padding:2rem}
  .account-section{padding:2rem}
}

@media (max-width: 480px){
  .subscription-manage-component{padding:10px}
  .current-status-card{padding:1.5rem}
  .plan-card{padding:2rem}
  .account-section{padding:1.5rem}
  .subscription-title{font-size:2rem}
  .price-amount{font-size:2.5rem}
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
    <div style="margin-top: 1.5rem; padding: 1.5rem; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
      <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin: 0;">
        Logged in as: <span id="userEmail" style="color: #fff; font-weight: 600;">Loading...</span>
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

// Auto-execute function with enhanced initialization (matching successful pages)
(function() {
  console.log('🚀 Enhanced Subscription Management v2.0 Starting...');
  
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
  
  console.log('📍 URL Analysis:', { pathname, hash, isSubscriptionPage });
  
  // Only load if this is actually a subscription management page
  if (!isSubscriptionPage) {
    console.log('❌ Not a subscription page, skipping...');
    return;
  }
  
  // Add CSS immediately for instant styling
  const style = document.createElement('style');
  style.textContent = subscriptionCSS;
  document.head.appendChild(style);
  console.log('✅ Enhanced subscription CSS added');
  
  // Initialize with optimized timing (matching successful pages)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initializeSubscriptionPage, 50);
    });
  } else {
    setTimeout(initializeSubscriptionPage, 50);
  }
  
  function initializeSubscriptionPage() {
    console.log('🔧 Initializing enhanced subscription page...');
    
    // Check if subscription content already exists
    if (document.querySelector('.subscription-manage-component')) {
      console.log('✅ Subscription component already loaded');
      return;
    }
    
    // 🎯 EXACT SAME INJECTION LOGIC AS SUCCESSFUL PAGES
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    console.log('📍 Target container:', mainContent.tagName);
    
    // Clear and inject with React-safe approach
    if (mainContent !== document.body) {
      mainContent.innerHTML = subscriptionHTML;
    } else {
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        header.insertAdjacentHTML('afterend', subscriptionHTML);
      } else {
        document.body.insertAdjacentHTML('afterbegin', subscriptionHTML);
      }
    }
    
    console.log('✅ Enhanced subscription HTML injected');
    
    // Initialize with staggered timing for smooth performance
    setTimeout(() => {
      initializeEnhancedAnimations();
      initializeSubscriptionLogic();
    }, 100);
  }
  
  function initializeEnhancedAnimations() {
    console.log('🎬 Initializing enhanced animations...');
    
    // Apply hardware acceleration to key elements
    const animatedElements = document.querySelectorAll('.subscription-manage-component, .current-status-card, .plan-card, .usage-stat');
    animatedElements.forEach(element => {
      element.style.willChange = 'transform, opacity';
      element.style.backfaceVisibility = 'hidden';
    });
    
    // Remove will-change after animations complete
    setTimeout(() => {
      animatedElements.forEach(element => {
        element.style.willChange = 'auto';
      });
      console.log('🎯 Animation optimization applied');
    }, 2000);
  }
  
  function initializeSubscriptionLogic() {
    console.log('🔧 Initializing enhanced subscription logic...');
    
    // 🎯 EXACT SAME AUTH LOGIC AS WORKING COMPONENTS
    let userEmail = null;
    let isAuthenticated = false;
    
    const userStr = localStorage.getItem('supabase_user');
    const sessionStr = localStorage.getItem('steley_session');
    const supabaseSessionStr = localStorage.getItem('supabase_session');
    const tokenStr = localStorage.getItem('supabase.auth.token');
    
    console.log('🔍 Auth check:', { 
      user: !!userStr, 
      session: !!sessionStr, 
      supabaseSession: !!supabaseSessionStr, 
      token: !!tokenStr 
    });
    
    // Multi-format auth detection (same as ProfileDropdown)
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        if (user.email) {
          userEmail = user.email;
          isAuthenticated = true;
          console.log('✅ User authenticated via user data:', userEmail);
        }
      } catch {
        console.log('❌ Failed to parse user data');
      }
    } else if (sessionStr) {
      try {
        const session = JSON.parse(sessionStr);
        if (session.user && session.user.email) {
          userEmail = session.user.email;
          isAuthenticated = true;
          console.log('✅ User authenticated via Supabase session:', userEmail);
        } else if (session.email && !session.user) {
          userEmail = session.email;
          isAuthenticated = true;
          console.log('✅ User authenticated via login session:', userEmail);
        }
      } catch {
        console.log('❌ Failed to parse session data');
      }
    }
    
    if (!isAuthenticated) {
      console.log('❌ User not authenticated, redirecting...');
      alert('Please log in to access your subscription management.');
      window.location.href = '/login';
      return;
    }
    
    console.log('✅ User authenticated successfully:', userEmail);
    
    // Enhanced demo user data
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
    
    // Update UI with enhanced interactions
    updateEnhancedStatus(userData);
    setupEnhancedPlanButtons(userData);
    setupEnhancedAccountButtons();
    
    console.log('✅ Enhanced subscription functionality initialized');
  }
  
  function updateEnhancedStatus(userData) {
    console.log('🔧 Updating enhanced status display...');
    
    const elements = {
      planIcon: document.getElementById('currentPlanIcon'),
      planName: document.getElementById('currentPlanName'),
      statusBadge: document.getElementById('statusBadge'),
      statusText: document.getElementById('statusText'),
      userEmail: document.getElementById('userEmail')
    };
    
    const planConfigs = {
      'FREE': { icon: '🛡️', name: 'Free Plan', class: 'badge-free' },
      'PRO': { icon: '⭐', name: 'Pro Plan', class: 'badge-active' },
      'ULTRA': { icon: '👑', name: 'Ultra Plan', class: 'badge-active' }
    };
    
    const config = planConfigs[userData.currentPlan] || planConfigs['FREE'];
    
    // Update with smooth transitions
    Object.entries(elements).forEach(([key, element]) => {
      if (!element) return;
      
      switch(key) {
        case 'planIcon':
          element.textContent = config.icon;
          break;
        case 'planName':
          element.textContent = config.name;
          break;
        case 'statusBadge':
          element.className = `status-badge ${config.class}`;
          break;
        case 'statusText':
          element.textContent = userData.isActive ? 'Active' : 'Expired';
          break;
        case 'userEmail':
          element.textContent = userData.email;
          break;
      }
    });
    
    updateEnhancedUsageStats(userData.usage, userData.resetTime);
    console.log('✅ Enhanced status display updated');
  }
  
  function updateEnhancedUsageStats(usage, resetTime) {
    console.log('🔧 Updating enhanced usage stats...');
    
    // Screenshots with smooth animation
    const screenshotElements = {
      usage: document.getElementById('screenshotUsage'),
      limit: document.getElementById('screenshotLimit'),
      bar: document.getElementById('screenshotBar')
    };
    
    if (screenshotElements.usage) screenshotElements.usage.textContent = usage.screenshots.used;
    if (screenshotElements.limit) screenshotElements.limit.textContent = `of ${usage.screenshots.limit} daily limit`;
    if (screenshotElements.bar) {
      const percentage = (usage.screenshots.used / usage.screenshots.limit) * 100;
      screenshotElements.bar.style.width = `${percentage}%`;
      screenshotElements.bar.className = `usage-fill ${getUsageClass(percentage)}`;
    }
    
    // AI Requests with smooth animation
    const aiElements = {
      usage: document.getElementById('aiUsage'),
      limit: document.getElementById('aiLimit'),
      bar: document.getElementById('aiBar')
    };
    
    if (aiElements.usage) aiElements.usage.textContent = usage.aiRequests.used;
    if (aiElements.limit) aiElements.limit.textContent = `of ${usage.aiRequests.limit} daily limit`;
    if (aiElements.bar) {
      const percentage = (usage.aiRequests.used / usage.aiRequests.limit) * 100;
      aiElements.bar.style.width = `${percentage}%`;
      aiElements.bar.className = `usage-fill ${getUsageClass(percentage)}`;
    }
    
    // Reset time with formatting
    const resetTimeElement = document.getElementById('resetTime');
    if (resetTimeElement && resetTime) {
      const timeString = resetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      resetTimeElement.textContent = timeString;
    }
    
    console.log('✅ Enhanced usage stats updated');
  }
  
  function getUsageClass(percentage) {
    if (percentage < 60) return 'usage-low';
    if (percentage < 90) return 'usage-medium';
    return 'usage-high';
  }
  
  function setupEnhancedPlanButtons(userData) {
    console.log('🔧 Setting up enhanced plan buttons...');
    
    const buttons = ['freeButton', 'proButton', 'ultraButton'];
    
    buttons.forEach(buttonId => {
      const button = document.getElementById(buttonId);
      if (!button) return;
      
      button.addEventListener('click', function() {
        const planType = buttonId.replace('Button', '').toUpperCase();
        handleEnhancedPlanUpgrade(planType, userData, this);
      });
    });
    
    updateEnhancedPlanStyling(userData.currentPlan);
    console.log('✅ Enhanced plan buttons setup complete');
  }
  
  function updateEnhancedPlanStyling(currentPlan) {
    const planConfigs = {
      'FREE': { buttonId: 'freeButton', cardId: 'freePlan' },
      'PRO': { buttonId: 'proButton', cardId: 'proPlan' },
      'ULTRA': { buttonId: 'ultraButton', cardId: 'ultraPlan' }
    };
    
    Object.entries(planConfigs).forEach(([plan, config]) => {
      const button = document.getElementById(config.buttonId);
      const card = document.getElementById(config.cardId);
      
      if (!button || !card) return;
      
      if (plan === currentPlan) {
        card.classList.add('current');
        button.textContent = '✓ Current Plan';
        button.className = 'plan-button button-current';
      } else {
        card.classList.remove('current');
        const buttonText = plan === 'FREE' ? 'Downgrade to Free' : `Upgrade to ${plan}`;
        const buttonClass = plan === 'FREE' ? 'button-secondary' : 
                          plan === 'PRO' ? 'button-primary' : 'button-premium';
        button.textContent = buttonText;
        button.className = `plan-button ${buttonClass}`;
      }
    });
  }
  
  function handleEnhancedPlanUpgrade(planType, userData, button) {
    console.log(`🚀 Enhanced ${planType} plan upgrade initiated`);
    
    const originalHTML = button.innerHTML;
    
    // Enhanced loading state
    button.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;gap:0.75rem;">
        <div class="loading-spinner"></div>
        Processing...
      </div>
    `;
    button.disabled = true;
    
    // Simulate processing with enhanced feedback
    setTimeout(() => {
      let message = '';
      let success = false;
      
      if (planType === userData.currentPlan) {
        message = 'You are already on this plan!';
      } else if (planType === 'FREE') {
        const confirmed = confirm('Are you sure you want to downgrade to the FREE plan?\n\nYou will lose access to premium features.');
        if (confirmed) {
          message = 'Downgrade successful! This is a demo - in production, this would update your subscription.';
          success = true;
        }
      } else {
        const prices = { PRO: '$19.99', ULTRA: '$99.99' };
        const confirmed = confirm(`Upgrade to ${planType} plan for ${prices[planType]}/month?\n\nNote: This is a demo. In production, this would redirect to Stripe checkout.`);
        if (confirmed) {
          message = 'Upgrade successful! This is a demo - in production, this would process payment.';
          success = true;
        }
      }
      
      if (message) {
        // Enhanced success/error feedback
        button.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:center;gap:0.75rem;">
            ${success ? '✅' : '⚠️'} ${success ? 'Success!' : 'Notice'}
          </div>
        `;
        
        setTimeout(() => {
          alert(message);
          button.innerHTML = originalHTML;
          button.disabled = false;
        }, 1000);
      } else {
        button.innerHTML = originalHTML;
        button.disabled = false;
      }
    }, 2000);
  }
  
  function setupEnhancedAccountButtons() {
    console.log('🔧 Setting up enhanced account buttons...');
    
    const buttonConfigs = [
      { id: 'viewHistoryBtn', action: 'View usage history', icon: '📊' },
      { id: 'updatePaymentBtn', action: 'Update payment method', icon: '💳' },
      { id: 'accountSettingsBtn', action: 'Open account settings', icon: '⚙️' },
      { id: 'contactSupportBtn', action: 'Contact support', icon: '📞' }
    ];
    
    buttonConfigs.forEach(({ id, action, icon }) => {
      const button = document.getElementById(id);
      if (!button) return;
      
      button.addEventListener('click', function() {
        console.log(`🔧 ${action} clicked`);
        
        const originalHTML = this.innerHTML;
        this.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
            <div class="loading-spinner"></div>
            Loading...
          </div>
        `;
        this.disabled = true;
        
        setTimeout(() => {
          this.innerHTML = `${icon} Opening...`;
          
          setTimeout(() => {
            alert(`${action} functionality would be implemented here in a real application!`);
            this.innerHTML = originalHTML;
            this.disabled = false;
          }, 800);
        }, 1000);
      });
    });
    
    console.log('✅ Enhanced account buttons setup complete');
  }
})(); 
