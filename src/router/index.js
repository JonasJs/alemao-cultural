import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import SignUp from '@/components/pages/SignUp';
import Profile from '@/components/pages/profile';
import addEvents from '@/components/pages/addEvents';
import searchEvents from '@/components/pages/searchEvents';

import Events from '@/components/pages/Events'

// Adiciona o firebase
import { auth } from '@/firebase/firebase';

Vue.use(Router)


let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      
    },
    {
      path: '/perfil/adicionar',
      name: 'addEvents',
      component: addEvents,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/perfil',
      name: 'Profile',
      component: Profile,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/buscar',
      name: 'searchEvents',
      component: searchEvents,
    },
    {
      path: '/evento/:key',
      name: 'Events',
      props: true,
      component: Events
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
    },

  ]
})

// router.beforeEach((to, from, next) => {
//   let currentUser = auth.currentUser;
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if(requiresAuth && !currentUser) next('entrar')
//   else next()
// });

export default router

