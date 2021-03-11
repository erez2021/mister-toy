import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/home-page.vue'
import dashboard from '../views/dashboard.vue'
import about from '../views/about.vue'
import toysApp from '../views/mister-toy.app.vue'
import toysDetails from '../cmps/toy-details.vue'
import toysEdit from '../cmps/toy-edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
 { path: '/toys',
  name: toysApp,
  component: toysApp
},
 { path: '/toys/:toyId/details',
  name: toysDetails,
  component: toysDetails
},
 { path: '/toys/:toyId/edit',
  name: toysEdit,
  component: toysEdit
}
]

const router = new VueRouter({
  routes
})

export default router
