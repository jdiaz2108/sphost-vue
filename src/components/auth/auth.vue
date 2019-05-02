<template>
  <div class="container-fluid auth d-flex">
    <div class="row justify-content-center">
      <div class="col-12 col-md-7 col-lg-5 col-xl-3 align-self-center" style="position: relative;bottom: 5rem;">
        <div class="card mt-25 border-secondary">
          <div class="card-header aqua-gradient text-center"><img
              src="http://solopendones.host/assets/images/logointranet.jpg" alt="Card image cap"
              class="card-img-top shadow rounded flotting-45 mb-2 border-secondary border"></div>
          <div class="card-body">
            <form @submit.prevent="doLogin()">
              <div class="input-group mb-3"><input name="email" v-model="email" type="email"
                  placeholder="Correo electrónico" aria-describedby="basic-addon2" required="required"
                  autofocus="autofocus" class="form-control">
                <div class="input-group-append"><span id="basic-addon2" class="input-group-text" style="width: 34px;"><i
                      aria-hidden="true" class="fa fa-envelope"></i></span></div>
              </div>
              <div class="input-group mb-3"><input name="password" v-model="password" type="password"
                  placeholder="Contraseña" aria-describedby="basic-addon2" required="required" autofocus="autofocus"
                  class="form-control">
                <div class="input-group-append"><span id="basic-addon2" class="input-group-text" style="width: 34px;"><i
                      aria-hidden="true" class="fa fa-lock"></i></span></div>
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox mb-3"><input type="checkbox" id="customCheck1"
                    class="custom-control-input"> <label for="customCheck1"
                    class="custom-control-label">Recordarme</label></div> <button type="submit"
                  class="btn btn-primary">Iniciar Sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import axios from 'axios'
export default {
  data() {
    return {
email: null,
password: null,
      key: 'value',
      errors: [],
    }
  },
  methods: {
                doLogin: function() {
                axios.post('/auth/login', {
                    email: this.email,
                    password: this.password
                  })
                  .then(response => {
                    localStorage.Authorization = 'Bearer '+response.data.access_token;
                    axios.defaults.headers.common['Authorization'] = localStorage.Authorization;
                    this.$root.auth = true;
                    axios.get('/auth/user').then(response => { this.$root.user = response.data})
                    this.$router.push({ path: '/' });
                  })
                    // .catch(error => {
                    //     this.errors = error.response.data;
                    //         if (this.errors.errors.email) {
                    //             this.Swal(this.errors.errors.email[0], 'error');
                    //         }
                    //         if (this.errors.errors.password) {
                    //             this.Swal(this.errors.errors.password[0], 'error');
                    //         }
                    //     console.log(error)
                    //     })


            },
  },
}
</script>

<style>
.auth:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
}

.auth {
    min-height: 100vh;
    background: url(http://solopendones.host/assets/images/bgfondo.jpg) 50%/cover no-repeat fixed;
    position: relative;
}
</style>
