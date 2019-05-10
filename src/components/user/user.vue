<template>
    <div class="card  card-cascade narrower">
                 <div class="view view-cascade gradient-card-header moon-gradient text-white mb-3">

            <!-- Title -->
            <h2 class="card-header-title my-1">{{title}}</h2>

          </div>
        <div class="card-body">
            <div class="row form-group d-flex align-center">
                <div :class="htmls.labels"><label for="name" class="form-control-label">Nombre del
                        Usuario:</label></div>
                <div :class="htmls.inputs">
                    <input type="text" id="name" v-model="object.name" :disabled="disabled" :class="{'form-control': true, 'is-invalid': errors.name? true : false}">
                    <div v-if="errors.name" class="invalid-feedback">{{errors.name}}</div>
                </div>
                <div :class="htmls.labels"><label for="mail" class="form-control-label">Correo
                        Electrónico.</label></div>
                <div :class="htmls.inputs">
                    <input type="email" id="mail" v-model="object.email" :disabled="disabled" :class="{'form-control': true, 'is-invalid': errors.email? true : false}">
                    <div v-if="errors.email" class="invalid-feedback">{{errors.email}}</div>
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
                <template v-if="this.$route.meta.crudStatus == 'show'">
                <div :class="htmls.labels">
                    <label for="password" class="form-control-label">Contraseña:</label></div>
                <div :class="htmls.inputs">
                    <input type="password" id="password" v-model="object.password" :disabled="disabled" :class="{'form-control': true, 'is-invalid': errors.password? true : false}">
                    <div v-if="errors.password" class="invalid-feedback">{{errors.password}}</div>
                </div>
                <div :class="htmls.labels">
                    <label for="password-confirmation" class="form-control-label">Repetir Contraseña:</label></div>
                <div :class="htmls.inputs">
                    <input type="password" id="password-confirmation" v-model="object.password_confirmation" :disabled="disabled" :class="{'form-control': true, 'is-invalid': errors.password_confirmation? true : false}">
                    <div v-if="errors.password_confirmation" class="invalid-feedback">{{errors.password_confirmation}}</div>
                </div>
                </template>
            </div>

            <div class="dropdown-divider"></div>
            <div v-if="this.$route.meta.crudStatus == 'show'">
                <div v-if="disabled == true">
                    <a role="button" @click="disabled = false; title = 'Editar cliente'" class="btn btn-primary btn-lg text-light float-right"><i
                            class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</a>
                </div>
                <div v-if="disabled == false">
                    <a role="button" @click="disabled = true; title = 'Ver cliente'" class="btn btn-danger btn-lg float-right text-white mx-1">Cancelar</a>
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
                titleSee: 'Ver Usuario',
                titleEdit: 'Editar Usuario',
                title: 'Crear Usuario',
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
                    .get('/users/'+this.$route.params.slug)
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
                        url: '/users/'+this.$route.params.slug,
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
                            url: '/auth/register',
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
