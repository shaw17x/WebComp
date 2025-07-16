// Pricing Combined - CSS + HTML Content
const pricingCSS = `
body{margin:0!important;padding:0!important}
.pricing-page{max-width:1200px;margin:80px auto;padding:20px;position:relative;z-index:999}
.pricing-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#a5b4fc;text-transform:uppercase;letter-spacing:1px;animation:badgeEntry 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s both;position:relative;z-index:1000}
.pricing-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6366f1;animation:spin 3s linear infinite}
.pricing-header{text-align:center!important;margin-bottom:80px!important;position:relative!important}
.pricing-header::before{content:''!important;position:absolute!important;top:-20px!important;left:50%!important;transform:translateX(-50%)!important;width:100px!important;height:4px!important;background:linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899)!important;border-radius:2px!important}
.pricing-title{font-size:4rem!important;font-weight:800!important;margin:30px 0 20px 0!important;background:linear-gradient(135deg,#fff 0%,#6366f1 50%,#8b5cf6 100%)!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important;letter-spacing:-0.02em!important}
.pricing-subtitle{font-size:1.2rem!important;color:#94a3b8!important;font-weight:400!important;margin:0!important;opacity:0.8!important}
.pricing-content{max-width:900px!important;margin:0 auto!important}
.plans-grid{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))!important;gap:30px!important;margin-bottom:80px!important}
.plan-card{background:linear-gradient(135deg,rgba(15,23,42,0.6) 0%,rgba(30,41,59,0.3) 100%)!important;backdrop-filter:blur(10px)!important;border:1px solid rgba(99,102,241,0.1)!important;border-radius:20px!important;padding:40px!important;position:relative!important;overflow:hidden!important;transition:all 0.3s ease!important;z-index:1000}
.plan-card:hover{transform:translateY(-5px)!important;border-color:rgba(99,102,241,0.3)!important;box-shadow:0 20px 40px rgba(99,102,241,0.1)!important}
.plan-card.popular{border-color:rgba(139,92,246,0.5)!important;box-shadow:0 0 30px rgba(139,92,246,0.3)!important}
.plan-card::before{content:''!important;position:absolute!important;top:0!important;left:0!important;right:0!important;height:1px!important;background:linear-gradient(90deg,transparent,#6366f1,transparent)!important}
.popular-badge{position:absolute!important;top:-1px!important;left:50%!important;transform:translateX(-50%)!important;background:linear-gradient(135deg,#8b5cf6,#ec4899)!important;color:#fff!important;padding:8px 20px!important;border-radius:0 0 12px 12px!important;font-size:0.8rem!important;font-weight:600!important}
.plan-name{font-size:1.5rem!important;font-weight:700!important;color:#fff!important;margin-bottom:10px!important}
.plan-price{font-size:3rem!important;font-weight:800!important;color:#fff!important;margin-bottom:5px!important}
.plan-period{color:#94a3b8!important;font-size:1rem!important;margin-bottom:20px!important}
.plan-description{color:#cbd5e1!important;font-size:1rem!important;margin-bottom:30px!important;line-height:1.6!important}
.plan-features{list-style:none!important;margin-bottom:40px!important;padding:0!important}
.plan-features li{color:#cbd5e1!important;margin-bottom:12px!important;padding-left:25px!important;position:relative!important;line-height:1.5!important}
.plan-features li::before{content:'✓'!important;position:absolute!important;left:0!important;color:#10b981!important;font-weight:bold!important}
.plan-button{width:100%!important;padding:15px 30px!important;border:none!important;border-radius:12px!important;font-size:1rem!important;font-weight:600!important;cursor:pointer!important;transition:all 0.3s ease!important;text-decoration:none!important;display:inline-block!important;text-align:center!important}
.plan-button.primary{background:linear-gradient(135deg,#6366f1,#8b5cf6)!important;color:#fff!important}
.plan-button.primary:hover{background:linear-gradient(135deg,#5855eb,#7c3aed)!important;transform:translateY(-2px)!important}
.plan-button.secondary{background:transparent!important;color:#6366f1!important;border:2px solid #6366f1!important}
.plan-button.secondary:hover{background:#6366f1!important;color:#fff!important}
.faq-section{margin-top:80px!important}
.faq-title{font-size:2.5rem!important;font-weight:700!important;text-align:center!important;margin-bottom:50px!important;background:linear-gradient(135deg,#fff 0%,#6366f1 50%,#8b5cf6 100%)!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important}
.faq-item{border-bottom:1px solid rgba(255,255,255,0.1)!important}
.faq-button{width:100%!important;padding:32px 0!important;background:transparent!important;border:none!important;display:flex!important;justify-content:space-between!important;align-items:center!important;cursor:pointer!important;transition:all 0.3s ease!important;color:#fff!important;font-size:1.2rem!important;font-weight:500!important;text-align:left!important}
.faq-button:hover{transform:translateX(8px)!important}
.faq-question{padding-right:20px!important;line-height:1.4!important}
.faq-icon{width:24px!important;height:24px!important;display:flex!important;align-items:center!important;justify-content:center!important;transition:transform 0.3s ease!important;flex-shrink:0!important}
.faq-icon.open{transform:rotate(45deg)!important}
.faq-answer{overflow:hidden!important;transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)!important;max-height:0!important;opacity:0!important}
.faq-answer.open{max-height:500px!important;opacity:1!important}
.faq-answer-content{padding-bottom:32px!important;padding-right:44px!important}
.faq-answer-text{font-size:1rem!important;color:rgba(255,255,255,0.7)!important;line-height:1.6!important;margin:0!important}

/* Back to Home Button */
.back-home-container{text-align:center;margin:60px auto 40px;position:relative;z-index:1000}
.back-home-btn{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.05));border:1px solid rgba(99,102,241,0.3);border-radius:50px;padding:14px 28px;font-size:16px;font-weight:600;color:#fff;text-decoration:none;transition:all 0.3s ease;cursor:pointer;position:relative;overflow:hidden}
.back-home-btn:hover{transform:translateY(-2px);border-color:rgba(99,102,241,0.6);box-shadow:0 10px 30px rgba(99,102,241,0.3);background:linear-gradient(135deg,rgba(99,102,241,0.2),rgba(139,92,246,0.1))}
.back-home-btn::before{content:'';position:absolute;top:50%;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transform:translateY(-50%);transition:left 0.6s ease}
.back-home-btn:hover::before{left:100%}
.back-home-btn svg{width:20px;height:20px;transition:transform 0.3s ease}
.back-home-btn:hover svg{transform:translateX(-3px)}

@media(max-width:768px){
  .pricing-page{padding:15px;margin:60px auto}
  .pricing-title{font-size:2rem}
  .plan-card{padding:20px}
  .back-home-btn{font-size:14px;padding:12px 24px}
}

@keyframes badgeEntry{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
`;

