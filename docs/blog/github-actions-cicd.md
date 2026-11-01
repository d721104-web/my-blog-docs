# 從零打造自動化技術部落格：GitHub Actions + VitePress

> 📅 **發佈日期**：2026-11-01  
> 🏷️ **標籤**：`#GitHubActions` `#VitePress` `#GitHubPages`

為什麼選擇 **VitePress + GitHub Actions** 來架設個人技術部落格與文件網站？

## 三大核心優勢

### 1. 極致的載入速度與閱讀體驗
VitePress 將 Markdown 預先編譯為靜態 HTML，首次載入極快，後續在頁面之間切換時則採用 SPA（單頁應用程式）預載技術，幾乎達到「零延遲」秒開頁面。

### 2. 免本地環境也能隨時寫文章
由於我們已經配置好 `.github/workflows/deploy.yml`：
- 即使在沒有安裝 Node.js 的電腦、甚至使用平板或手機打開 GitHub 網頁版，只要直接編輯 `.md` 檔案並按下 **Commit changes**，GitHub Actions 就會自動在雲端編譯並更新網站。

### 3. 內建開發者最愛的功能
- **離線全文檢索**：自動為所有標題與內文建立索引
- **深淺色主題切換**：完美支援暗黑模式
- **自動目錄生成（TOC）**：自動解析 `##` 與 `###` 標題生成右側導覽大綱
