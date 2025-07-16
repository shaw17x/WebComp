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
.footer-social a{width:32px;height:32px;border-radius:6px;background-color:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.6);transition:all 0.3s ease;cursor:pointer}
.footer-social a:hover{background-color:rgba(255,255,255,0.1);color:#ffffff}
.footer-social svg{width:16px;height:16px}
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
  .plan-card{padding:20px}
  .footer-row{flex-direction:column;text-align:center;gap:20px}
  .footer-nav{display:flex;flex-wrap:wrap;justify-content:center;gap:16px}
  .footer-right{flex-direction:column;gap:20px}
  .footer-separator{display:none}
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
  
  <div class="pricing-header">
    <h1 class="pricing-title">Pricing Plans</h1>
    <p class="pricing-subtitle">Choose the perfect plan for your interview success</p>
  </div>

  <div class="pricing-content">
    <!-- Pricing Plans -->
    <div class="plans-grid">
      <!-- Free Plan -->
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

      <!-- Pro Plan -->
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

      <!-- Ultra Plan -->
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

    <!-- FAQ Section -->
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

        <div class="faq-item">
          <button class="faq-button" onclick="toggleFAQ(4)">
            <span class="faq-question">What payment methods do you accept?</span>
            <div class="faq-icon" id="icon-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-4">
            <div class="faq-answer-content">
              <p class="faq-answer-text">We accept all major credit cards including Visa, Mastercard, American Express, and Discover. All payments are processed securely through our encrypted payment system with SSL protection and PCI compliance.</p>
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-button" onclick="toggleFAQ(5)">
            <span class="faq-question">Can I use Ghost Pilot for team interviews?</span>
            <div class="faq-icon" id="icon-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-5">
            <div class="faq-answer-content">
              <p class="faq-answer-text">Yes! Our Ultra plan ($99/month) includes team collaboration features, custom integrations, dedicated account management, and advanced security perfect for organizations conducting team interviews or training programs.</p>
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-button" onclick="toggleFAQ(6)">
            <span class="faq-question">Do you offer refunds?</span>
            <div class="faq-icon" id="icon-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-6">
            <div class="faq-answer-content">
              <p class="faq-answer-text">No, all sales are final. Ghost Pilot does not offer refunds for any subscription plans (Free, Pro, or Ultra). We recommend starting with our Free plan to test the platform before upgrading to a paid subscription.</p>
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-button" onclick="toggleFAQ(7)">
            <span class="faq-question">How does Stealth Mode work?</span>
            <div class="faq-icon" id="icon-7">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-7">
            <div class="faq-answer-content">
              <p class="faq-answer-text">Stealth Mode operates with enhanced privacy protections, minimizing data collection and ensuring interview confidentiality. It includes features like invisible window modes, secure data handling, and advanced privacy protocols to keep your interview assistance completely undetectable.</p>
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-button" onclick="toggleFAQ(8)">
            <span class="faq-question">What kind of support do you provide?</span>
            <div class="faq-icon" id="icon-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-8">
            <div class="faq-answer-content">
              <p class="faq-answer-text">Free plan users get community support, Pro plan users receive 24/7 chat support with priority response times, and Ultra plan users get dedicated account management with priority support and custom assistance.</p>
            </div>
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

<!-- Footer -->
<footer class="footer" data-card-stack>
  <div class="footer-content">
    <div class="footer-row">
      <!-- Left Side - Copyright -->
      <div class="footer-copyright">
        <span>© Ghost Pilot 2025</span>
      </div>

      <span class="footer-separator">·</span>

      <!-- Center - Navigation Links -->
      <div class="footer-nav">
        <a href="#features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="#ai-models">AI Models</a>
        <a href="#help">Help Center</a>
        <a href="#docs">Documentation</a>
        <a href="#community">Community</a>
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
          <a href="https://twitter.com/ghostpilot" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="https://github.com/ghostpilot" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://discord.gg/ghostpilot" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0188 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

// FAQ functionality
let openFAQ = null;

window.toggleFAQ = function(index) {
  const answer = document.getElementById(\`answer-\${index}\`);
  const icon = document.getElementById(\`icon-\${index}\`);
  
  // Close currently open FAQ if it's different from clicked one
  if (openFAQ !== null && openFAQ !== index) {
    const prevAnswer = document.getElementById(\`answer-\${openFAQ}\`);
    const prevIcon = document.getElementById(\`icon-\${openFAQ}\`);
    prevAnswer.classList.remove('open');
    prevIcon.classList.remove('open');
  }
  
  // Toggle clicked FAQ
  if (openFAQ === index) {
    // Close if already open
    answer.classList.remove('open');
    icon.classList.remove('open');
    openFAQ = null;
  } else {
    // Open if closed
    answer.classList.add('open');
    icon.classList.add('open');
    openFAQ = index;
  }
};

// Auto-execute function to inject CSS and HTML
(function() {
  // Add CSS
  const style = document.createElement('style');
  style.textContent = pricingCSS;
  document.head.appendChild(style);
  
  // Add HTML when DOM is ready - find main content area
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializePricingPage();
    });
  } else {
    initializePricingPage();
  }
  
  function initializePricingPage() {
    // Try to find main content area, otherwise use body
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    // Clear existing content in main area and add pricing content
    if (mainContent !== document.body) {
      mainContent.innerHTML = pricingHTML;
    } else {
      // If we're using body, insert at the beginning but after header
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        header.insertAdjacentHTML('afterend', pricingHTML);
      } else {
        document.body.insertAdjacentHTML('afterbegin', pricingHTML);
      }
    }
    
    // Initialize first FAQ as open
    setTimeout(() => {
      if (typeof window.toggleFAQ === 'function') {
        window.toggleFAQ(0);
      }
    }, 100);
    
    // Initialize footer scroll animation
    initializeFooterAnimation();
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
          
          card.style.transform = \`scale(\${scale}) translateY(\${translateY}px)\`;
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
