<template>
  <main id="app">
  	<transition name="pagina">
    	<router-view></router-view>
    </transition>
  </main>
</template>

<script>

import Navigation from '@/components/shared/Navigation';
export default {
  name: 'app',
  components:{
    Navigation
  }
}
</script>

<style>
	.pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>

