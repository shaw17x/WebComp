// Ghost Pilot Login - Simple Complete Version
(function() {
  console.log('🚀 Loading simple login component...');
  
  // Add CSS
  const style = document.createElement('style');
  style.textContent = `
  .auth-login-component{max-width:32rem;width:100%;margin:80px auto;padding:20px;position:relative;z-index:999}
  .auth-screen-card{background:rgba(0,0,0,0.8);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.05);border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.4);padding:2rem}
  .auth-header{text-align:center;margin-bottom:2rem}
  .auth-title{font-size:2rem;font-weight:bold;margin-bottom:0.5rem;background:linear-gradient(to right,white,rgb(229,231,235),rgb(156,163,175));background-clip:text;-webkit-background-clip:text;color:transparent}
  .auth-subtitle{font-size:1rem;font-weight:500;color:rgba(255,255,255,0.8);margin-bottom:0.5rem}
  .auth-description{font-size:0.75rem;color:rgba(255,255,255,0.5)}
  .auth-form{margin-bottom:1.5rem}
  .auth-field-group{margin-bottom:1rem}
  .auth-label{display:block;color:rgba(255,255,255,0.7);font-size:0.75rem;font-weight:500;margin-bottom:0.5rem}
  .auth-input{width:100%;padding:0.75rem;font-size:0.875rem;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.1);border-radius:0.375rem;color:white;box-sizing:border-box}
  .auth-input::placeholder{color:rgba(255,255,255,0.4)}
  .auth-input:focus{outline:none;border-color:rgba(255,255,255,0.3)}
  .auth-submit{width:100%;padding:0.75rem;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:0.375rem;color:white;font-weight:500;cursor:pointer;margin-bottom:1rem}
  .auth-submit:hover{background:rgba(255,255,255,0.15)}
  .auth-links{text-align:center}
  .auth-link{color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.875rem;margin:0 1rem}
  .auth-link:hover{color:rgba(255,255,255,0.8)}
  `;
  document.head.appendChild(style);
  
  // Create HTML
  const loginHTML = `
    <div class="auth-login-component">
      <div class="auth-screen-card">
        <div class="auth-header">
          <h1 class="auth-title">Ghost Pilot</h1>
          <h2 class="auth-subtitle">Welcome Back</h2>
          <p class="auth-description">Sign in to access your personalized experience</p>
        </div>
        
        <form class="auth-form" id="loginForm">
          <div class="auth-field-group">
            <label class="auth-label">Email Address</label>
            <input type="email" class="auth-input" placeholder="your@email.com" required />
          </div>
          
          <div class="auth-field-group">
            <label class="auth-label">Password</label>
            <input type="password" class="auth-input" placeholder="••••••••" required />
          </div>
          
          <button type="submit" class="auth-submit">Sign In</button>
        </form>
        
        <div class="auth-links">
          <a href="/signup" class="auth-link">Create Account</a>
          <a href="/" class="auth-link">Skip for now</a>
        </div>
      </div>
    </div>
  `;
  
  // Find content area and inject
  const mainContent = document.querySelector('main') || 
                     document.querySelector('.main-content') || 
                     document.querySelector('[data-framer-name="Content"]') ||
                     document.body;
  
  if (mainContent !== document.body) {
    mainContent.innerHTML = loginHTML;
  } else {
    const header = document.querySelector('header') || document.querySelector('nav');
    if (header) {
      header.insertAdjacentHTML('afterend', loginHTML);
    } else {
      document.body.insertAdjacentHTML('afterbegin', loginHTML);
    }
  }
  
  // Add form handler
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Login form submitted! (This is just a test)');
    });
  }
  
  console.log('✅ Simple login component loaded successfully');
})();
