// Ghost Pilot Documentation Combined - CSS + HTML Content
const docsCSS = `
body{margin:0!important;padding:0!important}
.docs-page{max-width:1200px;margin:80px auto;padding:20px;position:relative;z-index:999}
.docs-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#a5b4fc;text-transform:uppercase;letter-spacing:1px;animation:badgeEntry 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s both;position:relative;z-index:1000}
.docs-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6366f1;animation:spin 3s linear infinite}
.docs-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#6366f1 50%,#8b5cf6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:40px;position:relative;z-index:1000}
.docs-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;opacity:0.8;text-align:center;position:relative;z-index:1000}
.docs-section{background:linear-gradient(135deg,rgba(15,23,42,0.6),rgba(30,41,59,0.3));backdrop-filter:blur(10px);border:1px solid rgba(99,102,241,0.1);border-radius:20px;padding:30px;margin-bottom:30px;transition:all 0.3s ease;position:relative;z-index:1000}
.docs-section:hover{transform:translateY(-5px);border-color:rgba(99,102,241,0.3);box-shadow:0 20px 40px rgba(99,102,241,0.1)}
.docs-section h2{color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:15px;position:relative;padding-left:15px;z-index:1001}
.docs-section h2::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:15px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:2px;z-index:1002}
.docs-section h3{color:#8b5cf6;font-size:1.2rem;font-weight:600;margin:20px 0 10px 0;position:relative;z-index:1001}
.docs-section p{color:#cbd5e1;font-size:1rem;line-height:1.6;margin-bottom:15px;position:relative;z-index:1001}
.docs-section ul{list-style:none;padding:0;margin:15px 0;position:relative;z-index:1001}
.docs-section li{color:#cbd5e1;font-size:1rem;margin-bottom:8px;padding-left:20px;position:relative;line-height:1.5;z-index:1001}
.docs-section li::before{content:'→';position:absolute;left:0;color:#6366f1;font-weight:bold;z-index:1002}
.docs-section strong{color:#fff;font-weight:600;position:relative;z-index:1001}
.docs-section code{background:rgba(99,102,241,0.1);color:#a5b4fc;padding:2px 6px;border-radius:4px;font-family:'Fira Code',monospace;font-size:0.9rem}
.docs-intro{background:linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.05));border:1px solid rgba(99,102,241,0.2);text-align:center}
.docs-contact{background:linear-gradient(135deg,rgba(139,92,246,0.1),rgba(236,72,153,0.05));border:1px solid rgba(139,92,246,0.2)}
.docs-contact li::before{color:#ec4899}

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
      Ghost Pilot Technical Documentation
    </div>
  </div>
  <h1 class="docs-title">Technical Documentation</h1>
  <p class="docs-subtitle">Complete system architecture, implementation details, and developer guide</p>
  
  <div class="docs-section docs-intro">
    <p>Ghost Pilot is an advanced AI-powered interview assistance platform featuring stealth technology, unlimited AI access, and cross-platform compatibility. This documentation provides comprehensive technical insights into system architecture, implementation details, and deployment procedures.</p>
  </div>
  
  <div class="docs-section">
    <h2>🏗️ System Architecture</h2>
    <p>Ghost Pilot is built on a modern Electron-based desktop application with React frontend and TypeScript backend.</p>
    <h3>Core Components</h3>
    <ul>
      <li><strong>Frontend:</strong> React 18 + TypeScript + Vite for fast development</li>
      <li><strong>Backend:</strong> Electron main process with TypeScript</li>
      <li><strong>Styling:</strong> Tailwind CSS with custom components</li>
      <li><strong>State Management:</strong> Zustand with persistence</li>
      <li><strong>Database:</strong> SQLite3 for local data storage</li>
    </ul>
    <h3>Processing Architecture</h3>
    <ul>
      <li><strong>Service-Oriented Design:</strong> Dependency injection container</li>
      <li><strong>Processing Orchestrator:</strong> Coordinates question types and AI models</li>
      <li><strong>Question Processors:</strong> MCQ, Coding, Debug, Screenshot analysis</li>
      <li><strong>AI Provider Factory:</strong> Unified interface for multiple AI services</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>🤖 AI System Architecture</h2>
    <p>Ghost Pilot provides unlimited access to premium AI models through advanced provider management.</p>
    <h3>Unlimited AI Access Strategy</h3>
    <ul>
      <li><strong>PuterHelper Integration:</strong> Leverages Puter.js for free AI access</li>
      <li><strong>Premium Model Support:</strong> O3, GPT-4o, Claude Opus 4, Claude Sonnet 4, Gemini 2.0 Flash</li>
      <li><strong>Automatic Retry Logic:</strong> Handles rate limits and failures gracefully</li>
      <li><strong>Dynamic Model Selection:</strong> Intelligent routing based on question type</li>
    </ul>
    <h3>AI Provider Implementation</h3>
    <ul>
      <li><strong>OpenAI Provider:</strong> GPT-4o, O3 models with function calling</li>
      <li><strong>Anthropic Provider:</strong> Claude Opus 4, Sonnet 4 with tool use</li>
      <li><strong>Google Provider:</strong> Gemini 2.0 Flash with multimodal capabilities</li>
      <li><strong>OpenRouter Provider:</strong> Access to diverse model ecosystem</li>
    </ul>
    <code>
    class AIProviderFactory {
      static createProvider(type: AIProviderType): AIProviderInterface {
        switch (type) {
          case 'openai': return new OpenAIProvider();
          case 'anthropic': return new AnthropicProvider();
          case 'gemini': return new GeminiProvider();
          case 'puter': return new PuterHelper();
        }
      }
    }
    </code>
  </div>
  
  <div class="docs-section">
    <h2>🕵️ Advanced Stealth Technology</h2>
    <p>Ghost Pilot achieves 12/12 stealth rating through sophisticated detection avoidance.</p>
    <h3>Core Stealth Features</h3>
    <ul>
      <li><strong>Process Name Masking:</strong> Appears as legitimate system process</li>
      <li><strong>Memory Signature Obfuscation:</strong> Prevents memory scanning detection</li>
      <li><strong>Anti-Hook Protection:</strong> Bypasses API monitoring systems</li>
      <li><strong>Window Management:</strong> Invisible window operations</li>
      <li><strong>Screenshot Timing:</strong> Intelligent capture intervals</li>
    </ul>
    <h3>Detection Avoidance Methods</h3>
    <ul>
      <li><strong>Randomized Behavior:</strong> Non-predictable operation patterns</li>
      <li><strong>System Integration:</strong> Deep OS-level integration</li>
      <li><strong>Resource Management:</strong> Minimal footprint monitoring</li>
      <li><strong>Communication Encryption:</strong> Secure data transmission</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>📸 Screenshot Processing System</h2>
    <p>Intelligent screenshot capture and AI-powered analysis for interview questions.</p>
    <h3>Capture Technology</h3>
    <ul>
      <li><strong>Multi-Monitor Support:</strong> Captures across all connected displays</li>
      <li><strong>Region Detection:</strong> Automatic question area identification</li>
      <li><strong>OCR Integration:</strong> Text extraction from images</li>
      <li><strong>Image Optimization:</strong> Compression and quality enhancement</li>
    </ul>
    <h3>Analysis Pipeline</h3>
    <ul>
      <li><strong>Question Type Detection:</strong> MCQ, coding, theoretical identification</li>
      <li><strong>Content Preprocessing:</strong> Image enhancement and text extraction</li>
      <li><strong>AI Model Routing:</strong> Optimal model selection per question type</li>
      <li><strong>Response Formatting:</strong> Structured answer delivery</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>🔐 Licensing & Authentication</h2>
    <p>Secure licensing system with cloud synchronization and usage tracking.</p>
    <h3>License Management</h3>
    <ul>
      <li><strong>Supabase Integration:</strong> Cloud-based license validation</li>
      <li><strong>Hardware Fingerprinting:</strong> Device-specific license binding</li>
      <li><strong>Usage Monitoring:</strong> Real-time consumption tracking</li>
      <li><strong>Automatic Renewal:</strong> Seamless subscription management</li>
    </ul>
    <h3>Security Features</h3>
    <ul>
      <li><strong>Encrypted Storage:</strong> Secure local credential storage</li>
      <li><strong>Session Management:</strong> Automatic timeout and refresh</li>
      <li><strong>Audit Logging:</strong> Comprehensive activity tracking</li>
      <li><strong>Tamper Detection:</strong> License integrity verification</li>
    </ul>
  </div>
  
  <div class="docs-section">
    <h2>🚀 Deployment & Distribution</h2>
    <p>Cross-platform deployment with automated build and distribution pipeline.</p>
    <h3>Build System</h3>
    <ul>
      <li><strong>Electron Builder:</strong> Multi-platform packaging</li>
      <li><strong>Auto-updater:</strong> Seamless update delivery</li>
      <li><strong>Code Signing:</strong> Windows and macOS certificate signing</li>
      <li><strong>Portable Builds:</strong> No-installation deployment option</li>
    </ul>
    <h3>Platform Support</h3>
    <ul>
      <li><strong>Windows:</strong> Windows 10/11 with installer and portable</li>
      <li><strong>macOS:</strong> Intel and Apple Silicon support</li>
      <li><strong>Linux:</strong> AppImage and deb package distribution</li>
    </ul>
    <code>
    // Build configuration
    {
      "appId": "com.ghostpilot.app",
      "productName": "Ghost Pilot",
      "directories": {
        "output": "dist"
      },
      "win": {
        "target": ["nsis", "portable"]
      }
    }
    </code>
  </div>
  
  <div class="docs-section">
    <h2>⚡ Performance & Optimization</h2>
    <p>High-performance architecture with intelligent resource management.</p>
    <h3>Performance Features</h3>
    <ul>
      <li><strong>Lazy Loading:</strong> Component-based code splitting</li>
      <li><strong>Memory Management:</strong> Automatic garbage collection</li>
      <li><strong>Caching Strategy:</strong> Intelligent response caching</li>
      <li><strong>Background Processing:</strong> Non-blocking operations</li>
    </ul>
    <h3>Resource Optimization</h3>
    <ul>
      <li><strong>Bundle Optimization:</strong> Tree-shaking and minification</li>
      <li><strong>Image Compression:</strong> Automatic screenshot optimization</li>
      <li><strong>Network Efficiency:</strong> Request batching and compression</li>
      <li><strong>CPU Throttling:</strong> Adaptive processing based on system load</li>
    </ul>
  </div>
  
  <div class="docs-section docs-contact">
    <h2>🛠️ Development Setup</h2>
    <p>Quick start guide for developers and contributors.</p>
    <h3>Prerequisites</h3>
    <ul>
      <li><strong>Node.js:</strong> Version 18+ with npm/yarn</li>
      <li><strong>Python:</strong> Version 3.8+ for build tools</li>
      <li><strong>Git:</strong> Version control and repository access</li>
    </ul>
    <h3>Installation</h3>
    <code>
    # Clone repository
    git clone https://github.com/ghostpilot/app.git
    
    # Install dependencies
    npm install
    
    # Start development server
    npm run dev
    
    # Build for production
    npm run build
    </code>
    <h3>Development Commands</h3>
    <ul>
      <li><strong>npm run dev:</strong> Start development with hot reload</li>
      <li><strong>npm run build:</strong> Production build</li>
      <li><strong>npm run test:</strong> Run test suite</li>
      <li><strong>npm run lint:</strong> Code quality checks</li>
    </ul>
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
