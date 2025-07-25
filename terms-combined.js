// Terms of Service Combined - CSS + HTML Content
const termsCSS = `
body{margin:0!important;padding:0!important}
.tos{max-width:900px;margin:80px auto;padding:20px;position:relative;z-index:999}
.tos-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s forwards;position:relative;z-index:1000}
.tos-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6b7280;animation:spin 3s linear infinite}
.tos-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#9ca3af 50%,#6b7280 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards}
.tos-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;text-align:center;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards}
.tos-section{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:30px;margin-bottom:30px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.tos-section.tos-animated{opacity:1;transform:translateY(0) scale(1)}
.tos-section:hover{transform:translateY(-5px) scale(1)!important;border-color:rgba(255,255,255,0.2);box-shadow:0 20px 40px rgba(10,14,26,0.3);transition:all 0.3s cubic-bezier(0.4,0,0.2,1)}
.tos-section h2{color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:15px;position:relative;padding-left:15px;z-index:1001}
.tos-section h2::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:15px;background:linear-gradient(135deg,#6b7280,#9ca3af);border-radius:2px;z-index:1002}
.tos-section h3{color:#9ca3af;font-size:1.2rem;font-weight:600;margin:20px 0 10px 0;position:relative;z-index:1001}
.tos-section p{color:#cbd5e1;font-size:1rem;line-height:1.6;margin-bottom:15px;position:relative;z-index:1001}
.tos-section ul{list-style:none;padding:0;margin:15px 0;position:relative;z-index:1001}
.tos-section li{color:#cbd5e1;font-size:1rem;margin-bottom:8px;padding-left:20px;position:relative;line-height:1.5;z-index:1001}
.tos-section li::before{content:'→';position:absolute;left:0;color:#6b7280;font-weight:bold;z-index:1002}
.tos-section strong{color:#fff;font-weight:600;position:relative;z-index:1001}
.tos-intro{background:#0a0e1a;border:1px solid rgba(255,255,255,0.1);text-align:center}
.tos-contact{background:#0a0e1a;border:1px solid rgba(255,255,255,0.1)}
.tos-contact li::before{color:#6b7280}
.tos-contact h3{color:#9ca3af}
.tos-contact h2::before{background:linear-gradient(135deg,#6b7280,#9ca3af)}
.tos-important{background:#0a0e1a;border:1px solid rgba(255,255,255,0.1)}
.tos-important li::before{color:#6b7280}
.tos-important h3{color:#9ca3af}
.tos-important h2::before{background:linear-gradient(135deg,#6b7280,#9ca3af)}



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
  .tos{padding:15px;margin:60px auto}
  .tos-title{font-size:2rem}
  .tos-section{padding:20px}
  .footer-row{flex-direction:column!important;text-align:center!important;gap:20px!important}
  .footer-nav{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:16px!important}
  .footer-right{flex-direction:column!important;gap:20px!important}
  .footer-separator{display:none!important}
}

@keyframes containerEntry{from{opacity:0;transform:translateY(30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
`;

