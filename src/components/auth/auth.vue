<template>
  <div class="container auth">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-25 border-secondary">
                <div class="card-header aqua-gradient text-center">
                    <img src="http://localhost:8000/images/logointranet.jpg" class="card-img-top shadow rounded flotting-45 mb-2 border-secondary border" alt="Card image cap">
                </div>

                <div class="card-body">
                    <form method="POST" action="">

                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">Correo:</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="email" required autofocus>
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
                                <input id="password" type="password" class="form-control" name="password" required>

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
                                    Loguin
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
export default {
  data() {
    return {
      key: 'value'
    }
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
