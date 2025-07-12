# AI Vibe Coding 工程師履歷模板

這是一個現代化、響應式的 AI 工程師履歷網站模板，專為 AI/ML 開發者設計。

## ✨ 特色功能

- 🎨 **現代化設計** - 使用漸變色彩和動畫效果
- 📱 **響應式設計** - 完美適配桌面和移動設備
- 🚀 **互動效果** - 技能標籤點擊、專案卡片懸停
- 📋 **一鍵複製** - 聯絡資訊點擊即可複製
- 🖨️ **列印優化** - 支援列印和 PDF 匯出
- ⚡ **快速載入** - 輕量級設計，載入速度快

## 🛠️ 技術棧

- **HTML5** - 語義化標記
- **CSS3** - 現代化樣式，包含 Flexbox 和 Grid
- **JavaScript ES6+** - 互動效果和動畫
- **Font Awesome** - 圖標庫
- **Google Fonts** - Inter 字體

## 📁 檔案結構

```
resume/
├── index.html          # 主要履歷頁面
├── styles.css          # 樣式表
├── script.js           # JavaScript 互動效果
└── README.md          # 說明文件
```

## 🚀 快速開始

1. **下載檔案**
   ```bash
   git clone [repository-url]
   cd resume
   ```

2. **開啟履歷**
   - 直接用瀏覽器開啟 `index.html`
   - 或使用本地伺服器：
   ```bash
   python -m http.server 8000
   # 然後訪問 http://localhost:8000
   ```

3. **自定義內容**
   - 編輯 `index.html` 中的個人資訊
   - 修改 `styles.css` 調整顏色和樣式
   - 在 `script.js` 中添加自定義功能

## ✏️ 自定義指南

### 1. 個人資訊修改

在 `index.html` 中找到以下區塊並修改：

```html
<!-- 個人資料 -->
<h1 class="name">您的姓名</h1>
<h2 class="title">AI Vibe Coding 工程師</h2>

<!-- 聯絡資訊 -->
<span>your.email@example.com</span>
<span>+886 912-345-678</span>
<span>github.com/yourusername</span>
<span>linkedin.com/in/yourprofile</span>
```

### 2. 技能標籤自定義

在技能區塊中添加或修改技能標籤：

```html
<div class="skill-tags">
    <span class="skill-tag">Python</span>
    <span class="skill-tag">TensorFlow</span>
    <span class="skill-tag">PyTorch</span>
    <!-- 添加更多技能 -->
</div>
```

### 3. 工作經驗更新

修改工作經驗區塊：

```html
<div class="experience-item">
    <div class="experience-header">
        <h4>職位名稱</h4>
        <span class="company">公司名稱</span>
        <span class="period">2023 - 至今</span>
    </div>
    <ul class="experience-details">
        <li>工作成就描述</li>
        <li>專案成果</li>
    </ul>
</div>
```

### 4. 專案作品展示

添加您的專案：

```html
<div class="project-card">
    <h4>專案名稱</h4>
    <p>專案描述和成果</p>
    <div class="project-tech">
        <span>技術棧1</span>
        <span>技術棧2</span>
    </div>
</div>
```

### 5. 顏色主題自定義

在 `styles.css` 中修改主要顏色：

```css
/* 主要漸變色彩 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 主要強調色 */
color: #667eea;
```

## 🎯 AI 工程師履歷重點

### 必備技能展示

1. **AI/ML 技術**
   - Python, TensorFlow, PyTorch
   - OpenAI API, LangChain
   - Computer Vision, NLP

2. **程式開發**
   - JavaScript, React, Node.js
   - Docker, Git, AWS
   - RESTful APIs

3. **資料處理**
   - Pandas, NumPy, SQL
   - MongoDB, Redis, Spark

### 專案作品重點

1. **AI 應用專案**
   - 智能助手、聊天機器人
   - 圖像識別、語音處理
   - 推薦系統、預測模型

2. **量化成果**
   - 準確率提升百分比
   - 效能改善數據
   - 用戶參與度增長

### 工作經驗亮點

1. **技術領導**
   - 帶領團隊完成 AI 專案
   - 技術決策和架構設計

2. **業務影響**
   - 提升業務效率的具體數據
   - 成本節省和收入增長

3. **創新應用**
   - 新技術的導入和應用
   - 解決複雜業務問題

## 📱 響應式設計

履歷模板已針對以下設備優化：

- **桌面電腦** (1200px+)
- **平板電腦** (768px - 1199px)
- **手機** (320px - 767px)

## 🖨️ 列印和 PDF

- 按 `Ctrl+P` 或點擊列印
- 自動優化列印樣式
- 支援 PDF 匯出

## 🔧 進階自定義

### 添加新區塊

1. 在 HTML 中添加新的 `<section>`
2. 在 CSS 中定義樣式
3. 在 JavaScript 中添加互動效果

### 修改動畫效果

在 `script.js` 中調整動畫參數：

```javascript
// 調整動畫延遲
tag.style.animationDelay = `${index * 0.1}s`;

// 修改動畫持續時間
section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
```

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request 來改善這個模板！

## 📄 授權

MIT License - 可自由使用和修改

## 📞 支援

如有問題或建議，請聯繫：
- Email: your.email@example.com
- GitHub: github.com/yourusername

---

**祝您求職順利！** 🚀 