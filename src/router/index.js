import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import logComponent from '@/components/auth/auth'
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
      path: '*',
      redirect: '/',
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      component: logComponent
    },
    {
      path: '/cliente',
      component: ListClientes,
      meta: { requiresAuth: true }
    },
    {
      path: '/cliente/create',
      component: Cliente,
      meta: {crudStatus: 'create', requiresAuth: true}
    },
    {
      path: '/cliente/:slug',
      component: Cliente,
      meta: {crudStatus: 'show', requiresAuth: true}
    },
    {
      path: '/facturas',
      component: ListFactura,
      meta: { requiresAuth: true }
    },
    {
      path: '/facturas/create',
      component: Factura,
      meta: {crudStatus: 'create', requiresAuth: true}
    },
    {
      path: '/facturas/:slug',
      component: Factura,
      meta: {crudStatus: 'show', requiresAuth: true}
    },
    {
      path: '/productos',
      component: ListProducts,
      meta: { requiresAuth: true }
    },
    {
      path: '/productos/create',
      component: Products,
      meta: {crudStatus: 'create', requiresAuth: true}
    },
    {
      path: '/productos/:slug',
      component: Products,
      meta: {crudStatus: 'show', requiresAuth: true}
    }
  ],
  mode: 'history'
})
