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
    localStorage.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM4NzQzZDYyN2I5ZTY2ZjA2N2VkMzYyODE0NmE5ZjUxMjY1YWZhYmJlYjUxYjc2OTc5YTU3Yzk0YjA2ZmM2N2JhNDYwNTQwNmVhNTdiMThmIn0.eyJhdWQiOiIxIiwianRpIjoiMzg3NDNkNjI3YjllNjZmMDY3ZWQzNjI4MTQ2YTlmNTEyNjVhZmFiYmViNTFiNzY5NzlhNTdjOTRiMDZmYzY3YmE0NjA1NDA2ZWE1N2IxOGYiLCJpYXQiOjE1NTYyNDE1NTAsIm5iZiI6MTU1NjI0MTU1MCwiZXhwIjoxNTg3ODYzOTUwLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.aLLqsVxf4sAQ2TzY0tpeyl18BNeAFYioNwIUyZdhBALjXQy7Hn9z528hwF67S946PCOPTJ1zeEBf7gXS4tkNV_ZMY3WzLEEPUyeG9pPD7ToqhnVYEJ3hbLGgfl_znnjl4hV5k54NNhS4c-GIuiKthXVbrMdX_VZXInYiWofsGGWLM35ep0XtjT0bLuYccXLUt1hy8t4wYZNA1jTBcrjsuIZjs2xMmEk9ouN9eZA70J09kO6LY0BkIiioov8Ytg-IfzOgoB3ji6fwAOxUqTsqs220JPxfAFLyfvG1vYYfz9409koaSjy7V-9itlh2CK-TrsgU5HPoUuGW5jn9we_epxsNcUmOTPof2ShcnNKvp6YYGYNc09OD4sdZ9iD5g4ZtNAsgsWGK5sQJQhCPzhgmFGQMPTwrxROofEmR3okkGG12cv0MzwoVQGxvk16MDfYx3i14pHR0DCHyQsqb-HkCTuXAJDTf9OjyVdd4MxPnzFY5nkp0i8H9cWs3f1ydtdrRUphqBIj0fnFOaWb49HYP8qLMvJ9E_myHKgaZCKaqKpFiEJbbe4ulSFy56C6U6DSzfL0zrmfn5h-2zqtu8FMGjQvVYxLBZXn5bz_X7-D2Gd_Ltc1LOrhw42ckpjmFXfLJf_2uC_QVY5O-Qno9ZY64eioEvawc6FrdlTL9eHTbeTs'
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
