// Ghost Pilot Documentation Combined - CSS + HTML Content
const docsCSS = `
body{margin:0!important;padding:0!important}
.docs-page{max-width:1200px;margin:80px auto;padding:20px;position:relative;z-index:999}
.docs-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s forwards;position:relative;z-index:1000}
.docs-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6b7280;animation:spin 3s linear infinite}
.docs-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#9ca3af 50%,#6b7280 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards}
.docs-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;text-align:center;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards}
.docs-section{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:30px;margin-bottom:30px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.docs-section.docs-animated{opacity:1;transform:translateY(0) scale(1)}
.docs-section:hover{transform:translateY(-5px) scale(1)!important;border-color:rgba(255,255,255,0.2);box-shadow:0 20px 40px rgba(10,14,26,0.3);transition:all 0.3s cubic-bezier(0.4,0,0.2,1)}
.docs-section h2{color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:15px;position:relative;padding-left:15px;z-index:1001}
.docs-section h2::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:15px;background:linear-gradient(135deg,#6b7280,#9ca3af);border-radius:2px;z-index:1002}
.docs-section h3{color:#9ca3af;font-size:1.2rem;font-weight:600;margin:20px 0 10px 0;position:relative;z-index:1001}
.docs-section p{color:#cbd5e1;font-size:1rem;line-height:1.6;margin-bottom:15px;position:relative;z-index:1001}
.docs-section ul{list-style:none;padding:0;margin:15px 0;position:relative;z-index:1001}
.docs-section li{color:#cbd5e1;font-size:1rem;margin-bottom:8px;padding-left:20px;position:relative;line-height:1.5;z-index:1001}
.docs-section li::before{content:'→';position:absolute;left:0;color:#6b7280;font-weight:bold;z-index:1002}
.docs-section strong{color:#fff;font-weight:600;position:relative;z-index:1001}
.docs-section code{background:rgba(107,114,128,0.1);color:#9ca3af;padding:2px 6px;border-radius:4px;font-family:'Fira Code',monospace;font-size:0.9rem}
.docs-intro{background:#0a0e1a;border:1px solid rgba(255,255,255,0.1);text-align:center}
.docs-contact{background:#0a0e1a;border:1px solid rgba(255,255,255,0.1)}
.docs-contact li::before{content:'→';color:#6b7280}

/* Back to Home Button */
.back-home-container{text-align:center;margin:60px auto 40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
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
  .docs-page{padding:15px;margin:60px auto}
  .docs-title{font-size:2rem}
  .docs-section{padding:20px}
  .footer-row{flex-direction:column!important;text-align:center!important;gap:20px!important}
  .footer-nav{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:16px!important}
  .footer-right{flex-direction:column!important;gap:20px!important}
  .footer-separator{display:none!important}
  .back-home-btn{font-size:14px;padding:12px 24px}
}

@keyframes containerEntry{from{opacity:0;transform:translateY(30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
`;

