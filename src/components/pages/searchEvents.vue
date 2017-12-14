<template>
  <section id="home">
    <Navigation> </Navigation>
    <div class="events-Week">
    	<div class="container">
    		<h3>Buscar evento</h3>
    		<p>Filte os evento de acordo com sua preferencia.</p>
        <div class="form-group">
        <label for="exampleFormControlInput1">Filtro:</label>
        <input type="text" class="form-control" v-on:input="filtro = $event.target.value">
         <a class="btn"><i class="fa fa-eye" aria-hidden="true"></i>Ver Mais</a>
    </div>
    <select v-model="selected">
      <option disabled value="">Escolha um item</option>
      <option>Titulo</option>
      <option>Descriçao</option>
    </select>
    <br>
    <span>Selecionado: {{ selected }}</span>
        <div class="card-group">
          <div class="col col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4" v-for="(event, count) in filtrando" v-if="count < teste" >
            <Slide :image="event.image" :title="event.title" :event_summary="event.event_summary" :category="event.category" :date="event.date" :link="`evento/${event['.key']}`" > </Slide>
          </div>
         
        </div>
         <button v-on:click="add()">adicionar</button>
      </div>
    </div>
  </section>
</template>

<script>


// Adiciona o firebase
import { eventRef } from '@/firebase/firebase';

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
      teste: 4,
      filtro: '',
      selected: ''
  	}
  },
  methods:{
    add(){
      return this.teste = this.teste + 1
    }
  },
  computed: {

    filtrando() {

      if (this.filtro) {
         let exp = new RegExp(this.filtro.trim(), 'i');
        //if(this.selected == 'Titulo'){
          return this.events.filter(events => exp.test([events.title, events.date] ));
        //}
      } else {
        return this.events;
      }

    }
  }
}
</script>

