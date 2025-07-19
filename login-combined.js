// Ghost Pilot Login Page Combined - CSS + HTML Content (Performance Optimized)
const loginCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Login Component Container */
.auth-login-component{max-width:32rem;width:100%;margin:60px auto;padding:20px;position:relative;z-index:999}

/* Optimized Card - Reduced blur and faster animations */
.auth-screen-card{max-width:32rem;width:100%;position:relative;z-index:10;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.08);border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3);opacity:0;transform:translateY(20px);animation:fastEntry 0.4s cubic-bezier(0.25,0.46,0.45,0.94) forwards}

/* Header Section */
.auth-header{padding:1.5rem 1.5rem 1rem;text-align:center}
.auth-title{font-size:2rem;font-weight:bold;margin-bottom:0.5rem;background:linear-gradient(to right,white,rgb(229,231,235));background-clip:text;-webkit-background-clip:text;color:transparent}
.auth-subtitle{font-size:1rem;font-weight:500;color:rgba(255,255,255,0.8);margin-bottom:0.5rem}
.auth-description{font-size:0.75rem;line-height:1.5;color:rgba(255,255,255,0.5)}

/* Form Container - Reduced blur for performance */
.auth-form-container{padding:0 1.5rem 1rem}
.auth-form-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:0.5rem;padding:1rem;transition:all 0.2s ease}
.auth-form-card:hover{background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.12)}

/* Form Elements */
.auth-form{display:flex;flex-direction:column;gap:1rem}
.auth-field-group{margin-bottom:1rem}
.auth-label{display:block;color:rgba(255,255,255,0.7);font-size:0.75rem;font-weight:500;margin-bottom:0.5rem}
.auth-input{width:100%;padding:0.5rem 0.75rem;font-size:0.875rem;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.08);border-radius:0.375rem;color:white;transition:border-color 0.2s ease,box-shadow 0.2s ease;box-sizing:border-box}
.auth-input::placeholder{color:rgba(255,255,255,0.3)}
.auth-input:focus{outline:none;border-color:rgba(255,255,255,0.2);box-shadow:0 0 0 1px rgba(255,255,255,0.15)}
.auth-input:hover{border-color:rgba(255,255,255,0.12)}

/* Remember Me Section - Simplified */
.remember-section{padding:0 1.5rem 1rem}
.remember-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:0.5rem;padding:1rem;transition:background 0.2s ease}
.remember-card:hover{background:rgba(255,255,255,0.05)}
.remember-checkbox-container{display:flex;align-items:center;gap:0.75rem;cursor:pointer}
.remember-checkbox{width:1rem;height:1rem;border-radius:0.25rem;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.3);transition:all 0.2s ease;display:flex;align-items:center;justify-content:center}
.remember-checkbox.checked{background:rgba(255,255,255,0.15);border-color:rgba(255,255,255,0.25)}
.remember-text{font-size:0.75rem;font-weight:500;color:rgba(255,255,255,0.8)}
.remember-subtext{font-size:0.625rem;color:rgba(255,255,255,0.5)}

/* Submit Button - Optimized */
.auth-submit{width:100%;padding:0.75rem 1rem;font-size:0.875rem;font-weight:500;border-radius:0.375rem;background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.9);transition:all 0.2s ease;cursor:pointer}
.auth-submit:hover{background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.15);color:white}
.auth-submit:disabled{opacity:0.5;cursor:not-allowed}

/* Toggle Section */
.auth-toggle{padding:0 1.5rem 1rem;text-align:center}
.auth-toggle-button{color:rgba(255,255,255,0.6);font-size:0.75rem;text-decoration:none;transition:color 0.2s ease;background:none;border:none;cursor:pointer}
.auth-toggle-button:hover{color:rgba(255,255,255,0.8)}

/* Skip Section */
.auth-skip{padding:0 1.5rem 1.5rem;text-align:center}
.auth-skip-button{color:rgba(255,255,255,0.6);font-size:0.75rem;text-decoration:none;transition:color 0.2s ease;background:none;border:none;cursor:pointer}
.auth-skip-button:hover{color:rgba(255,255,255,0.8)}

/* Loading Spinner - Optimized */
.loading-spinner{width:1rem;height:1rem;border:2px solid rgba(255,255,255,0.2);border-top-color:white;border-radius:50%;animation:spin 0.8s linear infinite;margin-right:0.5rem}

