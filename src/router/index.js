import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import SignUp from '@/components/pages/SignUp';

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
    },
    {
      path: '/cadastre-se',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
