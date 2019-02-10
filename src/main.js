import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = true
Vue.config.devtools = true
Vue.config.performance = Vue.config.devtools

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  checkDuplicatedScript: true
})