const termsHTML = `
<div class="tos">
  <div style="text-align: center;">
    <div class="tos-badge">
      <div class="tos-badge-dot"></div>
      Steley Terms
    </div>
  </div>
  <h1 class="tos-title">Terms of Service</h1>
  <p class="tos-subtitle">Effective Date: January 15, 2025 | Last Updated: January 15, 2025</p>
  
  <div class="tos-section tos-intro">
          <p>Welcome to Steley. These Terms of Service ("Terms") govern your use of our AI-powered interview assistance platform ("Service"), operated by Steley, Inc. ("we," "us," or "our"). By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.</p>
  </div>
  
  <div class="tos-section">
    <h2>1. Acceptance of Terms</h2>
    <p>By creating an account, downloading our application, or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the Service.</p>
    <p>We reserve the right to update and change these Terms at any time. Continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
  </div>
  
  <div class="tos-section">
    <h2>2. Description of Service</h2>
          <p>Steley provides AI-powered assistance for interview preparation and real-time support, including:</p>
    <ul>
      <li>Screenshot analysis and question interpretation</li>
      <li>AI-generated responses and solutions</li>
      <li>Multiple choice question assistance</li>
      <li>Coding problem solutions</li>
      <li>General knowledge support</li>
      <li>Real-time chat interface with AI models</li>
    </ul>
    <p>The Service is intended for educational and interview preparation purposes only. Users are responsible for ensuring their use complies with applicable rules and regulations.</p>
  </div>
  
  <div class="tos-section">
    <h2>3. User Accounts</h2>
    <h3>Account Creation</h3>
    <p>To access certain features of the Service, you must create an account. You agree to:</p>
    <ul>
      <li>Provide accurate, current, and complete information</li>
      <li>Maintain and promptly update your account information</li>
      <li>Maintain the security of your password and account</li>
      <li>Accept responsibility for all activities under your account</li>
      <li>Notify us immediately of any unauthorized access</li>
    </ul>
    <h3>Account Termination</h3>
    <p>We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or illegal activities.</p>
  </div>
  
  <div class="tos-section">
    <h2>4. Subscription and Payment</h2>
    <h3>Subscription Plans</h3>
    <p>We offer various subscription tiers with different features and usage limits. By subscribing, you agree to pay the applicable fees for your chosen plan.</p>
    <h3>Billing</h3>
    <ul>
      <li>Subscription fees are billed in advance on a recurring basis (monthly or annually)</li>
      <li>All fees are in USD unless otherwise specified</li>
      <li>Prices are subject to change with 30 days' notice</li>
      <li>You authorize us to charge your payment method on file</li>
    </ul>
    <h3>Refunds</h3>
    <p>Subscription fees are non-refundable except as required by law or as explicitly stated in our Refund Policy. No refunds are provided for partial subscription periods.</p>
  </div>
  
  <div class="tos-section">
    <h2>5. Acceptable Use Policy</h2>
    <p>You agree not to use the Service to:</p>
    <ul>
      <li>Violate any laws, regulations, or third-party rights</li>
      <li>Engage in academic dishonesty or plagiarism</li>
      <li>Circumvent interview integrity or assessment protocols</li>
      <li>Upload malicious code or interfere with the Service</li>
      <li>Attempt to gain unauthorized access to our systems</li>
      <li>Harass, abuse, or harm other users</li>
      <li>Engage in any activity that disrupts the Service</li>
      <li>Resell or redistribute access to the Service</li>
    </ul>
    <p>Violation of this policy may result in immediate account termination without refund.</p>
  </div>
  
  <div class="tos-section">
    <h2>6. Intellectual Property Rights</h2>
    <h3>Our Content</h3>
          <p>The Service and its original content, features, and functionality are owned by Steley, Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
    <h3>User Content</h3>
    <p>By uploading content to our Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and process your content solely for providing the Service. You retain all rights to your content.</p>
    <h3>AI-Generated Content</h3>
    <p>Content generated by our AI models is provided for your personal use. We make no claims of ownership over AI-generated content, but we also make no warranties about its accuracy, completeness, or suitability for any purpose.</p>
  </div>
  
  <div class="tos-section tos-important">
    <h2>7. Disclaimers and Limitations of Liability</h2>
    <h3>No Warranties</h3>
    <p><strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</strong> We do not warrant that:</p>
    <ul>
      <li>The Service will be uninterrupted or error-free</li>
      <li>AI-generated responses will be accurate or complete</li>
      <li>The Service will meet your specific requirements</li>
      <li>Any errors in the Service will be corrected</li>
    </ul>
    <h3>Limitation of Liability</h3>
          <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, STELEY, INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.</strong></p>
    <p>Our total liability for any claims under these Terms shall not exceed the amount paid by you to us in the twelve (12) months preceding the claim.</p>
  </div>
  
  <div class="tos-section">
    <h2>8. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless Steley, Inc., its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:</p>
    <ul>
      <li>Your access to or use of the Service</li>
      <li>Your violation of these Terms</li>
      <li>Your violation of any third-party rights</li>
      <li>Any content you upload or submit through the Service</li>
    </ul>
  </div>
  
  <div class="tos-section">
    <h2>9. Privacy and Data Protection</h2>
    <p>Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to our collection and use of your information as described in the Privacy Policy.</p>
    <p>We implement reasonable security measures to protect your data, but we cannot guarantee absolute security. You acknowledge that you provide information at your own risk.</p>
  </div>
  
  <div class="tos-section">
    <h2>10. Third-Party Services</h2>
    <p>Our Service integrates with third-party AI providers (OpenAI, Anthropic, Google) and other services. Your use of these integrations is subject to their respective terms and policies. We are not responsible for the content, privacy practices, or policies of third-party services.</p>
  </div>
  
  <div class="tos-section">
    <h2>11. Governing Law and Dispute Resolution</h2>
    <h3>Governing Law</h3>
    <p>These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to its conflict of law provisions.</p>
    <h3>Arbitration</h3>
    <p>Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in Delaware, and judgment may be entered in any court of competent jurisdiction.</p>
    <h3>Class Action Waiver</h3>
    <p>You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.</p>
  </div>
  
  <div class="tos-section">
    <h2>12. General Provisions</h2>
    <h3>Entire Agreement</h3>
          <p>These Terms constitute the entire agreement between you and Steley, Inc. regarding the Service and supersede all prior agreements and understandings.</p>
    <h3>Severability</h3>
    <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
    <h3>Waiver</h3>
    <p>No waiver of any term or condition shall be deemed a further or continuing waiver of such term or any other term.</p>
    <h3>Assignment</h3>
    <p>You may not assign or transfer these Terms without our prior written consent. We may assign our rights under these Terms without restriction.</p>
  </div>
  
  <div class="tos-section tos-contact">
    <h2>13. Contact Information</h2>
    <p>If you have any questions about these Terms of Service, please contact us:</p>
    <ul>
              <li><strong>Email:</strong> legal@steley.ai</li>
        <li><strong>Support:</strong> support@steley.ai</li>
    </ul>
    <h3>Mailing Address:</h3>
          <p>Steley, Inc.<br>
    123 AI Street<br>
    Tech City, TC 12345<br>
    United States</p>
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

// Auto-execute function to inject CSS and HTML
(function() {
  // Add CSS
  const style = document.createElement('style');
  style.textContent = termsCSS;
  document.head.appendChild(style);
  
  // Add HTML when DOM is ready - find main content area
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeTermsPage();
    });
  } else {
    initializeTermsPage();
  }
  
  function initializeTermsPage() {
    // Try to find main content area, otherwise use body
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    // Clear existing content in main area and add terms of service
    if (mainContent !== document.body) {
      mainContent.innerHTML = termsHTML;
    } else {
      // If we're using body, insert at the beginning but after header
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        header.insertAdjacentHTML('afterend', termsHTML);
      } else {
        document.body.insertAdjacentHTML('afterbegin', termsHTML);
      }
    }
    
    // Initialize terms section animations
    initializeTermsSectionAnimations();
    
    // Initialize footer scroll animation
    initializeFooterAnimation();
  }
  
  function initializeTermsSectionAnimations() {
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
      const sections = document.querySelectorAll('.tos-section');
      
      // Add staggered animation to sections
      sections.forEach((section, index) => {
        const delay = 400 + (index * 100); // Start at 400ms, then add 100ms for each section
        
        setTimeout(() => {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0) scale(1)';
          section.classList.add('tos-animated');
        }, delay);
      });
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
