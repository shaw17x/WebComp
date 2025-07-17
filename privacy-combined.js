// Privacy Policy Combined - CSS + HTML Content
const privacyCSS = `
body{margin:0!important;padding:0!important}
.pp{max-width:900px;margin:80px auto;padding:20px;position:relative;z-index:999}
.pp-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#a5b4fc;text-transform:uppercase;letter-spacing:1px;animation:badgeEntry 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s both;position:relative;z-index:1000}
.pp-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6366f1;animation:spin 3s linear infinite}
.pp-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#6366f1 50%,#8b5cf6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:40px;position:relative;z-index:1000}
.pp-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;opacity:0.8;text-align:center;position:relative;z-index:1000}
.pp-section{background:linear-gradient(135deg,rgba(15,23,42,0.6),rgba(30,41,59,0.3));backdrop-filter:blur(10px);border:1px solid rgba(99,102,241,0.1);border-radius:20px;padding:30px;margin-bottom:30px;transition:all 0.3s ease;position:relative;z-index:1000}
.pp-section:hover{transform:translateY(-5px);border-color:rgba(99,102,241,0.3);box-shadow:0 20px 40px rgba(99,102,241,0.1)}
.pp-section h2{color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:15px;position:relative;padding-left:15px;z-index:1001}
.pp-section h2::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:15px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:2px;z-index:1002}
.pp-section h3{color:#8b5cf6;font-size:1.2rem;font-weight:600;margin:20px 0 10px 0;position:relative;z-index:1001}
.pp-section p{color:#cbd5e1;font-size:1rem;line-height:1.6;margin-bottom:15px;position:relative;z-index:1001}
.pp-section ul{list-style:none;padding:0;margin:15px 0;position:relative;z-index:1001}
.pp-section li{color:#cbd5e1;font-size:1rem;margin-bottom:8px;padding-left:20px;position:relative;line-height:1.5;z-index:1001}
.pp-section li::before{content:'→';position:absolute;left:0;color:#6366f1;font-weight:bold;z-index:1002}
.pp-section strong{color:#fff;font-weight:600;position:relative;z-index:1001}
.pp-intro{background:linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.05));border:1px solid rgba(99,102,241,0.2);text-align:center}
.pp-contact{background:linear-gradient(135deg,rgba(139,92,246,0.1),rgba(236,72,153,0.05));border:1px solid rgba(139,92,246,0.2)}
.pp-contact li::before{color:#ec4899}

/* Back to Home Button */
.back-home-container{text-align:center;margin:60px auto 40px;position:relative;z-index:1000}
.back-home-btn{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#9ca3af 0%,#d1d5db 100%);border:none;border-radius:0.5rem;padding:1rem 2.5rem;font-size:1.125rem;font-weight:600;color:#1f2937;text-decoration:none;transition:all 0.3s cubic-bezier(0.4,0,0.2,1);cursor:pointer;position:relative;overflow:hidden;box-shadow:0 4px 15px rgba(107,114,128,0.2)}
.back-home-btn:hover{transform:translateY(-2px);background:linear-gradient(135deg,#6b7280 0%,#9ca3af 100%);box-shadow:0 10px 25px rgba(107,114,128,0.3)}
.back-home-btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transform:translateY(0);transition:left 1.5s ease;animation:none;pointer-events:none}
.back-home-btn:hover::before{left:100%;animation:shimmer 1.5s infinite}
.back-home-btn svg{width:18px;height:18px;transition:transform 0.3s ease;position:relative;z-index:1}
.back-home-btn:hover svg{transform:translateX(-4px)}

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
  .pp{padding:15px;margin:60px auto}
  .pp-title{font-size:2rem}
  .pp-section{padding:20px}
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

const privacyHTML = `
<div class="pp">
  <div style="text-align: center;">
    <div class="pp-badge">
      <div class="pp-badge-dot"></div>
      Ghost Pilot Privacy
    </div>
  </div>
  <h1 class="pp-title">Privacy Policy</h1>
  <p class="pp-subtitle">Effective Date: January 15, 2025 | Last Updated: January 15, 2025</p>
  
  <div class="pp-section pp-intro">
    <p>At Ghost Pilot, Inc., we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our AI-powered interview assistance platform, in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>
  </div>
  
  <div class="pp-section">
    <h2>1. Information We Collect</h2>
    <p>We may collect the following categories of information:</p>
    <h3>a. Personal Information</h3>
    <ul>
      <li>Full name and contact details (e.g., email address)</li>
      <li>Login credentials and account settings</li>
      <li>Billing and payment information</li>
      <li>Communication and marketing preferences</li>
    </ul>
    <h3>b. Usage and Technical Data</h3>
    <ul>
      <li>Screenshots, images, or documents submitted for AI analysis</li>
      <li>Query history and AI-generated responses</li>
      <li>Browser type, device identifiers, operating system</li>
      <li>IP address, access logs, and usage statistics</li>
    </ul>
  </div>
  
  <div class="pp-section">
    <h2>2. Legal Basis for Processing</h2>
    <p>We process your personal data based on the following lawful grounds (where applicable under GDPR):</p>
    <ul>
      <li><strong>Consent</strong> (e.g., for marketing communications)</li>
      <li><strong>Contractual necessity</strong> (e.g., to provide our services)</li>
      <li><strong>Legal obligations</strong></li>
      <li><strong>Legitimate interests,</strong> such as product improvement, fraud prevention, and securing our platform</li>
    </ul>
  </div>
  
  <div class="pp-section">
    <h2>3. How We Use Your Information</h2>
    <p>Your data may be used for the following purposes:</p>
    <ul>
      <li>To provide and enhance our AI-driven services</li>
      <li>To manage user accounts and subscriptions</li>
      <li>To process payments securely</li>
      <li>To send service-related updates and administrative messages</li>
      <li>To respond to inquiries and provide customer support</li>
      <li>To analyze usage trends and improve platform performance</li>
      <li>To detect, prevent, and address technical or security issues</li>
      <li>To comply with legal obligations</li>
    </ul>
  </div>
  
  <div class="pp-section">
    <h2>4. Data Sharing and Disclosure</h2>
    <p>We do not sell, rent, or trade your personal information. However, we may share your information in the following situations:</p>
    <ul>
      <li><strong>Third-party processors:</strong> With service providers (e.g., OpenAI, Anthropic, Google, Stripe) under contractual obligations for processing queries and payments</li>
      <li><strong>Legal compliance:</strong> When required to comply with applicable laws or legal processes</li>
      <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
      <li><strong>With your consent:</strong> Where you have explicitly agreed to data sharing</li>
    </ul>
    <p>All third-party providers are required to maintain confidentiality and data protection standards.</p>
  </div>
  
  <div class="pp-section">
    <h2>5. Data Retention</h2>
    <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. When data is no longer required, it is securely deleted or anonymized. You may request deletion of your data at any time (see Section 7).</p>
  </div>
  
  <div class="pp-section">
    <h2>6. Data Security</h2>
    <p>We implement industry-standard technical and organizational safeguards to protect your data, including:</p>
    <ul>
      <li>End-to-end encryption for sensitive submissions</li>
      <li>Secure cloud infrastructure with role-based access controls</li>
      <li>Regular security audits and vulnerability testing</li>
      <li>Staff training on data protection protocols</li>
    </ul>
    <p>Despite these efforts, no system is 100% secure, and we cannot guarantee absolute data security.</p>
  </div>
  
  <div class="pp-section">
    <h2>7. Your Rights</h2>
    <p>Depending on your jurisdiction, you may have the following rights:</p>
    <ul>
      <li><strong>Access</strong> – Request a copy of your personal data</li>
      <li><strong>Rectification</strong> – Request correction of inaccurate or incomplete data</li>
      <li><strong>Erasure</strong> – Request deletion of your data ("right to be forgotten")</li>
      <li><strong>Restriction</strong> – Limit processing of your data under certain conditions</li>
      <li><strong>Data Portability</strong> – Obtain your data in a structured, machine-readable format</li>
      <li><strong>Objection</strong> – Object to processing based on legitimate interests or direct marketing</li>
      <li><strong>Withdraw Consent</strong> – Revoke consent at any time without affecting prior lawful processing</li>
    </ul>
    <p>To exercise these rights, please contact us using the details in Section 12.</p>
  </div>
  
  <div class="pp-section">
    <h2>8. Children's Privacy</h2>
    <p>Our services are not intended for individuals under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will delete it immediately.</p>
  </div>
  
  <div class="pp-section">
    <h2>9. Cookies and Tracking Technologies</h2>
    <p>We may use cookies and similar technologies to enhance your experience, track usage patterns, and personalize content. By using our website, you consent to the use of cookies. You can manage your cookie preferences via your browser settings.</p>
  </div>
  
  <div class="pp-section">
    <h2>10. International Data Transfers</h2>
    <p>If you are accessing our services from outside the United States, be aware that your data may be transferred to and processed in the U.S. We implement appropriate safeguards (such as Standard Contractual Clauses) to ensure that international data transfers comply with applicable law.</p>
  </div>
  
  <div class="pp-section">
    <h2>11. Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. When changes are made, we will revise the "Last Updated" date above. If the changes are material, we will notify you via email or in-app notifications. Continued use of our platform after changes constitutes your acknowledgment and agreement.</p>
  </div>
  
  <div class="pp-section pp-contact">
    <h2>12. Contact Us</h2>
    <p>For questions about this Privacy Policy or to exercise your rights, please contact:</p>
    <ul>
      <li><strong>Email:</strong> privacy@ghostpilot.ai</li>
      <li><strong>Data Protection Officer (DPO):</strong> dpo@ghostpilot.ai</li>
    </ul>
    <h3>Mailing Address:</h3>
    <p>Ghost Pilot, Inc.<br>
    123 AI Street<br>
    Tech City, TC 12345<br>
    United States</p>
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

// Auto-execute function to inject CSS and HTML
(function() {
  // Add CSS
  const style = document.createElement('style');
  style.textContent = privacyCSS;
  document.head.appendChild(style);
  
  // Add HTML when DOM is ready - find main content area
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializePrivacyPage();
    });
  } else {
    initializePrivacyPage();
  }
  
  function initializePrivacyPage() {
      // Try to find main content area, otherwise use body
      const mainContent = document.querySelector('main') || 
                         document.querySelector('.main-content') || 
                         document.querySelector('[data-framer-name="Content"]') ||
                         document.querySelector('.framer-page-content') ||
                         document.body;
      
      // Clear existing content in main area and add privacy policy
      if (mainContent !== document.body) {
        mainContent.innerHTML = privacyHTML;
      } else {
        // If we're using body, insert at the beginning but after header
        const header = document.querySelector('header') || document.querySelector('nav');
        if (header) {
          header.insertAdjacentHTML('afterend', privacyHTML);
        } else {
          document.body.insertAdjacentHTML('afterbegin', privacyHTML);
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
