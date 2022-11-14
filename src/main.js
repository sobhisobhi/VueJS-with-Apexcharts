// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import '@/plugins/apexcharts';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// createApp(App).mount('#app')
