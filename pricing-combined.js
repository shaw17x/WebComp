// Pricing Page Combined - CSS + HTML Content with Docs-Style Instant Loading
const pricingCSS = `
body{margin:0!important;padding:0!important}
.pricing-page{max-width:1200px;margin:80px auto;padding:20px;position:relative;z-index:999}
.pricing-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s forwards;position:relative;z-index:1000}
.pricing-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6b7280;animation:spin 3s linear infinite}
.pricing-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#9ca3af 50%,#6b7280 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards}
.pricing-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;text-align:center;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards}

/* Pricing Cards - Docs Style */
.pricing-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:30px;margin:60px 0;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.pricing-grid.pricing-animated{opacity:1;transform:translateY(0) scale(1)}
.pricing-card{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:30px;margin-bottom:30px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.pricing-card.pricing-animated{opacity:1;transform:translateY(0) scale(1)}
.pricing-card:hover{transform:translateY(-5px) scale(1)!important;border-color:rgba(255,255,255,0.2);box-shadow:0 20px 40px rgba(10,14,26,0.3);transition:all 0.3s cubic-bezier(0.4,0,0.2,1)}
.pricing-card.featured{border-color:rgba(107,114,128,0.4);background:#0a0e1a}
.pricing-card.featured::before{content:'MOST POPULAR';position:absolute;top:20px;right:20px;background:linear-gradient(135deg,#6b7280,#9ca3af);color:#fff;font-size:10px;font-weight:700;padding:4px 12px;border-radius:12px;letter-spacing:0.5px}

.plan-name{color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:15px;position:relative;padding-left:15px;z-index:1001}
.plan-name::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:15px;background:linear-gradient(135deg,#6b7280,#9ca3af);border-radius:2px;z-index:1002}
.plan-price{font-size:3rem;font-weight:800;color:#9ca3af;margin-bottom:8px;position:relative;z-index:1001}
.plan-price span{font-size:1rem;color:#94a3b8;font-weight:400}
.plan-description{color:#cbd5e1;font-size:1rem;margin-bottom:30px;line-height:1.6;position:relative;z-index:1001}

.plan-features{list-style:none;padding:0;margin:30px 0;position:relative;z-index:1001}
.plan-features li{color:#cbd5e1;font-size:1rem;margin-bottom:8px;padding-left:20px;position:relative;line-height:1.5;z-index:1001}
.plan-features li::before{content:'→';position:absolute;left:0;color:#6b7280;font-weight:bold;z-index:1002}

.plan-button{width:100%;background:linear-gradient(135deg,#9ca3af 0%,#d1d5db 100%);border:none;border-radius:0.5rem;padding:1rem 2.5rem;font-size:1.125rem;font-weight:600;color:#1f2937;cursor:pointer;transition:all 0.3s cubic-bezier(0.4,0,0.2,1);text-decoration:none;display:inline-block;text-align:center;position:relative;overflow:hidden;box-shadow:0 4px 15px rgba(107,114,128,0.2)}
.plan-button:hover{transform:translateY(-2px);background:linear-gradient(135deg,#6b7280 0%,#9ca3af 100%);box-shadow:0 10px 25px rgba(107,114,128,0.3)}
.plan-button::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transform:translateY(0);transition:left 1.5s ease;animation:none;pointer-events:none}
.plan-button:hover::before{left:100%;animation:shimmer 1.5s infinite}
.plan-button.secondary{background:transparent;border:1px solid rgba(107,114,128,0.3);color:#9ca3af}
.plan-button.secondary:hover{background:rgba(107,114,128,0.1);border-color:rgba(107,114,128,0.6)}

/* FAQ Section - Docs Style */
.faq-section{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:30px;margin-bottom:30px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.faq-section.pricing-animated{opacity:1;transform:translateY(0) scale(1)}
.faq-section:hover{transform:translateY(-5px) scale(1)!important;border-color:rgba(255,255,255,0.2);box-shadow:0 20px 40px rgba(10,14,26,0.3);transition:all 0.3s cubic-bezier(0.4,0,0.2,1)}
.faq-title{color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:15px;position:relative;padding-left:15px;z-index:1001}
.faq-title::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:15px;background:linear-gradient(135deg,#6b7280,#9ca3af);border-radius:2px;z-index:1002}
.faq-container{max-width:800px;margin:0 auto}
.faq-item{border:1px solid rgba(255,255,255,0.1);border-radius:16px;margin-bottom:16px;overflow:hidden;transition:all 0.3s ease}
.faq-item:hover{border-color:rgba(255,255,255,0.2)}

.faq-question{width:100%;background:transparent;border:none;padding:24px;text-align:left;font-size:1.1rem;font-weight:600;color:#fff;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:all 0.3s ease}
.faq-question:hover{background:rgba(107,114,128,0.05)}

.faq-icon{width:24px;height:24px;color:#6b7280;transition:transform 0.3s ease;transform:rotate(0deg)}

.faq-answer{max-height:0;opacity:0;overflow:hidden;transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);background:rgba(15,23,42,0.3)}
.faq-answer-content{padding:0 24px 24px 24px;color:#cbd5e1;font-size:1rem;line-height:1.6}

@keyframes shimmer{0%{left:-100%}100%{left:100%}}

/* Footer Styles */
.footer{position:relative;background-color:transparent;border-top:1px solid rgba(255,255,255,0.1);font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;opacity:0.3;visibility:visible;transition:all 0.6s cubic-bezier(0.25,0.46,0.45,0.94);transform:scale(0.95) translateY(20px);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards;margin-top:80px}
.footer-content{max-width:1400px;margin:0 auto;padding:28px 40px}
.footer-row{display:flex;justify-content:center;align-items:center;flex-wrap:nowrap;gap:40px;animation:fadeInUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s both}
.footer-copyright{display:flex;align-items:center;white-space:nowrap}
.footer-copyright span{font-size:14px;font-weight:400;color:rgba(255,255,255,0.6);letter-spacing:-0.01em}
.footer-nav{display:flex;gap:32px;align-items:center;flex-wrap:nowrap;white-space:nowrap}
.footer-nav a{font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.3s ease;cursor:pointer}
.footer-nav a:hover{color:#ffffff}
.footer-right{display:flex;align-items:center;gap:32px}
.footer-legal{display:flex;gap:24px;align-items:center;white-space:nowrap}
.footer-legal a{font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.3s ease;cursor:pointer;font-family:inherit}
.footer-legal a:hover{color:#ffffff}
.footer-social{display:flex;gap:12px;align-items:center}
.footer-social-link{width:32px;height:32px;border-radius:6px;background-color:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.6);transition:all 0.3s ease;cursor:pointer;text-decoration:none}
.footer-social-link:hover{background-color:rgba(255,255,255,0.1);color:#ffffff}
.footer-separator{color:rgba(255,255,255,0.2);font-size:18px;line-height:1;margin:0 8px}

@media(max-width:1200px){
  .footer-nav{gap:24px}
  .footer-row{gap:30px}
}

@media(max-width:1000px){
  .footer-nav{display:none}
}

@media(max-width:768px){
  .pricing-page{padding:15px;margin:60px auto}
  .pricing-title{font-size:2rem}
  .pricing-grid{grid-template-columns:1fr;gap:20px}
  .pricing-card{padding:20px}
  .footer-row{flex-direction:column!important;text-align:center!important;gap:20px!important}
  .footer-nav{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:16px!important}
  .footer-right{flex-direction:column!important;gap:20px!important}
  .footer-separator{display:none!important}
}

@keyframes containerEntry{from{opacity:0;transform:translateY(30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
`;

