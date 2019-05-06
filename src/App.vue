<template>
  <div id="app">
    <v-app v-if="$root.$data.auth">
      <topbar></topbar>
      <leftPanel></leftPanel>
      <v-content class="m-4">
        <v-layout justify-center align-center column>
          <div class="row w-100">
            <div class="col-lg-12">
              <transition name="fade"  mode="out-in">
              <router-view :key="$route.fullPath" />
              </transition>
            </div>
          </div>
        </v-layout>
      </v-content>
    </v-app>
    <router-view :key="$route.fullPath" v-if="!$root.$data.auth"/>
  </div>
</template>


<script>
import leftPanel from './components/layouts/leftpanel'
import topbar from './components/layouts/topbar'
import authComponent from './components/auth/auth'
export default {
  name: 'App',
  components: {
    topbar,
    leftPanel,
    authComponent
  },
  data () {
      return {
        drawer: null
      }
    }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
