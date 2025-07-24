// Steley Sign Up Page Combined - CSS + HTML Content (Component Only) - v2.1 (Logo + teley)
const signupCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Signup Component Container */
.auth-signup-component{max-width:32rem;width:100%;margin:80px auto;padding:20px;position:relative;z-index:999}

/* Floating Card - Optimized for Smooth Performance */
.auth-screen-card{max-width:32rem;width:100%;position:relative;z-index:10;background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.05);border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.4);opacity:1 !important;transform:translate3d(0,0,0) scale(1) !important;visibility:visible !important;will-change:transform,opacity;backface-visibility:hidden;perspective:1000px}
.auth-screen-card.animate-in{animation:smoothEntry 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards}
.auth-screen-card.floating{animation:cardFloat 6s ease-in-out infinite}

/* Header Section */
.auth-header{padding:1.5rem 1.5rem 1rem;text-align:center}
.auth-title{font-size:2rem;font-weight:bold;margin-bottom:0.5rem;background:linear-gradient(to right,white,rgb(229,231,235),rgb(156,163,175));background-clip:text;-webkit-background-clip:text;color:transparent}
.auth-subtitle{font-size:1rem;font-weight:500;color:rgba(255,255,255,0.8);margin-bottom:0.5rem}
.auth-description{font-size:0.75rem;line-height:1.5;color:rgba(255,255,255,0.5)}

/* Form Container */
.auth-form-container{padding:0 1.5rem 1rem}
.auth-form-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:0.5rem;padding:1rem;transition:all 0.15s;will-change:auto}
.auth-form-card:hover{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)}

/* Form Elements */
.auth-form{space-y:1rem}
.auth-field-group{margin-bottom:1rem}
.auth-label{display:block;color:rgba(255,255,255,0.7);font-size:0.75rem;font-weight:500;margin-bottom:0.5rem}
.auth-input{width:100%;padding:0.5rem 0.75rem;font-size:0.875rem;background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.05);border-radius:0.375rem;color:white;transition:all 0.2s;box-sizing:border-box}
.auth-input::placeholder{color:rgba(255,255,255,0.3)}
.auth-input:focus{outline:none;border-color:rgba(255,255,255,0.2);box-shadow:0 0 0 1px rgba(255,255,255,0.2)}
.auth-input:hover{border-color:rgba(255,255,255,0.1)}

/* Submit Button */
.auth-submit{width:100%;padding:0.75rem 1rem;font-size:0.875rem;font-weight:500;border-radius:0.375rem;background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.9);transition:all 0.15s;cursor:pointer;will-change:auto}
.auth-submit:hover{background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.1);color:white}
.auth-submit:disabled{opacity:0.5;cursor:not-allowed}

/* Toggle Section */
.auth-toggle{padding:0 1.5rem 1rem;text-align:center}
.auth-toggle-button{color:rgba(255,255,255,0.6);font-size:0.75rem;text-decoration:none;transition:color 0.2s;background:none;border:none;cursor:pointer}
.auth-toggle-button:hover{color:rgba(255,255,255,0.8)}

/* Skip Section */
.auth-skip{padding:0 1.5rem 1.5rem;text-align:center}
.auth-skip-button{color:rgba(255,255,255,0.6);font-size:0.75rem;text-decoration:none;transition:color 0.2s;background:none;border:none;cursor:pointer}
.auth-skip-button:hover{color:rgba(255,255,255,0.8)}

/* Loading Spinner */
.loading-spinner{width:1rem;height:1rem;border:2px solid rgba(255,255,255,0.2);border-top-color:white;border-radius:50%;animation:spin 1s linear infinite;margin-right:0.5rem}

/* Verification Code Input */
.verification-container{display:none;padding:0 1.5rem 1rem}
.verification-container.show{display:block}
.verification-title{font-size:1.125rem;font-weight:600;color:rgba(255,255,255,0.9);text-align:center;margin-bottom:0.5rem}
.verification-subtitle{font-size:0.75rem;color:rgba(255,255,255,0.6);text-align:center;margin-bottom:1.5rem;line-height:1.4}
.verification-code-inputs{display:flex;justify-content:center;gap:0.75rem;margin-bottom:1rem}
.verification-digit{width:3rem;height:3rem;text-align:center;font-size:1.25rem;font-weight:bold;border-radius:0.5rem;border:2px solid rgba(255,255,255,0.2);background:rgba(0,0,0,0.3);color:white;transition:all 0.2s}
.verification-digit:focus{outline:none;border-color:rgba(255,255,255,0.4);box-shadow:0 0 0 2px rgba(255,255,255,0.1)}
.verification-digit:disabled{opacity:0.5;cursor:not-allowed}
.verification-buttons{display:flex;flex-direction:column;gap:0.75rem}
.verification-verify{width:100%;padding:0.75rem 1rem;font-size:0.875rem;font-weight:500;border-radius:0.375rem;background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.9);transition:all 0.15s;cursor:pointer;will-change:auto}
.verification-verify:hover{background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.1);color:white}
.verification-verify:disabled{opacity:0.5;cursor:not-allowed}
.verification-resend{background:none;border:none;color:rgba(255,255,255,0.6);font-size:0.75rem;text-decoration:underline;cursor:pointer;transition:color 0.2s}
.verification-resend:hover{color:rgba(255,255,255,0.8)}
.verification-resend:disabled{opacity:0.5;cursor:not-allowed}
.verification-back{background:none;border:none;color:rgba(255,255,255,0.6);font-size:0.75rem;cursor:pointer;transition:color 0.2s}
.verification-back:hover{color:rgba(255,255,255,0.8)}

