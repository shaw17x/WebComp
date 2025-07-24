// Steley Login Page Combined - CSS + HTML Content (Component Only)
const loginCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Login Component Container */
.auth-login-component{max-width:32rem;width:100%;margin:80px auto;padding:20px;position:relative;z-index:999}

/* Floating Card - Optimized for Smooth Performance */
.auth-screen-card{max-width:32rem;width:100%;position:relative;z-index:10;background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.05);border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.4);opacity:0;transform:translate3d(0,30px,0) scale(0.95);will-change:transform,opacity;backface-visibility:hidden;perspective:1000px}
.auth-screen-card.animate-in{animation:smoothEntry 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards}
.auth-screen-card.floating{animation:cardFloat 6s ease-in-out infinite}

/* Header Section */
.auth-header{padding:1.5rem 1.5rem 1rem;text-align:center}
.auth-title{font-size:2rem;font-weight:bold;margin-bottom:0.5rem;background:linear-gradient(to right,white,rgb(229,231,235),rgb(156,163,175));background-clip:text;-webkit-background-clip:text;color:transparent}
.auth-subtitle{font-size:1rem;font-weight:500;color:rgba(255,255,255,0.8);margin-bottom:0.5rem}
.auth-description{font-size:0.75rem;line-height:1.5;color:rgba(255,255,255,0.5)}

/* Form Container - Optimized Performance */
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

/* Remember Me Section - Optimized Performance */
.remember-section{padding:0 1.5rem 1rem}
.remember-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:0.5rem;padding:1rem;transition:all 0.15s;will-change:auto}
.remember-card:hover{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)}
.remember-checkbox-container{display:flex;align-items:center;gap:0.75rem;cursor:pointer}
.remember-checkbox{width:1rem;height:1rem;border-radius:0.25rem;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.2);transition:all 0.2s;display:flex;align-items:center;justify-content:center}
.remember-checkbox.checked{background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.2)}
.remember-text{font-size:0.75rem;font-weight:500;color:rgba(255,255,255,0.8)}
.remember-subtext{font-size:0.625rem;color:rgba(255,255,255,0.5)}

/* Forgot Password */
.forgot-password{font-size:0.75rem;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.2s}
.forgot-password:hover{color:rgba(255,255,255,0.8)}

/* Submit Button - Optimized Performance */
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

/* Optimized Animations for Smooth Performance */
@keyframes smoothEntry{
  0%{opacity:0;transform:translate3d(0,30px,0) scale(0.95)}
  100%{opacity:1;transform:translate3d(0,0,0) scale(1)}
}
@keyframes cardFloat{
  0%,100%{transform:translate3d(0,0,0) rotate(0deg)}
  50%{transform:translate3d(0,-10px,0) rotate(0.5deg)}
}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes containerEntry{from{opacity:0;transform:translate3d(0,30px,0) scale(0.95)}to{opacity:1;transform:translate3d(0,0,0) scale(1)}}
@keyframes fadeInUp{from{opacity:0;transform:translate3d(0,20px,0)}to{opacity:1;transform:translate3d(0,0,0)}}

/* Responsive */
@media(max-width:768px){.auth-login-component{padding:15px;margin:60px auto}.auth-screen-card{max-width:28rem}.auth-footer-row{flex-direction:column!important;text-align:center!important;gap:20px!important}.auth-footer-nav{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:16px!important}.auth-footer-right{flex-direction:column!important;gap:20px!important}.auth-footer-separator{display:none!important}}
`;

const loginHTML = `
<div class="auth-login-component">
  <div class="auth-screen-card">
    <!-- Header Section -->
    <div class="auth-header">
      <h1 class="auth-title">
        <div style="display: inline-flex; align-items: center; gap: 4px;">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; font-weight: bold; font-size: 24px; border-radius: 8px; margin-right: 4px;">S</span>
          <span>teley</span>
        </div>
      </h1>
      <h2 class="auth-subtitle">Welcome Back</h2>
      <p class="auth-description">Sign in to access your personalized experience</p>
    </div>

    <!-- Authentication Form -->
    <div class="auth-form-container">
      <div class="auth-form-card">
        <form class="auth-form" id="loginForm">
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
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
              <label for="password" class="auth-label" style="margin-bottom:0;">Password</label>
              <a href="#" class="forgot-password">Forgot Password?</a>
            </div>
            <input
              id="password"
              type="password"
              class="auth-input"
              placeholder="••••••••"
              required
            />
          </div>

          <!-- Submit Button -->
          <button type="submit" class="auth-submit">
            <span id="submitText">Sign In</span>
          </button>
        </form>
      </div>
    </div>

    <!-- Remember Me -->
    <div class="remember-section">
      <div class="remember-card">
        <label class="remember-checkbox-container">
          <div class="remember-checkbox" id="rememberCheckbox">
            <svg style="width:10px;height:10px;color:white;display:none;" id="checkIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <span class="remember-text">Remember me for 7 days</span>
            <p class="remember-subtext">Stay signed in on this device</p>
          </div>
        </label>
      </div>
    </div>

    <!-- Toggle Auth Mode -->
    <div class="auth-toggle">
      <button type="button" class="auth-toggle-button" onclick="window.location.href='/sign-up'">
        Don't have an account? Create one
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

