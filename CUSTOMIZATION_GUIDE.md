# AI Vibe Coding 工程師履歷自定義指南

## 🎯 履歷完成步驟

### 第一步：個人資訊填寫

#### 1. 基本資料
在 `index.html` 中找到並修改：

```html
<!-- 修改姓名 -->
<h1 class="name">您的真實姓名</h1>

<!-- 修改職位標題 -->
<h2 class="title">AI Vibe Coding 工程師</h2>

<!-- 修改個人標語 -->
<p class="tagline">專注於 AI/ML 開發與創新技術應用</p>
```

#### 2. 聯絡資訊
```html
<!-- 修改聯絡資訊 -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>您的真實Email</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>您的真實電話</span>
</div>
<div class="contact-item">
    <i class="fab fa-github"></i>
    <span>您的GitHub連結</span>
</div>
<div class="contact-item">
    <i class="fab fa-linkedin"></i>
    <span>您的LinkedIn連結</span>
</div>
```

### 第二步：個人簡介撰寫

#### 撰寫要點：
1. **突出 AI 專長** - 強調機器學習、深度學習經驗
2. **量化成果** - 提到具體的技術成就
3. **業務價值** - 說明如何為企業創造價值
4. **技術棧** - 列出核心技術能力

#### 範例：
```html
<p class="summary">
    我是一名擁有 3 年 AI 開發經驗的軟體工程師，專精於自然語言處理和計算機視覺。
    曾帶領團隊開發智能客服系統，提升客戶滿意度 40%，並成功部署多個機器學習模型到生產環境。
    熟練掌握 Python、TensorFlow、PyTorch 等 AI 框架，具備從資料預處理到模型部署的完整能力。
    致力於將最新的 AI 技術應用於實際業務場景，創造可量化的商業價值。
</p>
```

### 第三步：技能展示

#### AI/ML 技術（必備）
```html
<div class="skill-tags">
    <span class="skill-tag">Python</span>
    <span class="skill-tag">TensorFlow</span>
    <span class="skill-tag">PyTorch</span>
    <span class="skill-tag">Scikit-learn</span>
    <span class="skill-tag">OpenAI API</span>
    <span class="skill-tag">LangChain</span>
    <span class="skill-tag">Hugging Face</span>
    <span class="skill-tag">Computer Vision</span>
    <span class="skill-tag">NLP</span>
    <span class="skill-tag">BERT</span>
    <span class="skill-tag">GPT</span>
    <span class="skill-tag">Transformers</span>
</div>
```

#### 程式開發技能
```html
<div class="skill-tags">
    <span class="skill-tag">JavaScript</span>
    <span class="skill-tag">React</span>
    <span class="skill-tag">Node.js</span>
    <span class="skill-tag">TypeScript</span>
    <span class="skill-tag">Docker</span>
    <span class="skill-tag">Git</span>
    <span class="skill-tag">AWS</span>
    <span class="skill-tag">RESTful APIs</span>
    <span class="skill-tag">GraphQL</span>
    <span class="skill-tag">Microservices</span>
</div>
```

#### 資料處理技能
```html
<div class="skill-tags">
    <span class="skill-tag">Pandas</span>
    <span class="skill-tag">NumPy</span>
    <span class="skill-tag">SQL</span>
    <span class="skill-tag">MongoDB</span>
    <span class="skill-tag">Redis</span>
    <span class="skill-tag">Apache Spark</span>
    <span class="skill-tag">Kafka</span>
    <span class="skill-tag">Elasticsearch</span>
</div>
```

### 第四步：工作經驗撰寫

#### 撰寫原則：
1. **STAR 法則** - Situation, Task, Action, Result
2. **量化成果** - 使用具體數字
3. **技術深度** - 展示技術能力
4. **業務影響** - 強調商業價值

#### 範例格式：
```html
<div class="experience-item">
    <div class="experience-header">
        <h4>AI 工程師</h4>
        <span class="company">科技公司名稱</span>
        <span class="period">2023 - 至今</span>
    </div>
    <ul class="experience-details">
        <li>開發並部署機器學習模型，提升業務效率 30%，節省人力成本 50 萬元/年</li>
        <li>整合 OpenAI API 開發智能客服系統，處理客戶查詢準確率達 95%，減少客服工作量 60%</li>
        <li>設計並實現自然語言處理管道，處理每日數萬筆文本資料，支援多語言分析</li>
        <li>帶領 3 人團隊完成 AI 專案，準時交付並超出預期效果，獲得客戶高度評價</li>
        <li>優化模型訓練流程，將訓練時間從 8 小時縮短至 2 小時，提升開發效率 75%</li>
    </ul>
</div>
```

### 第五步：專案作品展示

#### 專案展示要點：
1. **技術難度** - 展示解決的技術挑戰
2. **業務價值** - 說明專案的商業影響
3. **量化成果** - 提供具體的改善數據
4. **技術棧** - 列出使用的技術