/* Footer Styles */
.auth-footer{position:relative;background-color:transparent;border-top:1px solid rgba(255,255,255,0.1);font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;opacity:0.3;visibility:visible;transition:all 0.6s cubic-bezier(0.25,0.46,0.45,0.94);transform:scale(0.95) translateY(20px);margin-top:80px;animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards}
.auth-footer-content{max-width:1400px;margin:0 auto;padding:28px 40px}
.auth-footer-row{display:flex;justify-content:center;align-items:center;flex-wrap:nowrap;gap:40px;animation:fadeInUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s both}
.auth-footer-left{display:flex;align-items:center;white-space:nowrap}
.auth-footer-copyright{font-size:14px;font-weight:400;color:rgba(255,255,255,0.6);letter-spacing:-0.01em}
.auth-footer-separator{color:rgba(255,255,255,0.2);font-size:18px;line-height:1;margin:0 8px}
.auth-footer-nav{display:flex;gap:32px;align-items:center;flex-wrap:nowrap;white-space:nowrap}
.auth-footer-link{font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.3s ease;cursor:pointer}
.auth-footer-link:hover{color:#ffffff}
.auth-footer-right{display:flex;align-items:center;gap:32px}
.auth-footer-legal{display:flex;gap:24px;align-items:center;white-space:nowrap}
.auth-footer-social{display:flex;gap:12px;align-items:center}
.auth-social-link{width:32px;height:32px;border-radius:6px;background-color:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.6);transition:all 0.3s ease;cursor:pointer}
.auth-social-link:hover{background-color:rgba(255,255,255,0.1);color:#ffffff}

/* Animations */
@keyframes smoothEntry{0%{opacity:0;transform:translate3d(0,30px,0) scale(0.95)}100%{opacity:1;transform:translate3d(0,0,0) scale(1)}}
@keyframes cardFloat{0%,100%{transform:translateY(0px) rotate(0deg)}50%{transform:translateY(-10px) rotate(0.5deg)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes containerEntry{from{opacity:0;transform:translateY(30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

/* Responsive */
@media(max-width:768px){.auth-signup-component{padding:15px;margin:60px auto}.auth-screen-card{max-width:28rem}.auth-footer-row{flex-direction:column!important;text-align:center!important;gap:20px!important}.auth-footer-nav{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:16px!important}.auth-footer-right{flex-direction:column!important;gap:20px!important}.auth-footer-separator{display:none!important}}
`;

const signupHTML = `
<div class="auth-signup-component">
  <div class="auth-screen-card">
    <!-- Header Section -->
    <div class="auth-header">
      <!-- Logo + Title Container (v2.1 - Cache Bust) -->
      <div style="display: inline-flex; align-items: center; gap: 0; margin-bottom: 0.5rem;">
        <img src="https://raw.githubusercontent.com/shaw17x/WebComp/main/SteleyBlueLogo.png?v=2" alt="Steley Logo" style="width: 40px; height: 40px; object-fit: contain; image-rendering: crisp-edges; flex-shrink: 0; margin-right: -4px;" onerror="console.warn('Steley logo failed to load'); this.style.display='none'">
        <h1 class="auth-title" style="margin-bottom: 0;">teley</h1>
      </div>
      <h2 class="auth-subtitle">Join Steley</h2>
      <p class="auth-description">Create an account to save preferences and history</p>
    </div>

    <!-- Authentication Form -->
    <div class="auth-form-container">
      <div class="auth-form-card">
        <form class="auth-form" id="signupForm">
          <!-- Email Field -->
          <div class="auth-field-group">
            <label for="email" class="auth-label">Email Address</label>
            <input
              id="email"
              type="email"
              class="auth-input"
              placeholder="your@email.com"
              required
            />
          </div>

          <!-- Password Field -->
          <div class="auth-field-group">
            <label for="password" class="auth-label">Password</label>
            <input
              id="password"
              type="password"
              class="auth-input"
              placeholder="••••••••"
              required
            />
          </div>

          <!-- Confirm Password Field -->
          <div class="auth-field-group">
            <label for="confirmPassword" class="auth-label">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              class="auth-input"
              placeholder="••••••••"
              required
            />
          </div>

          <!-- Submit Button -->
          <button type="submit" class="auth-submit">
            <span id="submitText">Create Account</span>
          </button>
        </form>
      </div>
    </div>

    <!-- Toggle Auth Mode -->
    <div class="auth-toggle">
      <button type="button" class="auth-toggle-button" onclick="window.location.href='/login'">
        Already have an account? Sign in
      </button>
    </div>

    <!-- Skip & Options -->
    <div class="auth-skip">
      <button type="button" class="auth-skip-button" onclick="window.location.href='/'">
        Skip for now and continue to app
      </button>
      <p style="font-size:0.625rem;color:rgba(255,255,255,0.4);margin-top:0.5rem;">
        Once signed in, use to start capturing screenshots
      </p>
    </div>

    <!-- Email Verification Section (Initially Hidden) -->
    <div id="verificationContainer" class="verification-container">
      <div class="auth-form-card">
        <h3 class="verification-title">Check Your Email</h3>
        <p class="verification-subtitle">
          We sent a 6-digit verification code to<br>
          <span id="verificationEmail" style="color:rgba(255,255,255,0.8);font-weight:500;"></span>
        </p>
        
        <div class="verification-code-inputs">
          <input type="text" class="verification-digit" maxlength="1" data-index="0" inputmode="numeric">
          <input type="text" class="verification-digit" maxlength="1" data-index="1" inputmode="numeric">
          <input type="text" class="verification-digit" maxlength="1" data-index="2" inputmode="numeric">
          <input type="text" class="verification-digit" maxlength="1" data-index="3" inputmode="numeric">
          <input type="text" class="verification-digit" maxlength="1" data-index="4" inputmode="numeric">
          <input type="text" class="verification-digit" maxlength="1" data-index="5" inputmode="numeric">
        </div>
        
        <div class="verification-buttons">
          <button id="verifyButton" class="verification-verify" disabled>
            <span id="verifyButtonText">Verify Email</span>
          </button>
          
          <div style="text-align:center;">
            <p style="font-size:0.75rem;color:rgba(255,255,255,0.4);margin-bottom:0.5rem;">
              Didn't receive the code?
            </p>
            <button id="resendButton" class="verification-resend">
              <span id="resendButtonText">Resend Code</span>
            </button>
          </div>
          
          <div style="text-align:center;">
            <button id="backToSignupButton" class="verification-back">
              ← Back to sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="auth-footer">
  <div class="auth-footer-content">
    <div class="auth-footer-row">
      <!-- Left Side - Copyright -->
      <div class="auth-footer-left">
        <span class="auth-footer-copyright">© Steley 2025</span>
      </div>

      <span class="auth-footer-separator">·</span>

      <!-- Center - Navigation Links -->
      <div class="auth-footer-nav">
        <a href="#features" class="auth-footer-link">Features</a>
        <a href="/pricing" class="auth-footer-link">Pricing</a>
        <a href="#ai-models" class="auth-footer-link">AI Models</a>
        <a href="/document" class="auth-footer-link">Documentation</a>
      </div>

      <span class="auth-footer-separator">·</span>

      <!-- Right Side - Legal & Social -->
      <div class="auth-footer-right">
        <!-- Legal Links -->
        <div class="auth-footer-legal">
          <a href="/privacy-policy" class="auth-footer-link">Privacy</a>
          <a href="/terms-of-service" class="auth-footer-link">Terms</a>
        </div>

        <span class="auth-footer-separator">·</span>

        <!-- Social Links -->
        <div class="auth-footer-social">
          <a href="https://twitter.com/steley" target="_blank" rel="noopener noreferrer" class="auth-social-link" aria-label="Twitter">
            <div style="transform:scale(0.8)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
          </a>
          <a href="https://github.com/steley" target="_blank" rel="noopener noreferrer" class="auth-social-link" aria-label="GitHub">
            <div style="transform:scale(0.8)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>
          <a href="https://discord.gg/steley" target="_blank" rel="noopener noreferrer" class="auth-social-link" aria-label="Discord">
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
  // Check if we should load signup (pathname OR hash)
  const isSignupPage = location.pathname.includes('signup') || 
                       location.pathname.includes('sign-up') || 
                       location.hash.includes('signup') ||
                       location.hash.includes('sign-up');
  
  console.log('🚀 NEW v2.1: Signup component starting - Logo+teley mode...');
  console.log('📍 Current URL:', location.href);
  console.log('📍 Pathname:', location.pathname);
  console.log('📍 Hash:', location.hash);
  console.log('📍 Is signup page?', isSignupPage);
  
  // Only load if this is actually a signup page
  if (!isSignupPage) {
    console.log('❌ Not a signup page, skipping...');
    return;
  }
  
  // Add CSS
  const style = document.createElement('style');
  style.textContent = signupCSS;
  document.head.appendChild(style);
  console.log('✅ Signup CSS added');
  
  // Add HTML when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeSignupPage();
    });
  } else {
    initializeSignupPage();
  }
  
  function initializeSignupPage() {
    console.log('🔧 Initializing signup page...');
    
    // Try to find main content area, otherwise use body
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    console.log('📍 Main content element:', mainContent.tagName);
    
    // Clear existing content in main area and add signup page
    if (mainContent !== document.body) {
      mainContent.innerHTML = signupHTML;
    } else {
      // If we're using body, insert at the beginning but after header
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        header.insertAdjacentHTML('afterend', signupHTML);
      } else {
        document.body.insertAdjacentHTML('afterbegin', signupHTML);
      }
    }
    
    console.log('✅ Signup HTML added');
    
    // Initialize interactions after a short delay to ensure DOM is ready
    setTimeout(() => {
      initializeSignupInteractions();
    }, 100);
  }
  
  function initializeSignupInteractions() {
    console.log('🔧 Initializing signup interactions...');
    
    // Form submission
    const form = document.getElementById('signupForm');
    const submitText = document.getElementById('submitText');
    
    if (form) {
      console.log('✅ Signup form found');
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log('📝 Form submission started');
        
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        
        console.log('🔍 Checking form inputs...');
        console.log('📧 Email input found:', !!emailInput);
        console.log('🔒 Password input found:', !!passwordInput);
        console.log('🔒 Confirm password input found:', !!confirmPasswordInput);
        
        if (!emailInput || !passwordInput || !confirmPasswordInput) {
          console.error('❌ Required inputs not found');
          return;
        }
        
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        console.log('📋 Form data collected:');
        console.log('📧 Email:', email ? 'PROVIDED' : 'EMPTY');
        console.log('🔒 Password:', password ? `${password.length} chars` : 'EMPTY');
        console.log('🔒 Confirm Password:', confirmPassword ? `${confirmPassword.length} chars` : 'EMPTY');
        
        if (!email || !password || !confirmPassword) {
          console.error('❌ Empty fields detected');
          alert('Please fill in all fields');
          return;
        }
        
        if (password !== confirmPassword) {
          console.error('❌ Passwords do not match');
          alert('Passwords do not match');
          return;
        }
        
        if (password.length < 6) {
          console.error('❌ Password too short');
          alert('Password must be at least 6 characters');
          return;
        }
        
        console.log('✅ Form validation passed');
        
        // Show loading state
        if (submitText) {
          submitText.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              <div class="loading-spinner"></div>
              Creating Account...
            </div>
          `;
          console.log('🔄 Loading state displayed');
        }
        
        try {
          console.log('🔍 Checking for existing auth client...');
          console.log('🌐 window.steleyAuth exists:', !!window.steleyAuth);
          
          // Initialize auth client directly (no external loading)
          console.log('🔄 Initializing auth client directly...');
          
          // Force clear old auth client and create new one
          console.log('🧹 Clearing existing auth client...');
          window.steleyAuth = null;
          
          console.log('🔧 Creating new auth client instance...');
          
          // Initialize auth client directly - no external script loading
          class SteleyAuth {
            constructor() {
              this.supabase = null;
              this.currentUser = null;
              this.initialized = false;
              
              this.config = {
                url: 'https://hmzpsbeeeqldffajfckh.supabase.co',
                anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtenBzYmVlZXFsZGZmYWpmY2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMzY5NjUsImV4cCI6MjA2NDkxMjk2NX0.suyzPHjjw7t27tCS8e_hNjjAOaGCU8mdOWOL6kxEVvM'
              };
              this.supabaseUrl = this.config.url;
              this.supabaseKey = this.config.anonKey;
            }

            async initialize() {
              if (this.initialized) return;
              try {
                console.log('🔄 Initializing Supabase auth client...');
                await this.loadSupabaseScript();
                this.supabase = window.supabase.createClient(this.config.url, this.config.anonKey);
                console.log('✅ Supabase client created');
                const { data: { session } } = await this.supabase.auth.getSession();
                this.currentUser = session?.user || null;
                console.log('👤 Current session user:', this.currentUser?.email || 'None');
                this.supabase.auth.onAuthStateChange((event, session) => {
                  this.currentUser = session?.user || null;
                  this.onAuthStateChange(event, session);
                });
                this.initialized = true;
                console.log('✅ Steley Auth initialized successfully');
              } catch (error) {
                console.error('❌ Auth initialization failed:', error);
                throw error;
              }
            }

            loadSupabaseScript() {
              return new Promise((resolve, reject) => {
                if (window.supabase) {
                  console.log('✅ Supabase already loaded');
                  resolve();
                  return;
                }
                console.log('📥 Loading Supabase from CDN...');
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
                script.onload = () => {
                  console.log('✅ Supabase script loaded');
                  resolve();
                };
                script.onerror = (error) => {
                  console.error('❌ Supabase script failed to load:', error);
                  reject(error);
                };
                document.head.appendChild(script);
              });
            }

            onAuthStateChange(event, session) {
              console.log('🔄 Auth state changed:', event, session?.user?.email);
              window.dispatchEvent(new CustomEvent('authStateChanged', {
                detail: { event, session, user: session?.user }
              }));
            }

                          async signUp(email, password, additionalData = {}) {
                console.log('🚀 Starting signup process with email:', email);
                if (!this.initialized) {
                  console.log('⏳ Auth not initialized, initializing now...');
                  await this.initialize();
                }
                try {
                  console.log('📝 Calling Supabase signUp with OTP verification...');
                  const { data, error } = await this.supabase.auth.signUp({
                    email,
                    password,
                    options: {
                      emailRedirectTo: undefined, // Use OTP instead of links
                      data: {
                        created_via: 'website',
                        verification_method: 'otp',
                        ...additionalData
                      }
                    }
                  });
                  console.log('📥 Supabase signup response:');
                  console.log('📥 Data:', data);
                  console.log('📥 Error:', error);
                  console.log('📥 User created:', !!data?.user);
                  console.log('📥 User ID:', data?.user?.id);
                  
                  if (error) {
                    console.error('❌ Supabase signup error:', error);
                    return { success: false, error: error.message, details: error };
                  }
                  if (!data?.user) {
                    console.error('❌ No user returned from signup');
                    return { success: false, error: 'No user data returned from signup' };
                  }
                  
                  // Check if email verification is needed (no session = needs verification)
                  if (data.user && !data.session) {
                    console.log('📧 Email verification required');
                    return { 
                      success: true, 
                      data, 
                      user: data.user, 
                      needsVerification: true 
                    };
                  }
                  
                  console.log('✅ User signup successful with immediate session, user ID:', data.user.id);
                  console.log('🎉 Signup process completed successfully');
                  return { success: true, data, user: data.user };
                } catch (error) {
                  console.error('💥 Signup process failed with error:');
                  console.error('💥 Error type:', error.constructor.name);
                  console.error('💥 Error message:', error.message);
                  console.error('💥 Error stack:', error.stack);
                  return { 
                    success: false, 
                    error: error.message || 'Unknown signup error',
                    details: error 
                  };
                }
              }

              async verifyEmailOTP(email, token) {
                console.log('🔐 Starting email verification with OTP:', email);
                if (!this.initialized) {
                  await this.initialize();
                }
                try {
                  console.log('📝 Calling Supabase verifyOtp...');
                  const { data, error } = await this.supabase.auth.verifyOtp({
                    email,
                    token,
                    type: 'email'
                  });
                  console.log('📥 Verification response:', { data, error });
                  if (error) {
                    console.error('❌ Verification error:', error);
                    return { success: false, error: error.message };
                  }
                  console.log('✅ Email verification successful');
                  return { success: true, data, user: data.user };
                } catch (error) {
                  console.error('💥 Verification failed:', error);
                  return { success: false, error: error.message || 'Verification failed' };
                }
              }

              async resendVerificationCode(email) {
                console.log('📧 Resending verification code to:', email);
                if (!this.initialized) {
                  await this.initialize();
                }
                try {
                  const { error } = await this.supabase.auth.resend({
                    type: 'signup',
                    email,
                    options: {
                      emailRedirectTo: undefined // Use OTP instead of links
                    }
                  });
                  if (error) {
                    console.error('❌ Resend error:', error);
                    return { success: false, error: error.message };
                  }
                  console.log('✅ Verification code resent successfully');
                  return { success: true };
                } catch (error) {
                  console.error('💥 Resend failed:', error);
                  return { success: false, error: error.message || 'Failed to resend code' };
                }
              }
          }

          // Create the global auth instance
          window.steleyAuth = new SteleyAuth();
          console.log('✅ Auth client created directly');
          console.log('🔍 Auth client methods:', Object.keys(window.steleyAuth));
          
          // Check if auth client is properly loaded
          if (!window.steleyAuth) {
            throw new Error('Auth client failed to load');
          }
          
          if (!window.steleyAuth.signUp) {
            throw new Error('Auth client signUp method not found');
          }
          
          console.log('🚀 Starting signup process...');
          console.log('📧 Email for signup:', email);
          console.log('🔒 Password length:', password.length);
          
          // Perform real signup
          const result = await window.steleyAuth.signUp(email, password);
          
          console.log('📥 Signup result received:');
          console.log('📥 Result object:', result);
          console.log('📥 Success:', result?.success);
          console.log('📥 Error:', result?.error);
          console.log('📥 User:', result?.user ? 'USER DATA RECEIVED' : 'NO USER DATA');
          
          if (result && result.success) {
            console.log('✅ Signup successful!');
            
            // Check if email verification is needed
            if (result.needsVerification) {
              console.log('📧 Email verification required, showing verification screen');
              
              // Reset submit button
              if (submitText) {
                submitText.textContent = 'Create Account';
              }
              
              // Show verification screen
              showVerificationScreen(email);
              return;
            }
            
            // Account created successfully with immediate access
            console.log('🎉 Account created with immediate access');
            
            // Show success message briefly
            if (submitText) {
              submitText.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
                  ✅ Account Created! Logging you in...
                </div>
              `;
              console.log('🎉 Success message displayed');
            }
            
            // Store user data for React components to detect
            if (result.user) {
              localStorage.setItem('supabase_user', JSON.stringify(result.user));
              console.log('💾 User data stored in localStorage');
              
              // Set session data to keep user logged in
              if (result.data.session) {
                localStorage.setItem('supabase_session', JSON.stringify(result.data.session));
                console.log('🔐 Session data stored');
              }
              
              // Trigger storage event for React components
              window.dispatchEvent(new StorageEvent('storage', {
                key: 'supabase_user',
                newValue: JSON.stringify(result.user)
              }));
              console.log('📡 Storage event dispatched');
              
              // Trigger auth state change event
              window.dispatchEvent(new CustomEvent('authStateChanged', {
                detail: { 
                  event: 'SIGNED_IN', 
                  session: result.data.session, 
                  user: result.user 
                }
              }));
              console.log('🔄 Auth state change event dispatched');
            }
            
            // Redirect to home page (logged in) instead of login page
            console.log('🔄 Redirecting to home page in 2 seconds...');
            setTimeout(() => {
              console.log('➡️ Redirecting to / (home)');
              window.location.href = '/';
            }, 2000);
            
          } else {
            console.error('❌ Signup failed');
            console.error('❌ Error details:', result?.error || 'Unknown error');
            
            if (submitText) {
              submitText.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
                  ❌ ${result?.error || 'Signup failed'}
                </div>
              `;
              console.log('⚠️ Error message displayed');
            }
            
            // Reset button after 3 seconds
            setTimeout(() => {
              if (submitText) {
                submitText.textContent = 'Create Account';
                console.log('🔄 Button reset to normal state');
              }
              const submitButton = document.querySelector('.auth-submit');
              if (submitButton) {
                submitButton.disabled = false;
                console.log('🔄 Button re-enabled');
              }
            }, 3000);
          }
        } catch (error) {
          console.error('💥 Signup process error:');
          console.error('💥 Full error object:', error);
          console.error('💥 Error type:', error?.name || 'Unknown');
          console.error('💥 Error message:', error?.message || 'Unknown error');
          console.error('💥 Error stack:', error?.stack || 'No stack trace');
          
          if (submitText) {
            submitText.textContent = 'Create Account';
            console.log('🔄 Button reset after error');
          }
          
          const errorMessage = error?.message || 'Unknown error occurred';
          alert('Failed to create account. Error: ' + errorMessage);
        }
      });
    } else {
      console.error('❌ Signup form not found');
    }
    
    console.log('✅ Signup interactions initialized');
  }

  // Show verification screen
  function showVerificationScreen(email) {
    console.log('📧 Showing verification screen for:', email);
    
    // Hide main signup form
    const signupForm = document.getElementById('signupForm')?.closest('.auth-form-container');
    const toggleSection = document.querySelector('.auth-toggle');
    const skipSection = document.querySelector('.auth-skip');
    
    if (signupForm) signupForm.style.display = 'none';
    if (toggleSection) toggleSection.style.display = 'none';
    if (skipSection) skipSection.style.display = 'none';
    
    // Show verification container
    const verificationContainer = document.getElementById('verificationContainer');
    const verificationEmail = document.getElementById('verificationEmail');
    
    if (verificationContainer) {
      verificationContainer.classList.add('show');
    }
    if (verificationEmail) {
      verificationEmail.textContent = email;
    }
    
    // Initialize verification code inputs
    initializeVerificationInputs(email);
  }

  // Initialize verification code inputs with auto-focus and validation
  function initializeVerificationInputs(email) {
    const inputs = document.querySelectorAll('.verification-digit');
    const verifyButton = document.getElementById('verifyButton');
    const resendButton = document.getElementById('resendButton');
    const backButton = document.getElementById('backToSignupButton');
    
    let resendCooldown = 0;
    
    // Auto-focus and validation
    inputs.forEach((input, index) => {
      input.addEventListener('input', function(e) {
        // Only allow digits
        const value = e.target.value.replace(/[^0-9]/g, '');
        e.target.value = value;
        
        // Auto-focus next input
        if (value && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
        
        // Check if all fields are filled
        const allFilled = Array.from(inputs).every(inp => inp.value.length === 1);
        if (verifyButton) {
          verifyButton.disabled = !allFilled;
        }
        
        // Auto-submit when all 6 digits are entered
        if (allFilled) {
          const code = Array.from(inputs).map(inp => inp.value).join('');
          console.log('🔢 Auto-submitting verification code:', code);
          setTimeout(() => verifyCode(email, code), 100);
        }
      });
      
      // Handle backspace
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
          inputs[index - 1].focus();
        }
      });
      
      // Handle paste
      input.addEventListener('paste', function(e) {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 6);
        if (pastedData.length === 6) {
          pastedData.split('').forEach((digit, i) => {
            if (inputs[i]) inputs[i].value = digit;
          });
          if (verifyButton) verifyButton.disabled = false;
          verifyCode(email, pastedData);
        }
      });
    });
    
    // Verify button click
    if (verifyButton) {
      verifyButton.addEventListener('click', function() {
        const code = Array.from(inputs).map(inp => inp.value).join('');
        if (code.length === 6) {
          verifyCode(email, code);
        }
      });
    }
    
    // Resend button click
    if (resendButton) {
      resendButton.addEventListener('click', function() {
        if (resendCooldown > 0) return;
        resendVerificationCode(email);
      });
    }
    
    // Back button click
    if (backButton) {
      backButton.addEventListener('click', function() {
        hideVerificationScreen();
      });
    }
    
    // Focus first input
    if (inputs[0]) inputs[0].focus();
    
    // Resend cooldown timer
    function startResendCooldown() {
      resendCooldown = 60;
      const resendText = document.getElementById('resendButtonText');
      
      const updateCooldown = () => {
        if (resendText) {
          resendText.textContent = `Resend in ${resendCooldown}s`;
        }
        if (resendButton) {
          resendButton.disabled = true;
        }
        
        resendCooldown--;
        if (resendCooldown >= 0) {
          setTimeout(updateCooldown, 1000);
        } else {
          if (resendText) resendText.textContent = 'Resend Code';
          if (resendButton) resendButton.disabled = false;
        }
      };
      updateCooldown();
    }
    
    // Start initial cooldown
    startResendCooldown();
  }

  // Verify the entered code
  async function verifyCode(email, code) {
    console.log('🔐 Verifying code for:', email);
    
    const verifyButton = document.getElementById('verifyButton');
    const verifyButtonText = document.getElementById('verifyButtonText');
    const inputs = document.querySelectorAll('.verification-digit');
    
    // Show loading state
    if (verifyButtonText) {
      verifyButtonText.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <div class="loading-spinner"></div>
          Verifying...
        </div>
      `;
    }
    
    // Disable inputs
    inputs.forEach(input => input.disabled = true);
    if (verifyButton) verifyButton.disabled = true;
    
    try {
      const result = await window.steleyAuth.verifyEmailOTP(email, code);
      
             if (result.success) {
         console.log('✅ Email verification successful!');
         
         // Show success
         if (verifyButtonText) {
           verifyButtonText.innerHTML = `
             <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
               ✅ Email Verified! Logging you in...
             </div>
           `;
         }
         
         // Store user data and session
         if (result.user) {
           localStorage.setItem('supabase_user', JSON.stringify(result.user));
           console.log('💾 User data stored after verification');
           
           if (result.data.session) {
             localStorage.setItem('supabase_session', JSON.stringify(result.data.session));
             console.log('🔐 Session data stored after verification');
             
             // Update auth client with new session
             if (window.steleyAuth && window.steleyAuth.supabase) {
               console.log('🔄 Updating auth client session...');
               window.steleyAuth.supabase.auth.setSession(result.data.session);
               window.steleyAuth.currentUser = result.user;
               console.log('✅ Auth client updated with verified user session');
             }
           }
           
           // Set auth tokens in localStorage for persistence across page loads
           if (result.data.session) {
             const tokenData = {
               access_token: result.data.session.access_token,
               refresh_token: result.data.session.refresh_token,
               expires_at: result.data.session.expires_at,
               user: result.user
             };
             localStorage.setItem('supabase.auth.token', JSON.stringify(tokenData));
             console.log('🔑 Auth tokens stored for persistence');
           }
           
           // Trigger auth events
           window.dispatchEvent(new StorageEvent('storage', {
             key: 'supabase_user',
             newValue: JSON.stringify(result.user)
           }));
           
           window.dispatchEvent(new CustomEvent('authStateChanged', {
             detail: { 
               event: 'SIGNED_IN', 
               session: result.data.session, 
               user: result.user 
             }
           }));
           
           // Trigger a more specific login success event
           window.dispatchEvent(new CustomEvent('userLoggedIn', {
             detail: { 
               user: result.user,
               session: result.data.session,
               method: 'email_verification'
             }
           }));
           console.log('📡 All auth events dispatched');
         }
         
         // Show logged in message
         setTimeout(() => {
           if (verifyButtonText) {
             verifyButtonText.innerHTML = `
               <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
                 🎉 Welcome! Redirecting...
               </div>
             `;
           }
         }, 1000);
         
         // Redirect to home with longer delay to ensure auth state is set
         setTimeout(() => {
           console.log('➡️ Redirecting to home after verification (user should be logged in)');
           window.location.href = '/';
         }, 3000);
        
      } else {
        console.error('❌ Email verification failed:', result.error);
        
        // Show error
        if (verifyButtonText) {
          verifyButtonText.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              ❌ ${result.error || 'Invalid code'}
            </div>
          `;
        }
        
                 // Reset after 3 seconds
         setTimeout(() => {
           if (verifyButtonText) verifyButtonText.textContent = 'Verify Email';
           inputs.forEach((input) => {
             input.disabled = false;
             input.value = '';
           });
           if (inputs[0]) inputs[0].focus();
           if (verifyButton) verifyButton.disabled = true;
         }, 3000);
      }
    } catch (error) {
      console.error('💥 Verification error:', error);
      
      // Show error
      if (verifyButtonText) {
        verifyButtonText.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
            ❌ Verification failed
          </div>
        `;
      }
      
      // Reset after 3 seconds
      setTimeout(() => {
        if (verifyButtonText) verifyButtonText.textContent = 'Verify Email';
        inputs.forEach(input => {
          input.disabled = false;
          input.value = '';
        });
        if (inputs[0]) inputs[0].focus();
        if (verifyButton) verifyButton.disabled = true;
      }, 3000);
    }
  }

  // Resend verification code
  async function resendVerificationCode(email) {
    console.log('📧 Resending verification code to:', email);
    
    const resendButtonText = document.getElementById('resendButtonText');
    
    if (resendButtonText) {
      resendButtonText.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <div class="loading-spinner"></div>
          Sending...
        </div>
      `;
    }
    
    try {
      const result = await window.steleyAuth.resendVerificationCode(email);
      
      if (result.success) {
        console.log('✅ Verification code resent successfully');
        if (resendButtonText) {
          resendButtonText.textContent = 'Code sent!';
          setTimeout(() => {
            resendButtonText.textContent = 'Resend in 60s';
          }, 2000);
        }
      } else {
        console.error('❌ Failed to resend code:', result.error);
        if (resendButtonText) {
          resendButtonText.textContent = 'Failed to send';
          setTimeout(() => {
            resendButtonText.textContent = 'Resend Code';
          }, 3000);
        }
      }
    } catch (error) {
      console.error('💥 Resend error:', error);
      if (resendButtonText) {
        resendButtonText.textContent = 'Failed to send';
        setTimeout(() => {
          resendButtonText.textContent = 'Resend Code';
        }, 3000);
      }
    }
  }

  // Hide verification screen and show signup form
  function hideVerificationScreen() {
    console.log('🔙 Hiding verification screen');
    
    // Show main signup form
    const signupForm = document.getElementById('signupForm')?.closest('.auth-form-container');
    const toggleSection = document.querySelector('.auth-toggle');
    const skipSection = document.querySelector('.auth-skip');
    
    if (signupForm) signupForm.style.display = 'block';
    if (toggleSection) toggleSection.style.display = 'block';
    if (skipSection) skipSection.style.display = 'block';
    
    // Hide verification container
    const verificationContainer = document.getElementById('verificationContainer');
    if (verificationContainer) {
      verificationContainer.classList.remove('show');
    }
    
    // Clear verification inputs
    const inputs = document.querySelectorAll('.verification-digit');
    inputs.forEach(input => {
      input.value = '';
      input.disabled = false;
    });
  }

  // Clean up - removed profile dropdown functionality to prevent duplicates
})(); 
