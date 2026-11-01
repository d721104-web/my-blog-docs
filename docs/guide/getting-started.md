# 快速開始

歡迎來到您的新網站！這個網站採用 **VitePress** 架構，並已設定好 **GitHub Actions 自動化部署流程**。

## 網站目錄結構

所有的文章與文件都存放在 `docs/` 資料夾底下：

```text
my-blog-docs/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions 自動建置設定檔
├── docs/
│   ├── .vitepress/
│   │   ├── config.mjs      # 網站標題、導覽列、側邊欄設定
│   │   └── theme/          # 網站配色與主題樣式
│   ├── index.md            # 網站首頁
│   ├── guide/              # 「使用指南與文件」分類目錄
│   │   ├── getting-started.md
│   │   ├── writing-markdown.md
│   │   └── deployment.md
│   └── blog/               # 「部落格文章」分類目錄
│       ├── index.md
│       ├── first-post.md
│       └── github-actions-cicd.md
└── package.json
```

## 如何新增一篇文章？

1. **建立 Markdown 檔案**：在 `docs/blog/` 或 `docs/guide/` 底下新增一個 `.md` 檔案（例如 `docs/blog/my-new-post.md`）。
2. **加入側邊欄選單**（選用）：打開 `docs/.vitepress/config.mjs`，在 `sidebar` 區塊中加入新文章的標題與連結。
3. **推送至 GitHub**：
   - 您可以直接請我（Antigravity）幫您新增文章並推送至 GitHub
   - 或者直接在 GitHub 網頁版上點選 **Add file** / **Edit** 編輯 Markdown，儲存（Commit）後網站就會在 1 分鐘內自動更新！
