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

/* FAQ Section - Compact Pricing Style */
.faq-section{background:linear-gradient(135deg,#0a0b0f 0%,#111318 50%,#0a0b0f 100%);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:50px 40px;margin-bottom:30px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94);overflow:hidden;box-shadow:0 15px 40px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.05);font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;max-width:900px;margin-left:auto;margin-right:auto}
.faq-section.pricing-animated{opacity:1;transform:translateY(0) scale(1)}
.faq-title{text-align:center;margin-bottom:40px;font-size:36px;font-weight:600;color:#ffffff;line-height:1.1;letter-spacing:-0.02em;background:linear-gradient(135deg,#ffffff 0%,#e0e7ff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.faq-container{max-width:700px;margin:0 auto}
.faq-item{border-bottom:1px solid rgba(255,255,255,0.1)}
.faq-question{width:100%;padding:24px 0;background:transparent;border:none;display:flex;justify-content:space-between;align-items:center;cursor:pointer;transition:all 0.3s cubic-bezier(0.4,0,0.2,1)}
.faq-question:hover{transform:translateX(6px)}
.faq-question-text{font-size:18px;font-weight:500;color:#ffffff;text-align:left;line-height:1.4;padding-right:16px}
.faq-icon-container{width:20px;height:20px;display:flex;align-items:center;justify-content:center;transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);flex-shrink:0}
.faq-icon{width:14px;height:14px;stroke:rgba(255,255,255,0.6);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}
.faq-answer{overflow:hidden;transition:all 0.5s cubic-bezier(0.4,0,0.2,1);height:0;opacity:0;transform:translateY(-10px)}
.faq-answer.open{opacity:1;transform:translateY(0)}
.faq-answer-content{padding-bottom:24px;padding-right:36px}
.faq-answer-text{font-size:15px;color:rgba(255,255,255,0.7);line-height:1.6;margin:0}

/* Background Effects */
.faq-bg-effect-1{position:absolute;top:20%;left:10%;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,0.1) 0%,transparent 70%);filter:blur(40px);pointer-events:none}
.faq-bg-effect-2{position:absolute;bottom:20%;right:10%;width:150px;height:150px;border-radius:50%;background:radial-gradient(circle,rgba(168,85,247,0.1) 0%,transparent 70%);filter:blur(30px);pointer-events:none}

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
  
  /* Mobile-friendly AI models table */
  .faq-answer-content div[style*="grid-template-columns"]{
    grid-template-columns:1fr!important;
    gap:15px!important;
  }
  .faq-answer-content div[style*="grid-template-columns"] > div{
    border:1px solid rgba(107,114,128,0.2);
    border-radius:8px;
    padding:12px;
    background:rgba(10,11,15,0.5);
  }
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
        <li>3 screenshots per day</li>
        <li>GPT-4o Mini access</li>
        <li>Basic interview coaching</li>
        <li>Limited stealth mode</li>
        <li>Community support</li>
      </ul>
      <a href="#" class="plan-button secondary">Get Started Free</a>
    </div>

    <!-- Pro Plan -->
    <div class="pricing-card featured">
      <h3 class="plan-name">Pro</h3>
      <div class="plan-price">$19.99<span>/month</span></div>
      <p class="plan-description">Best for professionals and frequent users.</p>
      <ul class="plan-features">
        <li>100 screenshots per day</li>
        <li>GPT-4o, Claude Sonnet 4, O1 Mini</li>
        <li>Gemini Pro, Gemini 2.0 Flash</li>
        <li>Advanced interview strategies</li>
        <li>Priority AI processing</li>
        <li>Cloud sync & templates</li>
      </ul>
      <a href="#" class="plan-button">Start Pro Trial</a>
    </div>

    <!-- Ultra Plan -->
    <div class="pricing-card">
      <h3 class="plan-name">Ultra</h3>
      <div class="plan-price">$40<span>/month</span></div>
      <p class="plan-description">For power users with unlimited needs.</p>
      <ul class="plan-features">
        <li>Unlimited screenshots</li>
        <li>All premium AI models (O3, Claude Opus 4)</li>
        <li>Maximum stealth technology</li>
        <li>API access & white label</li>
        <li>Dedicated support</li>
        <li>Custom integrations</li>
      </ul>
      <a href="#" class="plan-button">Contact Sales</a>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="faq-section">
    <h1 class="faq-title">Pricing Questions</h1>
    <div class="faq-container">
      
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(0)">
          <span class="faq-question-text">What's the difference between Free, Pro, and Ultra plans?</span>
          <div id="icon-container-0" class="faq-icon-container">
            <svg class="faq-icon" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <div id="answer-0" class="faq-answer">
          <div class="faq-answer-content">
            <p class="faq-answer-text"><strong>Free:</strong> 3 screenshots/day • GPT-4o Mini • Basic features<br><strong>Pro ($19.99):</strong> 100 screenshots/day • Premium AI models • Advanced features<br><strong>Ultra ($40):</strong> Unlimited everything • All AI models • Enterprise features</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(1)">
          <span class="faq-question-text">Is Ghost Pilot detectable by proctoring software like Proctorio, ExamSoft, or Respondus?</span>
          <div id="icon-container-1" class="faq-icon-container">
            <svg class="faq-icon" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <div id="answer-1" class="faq-answer">
          <div class="faq-answer-content">
            <p class="faq-answer-text"><strong>No.</strong> Ghost Pilot uses kernel-level stealth technology to stay completely undetectable by Proctorio, ExamSoft, Respondus, HonorLock, and ProctorU.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(2)">
          <span class="faq-question-text">What platforms and assessment types does Ghost Pilot support?</span>
          <div id="icon-container-2" class="faq-icon-container">
            <svg class="faq-icon" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <div id="answer-2" class="faq-answer">
          <div class="faq-answer-content">
            <p class="faq-answer-text"><strong>500+ platforms:</strong> HackerRank • LeetCode • Zoom • Teams • Canvas • Blackboard • Proctorio • ExamSoft • AWS/Google/Microsoft certifications. Works with any screen-based assessment.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(3)">
          <span class="faq-question-text">How does the AI screenshot analysis work?</span>
          <div id="icon-container-3" class="faq-icon-container">
            <svg class="faq-icon" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <div id="answer-3" class="faq-answer">
          <div class="faq-answer-content">
            <p class="faq-answer-text"><strong>3 simple steps:</strong><br>1. Take screenshot of question<br>2. AI analyzes in <1 second (99% accuracy)<br>3. Get detailed answers + step-by-step solutions</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(4)">
          <span class="faq-question-text">Which AI models are available in each plan?</span>
          <div id="icon-container-4" class="faq-icon-container">
            <svg class="faq-icon" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <div id="answer-4" class="faq-answer">
          <div class="faq-answer-content">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin: 20px 0;">
              <div>
                <h4 style="color: #9ca3af; font-size: 16px; font-weight: 600; margin-bottom: 12px; text-align: center;">Free</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 8px; padding: 6px 12px; background: rgba(107,114,128,0.1); border-radius: 6px; text-align: center;">GPT-4o Mini</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #9ca3af; font-size: 16px; font-weight: 600; margin-bottom: 12px; text-align: center;">Pro</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">GPT-4o</li>
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">Claude Sonnet 4</li>
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">O1 Mini</li>
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">Gemini Pro</li>
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">Gemini 2.0 Flash</li>
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">Qwen 2.5 VL 72B</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #9ca3af; font-size: 16px; font-weight: 600; margin-bottom: 12px; text-align: center;">Ultra</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">All Pro Models +</li>
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">O3</li>
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">Claude Opus 4</li>
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">O1 Pro</li>
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">Priority Access</li>
                  <li style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; padding: 4px 8px; background: rgba(107,114,128,0.1); border-radius: 4px; text-align: center;">Custom Configs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(5)">
          <span class="faq-question-text">Can I upgrade or downgrade my plan anytime?</span>
          <div id="icon-container-5" class="faq-icon-container">
            <svg class="faq-icon" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <div id="answer-5" class="faq-answer">
          <div class="faq-answer-content">
            <p class="faq-answer-text"><strong>Yes!</strong> Upgrades: immediate • Downgrades: next billing cycle<br><strong>No refunds</strong> - try Free plan first to test features.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(6)">
          <span class="faq-question-text">Do you offer refunds if I'm not satisfied?</span>
          <div id="icon-container-6" class="faq-icon-container">
            <svg class="faq-icon" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <div id="answer-6" class="faq-answer">
          <div class="faq-answer-content">
            <p class="faq-answer-text"><strong>No refunds.</strong> All sales are final.<br>Start with Free plan (3 screenshots/day) to test before upgrading.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(7)">
          <span class="faq-question-text">What happens if I exceed my daily usage limits?</span>
          <div id="icon-container-7" class="faq-icon-container">
            <svg class="faq-icon" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <div id="answer-7" class="faq-answer">
          <div class="faq-answer-content">
            <p class="faq-answer-text">Wait until midnight UTC for reset, or upgrade for immediate access.<br><strong>Ultra = unlimited</strong> (no restrictions)</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(8)">
          <span class="faq-question-text">How secure are my screenshots and data?</span>
          <div id="icon-container-8" class="faq-icon-container">
            <svg class="faq-icon" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <div id="answer-8" class="faq-answer">
          <div class="faq-answer-content">
            <p class="faq-answer-text"><strong>Bank-level security:</strong> AES-256 encryption • Screenshots deleted in 24hrs • Never stored permanently • Stripe PCI-compliant payments</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(9)">
          <span class="faq-question-text">What payment methods do you accept and how is billing handled?</span>
          <div id="icon-container-9" class="faq-icon-container">
            <svg class="faq-icon" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <div id="answer-9" class="faq-answer">
          <div class="faq-answer-content">
            <p class="faq-answer-text"><strong>All major cards:</strong> Visa • Mastercard • Amex • Discover<br>Processed via <strong>Stripe</strong> (secure, PCI-compliant) • Monthly/annual billing</p>
          </div>
        </div>
      </div>

    </div>
    
    <!-- Background Effects -->
    <div class="faq-bg-effect-1"></div>
    <div class="faq-bg-effect-2"></div>
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

// FAQ functionality - Home Page Style
let openFAQ = 0; // First FAQ open by default
window.toggleFAQ = function(index) {
  const answer = document.getElementById('answer-' + index);
  const iconContainer = document.getElementById('icon-container-' + index);
  
  // Close previously open FAQ
  if (openFAQ !== null && openFAQ !== index) {
    const prevAnswer = document.getElementById('answer-' + openFAQ);
    const prevIconContainer = document.getElementById('icon-container-' + openFAQ);
    if (prevAnswer) {
      prevAnswer.style.height = '0px';
      prevAnswer.style.opacity = '0';
      prevAnswer.style.transform = 'translateY(-10px)';
      prevAnswer.classList.remove('open');
    }
    if (prevIconContainer) {
      prevIconContainer.style.transform = 'rotate(0deg)';
    }
  }
  
  // Toggle current FAQ
  if (openFAQ === index) {
    // Close current FAQ
    if (answer) {
      answer.style.height = '0px';
      answer.style.opacity = '0';
      answer.style.transform = 'translateY(-10px)';
      answer.classList.remove('open');
    }
    if (iconContainer) {
      iconContainer.style.transform = 'rotate(0deg)';
    }
    openFAQ = null;
  } else {
    // Open current FAQ
    if (answer) {
      // Get the content height dynamically
      const content = answer.querySelector('.faq-answer-content');
      const contentHeight = content ? content.scrollHeight : 120;
      answer.style.height = contentHeight + 'px';
      answer.style.opacity = '1';
      answer.style.transform = 'translateY(0)';
      answer.classList.add('open');
    }
    if (iconContainer) {
      iconContainer.style.transform = 'rotate(45deg)';
    }
    openFAQ = index;
  }
};

// Initialize FAQ with first item open
function initializeFAQ() {
  setTimeout(() => {
    if (typeof window.toggleFAQ === 'function') {
      // Open first FAQ by default
      window.toggleFAQ(0);
    }
  }, 100);
}

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
    
    // Initialize pricing section animations
    initializePricingSectionAnimations();
    
    // Initialize footer scroll animation
    initializeFooterAnimation();
    
    // Initialize FAQ
    initializeFAQ();
  }
  
  function initializePricingSectionAnimations() {
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
      const pricingCards = document.querySelectorAll('.pricing-card');
      const pricingGrid = document.querySelector('.pricing-grid');
      const faqSection = document.querySelector('.faq-section');
      
      // Add staggered animation to cards
      pricingCards.forEach((card, index) => {
        const delay = 400 + (index * 100); // Start at 400ms, then add 100ms for each card
        
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
          card.classList.add('pricing-animated');
        }, delay);
      });
      
      // Animate pricing grid
      if (pricingGrid) {
        setTimeout(() => {
          pricingGrid.style.opacity = '1';
          pricingGrid.style.transform = 'translateY(0) scale(1)';
          pricingGrid.classList.add('pricing-animated');
        }, 300);
      }
      
      // Animate FAQ section after cards
      if (faqSection) {
        const faqDelay = 400 + (pricingCards.length * 100) + 200; // Extra 200ms after last card
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
