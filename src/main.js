import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
