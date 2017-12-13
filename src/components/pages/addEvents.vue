<template>
  <section class="addEvents">
  	<Navigation> </Navigation>
    <div class="container">
      <div class="addEvents-form">
        <h3 class="title">Crie um Novo evento</h3>
        <hr>
        <transition name="createdSuccessfully">
          <div class="alert alert-success" role="alert" v-show="createdSuccessfully">
            Evento criado com sucesso !
          </div>
        </transition>
        <form v-on:submit.prevent="addEvent()">
          <div class="form-group">
            <label for="exampleFormControlInput1">Titulo:</label>
            <input type="text" class="form-control"  placeholder="Digite o titulo do seu evento" v-model="newEvent.title">
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Imagem:</label>
            <input type="text" class="form-control"  placeholder="Url da imagem" v-model="newEvent.image">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Categoria</label>
            <select class="form-control" value="Tecnologia" v-model="newEvent.category" >
              <option>Tecnologia</option>
              <option>Família</option>
              <option>Saúde</option>
              <option>Esporte</option>
              <option>Fotografia</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Data:</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Digite a data da seu evento" v-model="newEvent.date">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Resumo do evento:</label>
            <textarea class="form-control" maxlength="173" rows="2" v-model="newEvent.event_summary" placeholder="Fale sobre seu evento usando menos de 173 caracteres"></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Sobre o evento:</label>
            <textarea class="form-control" rows="5" v-model="newEvent.description"></textarea>
          </div>
          <button class="btn buttonBase">Criar</button>
        </form>
      </div>
      <div class="yourEvents">
        <h3 class="title">Seus Eventos</h3>
        <hr>
        <div class="card-group">
          <div class="col-4" v-for="event in events">
            <Slide :image="event.image" :title="event.title" :description="event.description" :date="event.date" :link="`events/${event['.key']}`" > </Slide> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Adiciona o firebase
import { auth, eventRef } from '@/firebase/firebase';

import Navigation from '@/components/shared/Navigation';
import Slide from '@/components/shared/Slide';

export default {
  name: 'addEvents',
  firebase: {
    events: eventRef
  },
    components:{
    'Navigation': Navigation,
    'Slide':Slide
  },
  data(){
  	return {
  		newEvent:{
  			title:'',
  			description: '',
        date: '',
        image: '',
        event_summary: '',
        category: '',
        id_user: ''
  		},
      createdSuccessfully: false
  	}
  },
  methods:{
  	addEvent(){
      if (eventRef.push(this.newEvent)) {
        console.log('sim');
        this.newEvent.title = '';
        this.newEvent.description = '';
        this.newEvent.date = '';
        this.newEvent.image = '';
        this.newEvent.event_summary = '';
        this.newEvent.category = ''
        this.createdSuccessfully = true;
        var texto = this.newEvent.description;
        var n = texto.split('\n').length;
      }
  	}
  }
}
</script>

<style>

.createdSuccessfully-enter-active {
transition: all .3s ease;
}
.createdSuccessfully-leave-active {
transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.createdSuccessfully-enter, .createdSuccessfully-leave-to{
transform: translateX(10px);
opacity: 0;
}
</style>

