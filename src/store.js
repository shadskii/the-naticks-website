import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backNavigation: false,
  },
  mutations: {
    setBackNavigation: (state, back) => (state.backNavigation = back),
  },
  actions: {},
});
