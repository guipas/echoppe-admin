import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import productsModule from './modules/products';

Vue.use(Vuex)

const store = new Vuex.Store({
  strict : true,
  modules : {
    products : productsModule,
    axiosConfig : {},
  },
  state : {
    csrf : null,
  },
  mutations : {
    setCsrf (state, csrf) {
      state.axiosConfig.headers = { 'x-csrf-token': csrf };
      state.csrf = csrf;
    },
  },
  actions : {
    getCsrf ({ commit }) {
      return axios.get('/csrf')
      .then(res => {
        commit('setCsrf', res.data.csrf);
      });
    },
    init ({ dispatch }) {
      return dispatch('getCsrf');
    },
  }
});

export default store;