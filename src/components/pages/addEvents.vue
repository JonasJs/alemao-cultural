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
            <label for="exampleFormControlInput1">Data:</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Digite a data da seu evento" v-model="newEvent.date">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Sobre o evento:</label>
            <textarea class="form-control" rows="3" v-model="newEvent.description"></textarea>
          </div>
          <button class="btn buttonBase">Criar</button>
        </form>
      </div>
      <div class="yourEvents">
        <h3 class="title">Seus Eventos</h3>
        <hr>
        <div class="card-group">
          <div class="col-4" v-for="event in events" >
            <div class="card" >
              <img class="card-img-top" v-bind:src="event.image" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">{{event.title}}</h4>
                <p class="card-text">{{event.description}}</p>
                <p class="card-text"><small class="text-muted">{{event.date}}</small></p>
                <router-link :to=" `events/${event['.key']}`" class="btn buttonBase">cadastre-se</router-link>
              </div>
            </div>
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
export default {
  name: 'addEvents',
  firebase: {
    events: eventRef
  },
    components:{
    'Navigation': Navigation
  },
  data(){
  	return {
  		newEvent:{
  			title:'',
  			description: '',
        date: '',
        image: '',
        id_user: ''
  		},
      createdSuccessfully: false
  	}
  },
  methods:{
  	addEvent(){
      if (eventRef.push(this.newEvent)) {
        console.log('sim');
        this.title = '';
        this.description = '';
        this.date = '';
        this.image = '';
        this.createdSuccessfully = true;
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

