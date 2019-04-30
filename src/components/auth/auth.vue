<template>
  <div class="container-fluid auth">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-25 border-secondary">
                <div class="card-header aqua-gradient text-center">
                    <img src="http://localhost:8000/images/logointranet.jpg" class="card-img-top shadow rounded flotting-45 mb-2 border-secondary border" alt="Card image cap">
                </div>

                <div class="card-body">
                    <form method="POST" action="" @submit.prevent="doLogin()">

                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">Correo:</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="email" v-model="email" required autofocus>
<!-- {{ $errors->has('email') ? ' is-invalid' : '' }} -->
                                <!-- @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif -->
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Contraseña:</label>

                            <div class="col-md-6">
                                <input v-model="password" id="password" type="password" class="form-control" name="password" required>

                                <!-- @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif -->
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                    <label class="form-check-label" for="remember">
                                       Recordar
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <!-- @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif -->
                            </div>
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
      errors: []
    }
  },
  methods: {
                doLogin: function() {
                axios.post('/auth/login', {
                    email: this.email,
                    password: this.password
                  })
                  .then(response => {
                    localStorage.Authorization = response.data.token_type+' '+response.data.access_token;
                    console.log('entra');
                    this.$root.auth = true;
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
.auth {

    min-height: 100vh;
    background-image: url(http://localhost:8000/images/bgfondo.jpg);
    height: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
