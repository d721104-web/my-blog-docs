# GitHub Actions 自動部署原理

本專案已經內建 `.github/workflows/deploy.yml` 自動化工作流程。

## 運作流程

當您對 `main` 分支進行推送（`git push`）或在 GitHub 網頁上直接修改文章並儲存時：

1. **觸發（Trigger）**：GitHub Actions 偵測到 `main` 分支有新變更。
2. **環境準備（Setup）**：啟動雲端 Ubuntu 虛擬機並安裝 Node.js 20。
3. **編譯（Build）**：執行 `npm run docs:build`，自動將所有 `.md` 檔案編譯為極速靜態網頁，並自動適配您的 GitHub Repository 網址路徑。
4. **發佈（Deploy）**：將編譯完成的靜態檔案自動發佈至 **GitHub Pages**。

## 手動觸發重新部署

除了透過修改程式碼自動觸發外，您也可以隨時前往 GitHub Repository 頁面的 **Actions** 分頁，點選左側的 **自動建置並部署至 GitHub Pages**，再點擊 **Run workflow** 手動觸發部署。
