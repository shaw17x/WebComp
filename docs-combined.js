// Ghost Pilot Documentation Combined - CSS + HTML Content
const docsCSS = `
body{margin:0!important;padding:0!important}
.docs-page{max-width:1200px;margin:80px auto;padding:20px;position:relative;z-index:999}
.docs-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;animation:badgeEntry 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s both;position:relative;z-index:1000}
.docs-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6b7280;animation:spin 3s linear infinite}
.docs-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#9ca3af 50%,#6b7280 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:40px;position:relative;z-index:1000}
.docs-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;opacity:0.8;text-align:center;position:relative;z-index:1000}
.docs-section{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:30px;margin-bottom:30px;transition:all 0.3s cubic-bezier(0.4,0,0.2,1);position:relative;z-index:1000}
.docs-section:hover{transform:translateY(-5px);border-color:rgba(255,255,255,0.2);box-shadow:0 20px 40px rgba(10,14,26,0.3)}
.docs-section h2{color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:15px;position:relative;padding-left:15px;z-index:1001}
.docs-section h2::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:15px;background:linear-gradient(135deg,#6b7280,#9ca3af);border-radius:2px;z-index:1002}
.docs-section h3{color:#9ca3af;font-size:1.2rem;font-weight:600;margin:20px 0 10px 0;position:relative;z-index:1001}
.docs-section p{color:#cbd5e1;font-size:1rem;line-height:1.6;margin-bottom:15px;position:relative;z-index:1001}
.docs-section ul{list-style:none;padding:0;margin:15px 0;position:relative;z-index:1001}
.docs-section li{color:#cbd5e1;font-size:1rem;margin-bottom:8px;padding-left:0px;position:relative;line-height:1.5;z-index:1001}
.docs-section li::before{content:'';position:absolute;left:0;color:#6b7280;font-weight:bold;z-index:1002}
.docs-section strong{color:#fff;font-weight:600;position:relative;z-index:1001}
.docs-section code{background:rgba(107,114,128,0.1);color:#9ca3af;padding:2px 6px;border-radius:4px;font-family:'Fira Code',monospace;font-size:0.9rem}
.docs-intro{background:#0a0e1a;border:1px solid rgba(255,255,255,0.1);text-align:center}
.docs-contact{background:#0a0e1a;border:1px solid rgba(255,255,255,0.1)}
.docs-contact li::before{content:'';color:#6b7280}

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
.footer-social{display:flex;gap:24px;align-items:center}
.footer-social a{font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.3s ease;cursor:pointer;font-family:inherit}
.footer-social a:hover{color:#ffffff}
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

const docsHTML = `
<div class="docs-page">
  <div style="text-align: center;">
    <div class="docs-badge">
      <div class="docs-badge-dot"></div>
      Ghost Pilot Product Story
    </div>
  </div>
  <h1 class="docs-title">Why Ghost Pilot Exists</h1>
  <p class="docs-subtitle">The story behind creating the world's most advanced interview assistance platform</p>
  
  <div class="docs-section docs-intro">
    <p>Ghost Pilot was born from a fundamental understanding: the current interview process is broken. In today's competitive market, talented individuals often fail interviews not due to lack of capability, but because of anxiety, unfair assessment methods, and biased evaluation systems. We built Ghost Pilot to level the playing field.</p>
  </div>
  
  <div class="docs-section">
    <h2>The Problem We Solve</h2>
    <p>The modern hiring landscape presents significant challenges that talented candidates face daily.</p>
    <h3>Interview Anxiety & Performance Pressure</h3>
    <ul>
      <li><strong>High-stakes Environment:</strong> Single interviews can determine career trajectories</li>
      <li><strong>Artificial Pressure:</strong> Timed coding challenges don't reflect real work conditions</li>
      <li><strong>Knowledge Gaps:</strong> Obscure algorithm questions rarely used in actual jobs</li>
      <li><strong>Communication Barriers:</strong> Introverts and non-native speakers face unfair disadvantages</li>
    </ul>
    <h3>Systemic Inequality in Hiring</h3>
    <ul>
      <li><strong>Privilege Gap:</strong> Some candidates have access to expensive interview coaching</li>
      <li><strong>Educational Bias:</strong> Emphasis on specific academic backgrounds over practical skills</li>
      <li><strong>Network Advantages:</strong> Insider knowledge and referrals create unequal opportunities</li>
      <li><strong>Resource Disparity:</strong> Premium AI tools and preparation materials cost thousands</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>Our Vision & Mission</h2>
    <p>Ghost Pilot exists to democratize access to career opportunities and create a fairer job market.</p>
    <h3>Democratizing Interview Success</h3>
    <ul>
      <li><strong>Equal Access:</strong> Premium AI assistance available to everyone, not just the privileged</li>
      <li><strong>Skill Focus:</strong> Help candidates demonstrate actual capabilities rather than interview tricks</li>
      <li><strong>Confidence Building:</strong> Reduce anxiety by providing real-time intelligent support</li>
      <li><strong>Breaking Barriers:</strong> Level the playing field for underrepresented groups</li>
    </ul>
    <h3>Transforming the Hiring Process</h3>
    <ul>
      <li><strong>Performance Over Perfection:</strong> Focus on problem-solving ability, not memorization</li>
      <li><strong>Real-world Simulation:</strong> Interviews should reflect actual job conditions</li>
      <li><strong>Inclusive Evaluation:</strong> Accommodate different communication styles and backgrounds</li>
      <li><strong>Merit-based Selection:</strong> Ensure the best candidates succeed regardless of circumstances</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>Market Reality & Industry Need</h2>
    <p>The demand for interview assistance reflects deeper issues in modern recruitment practices.</p>
    <h3>Current Market Dynamics</h3>
    <ul>
      <li><strong>Interview Coaching Industry:</strong> $2B+ market serving only those who can afford it</li>
      <li><strong>Premium AI Access:</strong> GPT-4, Claude, and advanced models cost $20-100+ monthly</li>
      <li><strong>Preparation Inequality:</strong> Expensive courses and mock interviews favor wealthy candidates</li>
      <li><strong>Geographic Disadvantages:</strong> Remote candidates face additional technical and cultural barriers</li>
    </ul>
    <h3>Why Traditional Solutions Fall Short</h3>
    <ul>
      <li><strong>Cost Barriers:</strong> Quality interview prep remains prohibitively expensive</li>
      <li><strong>Limited Availability:</strong> Human coaches can't scale to meet global demand</li>
      <li><strong>One-size-fits-all:</strong> Generic advice doesn't address individual circumstances</li>
      <li><strong>Timing Constraints:</strong> Preparation happens weeks before, not during the actual interview</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>Our Unique Approach</h2>
    <p>Ghost Pilot addresses these challenges through innovative technology and principled design decisions.</p>
    <h3>Unlimited Premium AI Access</h3>
    <ul>
      <li><strong>Cost Elimination:</strong> Access to GPT-4, Claude Opus, O3, and Gemini without monthly fees</li>
      <li><strong>Real-time Intelligence:</strong> Instant analysis and suggestions during live interviews</li>
      <li><strong>Multi-modal Support:</strong> Text, image, and audio processing for comprehensive assistance</li>
      <li><strong>Adaptive Learning:</strong> AI models trained specifically for interview scenarios</li>
    </ul>
    <h3>Advanced Stealth Technology</h3>
    <ul>
      <li><strong>Undetectable Operation:</strong> Sophisticated evasion techniques protect user privacy</li>
      <li><strong>Natural Integration:</strong> Assistance feels organic, not mechanical or obvious</li>
      <li><strong>Security Focus:</strong> Enterprise-grade encryption and anti-detection measures</li>
      <li><strong>Cross-platform Compatibility:</strong> Works seamlessly across all major operating systems</li>
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
    <p>Ghost Pilot represents the beginning of a broader transformation in how we evaluate and hire talent.</p>
    <h3>Immediate User Benefits</h3>
    <ul>
      <li><strong>Career Advancement:</strong> Users report 300%+ improvement in interview success rates</li>
      <li><strong>Stress Reduction:</strong> Significant decrease in interview anxiety and performance pressure</li>
      <li><strong>Skill Development:</strong> Continuous learning through AI-powered feedback and suggestions</li>
      <li><strong>Economic Opportunity:</strong> Access to higher-paying positions previously out of reach</li>
    </ul>
    <h3>Long-term Industry Evolution</h3>
    <ul>
      <li><strong>Fairer Hiring:</strong> Forcing companies to focus on actual job-relevant skills</li>
      <li><strong>Interview Innovation:</strong> Pushing the industry toward more realistic assessment methods</li>
      <li><strong>Talent Optimization:</strong> Ensuring the best candidates succeed regardless of interview style</li>
      <li><strong>Global Equality:</strong> Creating opportunities for talent regardless of location or background</li>
    </ul>
  </div>
  
  <div class="docs-section docs-contact">
    <h2>The Ghost Pilot Difference</h2>
    <p>More than a tool - a movement toward interview equality and career justice.</p>
    <h3>What Sets Us Apart</h3>
    <ul>
      <li><strong>Unlimited Access:</strong> No subscription fees or usage limits for premium AI models</li>
      <li><strong>Enterprise Security:</strong> Military-grade stealth technology protects user privacy</li>
      <li><strong>Real-time Support:</strong> Instant assistance during live interviews, not just preparation</li>
      <li><strong>Universal Compatibility:</strong> Works with any interview platform or assessment system</li>
    </ul>
    <h3>Our Commitment</h3>
    <ul>
      <li><strong>Accessibility First:</strong> Making advanced interview assistance available to everyone</li>
      <li><strong>Continuous Innovation:</strong> Constantly improving to stay ahead of detection systems</li>
      <li><strong>User Privacy:</strong> Your data and usage remain completely confidential and secure</li>
      <li><strong>Success Focus:</strong> Dedicated to your career advancement and professional growth</li>
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
        <a href="#help">Help Center</a>
        <a href="/document">Documentation</a>
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
          <a href="https://twitter.com/ghostpilot" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com/ghostpilot" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://discord.gg/ghostpilot" target="_blank" rel="noopener noreferrer">Discord</a>
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
