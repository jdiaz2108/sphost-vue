<template>
    <div class="card  card-cascade narrower">
                 <div class="view view-cascade gradient-card-header moon-gradient text-white mb-3">

            <!-- Title -->
            <h2 class="card-header-title my-1">{{title}}</h2>

          </div>
        <div class="card-body">
            <div class="row form-group d-flex align-center">
                <div :class="htmls.labels"><label for="nombre" class="form-control-label">Nombre del
                        Producto:</label></div>
                <div :class="htmls.inputs">
                    <input type="text" id="nombre" v-model="object.nombre" :disabled="disabled" :class="{'form-control': true, 'is-invalid': errors.nombre? true : false}">
                    <div v-if="errors.nombre" class="invalid-feedback">{{errors.nombre}}</div>
                </div>
                <div :class="htmls.labels"><label for="mail" class="form-control-label">Valor:</label></div>
                <div :class="htmls.inputs">
                    <input type="valor" id="mail" v-model="object.valor" :disabled="disabled" :class="{'form-control': true, 'is-invalid': errors.valor? true : false}">
                    <div v-if="errors.valor" class="invalid-feedback">{{errors.valor}}</div>
                </div>
                <div :class="htmls.labels">
                    <label for="document" class="form-control-label">Documento:</label></div>
                <div :class="htmls.inputs">
                    <input type="text" id="document" v-model="object.document" :disabled="disabled" :class="{'form-control': true, 'is-invalid': errors.document? true : false}">
                    <div v-if="errors.document" class="invalid-feedback">{{errors.document}}</div>
                </div>
                <div :class="htmls.labels">
                    <label for="image" class="form-control-label">Imagen:</label></div>
                <div :class="htmls.inputs">
                    <input type="text" id="image" v-model="object.image" :disabled="disabled" :class="{'form-control': true, 'is-invalid': errors.image? true : false}">
                    <div v-if="errors.image" class="invalid-feedback">{{errors.image}}</div>
                </div>
                <div class="py-2 col-3 col-md-2">
                    <label for="descripcion" class="form-control-label">Descripcion:</label></div>
                <div class="py-2 col-9 col-md-10">
                  <textarea class="form-control" id="descripcion" v-model="object.descripcion" aria-label="With textarea"  :disabled="disabled" :class="{'form-control': true, 'is-invalid': errors.descripcion? true : false}"></textarea>
                    <div v-if="errors.descripcion" class="invalid-feedback">{{errors.descripcion}}</div>
                </div>
                <div :class="htmls.labels">
                    <label for="password-confirmation" class="form-control-label">Repetir Contraseña:</label></div>
                <div :class="htmls.inputs">
                    <input type="password" id="password-confirmation" v-model="object.password_confirmation" :disabled="disabled" :class="{'form-control': true, 'is-invalid': errors.password_confirmation? true : false}">
                    <div v-if="errors.password_confirmation" class="invalid-feedback">{{errors.password_confirmation}}</div>
                </div>
            </div>

            <div class="dropdown-divider"></div>
            <div v-if="this.$route.meta.crudStatus == 'show'">
                <div v-if="disabled == true">
                    <a role="button" @click="disabled = false; title = titleSee" class="btn btn-primary btn-lg text-light float-right"><i
                            class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</a>
                </div>
                <div v-if="disabled == false">
                    <a role="button" @click="disabled = true; title = titleEdit" class="btn btn-danger btn-lg float-right text-white mx-1">Cancelar</a>
                    <a role="button" @click="updateObject()" class="btn btn-warning btn-lg float-right mx-1">Guardar</a>
                </div>
            </div>
            <div v-else>
                <div>
                    <a role="button" @click="createObject()" class="btn btn-success btn-lg text-light float-right">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Crear</a>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <div class="p-3"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        created() {
        },
        mounted() {
            if (this.$route.meta.crudStatus == 'show') {
                 this.title = this.titleSee;
                 this.getObject();
            } else {
                this.title = this.title;
                this.object.ide = 0;
                this.disabled = false;
            }
        },
        data() {
            return {
                titleSee: 'Ver Producto',
                titleEdit: 'Editar Producto',
                title: 'Crear Producto',
                disabled: true,
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
                object: {},
                status: 'ver',
                getDepend: null,
                errors: [],
                crudstatus: 'show',
            }
        },
        methods: {
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
            getObject: function () {
                axios
                    .get('/products/'+this.$route.params.slug)
                    .then(response => {
                        this.object = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            updateObject: function () {
                axios({
                        method: 'put',
                        url: '/products/'+this.$route.params.slug,
                        data: this.object,
                    })
                    .then(response => {
                        this.disabled = true;
                        this.title = 'Ver Usuario';
                        this.alertSwal('success', 'Se han Guardado los cambios');
                        this.errors = [];
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                        console.log(error)
                    })
            },
            createObject: function () {
                    axios({
                            method: 'post',
                            url: '/products',
                            data: this.object,
                        })
                        .then(response => {
                            this.title = 'Editar Usuario';
                            this.crudstatus = 'show';
                            this.disabled = true;
                            this.object.slug = response.data;
                            // console.log(response.data);
                            this.alertSwal('success', 'Se ha creado nuevo Usuario');
                            this.$router.push({ path: '/user/'+this.object.slug });
                        })
                        .catch(error => {
                            this.errors = error.response.data.errors;
                            console.log(error.response.data.errors)
                        })
            },
        }
    }
</script>
Producto
