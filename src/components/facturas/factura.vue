<template>
    <div class="col-12">
        <!-- dialogo para seleccionar cliente -->
        <v-dialog v-model="dialogClientes" scrollable>
            <v-card>
              <ListClientes :selectList="true" v-on:onClickButton="clienteSeleccionado($event)"></ListClientes>
            </v-card>
        </v-dialog>
        <!-- Dialogo Para seleccionar productos -->
        <v-dialog v-model="dialogProductos" scrollable>
            <v-card>
                <v-card-title>
                    Seleccionar Productos
                    <v-spacer></v-spacer>
                    <button type="button" class="close" @click="dialogProductos = false">&times;</button>
                </v-card-title>
                <ListProducts :selectList="true" v-on:onClickButton="addProducto($event)"></ListProducts>
                <v-card-actions>
                    <v-btn color="blue-grey lighten-4" @click="dialogProductos = false"><i
                            class="fa fa-times-circle mr-3"></i>
                        Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- inicio form -->
        <form @submit.prevent="formSend" method="POST" class="col-12 form-group">
            <div class="container-fluid">
                <div class="col-lg-12">
                    <div class="card card mt-25">
                        <div class="card-header">
                            <div class="card-body moon-gradient flotting-45 shadow float-none">
                                <h3 class="m-0 text-center text-uppercase text-light">{{title}}</h3>
                            </div>
                        </div>
                        <div class="card-header">
                            <v-btn color="primary" dark @click="dialogClientes = true"><i
                                    class="fa fa-search mr-3"></i> Buscar Cliente</v-btn>
                        </div>
                        <div class="card-body card-block">


                            <div class="row form-group d-flex align-center">
                                <div :class="htmls.labels"><label for="numero"
                                        class="form-control-label text-danger font-weight-bold">Numero cuenta:</label>
                                </div>
                                <div :class="htmls.inputs">
                                    <input type="text" id="numero" v-model="cliente.nombre" class="form-control"  :disabled="disabled">
                                </div>

                                <div :class="htmls.labels"><label for="nombre" class="form-control-label">Fecha
                                        actual:</label></div>
                                <div :class="htmls.inputs">
                                    <v-dialog ref="dialog" v-model="modalDate" :return-value.sync="date" persistent lazy
                                        full-width dark width="290px" locale="es">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field v-model="date" prepend-icon="event" readonly v-on="on">
                                            </v-text-field>
                                        </template>
                                        <v-date-picker v-model="date" scrollable>
                                            <v-spacer></v-spacer>
                                            <v-btn flat color="primary" @click="modalDate = false">Cancel</v-btn>
                                            <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                </div>

                                <div :class="htmls.labels"><label for="nombre" class="form-control-label">Nombre del
                                        Cliente:</label></div>
                                <div :class="htmls.inputs">
                                    <input type="text" id="nombre" v-model="cliente.nombre" class="form-control"  :disabled="disabled" >
                                </div>

                                <div :class="htmls.labels"><label for="mail" class="form-control-label">Correo
                                        Electrónico.</label></div>
                                <div :class="htmls.inputs">
                                    <input type="text" id="mail" v-model="cliente.correo" class="form-control"  :disabled="disabled" >
                                </div>


                                <div :class="htmls.labels">
                                    <label for="nit" class="form-control-label">Numero Identificador:</label></div>
                                <div :class="htmls.inputs">
                                    <input type="text" name="nit" v-model="cliente.nit" class="form-control"  :disabled="disabled" >
                                </div>


                                <div :class="htmls.labels"><label class=" form-control-label">Nit o CC.</label></div>
                                <div :class="htmls.inputs">
                                    <v-radio-group v-model="cliente.ide" row>
                                        <v-radio label="Nit" :value="0"></v-radio>
                                        <v-radio label="CC" :value="1"></v-radio>
                                    </v-radio-group>
                                </div>


                                <div :class="htmls.labels"><label for="telefono" class="form-control-label">Telefono -
                                        Celular:</label></div>
                                <div :class="htmls.inputs">
                                    <input type="text" id="telefono" v-model="cliente.telefono" class="form-control"  :disabled="disabled" >
                                </div>

                                <div :class="htmls.labels">
                                    <label for="direccion" class="form-control-label">Dirección:</label></div>
                                <div :class="htmls.inputs">
                                    <input type="text" id="direccion" v-model="cliente.direccion" class="form-control"  :disabled="disabled" >
                                </div>

                                <div :class="htmls.labels"><label for="ciudad"
                                        class="form-control-label">Ciudad:</label></div>
                                <div :class="htmls.inputs">
                                    <input type="text" id="ciudad" v-model="cliente.ciudad" class="form-control"  :disabled="disabled" >
                                </div>

                                <div :class="htmls.labels"><label for="encargado"
                                        class="form-control-label">Encargado:</label></div>
                                <div :class="htmls.inputs">
                                    <input type="text" v-model="cliente.encargado" class="form-control"  :disabled="disabled" >
                                </div>

                                <div class="py-2 col-3 col-md-3"></div>
                                <div class="py-2 col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                                    <button v-if="newProducto.length > 0" type="submit"
                                        class="btn btn-lg btn-success">Crear</button>
                                </div>
                            </div>

                            <div class="row p-3">
                                <table id="datatable-fixed-header" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Acciones</th>
                                            <th>Nombre</th>
                                            <th>Cantidad</th>
                                            <th>Descripcion</th>
                                            <th>Valor</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="nowpro, key in newProducto">
                                            <input type="hidden" :name="nowpro.id_producto" :value="nowpro">
                                            <td><button class="btn btn-sm btn-danger btn-xs prod-'+productos[i].id+'"
                                                    type="button" @click="delProducto(key)"><i
                                                        class="fa fa-trash-o"></i></button></td>
                                            <td><input class="form-control" v-model.number="nowpro.nombre"></td>
                                            <td><input type="number" class="form-control" size="5"
                                                    v-model.number="nowpro.qty"
                                                    @change="nowpro.total = nowpro.valor * nowpro.qty; totals()"></td>
                                            <td>
                                                <div class="form-group">
                                                    <textarea class="form-control" v-model="nowpro.descripcion" rows="5"
                                                        id="comment"></textarea>
                                                </div>
                                            </td>
                                            <td><input type="number" class="form-control" v-model.number="nowpro.valor"
                                                    @change="nowpro.total = nowpro.valor * nowpro.qty; totals()">
                                            </td>
                                            <td><span>{{formatPrice(nowpro.total)}}</span></td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <button type="button" class="btn btn-success btn-sm"
                                                    @click="dialogProductos = true" data-toggle="modal"
                                                    data-target=".bd-example-modal-lg">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </td>
                                            <td colspan="5"></td>
                                        </tr>
                                        <tr>
                                            <td colspan="4"></td>
                                            <td>Subtotal:</td>
                                            <td>{{formatPrice(subtotal)}}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4"></td>
                                            <td>Agregar Descuento:</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colspan="4"></td>
                                            <td>Impuestos:</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colspan="4"></td>
                                            <td>Total:</td>
                                            <td>{{formatPrice(total)}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="dropdown-divider"></div>
                            <button type="button" @click="formSend()" class="btn btn-danger">Enviar</button>
                        </div>
                        <div class="card-footer">
                            <div class="p-3"></div>
                        </div>

                    </div>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
import ListClientes from './../clientes/listCliente'
import ListProducts from './../products/listProducts'
    import axios from 'axios'
    export default {
      components: {
    ListClientes,
    ListProducts
  },
      created() {

      },
        mounted() {
          this.getAllProducts();
            if (this.$route.meta.crudStatus == 'show') {
                 this.title = 'Ver cuenta';
                this.getFactura();
            } else {
                this.title = 'Crear cuenta';
                this.cliente.ide = 0;
                this.disabled = false;
            }
        },
        data() {
            return {
              products: [],
                title: 'crear cuenta',
                rows: [10, 20, 50, {
                    "text": "$vuetify.dataIterator.rowsPerPageAll",
                    "value": -1
                }],
                disabled: true,
                search: '',
                subtotal: 0,
                total: 0,
                impuesto: 0,
                descuento: 0,
                dialogClientes: false,
                dialogProductos: false,
                cliente: {},
                clientes: null,
                modalDate: false,
                date: new Date().toISOString().substr(0, 10),
                newProducto: [],
                htmls: {
                    labels: {
                        'py-2': true,
                        'col-3': true,
                        'col-md-2': true,
                    },
                    inputs: {
                        'py-2': true,
                        'col-9': true,
                        'col-md-4': true,
                    }
                },
            }
        },
        methods: {
            getFactura: function () {
                axios
                    .get('/facturas/'+this.$route.params.slug)
                    .then(response => {
                        this.cliente = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            formatPrice: function (value) {
                let val = (value / 1).toFixed(0).replace('.', ',');
                return '$ ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
            getAllClientes: function (id) {
                axios({
                        method: 'get',
                        url: '/api/clientes',
                    })
                    .then(response => (this.clientes = response.data.data))
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            getAllProducts: function () {
                axios({
                        method: 'get',
                        url: '/products',
                    })
                    .then(response => (this.products = response.data.data))
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            formSend: function () {
                if ($.isEmptyObject(this.cliente)) {
                    this.alertSwal('error', 'Es necesario seleccionar un cliente');
                } else if (this.newProducto.length <= 0) {
                    this.alertSwal('error', 'Es necesario agregar un producto');
                } else {
                    this.cliente.date = this.date;
                    this.cliente.newProducto = this.newProducto;
                    axios({
                            method: 'post',
                            url: '/api/factura/c/'+this.cliente.slug,
                            data: this.cliente,
                        })
                        .then(function (res) {
                            console.log(res)
                            this.alertSwal('success', 'Se ha generado una nueva factura');
                            setTimeout(window.location = "/factura/"+ response.data , 2000);
                            //window.location = "/factura/"+ res.data.message
                        })
                        .catch(function (err) {
                            console.log(err)
                        })
                }
            },
            clienteSeleccionado: function (params) {
                this.cliente = params;
                this.dialogClientes = false;
            },
            addProducto: function (params) {
                console.log(params);
                 this.dialogProductos = false;
                 this.newProducto.push({
                     producto_id: params.id,
                     nombre: params.nombre,
                     valor: params.valor,
                     descripcion: params.descripcion,
                     qty: params.qty,
                     total: params.valor,
                 });
                 this.totals();
                 alert(JSON.stringify(this.productos[params.id]));
            },
            delProducto: function (id) {
                this.newProducto.splice(id, 1);
            },
            totals: function () {
                var s = 0;
                for (var i = 0; i < this.newProducto.length; i++) {
                    s = s + parseInt(this.newProducto[i].total)
                }
                this.subtotal = s;
            },
            alertSwal: function (title, alert) {
                Swal({
                    title: alert,
                    type: title,
                    confirmButtonText: 'Ok'
                })
            }
        },
        computed: {
              productoObjetos: function () {
                  for (var i = 0; i < this.products.length; i++) {
                      this.products[i].total = this.products[i].valor
                  }
                  return this.products
              }
        }
    }
</script>

<style>
    [type=number] {
        width: 80px !important;
    }
</style>
