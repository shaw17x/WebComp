// AI Models Page Combined - CSS + HTML Content with Documentation-Style Animations
// Added: Fade-in animations matching documentation page
// Added: Staggered section animations for smooth loading experience
const aiModelsCSS = `
.ai-models-page{max-width:1200px;margin:80px auto;padding:20px;position:relative;z-index:999}
.ai-models-badge{display:inline-flex;align-items:center;gap:8px;background-color:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.3);border-radius:20px;padding:6px 16px;margin-bottom:16px;font-size:12px;font-weight:500;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s forwards;position:relative;z-index:1000}
.ai-models-badge-dot{width:6px;height:6px;border-radius:50%;background-color:#6b7280;animation:spin 3s linear infinite}
.ai-models-title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#fff 0%,#9ca3af 50%,#6b7280 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards}
.ai-models-subtitle{font-size:1.2rem;color:#94a3b8;font-weight:400;margin:0 0 40px 0;text-align:center;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);animation:containerEntry 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards}

/* AI Models Grid */
.ai-models-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:30px;margin:60px 0;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.ai-models-grid.models-animated{opacity:1;transform:translateY(0) scale(1)}
.ai-model-card{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:30px;transition:all 0.3s ease;position:relative;overflow:hidden}
.ai-model-card:hover{transform:translateY(-5px) scale(1)!important;border-color:rgba(255,255,255,0.2);box-shadow:0 20px 40px rgba(10,14,26,0.3);transition:all 0.3s cubic-bezier(0.4,0,0.2,1)}
.ai-model-card.flagship{border-color:rgba(107,114,128,0.4);background:#0a0e1a}
.ai-model-card.flagship::before{content:'FLAGSHIP';position:absolute;top:20px;right:20px;background:linear-gradient(135deg,#6b7280,#9ca3af);color:#fff;font-size:10px;font-weight:700;padding:4px 12px;border-radius:12px;letter-spacing:0.5px}

.model-header{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.model-icon{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px}
.model-provider{font-size:12px;color:#94a3b8;font-weight:500;text-transform:uppercase;letter-spacing:0.5px}
.model-name{font-size:1.3rem;font-weight:700;color:#fff;margin:0}
.model-description{color:#cbd5e1;font-size:0.95rem;margin:16px 0 20px 0;line-height:1.6}

.model-capabilities{margin:20px 0}
.capabilities-title{font-size:0.9rem;font-weight:600;color:#9ca3af;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px}
.capabilities-list{display:flex;flex-wrap:wrap;gap:8px}
.capability-tag{background:rgba(107,114,128,0.15);border:1px solid rgba(107,114,128,0.3);color:#cbd5e1;font-size:0.8rem;font-weight:500;padding:4px 10px;border-radius:12px}

.model-stats{margin:20px 0}
.stat-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.stat-label{color:#94a3b8;font-size:0.85rem;font-weight:500}
.stat-value{color:#fff;font-weight:600;font-size:0.85rem}

.model-best-for{margin:20px 0}
.best-for-title{font-size:0.9rem;font-weight:600;color:#9ca3af;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px}
.best-for-list{list-style:none;padding:0;margin:0}
.best-for-list li{color:#cbd5e1;font-size:0.85rem;margin-bottom:6px;padding-left:16px;position:relative;line-height:1.4}
.best-for-list li::before{content:'→';position:absolute;left:0;color:#6b7280;font-weight:bold}

/* Scaling Features Section */
.scaling-section{margin:80px 0;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.scaling-section.models-animated{opacity:1;transform:translateY(0) scale(1)}
.scaling-title{font-size:2.5rem;font-weight:700;color:#fff;text-align:center;margin-bottom:20px}
.scaling-subtitle{font-size:1.1rem;color:#94a3b8;text-align:center;margin-bottom:50px;line-height:1.6}

.scaling-features{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px}
.scaling-feature{background:#0a0e1a;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;transition:all 0.3s ease}
.scaling-feature:hover{border-color:rgba(255,255,255,0.2);transform:translateY(-3px)}

.feature-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px}
.feature-title{font-size:1.2rem;font-weight:600;color:#fff;margin-bottom:12px}
.feature-description{color:#cbd5e1;font-size:0.95rem;line-height:1.6}

/* Back to Home Button */
.back-home-container{text-align:center;margin:60px auto 40px;position:relative;z-index:1000;opacity:0;transform:translateY(30px) scale(0.95);transition:all 1.2s cubic-bezier(0.25,0.46,0.45,0.94)}
.back-home-btn{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#9ca3af 0%,#d1d5db 100%);border:none;border-radius:0.5rem;padding:1rem 2.5rem;font-size:1.125rem;font-weight:600;color:#1f2937;text-decoration:none;transition:all 0.3s cubic-bezier(0.4,0,0.2,1);cursor:pointer;position:relative;overflow:hidden;box-shadow:0 4px 15px rgba(107,114,128,0.2)}
.back-home-btn:hover{transform:translateY(-2px);background:linear-gradient(135deg,#6b7280 0%,#9ca3af 100%);box-shadow:0 10px 25px rgba(107,114,128,0.3)}
.back-home-btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transform:translateY(0);transition:left 1.5s ease;animation:none;pointer-events:none}
.back-home-btn:hover::before{left:100%;animation:shimmer 1.5s infinite}
.back-home-btn svg{width:18px;height:18px;transition:transform 0.3s ease;position:relative;z-index:1;color:#1f2937}
.back-home-btn:hover svg{transform:translateX(-4px)}

@keyframes shimmer{0%{left:-100%}100%{left:100%}}

@media(max-width:768px){
  .ai-models-page{padding:15px;margin:60px auto}
  .ai-models-title{font-size:2rem}
  .ai-models-grid{grid-template-columns:1fr;gap:20px}
  .ai-model-card{padding:24px}
  .back-home-btn{font-size:14px;padding:12px 24px}
}

@keyframes containerEntry{from{opacity:0;transform:translateY(30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes badgeEntry{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
`;

