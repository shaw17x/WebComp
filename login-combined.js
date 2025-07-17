// Ghost Pilot Login Page Combined - CSS + HTML Content
const loginCSS = `
body{margin:0!important;padding:0!important;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}

/* Main Container */
.auth-screen-container{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.5rem;position:relative;overflow:hidden;background:linear-gradient(135deg,rgba(0,0,0,0.95) 0%,rgba(20,20,20,0.98) 100%);opacity:0;animation:authScreenEntrance 1.2s cubic-bezier(0.2,0.0,0.2,1.0) forwards}

/* Floating Card */
.auth-screen-card{max-width:32rem;width:100%;position:relative;z-index:10;background:rgba(0,0,0,0.8);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.05);border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.4);animation:cardFloat 6s ease-in-out infinite}

/* Header Section */
.auth-header{padding:1.5rem 1.5rem 1rem;text-align:center}
.auth-title{font-size:2rem;font-weight:bold;margin-bottom:0.5rem;background:linear-gradient(to right,white,rgb(229,231,235),rgb(156,163,175));background-clip:text;-webkit-background-clip:text;color:transparent}
.auth-subtitle{font-size:1rem;font-weight:500;color:rgba(255,255,255,0.8);margin-bottom:0.5rem}
.auth-description{font-size:0.75rem;line-height:1.5;color:rgba(255,255,255,0.5)}

/* Form Container */
.auth-form-container{padding:0 1.5rem 1rem}
.auth-form-card{background:rgba(255,255,255,0.02);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.05);border-radius:0.5rem;padding:1rem;transition:all 0.15s}
.auth-form-card:hover{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)}

/* Form Elements */
.auth-form{space-y:1rem}
.auth-field-group{margin-bottom:1rem}
.auth-label{display:block;color:rgba(255,255,255,0.7);font-size:0.75rem;font-weight:500;margin-bottom:0.5rem}
.auth-input{width:100%;padding:0.5rem 0.75rem;font-size:0.875rem;background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.05);border-radius:0.375rem;color:white;transition:all 0.2s}
.auth-input::placeholder{color:rgba(255,255,255,0.3)}
.auth-input:focus{outline:none;border-color:rgba(255,255,255,0.2);box-shadow:0 0 0 1px rgba(255,255,255,0.2)}
.auth-input:hover{border-color:rgba(255,255,255,0.1)}

/* Remember Me Section */
.remember-section{padding:0 1.5rem 1rem}
.remember-card{background:rgba(255,255,255,0.02);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.05);border-radius:0.5rem;padding:1rem;transition:all 0.15s}
.remember-card:hover{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)}
.remember-checkbox-container{display:flex;align-items:center;gap:0.75rem;cursor:pointer}
.remember-checkbox{width:1rem;height:1rem;border-radius:0.25rem;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.2);transition:all 0.2s;display:flex;align-items:center;justify-content:center}
.remember-checkbox.checked{background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.2)}
.remember-text{font-size:0.75rem;font-weight:500;color:rgba(255,255,255,0.8)}
.remember-subtext{font-size:0.625rem;color:rgba(255,255,255,0.5)}

/* Forgot Password */
.forgot-password{font-size:0.75rem;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.2s}
.forgot-password:hover{color:rgba(255,255,255,0.8)}

/* Submit Button */
.auth-submit{width:100%;padding:0.75rem 1rem;font-size:0.875rem;font-weight:500;border-radius:0.375rem;background:rgba(0,0,0,0.8);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.9);transition:all 0.15s;cursor:pointer}
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

/* Floating Orbs */
.floating-orbs{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.floating-orb{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.1) 0%,rgba(255,255,255,0.05) 50%,transparent 100%);animation:floatOrb 8s ease-in-out infinite}
.floating-orb-1{width:120px;height:120px;top:10%;left:10%;animation-delay:0s}
.floating-orb-2{width:80px;height:80px;top:60%;right:15%;animation-delay:2s}
.floating-orb-3{width:100px;height:100px;bottom:20%;left:20%;animation-delay:4s}

/* Loading Spinner */
.loading-spinner{width:1rem;height:1rem;border:2px solid rgba(255,255,255,0.2);border-top-color:white;border-radius:50%;animation:spin 1s linear infinite;margin-right:0.5rem}

/* Animations */
@keyframes authScreenEntrance{0%{opacity:0;transform:scale(0.95) translateY(20px)}100%{opacity:1;transform:scale(1) translateY(0)}}
@keyframes cardFloat{0%,100%{transform:translateY(0px) rotate(0deg)}50%{transform:translateY(-10px) rotate(0.5deg)}}
@keyframes floatOrb{0%,100%{transform:translateY(0px) translateX(0px) scale(1);opacity:0.3}33%{transform:translateY(-20px) translateX(10px) scale(1.1);opacity:0.6}66%{transform:translateY(10px) translateX(-10px) scale(0.9);opacity:0.4}}
@keyframes spin{to{transform:rotate(360deg)}}

/* Responsive */
@media(max-width:768px){.auth-screen-container{padding:1rem}.auth-screen-card{max-width:28rem}}

/* Back to Home Button */
.back-home-container{position:fixed;top:2rem;left:2rem;z-index:1000}
.back-home-btn{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#9ca3af 0%,#d1d5db 100%);border:none;border-radius:8px;padding:12px 24px;font-size:16px;font-weight:600;color:#1f2937;text-decoration:none;transition:all 0.3s cubic-bezier(0.4,0,0.2,1);cursor:pointer;position:relative;overflow:hidden;box-shadow:0 4px 15px rgba(107,114,128,0.2)}
.back-home-btn:hover{transform:translateY(-2px);background:linear-gradient(135deg,#6b7280 0%,#9ca3af 100%);box-shadow:0 10px 25px rgba(107,114,128,0.3)}
.back-home-btn svg{width:16px;height:16px;transition:transform 0.3s ease}
.back-home-btn:hover svg{transform:translateX(-4px)}
`;

