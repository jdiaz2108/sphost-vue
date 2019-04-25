<template>
  <v-card>
    <v-card-title>
      Lista Clientes
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="clientes"
      :search="search"
    >
      <template v-slot:items="props">
        <td>{{ props.item.nombre }}</td>
        <td class="text-xs-right">{{ props.item.nit }}</td>
        <td class="text-xs-right">{{ props.item.correo }}</td>
        <td class="text-xs-right">{{ props.item.telefono }}</td>
        <td class="text-xs-right">{{ props.item.direccion }}</td>
        <td class="text-xs-right">{{ props.item.ciudad }}</td>
      </template>
      <template v-slot:pageText="props">
      Filas {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
    </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
    import Swal from "sweetalert2"
    import axios from 'axios'
  export default {
    created() {
      this.getAllClientes();
    },
    methods: {
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
    data () {
      return {
        clientes: [],
        search: '',
        headers: [
          {
            text: 'Nombre Cliente',
            align: 'right',
            value: 'nombre',
            sortable: false
          },
          { text: 'Identificación', value: 'nit' },
          { text: 'Correo', value: 'correo' },
          { text: 'Telefono', value: 'telefono' },
          { text: 'Dirección', value: 'direccion' },
          { text: 'Ciudad', value: 'ciudad' }
        ],
        rows: [10, 20, 50, {
                    "text": "$vuetify.dataIterator.rowsPerPageAll",
                    "value": -1
                }],
      }
    }
  }
</script>