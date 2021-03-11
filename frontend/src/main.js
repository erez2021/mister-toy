import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
// import '../src/styles/css/main.css'
import '../src/styles/main.scss'
import * as VueGoogleMaps from 'vue2-google-maps'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
import VueCharts from 'vue-chartjs'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueCharts);
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAaio-UIw-8MZ7bNW7yIv2Rwfdu6ExkW3E',
    libraries: 'places, drawing, visualization',
  },
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
