import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import { library, dom } from '@fortawesome/fontawesome-svg-core'
// import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
// Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
