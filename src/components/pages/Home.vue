<template>
  <header id="home">
    <Navigation> </Navigation>
    <section class="header-banner">
    	<div class="container">
    		<h1>Alemão cultural</h1>
    		<p>Encontre em poucos clicks o evento que esta<br>acontecendo na sua localizada !</p>
    		<a  class="btn buttonBase">Ver Eventos</a>
    	</div>
    </section>
    <section class="categories">
    	<div class="container">
    		<ul>
    			<li><a href="">Algumas CATEGORIAS</a></li>
    			<li><a href="">TECNOLOGIA</a></li> <hr>
    			<li><a href="">esporte</a></li>
    			<li><a href="">educação</a></li>
    			<li><a href="">cultura</a></li>
    		</ul>
    	</div>
    </section>
    <section class="events-Week">
    	<div class="container">
    		<h3>Eventos da semana</h3>
    		<p>Esses são os eventos que iram rola essa semana.</p>
      
    	</div>
    </section>
    <br>
    <br>
    <br>
    <br>
  </header>
</template>

<script>

import Navigation from '@/components/shared/Navigation';
import slide from '@/components/shared/slide';

export default {
  name: 'app',
  components:{
    Navigation,
    slide
  },
  data(){
  	return{
  		
  	}
  }
}
</script>

