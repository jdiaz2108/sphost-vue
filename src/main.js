// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import 'vuetify/dist/vuetify.min.css'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
Vue.use(axios)
Vue.use(Vuetify)


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.Authorization) {
    next('/login');
  } else {
    next();
  }
  // ...
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    axios.defaults.baseURL = 'http://localhost:8000/api'
    axios.defaults.headers.common['Authorization'] = localStorage.Authorization
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    if (localStorage.Authorization) {
      this.auth = true
    }
  },
  data () {
    return {
      auth: false,
      linkLogo: 'http://localhost:8000/images/logointranet.jpg',
      drawer: true,
      isLoad: false
    }
  }
})
