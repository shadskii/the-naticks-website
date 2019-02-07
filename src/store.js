import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subtitle: '',
  },
  mutations: {
    setSubtitle: (state, title) => (state.subtitle = title),
  },
  actions: {},
});
