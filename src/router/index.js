import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-7933736.okta.com/oauth2/default',
  client_id: '0oaokqb84Ldb7HLeS5d5',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/implicit/callback',
    component: Auth.handleCallback()
  },
  {
    path: '/clients',
    name: 'ClientsPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Clients.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/inventaire',
    name: 'Inventaire',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Inventaire.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/listefactures',
    name: 'Liste Factures',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListeFactures.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/factures',
    name: 'Factures',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Factures.vue'),
    meta: {
      requiresAuth: true
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
