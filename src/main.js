// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import 'vuetify/dist/vuetify.min.css'

Vue.use(axios)

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    localStorage.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiM2Q4ZmVlMjQ2YmFlNTRiMDU0ZmI2ZGRmYzFkNDgyNTkxODg0NzIxMTRkOTkwNTU4YWM2YmQ4OGZhZTZiMWI2YTc5YTg5ZjhkNDU5ZmFmIn0.eyJhdWQiOiI0IiwianRpIjoiZGIzZDhmZWUyNDZiYWU1NGIwNTRmYjZkZGZjMWQ0ODI1OTE4ODQ3MjExNGQ5OTA1NThhYzZiZDg4ZmFlNmIxYjZhNzlhODlmOGQ0NTlmYWYiLCJpYXQiOjE1NTU5NzA0NDUsIm5iZiI6MTU1NTk3MDQ0NSwiZXhwIjoxNTg3NTkyODQ1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.WKeF9OoNe1zjPCSZU3zRvx8DX61HP0UV_sEogZ2v-hZoC2vp-gI6RZDVoyeRxissSGqgP5VkBu9haV80HHLsb5lX-2JD8BOZITWoHaRzl5qy0TjxZkMqe3knrbMBwbYIsClvgQngwxO47T3YAHmW83hh1gYlOFjZsMbP6tEXnkQKKjDIU2DMoojBnDyKUN7JiFVGGclOdthBTcxVOMkgeKhVSIs-BzkZlzjVUkx7GlhXj_aWWa_9rWhbHaW3BGQCY3H8JhFVEr0KX-JDhrTYaJFyaz-LmAz2IFgblLidO5WJQ1jE1CdT0emF0EXz1JbQqV8xmFZSAOI17w3chG4kN6jWUIsMvrEkOQJEYOihQ-iu9ngJ_vHt3TsfmAoKM8oeLsyKOYWrTxkGEVnp2lfzOd3KzmjCDa1yf1_aD9Rz75AhDoCu6xjWO0fbRZg-sWuM8sqj7ZrnMLxzqpZjZ5MKNTXXpIshjdt0PWOxbkmZ-VRAe1aUt3ko9JkO8QYarnjOcPiQhyXAfroQeVgutczBu48QbCOMpuXhjeZlsyX696nMxdck5S5lRExj4nbakZLLc9KXsCpiqD-g951AgYJ_Kx0q_8AqZyZV509mkk0jHtF6LPSeZAwwWLrcvQ3p2BTSklSyq9BnrTJh4VrGhPVGHUIV0DSwLc8d73TcfbnE3H8'
    axios.defaults.baseURL = 'http://localhost:8000/api'
    axios.defaults.headers.common['Authorization'] = localStorage.Authorization
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  },
  data () {
    return {
      auth: true,
      linkLogo: 'http://localhost:8000/images/logointranet.jpg',
      drawer: true,
      isLoad: false
    }
  }
})
