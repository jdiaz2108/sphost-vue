<template>
  <div id="app">
    <v-app>
    <topbar></topbar>
    <leftPanel></leftPanel>
      <v-content>
        <v-layout justify-center align-center column>

          <router-view />
        </v-layout>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import leftPanel from './components/layouts/leftpanel'
import topbar from './components/layouts/topbar'
export default {
  name: 'App',
  components: {
    topbar,
    leftPanel
  },
  data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
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
