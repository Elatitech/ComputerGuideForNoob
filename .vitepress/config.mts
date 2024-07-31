import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "给电脑初学者的指南",
  description: "为对计算机有兴趣的电脑初学者而编",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '一些基础知识', link: '/guide/' },
          { text: 'Windows', link: '/guide/windows/' },
          { text: 'macOS', link: '/guide/macos/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