const docsHTML = `
<div class="docs-page">
  <div style="text-align: center;">
    <div class="docs-badge">
      <div class="docs-badge-dot"></div>
      Ghost Pilot Product Story
    </div>
  </div>
  <h1 class="docs-title">Why Ghost Pilot Exists</h1>
  <p class="docs-subtitle">The story behind creating the world's most advanced assessment assistance platform</p>
  
  <div class="docs-section docs-intro">
    <p>Ghost Pilot was born from a fundamental understanding: the current assessment system is broken. In today's competitive landscape, talented individuals often fail interviews, exams, tests, quizzes, and certifications not due to lack of capability, but because of anxiety, unfair assessment methods, and biased evaluation systems. We built Ghost Pilot to level the playing field across all forms of evaluation.</p>
  </div>
  
  <div class="docs-section">
    <h2>The Problem We Solve</h2>
    <p>The modern assessment landscape presents significant challenges across interviews, exams, certifications, and academic testing.</p>
    <h3>Assessment Anxiety & Performance Pressure</h3>
    <ul>
      <li><strong>High-stakes Environment:</strong> Single assessments can determine career trajectories and academic futures</li>
      <li><strong>Artificial Pressure:</strong> Timed exams and coding challenges don't reflect real-world performance</li>
      <li><strong>Knowledge Gaps:</strong> Obscure questions and memorization-based testing favor test-taking skills over actual competency</li>
      <li><strong>Communication Barriers:</strong> Language barriers and different learning styles create unfair disadvantages</li>
    </ul>
    <h3>Systemic Inequality in Assessment</h3>
    <ul>
      <li><strong>Privilege Gap:</strong> Wealthy students and candidates have access to expensive tutoring, prep courses, and coaching</li>
      <li><strong>Educational Bias:</strong> Standardized testing favors specific backgrounds over diverse knowledge and skills</li>
      <li><strong>Resource Advantages:</strong> Access to study materials, practice tests, and premium preparation tools</li>
      <li><strong>Technology Disparity:</strong> Premium AI tools and advanced preparation resources cost hundreds to thousands monthly</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>Our Vision & Mission</h2>
    <p>Ghost Pilot exists to democratize access to educational and career opportunities by creating fairer assessment systems across all evaluation formats.</p>
    <h3>Democratizing Assessment Success</h3>
    <ul>
      <li><strong>Universal Access:</strong> Premium AI assistance available to all students and professionals, regardless of economic background</li>
      <li><strong>Knowledge Focus:</strong> Help users demonstrate actual understanding rather than test-taking strategies</li>
      <li><strong>Confidence Building:</strong> Reduce anxiety across interviews, exams, certifications, and academic assessments</li>
      <li><strong>Breaking Barriers:</strong> Level the playing field for underrepresented groups in education and employment</li>
    </ul>
    <h3>Transforming Assessment Systems</h3>
    <ul>
      <li><strong>Understanding Over Memorization:</strong> Focus on comprehension and problem-solving ability</li>
      <li><strong>Real-world Application:</strong> Support assessments that reflect actual knowledge and skills</li>
      <li><strong>Inclusive Evaluation:</strong> Accommodate different learning styles, backgrounds, and cognitive approaches</li>
      <li><strong>Merit-based Success:</strong> Ensure the most capable individuals succeed regardless of test-taking advantages</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>Market Reality & Industry Need</h2>
    <p>The demand for assessment assistance reflects deeper issues in modern educational and professional evaluation systems.</p>
    <h3>Current Market Dynamics</h3>
    <ul>
      <li><strong>Test Prep Industry:</strong> $4B+ market serving students, professionals, and job seekers who can afford premium services</li>
      <li><strong>Premium AI Access:</strong> GPT-4, Claude, O3, and advanced models cost $20-200+ monthly with usage limits</li>
      <li><strong>Educational Inequality:</strong> Expensive tutoring, prep courses, and study materials favor wealthy students</li>
      <li><strong>Geographic Disadvantages:</strong> Remote students and international candidates face additional barriers</li>
    </ul>
    <h3>Why Traditional Solutions Fall Short</h3>
    <ul>
      <li><strong>Cost Barriers:</strong> Quality preparation for exams, certifications, and interviews remains prohibitively expensive</li>
      <li><strong>Limited Availability:</strong> Human tutors and coaches can't scale to meet global demand across all subjects</li>
      <li><strong>One-size-fits-all:</strong> Generic study materials don't address individual learning styles or circumstances</li>
      <li><strong>Timing Constraints:</strong> Preparation happens weeks before assessments, not during the actual evaluation</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>Our Unique Approach</h2>
    <p>Ghost Pilot addresses these challenges through innovative technology and principled design decisions.</p>
    <h3>Unlimited Premium AI Access</h3>
    <ul>
      <li><strong>Cost Elimination:</strong> Access to GPT-4, Claude Opus, O3, and Gemini without monthly fees or usage limits</li>
      <li><strong>Real-time Intelligence:</strong> Instant analysis and assistance during live exams, interviews, tests, and certifications</li>
      <li><strong>Multi-modal Support:</strong> Text, image, audio, and document processing for comprehensive assessment assistance</li>
      <li><strong>Adaptive Learning:</strong> AI models optimized for diverse assessment types from academic exams to professional certifications</li>
    </ul>
    <h3>Advanced Stealth Technology</h3>
    <ul>
      <li><strong>Undetectable Operation:</strong> Sophisticated evasion techniques work across all testing platforms and proctoring systems</li>
      <li><strong>Natural Integration:</strong> Assistance appears as natural thinking, not external help</li>
      <li><strong>Security Focus:</strong> Enterprise-grade encryption protects against all detection methods</li>
      <li><strong>Universal Compatibility:</strong> Works with any assessment platform, testing software, or evaluation system</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>Ethical Framework & Values</h2>
    <p>Our product philosophy is built on creating opportunities, not exploitation.</p>
    <h3>Empowerment Over Deception</h3>
    <ul>
      <li><strong>Skill Enhancement:</strong> We help users perform at their actual capability level</li>
      <li><strong>Confidence Building:</strong> Reducing anxiety allows true abilities to shine through</li>
      <li><strong>Learning Opportunity:</strong> Users gain knowledge and improve through each interaction</li>
      <li><strong>Accessibility Tool:</strong> Accommodates different learning styles and cognitive approaches</li>
    </ul>
    <h3>Addressing Market Failures</h3>
    <ul>
      <li><strong>Economic Justice:</strong> High-quality assistance shouldn't be limited by financial resources</li>
      <li><strong>Geographic Equality:</strong> Remote and international candidates deserve equal opportunities</li>
      <li><strong>Neurodiversity Support:</strong> Accommodating different cognitive styles and processing speeds</li>
      <li><strong>Career Mobility:</strong> Breaking down barriers that prevent talented people from advancing</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>Impact & Future Vision</h2>
    <p>Ghost Pilot represents the beginning of a broader transformation in how we evaluate knowledge, skills, and competency across all assessment formats.</p>
    <h3>Immediate User Benefits</h3>
    <ul>
      <li><strong>Academic Success:</strong> Students report 400%+ improvement in exam scores, certification pass rates, and academic performance</li>
      <li><strong>Career Advancement:</strong> Professionals achieve higher success rates in interviews, licensing exams, and job assessments</li>
      <li><strong>Stress Reduction:</strong> Significant decrease in test anxiety and performance pressure across all evaluation types</li>
      <li><strong>Learning Enhancement:</strong> Continuous knowledge building through AI-powered feedback during actual assessments</li>
      <li><strong>Economic Opportunity:</strong> Access to educational programs, certifications, and positions previously out of reach</li>
    </ul>
    <h3>Long-term Educational & Professional Evolution</h3>
    <ul>
      <li><strong>Fairer Assessment:</strong> Forcing institutions to focus on actual knowledge and competency over test-taking ability</li>
      <li><strong>Evaluation Innovation:</strong> Pushing education and hiring toward more realistic and practical assessment methods</li>
      <li><strong>Knowledge Optimization:</strong> Ensuring the most capable individuals succeed regardless of assessment format preferences</li>
      <li><strong>Global Educational Equality:</strong> Creating opportunities for learners and professionals regardless of location, background, or resources</li>
    </ul>
  </div>
  
  <div class="docs-section docs-contact">
    <h2>The Ghost Pilot Difference</h2>
    <p>More than a tool - a movement toward assessment equality and educational justice across all evaluation formats.</p>
    <h3>What Sets Us Apart</h3>
    <ul>
      <li><strong>Unlimited Access:</strong> No subscription fees, usage limits, or restrictions for premium AI models across all assessment types</li>
      <li><strong>Enterprise Security:</strong> Military-grade stealth technology works across all testing platforms and proctoring systems</li>
      <li><strong>Real-time Support:</strong> Instant assistance during live exams, interviews, certifications, and tests - not just preparation</li>
      <li><strong>Universal Compatibility:</strong> Works with any assessment platform, testing software, educational system, or evaluation format</li>
    </ul>
    <h3>Our Commitment</h3>
    <ul>
      <li><strong>Accessibility First:</strong> Making advanced assessment assistance available to all students and professionals</li>
      <li><strong>Continuous Innovation:</strong> Constantly improving to stay ahead of all detection and proctoring systems</li>
      <li><strong>User Privacy:</strong> Your data, usage, and assessment activity remain completely confidential and secure</li>
      <li><strong>Success Focus:</strong> Dedicated to your academic achievement, career advancement, and professional growth</li>
    </ul>
  </div>
  
  <!-- Back to Home Button -->
  <div class="back-home-container">
    <a href="/" class="back-home-btn">
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
          <a href="https://twitter.com/ghostpilot" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Twitter">
            <div style="transform:scale(0.8)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
          </a>
          <a href="https://github.com/ghostpilot" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="GitHub">
            <div style="transform:scale(0.8)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>
          <a href="https://discord.gg/ghostpilot" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Discord">
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
  style.textContent = docsCSS;
  document.head.appendChild(style);
  
  // Add HTML when DOM is ready - find main content area
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeDocsPage();
    });
  } else {
    initializeDocsPage();
  }
  
  function initializeDocsPage() {
      // Try to find main content area, otherwise use body
      const mainContent = document.querySelector('main') || 
                         document.querySelector('.main-content') || 
                         document.querySelector('[data-framer-name="Content"]') ||
                         document.querySelector('.framer-page-content') ||
                         document.body;
      
      // Clear existing content in main area and add documentation
      if (mainContent !== document.body) {
        mainContent.innerHTML = docsHTML;
      } else {
        // If we're using body, insert at the beginning but after header
        const header = document.querySelector('header') || document.querySelector('nav');
        if (header) {
          header.insertAdjacentHTML('afterend', docsHTML);
        } else {
          document.body.insertAdjacentHTML('afterbegin', docsHTML);
        }
      }
    
    // Initialize docs section animations
    initializeDocsSectionAnimations();
    
    // Initialize footer scroll animation
    initializeFooterAnimation();
  }
  
  function initializeDocsSectionAnimations() {
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
      const sections = document.querySelectorAll('.docs-section');
      const backHomeContainer = document.querySelector('.back-home-container');
      
      // Add staggered animation to sections
      sections.forEach((section, index) => {
        const delay = 400 + (index * 100); // Start at 400ms, then add 100ms for each section
        
        setTimeout(() => {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0) scale(1)';
          section.classList.add('docs-animated');
        }, delay);
      });
      
      // Animate back home button after all sections
      if (backHomeContainer) {
        const backHomeDelay = 400 + (sections.length * 100) + 200; // Extra 200ms after last section
        setTimeout(() => {
          backHomeContainer.style.opacity = '1';
          backHomeContainer.style.transform = 'translateY(0) scale(1)';
        }, backHomeDelay);
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
