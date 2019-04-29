<template>
  <v-card>
    <v-card-title>
      Lista Facturas
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table  :headers="headers" :items="data" :search="search" :rows-per-page-items="rows" class="elevation-1" light>
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.nombre }}</td>
        <td class="text-xs-left">{{ props.item.cantidad }}</td>
        <td class="text-xs-left">{{ props.item.descripcion }}</td>
        <td class="text-xs-left">{{ props.item.valor }}</td>
        <td>
          <router-link v-if="!selectList" class="router-links" :to="'/productos/'+props.item.slug">
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
      this.getAllData();
    },
    methods: {
            onClickButton: function (event) {
      this.$emit('onClickButton', event);
      console.log(event)
    },
      getAllData: function (id) {
        axios({
            method: 'get',
            url: '/products',
          })
          .then(response => (this.data = response.data.data))
          .catch(function (err) {
            console.log(err)
          })
      },
    },
    data() {
      return {
        data: [],
        search: '',
        headers: [{
            text: 'Nombre Cliente',
            align: 'left',
            value: 'nombre',
            sortable: false
          },
          {
            text: 'Inventario',
            value: 'cantidad'
          },
          {
            text: 'Descripción',
            value: 'descripcion'
          },
          {
            text: 'Valor Unitario',
            value: 'valor'
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
