// Terms of Service Combined - CSS + HTML Content
const termsCSS = `
body{margin:0!important;padding:0!important}
.tos{max-width:900px;margin:80px auto;padding:20px;position:relative;z-index:999}
.tos-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#a5b4fc;text-transform:uppercase;letter-spacing:1px;animation:badgeEntry 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s both;position:relative;z-index:1000}
.tos-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6366f1;animation:spin 3s linear infinite}
.tos-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#6366f1 50%,#8b5cf6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:40px;position:relative;z-index:1000}
.tos-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;opacity:0.8;text-align:center;position:relative;z-index:1000}
.tos-section{background:linear-gradient(135deg,rgba(15,23,42,0.6),rgba(30,41,59,0.3));backdrop-filter:blur(10px);border:1px solid rgba(99,102,241,0.1);border-radius:20px;padding:30px;margin-bottom:30px;transition:all 0.3s ease;position:relative;z-index:1000}
.tos-section:hover{transform:translateY(-5px);border-color:rgba(99,102,241,0.3);box-shadow:0 20px 40px rgba(99,102,241,0.1)}
.tos-section h2{color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:15px;position:relative;padding-left:15px;z-index:1001}
.tos-section h2::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:15px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:2px;z-index:1002}
.tos-section h3{color:#8b5cf6;font-size:1.2rem;font-weight:600;margin:20px 0 10px 0;position:relative;z-index:1001}
.tos-section p{color:#cbd5e1;font-size:1rem;line-height:1.6;margin-bottom:15px;position:relative;z-index:1001}
.tos-section ul{list-style:none;padding:0;margin:15px 0;position:relative;z-index:1001}
.tos-section li{color:#cbd5e1;font-size:1rem;margin-bottom:8px;padding-left:20px;position:relative;line-height:1.5;z-index:1001}
.tos-section li::before{content:'→';position:absolute;left:0;color:#6366f1;font-weight:bold;z-index:1002}
.tos-section strong{color:#fff;font-weight:600;position:relative;z-index:1001}
.tos-intro{background:linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.05));border:1px solid rgba(99,102,241,0.2);text-align:center}
.tos-contact{background:linear-gradient(135deg,rgba(139,92,246,0.1),rgba(236,72,153,0.05));border:1px solid rgba(139,92,246,0.2)}
.tos-contact li::before{color:#ec4899}
.tos-contact h3{color:#ec4899}
.tos-contact h2::before{background:linear-gradient(135deg,#8b5cf6,#ec4899)}
.tos-important{background:linear-gradient(135deg,rgba(236,72,153,0.1),rgba(245,158,11,0.05));border:1px solid rgba(236,72,153,0.2)}
.tos-important li::before{color:#f59e0b}
.tos-important h3{color:#f59e0b}
.tos-important h2::before{background:linear-gradient(135deg,#ec4899,#f59e0b)}
.tos-important:hover{border-color:rgba(236,72,153,0.3);box-shadow:0 20px 40px rgba(236,72,153,0.1)}
.tos-contact:hover{border-color:rgba(139,92,246,0.3);box-shadow:0 20px 40px rgba(139,92,246,0.1)}
@media(max-width:768px){.tos{padding:15px;margin:60px auto}.tos-title{font-size:2rem}.tos-section{padding:20px}}
@keyframes badgeEntry{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
`;

const termsHTML = `
<div class="tos">
  <div style="text-align: center;">
    <div class="tos-badge">
      <div class="tos-badge-dot"></div>
      Ghost Pilot Terms
    </div>
  </div>
  <h1 class="tos-title">Terms of Service</h1>
  <p class="tos-subtitle">Effective Date: January 15, 2025 | Last Updated: January 15, 2025</p>
  
  <div class="tos-section tos-intro">
    <p>Welcome to Ghost Pilot. These Terms of Service ("Terms") govern your use of our AI-powered interview assistance platform ("Service"), operated by Ghost Pilot, Inc. ("we," "us," or "our"). By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.</p>
  </div>
  
  <div class="tos-section">
    <h2>1. Acceptance of Terms</h2>
    <p>By creating an account, downloading our application, or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the Service.</p>
    <p>We reserve the right to update and change these Terms at any time. Continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
  </div>
  
  <div class="tos-section">
    <h2>2. Description of Service</h2>
    <p>Ghost Pilot provides AI-powered assistance for interview preparation and real-time support, including:</p>
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
    <p>The Service and its original content, features, and functionality are owned by Ghost Pilot, Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
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
    <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, GHOST PILOT, INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.</strong></p>
    <p>Our total liability for any claims under these Terms shall not exceed the amount paid by you to us in the twelve (12) months preceding the claim.</p>
  </div>
  
  <div class="tos-section">
    <h2>8. Indemnification</h2>
    <p>You agree to indemnify, defend, and hold harmless Ghost Pilot, Inc., its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:</p>
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
    <p>These Terms constitute the entire agreement between you and Ghost Pilot, Inc. regarding the Service and supersede all prior agreements and understandings.</p>
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
      <li><strong>Email:</strong> legal@ghostpilot.ai</li>
      <li><strong>Support:</strong> support@ghostpilot.ai</li>
    </ul>
    <h3>Mailing Address:</h3>
    <p>Ghost Pilot, Inc.<br>
    123 AI Street<br>
    Tech City, TC 12345<br>
    United States</p>
  </div>
</div>
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
    });
  } else {
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    if (mainContent !== document.body) {
      mainContent.innerHTML = termsHTML;
    } else {
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        header.insertAdjacentHTML('afterend', termsHTML);
      } else {
        document.body.insertAdjacentHTML('afterbegin', termsHTML);
      }
    }
  }
})(); 