const loginHTML = `
<!-- Back to Home Button -->
<div class="back-home-container">
  <a href="/" class="back-home-btn">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
    </svg>
    Back to Home
  </a>
</div>

<div class="auth-screen-container">
  <!-- Animated background elements -->
  <div class="floating-orbs">
    <div class="floating-orb floating-orb-1"></div>
    <div class="floating-orb floating-orb-2"></div>
    <div class="floating-orb floating-orb-3"></div>
  </div>

  <div class="auth-screen-card">
    <!-- Header Section -->
    <div class="auth-header">
      <h1 class="auth-title">Ghost Pilot</h1>
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
      <button type="button" class="auth-toggle-button" onclick="window.location.href='/signup'">
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
`;

// Auto-execute function to inject CSS and HTML
(function() {
  // Add CSS
  const style = document.createElement('style');
  style.textContent = loginCSS;
  document.head.appendChild(style);
  
  // Add HTML when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeLoginPage();
    });
  } else {
    initializeLoginPage();
  }
  
  function initializeLoginPage() {
    // Try to find main content area, otherwise use body
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    // Clear existing content in main area and add login page
    if (mainContent !== document.body) {
      mainContent.innerHTML = loginHTML;
    } else {
      // If we're using body, clear everything and add login
      document.body.innerHTML = loginHTML;
    }
    
    // Initialize interactions
    initializeLoginInteractions();
  }
  
  function initializeLoginInteractions() {
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
    
    // Form submission
    const form = document.getElementById('loginForm');
    const submitText = document.getElementById('submitText');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitText.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
            <div class="loading-spinner"></div>
            Signing In...
          </div>
        `;
        
        // Simulate login process
        setTimeout(() => {
          alert('Login functionality would be implemented here');
          submitText.textContent = 'Sign In';
        }, 2000);
      });
    }
  }
})();
