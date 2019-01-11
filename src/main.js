// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'

Vue.config.productionTip = false

// bootstrap-vue
Vue.use(BootstrapVue)
Vue.component('b-modal', bModal)
Vue.directive('b-modal', bModalDirective)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: 'App'
})
