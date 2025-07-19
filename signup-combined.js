// Ghost Pilot Sign Up Page Combined - CSS + HTML Content (Component Only)
const signupCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Signup Component Container */
.auth-signup-component{max-width:32rem;width:100%;margin:80px auto;padding:20px;position:relative;z-index:999}

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

/* Password Strength */
.password-strength{padding:0 1.5rem 1rem}
.strength-card{background:rgba(255,255,255,0.02);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.05);border-radius:0.5rem;padding:1rem;transition:all 0.15s}
.strength-card:hover{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)}
.strength-header{color:rgba(255,255,255,0.8);font-weight:500;margin-bottom:0.75rem;font-size:0.75rem}
.strength-indicator{display:flex;align-items:center;gap:0.5rem;margin-bottom:0.75rem}
.strength-bar{flex:1;background:rgba(255,255,255,0.1);border-radius:9999px;height:0.375rem}
.strength-fill{height:0.375rem;border-radius:9999px;transition:all 0.3s}
.strength-weak{width:33%;background:linear-gradient(to right,#ef4444,#f87171)}
.strength-medium{width:66%;background:linear-gradient(to right,#eab308,#facc15)}
.strength-strong{width:100%;background:linear-gradient(to right,#22c55e,#4ade80)}
.strength-badge{padding:0.125rem 0.5rem;border-radius:9999px;font-size:0.625rem;font-weight:500}
.badge-weak{background:rgba(239,68,68,0.2);color:#fca5a5;border:1px solid rgba(239,68,68,0.3)}
.badge-medium{background:rgba(234,179,8,0.2);color:#fde047;border:1px solid rgba(234,179,8,0.3)}
.badge-strong{background:rgba(34,197,94,0.2);color:#86efac;border:1px solid rgba(34,197,94,0.3)}
.requirements-list{space-y:0.25rem}
.requirement-item{display:flex;align-items:center;gap:0.5rem}
.requirement-icon{width:0.75rem;height:0.75rem;border-radius:50%;display:flex;align-items:center;justify-content:center}
.icon-valid{background:rgba(34,197,94,0.2);border:1px solid rgba(34,197,94,0.4)}
.icon-invalid{background:rgba(239,68,68,0.2);border:1px solid rgba(239,68,68,0.4)}
.requirement-text{font-size:0.625rem}
.text-valid{color:#86efac}
.text-invalid{color:#fca5a5}

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
@media(max-width:768px){.auth-signup-component{padding:15px;margin:60px auto}.auth-screen-card{max-width:28rem}}
`;

const signupHTML = `
<div class="auth-signup-component">
  <div class="auth-screen-card">
    <!-- Header Section -->
    <div class="auth-header">
      <h1 class="auth-title">Ghost Pilot</h1>
      <h2 class="auth-subtitle">Join Ghost Pilot</h2>
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

    <!-- Password Strength -->
    <div class="password-strength" id="passwordStrength" style="display:none;">
      <div class="strength-card">
        <h3 class="strength-header">Password Strength</h3>
        
        <!-- Strength Indicator -->
        <div class="strength-indicator">
          <div class="strength-bar">
            <div class="strength-fill" id="strengthFill"></div>
          </div>
          <div class="strength-badge" id="strengthBadge">Weak</div>
        </div>
        
        <!-- Requirements -->
        <div class="requirements-list" id="requirementsList">
          <div class="requirement-item">
            <div class="requirement-icon icon-invalid" id="req-length">
              <svg style="width:8px;height:8px;color:#fca5a5;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span class="requirement-text text-invalid" id="req-length-text">At least 8 characters</span>
          </div>
          <div class="requirement-item">
            <div class="requirement-icon icon-invalid" id="req-upper">
              <svg style="width:8px;height:8px;color:#fca5a5;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span class="requirement-text text-invalid" id="req-upper-text">Uppercase letter</span>
          </div>
          <div class="requirement-item">
            <div class="requirement-icon icon-invalid" id="req-lower">
              <svg style="width:8px;height:8px;color:#fca5a5;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span class="requirement-text text-invalid" id="req-lower-text">Lowercase letter</span>
          </div>
          <div class="requirement-item">
            <div class="requirement-icon icon-invalid" id="req-number">
              <svg style="width:8px;height:8px;color:#fca5a5;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span class="requirement-text text-invalid" id="req-number-text">Number</span>
          </div>
          <div class="requirement-item">
            <div class="requirement-icon icon-invalid" id="req-special">
              <svg style="width:8px;height:8px;color:#fca5a5;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span class="requirement-text text-invalid" id="req-special-text">Special character</span>
          </div>
        </div>
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
  </div>
</div>
`;

// Auto-execute function to inject CSS and HTML
(function() {
  console.log('🚀 Signup component starting...');
  
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
    
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordStrength = document.getElementById('passwordStrength');
    const strengthFill = document.getElementById('strengthFill');
    const strengthBadge = document.getElementById('strengthBadge');
    
    // Check if elements exist
    if (passwordInput) {
      console.log('✅ Password input found');
    } else {
      console.log('❌ Password input not found');
    }
    
    if (confirmPasswordInput) {
      console.log('✅ Confirm password input found');
    } else {
      console.log('❌ Confirm password input not found');
    }
    
    if (passwordStrength) {
      console.log('✅ Password strength indicator found');
    } else {
      console.log('❌ Password strength indicator not found');
    }
    
    // Password strength validation
    function validatePassword(password) {
      const requirements = [
        { id: 'length', test: password.length >= 8, label: 'At least 8 characters' },
        { id: 'upper', test: /[A-Z]/.test(password), label: 'Uppercase letter' },
        { id: 'lower', test: /[a-z]/.test(password), label: 'Lowercase letter' },
        { id: 'number', test: /[0-9]/.test(password), label: 'Number' },
        { id: 'special', test: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password), label: 'Special character' }
      ];
      
      const passed = requirements.filter(req => req.test).length;
      let strength = 'weak';
      
      if (passed >= 4) strength = 'strong';
      else if (passed >= 3) strength = 'medium';
      
      return { requirements, strength, score: passed };
    }
    
    function updatePasswordStrength(password) {
      if (!password) {
        if (passwordStrength) {
          passwordStrength.style.display = 'none';
        }
        return;
      }
      
      if (passwordStrength) {
        passwordStrength.style.display = 'block';
        const validation = validatePassword(password);
        
        // Update strength indicator
        if (strengthFill) {
          strengthFill.className = `strength-fill strength-${validation.strength}`;
        }
        if (strengthBadge) {
          strengthBadge.className = `strength-badge badge-${validation.strength}`;
          strengthBadge.textContent = validation.strength.charAt(0).toUpperCase() + validation.strength.slice(1);
        }
        
        // Update requirements
        validation.requirements.forEach(req => {
          const icon = document.getElementById(`req-${req.id}`);
          const text = document.getElementById(`req-${req.id}-text`);
          
          if (icon && text) {
            if (req.test) {
              icon.className = 'requirement-icon icon-valid';
              icon.innerHTML = `<svg style="width:8px;height:8px;color:#86efac;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>`;
              text.className = 'requirement-text text-valid';
            } else {
              icon.className = 'requirement-icon icon-invalid';
              icon.innerHTML = `<svg style="width:8px;height:8px;color:#fca5a5;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>`;
              text.className = 'requirement-text text-invalid';
            }
          }
        });
      }
    }
    
    // Password input event listener
    if (passwordInput) {
      passwordInput.addEventListener('input', function() {
        updatePasswordStrength(this.value);
      });
      console.log('✅ Password input event listener added');
    }
    
    // Form submission
    const form = document.getElementById('signupForm');
    const submitText = document.getElementById('submitText');
    
    if (form) {
      console.log('✅ Signup form found');
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('email');
        if (!passwordInput || !confirmPasswordInput || !emailInput) {
          console.log('❌ Required inputs not found during form submission');
          return;
        }
        
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        
        const validation = validatePassword(password);
        if (validation.score < 3) {
          alert('Please create a stronger password');
          return;
        }
        
        // Show loading state
        if (submitText) {
          submitText.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              <div class="loading-spinner"></div>
              Creating Account...
            </div>
          `;
        }
        
        try {
          // Initialize auth client if needed
          if (!window.ghostPilotAuth) {
            // Load auth client if not already loaded
            const authScript = document.createElement('script');
            authScript.src = 'https://raw.githubusercontent.com/shaw17x/WebComp/main/auth-client.js';
            document.head.appendChild(authScript);
            
            // Wait for script to load
            await new Promise(resolve => {
              authScript.onload = resolve;
            });
          }
          
          // Perform real signup
          const result = await window.ghostPilotAuth.signUp(email, password);
          
          if (result.success) {
            console.log('✅ Signup successful, redirecting to subscription management...');
            
            // Show success message briefly
            if (submitText) {
              submitText.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
                  ✅ Account Created!
                </div>
              `;
            }
            
            // Redirect after short delay
            setTimeout(() => {
              window.location.href = '/subscription';
            }, 1500);
            
          } else {
            // Handle signup error
            console.error('❌ Signup failed:', result.error);
            
            if (submitText) {
              submitText.textContent = 'Create Account';
            }
            
            // Show user-friendly error message
            let errorMessage = 'Failed to create account. ';
            if (result.error.includes('email')) {
              errorMessage += 'This email is already registered.';
            } else if (result.error.includes('password')) {
              errorMessage += 'Password requirements not met.';
            } else {
              errorMessage += 'Please try again.';
            }
            
            alert(errorMessage);
          }
          
        } catch (error) {
          console.error('❌ Signup error:', error);
          
          if (submitText) {
            submitText.textContent = 'Create Account';
          }
          
          alert('Failed to create account. Please check your internet connection and try again.');
        }
      });
    } else {
      console.log('❌ Signup form not found');
    }
    
    console.log('✅ Signup interactions initialized');
  }
})(); 
