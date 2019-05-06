<template>
<div class="container-fluid">


<div class="row">
  <div class="col-6">
    <div class="card card-cascade wider" style="border: 0">
      <div class="elevation-20 rounded" style="z-index: 2">
        <img class="card-img-top rounded overlay" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap">
      </div>
      <div class="card-body card-body-cascade">
        <h3 class="card-title">Title</h3>
        <p class="card-text">Text</p>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Title</h3>
        <p class="card-text">Text</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 mb-4 mt-4">
        <!-- Card Narrower -->
        <div class="card card-cascade narrower">

          <!-- Card image -->
         <div class="view view-cascade gradient-card-header moon-gradient text-white">

            <!-- Title -->
            <h2 class="card-header-title mb-3">Marta</h2>
            <!-- Subtitle -->
            <p class="card-header-subtitle mb-0">Deserve for her own card</p>

          </div>

          <!-- Card content -->
          <div class="card-body card-body-cascade">

            <!-- Label -->
            <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
            <!-- Title -->
            <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
            <!-- Text -->
            <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.</p>
            <!-- Button -->
            <a class="btn btn-unique waves-effect waves-light">Button</a>

          </div>

        </div>
        <!-- Card Narrower -->

      </div>
      <div class="col-5">
        <div class="card moon-gradient h-75">
          hola
        </div>
      </div>
</div>






    <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
      :large="$vuetify.breakpoint.mdAndUp"
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
        <v-card-text class="white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outline
          >
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App a ver si esta mka si esta funcionando wbn',
      items: [
        {
          color: 'red lighten-2',
          icon: '3d_rotation'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
