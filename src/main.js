import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import {
  i18n,
} from '@/lang'
import router from '@/router'
import '@/router/permission'

// setup element-ui
import './element-ui'

Vue.config.productionTip = false;

export  default  new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
