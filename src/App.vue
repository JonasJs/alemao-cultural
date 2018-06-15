<template>
<<<<<<< HEAD
  <section id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </section>
</template>

<script>

=======
  <main id="app">
  	<transition name="pagina">
    	<router-view></router-view>
    </transition>

  </main>
</template>

<script>
import { auth } from '@/firebase/firebase';
>>>>>>> develop
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

<<<<<<< HEAD
=======
<style>
	.pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>

>>>>>>> develop
