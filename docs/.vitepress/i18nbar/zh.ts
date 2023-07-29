import { DefaultTheme } from 'vitepress'

export const ZHnav: DefaultTheme.NavItem[] = [
  { text: '开始', link: '/pages/guide/' },
  { text: 'API', link: '/pages/api/' }
]

export const ZHsidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/pages/guide/' },
        { text: '构建', link: '/pages/guide/build' }
      ]
    },
    {
      text: 'API',
      items: [{ text: 'API', link: '/pages/api/' }]
    }
  ]
}
