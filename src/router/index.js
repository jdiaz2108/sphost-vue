import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import logComponent from '@/components/auth/auth'
import Cliente from '@/components/clientes/cliente.vue'
import ListClientes from '@/components/clientes/listCliente'
import Factura from '@/components/facturas/Factura'
import ListFactura from '@/components/facturas/listFactura'
import Products from '@/components/products/products'
import ListProducts from '@/components/products/listProducts'
import User from '@/components/user/user'
import ListUser from '@/components/user/listUser'
import Mapa from '@/components/map/map'

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
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: logComponent,
      meta: { requiresVisitor: true }
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
    },
    {
      path: '/user',
      component: ListUser,
      meta: {requiresAuth: true}
    },
    {
      path: '/user/create',
      component: User,
      meta: {crudStatus: 'create', requiresAuth: true}
    },
    {
      path: '/user/:slug',
      component: User,
      meta: {crudStatus: 'show', requiresAuth: true}
    },
    {
      path: '/map',
      component: Mapa,
      meta: {requiresAuth: true}
    }
  ],
  mode: 'history'
})
