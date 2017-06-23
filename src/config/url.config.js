export default {
  test: {
    getUserInfo: '/mock/getDemoData',
    getNewsList: '/mock/getNewsList',
    getGameList: '/mock/getGameList',
  },
  production: {
    getNewsList: '/api/getNewsList',
    getGameList: '/api/getGameList',
  }
};