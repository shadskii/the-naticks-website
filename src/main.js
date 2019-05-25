import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import {firestorePlugin} from 'vuefire';
import App from './App.vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/firebase';

Vue.config.productionTip = false;
Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
