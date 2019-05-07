<template>
  <v-card>
    <v-card-title>
      Lista Clientes
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table  :headers="headers" :items="clientes" :search="search" :rows-per-page-items="rows" class="elevation-1" light>
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.nombre }}</td>
        <td class="text-xs-left">{{ props.item.nit }}</td>
        <td class="text-xs-left">{{ props.item.correo }}</td>
        <td class="text-xs-left">{{ props.item.telefono }}</td>
        <td class="text-xs-left">{{ props.item.direccion }}</td>
        <td class="text-xs-left">{{ props.item.ciudad }}</td>
        <td>
          <router-link v-if="!selectList" class="router-links" :to="'/cliente/'+props.item.slug">
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
  import Pusher from 'pusher-js'
  export default {
    props: ['selectList'],
    created() {
      this.getAllClientes();
      this.subscribe();
    },
    mounted() {
    },
    methods: {
      subscribe () {
    let pusher = new Pusher('d274ae81d8186b0c3d42', {
      authEndpoint: 'http://localhost:8000/broadcasting/auth',
      auth: {
        headers: {
          'Authorization': localStorage.Authorization,
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
         cluster: 'us2',
         forceTLS: true
       });
      pusher.subscribe('private-client')
      pusher.bind('SendEvent', data => {

        this.clientes.push(data.cliente)
                    this.$swal({
                      toast: true,
                    title: 'usuario creado',
                    type: 'success',
                    showConfirmButton: false,
                    position: 'top-end',
                    timer: 10000
                });

      })
    }, 
      onClickButton: function (event) {
      this.$emit('onClickButton', event);
    },
      getAllClientes: function (id) {
        axios({
            method: 'get',
            url: '/clientes',
          })
          .then(response => (this.clientes = response.data.data))
          .catch(function (err) {
            console.log(err)
          })
      },
    },
    data() {
      return {
        clientes: [],
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