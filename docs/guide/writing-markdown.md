# Markdown 寫作語法範例

本網站支援所有標準 Markdown 語法，以及豐富的進階擴充功能。

## 1. 提示區塊（Callouts / Containers）

::: info 提示資訊
這是一個一般資訊區塊，適合用來補充背景知識。
:::

::: tip 小撇步
您可以按下鍵盤上的 `Ctrl + K`（Mac 為 `Cmd + K`）快速喚出全站搜尋視窗！
:::

::: warning 注意事項
修改 `docs/.vitepress/config.mjs` 時，請留意括號與逗號是否成對。
:::

::: danger 危險警告
請勿將私密金鑰（API Keys / Passwords）直接寫在公開的儲存庫文章中。
:::

::: details 點擊展開詳細內容（折疊區塊）
這裡可以放置較長的補充說明、除錯紀錄或參考資料，讓版面保持乾淨整潔。
:::

## 2. 程式碼語法高光與行數標記

支援多國程式語言高光顯示、行號以及特定行數聚焦：

```js{2,4-5}
function greet(name) {
  const message = `哈囉，${name}！歡迎來到我的技術部落格。` // 這行會被高光標記
  console.log(message)
  return {
    status: 'success',
    timestamp: new Date().toISOString()
  }
}
```

## 3. 表格整理

| 功能項目 | 支援程度 | 說明 |
| :--- | :---: | :--- |
| 全文搜尋 | ✅ 內建 | 自動建立本地索引，無須設定第三方服務 |
| 深色模式 | ✅ 內建 | 右上角一鍵切換，自動記憶使用者偏好 |
| 響應式版面 | ✅ 內建 | 手機、平板、桌面自動最佳化排版 |
| 自動化部署 | ✅ 內建 | 推上 GitHub `main` 分支自動編譯發佈 |
