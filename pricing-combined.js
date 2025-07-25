// Steley Pricing Page - AI Models Style Interface
const pricingCSS = `
body{margin:0!important;padding:0!important}
.pricing-page{max-width:1200px;margin:80px auto;padding:20px;position:relative;z-index:999}
.pricing-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s forwards;position:relative;z-index:1000}
.pricing-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6b7280;animation:spin 3s linear infinite}
.pricing-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#9ca3af 50%,#6b7280 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards}
.pricing-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;text-align:center;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards}
.pricing-content{max-width:900px;margin:0 auto;position:relative;z-index:1000}
.plans-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;margin-bottom:60px;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s forwards}
.plan-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:16px;margin-bottom:8px;transition:all 0.2s ease;cursor:pointer;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;position:relative}
.plan-card:hover{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.1);transform:translateX(4px)}
.plan-card.popular{border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04)}
.popular-badge{background:rgba(107,114,128,0.2);border:1px solid rgba(107,114,128,0.3);color:#9ca3af;padding:4px 12px;border-radius:12px;font-size:10px;font-weight:700;margin-bottom:12px;display:inline-block;position:relative;z-index:1001;letter-spacing:0.5px;text-transform:uppercase}
.plan-name{color:rgb(243,244,246);font-size:16px;font-weight:600;margin-bottom:4px;letter-spacing:0.025em}
.plan-price{color:#e2e8f0;font-size:24px;font-weight:700;margin-bottom:8px;line-height:1.2}
.plan-period{color:#6b7280;font-size:12px;font-weight:500;margin-bottom:12px;text-transform:uppercase;letter-spacing:1px}
.plan-description{color:#cbd5e1;font-size:14px;line-height:1.5;margin-bottom:12px;font-weight:400}
.plan-features{list-style:none;padding:0;margin:12px 0;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:12px}
.plan-features li{color:#cbd5e1;font-size:12px;margin-bottom:6px;padding-left:16px;position:relative;line-height:1.4;font-weight:400}
.plan-features li::before{content:'✓';position:absolute;left:0;color:#6b7280;font-weight:bold;font-size:12px}
.plan-button{width:100%;padding:8px 16px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;font-size:12px;font-weight:500;cursor:pointer;transition:all 0.2s ease;text-decoration:none;display:inline-block;text-align:center;background:rgba(255,255,255,0.02);color:rgba(255,255,255,0.8);margin-top:8px}
.plan-button.primary{background:rgba(59,130,246,0.1);border-color:#3b82f6;color:#3b82f6}
.plan-button.primary:hover{background:rgba(59,130,246,0.2);border-color:#3b82f6;transform:translateY(-1px)}
.plan-button.secondary{background:rgba(255,255,255,0.02);color:#9ca3af;border:1px solid rgba(255,255,255,0.1)}
.plan-button.secondary:hover{background:rgba(255,255,255,0.04);color:#cbd5e1}
.faq-section{margin-top:60px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.5s forwards}
.faq-title{font-size:2rem;font-weight:700;text-align:center;margin-bottom:30px;background:linear-gradient(135deg,#fff 0%,#9ca3af 50%,#6b7280 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.faq-container{max-width:800px;margin:0 auto}
.faq-item{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;margin-bottom:8px;overflow:hidden;transition:all 0.2s ease}
.faq-item:hover{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.1)}
.faq-button{width:100%;padding:12px 16px;background:transparent;border:none;display:flex;justify-content:space-between;align-items:center;cursor:pointer;transition:all 0.2s ease;color:rgba(255,255,255,0.8);font-size:14px;font-weight:500;text-align:left;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif}
.faq-button:hover{background:rgba(255,255,255,0.02)}
.faq-question{padding-right:16px;line-height:1.4}
.faq-icon{width:16px;height:16px;display:flex;align-items:center;justify-content:center;transition:transform 0.2s ease;flex-shrink:0;color:#6b7280}
.faq-icon.open{transform:rotate(45deg)}
.faq-answer{overflow:hidden;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);max-height:0;opacity:0;background:rgba(15,23,42,0.3)}
.faq-answer.open{max-height:300px;opacity:1}
.faq-answer-content{padding:0 16px 12px 16px}
.faq-answer-text{font-size:12px;color:#cbd5e1;line-height:1.5;margin:0;font-weight:400}



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
  .plans-grid{grid-template-columns:1fr;gap:16px}
  .plan-card{padding:12px}
  .faq-title{font-size:1.5rem}
  .footer-row{flex-direction:column;text-align:center;gap:20px}
  .footer-nav{display:flex;flex-wrap:wrap;justify-content:center;gap:16px}
  .footer-right{flex-direction:column;gap:20px}
  .footer-separator{display:none}
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
  <h1 class="pricing-title">Pricing Plans</h1>
  <p class="pricing-subtitle">Choose the perfect plan for your interview success</p>
  
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

    <div class="faq-section" style="margin-top: 60px; margin-bottom: 40px;">
      <h2 class="faq-title" style="text-align: center; color: white; font-size: 36px; margin-bottom: 40px;">Frequently Asked Questions</h2>
      <div class="faq-container" style="max-width: 800px; margin: 0 auto; display: block;">
        
        <!-- FAQ 1 -->
        <div class="faq-item" style="margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: rgba(255,255,255,0.02);">
          <button class="faq-button" onclick="toggleFAQ(0)" style="width: 100%; padding: 20px; background: none; border: none; color: white; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span class="faq-question" style="font-size: 18px; font-weight: 500;">What's included in the free plan?</span>
            <div class="faq-icon" id="icon-0" style="transition: transform 0.3s ease;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-0" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out;">
            <div class="faq-answer-content" style="padding: 0 20px 20px;">
              <p class="faq-answer-text" style="color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0;">The Free plan includes 10 AI queries per month, basic screenshot analysis, standard response time, community support, and basic templates. Perfect for getting started with Steley.</p>
            </div>
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="faq-item" style="margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: rgba(255,255,255,0.02);">
          <button class="faq-button" onclick="toggleFAQ(1)" style="width: 100%; padding: 20px; background: none; border: none; color: white; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span class="faq-question" style="font-size: 18px; font-weight: 500;">Can I upgrade or downgrade my plan anytime?</span>
            <div class="faq-icon" id="icon-1" style="transition: transform 0.3s ease;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-1" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out;">
            <div class="faq-answer-content" style="padding: 0 20px 20px;">
              <p class="faq-answer-text" style="color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0;">Yes, you can upgrade or downgrade your subscription at any time. Changes take effect immediately for upgrades, and at the end of your billing cycle for downgrades.</p>
            </div>
          </div>
        </div>

        <!-- FAQ 3 -->
        <div class="faq-item" style="margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: rgba(255,255,255,0.02);">
          <button class="faq-button" onclick="toggleFAQ(2)" style="width: 100%; padding: 20px; background: none; border: none; color: white; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span class="faq-question" style="font-size: 18px; font-weight: 500;">What AI models does Ghost Pilot support?</span>
            <div class="faq-icon" id="icon-2" style="transition: transform 0.3s ease;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-2" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out;">
            <div class="faq-answer-content" style="padding: 0 20px 20px;">
              <p class="faq-answer-text" style="color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0;">Steley supports multiple premium AI models including OpenAI's GPT-4o, O3, O1-Pro, Claude Opus 4, Claude Sonnet 4, Gemini 2.0 Flash, and Qwen 2.5 VL 72B. Free users get access to GPT-4o Mini, while Pro and Ultra plans unlock all premium models.</p>
            </div>
          </div>
        </div>

        <!-- FAQ 4 -->
        <div class="faq-item" style="margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: rgba(255,255,255,0.02);">
          <button class="faq-button" onclick="toggleFAQ(3)" style="width: 100%; padding: 20px; background: none; border: none; color: white; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span class="faq-question" style="font-size: 18px; font-weight: 500;">Do you offer refunds?</span>
            <div class="faq-icon" id="icon-3" style="transition: transform 0.3s ease;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-3" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out;">
            <div class="faq-answer-content" style="padding: 0 20px 20px;">
              <p class="faq-answer-text" style="color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0;">No, all sales are final. Steley does not offer refunds for any subscription plans. We recommend starting with our Free plan (10 AI queries per month) to thoroughly test the platform before upgrading to a paid subscription.</p>
            </div>
          </div>
        </div>

        <!-- FAQ 5 -->
        <div class="faq-item" style="margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: rgba(255,255,255,0.02);">
          <button class="faq-button" onclick="toggleFAQ(4)" style="width: 100%; padding: 20px; background: none; border: none; color: white; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span class="faq-question" style="font-size: 18px; font-weight: 500;">How does the stealth mode work?</span>
            <div class="faq-icon" id="icon-4" style="transition: transform 0.3s ease;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-4" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out;">
            <div class="faq-answer-content" style="padding: 0 20px 20px;">
              <p class="faq-answer-text" style="color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0;">Steley uses advanced stealth technology including AI detection avoidance, behavioral camouflage, memory obfuscation, and kernel-level hiding. It's undetectable across 12+ major platforms including Zoom, Teams, HackerRank, CodeSignal, Proctorio, and Respondus with a 99.9% undetected rate.</p>
            </div>
          </div>
        </div>

        <!-- FAQ 6 -->
        <div class="faq-item" style="margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: rgba(255,255,255,0.02);">
          <button class="faq-button" onclick="toggleFAQ(5)" style="width: 100%; padding: 20px; background: none; border: none; color: white; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span class="faq-question" style="font-size: 18px; font-weight: 500;">Is my data secure with Steley?</span>
            <div class="faq-icon" id="icon-5" style="transition: transform 0.3s ease;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-5" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out;">
            <div class="faq-answer-content" style="padding: 0 20px 20px;">
              <p class="faq-answer-text" style="color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0;">Absolutely. Steley employs enterprise-grade security including AES-256 encryption, secure data storage, SSL protection, and advanced security protocols. Screenshots are processed temporarily and automatically deleted within 24 hours. We never store your data or use it to train AI models.</p>
            </div>
          </div>
        </div>

        <!-- FAQ 7 -->
        <div class="faq-item" style="margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: rgba(255,255,255,0.02);">
          <button class="faq-button" onclick="toggleFAQ(6)" style="width: 100%; padding: 20px; background: none; border: none; color: white; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span class="faq-question" style="font-size: 18px; font-weight: 500;">What platforms does Steley support?</span>
            <div class="faq-icon" id="icon-6" style="transition: transform 0.3s ease;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-6" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out;">
            <div class="faq-answer-content" style="padding: 0 20px 20px;">
              <p class="faq-answer-text" style="color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0;">Steley is cross-platform compatible and works on Windows, macOS, and Linux. It supports 500+ platforms including video calls (Zoom, Teams, Google Meet), coding platforms (HackerRank, CodeSignal, LeetCode), proctoring software (Proctorio, Examity, Respondus), and learning platforms (Canvas, Blackboard).</p>
            </div>
          </div>
        </div>

        <!-- FAQ 8 -->
        <div class="faq-item" style="margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: rgba(255,255,255,0.02);">
          <button class="faq-button" onclick="toggleFAQ(7)" style="width: 100%; padding: 20px; background: none; border: none; color: white; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span class="faq-question" style="font-size: 18px; font-weight: 500;">What payment methods do you accept?</span>
            <div class="faq-icon" id="icon-7" style="transition: transform 0.3s ease;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
          <div class="faq-answer" id="answer-7" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out;">
            <div class="faq-answer-content" style="padding: 0 20px 20px;">
              <p class="faq-answer-text" style="color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0;">We accept all major credit cards including Visa, Mastercard, American Express, and Discover. All payments are processed securely through our encrypted payment system with SSL protection and PCI compliance for maximum security.</p>
            </div>
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
          <a href="https://twitter.com/steley" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="https://github.com/steley" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://discord.gg/steley" target="_blank" rel="noopener noreferrer" aria-label="Discord">
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
