import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Login from '@/components/pages/Login';
import Home from '@/components/pages/Home';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/entrar',
      name: 'Login',
      component: Login
    }
  ]
})