const pricingHTML = `
<div class="pricing-page">
  <div style="text-align: center;">
    <div class="pricing-badge">
      <div class="pricing-badge-dot"></div>
      Steley Pricing
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
      <p class="plan-description">Perfect for trying out Steley with basic features.</p>
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

</div>

<!-- Footer -->
<footer class="footer" data-card-stack>
  <div class="footer-content">
    <div class="footer-row">
      <!-- Left Side - Copyright -->
      <div class="footer-copyright">
        <span>© Steley 2025</span>
      </div>

      <span class="footer-separator">·</span>

      <!-- Center - Navigation Links -->
      <div class="footer-nav">
        <a href="#features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="#ai-models">AI Models</a>
        <a href="/document">Documentation</a>
      </div>

      <span class="footer-separator">·</span>

      <!-- Right Side - Legal & Social -->
      <div class="footer-right">
        <!-- Legal Links -->
        <div class="footer-legal">
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms-of-service">Terms</a>
        </div>

        <span class="footer-separator">·</span>

        <!-- Social Links -->
        <div class="footer-social">
          <a href="https://twitter.com/steley" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Twitter">
            <div style="transform:scale(0.8)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
          </a>
          <a href="https://github.com/steley" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="GitHub">
            <div style="transform:scale(0.8)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>
          <a href="https://discord.gg/steley" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Discord">
            <div style="transform:scale(0.8)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0188 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
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

// Auto-execute function to inject CSS and HTML - React Safe Version
(function() {
  console.log('💰 Pricing script initializing (React-safe mode)...');
  
  // Add CSS immediately but safely
  if (!document.querySelector('[data-pricing-styles]')) {
    const style = document.createElement('style');
    style.setAttribute('data-pricing-styles', 'true');
    style.textContent = pricingCSS;
    document.head.appendChild(style);
    console.log('✅ Pricing CSS injected safely');
  }
  
  // Wait for React hydration to complete before injecting content
  function initializePricingPage() {
    console.log('🏗️ Starting React-safe pricing initialization...');
    
    // Check if already initialized
    if (document.querySelector('.pricing-page') || document.body.hasAttribute('data-pricing-initialized')) {
      console.log('✅ Pricing already initialized, skipping');
      return;
    }
    
    // Mark as initializing to prevent multiple runs
    document.body.setAttribute('data-pricing-initializing', 'true');
    
    // Wait for React to finish hydrating
    const waitForReactHydration = () => {
      // Check for React hydration completion
      const isReactReady = document.querySelector('[data-framer-name="Content"]') || 
                          document.querySelector('main') ||
                          !document.querySelector('[data-reactroot]');
      
      if (!isReactReady) {
        console.log('⏳ Waiting for React hydration...');
        setTimeout(waitForReactHydration, 200);
        return;
      }
      
      console.log('📝 React hydrated, safely injecting pricing content...');
      
      // Find the safest content container
      let targetContainer = document.querySelector('[data-framer-name="Content"]') ||
                           document.querySelector('main') ||
                           document.querySelector('.main-content');
      
      if (targetContainer) {
        console.log('📍 Found safe container:', targetContainer.tagName);
        
        // Gentle content replacement to avoid React conflicts
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = pricingHTML;
        tempDiv.setAttribute('data-pricing-injected', 'true');
        tempDiv.style.cssText = 'width: 100%; min-height: 100vh;';
        
        // Clear and replace content safely
        targetContainer.innerHTML = '';
        targetContainer.appendChild(tempDiv);
        
        console.log('✅ Pricing content injected safely');
        
      } else {
        console.log('🆕 Creating new container for pricing content');
        
        // Create new container as last resort
        const newContainer = document.createElement('div');
        newContainer.innerHTML = pricingHTML;
        newContainer.setAttribute('data-pricing-fallback', 'true');
        newContainer.style.cssText = `
          position: relative;
          z-index: 10000;
          width: 100%;
          min-height: 100vh;
          background: transparent;
        `;
        
        // Insert after header or at start of body
        const header = document.querySelector('header') || document.querySelector('nav');
        if (header) {
          header.insertAdjacentElement('afterend', newContainer);
        } else {
          document.body.insertBefore(newContainer, document.body.firstChild);
        }
        
        console.log('✅ Fallback pricing container created');
      }
      
      // Mark as initialized
      document.body.setAttribute('data-pricing-initialized', 'true');
      document.body.removeAttribute('data-pricing-initializing');
      
      // Initialize animations with delay
      setTimeout(() => {
        initializePricingSectionAnimations();
        initializeFooterAnimation();
      }, 100);
    };
    
    // Start waiting for React
    setTimeout(waitForReactHydration, 500);
  }
  
  // Initialize with proper timing for React
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initializePricingPage, 1000); // Extra delay for React
    });
  } else {
    setTimeout(initializePricingPage, 1000); // Extra delay for React
  }
  
  function initializePricingSectionAnimations() {
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
      const pricingCards = document.querySelectorAll('.pricing-card');
      const faqSection = document.querySelector('.faq-section');
      
      // Add staggered animation to pricing cards
      pricingCards.forEach((card, index) => {
        const delay = 400 + (index * 100); // Start at 400ms, then add 100ms for each card
        
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
          card.classList.add('pricing-animated');
        }, delay);
      });
      
      // Animate FAQ section after pricing cards
      if (faqSection) {
        const faqDelay = 400 + (pricingCards.length * 100) + 100; // Extra 100ms after last card
        setTimeout(() => {
          faqSection.style.opacity = '1';
          faqSection.style.transform = 'translateY(0) scale(1)';
          faqSection.classList.add('pricing-animated');
        }, faqDelay);
      }
    }, 100);
  }
  
  function initializeFooterAnimation() {
    const handleScroll = () => {
      const cards = document.querySelectorAll("[data-card-stack]");
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardTop = rect.top;
        const cardHeight = rect.height;
        
        // Calculate progress based on scroll position
        const progress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - cardTop) / (windowHeight + cardHeight)
          )
        );
        
        // Apply stacking effect
        if (progress > 0 && progress < 1) {
          const scale = 0.95 + progress * 0.05;
          const translateY = (1 - progress) * 20;
          const opacity = 0.3 + progress * 0.7;
          
          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          card.style.opacity = opacity.toString();
        } else if (progress >= 1) {
          card.style.transform = "scale(1) translateY(0px)";
          card.style.opacity = "1";
        } else {
          card.style.transform = "scale(0.95) translateY(20px)";
          card.style.opacity = "0.3";
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
  }
})(); 
