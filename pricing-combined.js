// Pricing Page Combined - CSS + HTML Content with Documentation-Style Animations
// Added: Fade-in animations matching documentation page
// Added: Staggered section animations for smooth loading experience
const pricingCSS = `
.pricing-page{max-width:1200px;margin:80px auto;padding:20px;position:relative;z-index:999}
.pricing-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#a5b4fc;text-transform:uppercase;letter-spacing:1px;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s forwards;position:relative;z-index:1000}
.pricing-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6366f1;animation:spin 3s linear infinite}
.pricing-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#6366f1 50%,#8b5cf6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards}
.pricing-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;opacity:0.8;text-align:center;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards}

/* Pricing Cards */
.pricing-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:30px;margin:60px 0;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.pricing-grid.pricing-animated{opacity:1;transform:translateY(0) scale(1)}
.pricing-card{background:linear-gradient(135deg,rgba(15,23,42,0.6),rgba(30,41,59,0.3));backdrop-filter:blur(10px);border:1px solid rgba(99,102,241,0.1);border-radius:20px;padding:30px;transition:all 0.3s ease;position:relative;overflow:hidden}
.pricing-card:hover{transform:translateY(-5px);border-color:rgba(99,102,241,0.3);box-shadow:0 20px 40px rgba(99,102,241,0.1)}
.pricing-card.featured{border-color:rgba(99,102,241,0.4);background:linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.05))}
.pricing-card.featured::before{content:'MOST POPULAR';position:absolute;top:20px;right:20px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:10px;font-weight:700;padding:4px 12px;border-radius:12px;letter-spacing:0.5px}

.plan-name{font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:8px}
.plan-price{font-size:3rem;font-weight:800;color:#6366f1;margin-bottom:8px}
.plan-price span{font-size:1rem;color:#94a3b8;font-weight:400}
.plan-description{color:#cbd5e1;font-size:1rem;margin-bottom:30px;line-height:1.5}

.plan-features{list-style:none;padding:0;margin:30px 0}
.plan-features li{color:#cbd5e1;font-size:1rem;margin-bottom:12px;padding-left:25px;position:relative;line-height:1.5}
.plan-features li::before{content:'✓';position:absolute;left:0;color:#6366f1;font-weight:bold;font-size:1.2rem}

.plan-button{width:100%;background:linear-gradient(135deg,#6366f1,#8b5cf6);border:none;border-radius:12px;padding:14px 28px;font-size:16px;font-weight:600;color:#fff;cursor:pointer;transition:all 0.3s ease;text-decoration:none;display:inline-block;text-align:center}
.plan-button:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(99,102,241,0.3)}
.plan-button.secondary{background:transparent;border:1px solid rgba(99,102,241,0.3);color:#6366f1}
.plan-button.secondary:hover{background:rgba(99,102,241,0.1);border-color:rgba(99,102,241,0.6)}

/* FAQ Section */
.faq-section{margin:80px 0;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.faq-section.pricing-animated{opacity:1;transform:translateY(0) scale(1)}
.faq-title{font-size:2.5rem;font-weight:700;color:#fff;text-align:center;margin-bottom:50px}
.faq-container{max-width:800px;margin:0 auto}
.faq-item{background:linear-gradient(135deg,rgba(15,23,42,0.6),rgba(30,41,59,0.3));backdrop-filter:blur(10px);border:1px solid rgba(99,102,241,0.1);border-radius:16px;margin-bottom:16px;overflow:hidden;transition:all 0.3s ease}
.faq-item:hover{border-color:rgba(99,102,241,0.3)}

.faq-question{width:100%;background:transparent;border:none;padding:24px;text-align:left;font-size:1.1rem;font-weight:600;color:#fff;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:all 0.3s ease}
.faq-question:hover{background:rgba(99,102,241,0.05)}

.faq-icon{width:24px;height:24px;color:#6366f1;transition:transform 0.3s ease;transform:rotate(0deg)}

.faq-answer{max-height:0;opacity:0;overflow:hidden;transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);background:rgba(15,23,42,0.3)}
.faq-answer-content{padding:0 24px 24px 24px;color:#cbd5e1;font-size:1rem;line-height:1.6}

/* Back to Home Button */
.back-home-container{text-align:center;margin:60px auto 40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.back-home-btn{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.05));border:1px solid rgba(99,102,241,0.3);border-radius:50px;padding:14px 28px;font-size:16px;font-weight:600;color:#fff;text-decoration:none;transition:all 0.3s ease;cursor:pointer;position:relative;overflow:hidden}
.back-home-btn:hover{transform:translateY(-2px);border-color:rgba(99,102,241,0.6);box-shadow:0 10px 30px rgba(99,102,241,0.3);background:linear-gradient(135deg,rgba(99,102,241,0.2),rgba(139,92,246,0.1))}
.back-home-btn::before{content:'';position:absolute;top:50%;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transform:translateY(-50%);transition:left 0.6s ease}
.back-home-btn:hover::before{left:100%}
.back-home-btn svg{width:20px;height:20px;transition:transform 0.3s ease}
.back-home-btn:hover svg{transform:translateX(-3px)}

@media(max-width:768px){
  .pricing-page{padding:15px;margin:60px auto}
  .pricing-title{font-size:2rem}
  .pricing-grid{grid-template-columns:1fr;gap:20px}
  .pricing-card{padding:24px}
  .back-home-btn{font-size:14px;padding:12px 24px}
}

@keyframes containerEntry{from{opacity:0;transform:translateY(30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
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
  <h1 class="pricing-title">Choose Your Plan</h1>
  <p class="pricing-subtitle">Transparent pricing with no hidden fees. Upgrade or downgrade at any time.</p>
  
  <!-- Pricing Grid -->
  <div class="pricing-grid">
    <!-- Free Plan -->
    <div class="pricing-card">
      <h3 class="plan-name">Free</h3>
      <div class="plan-price">$0<span>/month</span></div>
      <p class="plan-description">Perfect for trying out Ghost Pilot with basic features.</p>
      <ul class="plan-features">
        <li>5 AI queries per day</li>
        <li>Basic screenshot analysis</li>
        <li>Standard response time</li>
        <li>Community support</li>
      </ul>
      <a href="#" class="plan-button secondary">Get Started Free</a>
    </div>

    <!-- Pro Plan -->
    <div class="pricing-card featured">
      <h3 class="plan-name">Pro</h3>
      <div class="plan-price">$19<span>/month</span></div>
      <p class="plan-description">Best for professionals and frequent users.</p>
      <ul class="plan-features">
        <li>Unlimited AI queries</li>
        <li>Advanced screenshot analysis</li>
        <li>Priority response time</li>
        <li>Email support</li>
        <li>Custom AI models</li>
        <li>Export capabilities</li>
      </ul>
      <a href="#" class="plan-button">Start Pro Trial</a>
    </div>

    <!-- Enterprise Plan -->
    <div class="pricing-card">
      <h3 class="plan-name">Enterprise</h3>
      <div class="plan-price">$99<span>/month</span></div>
      <p class="plan-description">For teams and organizations with advanced needs.</p>
      <ul class="plan-features">
        <li>Everything in Pro</li>
        <li>Team collaboration</li>
        <li>Advanced security</li>
        <li>Dedicated support</li>
        <li>Custom integrations</li>
        <li>SLA guarantee</li>
      </ul>
      <a href="#" class="plan-button">Contact Sales</a>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="faq-section">
    <h2 class="faq-title">Frequently Asked Questions</h2>
    <div class="faq-container">
      
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(1)">
          Can I change my plan at any time?
          <svg id="icon-1" class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </button>
        <div id="answer-1" class="faq-answer">
          <div class="faq-answer-content">
            Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(2)">
          What happens if I exceed my query limit?
          <svg id="icon-2" class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </button>
        <div id="answer-2" class="faq-answer">
          <div class="faq-answer-content">
            For free users, you'll need to wait until your daily limit resets or upgrade to a paid plan. Pro and Enterprise users have unlimited queries.
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(3)">
          Is there a free trial for paid plans?
          <svg id="icon-3" class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </button>
        <div id="answer-3" class="faq-answer">
          <div class="faq-answer-content">
            Yes! We offer a 7-day free trial for both Pro and Enterprise plans. No credit card required to start your trial.
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(4)">
          How secure is my data?
          <svg id="icon-4" class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </button>
        <div id="answer-4" class="faq-answer">
          <div class="faq-answer-content">
            We use enterprise-grade encryption and never store your screenshots or sensitive data. All processing is done in real-time and data is immediately discarded after processing.
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(5)">
          Can I cancel my subscription anytime?
          <svg id="icon-5" class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </button>
        <div id="answer-5" class="faq-answer">
          <div class="faq-answer-content">
            Absolutely! You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period.
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Back to Home Button -->
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

// FAQ functionality - Enhanced for inline styling
let openFAQ = null;
window.toggleFAQ = function(index) {
  const answer = document.getElementById('answer-' + index);
  const icon = document.getElementById('icon-' + index);
  
  // Close previously open FAQ
  if (openFAQ !== null && openFAQ !== index) {
    const prevAnswer = document.getElementById('answer-' + openFAQ);
    const prevIcon = document.getElementById('icon-' + openFAQ);
    if (prevAnswer) {
      prevAnswer.style.maxHeight = '0';
      prevAnswer.style.opacity = '0';
    }
    if (prevIcon) {
      prevIcon.style.transform = 'rotate(0deg)';
    }
  }
  
  // Toggle current FAQ
  if (openFAQ === index) {
    // Close current FAQ
    if (answer) {
      answer.style.maxHeight = '0';
      answer.style.opacity = '0';
    }
    if (icon) {
      icon.style.transform = 'rotate(0deg)';
    }
    openFAQ = null;
  } else {
    // Open current FAQ
    if (answer) {
      // Get the content height dynamically
      const content = answer.querySelector('.faq-answer-content');
      const contentHeight = content ? content.scrollHeight + 40 : 120; // Add padding
      answer.style.maxHeight = contentHeight + 'px';
      answer.style.opacity = '1';
    }
    if (icon) {
      icon.style.transform = 'rotate(45deg)';
    }
    openFAQ = index;
  }
};

// Auto-execute function to inject CSS and HTML
(function() {
  console.log('💰 Pricing script initializing...');
  
  // Add CSS first and ensure it stays
  const style = document.createElement('style');
  style.setAttribute('data-pricing-styles', 'true');
  style.textContent = pricingCSS;
  document.head.appendChild(style);
  console.log('✅ CSS injected');
  
  // Wait for React to settle, then inject content
  function initializePricingPage() {
    console.log('🏗️ Starting content injection...');
    
    // AGGRESSIVE: Remove ALL existing content from main containers
    const clearContainers = () => {
      const selectors = [
        'main',
        '.main-content', 
        '[data-framer-name="Content"]',
        '[data-framer-name="content"]',
        '.framer-page-content',
        '[role="main"]',
        'body > div:first-child'
      ];
      
      selectors.forEach(selector => {
        const element = document.querySelector(selector);
        if (element && element !== document.body) {
          console.log('🧹 Clearing container:', selector);
          element.innerHTML = '';
        }
      });
    };
    
    // FORCE INJECTION: Create new container if needed
    const injectContent = () => {
      clearContainers();
      
      // Find or create main container
      let mainContent = document.querySelector('main') || 
                       document.querySelector('[data-framer-name="Content"]');
      
      if (!mainContent) {
        console.log('🆕 Creating new main container');
        mainContent = document.createElement('main');
        mainContent.setAttribute('data-pricing-injected', 'true');
                 mainContent.style.cssText = `
           position: relative;
           z-index: 9999;
           min-height: 100vh;
           width: 100%;
         `;
        
        // Insert after header or at body start
        const header = document.querySelector('header') || 
                      document.querySelector('nav') ||
                      document.body.firstElementChild;
        
        if (header && header.parentNode) {
          header.parentNode.insertBefore(mainContent, header.nextSibling);
        } else {
          document.body.insertBefore(mainContent, document.body.firstChild);
        }
      }
      
      // Force clear and inject
      mainContent.innerHTML = pricingHTML;
      console.log('✅ Content injected into:', mainContent.tagName);
      
      // Verify injection
      const check = document.querySelector('.pricing-page');
      console.log('🔍 Pricing page found after injection:', !!check);
      
      return !!check;
    };
    
    // Try injection with retries
    let attempts = 0;
    const maxAttempts = 5;
    
    const tryInject = () => {
      attempts++;
      console.log(`🎯 Injection attempt ${attempts}/${maxAttempts}`);
      
      const success = injectContent();
      
      if (success) {
        console.log('✅ Content injection successful!');
        initializePricingSectionAnimations();
        
        // DEFENSIVE: Re-inject if React removes it
        setTimeout(() => {
          if (!document.querySelector('.pricing-page')) {
            console.log('🔄 Content was removed, re-injecting...');
            injectContent();
            initializePricingSectionAnimations();
          }
        }, 1000);
        
      } else if (attempts < maxAttempts) {
        console.log('⏰ Retrying injection in 200ms...');
        setTimeout(tryInject, 200);
      } else {
        console.error('❌ All injection attempts failed');
      }
    };
    
    tryInject();
  }
  
  // REACT-SAFE TIMING: Wait for React hydration
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initializePricingPage, 100);
    });
  } else {
    // Multiple timing attempts to work around React
    setTimeout(initializePricingPage, 50);
    setTimeout(initializePricingPage, 200);
    setTimeout(initializePricingPage, 500);
  }
  
  function initializePricingSectionAnimations() {
    console.log('🎨 Initializing animations...');
    
    setTimeout(() => {
      const pricingGrid = document.querySelector('.pricing-grid');
      const faqSection = document.querySelector('.faq-section');
      const backHomeContainer = document.querySelector('.back-home-container');
      
      if (pricingGrid) {
        setTimeout(() => {
          pricingGrid.style.opacity = '1';
          pricingGrid.style.transform = 'translateY(0) scale(1)';
          pricingGrid.classList.add('pricing-animated');
          console.log('✅ Pricing grid animated');
        }, 400);
      }
      
      if (faqSection) {
        setTimeout(() => {
          faqSection.style.opacity = '1';
          faqSection.style.transform = 'translateY(0) scale(1)';
          faqSection.classList.add('pricing-animated');
          console.log('✅ FAQ section animated');
        }, 600);
      }
      
      if (backHomeContainer) {
        setTimeout(() => {
          backHomeContainer.style.opacity = '1';
          backHomeContainer.style.transform = 'translateY(0) scale(1)';
          console.log('✅ Back home button animated');
        }, 800);
      }
    }, 100);
  }
})(); 
