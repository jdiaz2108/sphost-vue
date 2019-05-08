<template>
  <v-toolbar fixed clipped-left app>
    <v-toolbar-side-icon @click.stop="$root.drawer = !$root.drawer"></v-toolbar-side-icon>
    <v-img :src="$root.linkLogo" alt="Logo" max-height="46.5" max-width="145" :aspect-ratio="19/8"></v-img>
    <v-spacer></v-spacer>
    <!--       <v-text-field
v-if="$vuetify.breakpoint.mdAndDown"
height="40"
flat
solo-inverted
prepend-icon="search"
label="Search"
class="hidden-sm-and-down"
></v-text-field> -->
    <v-spacer></v-spacer>
        <v-menu
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon>
        <v-badge
      color="purple"
      overlap
    >
      <template v-slot:badge>
         <span>{{$root.usersNumber}}</span>
      </template>
      <v-icon
        color="grey lighten-1"
        large
      >
        account_circle
      </v-icon>
    </v-badge>
      </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
              <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>

<v-divider></v-divider>

        <v-list three-line>
          <template v-for="(item, index) in $root.allUsers">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.email"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Enable messages</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Enable hints</v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat @click="menu2 = false">Cancel</v-btn>
          <v-btn color="primary" flat @click="menu2 = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>

    <div class="text-xs-center">

      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="40px">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Vuetify">
            </v-avatar>
          </v-btn>
        </template>

        <v-card light>
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{$root.user ? $root.user.name : ''}}</v-list-tile-title>
                <v-list-tile-sub-title>{{$root.user ? $root.user.email : ''}}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <!-- <v-list>
<v-list-tile>
<v-list-tile-action>
<v-switch v-model="message" color="purple"></v-switch>
</v-list-tile-action>
<v-list-tile-title>Enable messages</v-list-tile-title>
</v-list-tile>

<v-list-tile>
<v-list-tile-action>
<v-switch v-model="hints" color="purple"></v-switch>
</v-list-tile-action>
<v-list-tile-title>Enable hints</v-list-tile-title>
</v-list-tile>
</v-list> -->

          <v-card-actions>
            <v-spacer></v-spacer>


            <v-btn class="nav-link text-light" color="red" @click="logout($root)">Cerrar Sesión</v-btn>

            <v-btn flat @click="menu = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </div>
  </v-toolbar>


</template>

<script>
  import axios from 'axios'
  export default {
      data: () => ({
        items10: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
          }
        ],
        menu2: false,
      message: false,

        fav: true,
      menu: false,
      message: false,
      hints: true,
      items: [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
    }),
    methods: {
      logout: function (root) {
        this.alertSwal('success', 'has cerrado sesión correctamente.')
        axios.get('/auth/logout')
        localStorage.removeItem('Authorization')
        root.auth = false
        this.$router.push({ path: '/login' });
      },
      alertSwal(type, title){
            // Use sweetalert2
            this.$swal({
                    title: title,
                    type: type,
                    confirmButtonText: 'Aceptar',
                    showConfirmButton: false,
                    timer: 2000
                });
        },
    },
    }
</script>

<style>

  .v-toolbar__contento:before {
    background: linear-gradient(0deg,rgba(44,44,44,.2),rgba(41, 33, 32, 0.6));
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .v-toolbar__contento {
    background: url('https://demos.creative-tim.com/now-ui-kit-angular/assets/img/header.jpg') 0 0 / cover no-repeat fixed;
    position: relative;
  }

</style>
