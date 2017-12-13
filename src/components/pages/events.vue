<template>
  <header class="viewMore">
    <Navigation> </Navigation>
    <div class="container">
      <div class="event-info">
        <h3>Sobe o Evento</h3>
        <router-link to="/" ><i class="fa fa-times" aria-hidden="true"></i></router-link>
      </div>
    	<br>
    	<br>
      <div class="card-group">
        <div class="col col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
          <Slide :image="event.image" :title="event.title" :event_summary="event.description" :category="event.category" :date="event.date" :link="`events/${event['.key']}`" > </Slide> 
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// Adiciona o firebase
import { eventRef, auth, db} from '@/firebase/firebase';

//Components
import Navigation from '@/components/shared/Navigation';
import Slide from '@/components/shared/Slide';

export default {
  name: 'Events',
  firebase: {
    events: eventRef
  },
  components:{
    'Navigation': Navigation,
    'Slide': Slide
  },
  data(){
  	return{
      event: '',
  		postId: this.$route.params.key
  	}
  },
  created() {
      let _this = this
      db.ref('/events/' + _this.postId).once('value').then(function (snapshot) {
        _this.event = snapshot.val();
      })
    }
}
</script>

