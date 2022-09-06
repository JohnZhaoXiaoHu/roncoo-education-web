import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import config from '../config'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      temporaryUrl: '', // 临时url
      count: false,
      websiteInfo: null, // 站点信息
      tokenInfo: '', // token信息
      aboutList: null, // about列表
      navList: { time: 0, list: [] }, // 导航信息
      clientData: config.CLIENT, // 机构信息
      activityData: null, // 课程活动信息
      changeEwm: 1 // 隐藏小程序二维码
    }),
    mutations: mutations,
    actions: actions
  })
}

export default createStore
