import Vue  from 'vue'
import App from './App.vue'
import { BNav } from 'bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { NavPlugin } from 'bootstrap-vue'
import { BCard } from 'bootstrap-vue'
import { BContainer } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { TablePlugin } from 'bootstrap-vue'
import { BTable } from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue'
import VueAxios from "vue-axios";
import axios from "axios";


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(NavPlugin)
Vue.use(TablePlugin)
Vue.use(LayoutPlugin)
Vue.component('b-card', BCard)
Vue.component('b-nav', BNav)
Vue.component('b-table', BTable)
Vue.component('b-container', BContainer)
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



 
 