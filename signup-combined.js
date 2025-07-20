// Ghost Pilot Sign Up Page Combined - CSS + HTML Content (Component Only) - WITH DEBUG
const signupCSS = `
/* NO BODY STYLING - Let Framer handle the background */

/* Signup Component Container */
.auth-signup-component{max-width:32rem;width:100%;margin:80px auto;padding:20px;position:relative;z-index:999}

/* Floating Card */
.auth-screen-card{max-width:32rem;width:100%;position:relative;z-index:10;background:rgba(0,0,0,0.8);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.05);border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.4);opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards, cardFloat 6s ease-in-out infinite 1.2s}

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

<!-- Footer -->
<footer class="auth-footer">
  <div class="auth-footer-content">
    <div class="auth-footer-row">
      <!-- Left Side - Copyright -->
      <div class="auth-footer-left">
        <span class="auth-footer-copyright">© Ghost Pilot 2025</span>
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
          <a href="https://twitter.com/ghostpilot" target="_blank" rel="noopener noreferrer" class="auth-social-link" aria-label="Twitter">
            <div style="transform:scale(0.8)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
          </a>
          <a href="https://github.com/ghostpilot" target="_blank" rel="noopener noreferrer" class="auth-social-link" aria-label="GitHub">
            <div style="transform:scale(0.8)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>
          <a href="https://discord.gg/ghostpilot" target="_blank" rel="noopener noreferrer" class="auth-social-link" aria-label="Discord">
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
  
  console.log('🚀 Signup component starting...');
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
          console.log('🌐 window.ghostPilotAuth exists:', !!window.ghostPilotAuth);
          
          // Force reload auth client for debugging
          console.log('🔄 Force reloading auth client for debugging...');
          window.ghostPilotAuth = null; // Clear existing
          
          if (!window.ghostPilotAuth) {
            console.log('📥 Loading auth client from GitHub...');
            
            // Load auth client if not already loaded
            const authScript = document.createElement('script');
            authScript.src = 'https://raw.githubusercontent.com/shaw17x/WebComp/main/auth-client.js';
            
            document.head.appendChild(authScript);
            console.log('📤 Auth script tag added to head');
            
            // Wait for script to load with proper error handling
            await new Promise((resolve, reject) => {
              authScript.onload = function() {
                console.log('✅ Auth client script loaded successfully');
                resolve();
              };
              
              authScript.onerror = function(error) {
                console.error('❌ Auth client script failed to load:', error);
                reject(new Error('Failed to load auth client script'));
              };
              
              // Timeout after 10 seconds
              setTimeout(() => {
                console.error('⏰ Auth client script load timeout');
                reject(new Error('Auth client load timeout after 10 seconds'));
              }, 10000);
            });
            
            console.log('⏳ Waiting for auth client to initialize...');
            // Give it a moment to initialize
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            console.log('🔍 Auth client after loading:', !!window.ghostPilotAuth);
            if (window.ghostPilotAuth) {
              console.log('🔍 Auth client methods:', Object.keys(window.ghostPilotAuth));
            }
          } else {
            console.log('✅ Auth client already exists');
            console.log('🔍 Auth client methods:', Object.keys(window.ghostPilotAuth));
          }
          
          // Check if auth client is properly loaded
          if (!window.ghostPilotAuth) {
            throw new Error('Auth client failed to load');
          }
          
          if (!window.ghostPilotAuth.signUp) {
            throw new Error('Auth client signUp method not found');
          }
          
          console.log('🚀 Starting signup process...');
          console.log('📧 Email for signup:', email);
          console.log('🔒 Password length:', password.length);
          
          // Perform real signup
          const result = await window.ghostPilotAuth.signUp(email, password);
          
          console.log('📥 Signup result received:');
          console.log('📥 Result object:', result);
          console.log('📥 Success:', result?.success);
          console.log('📥 Error:', result?.error);
          console.log('📥 User:', result?.user ? 'USER DATA RECEIVED' : 'NO USER DATA');
          
          if (result && result.success) {
            console.log('✅ Signup successful!');
            
            // Show success message briefly
            if (submitText) {
              submitText.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
                  ✅ Account Created!
                </div>
              `;
              console.log('🎉 Success message displayed');
            }
            
            // Store user data for React components to detect
            if (result.user) {
              localStorage.setItem('supabase_user', JSON.stringify(result.user));
              console.log('💾 User data stored in localStorage');
              
              // Trigger storage event for React components
              window.dispatchEvent(new StorageEvent('storage', {
                key: 'supabase_user',
                newValue: JSON.stringify(result.user)
              }));
              console.log('📡 Storage event dispatched');
            }
            
            // Redirect after brief delay
            console.log('🔄 Redirecting to login in 2 seconds...');
            setTimeout(() => {
              console.log('➡️ Redirecting to /login');
              window.location.href = '/login';
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

  // Clean up - removed profile dropdown functionality to prevent duplicates
})(); 
