// Ghost Pilot Login Page Combined - CSS + HTML Content (Component Only)
const loginCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Login Component Container */
.auth-login-component{max-width:32rem;width:100%;margin:80px auto;padding:20px;position:relative;z-index:999}

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
.auth-input{width:100%;padding:0.5rem 0.75rem;font-size:0.875rem;background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.05);border-radius:0.375rem;color:white;transition:all 0.2s;box-sizing:border-box}
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

/* Loading Spinner */
.loading-spinner{width:1rem;height:1rem;border:2px solid rgba(255,255,255,0.2);border-top-color:white;border-radius:50%;animation:spin 1s linear infinite;margin-right:0.5rem}

/* Animations */
@keyframes cardFloat{0%,100%{transform:translateY(0px) rotate(0deg)}50%{transform:translateY(-10px) rotate(0.5deg)}}
@keyframes spin{to{transform:rotate(360deg)}}

/* Responsive */
@media(max-width:768px){.auth-login-component{padding:15px;margin:60px auto}.auth-screen-card{max-width:28rem}}
`;

const loginHTML = `
<div class="auth-login-component">
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
  console.log('🚀 Login component starting...');
  
  // Add CSS
  const style = document.createElement('style');
  style.textContent = loginCSS;
  document.head.appendChild(style);
  console.log('✅ Login CSS added');
  
  // Add HTML when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeLoginPage();
    });
  } else {
    initializeLoginPage();
  }
  
  function initializeLoginPage() {
    console.log('🔧 Initializing login page...');
    
    // Try to find main content area, otherwise use body
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    console.log('📍 Main content element:', mainContent.tagName);
    
    // Clear existing content in main area and add login page
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
    
    console.log('✅ Login HTML added');
    
    // Initialize interactions after a short delay to ensure DOM is ready
    setTimeout(() => {
      initializeLoginInteractions();
    }, 100);
  }
  
  function initializeLoginInteractions() {
    console.log('🔧 Initializing login interactions...');
    
    // Remember me checkbox
    const checkbox = document.getElementById('rememberCheckbox');
    const checkIcon = document.getElementById('checkIcon');
    let isChecked = false;
    
    if (checkbox) {
      console.log('✅ Remember checkbox found');
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
    } else {
      console.log('❌ Remember checkbox not found');
    }
    
    // Form submission
    const form = document.getElementById('loginForm');
    const submitText = document.getElementById('submitText');
    
    if (form) {
      console.log('✅ Login form found');
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
    } else {
      console.log('❌ Login form not found');
    }
    
    console.log('✅ Login interactions initialized');
  }
})(); 
