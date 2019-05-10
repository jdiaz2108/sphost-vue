<template>
  <v-card>
    <v-card-title>
      Lista Usuarios
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table  :headers="headers" :items="objects" :search="search" :rows-per-page-items="rows" class="elevation-1" light>
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.document }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.level }}</td>
        <td class="text-xs-left">{{ props.item.image }}</td>        <td>
          <router-link v-if="!selectList" class="router-links" :to="'/user/'+props.item.slug">
            <button class="btn btn-primary">Ver</button>
          </router-link>
          <button v-if="selectList" @click="onClickButton(props.item)" class="btn btn-success">Seleccionar</button>
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
    props: ['selectList'],
    created() {
      this.getAllObjects();
    },
    mounted() {
    },
    methods: {
      onClickButton: function (event) {
      this.$emit('onClickButton', event);
    },
      getAllObjects: function (id) {
        axios({
            method: 'get',
            url: '/users',
          })
          .then(response => (this.objects = response.data.data))
          .catch(function (err) {
            console.log(err)
          })
      },
    },
    data() {
      return {
        objects: [],
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


<style>
  .swal2-success-circular-line-left,
  .swal2-success-circular-line-right,
  .swal2-success-fix,
  .swal2-popup {
    background-color: #404040;
  }

  .swal2-title {
    color: #ffffff !important;
  }
</style>
