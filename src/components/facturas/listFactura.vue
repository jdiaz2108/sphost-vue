<template>
  <v-card>
    <v-card-title>
      Lista Facturas
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table  :headers="headers" :items="facturas" :search="search" :rows-per-page-items="rows" class="elevation-1" light>
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.nombre }}</td>
        <td class="text-xs-left">{{ props.item.nit }}</td>
        <td class="text-xs-left">{{ props.item.correo }}</td>
        <td class="text-xs-left">{{ props.item.telefono }}</td>
        <td class="text-xs-left">{{ props.item.direccion }}</td>
        <td class="text-xs-left">{{ props.item.ciudad }}</td>
        <td>
          <router-link class="router-links" :to="'/cliente/'+props.item.slug">
            <button class="btn btn-primary">Ver</button>
          </router-link>
        </td>
      </template>
      <template v-slot:pageText="props">
        Filas {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          La busqueda de "{{ search }}" no dio resultados.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import axios from 'axios'
  export default {
    created() {
      this.getAllFacturas();
    },
    methods: {
      getAllFacturas: function (id) {
        axios({
            method: 'get',
            url: '/factura',
          })
          .then(response => (this.facturas = response.data.data))
          .catch(function (err) {
            console.log(err)
          })
      },
    },
    data() {
      return {
        facturas: [],
        search: '',
        headers: [{
            text: 'Nombre Cliente',
            align: 'left',
            value: 'nombre',
            sortable: false
          },
          {
            text: 'Identificación',
            value: 'nit'
          },
          {
            text: 'Correo',
            value: 'correo'
          },
          {
            text: 'Telefono',
            value: 'telefono'
          },
          {
            text: 'Dirección',
            value: 'direccion'
          },
          {
            text: 'Ciudad',
            value: 'ciudad'
          },
          {
            text: 'Accion',
            value: 'accion',
            sortable: false
          }
        ],
        rows: [15, 30, 50, {
          "text": "$vuetify.dataIterator.rowsPerPageAll",
          "value": -1
        }],
      }
    }
  }
</script>
