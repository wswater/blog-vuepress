const themeConfig = require('./config/theme/')

module.exports = {
  title: "yzy",// 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '一介憨憨',// meta 中的描述文字，用于SEO
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],//浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]//在移动端，搜索框在获得焦点时会放大
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}
