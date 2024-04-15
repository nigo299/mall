import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'unibest',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  // tabBar: {
  //   color: '#979797',
  //   selectedColor: '#2494FF',
  //   backgroundColor: '#F8F8F8',
  //   borderStyle: 'black',
  //   height: '50px',
  //   fontSize: '14px',
  //   iconWidth: '24px',
  //   spacing: '3px',
  //   list: [
  //     {
  //       iconPath: 'static/tabbar/home.png',
  //       selectedIconPath: 'static/tabbar/homeHL.png',
  //       pagePath: 'pages/index/index',
  //       text: '主页',
  //     },
  //     {
  //       iconPath: 'static/tabbar/gift.png',
  //       selectedIconPath: 'static/tabbar/giftHL.png',
  //       pagePath: 'pages/index/gift',
  //       text: '礼品',
  //     },
  //     {
  //       iconPath: 'static/tabbar/add.png',
  //       selectedIconPath: 'static/tabbar/homeHL.png',
  //       pagePath: 'pages/index/test',
  //       text: '',
  //     },
  //     {
  //       iconPath: 'static/tabbar/ai.png',
  //       selectedIconPath: 'static/tabbar/aiHL.png',
  //       pagePath: 'pages/index/ai',
  //       text: 'AI',
  //     },
  //     {
  //       iconPath: 'static/tabbar/mine.png',
  //       selectedIconPath: 'static/tabbar/mineHL.png',
  //       pagePath: 'pages/index/about',
  //       text: '我的',
  //     },
  //   ],
  // },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
    },
  },
})