const pricingHTML = `
<div class="pricing-page">
  <div style="text-align: center;">
    <div class="pricing-badge">
      <div class="pricing-badge-dot"></div>
      Ghost Pilot Pricing
    </div>
  </div>
  
  <div class="pricing-header">
    <h1 class="pricing-title">Pricing Plans</h1>
    <p class="pricing-subtitle">Choose the perfect plan for your interview success</p>
  </div>

  <div class="pricing-content">
    <div class="plans-grid">
      <div class="plan-card">
        <h3 class="plan-name">Free</h3>
        <div class="plan-price">$0</div>
        <div class="plan-period">/month</div>
        <p class="plan-description">Get started with basic AI assistance</p>
        <ul class="plan-features">
          <li>10 AI queries per month</li>
          <li>Basic screenshot analysis</li>
          <li>Standard response time</li>
          <li>Community support</li>
          <li>Basic templates</li>
        </ul>
        <a href="#" class="plan-button secondary">Get Started</a>
      </div>

      <div class="plan-card popular">
        <div class="popular-badge">Most Popular</div>
        <h3 class="plan-name">Pro</h3>
        <div class="plan-price">$29</div>
        <div class="plan-period">/month</div>
        <p class="plan-description">Unlimited AI power for serious interview prep</p>
        <ul class="plan-features">
          <li>Unlimited AI queries</li>
          <li>Advanced screenshot analysis</li>
          <li>Priority response time</li>
          <li>24/7 chat support</li>
          <li>Premium templates</li>
          <li>Custom AI models</li>
          <li>Advanced analytics</li>
          <li>Interview recording</li>
        </ul>
        <a href="#" class="plan-button primary">Start Pro Trial</a>
      </div>

      <div class="plan-card">
        <h3 class="plan-name">Ultra</h3>
        <div class="plan-price">$99</div>
        <div class="plan-period">/month</div>
        <p class="plan-description">Enterprise-grade features for teams</p>
        <ul class="plan-features">
          <li>Everything in Pro</li>
          <li>Team collaboration</li>
          <li>Custom integrations</li>
          <li>Dedicated account manager</li>
          <li>Advanced security</li>
          <li>Priority support</li>
          <li>Custom deployment</li>
        </ul>
        <a href="#" class="plan-button secondary">Contact Sales</a>
      </div>
    </div>

    <div class="faq-section">
      <h2 class="faq-title">Frequently Asked Questions</h2>
      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-button" onclick="toggleFAQ(0)">
            <span class="faq-question">What's included in the free plan?</span>
            <div class="faq-icon" id="icon-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-0">
            <div class="faq-answer-content">
              <p class="faq-answer-text">The Free plan includes 10 AI queries per month, basic screenshot analysis, standard response time, community support, and basic templates. It's perfect for getting started with Ghost Pilot and testing our platform.</p>
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-button" onclick="toggleFAQ(1)">
            <span class="faq-question">Can I upgrade or downgrade my plan anytime?</span>
            <div class="faq-icon" id="icon-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-1">
            <div class="faq-answer-content">
              <p class="faq-answer-text">Yes, you can upgrade or downgrade your subscription at any time. Changes take effect immediately for upgrades, and at the end of your current billing cycle for downgrades. However, please note that all sales are final and we do not offer refunds.</p>
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-button" onclick="toggleFAQ(2)">
            <span class="faq-question">How does the 14-day free trial work?</span>
            <div class="faq-icon" id="icon-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-2">
            <div class="faq-answer-content">
              <p class="faq-answer-text">The Pro plan comes with a 14-day free trial that gives you full access to all Pro features. No credit card required to start. After the trial period, you'll be automatically subscribed to the Pro plan unless you cancel before the trial ends.</p>
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-button" onclick="toggleFAQ(3)">
            <span class="faq-question">Is my data secure with Ghost Pilot?</span>
            <div class="faq-icon" id="icon-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-3">
            <div class="faq-answer-content">
              <p class="faq-answer-text">Absolutely. Ghost Pilot employs enterprise-grade security including SSL encryption, secure data storage, advanced security protocols, and compliance with industry standards. Screenshots are processed temporarily and automatically deleted within 24 hours. We never use your data to train AI models.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="back-home-container">
    <a href="/" class="back-home-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Back to Home
    </a>
  </div>
</div>
`;

