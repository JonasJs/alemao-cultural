<template>
  <header id="app">
    <h1>eventos</h1>
	<br>
	<br>
	<div class="card-group">
      <div class="col-4" >
        <h1>{{event.title}}</h1>
      </div>
    </div>
  </header>
</template>

<script>
// Adiciona o firebase
import { eventRef, auth, db} from '@/firebase/firebase';
import Slide from '@/components/shared/Slide';

export default {
  name: 'Events',
  firebase: {
    events: eventRef
  },
  components:{
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

