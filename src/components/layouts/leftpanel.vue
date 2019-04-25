<template>
  <v-navigation-drawer class="menu" v-model="$root.$data.drawer" fixed clipped dark app>
        <v-list dense>
            <v-list-tile avatar tag="div" v-if="$vuetify.breakpoint.mdAndDown">
                <v-toolbar-side-icon @click.stop="$root.$data.drawer = !$root.$data.drawer"></v-toolbar-side-icon>
                <v-list-tile-content>
                    <img src="/images/logointranet.jpg">
                </v-list-tile-content>
            </v-list-tile>
            <v-divider v-if="$vuetify.breakpoint.mdAndDown"></v-divider>

            <v-subheader class="mt-3 text--white">GESTION USUARIOS</v-subheader>

            <v-list-tile href="/">
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Inicio</v-list-tile-title>
            </v-list-tile>
        </v-list>



    <v-list dense>
      <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="" :href="subItem.action">
          <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>

          <v-list-tile-action>
            <v-icon light>{{ item.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>

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
data: () => ({
        items: [
          {
            action: 'account_circle',
            title: 'Clientes',
            items: [
              { title: 'Listar Clientes',
                action: '/clientes' },
                { title: 'Crear Cliente',
                action: '/clientes/create' }
            ]
          },
          {
            action: 'description',
            title: 'Factura',
            items: [
              { title: 'Listar Facturas',
                action: '/factura' },
                { title: 'Crear Factura',
                action: '/factura/create' }
            ]
          },
          {
            action: 'beenhere',
            title: 'Paz y Salvo',
            items: [
              { title: 'Estado',
              action: '/pysEstado' },
              { title: 'Procesos Activos',
              action: '/pys' }
            ]
          },
          {
            action: 'accessibility',
            title: 'Persmisos',
            items: [
              { title: 'Solicitud Permiso',
              action: '/permisos' }
            ]
          },
          {
            action: 'person_pin_circle',
            title: 'Mapa',
            active: true,
            items: [
              { title: 'Geolocalizador',
              action: '/map' }
            ]
          },
          {
            action: 'alarm_add',
            title: 'Health',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'content_cut',
            title: 'Office',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'local_offer',
            title: 'Promotions',
            items: [
              { title: 'List Item' }
            ]
          }
        ],
    })
  }
</script>

<style>

  .menu:before {
    background: linear-gradient(0deg,rgba(44,44,44,.2),rgba(41, 33, 32, 0.6));
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

  .v-navigation-drawer .v-list,
  .theme--light.v-list {
    background: none;
  }
  
  .v-list__group__header--active {
    background-color: rgba(151, 153, 162, 0.4);
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 0px 2px #000000;
  }

  .v-list__group__header--active .v-list__group__header__prepend-icon .v-icon,
  .v-btn .v-btn__content .v-icon,
  .theme--light.v-btn,
  .theme--light.v-icon {
    color: #ffffff;
  }

</style>