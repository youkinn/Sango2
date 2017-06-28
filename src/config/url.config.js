export default {
  test: {
    getUserInfo: '/mock/getDemoData',
    getNewsList: '/mock/getNewsList',
    getNewsDetail: '/mock/getNewsDetail',
    getGameList: '/mock/getGameList',
    getSwiperList: '/mock/getSwiperList',
  },
  production: {
    getNewsList: '/api/getNewsList',
    getNewsDetail: '/api/getNewsDetail',
    getGameList: '/api/getGameList',
    getSwiperList: '/api/getSwiperList',
  }
};