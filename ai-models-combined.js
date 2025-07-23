// Steley AI Models Page - Simple List Interface
// Redesigned: Clean model lists exactly like OpenRouter format
// Removed: All logos, images, and complex cards for simple text lists
const aiModelsCSS = `
.ai-models-page{max-width:1400px;margin:80px auto;padding:20px;position:relative;z-index:999}
.ai-models-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s forwards;position:relative;z-index:1000}
.ai-models-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6b7280;animation:spin 3s linear infinite}
.ai-models-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#9ca3af 50%,#6b7280 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:20px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards}
.ai-models-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;text-align:center;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards}

/* Stats Overview */
.stats-overview{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin:40px 0;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s forwards}
.stat-card{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:20px;text-align:center}
.stat-number{font-size:2.5rem;font-weight:800;color:#fff;margin-bottom:8px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.stat-label{color:#9ca3af;font-size:0.9rem;font-weight:500}

/* Provider Switcher Interface */
.provider-switcher{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:30px;margin-bottom:40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.6s forwards}

.provider-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:30px;justify-content:center}
.provider-tab{padding:12px 24px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02);color:#9ca3af;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.3s ease;min-width:120px;text-align:center}
.provider-tab:hover{border-color:rgba(255,255,255,0.2);background:rgba(255,255,255,0.05);color:#cbd5e1}
.provider-tab.active{background:linear-gradient(135deg,#3b82f6,#1d4ed8);border-color:#3b82f6;color:#fff;box-shadow:0 4px 15px rgba(59,130,246,0.3)}
.provider-tab.active:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(59,130,246,0.4)}

/* Models List Container */
.models-container{min-height:400px;position:relative}
.models-list{display:none;opacity:0;transform:translateY(20px);transition:all 0.5s ease}
.models-list.active{display:block;opacity:1;transform:translateY(0)}

/* Model List Items */
.model-item{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:12px 16px;margin-bottom:8px;transition:all 0.2s ease;cursor:pointer;font-family:'Fira Code',Monaco,Consolas,monospace}
.model-item:hover{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.1);transform:translateX(4px)}
.model-item:last-child{margin-bottom:0}

.model-name{color:#e2e8f0;font-size:14px;font-weight:400;line-height:1.4}
.model-name .provider-prefix{color:#6b7280}
.model-name .model-path{color:#cbd5e1}

/* Model Categories */
.model-category{margin-bottom:24px}
.category-title{color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;padding-left:4px}

/* Back Button */
.back-home-container{text-align:center;margin:60px auto 40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.8s forwards}
.back-home-btn{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#9ca3af 0%,#d1d5db 100%);border:none;border-radius:12px;padding:12px 24px;font-size:14px;font-weight:600;color:#1f2937;text-decoration:none;transition:all 0.3s ease;cursor:pointer;box-shadow:0 4px 15px rgba(107,114,128,0.2)}
.back-home-btn:hover{transform:translateY(-2px);background:linear-gradient(135deg,#6b7280 0%,#9ca3af 100%);box-shadow:0 8px 25px rgba(107,114,128,0.3)}
.back-home-btn svg{width:16px;height:16px;transition:transform 0.3s ease}
.back-home-btn:hover svg{transform:translateX(-4px)}

@media(max-width:768px){
  .ai-models-page{padding:15px;margin:60px auto}
  .ai-models-title{font-size:2rem}
  .provider-tabs{justify-content:flex-start;overflow-x:auto;padding-bottom:10px}
  .provider-tab{min-width:100px;font-size:12px;padding:10px 16px}
  .stats-overview{grid-template-columns:repeat(2,1fr);gap:16px}
}

@keyframes containerEntry{from{opacity:0;transform:translateY(30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
`;

