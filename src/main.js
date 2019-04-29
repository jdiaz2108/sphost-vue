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

router.afterEach((to) => {
  console.log(to)
  // ...
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    localStorage.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUzMzJjYjJkNTRmMzFkMjFiNDE5Zjg5NGZmOTk5NjYzYzQyNmYyOTU2NjUyMmQ2Nzg1MWM3ZjQ2ZmY3YTRiMTk2NGEyMDEzYjJiYzE5NTJmIn0.eyJhdWQiOiI0IiwianRpIjoiNTMzMmNiMmQ1NGYzMWQyMWI0MTlmODk0ZmY5OTk2NjNjNDI2ZjI5NTY2NTIyZDY3ODUxYzdmNDZmZjdhNGIxOTY0YTIwMTNiMmJjMTk1MmYiLCJpYXQiOjE1NTY1NDUyNzcsIm5iZiI6MTU1NjU0NTI3NywiZXhwIjoxNTg4MTY3Njc2LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.ipJ6yaB339Pkqi48kvDWxf88tfcA7Ggn1v6FP1nHpK70QflRwCi5IOnisiAhLYrhYmjwPdRQQHlejcxuQjQUtlH3SZacexS9jE6gqd9n_ZiuHDVD_-qD_eysOsn1xzguZjqhJnrejWEORGgpmK9xrpG9qlLzKHBgb8TCQX9S5Mg3IrvAj_Etb7NE-qdysjDqnqwSno5DbCwPI01dbgcyrWZunAXCMhCsAjmLy9IRqasPP15CD0McgfxM-E7BLqdbgnYQkr-jABaOgtpVM0uB9Jco5mnyQbW7LgWCkHjDdFUSK67YTNcIiwC_3hMEsqmahZc_c23K97cdgtR3QyEEP3kD4oC8khTUNBu0-sUtT-UaFwm-hprfKlNIIbX_0pP7YSgn0lFuq2slysNlOh3SaFO3RpbbOm8DJPJaCFYgjkheI5vP8XnDCmTr8v8QlGWKh-ExAWFqIjmIDFAdXg9OSIMNqjWllh0OqBSEpYNrsKZleyGyqLwqPaKJ3APpRZSb3W4lBxR-TUKS1qvNe3lDq1spluIR_7GOto4SG7zoch1kxe8uYFqQwoHX7MBvCsmJV4SQ08RBLYRXYTJBf4C28TNul1YJ22jbVBletnWfz1AnE0CIjLBF32BJdfSYaA8btlQIr3zgXaelgzNpGE8Mt8VNuujNNWCmr83ee7BPuzM'
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
