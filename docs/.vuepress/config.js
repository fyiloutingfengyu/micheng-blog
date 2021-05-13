const navConfig = require('./config/nav/index'); // 导航配置

module.exports = {
  title: '迷城技术',
  description: '技术博客技术博客技术博客技术博客技术博客',
  base: '/micheng-blog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    ['meta', { name: 'keywords', content: '前端,后台,全栈,系统' }]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    logo: '/images/logo.jpg',
    smoothScroll: true, // 启用页面滚动效果
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    nav: navConfig,
    permalink: "/:year/:month/:day/:slug",
    search: true,
    searchMaxSuggestions: 10,
    sidebar: 'auto',
    authorAvatar: '/images/logo.jpg',
    author: 'cvcoo',
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
    ]
  }
};