const aiModelsHTML = `
<div class="ai-models-page">
  <div style="text-align: center;">
    <div class="ai-models-badge">
      <div class="ai-models-badge-dot"></div>
      Steley AI Models
    </div>
  </div>
  <h1 class="ai-models-title">Unlimited AI Access</h1>
  <p class="ai-models-subtitle">Access 500+ premium AI models from top providers with no tokens, limits, or restrictions</p>
  
  <!-- Stats Overview -->
  <div class="stats-overview">
    <div class="stat-card">
      <div class="stat-number">500+</div>
      <div class="stat-label">AI Models</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">12</div>
      <div class="stat-label">Providers</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">∞</div>
      <div class="stat-label">Usage Limit</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">$0</div>
      <div class="stat-label">Monthly Cost</div>
    </div>
  </div>

  <!-- Provider Switcher -->
  <div class="provider-switcher">
    <div class="provider-tabs">
      <div class="provider-tab active" data-provider="openai">OpenAI</div>
      <div class="provider-tab" data-provider="anthropic">Anthropic</div>
      <div class="provider-tab" data-provider="google">Google</div>
      <div class="provider-tab" data-provider="meta">Meta</div>
      <div class="provider-tab" data-provider="mistral">Mistral</div>
      <div class="provider-tab" data-provider="deepseek">DeepSeek</div>
      <div class="provider-tab" data-provider="qwen">Qwen</div>
      <div class="provider-tab" data-provider="nvidia">NVIDIA</div>
    </div>

    <div class="models-container">
      <!-- OpenAI Models -->
      <div class="models-list active" data-provider-content="openai">
        <div class="model-category">
          <div class="category-title">Flagship Models</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/o3</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/o3-pro</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/o3-mini</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/o3-mini-high</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">GPT-4 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/gpt-4o</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/gpt-4o-2024-11-20</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/gpt-4o-mini</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/gpt-4o-mini-2024-07-18</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/chatgpt-4o-latest</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/gpt-4-turbo</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">O1 Reasoning Models</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/o1</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/o1-pro</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/o1-mini</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">openai/o1-preview</span></div>
          </div>
        </div>
      </div>

      <!-- Anthropic Models -->
      <div class="models-list" data-provider-content="anthropic">
        <div class="model-category">
          <div class="category-title">Claude 3.5 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">anthropic/claude-3.5-sonnet</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">anthropic/claude-3.5-sonnet-20241022</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">anthropic/claude-3.5-haiku</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">anthropic/claude-3.5-haiku-20241022</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">Claude 3 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">anthropic/claude-3-opus</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">anthropic/claude-3-sonnet</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">anthropic/claude-3-haiku</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">Claude 2 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">anthropic/claude-2.1</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">anthropic/claude-2.0</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">anthropic/claude-2</span></div>
          </div>
        </div>
      </div>

      <!-- Google Models -->
      <div class="models-list" data-provider-content="google">
        <div class="model-category">
          <div class="category-title">Gemini 2.0 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">google/gemini-2.0-flash-exp</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">google/gemini-2.0-flash-thinking-exp</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">Gemini 1.5 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">google/gemini-pro-1.5</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">google/gemini-pro-1.5-exp</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">google/gemini-flash-1.5</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">google/gemini-flash-1.5-8b</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">Gemini Pro Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">google/gemini-pro</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">google/gemini-pro-vision</span></div>
          </div>
        </div>
      </div>

      <!-- Meta Models -->
      <div class="models-list" data-provider-content="meta">
        <div class="model-category">
          <div class="category-title">Llama 3.3 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">meta-llama/llama-3.3-70b-instruct</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">Llama 3.2 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">meta-llama/llama-3.2-90b-vision-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">meta-llama/llama-3.2-11b-vision-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">meta-llama/llama-3.2-3b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">meta-llama/llama-3.2-1b-instruct</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">Llama 3.1 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">meta-llama/llama-3.1-405b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">meta-llama/llama-3.1-70b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">meta-llama/llama-3.1-8b-instruct</span></div>
          </div>
        </div>
      </div>

      <!-- Mistral Models -->
      <div class="models-list" data-provider-content="mistral">
        <div class="model-category">
          <div class="category-title">Mistral Large Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">mistralai/mistral-large</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">mistralai/mistral-large-2411</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">Pixtral Vision Models</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">mistralai/pixtral-large-2411</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">mistralai/pixtral-12b</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">Mistral Small & Medium</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">mistralai/mistral-small-3.2-24b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">mistralai/mistral-small-3.1-24b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">mistralai/mixtral-8x7b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">mistralai/mixtral-8x22b-instruct</span></div>
          </div>
        </div>
      </div>

      <!-- DeepSeek Models -->
      <div class="models-list" data-provider-content="deepseek">
        <div class="model-category">
          <div class="category-title">DeepSeek V3 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">deepseek/deepseek-chat</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">deepseek/deepseek-coder</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">DeepSeek R1 Reasoning</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">deepseek/deepseek-r1</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">deepseek/deepseek-r1-lite-preview</span></div>
          </div>
        </div>
      </div>

      <!-- Qwen Models -->
      <div class="models-list" data-provider-content="qwen">
        <div class="model-category">
          <div class="category-title">Qwen 2.5 Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">qwen/qwen-2.5-72b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">qwen/qwen-2.5-7b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">qwen/qwen-2.5-coder-32b-instruct</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">Qwen Vision Models</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">qwen/qwen2.5-vl-72b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">qwen/qwen2.5-vl-32b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">qwen/qwen-2.5-vl-7b-instruct</span></div>
          </div>
        </div>
        
        <div class="model-category">
          <div class="category-title">QwQ Reasoning Models</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">qwen/qwq-32b</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">qwen/qwq-32b-preview</span></div>
          </div>
        </div>
      </div>

      <!-- NVIDIA Models -->
      <div class="models-list" data-provider-content="nvidia">
        <div class="model-category">
          <div class="category-title">Llama Nemotron Family</div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">nvidia/llama-3.3-nemotron-super-49b-v1</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">nvidia/llama-3.1-nemotron-70b-instruct</span></div>
          </div>
          <div class="model-item">
            <div class="model-name"><span class="provider-prefix">openrouter:</span><span class="model-path">nvidia/llama-3.1-nemotron-ultra-253b-v1</span></div>
          </div>
        </div>
      </div>
    </div>
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
`;

// Auto-execute function with simple provider switching
(function() {
  // Add CSS immediately
  const style = document.createElement('style');
  style.textContent = aiModelsCSS;
  document.head.appendChild(style);
  
  // Initialize when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAIModelsPage);
  } else {
    initializeAIModelsPage();
  }
  
  function initializeAIModelsPage() {
    // Find main content area
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    // Insert content
    if (mainContent !== document.body) {
      mainContent.innerHTML = aiModelsHTML;
    } else {
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        header.insertAdjacentHTML('afterend', aiModelsHTML);
      } else {
        document.body.insertAdjacentHTML('afterbegin', aiModelsHTML);
      }
    }
    
    // Initialize provider switching
    initializeProviderSwitching();
  }
  
  function initializeProviderSwitching() {
    const providerTabs = document.querySelectorAll('.provider-tab');
    const modelsLists = document.querySelectorAll('.models-list');
    
    providerTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const provider = tab.dataset.provider;
        
        // Update active tab
        providerTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show corresponding models list
        modelsLists.forEach(list => {
          if (list.dataset.providerContent === provider) {
            // Hide all lists first
            modelsLists.forEach(l => {
              l.classList.remove('active');
            });
            
            // Show selected list with delay for smooth transition
            setTimeout(() => {
              list.classList.add('active');
            }, 150);
          }
        });
      });
    });
  }
})(); 
