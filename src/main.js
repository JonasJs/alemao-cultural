// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/firebase/firebase';
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire';

// Firebase

 Vue.use(VueFire);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


