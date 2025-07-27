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



/* Modal Popup - Matching Your Program's AI Model Selection Styling */
.model-modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.70);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);z-index:10000;display:none;align-items:center;justify-content:center;opacity:0;transition:opacity 0.3s ease}
.model-modal-overlay.active{display:flex;opacity:1}
.model-modal{background:rgba(0,0,0,0.95);border:1px solid rgba(255,255,255,0.3);border-radius:12px;padding:0;max-width:320px;width:90%;max-height:90vh;overflow-y:auto;position:relative;transform:scale(0.9);transition:transform 0.3s ease;box-shadow:0 25px 80px rgba(0,0,0,0.9),0 10px 40px rgba(0,0,0,0.8),0 -25px 80px rgba(0,0,0,0.9),0 -10px 40px rgba(0,0,0,0.8),0 0 0 1px rgba(255,255,255,0.15),inset 0 1px 0 rgba(255,255,255,0.1),inset 0 -1px 0 rgba(255,255,255,0.05);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);filter:drop-shadow(0 20px 60px rgba(0,0,0,0.8)) drop-shadow(0 -20px 60px rgba(0,0,0,0.8));color:white}
.model-modal-overlay.active .model-modal{transform:scale(1)}
.model-modal-header{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.1)}
.model-modal-close{background:none;border:none;color:rgba(255,255,255,0.6);font-size:16px;cursor:pointer;width:24px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all 0.15s ease}
.model-modal-close:hover{background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.8)}
.model-modal-title{color:rgba(255,255,255,0.8);font-size:14px;font-weight:500;margin:0;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif}
.model-modal-content{padding:16px}
.model-modal-name{color:rgb(243,244,246);font-size:16px;font-weight:600;margin-bottom:4px;letter-spacing:0.025em}
.model-modal-provider{color:#6b7280;font-size:12px;font-weight:500;margin-bottom:16px;text-transform:uppercase;letter-spacing:1px}
.model-modal-description{color:#cbd5e1;font-size:14px;line-height:1.5;margin-bottom:16px;font-weight:400}
.model-modal-specs{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:12px}
.model-spec-row{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.05)}
.model-spec-row:last-child{border-bottom:none}
.model-spec-label{color:#9ca3af;font-size:12px;font-weight:500}
.model-spec-value{color:rgb(243,244,246);font-size:12px;font-weight:600}

@media(max-width:768px){
  .ai-models-page{padding:15px;margin:60px auto}
  .ai-models-title{font-size:2rem}
  .provider-tabs{justify-content:flex-start;overflow-x:auto;padding-bottom:10px}
  .provider-tab{min-width:100px;font-size:12px;padding:10px 16px}
  .stats-overview{grid-template-columns:repeat(2,1fr);gap:16px}
  .model-modal{max-width:300px;margin:20px}
  .model-modal-content{padding:12px}
  .model-modal-specs{padding:8px}
  
  /* Mobile Footer Responsive */
  .ai-models-footer > div > div{
    flex-direction: column !important;
    text-align: center !important;
    gap: 20px !important;
  }
  
  .ai-models-footer .footer-separator{
    display: none !important;
  }
}

/* Footer Animation Styles */
.ai-models-footer{
  animation: footerFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.0s forwards !important;
}

@keyframes containerEntry{from{opacity:0;transform:translateY(30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes footerFadeIn{from{opacity:0;transform:scale(0.95) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}
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


  </div>

  <!-- Footer Section -->
  <footer
    data-card-stack
    class="ai-models-footer"
    style="
      position: relative;
      background-color: transparent;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
      opacity: 0;
      visibility: visible;
      transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform: scale(0.95) translateY(20px);
      margin-top: 80px;
    "
  >
    <!-- Main Footer Content -->
    <div style="max-width: 1400px; margin: 0 auto; padding: 28px 40px;">
      <!-- Single Row Content -->
      <div style="display: flex; justify-content: center; align-items: center; flex-wrap: nowrap; gap: 40px;">
        <!-- Left Side - Copyright -->
        <div style="display: flex; align-items: center; white-space: nowrap;">
          <span style="font-size: 14px; font-weight: 400; color: rgba(255, 255, 255, 0.6); letter-spacing: -0.01em;">
            © Steley 2025
          </span>
        </div>

        <span style="color: rgba(255, 255, 255, 0.2); font-size: 18px; line-height: 1; margin: 0 8px;" class="footer-separator">·</span>

        <!-- Center - Navigation Links -->
        <div style="display: flex; gap: 32px; align-items: center; flex-wrap: nowrap; white-space: nowrap;">
          <a
            href="#features"
            style="font-size: 14px; color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.3s ease; cursor: pointer;"
            onmouseover="this.style.color='#ffffff'"
            onmouseout="this.style.color='rgba(255, 255, 255, 0.6)'"
          >
            Features
          </a>
          <a
            href="/aimodels"
            style="font-size: 14px; color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.3s ease; cursor: pointer;"
            onmouseover="this.style.color='#ffffff'"
            onmouseout="this.style.color='rgba(255, 255, 255, 0.6)'"
          >
            AI Models
          </a>
          <a
            href="/document"
            style="font-size: 14px; color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.3s ease; cursor: pointer;"
            onmouseover="this.style.color='#ffffff'"
            onmouseout="this.style.color='rgba(255, 255, 255, 0.6)'"
          >
            Documentation
          </a>
        </div>

        <span style="color: rgba(255, 255, 255, 0.2); font-size: 18px; line-height: 1; margin: 0 8px;" class="footer-separator">·</span>

        <!-- Right Side - Legal & Social -->
        <div style="display: flex; align-items: center; gap: 32px;">
          <!-- Legal Links -->
          <div style="display: flex; gap: 24px; align-items: center; white-space: nowrap;">
            <a
              href="/privacy-policy"
              style="font-size: 14px; color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.3s ease; cursor: pointer; font-family: inherit;"
              onmouseover="this.style.color='#ffffff'"
              onmouseout="this.style.color='rgba(255, 255, 255, 0.6)'"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              style="font-size: 14px; color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.3s ease; cursor: pointer; font-family: inherit;"
              onmouseover="this.style.color='#ffffff'"
              onmouseout="this.style.color='rgba(255, 255, 255, 0.6)'"
            >
              Terms of Service
            </a>
          </div>

          <span style="color: rgba(255, 255, 255, 0.2); font-size: 18px; line-height: 1; margin: 0 8px;" class="footer-separator">·</span>

          <!-- Social Links -->
          <div style="display: flex; gap: 12px; align-items: center;">
            <!-- Twitter -->
            <a
              href="https://twitter.com/steley"
              target="_blank"
              rel="noopener noreferrer"
              style="width: 32px; height: 32px; border-radius: 6px; background-color: rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: center; color: rgba(255, 255, 255, 0.6); transition: all 0.3s ease; cursor: pointer;"
              onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'; this.style.color='#ffffff'"
              onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'; this.style.color='rgba(255, 255, 255, 0.6)'"
              aria-label="Twitter"
            >
              <div style="transform: scale(0.8);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
            </a>
            
            <!-- GitHub -->
            <a
              href="https://github.com/steley"
              target="_blank"
              rel="noopener noreferrer"
              style="width: 32px; height: 32px; border-radius: 6px; background-color: rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: center; color: rgba(255, 255, 255, 0.6); transition: all 0.3s ease; cursor: pointer;"
              onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'; this.style.color='#ffffff'"
              onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'; this.style.color='rgba(255, 255, 255, 0.6)'"
              aria-label="GitHub"
            >
              <div style="transform: scale(0.8);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </a>
            
            <!-- Discord -->
            <a
              href="https://discord.gg/steley"
              target="_blank"
              rel="noopener noreferrer"
              style="width: 32px; height: 32px; border-radius: 6px; background-color: rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: center; color: rgba(255, 255, 255, 0.6); transition: all 0.3s ease; cursor: pointer;"
              onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'; this.style.color='#ffffff'"
              onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'; this.style.color='rgba(255, 255, 255, 0.6)'"
              aria-label="Discord"
            >
              <div style="transform: scale(0.8);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0188 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

<!-- Model Information Modal -->
<div class="model-modal-overlay" id="modelModal">
  <div class="model-modal">
    <!-- Header -->
    <div class="model-modal-header">
      <h2 class="model-modal-title" id="modalTitle">Model Information</h2>
      <button class="model-modal-close" onclick="closeModelModal()">&times;</button>
    </div>
    
    <!-- Content -->
    <div class="model-modal-content">
      <div class="model-modal-name" id="modalName">Model Name</div>
      <div class="model-modal-provider" id="modalProvider">Provider</div>
      <div class="model-modal-description" id="modalDescription">Model description will appear here.</div>
      <div class="model-modal-specs" id="modalSpecs">
        <!-- Specs will be populated dynamically -->
      </div>
    </div>
  </div>
</div>
`;

// Auto-execute function with robust initialization (matching docs page pattern)
(function() {
  console.log('🎯 AI Models script starting...');
  
  // Add CSS immediately
  const style = document.createElement('style');
  style.textContent = aiModelsCSS;
  document.head.appendChild(style);
  console.log('✅ AI Models CSS added');
  
  // Immediately expose the navigation function globally
  window.loadAIModelsPage = initializeAIModelsPage;
  
  // Check immediately if we're on the AI models page
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;
  if (currentPath.includes('aimodels') || currentHash.includes('aimodels')) {
    console.log('🎯 AI Models page detected, loading immediately...');
    setTimeout(() => {
      initializeAIModelsPage();
    }, 100);
  }
  
  // Initialize when DOM is ready - matching docs page logic
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeAIModelsNavigation();
    });
  } else {
    initializeAIModelsNavigation();
  }
  
    // Listen for navigation to AI Models page
  function initializeAIModelsNavigation() {
    // Check if we should load AI models page immediately
    const shouldLoadAIModels = 
      window.location.pathname.includes('aimodels') || 
      window.location.pathname.includes('/aimodels') ||
      window.location.hash === '#aimodels';
    
    if (shouldLoadAIModels) {
      initializeAIModelsPage();
    }
    
    // Make navigation function globally accessible - IMPORTANT!
    window.loadAIModelsPage = initializeAIModelsPage;
    
    // Listen for hash/path changes (back/forward buttons)
    window.addEventListener('hashchange', function() {
      if (window.location.hash === '#aimodels' || window.location.pathname.includes('aimodels')) {
        initializeAIModelsPage();
      }
    });
    
    window.addEventListener('popstate', function() {
      if (window.location.pathname.includes('aimodels')) {
        initializeAIModelsPage();
      }
    });
  }
  
  function initializeAIModelsPage() {
    console.log('🚀 Initializing AI Models page...');
    
    // Check if AI models content is already loaded to avoid duplicates
    if (document.querySelector('.ai-models-page')) {
      console.log('AI Models page already loaded');
      return;
    }
    
    // Try to find main content area, otherwise use body - matching docs page
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
    console.log('📍 Main content element found:', mainContent.tagName);
    
    // Clear existing content in main area and add AI models content
    if (mainContent !== document.body) {
      mainContent.innerHTML = aiModelsHTML;
    } else {
      // If we're using body, insert at the beginning but after header
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        header.insertAdjacentHTML('afterend', aiModelsHTML);
      } else {
        document.body.insertAdjacentHTML('afterbegin', aiModelsHTML);
      }
    }
    
    // Scroll to top when loading AI models page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Initialize interactions with proper timing (matching docs page pattern)
    initializeAIModelsInteractions();
    
    console.log('✅ AI Models page loaded successfully');
  }
  
  function initializeAIModelsInteractions() {
    // Wait a bit for DOM to be fully ready - matching docs page timing
    setTimeout(() => {
      // Initialize provider switching
      initializeProviderSwitching();
      
      // Initialize model clicks with slight delay for better reliability
      setTimeout(() => {
        initializeModelClicks();
      }, 100);
      
      // Initialize modal close handlers with additional delay
      setTimeout(() => {
        initializeModalHandlers();
      }, 200);
      
      // Initialize footer scroll animation
      setTimeout(() => {
        initializeFooterAnimation();
      }, 300);
    }, 100);
  }
  
  function initializeProviderSwitching() {
    // Use robust element finding with retry logic
    const findAndAttachProviderListeners = () => {
      const providerTabs = document.querySelectorAll('.provider-tab');
      const modelsLists = document.querySelectorAll('.models-list');
      
      if (providerTabs.length === 0 || modelsLists.length === 0) {
        // Retry after a short delay if elements not found
        setTimeout(findAndAttachProviderListeners, 50);
        return;
      }
      
      providerTabs.forEach(tab => {
        // Remove any existing listeners to prevent duplicates
        const newTab = tab.cloneNode(true);
        tab.parentNode.replaceChild(newTab, tab);
        
        // Add click listener to the new element
        newTab.addEventListener('click', () => {
          const provider = newTab.dataset.provider;
          
          // Update active tab - get fresh elements
          const currentTabs = document.querySelectorAll('.provider-tab');
          const currentLists = document.querySelectorAll('.models-list');
          
          currentTabs.forEach(t => t.classList.remove('active'));
          newTab.classList.add('active');
          
          // Show corresponding models list
          currentLists.forEach(list => {
            if (list.dataset.providerContent === provider) {
              // Hide all lists first
              currentLists.forEach(l => {
                l.classList.remove('active');
              });
              
              // Show selected list with delay for smooth transition
              setTimeout(() => {
                list.classList.add('active');
                
                // Re-initialize model clicks for the newly shown list
                setTimeout(() => {
                  initializeModelClicks();
                }, 100);
              }, 150);
            }
          });
        });
      });
    };
    
    findAndAttachProviderListeners();
  }
  
  function initializeModelClicks() {
    // Use more robust element finding with retry logic
    const findAndAttachListeners = () => {
      const modelItems = document.querySelectorAll('.model-item');
      
      if (modelItems.length === 0) {
        // Retry after a short delay if elements not found
        setTimeout(findAndAttachListeners, 50);
        return;
      }
      
      modelItems.forEach(item => {
        // Remove any existing listeners to prevent duplicates
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        
        // Add click listener to the new element
        newItem.addEventListener('click', () => {
          const modelPathElement = newItem.querySelector('.model-path');
          if (modelPathElement) {
            const modelPath = modelPathElement.textContent;
            showModelModal(modelPath);
          }
        });
      });
    };
    
    findAndAttachListeners();
  }
  
  function showModelModal(modelPath) {
    const modal = document.getElementById('modelModal');
    const modelInfo = getModelInfo(modelPath);
    
    // Populate modal content
    document.getElementById('modalName').textContent = modelInfo.name;
    document.getElementById('modalProvider').textContent = modelInfo.provider;
    document.getElementById('modalDescription').textContent = modelInfo.description;
    
    // Populate specs
    const specsContainer = document.getElementById('modalSpecs');
    specsContainer.innerHTML = '';
    
    modelInfo.specs.forEach(spec => {
      const specRow = document.createElement('div');
      specRow.className = 'model-spec-row';
      specRow.innerHTML = `
        <div class="model-spec-label">${spec.label}</div>
        <div class="model-spec-value">${spec.value}</div>
      `;
      specsContainer.appendChild(specRow);
    });
    
    // Show modal
    modal.classList.add('active');
  }
  
  function closeModelModal() {
    const modal = document.getElementById('modelModal');
    modal.classList.remove('active');
  }
  
  // Make closeModelModal globally accessible for the onclick attribute
  window.closeModelModal = closeModelModal;
  
  function initializeModalHandlers() {
    // Close modal when clicking overlay
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('model-modal-overlay')) {
        closeModelModal();
      }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModelModal();
      }
    });
  }
  
  function initializeFooterAnimation() {
    // Card stack scroll animation for footer
    const handleScroll = () => {
      const cards = document.querySelectorAll("[data-card-stack]");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardTop = rect.top;
        const cardHeight = rect.height;

        // Calculate progress based on scroll position
        const progress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - cardTop) / (windowHeight + cardHeight)
          )
        );

        // Apply stacking effect
        if (progress > 0 && progress < 1) {
          const scale = 0.95 + progress * 0.05;
          const translateY = (1 - progress) * 20;
          const opacity = 0.3 + progress * 0.7;

          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          card.style.opacity = opacity.toString();
        } else if (progress >= 1) {
          card.style.transform = "scale(1) translateY(0px)";
          card.style.opacity = "1";
        } else {
          card.style.transform = "scale(0.95) translateY(20px)";
          card.style.opacity = "0.3";
        }
      });
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    console.log('✅ Footer scroll animation initialized');
  }
  
  function getModelInfo(modelPath) {
    const modelDatabase = {
      'openai/o3': {
        name: 'OpenAI O3',
        provider: 'OpenAI',
        description: 'The most advanced reasoning model from OpenAI. O3 excels at complex problem-solving, mathematical reasoning, and multi-step logical thinking. Designed for tasks requiring deep analysis and sophisticated reasoning capabilities.',
        specs: [
          { label: 'Type', value: 'Reasoning Model' },
          { label: 'Context Length', value: '200,000 tokens' },
          { label: 'Best For', value: 'Complex reasoning, math, logic' },
          { label: 'Release', value: '2024' }
        ]
      },
      'openai/o3-pro': {
        name: 'OpenAI O3 Pro',
        provider: 'OpenAI',
        description: 'The premium version of O3 with enhanced reasoning capabilities and longer context windows. Optimized for professional use cases requiring the highest level of analytical thinking and problem-solving.',
        specs: [
          { label: 'Type', value: 'Advanced Reasoning' },
          { label: 'Context Length', value: '1,000,000 tokens' },
          { label: 'Best For', value: 'Professional reasoning tasks' },
          { label: 'Performance', value: 'Highest tier' }
        ]
      },
      'openai/o3-mini': {
        name: 'OpenAI O3 Mini',
        provider: 'OpenAI',
        description: 'A smaller, faster version of O3 that maintains strong reasoning capabilities while being more cost-effective. Perfect for applications requiring quick reasoning without the full computational overhead.',
        specs: [
          { label: 'Type', value: 'Efficient Reasoning' },
          { label: 'Context Length', value: '128,000 tokens' },
          { label: 'Best For', value: 'Fast reasoning, cost-effective' },
          { label: 'Speed', value: 'High' }
        ]
      },
      'openai/gpt-4o': {
        name: 'GPT-4 Omni',
        provider: 'OpenAI',
        description: 'OpenAI\'s flagship multimodal model that can process text, images, audio, and video. Combines the intelligence of GPT-4 with enhanced speed and efficiency across all modalities.',
        specs: [
          { label: 'Type', value: 'Multimodal' },
          { label: 'Context Length', value: '128,000 tokens' },
          { label: 'Modalities', value: 'Text, Image, Audio, Video' },
          { label: 'Best For', value: 'General purpose, multimodal tasks' }
        ]
      },
      'anthropic/claude-3.5-sonnet': {
        name: 'Claude 3.5 Sonnet',
        provider: 'Anthropic',
        description: 'Anthropic\'s most intelligent model, offering superior performance on writing, math, coding, and complex reasoning tasks. Known for its nuanced understanding and thoughtful responses.',
        specs: [
          { label: 'Type', value: 'Large Language Model' },
          { label: 'Context Length', value: '200,000 tokens' },
          { label: 'Best For', value: 'Writing, coding, analysis' },
          { label: 'Strengths', value: 'Reasoning, helpfulness' }
        ]
      },
      'google/gemini-2.0-flash-exp': {
        name: 'Gemini 2.0 Flash',
        provider: 'Google',
        description: 'Google\'s next-generation multimodal AI model with breakthrough performance in reasoning, coding, and multimodal understanding. Features enhanced speed and efficiency.',
        specs: [
          { label: 'Type', value: 'Multimodal' },
          { label: 'Context Length', value: '1,000,000 tokens' },
          { label: 'Modalities', value: 'Text, Image, Audio, Video' },
          { label: 'Best For', value: 'Fast multimodal tasks' }
        ]
      },
      'meta-llama/llama-3.3-70b-instruct': {
        name: 'Llama 3.3 70B',
        provider: 'Meta',
        description: 'Meta\'s latest open-source language model with 70 billion parameters. Offers excellent performance on a wide range of tasks while being efficient and accessible.',
        specs: [
          { label: 'Type', value: 'Open Source LLM' },
          { label: 'Parameters', value: '70 billion' },
          { label: 'Context Length', value: '128,000 tokens' },
          { label: 'Best For', value: 'General purpose, open source' }
        ]
      },
      'deepseek/deepseek-r1': {
        name: 'DeepSeek R1',
        provider: 'DeepSeek',
        description: 'DeepSeek\'s reasoning-focused model that rivals top proprietary models in mathematical and logical reasoning while being more cost-effective.',
        specs: [
          { label: 'Type', value: 'Reasoning Model' },
          { label: 'Context Length', value: '64,000 tokens' },
          { label: 'Best For', value: 'Math, logic, reasoning' },
          { label: 'Cost', value: 'Very competitive' }
        ]
      }
    };
    
    // Default fallback for models not in database
    const defaultInfo = {
      name: modelPath.split('/').pop().replace(/-/g, ' ').toUpperCase(),
      provider: modelPath.split('/')[0].replace(/openrouter:/, '').toUpperCase(),
      description: 'This is a high-performance AI model optimized for various tasks including text generation, analysis, and problem-solving. Part of a comprehensive suite of AI models available through Steley.',
      specs: [
        { label: 'Type', value: 'Language Model' },
        { label: 'Access', value: 'Unlimited' },
        { label: 'Cost', value: '$0/month' },
        { label: 'Available', value: 'Now' }
      ]
    };
    
    return modelDatabase[modelPath] || defaultInfo;
  }
})(); 
