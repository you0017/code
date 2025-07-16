import {getInfo, setInfo} from "@/utils/storage";

export default {
  namespaced: true,
  state() {
    return {
      userInfo: getInfo()
    }
  },
  mutations: {
    //所有mutations第一个参数都是state
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
      setInfo(userInfo)
    }
  },
  actions: {
    logout (context) {
      context.commit('setUserInfo', {})
      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getters: {
  }
}
