<template>
  <v-navigation-drawer style="background-color: initial !important" fixed clipped app v-model="$root.$data.drawer">
    <v-list dense>
      <v-list-tile avatar tag="div" v-if="$vuetify.breakpoint.mdAndDown">
        <v-toolbar-side-icon @click.stop="$root.$data.drawer = !$root.$data.drawer"></v-toolbar-side-icon>
        <v-list-tile-content>
          <img :src="$root.$data.linkLogo">
        </v-list-tile-content>
      </v-list-tile>
      <v-divider v-if="$vuetify.breakpoint.mdAndDown"></v-divider>

      <v-subheader class="mt-3 text--white">GESTION USUARIOS</v-subheader>
      <router-link class="router-links" to="/" exact>
        <v-list-tile href="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Inicio</v-list-tile-title>
        </v-list-tile>
      </router-link>
    </v-list>

    <v-list dense>
      <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </template>
        <router-link class="router-links" :to="subItem.action" v-for="subItem in item.items" :key="subItem.title">
          <v-list-tile>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>

            <v-list-tile-action>
              <v-icon light>{{ item.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </router-link>

      </v-list-group>

      <v-list-tile class="mt-3" @click="">
        <v-list-tile-action>
          <v-icon color="grey darken-1">add_circle_outline</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon color="grey darken-1">settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  created() {
    this.drawerMDown();
  },
  data: () => ({
    items: [{
        action: 'account_circle',
        title: 'Clientes',
        items: [{
            title: 'Listar Clientes',
            action: '/cliente'
          },
          {
            title: 'Crear Cliente',
            action: '/cliente/create'
          }
        ]
      },
      {
        action: 'description',
        title: 'Factura',
        items: [{
            title: 'Listar Facturas',
            action: '/facturas'
          },
          {
            title: 'Crear Factura',
            action: '/facturas/create'
          }
        ]
      },
      {
        action: 'archive',
        title: 'Productos',
        items: [{
            title: 'Listar Productos',
            action: '/productos'
          },
          {
            title: 'Crear Producto',
            action: '/productos/create'
          }
        ]
      }
    ]
  }),
  methods: {
    drawerMDown: function () {
      if (this.$vuetify.breakpoint.mdAndDown) {
        this.$root.drawer = false;
      }
    }
  }
}
</script>

<style>

  .menu:before {
    background: linear-gradient(0deg,rgba(44,44,44,.2),rgba(255, 255, 255, 0.6));
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .menu {
    background: url('https://demos.creative-tim.com/now-ui-kit-angular/assets/img/header.jpg') 35% 0 / cover no-repeat scroll;

  }

  .v-navigation-drawero .v-listo,
  .theme--lighto.v-listo {
    background: none;
  }

  .v-list__group__header--activeo {
    background-color: rgba(151, 153, 162, 0.4);
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 0px 2px #000000;
  }

  .v-list__group__header--activeo .v-list__group__header__prepend-icono .v-icono,
 {
    color: #ffffff;
  }

  .router-linkso {
    color: #ffffff;
    text-decoration: none;
  }
  .router-link-exact-activeo {
    color: #ffffff;
  }
  .router-link-activeo {
    background-color: #f00;
        color: burlywood;
  }

</style>
