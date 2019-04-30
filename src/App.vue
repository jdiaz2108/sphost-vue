<template>
  <div id="app">
    <v-app v-if="$root.$data.auth">
      <topbar></topbar>
      <leftPanel></leftPanel>
      <v-content class="m-4">
        <v-layout justify-center align-center column>
          <div class="row w-100">
            <div class="col-lg-12">
              <router-view :key="$route.fullPath" />
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
</style>
