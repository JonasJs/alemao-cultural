<template>
  <header id="home">
    <Navigation> </Navigation>
    <section class="header-banner">
    	<div class="container">
    		<h1>Alemão cultural</h1>
    		<p>Encontre em poucos clicks o evento que esta<br>acontecendo na sua localizada !</p>
    		<router-link to="/buscar" class="btn buttonBase">Ver Eventos</router-link>
    	</div>
    </section>
    <section class="categories">
    	<div class="container">
    		<ul>
    			<li><router-link to="/perfil/adicionar">Algumas CATEGORIAS</router-link></li>
    			<li><router-link to="/" href="">TECNOLOGIA</router-link></li>
    			<li><router-link to="/" href="">esporte</router-link></li>
    			<li><router-link to="/" href="">educação</router-link></li>
    			<li><router-link to="/" href="">cultura</router-link></li>
    		</ul>
    	</div>
    </section>
    <section class="events-Week">
    	<div class="container">
    		<h3>Eventos da semana</h3>
    		<p>Esses são os eventos que iram rola essa semana.</p>
        <div class="card-group">
          <div class="col col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4" v-for="(event, count) in events" v-if="count < 3">
            <Slide :image="event.image" :title="event.title" :event_summary="event.event_summary" :category="event.category" :date="event.date" :link="`evento/${event['.key']}`" > </Slide> 
          </div>
        </div>
      </div>
    </section>
    <section class="events-Week">
      <div class="container">
        <h3>Outros Eventos</h3>
        <p>Veja mais alguns eventos</p>
        <div class="card-group">
          <div class="col col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4" v-for="(event, count) in events" v-if="count > 3 && count < 10">
            <Slide :image="event.image" :title="event.title" :event_summary="event.event_summary" :category="event.category" :date="event.date" :link="`evento/${event['.key']}`" > </Slide> 
          </div>
        </div>
        <router-link to="/buscar" class="btn buttonBase">Ver Mais Eventos</router-link>
      </div>
    </section>
    <section class="header-banner about">
      <div class="container">
        <h1>Sobre</h1>
        <p class="col col-12 col-sm-12 col-xl-7 col-lg-7 col-md-7">Alemão cultural é um plataforma que tem como objetivo reunir o máximo de eventos possíveis que acontecem ou que vão acontecer no complexo do alemão, fazendo com que você tenha uma maior visão do que acontece na localidade onde você mora.</p>
      </div>
    </section>

    <section id="contato">
    <div class="container">
      <h3>Contato</h3>
        <p>Entre em contato conosco</p>
        <hr>
      <div class="row">
        <div class="col col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 box-contato-form">
          <form>
            <div class="form-group">
              <label for="formName">Nome:</label>
              <input type="text" class="form-control" id="formName" placeholder="Digite seu nome:" name="formName">
            </div>
            <div class="form-group">
              <label for="formEmail">Email:</label>
              <input type="email" class="form-control" id="formEmail" placeholder="Digite seu Email:" name="formEmail">
            </div>
            <div class="form-group">
              <label for="formAssunto">Assunto:</label>
              <input type="email" class="form-control" id="formAssunto" placeholder="Digite o assunto:" name="formAssunto">
            </div>
            <div class="form-group">
              <label >Menssagem:</label>
              <textarea class="form-control" id="formMenssagem" rows="10" placeholder="Digite sua menssagem:" name="formMenssagem"></textarea>
            </div>

            <a href="" class="btn buttonBase"><i class="fa fa-send" aria-hidden="true"></i>Enviar</a>
          </form>
        </div>
        <div class="col col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 box-contato">
          <div class="info-contato">
            <div class="icons">
              <a href="" id="icon-facebook">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
              <a href="" id="icon-behance">
                <i class="fa fa-behance" aria-hidden="true"></i>
              </a>
              <a href="" id="icon-github">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="" id="icon-linkedin">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
            <div class="info">
              <div class="infos" id="icon-whatsapp">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                <p>(21) 97660-3854</p>
              </div>
              <div class="infos" id="icon-telefone">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>(21) 97660-3854</p>
              </div>
              <div class="infos" id="icon-email">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <p>Joonasjss@gmail.com</p>
              </div>
            </div>
            <i class="fa fa-smile-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
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

