import { defineConfig } from 'vitepress'

// 自動根據 GitHub Repository 名稱決定 base 路徑，避免樣式或連結失效
const repoInfo = process.env.GITHUB_REPOSITORY || ''
const [owner, repo] = repoInfo.split('/')
const isUserPage = repo && owner && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`
const base = repo && !isUserPage ? `/${repo}/` : '/'

export default defineConfig({
  lang: 'zh-TW',
  title: '我的技術筆記與文件庫',
  description: '透過 Markdown 與 GitHub Actions 自動建置的現代化部落格與文件網站',
  base,
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // 內建離線全文搜尋功能
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜尋文章與文件...',
            buttonAriaLabel: '搜尋文章與文件'
          },
          modal: {
            noResultsText: '找不到相關結果：',
            resetButtonTitle: '清除搜尋條件',
            footer: {
              selectText: '選擇',
              navigateText: '切換',
              closeText: '關閉'
            }
          }
        }
      }
    },

    // 頂部導覽列
    nav: [
      { text: '首頁', link: '/' },
      { text: '使用指南與文件', link: '/guide/getting-started' },
      { text: '部落格文章', link: '/blog/' }
    ],

    // 側邊欄目錄（支援多分類）
    sidebar: {
      '/guide/': [
        {
          text: '快速入門與教學',
          collapsed: false,
          items: [
            { text: '快速開始', link: '/guide/getting-started' },
            { text: 'Markdown 寫作語法範例', link: '/guide/writing-markdown' },
            { text: 'GitHub Actions 自動部署原理', link: '/guide/deployment' }
          ]
        }
      ],
      '/blog/': [
        {
          text: '部落格文章列表',
          collapsed: false,
          items: [
            { text: '文章總覽', link: '/blog/' },
            { text: '我的第一篇部落格文章', link: '/blog/first-post' },
            { text: '從零打造自動化技術部落格', link: '/blog/github-actions-cicd' }
          ]
        }
      ]
    },

    // 右側大綱標題
    outline: {
      level: [2, 3],
      label: '本頁目錄'
    },

    // 上下頁導覽文字
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最後更新於'
    },

    darkModeSwitchLabel: '外觀主題',
    lightModeSwitchTitle: '切換至淺色模式',
    darkModeSwitchTitle: '切換至深色模式',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '回到頂部',

    // 社群連結（部署後可自行替換）
    socialLinks: [
      { icon: 'github', link: repoInfo ? `https://github.com/${repoInfo}` : 'https://github.com' }
    ],

    footer: {
      message: '由 VitePress 與 GitHub Actions 自動建置發佈',
      copyright: `Copyright © ${new Date().getFullYear()} All Rights Reserved.`
    }
  }
})
