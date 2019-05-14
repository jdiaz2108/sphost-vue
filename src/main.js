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

 import Echo from 'laravel-echo'

 window.Pusher = require('pusher-js');

 window.Echo = new Echo({
   broadcaster: 'pusher',
   key: 'd274ae81d8186b0c3d42',
   cluster: 'us2',
   encrypted: false,
   authEndpoint: 'http://localhost:8000/broadcasting/auth',
    auth: {
      headers: {
        'Authorization': localStorage.Authorization,
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
 });

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.Authorization) {
    next('/login');
  } else {
    if (to.name == 'login' && localStorage.Authorization) {
      next('/');
    } else {
      next();
    }
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
      if (!this.user) {
        axios.get('/auth/user').then(response => { this.user = response.data; this.auth = true}).catch(error => {localStorage.removeItem('Authorization'); this.$router.push({ path: '/login' });});
      }
    }
  },
  data () {
    return {
      backend: 'http://backend.solopendones.host/',
      host: 'http://localhost:8000/',
      auth: false,
      linkLogo: 'http://localhost:8000/images/logointranet.jpg',
      drawer: true,
      isLoad: false,
      user: null,
      usersNumber: null,
      allUsers: []
    }
  },
  mounted() {
    window.Echo.join('client')
    .here((users) => {
      this.usersNumber = users.length;
      this.allUsers = users;
        // console.log(users);
    })
    .joining((user) => {
      this.usersNumber += 1;
        // console.log(user.name);
        this.allUsers.push(user)
    })
    .leaving((user) => {
      this.usersNumber -= 1;
      let i = this.allUsers.map(item => item.id).indexOf(user.id) // find index of your object
      this.allUsers.splice(i, 1)
        // console.log(user.name);
    });
  },
})
