import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/modules/user";
import history from "@/store/modules/history";
import cart from "@/store/modules/cart";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    token(state) {
      return state.user.userInfo.token;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    history,
    cart
  }
})