// FAQ functionality
let openFAQ = null;

window.toggleFAQ = function(index) {
  const answer = document.getElementById('answer-' + index);
  const icon = document.getElementById('icon-' + index);
  
  // Close currently open FAQ if it's different from clicked one
  if (openFAQ !== null && openFAQ !== index) {
    const prevAnswer = document.getElementById('answer-' + openFAQ);
    const prevIcon = document.getElementById('icon-' + openFAQ);
    if (prevAnswer) prevAnswer.classList.remove('open');
    if (prevIcon) prevIcon.classList.remove('open');
  }
  
  // Toggle clicked FAQ
  if (openFAQ === index) {
    // Close if already open
    if (answer) answer.classList.remove('open');
    if (icon) icon.classList.remove('open');
    openFAQ = null;
  } else {
    // Open if closed
    if (answer) answer.classList.add('open');
    if (icon) icon.classList.add('open');
    openFAQ = index;
  }
};

// Auto-execute function to inject CSS and HTML
(function() {
  console.log('🚀 Pricing script starting...');
  
  // Add CSS
  const style = document.createElement('style');
  style.textContent = pricingCSS;
  document.head.appendChild(style);
  console.log('✅ CSS added');
  
  // Add HTML when DOM is ready
  function initializePricingPage() {
    console.log('🔧 Initializing pricing page...');
    
    // Try multiple strategies to find content area
    const selectors = [
      'main',
      '.main-content', 
      '[data-framer-name="Content"]',
      '.framer-page-content',
      '[role="main"]',
      '.content',
      '#main'
    ];
    
    let mainContent = null;
    for (const selector of selectors) {
      mainContent = document.querySelector(selector);
      if (mainContent) {
        console.log('📍 Found content area:', selector);
        break;
      }
    }
    
    // Fallback to body
    if (!mainContent) {
      mainContent = document.body;
      console.log('📍 Using body as fallback');
    }
    
    // Clear and inject content
    if (mainContent !== document.body) {
      mainContent.innerHTML = pricingHTML;
    } else {
      // If using body, find header and insert after it
      const header = document.querySelector('header') || document.querySelector('nav') || document.querySelector('.header');
      if (header) {
        header.insertAdjacentHTML('afterend', pricingHTML);
        console.log('📍 Inserted after header');
      } else {
        document.body.insertAdjacentHTML('afterbegin', pricingHTML);
        console.log('📍 Inserted at body beginning');
      }
    }
    
    console.log('✅ HTML content added');
    
    // Initialize first FAQ as open
    setTimeout(() => {
      if (typeof window.toggleFAQ === 'function') {
        window.toggleFAQ(0);
        console.log('✅ FAQ initialized');
      }
    }, 500);
  }
  
  // Initialize when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePricingPage);
  } else {
    initializePricingPage();
  }
  
  console.log('✅ Pricing script completed');
})();
