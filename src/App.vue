<template>
  <main id="app">
  	<transition name="pagina">
    	<router-view></router-view>
    </transition>

  </main>
</template>

<script>
import { auth } from '@/firebase/firebase';
export default {
  name: 'app',
  dat(){
    return{
     
    }
  },
  updated(){
    // Verifica se o usuario esta logado
    var user = auth.currentUser;
    if(this.$route.path === '/perfil/adicionar'){
      console.log('é igual')
      if (user) {
        this.$router.replace('/perfil/adicionar');
        console.log('sim')
      } else {
        this.$router.replace('/entrar');
         console.log('nao')
      }
    }
  }
}
</script>

<style>
	.pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>

