# 我的技術筆記與文件庫 (My Blog & Docs)

這是一個使用 **VitePress** 建置，並透過 **GitHub Actions** 自動部署至 **GitHub Pages** 的現代化部落格與文件網站專案。

## ✨ 功能特色

- 📝 **Markdown 寫作**：在 `docs/guide/` 或 `docs/blog/` 新增或編輯 `.md` 檔案即可更新內容
- 🔍 **內建全文搜尋**：支援即時關鍵字搜尋（快捷鍵 `Ctrl + K`）
- 🌗 **深淺色模式**：支援亮色與深色主題一鍵切換
- ⚡ **全自動 CI/CD 部署**：推送至 `main` 分支即自動觸發 GitHub Actions 編譯並發佈至 GitHub Pages

## 📁 專案結構

- `docs/index.md`：網站首頁
- `docs/guide/`：文件與教學指南目錄
- `docs/blog/`：部落格文章目錄
- `docs/.vitepress/config.mjs`：網站標題、導覽列、側邊欄與搜尋設定
- `.github/workflows/deploy.yml`：GitHub Actions 自動部署設定檔