// Auto-execute function with robust initialization (matching docs page pattern for smooth loading)
(function() {
  // Check if we should load login (pathname OR hash) - CRITICAL PAGE DETECTION
  const isLoginPage = location.pathname.includes('login') || 
                      location.pathname.includes('sign-in') || 
                      location.hash.includes('login') ||
                      location.hash.includes('sign-in') ||
                      location.pathname === '/auth' ||
                      location.hash === '#login';
  
  console.log('🚀 Steley Login Script: Starting execution...');
  console.log('📍 Current URL:', location.href);
  console.log('📍 Pathname:', location.pathname);
  console.log('📍 Hash:', location.hash);
  console.log('📍 Is login page?', isLoginPage);
  
  // Only load if this is actually a login page - PREVENTS CONFLICTS
  if (!isLoginPage) {
    console.log('❌ Not a login page, skipping login script...');
    return;
  }
  
  // Prevent multiple executions - this fixes the appearing/disappearing issue
  if (window.steleyLoginInitialized) {
    console.log('⚠️ Steley Login Script: Already initialized, skipping...');
    return;
  }
  window.steleyLoginInitialized = true;
  console.log('✅ Steley Login Script: First execution, proceeding...');
  
  // Add CSS immediately
  console.log('🎨 Steley Login Script: Adding CSS styles...');
  const style = document.createElement('style');
  style.textContent = loginCSS;
  document.head.appendChild(style);
  console.log('✅ Steley Login Script: CSS added successfully');
  
  // Initialize when DOM is ready - matching docs page logic
  console.log('📋 Steley Login Script: DOM ready state is:', document.readyState);
  if (document.readyState === 'loading') {
    console.log('⏳ Steley Login Script: Waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', function() {
      console.log('✅ Steley Login Script: DOMContentLoaded fired, initializing...');
      initializeLoginPage();
    });
  } else {
    console.log('✅ Steley Login Script: DOM already ready, initializing immediately...');
    initializeLoginPage();
  }
  
  function initializeLoginPage() {
    console.log('🔄 Steley Login: initializeLoginPage() called');
    
    // Check if login content already exists - prevent duplication
    const existingLogin = document.querySelector('.auth-login-component');
    if (existingLogin) {
      console.log('⚠️ Steley Login: Login component already exists, skipping initialization');
      console.log('   Existing component:', existingLogin);
      return;
    }
    console.log('✅ Steley Login: No existing login component found, proceeding...');
    
    // Try to find main content area, otherwise use body - matching docs page
    console.log('🎯 Steley Login: Looking for main content area...');
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    console.log('📍 Steley Login: Selected target container:', mainContent.tagName, mainContent.className || '(no class)');
    
    // CLEAR AND INSERT - match signup script's successful approach  
    if (mainContent !== document.body) {
      console.log('📝 Steley Login: Clearing and inserting into main content area...');
      // Clear existing content and add login page (like signup script)
      mainContent.innerHTML = loginHTML;
    } else {
      console.log('📝 Steley Login: Inserting into body (fallback)...');
      // If we're using body, insert at the beginning but after header
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        console.log('   Found header/nav, inserting after it');
        header.insertAdjacentHTML('afterend', loginHTML);
      } else {
        console.log('   No header found, inserting at body beginning');
        document.body.insertAdjacentHTML('afterbegin', loginHTML);
      }
    }
    
    // Verify the login component was added successfully
    const loginComponent = document.querySelector('.auth-login-component');
    if (!loginComponent) {
      console.error('❌ Steley Login: FAILED to add login component to page!');
      console.error('   Target container:', mainContent);
      console.error('   HTML length:', loginHTML.length);
      return;
    }
    console.log('✅ Steley Login: Login component added successfully!');
    console.log('   Component element:', loginComponent);
    
    // 🖼️ LOGO IMAGE DEBUGGING - Check if logo is causing issues
    const logoImage = loginComponent.querySelector('img[alt="Steley Logo"]');
    if (logoImage) {
      console.log('🖼️ Logo image found:', logoImage.src);
      console.log('🖼️ Logo natural dimensions:', logoImage.naturalWidth, 'x', logoImage.naturalHeight);
      console.log('🖼️ Logo complete:', logoImage.complete);
      
      // Add error handler to catch logo loading issues
      logoImage.addEventListener('error', function(e) {
        console.error('🚨 LOGO IMAGE ERROR - This might be causing the disappearing login box!');
        console.error('   Image src:', logoImage.src);
        console.error('   Error event:', e);
        
        // Replace broken logo with text fallback
        const textFallback = document.createElement('span');
        textFallback.textContent = 'S';
        textFallback.style.cssText = `
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          font-weight: bold;
          font-size: 24px;
          border-radius: 8px;
          margin-right: 4px;
        `;
        logoImage.parentNode.replaceChild(textFallback, logoImage);
        console.log('✅ Replaced broken logo with text fallback');
      });
      
      logoImage.addEventListener('load', function() {
        console.log('✅ Logo image loaded successfully');
      });
      
      // Force check if already loaded
      if (logoImage.complete && logoImage.naturalWidth === 0) {
        console.error('🚨 Logo image failed to load (0 dimensions)');
        logoImage.dispatchEvent(new Event('error'));
      }
    } else {
      console.log('ℹ️ No logo image found');
    }
    
    // 🕵️ ADD WATCHER TO DETECT WHEN ELEMENT GETS REMOVED
    setupRemovalDetector(loginComponent);
    
    // 🔍 IMMEDIATE STATUS CHECK - Debug current state
    setTimeout(() => {
      console.log('🔍 IMMEDIATE STATUS CHECK (5 seconds):');
      const currentLogin = document.querySelector('.auth-login-component');
      if (currentLogin) {
        const style = window.getComputedStyle(currentLogin);
        console.log('   ✅ Login component still exists');
        console.log('   📏 Dimensions:', `${currentLogin.offsetWidth}x${currentLogin.offsetHeight}`);
        console.log('   🎨 Display:', style.display);
        console.log('   👁️ Visibility:', style.visibility);
        console.log('   🌟 Opacity:', style.opacity);
        console.log('   📍 Position:', style.position);
        console.log('   🔢 Z-index:', style.zIndex);
        console.log('   🧭 Parent:', currentLogin.parentElement?.tagName, currentLogin.parentElement?.className);
        
        // Check if it's actually visible on screen
        const rect = currentLogin.getBoundingClientRect();
        console.log('   📐 Screen position:', `top: ${rect.top}, left: ${rect.left}, width: ${rect.width}, height: ${rect.height}`);
        console.log('   🖥️ In viewport:', rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);
        
        // 🚨 POSITIONING CONFLICT DETECTION
        console.log('🚨 POSITIONING CONFLICT ANALYSIS:');
        
        // Check what elements might be covering it
        const elementsAtPosition = document.elementsFromPoint(rect.left + rect.width/2, rect.top + rect.height/2);
        console.log('   🎯 Elements at login box center:', elementsAtPosition.slice(0, 5).map(el => `${el.tagName}.${el.className}`));
        
        // Check if login box is the topmost element
        const isTopMost = elementsAtPosition[0] === currentLogin || elementsAtPosition[0].closest('.auth-login-component');
        console.log('   👑 Login box is topmost element:', isTopMost);
        
        // Check for overlapping content
        const allFixedElements = Array.from(document.querySelectorAll('*')).filter(el => {
          const elStyle = window.getComputedStyle(el);
          return elStyle.position === 'fixed' || elStyle.position === 'absolute';
        });
        console.log('   🔒 Fixed/Absolute positioned elements:', allFixedElements.length);
        
        // Check main page content that might be covering
        const mainPageContent = document.querySelector('main, .main-content, [data-framer-name="Content"], .framer-page-content');
        if (mainPageContent && mainPageContent !== currentLogin.parentElement) {
          const mainRect = mainPageContent.getBoundingClientRect();
          const mainStyle = window.getComputedStyle(mainPageContent);
          console.log('   📄 Main content position:', `top: ${mainRect.top}, left: ${mainRect.left}, z-index: ${mainStyle.zIndex}`);
          console.log('   📄 Main content overlaps login:', 
            !(rect.right < mainRect.left || rect.left > mainRect.right || rect.bottom < mainRect.top || rect.top > mainRect.bottom));
        }
        
        try {
          // 🔧 PARENT CONTAINER ANALYSIS
          console.log('🔧 PARENT CONTAINER ANALYSIS:');
          let parent = currentLogin.parentElement;
          let level = 0;
          while (parent && level < 5) {
            const parentStyle = window.getComputedStyle(parent);
            console.log(`   📦 Level ${level}: ${parent.tagName}.${parent.className}`);
            console.log(`      Display: ${parentStyle.display}, Visibility: ${parentStyle.visibility}, Opacity: ${parentStyle.opacity}`);
            
            // Check if parent is being hidden
            if (parentStyle.display === 'none' || parentStyle.visibility === 'hidden' || parentStyle.opacity === '0') {
              console.error(`🚨 PARENT LEVEL ${level} IS HIDDEN!`);
              console.log('🔧 Attempting to fix parent visibility...');
              parent.style.display = 'block !important';
              parent.style.visibility = 'visible !important';
              parent.style.opacity = '1 !important';
            }
            
            parent = parent.parentElement;
            level++;
          }
        } catch (parentError) {
          console.error('❌ Error in parent container analysis:', parentError);
        }
        
        try {
          // 🔧 AUTO-FIX ATTEMPT - MOVE TO BODY TO ESCAPE FRAMER CONTROL
          console.log('🔧 ATTEMPTING AUTO-FIX - MOVING TO BODY...');
          
          // Clone the login component
          const clonedLogin = currentLogin.cloneNode(true);
          
          // Remove any problematic images from clone
          const clonedImages = clonedLogin.querySelectorAll('img');
          clonedImages.forEach(img => {
            console.log('🖼️ Removing image from emergency clone:', img.src);
            const textFallback = document.createElement('span');
            textFallback.textContent = 'S';
            textFallback.style.cssText = `
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #3b82f6, #1d4ed8);
              color: white;
              font-weight: bold;
              font-size: 24px;
              border-radius: 8px;
              margin-right: 4px;
            `;
            img.parentNode.replaceChild(textFallback, img);
          });
          
          // Apply emergency positioning to clone
          clonedLogin.style.position = 'fixed !important';
          clonedLogin.style.top = '80px !important';
          clonedLogin.style.left = '50% !important';
          clonedLogin.style.transform = 'translateX(-50%) !important';
          clonedLogin.style.zIndex = '999999 !important';
          clonedLogin.style.background = 'rgba(0,0,0,0.95) !important';
          clonedLogin.style.border = '2px solid #00ff00 !important';
          clonedLogin.style.boxShadow = '0 0 20px rgba(0,255,0,0.5) !important';
          clonedLogin.id = 'emergency-login-fix';
          
          // Add directly to body (escape Framer control)
          document.body.appendChild(clonedLogin);
          
          console.log('   ✅ Emergency login box added to body');
          console.log('   🟢 Look for GREEN BORDER login box at top of page');
          
          // Re-initialize interactions for the emergency login box
          setTimeout(() => {
            console.log('🔄 Re-initializing emergency login interactions...');
            try {
              initializeEmergencyLoginInteractions(clonedLogin);
            } catch (interactionError) {
              console.error('❌ Error in emergency interactions:', interactionError);
            }
          }, 100);
          
        } catch (emergencyError) {
          console.error('❌ Error in emergency fix:', emergencyError);
          
          // Last resort - simple visible login box
          console.log('🆘 LAST RESORT - Creating simple emergency login...');
          const simpleLogin = document.createElement('div');
          simpleLogin.innerHTML = `
            <div style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); 
                        z-index: 999999; background: black; border: 3px solid red; 
                        padding: 20px; color: white; text-align: center;">
              <h2>🆘 EMERGENCY LOGIN</h2>
              <p>Original login box failed to display</p>
              <input type="email" placeholder="Email" style="margin: 5px; padding: 10px; width: 200px;">
              <br>
              <input type="password" placeholder="Password" style="margin: 5px; padding: 10px; width: 200px;">
              <br>
              <button onclick="alert('Emergency login clicked')" style="margin: 10px; padding: 10px 20px; background: red; color: white; border: none;">
                Emergency Login
              </button>
            </div>
          `;
          document.body.appendChild(simpleLogin);
          console.log('🆘 Last resort emergency login added');
        }
        
      } else {
        console.error('   ❌ Login component MISSING after 5 seconds!');
      }
    }, 5000);
    
    // Initialize login animations with proper timing (matching docs page pattern)
    console.log('🎬 Steley Login: Starting animations...');
    initializeLoginAnimations();
    
    // Initialize login interactions with staggered timing
    console.log('🖱️ Steley Login: Starting interactions...');
    initializeLoginInteractions();
  }
  
  function initializeLoginAnimations() {
    console.log('🎬 Steley Login: initializeLoginAnimations() called');
    
    // Use optimized class-based animations for smooth performance
    setTimeout(() => {
      console.log('🎭 Steley Login: Animation timeout fired, looking for elements...');
      const loginCard = document.querySelector('.auth-screen-card');
      const footer = document.querySelector('.auth-footer');
      
      console.log('   Login card found:', !!loginCard);
      console.log('   Footer found:', !!footer);
      
      // Trigger smooth entry animation for login card
      if (loginCard) {
        console.log('✨ Steley Login: Starting login card entry animation...');
        // Add hardware acceleration and start animation
        loginCard.style.willChange = 'transform, opacity';
        loginCard.classList.add('animate-in');
        console.log('   Added animate-in class to login card');
        
        // Add floating animation and effects after entry completes
        setTimeout(() => {
          console.log('🌊 Steley Login: Adding floating animation...');
          // Double-check element still exists before animating
          const stillExists = document.querySelector('.auth-screen-card');
          if (stillExists) {
            loginCard.classList.add('floating');
            loginCard.style.backdropFilter = 'blur(20px)'; // Add blur after animation
            loginCard.style.willChange = 'auto'; // Remove will-change after animation
            console.log('   Floating animation and blur effects added');
          } else {
            console.error('❌ Steley Login: Login card disappeared before floating animation!');
          }
        }, 800);
      } else {
        console.error('❌ Steley Login: Login card not found for animation!');
      }
      
      // Animate footer with class-based approach
      if (footer) {
        console.log('📋 Steley Login: Starting footer animation...');
        setTimeout(() => {
          // Double-check element still exists before animating
          const footerStillExists = document.querySelector('.auth-footer');
          if (footerStillExists) {
            footer.style.opacity = '1';
            footer.style.transform = 'scale(1) translateY(0px)';
            footer.style.willChange = 'auto';
            console.log('   Footer animation applied');
          } else {
            console.error('❌ Steley Login: Footer disappeared before animation!');
          }
        }, 300);
      } else {
        console.error('❌ Steley Login: Footer not found for animation!');
      }
    }, 50); // Reduced delay for instant start
  }
  
  function initializeLoginInteractions() {
    console.log('🖱️ Steley Login: initializeLoginInteractions() called');
    
    // Wait a bit for DOM to be fully ready - matching docs page timing
    setTimeout(() => {
      console.log('⏰ Steley Login: Interaction timeout fired, setting up elements...');
      
      // Remember me checkbox
      const checkbox = document.getElementById('rememberCheckbox');
      const checkIcon = document.getElementById('checkIcon');
      let isChecked = false;
      
      console.log('☑️ Steley Login: Remember checkbox found:', !!checkbox);
      console.log('🔲 Steley Login: Check icon found:', !!checkIcon);
      
      if (checkbox) {
        checkbox.addEventListener('click', function() {
          isChecked = !isChecked;
          console.log('☑️ Steley Login: Checkbox clicked, new state:', isChecked);
          if (isChecked) {
            checkbox.classList.add('checked');
            checkIcon.style.display = 'block';
          } else {
            checkbox.classList.remove('checked');
            checkIcon.style.display = 'none';
          }
        });
        console.log('☑️ Steley Login: Checkbox event listener added');
      } else {
        console.error('❌ Steley Login: Remember checkbox not found!');
      }
      
      // Form submission with delay to ensure smooth animation
      setTimeout(() => {
        console.log('📝 Steley Login: Initializing login form...');
        initializeLoginForm();
        console.log('🎨 Steley Login: Adding subtle effects...');
        // Add subtle backdrop effects after animation completes
        addSubtleEffects();
      }, 200);
    }, 150);
  }
  
  function initializeLoginForm() {
    console.log('📝 Steley Login: initializeLoginForm() called');
    
    const form = document.getElementById('loginForm');
    const submitText = document.getElementById('submitText');
    
    console.log('🔍 Steley Login: Form found:', !!form);
    console.log('🔍 Steley Login: Submit text element found:', !!submitText);
    
    if (!form) {
      console.error('❌ Steley Login: Login form not found!');
      return;
    }
    
    form.addEventListener('submit', async function(e) {
      console.log('📤 Steley Login: Form submitted');
      e.preventDefault();
      
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      
      if (!emailInput || !passwordInput) return;
      
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      
      if (!email || !password) {
        showMessage('Please enter both email and password', 'error');
        return;
      }
      
      // Show loading state with smooth transition
      if (submitText) {
        submitText.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
            <div class="loading-spinner"></div>
            Signing In...
          </div>
        `;
      }
      
      try {
        console.log('🔐 Steley Login: Attempting authentication...');
        // Simulate authentication (replace with real auth when ready)
        await simulateAuth(email, password);
        
        console.log('✅ Steley Login: Authentication successful');
        // Show success with smooth transition
        if (submitText) {
          submitText.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              ✅ Welcome back!
            </div>
          `;
        }
        
        // Store demo session
        const sessionData = {
          email: email,
          loginTime: new Date().toISOString(),
          demo: true
        };
        localStorage.setItem('steley_session', JSON.stringify(sessionData));
        console.log('💾 Steley Login: Session stored:', sessionData);
        
        // Redirect after brief delay
        console.log('🔄 Steley Login: Redirecting in 1.5 seconds...');
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
        
      } catch (error) {
        console.error('❌ Steley Login: Authentication failed:', error.message);
        // Show error with smooth transition
        if (submitText) {
          submitText.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              ❌ ${error.message}
            </div>
          `;
        }
        
        // Reset button after delay
        console.log('🔄 Steley Login: Resetting button in 3 seconds...');
        setTimeout(() => {
          if (submitText) {
            submitText.textContent = 'Sign In';
            console.log('🔄 Steley Login: Button reset to default state');
          }
        }, 3000);
      }
    });
  }
  
  async function simulateAuth(email, password) {
    console.log('🔐 Steley Login: simulateAuth() called with email:', email);
    console.log('🔐 Steley Login: Password length:', password.length);
    
    // Simulate network delay
    console.log('⏳ Steley Login: Simulating network delay (1 second)...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple validation for demo
    const hasValidEmail = email.includes('@');
    const hasValidPassword = password.length >= 6;
    
    console.log('📧 Steley Login: Email validation (contains @):', hasValidEmail);
    console.log('🔑 Steley Login: Password validation (>= 6 chars):', hasValidPassword);
    
    if (hasValidEmail && hasValidPassword) {
      const result = { success: true, user: { email } };
      console.log('✅ Steley Login: Authentication simulation successful:', result);
      return result;
    } else {
      const errorMsg = 'Invalid email or password';
      console.log('❌ Steley Login: Authentication simulation failed:', errorMsg);
      throw new Error(errorMsg);
    }
  }
  
  function addSubtleEffects() {
    console.log('🎨 Steley Login: addSubtleEffects() called');
    
    // Add backdrop blur effects after main animation completes for better performance
    setTimeout(() => {
      console.log('✨ Steley Login: Applying subtle backdrop effects...');
      
      const formCard = document.querySelector('.auth-form-card');
      const rememberCard = document.querySelector('.remember-card');
      const submitButton = document.querySelector('.auth-submit');
      
      console.log('   Form card found:', !!formCard);
      console.log('   Remember card found:', !!rememberCard);
      console.log('   Submit button found:', !!submitButton);
      
      if (formCard) {
        formCard.style.backdropFilter = 'blur(10px)';
        console.log('   Applied blur to form card');
      }
      if (rememberCard) {
        rememberCard.style.backdropFilter = 'blur(10px)';
        console.log('   Applied blur to remember card');
      }
      if (submitButton) {
        submitButton.style.backdropFilter = 'blur(10px)';
        console.log('   Applied blur to submit button');
      }
      
      console.log('✅ Steley Login: All subtle effects applied successfully');
    }, 600); // Add effects after login card animation
  }
  
  function showMessage(message, type = 'info') {
    console.log('💬 Steley Login: showMessage() called with:', { message, type });
    
    // Simple message display
    const submitText = document.getElementById('submitText');
    console.log('🔍 Steley Login: Submit text element found:', !!submitText);
    
    if (submitText) {
      const icon = type === 'error' ? '❌' : 'ℹ️';
      const messageHTML = `
        <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          ${icon} ${message}
        </div>
      `;
      submitText.innerHTML = messageHTML;
      console.log('💬 Steley Login: Message displayed:', message);
      
      setTimeout(() => {
        if (submitText) {
          submitText.textContent = 'Sign In';
          console.log('💬 Steley Login: Message cleared, button reset');
        }
      }, 3000);
    } else {
      console.error('❌ Steley Login: Could not display message - submit text element not found');
    }
  }
  
  // 🕵️ DETECTIVE FUNCTION - Catch what's removing our login box!
  function setupRemovalDetector(loginComponent) {
    console.log('🕵️ Steley Login: Setting up removal detector...');
    
    // Method 1: MutationObserver to watch for removal
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          // Check if our login component was removed
          mutation.removedNodes.forEach(function(removedNode) {
            if (removedNode === loginComponent || 
                (removedNode.contains && removedNode.contains(loginComponent))) {
              console.error('🚨 CAUGHT THE CULPRIT! Login component was REMOVED!');
              console.error('   Removed by:', mutation);
              console.error('   Target that removed it:', mutation.target);
              console.error('   Time:', new Date().toISOString());
              
              // Log the stack trace to see what function removed it
              console.trace('🔍 Stack trace of removal:');
            }
          });
          
          // Check if parent was cleared
          if (mutation.target.contains && !mutation.target.contains(loginComponent)) {
            const stillExists = document.querySelector('.auth-login-component');
            if (!stillExists) {
              console.error('🚨 LOGIN COMPONENT DISAPPEARED!');
              console.error('   Parent that cleared content:', mutation.target);
              console.error('   What was added instead:', Array.from(mutation.addedNodes));
            }
          }
        }
      });
    });
    
    // Watch the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Method 2: Periodic existence check
    const existenceChecker = setInterval(() => {
      const stillExists = document.querySelector('.auth-login-component');
      if (!stillExists) {
        console.error('🚨 LOGIN COMPONENT VANISHED! (detected by periodic check)');
        console.error('   Time of disappearance:', new Date().toISOString());
        console.error('   Current body content:', document.body.innerHTML.substring(0, 500) + '...');
        clearInterval(existenceChecker);
      }
    }, 100); // Check every 100ms
    
    // Method 3: Check for React/Framework re-renders
    setTimeout(() => {
      const afterDelay = document.querySelector('.auth-login-component');
      if (!afterDelay) {
        console.error('🚨 LOGIN COMPONENT REMOVED WITHIN 1 SECOND!');
        console.error('   Likely cause: React/Framework re-render');
        console.error('   Check for routing changes or state updates');
      } else {
        console.log('✅ Login component still exists after 1 second');
      }
    }, 1000);
    
    // Extended monitoring - check for 60 seconds and monitor visibility
    let visibilityChecker;
    
    // Monitor visibility issues (hidden by CSS, not removed)
    visibilityChecker = setInterval(() => {
      const loginComponent = document.querySelector('.auth-login-component');
      if (loginComponent) {
        const computedStyle = window.getComputedStyle(loginComponent);
        const isVisible = loginComponent.offsetWidth > 0 && 
                         loginComponent.offsetHeight > 0 && 
                         computedStyle.display !== 'none' && 
                         computedStyle.visibility !== 'hidden' &&
                         computedStyle.opacity !== '0';
        
        if (!isVisible) {
          console.error('🚨 LOGIN COMPONENT HIDDEN BY CSS!');
          console.error('   Element still exists but not visible');
          console.error('   Display:', computedStyle.display);
          console.error('   Visibility:', computedStyle.visibility);
          console.error('   Opacity:', computedStyle.opacity);
          console.error('   Width:', loginComponent.offsetWidth);
          console.error('   Height:', loginComponent.offsetHeight);
          console.error('   Position:', computedStyle.position);
          console.error('   Z-index:', computedStyle.zIndex);
          
          // Try to force visibility
          console.log('🔧 Attempting to restore visibility...');
          loginComponent.style.display = 'block !important';
          loginComponent.style.visibility = 'visible !important';
          loginComponent.style.opacity = '1 !important';
          loginComponent.style.zIndex = '9999 !important';
          
          clearInterval(visibilityChecker);
        }
      }
    }, 500); // Check every 500ms
    
    // Stop checking after 60 seconds (extended from 10)
    setTimeout(() => {
      clearInterval(existenceChecker);
      clearInterval(visibilityChecker);
      observer.disconnect();
      console.log('🕵️ Steley Login: Extended removal detector stopped (60 second limit)');
      
      // Final status report
      const finalCheck = document.querySelector('.auth-login-component');
      if (finalCheck) {
        const finalStyle = window.getComputedStyle(finalCheck);
        console.log('📊 Final Status Report:');
        console.log('   Element exists:', !!finalCheck);
        console.log('   Display:', finalStyle.display);
        console.log('   Visibility:', finalStyle.visibility);
        console.log('   Opacity:', finalStyle.opacity);
        console.log('   Z-index:', finalStyle.zIndex);
      } else {
        console.error('❌ Final Check: Login component completely missing!');
      }
    }, 60000);
  }
  
  // Initialize interactions for emergency login box
  function initializeEmergencyLoginInteractions(emergencyLogin) {
    console.log('🚨 Setting up emergency login interactions...');
    
    // Set up form submission for emergency login
    const emergencyForm = emergencyLogin.querySelector('#loginForm');
    if (emergencyForm) {
      // Remove existing event listeners by cloning
      const newForm = emergencyForm.cloneNode(true);
      emergencyForm.parentNode.replaceChild(newForm, emergencyForm);
      
      newForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log('🚨 Emergency login form submitted');
        
        const email = newForm.querySelector('#email')?.value;
        const password = newForm.querySelector('#password')?.value;
        
        if (email && password) {
          console.log('🚨 Emergency login attempt:', email);
          // Simple demo authentication for emergency login
          alert(`Emergency Login Demo: ${email}`);
          localStorage.setItem('steley_emergency_login', JSON.stringify({ email, time: Date.now() }));
          window.location.href = '/';
        }
      });
      
      console.log('✅ Emergency form event listener added');
    }
    
    // Set up checkbox for emergency login
    const emergencyCheckbox = emergencyLogin.querySelector('#rememberCheckbox');
    const emergencyCheckIcon = emergencyLogin.querySelector('#checkIcon');
    
    if (emergencyCheckbox && emergencyCheckIcon) {
      let isChecked = false;
      emergencyCheckbox.addEventListener('click', function() {
        isChecked = !isChecked;
        if (isChecked) {
          emergencyCheckbox.classList.add('checked');
          emergencyCheckIcon.style.display = 'block';
        } else {
          emergencyCheckbox.classList.remove('checked');
          emergencyCheckIcon.style.display = 'none';
        }
      });
      console.log('✅ Emergency checkbox event listener added');
    }
  }
  
  console.log('🏁 Steley Login Script: Initialization complete');
})(); 
