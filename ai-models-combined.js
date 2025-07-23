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
  // Add CSS immediately
  const style = document.createElement('style');
  style.textContent = aiModelsCSS;
  document.head.appendChild(style);
  
  // Initialize when DOM is ready - matching docs page logic
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeAIModelsPage();
    });
  } else {
    initializeAIModelsPage();
  }
  
  function initializeAIModelsPage() {
    // Try to find main content area, otherwise use body - matching docs page
    const mainContent = document.querySelector('main') || 
                       document.querySelector('.main-content') || 
                       document.querySelector('[data-framer-name="Content"]') ||
                       document.querySelector('.framer-page-content') ||
                       document.body;
    
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
    
    // Initialize interactions with proper timing (matching docs page pattern)
    initializeAIModelsInteractions();
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
