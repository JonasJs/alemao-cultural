<template>
  <header id="profile">
    <Navigation> </Navigation>
    <div class="container">
      <h1>Seus evento</h1>
    </div>
    
	<br>
	<br>
    <button v-on:click="logout"> SAIR </button>
  </header>
</template>

<script>
// Adiciona o firebase
import { auth, eventRef } from '@/firebase/firebase';
// Components
import Navigation from '@/components/shared/Navigation';

export default {
  name: 'Profile',
  firebase: {
    events: eventRef
  },
  components:{
    Navigation
  },
  methods:{
  	logout(){
  		auth.signOut().then(() =>{
  			this.$router.replace('/')
  		});
  	}
  }
}
</script>