const aiModelsHTML = `
<div class="ai-models-page">
  <div style="text-align: center;">
    <div class="ai-models-badge">
      <div class="ai-models-badge-dot"></div>
      Ghost Pilot AI Models
    </div>
  </div>
  <h1 class="ai-models-title">Unlimited AI Access</h1>
  <p class="ai-models-subtitle">Access the world's most powerful AI models with no tokens, no limits, no restrictions. Perfect for interviews, exams, and assessments.</p>
  
  <!-- AI Models Grid -->
  <div class="ai-models-grid">
    
    <!-- OpenAI O3 - Flagship -->
    <div class="ai-model-card flagship">
      <div class="model-header">
        <div class="model-icon" style="background: linear-gradient(135deg, #10b981, #059669); color: white;"></div>
        <div>
          <div class="model-provider">OpenAI</div>
          <h3 class="model-name">O3</h3>
        </div>
      </div>
      <p class="model-description">OpenAI's most advanced reasoning model with exceptional problem-solving capabilities. Perfect for complex coding interviews and mathematical assessments.</p>
      
      <div class="model-capabilities">
        <div class="capabilities-title">Capabilities</div>
        <div class="capabilities-list">
          <span class="capability-tag">Advanced Reasoning</span>
          <span class="capability-tag">Code Generation</span>
          <span class="capability-tag">Problem Solving</span>
          <span class="capability-tag">Mathematics</span>
        </div>
      </div>

      <div class="model-stats">
        <div class="stat-row">
          <span class="stat-label">Context Window</span>
          <span class="stat-value">200K tokens</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Response Speed</span>
          <span class="stat-value">Medium</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Quality Rating</span>
          <span class="stat-value">★★★★★</span>
        </div>
      </div>

      <div class="model-best-for">
        <div class="best-for-title">Best For</div>
        <ul class="best-for-list">
          <li>Complex coding interviews (LeetCode Hard)</li>
          <li>Mathematical problem solving</li>
          <li>Algorithm optimization challenges</li>
          <li>Research-level assessments</li>
        </ul>
      </div>
    </div>

    <!-- GPT-4o -->
    <div class="ai-model-card">
      <div class="model-header">
        <div class="model-icon" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white;">👁️</div>
        <div>
          <div class="model-provider">OpenAI</div>
          <h3 class="model-name">GPT-4o</h3>
        </div>
      </div>
      <p class="model-description">Flagship multimodal model with excellent vision capabilities. Analyzes screenshots, code, diagrams, and provides comprehensive solutions for any assessment format.</p>
      
      <div class="model-capabilities">
        <div class="capabilities-title">Capabilities</div>
        <div class="capabilities-list">
          <span class="capability-tag">Vision Processing</span>
          <span class="capability-tag">Code Analysis</span>
          <span class="capability-tag">Text Generation</span>
          <span class="capability-tag">Multimodal</span>
        </div>
      </div>

      <div class="model-stats">
        <div class="stat-row">
          <span class="stat-label">Context Window</span>
          <span class="stat-value">128K tokens</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Response Speed</span>
          <span class="stat-value">Fast</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Quality Rating</span>
          <span class="stat-value">★★★★★</span>
        </div>
      </div>

      <div class="model-best-for">
        <div class="best-for-title">Best For</div>
        <ul class="best-for-list">
          <li>Screenshot analysis (MCQs, coding problems)</li>
          <li>Online exam assistance</li>
          <li>Diagram interpretation</li>
          <li>Multi-format assessments</li>
        </ul>
      </div>
    </div>

    <!-- Claude Opus 4 -->
    <div class="ai-model-card">
      <div class="model-header">
        <div class="model-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white;">🎭</div>
        <div>
          <div class="model-provider">Anthropic</div>
          <h3 class="model-name">Claude Opus 4</h3>
        </div>
      </div>
      <p class="model-description">Anthropic's most capable model with exceptional reasoning and writing abilities. Excels at essay questions, technical explanations, and complex analysis tasks.</p>
      
      <div class="model-capabilities">
        <div class="capabilities-title">Capabilities</div>
        <div class="capabilities-list">
          <span class="capability-tag">Long-form Writing</span>
          <span class="capability-tag">Analysis</span>
          <span class="capability-tag">Reasoning</span>
          <span class="capability-tag">Safety</span>
        </div>
      </div>

      <div class="model-stats">
        <div class="stat-row">
          <span class="stat-label">Context Window</span>
          <span class="stat-value">200K tokens</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Response Speed</span>
          <span class="stat-value">Medium</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Quality Rating</span>
          <span class="stat-value">★★★★★</span>
        </div>
      </div>

      <div class="model-best-for">
        <div class="best-for-title">Best For</div>
        <ul class="best-for-list">
          <li>Essay-based assessments</li>
          <li>Technical writing tasks</li>
          <li>Complex analysis questions</li>
          <li>Academic research projects</li>
        </ul>
      </div>
    </div>

    <!-- Gemini 2.0 Flash -->
    <div class="ai-model-card">
      <div class="model-header">
        <div class="model-icon" style="background: linear-gradient(135deg, #10b981, #059669); color: white;"></div>
        <div>
          <div class="model-provider">Google</div>
          <h3 class="model-name">Gemini 2.0 Flash</h3>
        </div>
      </div>
      <p class="model-description">Google's lightning-fast multimodal AI with excellent code understanding and rapid response times. Perfect for time-pressured assessments and quick problem solving.</p>
      
      <div class="model-capabilities">
        <div class="capabilities-title">Capabilities</div>
        <div class="capabilities-list">
          <span class="capability-tag">Ultra-fast</span>
          <span class="capability-tag">Multimodal</span>
          <span class="capability-tag">Code Generation</span>
          <span class="capability-tag">Real-time</span>
        </div>
      </div>

      <div class="model-stats">
        <div class="stat-row">
          <span class="stat-label">Context Window</span>
          <span class="stat-value">1M tokens</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Response Speed</span>
          <span class="stat-value">Ultra-fast</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Quality Rating</span>
          <span class="stat-value">★★★★☆</span>
        </div>
      </div>

      <div class="model-best-for">
        <div class="best-for-title">Best For</div>
        <ul class="best-for-list">
          <li>Time-pressured coding tests</li>
          <li>Real-time interview assistance</li>
          <li>Quick question answering</li>
          <li>Fast document analysis</li>
        </ul>
      </div>
    </div>

    <!-- Qwen 2.5 VL 72B -->
    <div class="ai-model-card">
      <div class="model-header">
        <div class="model-icon" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white;"></div>
        <div>
          <div class="model-provider">Alibaba</div>
          <h3 class="model-name">Qwen 2.5 VL 72B</h3>
        </div>
      </div>
      <p class="model-description">Top-tier multimodal model with exceptional OCR and chart analysis capabilities. Excels at reading complex diagrams, tables, and handwritten content in assessments.</p>
      
      <div class="model-capabilities">
        <div class="capabilities-title">Capabilities</div>
        <div class="capabilities-list">
          <span class="capability-tag">OCR Excellence</span>
          <span class="capability-tag">Chart Analysis</span>
          <span class="capability-tag">Document Reading</span>
          <span class="capability-tag">Vision AI</span>
        </div>
      </div>

      <div class="model-stats">
        <div class="stat-row">
          <span class="stat-label">Context Window</span>
          <span class="stat-value">32K tokens</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Response Speed</span>
          <span class="stat-value">Medium</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Quality Rating</span>
          <span class="stat-value">★★★★★</span>
        </div>
      </div>

      <div class="model-best-for">
        <div class="best-for-title">Best For</div>
        <ul class="best-for-list">
          <li>Complex diagrams & charts</li>
          <li>Handwritten text recognition</li>
          <li>Mathematical formulas</li>
          <li>Technical document analysis</li>
        </ul>
      </div>
    </div>

    <!-- O1 Pro -->
    <div class="ai-model-card">
      <div class="model-header">
        <div class="model-icon" style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white;"></div>
        <div>
          <div class="model-provider">OpenAI</div>
          <h3 class="model-name">O1 Pro</h3>
        </div>
      </div>
      <p class="model-description">Advanced reasoning model optimized for complex problem-solving and step-by-step analysis. Perfect for certification exams and advanced technical assessments.</p>
      
      <div class="model-capabilities">
        <div class="capabilities-title">Capabilities</div>
        <div class="capabilities-list">
          <span class="capability-tag">Step-by-step</span>
          <span class="capability-tag">Logic Problems</span>
          <span class="capability-tag">Mathematical Proofs</span>
          <span class="capability-tag">Research</span>
        </div>
      </div>

      <div class="model-stats">
        <div class="stat-row">
          <span class="stat-label">Context Window</span>
          <span class="stat-value">200K tokens</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Response Speed</span>
          <span class="stat-value">Slow</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Quality Rating</span>
          <span class="stat-value">★★★★★</span>
        </div>
      </div>

      <div class="model-best-for">
        <div class="best-for-title">Best For</div>
        <ul class="best-for-list">
          <li>Mathematical proofs & logic</li>
          <li>Certification exams</li>
          <li>Research-level problems</li>
          <li>Complex reasoning tasks</li>
        </ul>
      </div>
    </div>

    <!-- DeepSeek V3 -->
    <div class="ai-model-card">
      <div class="model-header">
        <div class="model-icon" style="background: linear-gradient(135deg, #ec4899, #db2777); color: white;">💡</div>
        <div>
          <div class="model-provider">DeepSeek</div>
          <h3 class="model-name">DeepSeek V3</h3>
        </div>
      </div>
      <p class="model-description">Cutting-edge open-source model with exceptional coding abilities and mathematical reasoning. Great for programming interviews and technical assessments.</p>
      
      <div class="model-capabilities">
        <div class="capabilities-title">Capabilities</div>
        <div class="capabilities-list">
          <span class="capability-tag">Code Excellence</span>
          <span class="capability-tag">Mathematics</span>
          <span class="capability-tag">Open Source</span>
          <span class="capability-tag">Innovation</span>
        </div>
      </div>

      <div class="model-stats">
        <div class="stat-row">
          <span class="stat-label">Context Window</span>
          <span class="stat-value">64K tokens</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Response Speed</span>
          <span class="stat-value">Fast</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Quality Rating</span>
          <span class="stat-value">★★★★☆</span>
        </div>
      </div>

      <div class="model-best-for">
        <div class="best-for-title">Best For</div>
        <ul class="best-for-list">
          <li>Programming interviews</li>
          <li>Algorithm challenges</li>
          <li>Code optimization</li>
          <li>Technical problem solving</li>
        </ul>
      </div>
    </div>

    <!-- Llama 3.3 70B -->
    <div class="ai-model-card">
      <div class="model-header">
        <div class="model-icon" style="background: linear-gradient(135deg, #f97316, #ea580c); color: white;">🦙</div>
        <div>
          <div class="model-provider">Meta</div>
          <h3 class="model-name">Llama 3.3 70B</h3>
        </div>
      </div>
      <p class="model-description">Meta's powerful open-source model with strong general knowledge and reasoning capabilities. Excellent for diverse assessment topics and general knowledge tests.</p>
      
      <div class="model-capabilities">
        <div class="capabilities-title">Capabilities</div>
        <div class="capabilities-list">
          <span class="capability-tag">General Knowledge</span>
          <span class="capability-tag">Reasoning</span>
          <span class="capability-tag">Open Source</span>
          <span class="capability-tag">Versatile</span>
        </div>
      </div>

      <div class="model-stats">
        <div class="stat-row">
          <span class="stat-label">Context Window</span>
          <span class="stat-value">128K tokens</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Response Speed</span>
          <span class="stat-value">Fast</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Quality Rating</span>
          <span class="stat-value">★★★★☆</span>
        </div>
      </div>

      <div class="model-best-for">
        <div class="best-for-title">Best For</div>
        <ul class="best-for-list">
          <li>General knowledge assessments</li>
          <li>Multi-topic examinations</li>
          <li>Academic subjects</li>
          <li>Broad reasoning tasks</li>
        </ul>
      </div>
    </div>

    <!-- Mistral Large -->
    <div class="ai-model-card">
      <div class="model-header">
        <div class="model-icon" style="background: linear-gradient(135deg, #64748b, #475569); color: white;">🌬️</div>
        <div>
          <div class="model-provider">Mistral AI</div>
          <h3 class="model-name">Mistral Large</h3>
        </div>
      </div>
      <p class="model-description">European flagship model with strong multilingual capabilities and excellent reasoning. Perfect for international assessments and language-specific evaluations.</p>
      
      <div class="model-capabilities">
        <div class="capabilities-title">Capabilities</div>
        <div class="capabilities-list">
          <span class="capability-tag">Multilingual</span>
          <span class="capability-tag">Reasoning</span>
          <span class="capability-tag">Code Generation</span>
          <span class="capability-tag">European AI</span>
        </div>
      </div>

      <div class="model-stats">
        <div class="stat-row">
          <span class="stat-label">Context Window</span>
          <span class="stat-value">128K tokens</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Response Speed</span>
          <span class="stat-value">Fast</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Quality Rating</span>
          <span class="stat-value">★★★★☆</span>
        </div>
      </div>

      <div class="model-best-for">
        <div class="best-for-title">Best For</div>
        <ul class="best-for-list">
          <li>International assessments</li>
          <li>Multilingual examinations</li>
          <li>European standardized tests</li>
          <li>Language-specific coding</li>
        </ul>
      </div>
    </div>

    <!-- InternVL3 14B -->
    <div class="ai-model-card">
      <div class="model-header">
        <div class="model-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white;"></div>
        <div>
          <div class="model-provider">OpenGVLab</div>
          <h3 class="model-name">InternVL3 14B</h3>
        </div>
      </div>
      <p class="model-description">Advanced vision-language model with specialized capabilities for scientific diagrams and technical content. Ideal for STEM assessments and research-based evaluations.</p>
      
      <div class="model-capabilities">
        <div class="capabilities-title">Capabilities</div>
        <div class="capabilities-list">
          <span class="capability-tag">Scientific Vision</span>
          <span class="capability-tag">Technical Diagrams</span>
          <span class="capability-tag">STEM Content</span>
          <span class="capability-tag">Research</span>
        </div>
      </div>

      <div class="model-stats">
        <div class="stat-row">
          <span class="stat-label">Context Window</span>
          <span class="stat-value">32K tokens</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Response Speed</span>
          <span class="stat-value">Medium</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Quality Rating</span>
          <span class="stat-value">★★★★☆</span>
        </div>
      </div>

      <div class="model-best-for">
        <div class="best-for-title">Best For</div>
        <ul class="best-for-list">
          <li>Scientific diagrams & charts</li>
          <li>STEM assessments</li>
          <li>Research paper analysis</li>
          <li>Technical documentation</li>
        </ul>
      </div>
    </div>

  </div>

  <!-- Scaling & Unlimited Access Section -->
  <div class="scaling-section">
    <h2 class="scaling-title">How Ghost Pilot Scales Unlimited Access</h2>
    <p class="scaling-subtitle">Discover how we provide unlimited access to premium AI models worth $200+/month, completely free through advanced technology integration.</p>
    
    <div class="scaling-features">
      
      <div class="scaling-feature">
        <div class="feature-icon" style="background: linear-gradient(135deg, #10b981, #059669); color: white;"></div>
        <h3 class="feature-title">Puter.js Integration</h3>
        <p class="feature-description">Ghost Pilot leverages Puter.js to provide direct access to OpenRouter's premium AI models without API costs. This revolutionary approach eliminates the $20-200/month subscription fees while maintaining full access to O3, GPT-4o, Claude Opus 4, and more.</p>
      </div>

      <div class="scaling-feature">
        <div class="feature-icon" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white;"></div>
        <h3 class="feature-title">Zero Token Limits</h3>
        <p class="feature-description">Unlike traditional AI services that throttle usage with token limits and rate restrictions, Ghost Pilot provides truly unlimited access. Process thousands of screenshots, generate extensive code solutions, and handle unlimited conversations during your assessments.</p>
      </div>

      <div class="scaling-feature">
        <div class="feature-icon" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white;">🔄</div>
        <h3 class="feature-title">Intelligent Model Routing</h3>
        <p class="feature-description">Ghost Pilot automatically selects the optimal AI model for each task. Screenshot analysis uses vision models like GPT-4o and Qwen VL, coding problems leverage O3 and DeepSeek V3, while essay questions utilize Claude Opus 4's superior writing capabilities.</p>
      </div>

      <div class="scaling-feature">
        <div class="feature-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white;">🛡️</div>
        <h3 class="feature-title">Stealth Technology</h3>
        <p class="feature-description">Our advanced stealth system ensures AI assistance remains undetectable across all platforms. From Zoom interviews to proctored exams like HonorLock and Proctorio, Ghost Pilot operates invisibly while providing full access to all premium models.</p>
      </div>

      <div class="scaling-feature">
        <div class="feature-icon" style="background: linear-gradient(135deg, #ec4899, #db2777); color: white;">📊</div>
        <h3 class="feature-title">Real-time Performance</h3>
        <p class="feature-description">Access multiple AI models simultaneously during live assessments. Ghost Pilot can process screenshots with vision models, generate code solutions with reasoning models, and provide explanations with language models - all in parallel for maximum efficiency.</p>
      </div>

      <div class="scaling-feature">
        <div class="feature-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white;">🌍</div>
        <h3 class="feature-title">Global Accessibility</h3>
        <p class="feature-description">Ghost Pilot democratizes access to premium AI models worldwide. Students and professionals in any country can access the same cutting-edge AI capabilities that were previously limited to those who could afford expensive subscriptions and enterprise accounts.</p>
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

// Auto-execute function to inject CSS and HTML
(function() {
  console.log('🤖 AI Models script initializing...');
  
  // Define animation function first
  function initializeAIModelsSectionAnimations() {
    console.log('🎨 Initializing AI models animations...');
    
    setTimeout(() => {
      const aiModelsGrid = document.querySelector('.ai-models-grid');
      const scalingSection = document.querySelector('.scaling-section');
      const backHomeContainer = document.querySelector('.back-home-container');
      
      if (aiModelsGrid) {
        setTimeout(() => {
          aiModelsGrid.style.opacity = '1';
          aiModelsGrid.style.transform = 'translateY(0) scale(1)';
          aiModelsGrid.classList.add('models-animated');
          console.log('✅ AI models grid animated');
        }, 400);
      }
      
      if (scalingSection) {
        setTimeout(() => {
          scalingSection.style.opacity = '1';
          scalingSection.style.transform = 'translateY(0) scale(1)';
          scalingSection.classList.add('models-animated');
          console.log('✅ Scaling section animated');
        }, 600);
      }
      
      if (backHomeContainer) {
        setTimeout(() => {
          backHomeContainer.style.opacity = '1';
          backHomeContainer.style.transform = 'translateY(0) scale(1)';
          console.log('✅ Back home button animated');
        }, 800);
      }
    }, 100);
  }
  
  // Add CSS first and ensure it stays
  const style = document.createElement('style');
  style.setAttribute('data-ai-models-styles', 'true');
  style.textContent = aiModelsCSS;
  document.head.appendChild(style);
  console.log('✅ CSS injected');
  
  // Wait for React to settle, then inject content
  function initializeAIModelsPage() {
    console.log('🏗️ Starting content injection...');
    
    // AGGRESSIVE: Remove ALL existing content from main containers
    const clearContainers = () => {
      const selectors = [
        'main',
        '.main-content', 
        '[data-framer-name="Content"]',
        '[data-framer-name="content"]',
        '.framer-page-content',
        '[role="main"]',
        'body > div:first-child'
      ];
      
      selectors.forEach(selector => {
        const element = document.querySelector(selector);
        if (element && element !== document.body) {
          console.log('🧹 Clearing container:', selector);
          element.innerHTML = '';
        }
      });
    };
    
    // FORCE INJECTION: Create new container if needed
    const injectContent = () => {
      clearContainers();
      
      // Find or create main container
      let mainContent = document.querySelector('main') || 
                       document.querySelector('[data-framer-name="Content"]');
      
      if (!mainContent) {
        console.log('🆕 Creating new main container');
        mainContent = document.createElement('main');
        mainContent.setAttribute('data-ai-models-injected', 'true');
        mainContent.style.cssText = `
          position: relative;
          z-index: 9999;
          min-height: 100vh;
          width: 100%;
        `;
        
        // Insert after header or at body start
        const header = document.querySelector('header') || 
                      document.querySelector('nav') ||
                      document.body.firstElementChild;
        
        if (header && header.parentNode) {
          header.parentNode.insertBefore(mainContent, header.nextSibling);
        } else {
          document.body.insertBefore(mainContent, document.body.firstChild);
        }
      }
      
      // Force clear and inject
      mainContent.innerHTML = aiModelsHTML;
      console.log('✅ Content injected into:', mainContent.tagName);
      
      // Verify injection
      const check = document.querySelector('.ai-models-page');
      console.log('🔍 AI Models page found after injection:', !!check);
      
      return !!check;
    };
    
    // Try injection with retries
    let attempts = 0;
    const maxAttempts = 5;
    
    const tryInject = () => {
      attempts++;
      console.log(`🎯 Injection attempt ${attempts}/${maxAttempts}`);
      
      const success = injectContent();
      
      if (success) {
        console.log('✅ Content injection successful!');
        initializeAIModelsSectionAnimations();
        
        // DEFENSIVE: Re-inject if React removes it
        setTimeout(() => {
          if (!document.querySelector('.ai-models-page')) {
            console.log('🔄 Content was removed, re-injecting...');
            injectContent();
            initializeAIModelsSectionAnimations();
          }
        }, 1000);
        
      } else if (attempts < maxAttempts) {
        console.log('⏰ Retrying injection in 200ms...');
        setTimeout(tryInject, 200);
      } else {
        console.error('❌ All injection attempts failed');
      }
    };
    
    tryInject();
  }
  
  // REACT-SAFE TIMING: Wait for React hydration
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initializeAIModelsPage, 100);
    });
  } else {
    // Multiple timing attempts to work around React
    setTimeout(initializeAIModelsPage, 50);
    setTimeout(initializeAIModelsPage, 200);
    setTimeout(initializeAIModelsPage, 500);
  }
  
})(); 
