// Steley Login Page Combined - CSS + HTML Content (Component Only) - v2.1
const loginCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Login Component Container */
.auth-login-component{max-width:32rem;width:100%;margin:80px auto;padding:20px;position:relative;z-index:999}

/* Floating Card - Optimized for Smooth Performance */
.auth-screen-card{max-width:32rem;width:100%;position:relative;z-index:10;background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.05);border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.4);opacity:1 !important;transform:translate3d(0,0,0) scale(1) !important;visibility:visible !important;will-change:transform,opacity;backface-visibility:hidden;perspective:1000px}
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
.auth-toggle{padding:0 1.5rem 1.5rem;text-align:center}
.auth-toggle-button{color:rgba(255,255,255,0.6);font-size:0.75rem;text-decoration:none;transition:color 0.2s;background:none;border:none;cursor:pointer}
.auth-toggle-button:hover{color:rgba(255,255,255,0.8)}

/* Loading Spinner */
.loading-spinner{width:1rem;height:1rem;border:2px solid rgba(255,255,255,0.2);border-top-color:white;border-radius:50%;animation:spin 1s linear infinite;margin-right:0.5rem}

/* Footer Styles */
.auth-footer{position:relative;background-color:transparent;border-top:1px solid rgba(255,255,255,0.1);font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;opacity:0.3;visibility:visible;transition:all 0.6s cubic-bezier(0.25,0.46,0.45,0.94);transform:scale(0.95) translateY(20px);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards;margin-top:80px}
.auth-footer-content{max-width:1400px;margin:0 auto;padding:28px 40px}
.auth-footer-row{display:flex;justify-content:center;align-items:center;flex-wrap:nowrap;gap:40px;animation:fadeInUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s both}
.auth-footer-copyright{display:flex;align-items:center;white-space:nowrap}
.auth-footer-copyright span{font-size:14px;font-weight:400;color:rgba(255,255,255,0.6);letter-spacing:-0.01em}
.auth-footer-nav{display:flex;gap:32px;align-items:center;flex-wrap:nowrap;white-space:nowrap}
.auth-footer-nav a{font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.3s ease;cursor:pointer}
.auth-footer-nav a:hover{color:#ffffff}
.auth-footer-right{display:flex;align-items:center;gap:32px}
.auth-footer-legal{display:flex;gap:24px;align-items:center;white-space:nowrap}
.auth-footer-legal a{font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.3s ease;cursor:pointer;font-family:inherit}
.auth-footer-legal a:hover{color:#ffffff}
.auth-footer-social{display:flex;gap:12px;align-items:center}
.auth-social-link{width:32px;height:32px;border-radius:6px;background-color:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.6);transition:all 0.3s ease;cursor:pointer;text-decoration:none}
.auth-social-link:hover{background-color:rgba(255,255,255,0.1);color:#ffffff}
.auth-footer-separator{color:rgba(255,255,255,0.2);font-size:18px;line-height:1;margin:0 8px}

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
      <!-- Logo + Title Container (v2.1 - Cache Bust) -->
      <div style="display: inline-flex; align-items: center; gap: 0; margin-bottom: 0.5rem;">
        <img src="https://raw.githubusercontent.com/shaw17x/WebComp/main/SteleyBlueLogo.png?v=2" alt="Steley Logo" style="width: 40px; height: 40px; object-fit: contain; image-rendering: crisp-edges; flex-shrink: 0; margin-right: -4px;" onerror="this.style.display='none'">
        <h1 class="auth-title" style="margin-bottom: 0;">teley</h1>
      </div>
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
  // Add CSS immediately
  const style = document.createElement('style');
  style.textContent = loginCSS;
  document.head.appendChild(style);
  
  // Initialize when DOM is ready - matching docs page logic
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeLoginPage();
    });
  } else {
    initializeLoginPage();
  }
  
  function initializeLoginPage() {
    // Check if user is already logged in
    const sessionData = localStorage.getItem('steley_session');
    if (sessionData) {
      try {
        const session = JSON.parse(sessionData);
        if (session.email) {
          window.location.href = '/';
          return;
        }
      } catch {
        // Continue with login
      }
    }
    
    // Try to find main content area, otherwise use body
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    // Clear existing content in main area and add login content
    if (mainContent !== document.body) {
      mainContent.innerHTML = loginHTML;
    } else {
      // If we're using body, insert at the beginning but after header
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        header.insertAdjacentHTML('afterend', loginHTML);
      } else {
        document.body.insertAdjacentHTML('afterbegin', loginHTML);
      }
    }
    
    // Initialize login animations with proper timing
    initializeLoginAnimations();
    
    // Initialize login interactions with staggered timing
    initializeLoginInteractions();
  }
  
  function initializeLoginAnimations() {
    // Use optimized class-based animations for smooth performance
    setTimeout(() => {
      const loginCard = document.querySelector('.auth-screen-card');
      const footer = document.querySelector('.auth-footer');
      
      // Trigger smooth entry animation for login card
      if (loginCard) {
        // Add hardware acceleration and start animation
        loginCard.style.willChange = 'transform, opacity';
        loginCard.classList.add('animate-in');
        
        // FAILSAFE: Force visibility if animation doesn't work
        setTimeout(() => {
          loginCard.style.opacity = '1 !important';
          loginCard.style.transform = 'translate3d(0,0,0) scale(1) !important';
          loginCard.style.visibility = 'visible !important';
        }, 100);
        
        // Add floating animation and effects after entry completes
        setTimeout(() => {
          loginCard.classList.add('floating');
          loginCard.style.backdropFilter = 'blur(20px)';
          loginCard.style.willChange = 'auto';
        }, 800);
      }
      
      // Animate footer with class-based approach
      if (footer) {
        setTimeout(() => {
          footer.style.opacity = '1';
          footer.style.transform = 'scale(1) translateY(0px)';
          footer.style.willChange = 'auto';
        }, 300);
      }
    }, 50);
  }
  
  function initializeLoginInteractions() {
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
      // Remember me checkbox
      const checkbox = document.getElementById('rememberCheckbox');
      const checkIcon = document.getElementById('checkIcon');
      let isChecked = false;
      
      if (checkbox) {
        checkbox.addEventListener('click', function() {
          isChecked = !isChecked;
          if (isChecked) {
            checkbox.classList.add('checked');
            checkIcon.style.display = 'block';
          } else {
            checkbox.classList.remove('checked');
            checkIcon.style.display = 'none';
          }
        });
      }
      
      // Form submission with delay to ensure smooth animation
      setTimeout(() => {
        initializeLoginForm();
        // Add subtle backdrop effects after animation completes
        addSubtleEffects();
      }, 200);
    }, 150);
  }
  
  function initializeLoginForm() {
    const form = document.getElementById('loginForm');
    const submitText = document.getElementById('submitText');
    
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
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
        // Simulate authentication (replace with real auth when ready)
        await simulateAuth(email, password);
        
        // Show success with smooth transition
        if (submitText) {
          submitText.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              ✅ Welcome back!
            </div>
          `;
        }
        
        // Store demo session
        localStorage.setItem('steley_session', JSON.stringify({
          email: email,
          loginTime: new Date().toISOString(),
          demo: true
        }));
        
        // Redirect after brief delay
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
        
      } catch (error) {
        // Show error with smooth transition
        if (submitText) {
          submitText.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              ❌ ${error.message}
            </div>
          `;
        }
        
        // Reset button after delay
        setTimeout(() => {
          if (submitText) {
            submitText.textContent = 'Sign In';
          }
        }, 3000);
      }
    });
  }
  
  async function simulateAuth(email, password) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple validation for demo
    if (email.includes('@') && password.length >= 6) {
      return { success: true, user: { email } };
    } else {
      throw new Error('Invalid email or password');
    }
  }
  
  function addSubtleEffects() {
    // Add backdrop blur effects after main animation completes for better performance
    setTimeout(() => {
      const formCard = document.querySelector('.auth-form-card');
      const rememberCard = document.querySelector('.remember-card');
      const submitButton = document.querySelector('.auth-submit');
      
      if (formCard) {
        formCard.style.backdropFilter = 'blur(10px)';
      }
      if (rememberCard) {
        rememberCard.style.backdropFilter = 'blur(10px)';
      }
      if (submitButton) {
        submitButton.style.backdropFilter = 'blur(10px)';
      }
    }, 600);
  }
  
  function showMessage(message, type = 'info') {
    // Simple message display
    const submitText = document.getElementById('submitText');
    if (submitText) {
      const icon = type === 'error' ? '❌' : 'ℹ️';
      submitText.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          ${icon} ${message}
        </div>
      `;
      
      setTimeout(() => {
        submitText.textContent = 'Sign In';
      }, 3000);
    }
  }
})(); 
