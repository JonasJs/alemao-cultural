<template>
  <div class="card">
    <img class="card-img-top" v-bind:src="image" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">{{title}}</h4>
      <p>{{category}}</p>
      <hr>
      <p class="card-text">{{event_summary}}</p>
      <hr>
      <div class="card-more">
        <router-link :to="link" class="btn"><i class="fa fa-eye" aria-hidden="true"></i>Ver Mais</router-link>
        <p class="card-text"><small class="text-muted">{{date}}</small></p>
      </div>
    </div>
  </div>
</template>

<script>
// Adiciona o firebase
import { auth, eventRef } from '@/firebase/firebase';

export default {
  name: 'Slide',
  props: [ 'image', 'title', 'description', 'date', 'link', 'event_summary', 'category' ],
  firebase: {
    events: eventRef
  },
  data(){
  	return {
  	}
  }
}
</script>
