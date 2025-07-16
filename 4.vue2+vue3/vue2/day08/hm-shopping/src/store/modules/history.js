import {getHistory, setHistory} from "@/utils/storage";

export default {
  namespaced: true,
  state() {
    return {
      history: getHistory()
    }
  },
  getters: {},
  mutations: {
    setHistory(state, history) {
      state.history = history;
      setHistory(history)
    }
  },
  actions: {},
}