#### 範例專案：
```html
<div class="project-card">
    <h4>智能客服助手</h4>
    <p>基於 GPT-4 和 LangChain 開發的企業級智能客服系統，整合公司知識庫，
    能夠準確回答客戶問題，處理複雜查詢，並支援多輪對話。系統上線後，
    客服效率提升 70%，客戶滿意度提升 25%。</p>
    <div class="project-tech">
        <span>Python</span>
        <span>OpenAI API</span>
        <span>LangChain</span>
        <span>React</span>
        <span>FastAPI</span>
        <span>Redis</span>
    </div>
</div>

<div class="project-card">
    <h4>圖像識別系統</h4>
    <p>使用深度學習技術開發的圖像分類和物件檢測系統，可識別 100+ 種物件，
    準確率達 98%。應用於品質檢測場景，減少人工檢測成本 80%，
    提升檢測準確率 15%。</p>
    <div class="project-tech">
        <span>TensorFlow</span>
        <span>OpenCV</span>
        <span>Python</span>
        <span>Docker</span>
        <span>Flask</span>
        <span>PostgreSQL</span>
    </div>
</div>

<div class="project-card">
    <h4>推薦系統引擎</h4>
    <p>基於協同過濾和內容過濾的混合推薦系統，整合用戶行為數據和商品特徵，
    為電商平台提供個性化推薦。系統上線後，用戶點擊率提升 35%，
    轉換率提升 20%，平均訂單金額增長 15%。</p>
    <div class="project-tech">
        <span>Python</span>
        <span>Scikit-learn</span>
        <span>Pandas</span>
        <span>Redis</span>
        <span>Apache Spark</span>
        <span>MongoDB</span>
    </div>
</div>
```

### 第六步：教育背景

#### 教育資訊格式：
```html
<div class="education-item">
    <h4>資訊工程學系 碩士</h4>
    <span class="school">國立台灣大學</span>
    <span class="period">2019 - 2021</span>
    <p>主修人工智慧與機器學習，畢業論文：基於深度學習的語音識別系統。
    參與多項 AI 研究專案，發表 2 篇學術論文。</p>
</div>
```

### 第七步：證照與認證

#### 推薦的 AI 相關證照：
```html
<div class="certifications">
    <div class="cert-item">
        <i class="fas fa-award"></i>
        <span>AWS Certified Machine Learning - Specialty</span>
    </div>
    <div class="cert-item">
        <i class="fas fa-award"></i>
        <span>Google Cloud Professional Machine Learning Engineer</span>
    </div>
    <div class="cert-item">
        <i class="fas fa-award"></i>
        <span>Microsoft Azure AI Engineer Associate</span>
    </div>
    <div class="cert-item">
        <i class="fas fa-award"></i>
        <span>IBM Data Science Professional Certificate</span>
    </div>
    <div class="cert-item">
        <i class="fas fa-award"></i>
        <span>Deep Learning Specialization (Coursera)</span>
    </div>
</div>
```

## 🎨 視覺自定義

### 顏色主題修改

在 `styles.css` 中修改主要顏色：

```css
/* 主要漸變色彩 - 可選擇不同配色 */
/* 藍色主題 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 綠色主題 */
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);

/* 橙色主題 */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* 紫色主題 */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

### 字體修改

```css
/* 修改字體 */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* 可選擇其他字體 */
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Open Sans', sans-serif;
```

## 📝 履歷撰寫技巧

### 1. 關鍵字優化
- 使用職位描述中的關鍵字
- 包含技術術語和工具名稱
- 使用 ATS (Applicant Tracking System) 友善的格式

### 2. 量化成果
- 使用具體數字和百分比
- 強調業務影響和成本節省
- 展示技術效能提升

### 3. 技術深度展示
- 詳細描述技術實現
- 展示問題解決能力
- 強調創新和優化

### 4. 專案故事化
- 描述專案背景和挑戰
- 說明解決方案和技術選擇
- 展示最終成果和影響

## 🔍 履歷檢查清單

### 內容檢查
- [ ] 個人資訊完整且正確
- [ ] 聯絡方式可正常使用
- [ ] 技能標籤符合職位要求
- [ ] 工作經驗有量化成果
- [ ] 專案作品有技術深度
- [ ] 教育背景資訊完整
- [ ] 證照認證相關且有效

### 技術檢查
- [ ] 網頁在不同瀏覽器正常顯示
- [ ] 響應式設計在手機上正常
- [ ] 列印功能正常運作
- [ ] 互動效果流暢
- [ ] 載入速度快

### 內容優化
- [ ] 無錯別字和語法錯誤
- [ ] 格式一致且專業
- [ ] 內容簡潔且重點突出
- [ ] 符合目標職位要求

## 🚀 部署建議

### 1. GitHub Pages
```bash
# 創建 GitHub 倉庫
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/resume.git
git push -u origin main

# 在 GitHub 設定中啟用 Pages
```

### 2. Netlify
- 連接 GitHub 倉庫
- 自動部署和更新
- 自定義域名支援

### 3. Vercel
- 快速部署
- 自動 HTTPS
- 全球 CDN

## 📞 求職建議

### 1. 履歷投遞策略
- 針對不同職位客製化內容
- 使用職位關鍵字優化
- 準備不同版本的履歷

### 2. 面試準備
- 準備專案詳細說明
- 練習技術問題回答
- 準備 STAR 法則案例

### 3. 持續更新
- 定期更新技能和專案
- 追蹤技術趨勢
- 參與開源專案

---

**祝您求職成功！** 🎉 