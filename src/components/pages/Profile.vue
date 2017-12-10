<template>
  <header id="app">
    <h1>teste</h1>
	<br>
	<br>
    <button v-on:click="logout"> SAIR </button>
  </header>
</template>

<script>
// Adiciona o firebase
import { auth } from '@/firebase/firebase';

export default {
  name: 'Perfil',
  methods:{
  	logout(){
  		auth.signOut().then(() =>{
  			this.$router.replace('/')
  		});
  	}
  }
}
</script>

