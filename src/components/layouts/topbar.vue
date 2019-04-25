<template>
  <v-toolbar
     
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="$root.$data.drawer = !$root.$data.drawer"></v-toolbar-side-icon>
      <v-img src="/images/logointranet.jpg" alt="Logo" max-height="46.5" max-width="145" :aspect-ratio="19/8"></v-img>
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
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>

      <div class="text-xs-center">
        
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn icon large v-on="on">
        <v-avatar size="40px">
          <img
            src="/storage/1.jpg"
            alt="Vuetify"
          >
        </v-avatar>
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

            <v-list-tile-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
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


          <v-btn class="nav-link text-danger" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">Logout</v-btn>

          <v-btn flat @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" flat @click="menu = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
    </v-toolbar>
    
  
</template>


<style>

  .v-toolbar__content:before {
    background: linear-gradient(0deg,rgba(44,44,44,.2),rgba(41, 33, 32, 0.6));
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .v-toolbar__content {
    background: url('https://demos.creative-tim.com/now-ui-kit-angular/assets/img/header.jpg') 0 0 / cover no-repeat fixed;
    position: relative;
  }
  
</style>