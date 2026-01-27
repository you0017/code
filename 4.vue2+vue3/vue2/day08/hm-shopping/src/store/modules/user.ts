import { getInfo, removeInfo, setInfo } from '@/utils/storage'

export default ({
  namespaced: true,
  state () {
    return {
      userInfo: getInfo()
    }
  },
  mutations: {
    setUserId (state: any, userId: any) {
      state.userInfo.userId = userId
      setInfo(state.userInfo)
    },
    setToken (state: any, token: any) {
      state.userInfo.token = token
      setInfo(state.userInfo)
    },
    removeUserInfo (state: any) {
      state.userInfo = {
        userId: '',
        token: ''
      }
      removeInfo()
    }
  },
  actions: {
  },
  getters: {
    getUserInfo (state: any) {
      return getInfo()
    }
  }
})
