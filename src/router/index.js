import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cliente from '@/components/clientes/cliente.vue'
import ListClientes from '@/components/clientes/listCliente'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cliente',
      component: ListClientes
    },
    {
      path: '/cliente/create',
      component: Cliente
    }
  ]
})
