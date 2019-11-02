import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VeeValidate, { Validator } from 'vee-validate';
// import zh from 'vee-validate/dist/locale/zh_CN.json'

// Vue.use(VeeValidate)
// Validator.localize(zh)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
