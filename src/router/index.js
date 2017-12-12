import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import SignUp from '@/components/pages/SignUp';
import Profile from '@/components/pages/profile';

import Events from '@/components/pages/Events'

// Adiciona o firebase
import { auth } from '@/firebase/firebase';

Vue.use(Router)


let router = new Router({
  routes: [
    {
      path:'*',
      redirect: '/entrar'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
      meta:{
        requiresAuth: true
      }
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

router.beforeEach((to, from, next) => {
  let currentUser = auth.currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('entrar')
  else next()

});

export default router