/* Footer - Simplified */
.auth-footer{position:relative;background-color:transparent;border-top:1px solid rgba(255,255,255,0.1);font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;opacity:0.4;margin-top:60px;animation:fastEntry 0.3s ease 0.2s both}
.auth-footer-content{max-width:1400px;margin:0 auto;padding:20px 40px}
.auth-footer-row{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:24px}
.auth-footer-left{display:flex;align-items:center}
.auth-footer-copyright{font-size:14px;font-weight:400;color:rgba(255,255,255,0.6)}
.auth-footer-separator{color:rgba(255,255,255,0.2);font-size:18px;margin:0 8px}
.auth-footer-nav{display:flex;gap:20px;align-items:center;flex-wrap:wrap}
.auth-footer-link{font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.2s ease;cursor:pointer}
.auth-footer-link:hover{color:#ffffff}

/* Fast Animations Only */
@keyframes fastEntry{from{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{to{transform:rotate(360deg)}}

/* Responsive */
@media(max-width:768px){.auth-login-component{padding:15px;margin:40px auto}.auth-screen-card{max-width:28rem}.auth-footer-row{flex-direction:column;text-align:center;gap:16px}.auth-footer-nav{flex-wrap:wrap;justify-content:center;gap:12px}}
`;

const loginHTML = `
<div class="auth-login-component">
  <div class="auth-screen-card">
    <!-- Header Section -->
    <div class="auth-header">
      <h1 class="auth-title">Ghost Pilot</h1>
      <h2 class="auth-subtitle">Welcome Back</h2>
      <p class="auth-description">Sign in to access your account</p>
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
              autocomplete="email"
            />
          </div>

          <!-- Password Field -->
          <div class="auth-field-group">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
              <label for="password" class="auth-label" style="margin-bottom:0;">Password</label>
            </div>
            <input
              id="password"
              type="password"
              class="auth-input"
              placeholder="••••••••"
              required
              autocomplete="current-password"
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
    </div>
  </div>
</div>

<!-- Simplified Footer -->
<footer class="auth-footer">
  <div class="auth-footer-content">
    <div class="auth-footer-row">
      <span class="auth-footer-copyright">© Ghost Pilot 2025</span>
      <span class="auth-footer-separator">·</span>
      <div class="auth-footer-nav">
        <a href="#features" class="auth-footer-link">Features</a>
        <a href="/pricing" class="auth-footer-link">Pricing</a>
        <a href="/privacy-policy" class="auth-footer-link">Privacy</a>
        <a href="/terms-of-service" class="auth-footer-link">Terms</a>
      </div>
    </div>
  </div>
</footer>
`;

// Optimized auto-execute function
(function() {
  // Fast URL check
  const isLoginPage = location.pathname.includes('login') || location.hash.includes('login');
  
  if (!isLoginPage) return;
  
  // Preload auth client asynchronously (non-blocking)
  if (!window.ghostPilotAuth) {
    const authScript = document.createElement('script');
    authScript.src = 'https://raw.githubusercontent.com/shaw17x/WebComp/main/auth-client.js';
    authScript.async = true;
    document.head.appendChild(authScript);
  }
  
  // Inject CSS immediately
  const style = document.createElement('style');
  style.textContent = loginCSS;
  document.head.appendChild(style);
  
  // Fast DOM initialization
  function initializeLoginPage() {
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.body;
    
    // Single DOM operation
    if (mainContent !== document.body) {
      mainContent.innerHTML = loginHTML;
    } else {
      const header = document.querySelector('header');
      if (header) {
        header.insertAdjacentHTML('afterend', loginHTML);
      } else {
        document.body.insertAdjacentHTML('afterbegin', loginHTML);
      }
    }
    
    // Initialize interactions immediately
    initializeLoginInteractions();
  }
  
  // Optimized interaction setup
  function initializeLoginInteractions() {
    // Cache DOM elements
    const checkbox = document.getElementById('rememberCheckbox');
    const checkIcon = document.getElementById('checkIcon');
    const form = document.getElementById('loginForm');
    const submitText = document.getElementById('submitText');
    
    let isChecked = false;
    
    // Remember me checkbox
    if (checkbox) {
      checkbox.onclick = function() {
        isChecked = !isChecked;
        checkbox.classList.toggle('checked', isChecked);
        checkIcon.style.display = isChecked ? 'block' : 'none';
      };
    }
    
    // Form submission - optimized
    if (form) {
      form.onsubmit = async function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        
        if (!emailInput?.value || !passwordInput?.value) {
          alert('Please enter both email and password');
          return;
        }
        
        // Fast loading state
        submitText.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;"><div class="loading-spinner"></div>Signing In...</div>`;
        
        try {
          // Wait for auth client if needed
          let attempts = 0;
          while (!window.ghostPilotAuth && attempts < 50) {
            await new Promise(resolve => setTimeout(resolve, 100));
            attempts++;
          }
          
          const result = await window.ghostPilotAuth.signIn(emailInput.value, passwordInput.value);
          
          if (result.success) {
            submitText.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">✅ Welcome back!</div>`;
            
            // Store auth data
            localStorage.setItem('supabase_token', result.token);
            localStorage.setItem('supabase_user', JSON.stringify(result.user));
            
            // Trigger React update
            window.dispatchEvent(new StorageEvent('storage', {key: 'supabase_token', newValue: result.token}));
            
            // Fast redirect
            setTimeout(() => window.location.href = '/subscription', 1500);
            
          } else {
            submitText.innerHTML = `<div style="color:#ef4444;">❌ ${result.error}</div>`;
            setTimeout(() => {
              submitText.textContent = 'Sign In';
              form.querySelector('.auth-submit').disabled = false;
            }, 3000);
          }
        } catch (error) {
          console.error('Login error:', error);
          submitText.textContent = 'Sign In';
          alert('Connection failed. Please try again.');
        }
      };
    }
  }
  
  // Fast initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLoginPage);
  } else {
    initializeLoginPage();
  }
})(); 
