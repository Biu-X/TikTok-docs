import { defineConfig } from 'vitepress'
import { ZHconfig } from './zh'

export default defineConfig({
  title: 'TikTok',
  description: 'docs for TikTok',
  lastUpdated: true,

  lang: 'zh',
  base: '/',

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },

  head: [['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]],

  locales: {
    root: {
      label: '中文',
      lang: 'zh',
      link: '/',
      ...ZHconfig
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
