import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cliente from '@/components/clientes/cliente.vue'
import ListClientes from '@/components/clientes/listCliente'
import Factura from '@/components/facturas/Factura'
import ListFactura from '@/components/facturas/listFactura'
import Products from '@/components/products/products'
import ListProducts from '@/components/products/listProducts'

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
      component: Cliente,
      meta: {crudStatus: 'create'}
    },
    {
      path: '/cliente/:slug',
      component: Cliente,
      meta: {crudStatus: 'show'}
    },
    {
      path: '/facturas',
      component: ListFactura
    },
    {
      path: '/facturas/create',
      component: Factura,
      meta: {crudStatus: 'create'}
    },
    {
      path: '/facturas/:slug',
      component: Factura,
      meta: {crudStatus: 'show'}
    },
    {
      path: '/productos',
      component: ListProducts
    },
    {
      path: '/productos/create',
      component: Products,
      meta: {crudStatus: 'create'}
    },
    {
      path: '/productos/:slug',
      component: Products,
      meta: {crudStatus: 'show'}
    }
  ],
  mode: 'history'
})
