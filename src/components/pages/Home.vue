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
        <div class="card-group">
          <div class="col-4" v-for="(event, count) in events" v-if="count < 3">
            <Slide :image="event.image" :title="event.title" :description="event.description" :date="event.date" :link="`events/${event['.key']}`" > </Slide> 
          </div>
        </div>
      </div>
    </section>
    <section class="header-banner">
      <div class="container">
        <h1>Sobre</h1>
        <p>Encontre em poucos clicks o evento que esta<br>acontecendo na sua localizada !</p>
        <a  class="btn buttonBase">Ver Eventos</a>
      </div>
    </section>
    <br>
    <br>
    <br>
    <br>
  </header>
</template>

<script>


// Adiciona o firebase
import { auth, eventRef } from '@/firebase/firebase';

import Navigation from '@/components/shared/Navigation';
import Slide from '@/components/shared/Slide';

export default {
  name: 'app',
  firebase: {
    events: eventRef
  },
  components:{
    'Navigation': Navigation,
    'Slide': Slide
  },
  data(){
  	return{
      
  	}
  }
}
</script>

