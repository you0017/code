import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',

  //基于app.vue创建结构
  //render: h => h(Basic),
  render(createElement) {
    return createElement(App)
  }
})/*.$mount('#app')*/
