// Steley AI Models Page - Provider Switcher Interface
// Redesigned: Modern provider-based organization with comprehensive model coverage
// Added: All major providers from OpenRouter API with clean switching interface
const aiModelsCSS = `
.ai-models-page{max-width:1400px;margin:80px auto;padding:20px;position:relative;z-index:999}
.ai-models-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s forwards;position:relative;z-index:1000}
.ai-models-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6b7280;animation:spin 3s linear infinite}
.ai-models-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#9ca3af 50%,#6b7280 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:20px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards}
.ai-models-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;text-align:center;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards}

/* Provider Switcher Interface */
.provider-switcher{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:30px;margin-bottom:40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s forwards}

.provider-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:30px;justify-content:center}
.provider-tab{padding:12px 24px;border-radius:50px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02);color:#9ca3af;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.3s ease;display:flex;align-items:center;gap:8px;min-width:120px;justify-content:center}
.provider-tab:hover{border-color:rgba(255,255,255,0.2);background:rgba(255,255,255,0.05);color:#cbd5e1}
.provider-tab.active{background:linear-gradient(135deg,#3b82f6,#1d4ed8);border-color:#3b82f6;color:#fff;box-shadow:0 4px 15px rgba(59,130,246,0.3)}
.provider-tab.active:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(59,130,246,0.4)}

.provider-icon{width:20px;height:20px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600}

/* Models Grid */
.models-container{min-height:400px;position:relative}
.models-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;opacity:0;transform:translateY(20px);transition:all 0.5s ease}
.models-grid.active{opacity:1;transform:translateY(0)}

.model-card{background:rgba(255,255,255,0.02);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.05);border-radius:16px;padding:20px;transition:all 0.3s ease;cursor:pointer;position:relative;overflow:hidden}
.model-card:hover{transform:translateY(-3px);border-color:rgba(255,255,255,0.15);background:rgba(255,255,255,0.04);box-shadow:0 10px 30px rgba(0,0,0,0.2)}
.model-card.flagship{border-color:rgba(34,197,94,0.4);background:rgba(34,197,94,0.02)}
.model-card.flagship::before{content:'FLAGSHIP';position:absolute;top:12px;right:12px;background:linear-gradient(135deg,#10b981,#059669);color:#fff;font-size:9px;font-weight:700;padding:3px 8px;border-radius:8px;letter-spacing:0.5px}

.model-header{margin-bottom:12px}
.model-name{font-size:1.1rem;font-weight:600;color:#fff;margin:0 0 4px 0;display:flex;align-items:center;gap:8px}
.model-tier{font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;background:rgba(107,114,128,0.1);padding:2px 6px;border-radius:4px}
.model-description{color:#94a3b8;font-size:0.85rem;line-height:1.4;margin-bottom:12px}

.model-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}
.stat-item{text-align:center;padding:8px;background:rgba(255,255,255,0.02);border-radius:8px}
.stat-label{font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px}
.stat-value{font-size:12px;color:#cbd5e1;font-weight:500}

.model-capabilities{display:flex;flex-wrap:wrap;gap:4px}
.capability-tag{background:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.2);color:#9ca3af;font-size:10px;font-weight:500;padding:3px 8px;border-radius:8px}

/* Stats Overview */
.stats-overview{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin:40px 0;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.6s forwards}
.stat-card{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:20px;text-align:center}
.stat-number{font-size:2.5rem;font-weight:800;color:#fff;margin-bottom:8px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.stat-label{color:#9ca3af;font-size:0.9rem;font-weight:500}

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
  .models-grid{grid-template-columns:1fr;gap:16px}
  .stats-overview{grid-template-columns:repeat(2,1fr);gap:16px}
}

@keyframes containerEntry{from{opacity:0;transform:translateY(30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
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
      <div class="provider-tab active" data-provider="openai">
        <div class="provider-icon" style="background: linear-gradient(135deg, #10b981, #059669); color: white;">AI</div>
        OpenAI
      </div>
      <div class="provider-tab" data-provider="anthropic">
        <div class="provider-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white;">A</div>
        Anthropic
      </div>
      <div class="provider-tab" data-provider="google">
        <div class="provider-icon" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white;">G</div>
        Google
      </div>
      <div class="provider-tab" data-provider="meta">
        <div class="provider-icon" style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white;">M</div>
        Meta
      </div>
      <div class="provider-tab" data-provider="mistral">
        <div class="provider-icon" style="background: linear-gradient(135deg, #64748b, #475569); color: white;">Mi</div>
        Mistral
      </div>
      <div class="provider-tab" data-provider="deepseek">
        <div class="provider-icon" style="background: linear-gradient(135deg, #ec4899, #db2777); color: white;">D</div>
        DeepSeek
      </div>
      <div class="provider-tab" data-provider="qwen">
        <div class="provider-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white;">Q</div>
        Qwen
      </div>
      <div class="provider-tab" data-provider="nvidia">
        <div class="provider-icon" style="background: linear-gradient(135deg, #10b981, #059669); color: white;">N</div>
        NVIDIA
      </div>
    </div>

    <div class="models-container">
      <!-- OpenAI Models -->
      <div class="models-grid active" data-provider-content="openai">
        <div class="model-card flagship">
          <div class="model-header">
            <div class="model-name">
              O3 Pro
              <span class="model-tier">Flagship</span>
            </div>
            <div class="model-description">Most advanced reasoning model with exceptional problem-solving capabilities</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">200K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Medium</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Reasoning</span>
            <span class="capability-tag">Mathematics</span>
            <span class="capability-tag">Coding</span>
          </div>
        </div>

        <div class="model-card">
          <div class="model-header">
            <div class="model-name">
              GPT-4o
              <span class="model-tier">Multimodal</span>
            </div>
            <div class="model-description">Flagship multimodal model with vision and reasoning capabilities</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">128K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Vision</span>
            <span class="capability-tag">Code</span>
            <span class="capability-tag">Analysis</span>
          </div>
        </div>

        <div class="model-card">
          <div class="model-header">
            <div class="model-name">
              O1 Pro
              <span class="model-tier">Reasoning</span>
            </div>
            <div class="model-description">Advanced step-by-step reasoning for complex problem solving</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">200K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Slow</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Logic</span>
            <span class="capability-tag">Math Proofs</span>
            <span class="capability-tag">Research</span>
          </div>
        </div>

        <div class="model-card">
          <div class="model-header">
            <div class="model-name">
              GPT-4o Mini
              <span class="model-tier">Efficient</span>
            </div>
            <div class="model-description">Fast and cost-effective model for everyday tasks</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">128K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Ultra Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Quick Tasks</span>
            <span class="capability-tag">Chat</span>
            <span class="capability-tag">Summarization</span>
          </div>
        </div>
      </div>

      <!-- Anthropic Models -->
      <div class="models-grid" data-provider-content="anthropic">
        <div class="model-card flagship">
          <div class="model-header">
            <div class="model-name">
              Claude 3.5 Sonnet
              <span class="model-tier">Flagship</span>
            </div>
            <div class="model-description">Most capable model with exceptional reasoning and analysis</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">200K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Analysis</span>
            <span class="capability-tag">Writing</span>
            <span class="capability-tag">Reasoning</span>
          </div>
        </div>

        <div class="model-card">
          <div class="model-header">
            <div class="model-name">
              Claude 3 Opus
              <span class="model-tier">Premium</span>
            </div>
            <div class="model-description">Most powerful model for complex tasks and creative work</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">200K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Medium</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Complex Tasks</span>
            <span class="capability-tag">Creative</span>
            <span class="capability-tag">Research</span>
          </div>
        </div>

        <div class="model-card">
          <div class="model-header">
            <div class="model-name">
              Claude 3 Haiku
              <span class="model-tier">Fast</span>
            </div>
            <div class="model-description">Quick and efficient model for everyday interactions</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">200K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Ultra Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Chat</span>
            <span class="capability-tag">Q&A</span>
            <span class="capability-tag">Summarization</span>
          </div>
        </div>
      </div>

      <!-- Google Models -->
      <div class="models-grid" data-provider-content="google">
        <div class="model-card flagship">
          <div class="model-header">
            <div class="model-name">
              Gemini 2.0 Flash
              <span class="model-tier">Flagship</span>
            </div>
            <div class="model-description">Next-generation multimodal AI with lightning speed</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">1M</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Ultra Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Multimodal</span>
            <span class="capability-tag">Real-time</span>
            <span class="capability-tag">Code</span>
          </div>
        </div>

        <div class="model-card">
          <div class="model-header">
            <div class="model-name">
              Gemini Pro 1.5
              <span class="model-tier">Advanced</span>
            </div>
            <div class="model-description">Advanced reasoning with massive context window</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">2M</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Medium</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Long Context</span>
            <span class="capability-tag">Analysis</span>
            <span class="capability-tag">Documents</span>
          </div>
        </div>
      </div>

      <!-- Meta Models -->
      <div class="models-grid" data-provider-content="meta">
        <div class="model-card flagship">
          <div class="model-header">
            <div class="model-name">
              Llama 3.3 70B
              <span class="model-tier">Flagship</span>
            </div>
            <div class="model-description">Latest and most capable open-source model from Meta</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">128K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">General</span>
            <span class="capability-tag">Reasoning</span>
            <span class="capability-tag">Open Source</span>
          </div>
        </div>

        <div class="model-card">
          <div class="model-header">
            <div class="model-name">
              Llama 3.1 405B
              <span class="model-tier">Ultra</span>
            </div>
            <div class="model-description">Massive open-source model with exceptional capabilities</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">128K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Medium</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Complex Tasks</span>
            <span class="capability-tag">Research</span>
            <span class="capability-tag">Code</span>
          </div>
        </div>
      </div>

      <!-- Mistral Models -->
      <div class="models-grid" data-provider-content="mistral">
        <div class="model-card flagship">
          <div class="model-header">
            <div class="model-name">
              Mistral Large 2
              <span class="model-tier">Flagship</span>
            </div>
            <div class="model-description">European flagship model with strong multilingual capabilities</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">128K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Multilingual</span>
            <span class="capability-tag">Reasoning</span>
            <span class="capability-tag">Code</span>
          </div>
        </div>

        <div class="model-card">
          <div class="model-header">
            <div class="model-name">
              Pixtral Large
              <span class="model-tier">Vision</span>
            </div>
            <div class="model-description">Advanced vision-language model for image understanding</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">128K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Vision</span>
            <span class="capability-tag">OCR</span>
            <span class="capability-tag">Charts</span>
          </div>
        </div>
      </div>

      <!-- DeepSeek Models -->
      <div class="models-grid" data-provider-content="deepseek">
        <div class="model-card flagship">
          <div class="model-header">
            <div class="model-name">
              DeepSeek V3
              <span class="model-tier">Flagship</span>
            </div>
            <div class="model-description">Cutting-edge model with exceptional coding and math abilities</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">64K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Coding</span>
            <span class="capability-tag">Mathematics</span>
            <span class="capability-tag">Innovation</span>
          </div>
        </div>

        <div class="model-card">
          <div class="model-header">
            <div class="model-name">
              DeepSeek Coder V2
              <span class="model-tier">Coding</span>
            </div>
            <div class="model-description">Specialized coding model for programming tasks</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">128K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Code Gen</span>
            <span class="capability-tag">Debug</span>
            <span class="capability-tag">Algorithms</span>
          </div>
        </div>
      </div>

      <!-- Qwen Models -->
      <div class="models-grid" data-provider-content="qwen">
        <div class="model-card flagship">
          <div class="model-header">
            <div class="model-name">
              Qwen 2.5 VL 72B
              <span class="model-tier">Flagship</span>
            </div>
            <div class="model-description">Top-tier multimodal model with exceptional OCR capabilities</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">32K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Medium</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">OCR</span>
            <span class="capability-tag">Charts</span>
            <span class="capability-tag">Documents</span>
          </div>
        </div>

        <div class="model-card">
          <div class="model-header">
            <div class="model-name">
              QwQ 32B
              <span class="model-tier">Reasoning</span>
            </div>
            <div class="model-description">Reasoning-focused model for complex problem solving</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">32K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Medium</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Logic</span>
            <span class="capability-tag">Problem Solving</span>
            <span class="capability-tag">Analysis</span>
          </div>
        </div>
      </div>

      <!-- NVIDIA Models -->
      <div class="models-grid" data-provider-content="nvidia">
        <div class="model-card flagship">
          <div class="model-header">
            <div class="model-name">
              Llama 3.3 Nemotron
              <span class="model-tier">Flagship</span>
            </div>
            <div class="model-description">NVIDIA's optimized model for enterprise applications</div>
          </div>
          <div class="model-stats">
            <div class="stat-item">
              <div class="stat-label">Context</div>
              <div class="stat-value">128K</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Speed</div>
              <div class="stat-value">Fast</div>
            </div>
          </div>
          <div class="model-capabilities">
            <span class="capability-tag">Enterprise</span>
            <span class="capability-tag">Optimized</span>
            <span class="capability-tag">Reliable</span>
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

// Auto-execute function with provider switching functionality
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
    const modelsGrids = document.querySelectorAll('.models-grid');
    
    providerTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const provider = tab.dataset.provider;
        
        // Update active tab
        providerTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show corresponding models grid
        modelsGrids.forEach(grid => {
          if (grid.dataset.providerContent === provider) {
            // Hide all grids first
            modelsGrids.forEach(g => {
              g.classList.remove('active');
            });
            
            // Show selected grid with delay for smooth transition
            setTimeout(() => {
              grid.classList.add('active');
            }, 200);
          }
        });
      });
    });
  }
})(); 
