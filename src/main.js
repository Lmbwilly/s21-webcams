import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = true
Vue.config.devtools = true
Vue.config.performance = Vue.config.devtools

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
