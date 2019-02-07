   import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Register from './views/auth/Register.vue'
import Login from './views/auth/Login.vue'
import AllLinks from './views/links/AllLinks.vue'
import EditLink from './views/links/EditLink.vue'
import CreateLink from './views/links/CreateLink.vue'
import Results from './views/links/Results.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/links',
      name: 'links-all',
      component: AllLinks
    },
    {
      path: '/links/new',
      name: 'link-create',
      component: CreateLink
    },
    {
      path: '/links/:id',
      name: 'link-edit',
      component: EditLink
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'*',
      redirect:'/'
    }
  ],
  linkActiveClass:'active',
  mode: 'history'
})
