/* eslint-disable semi */
import Vue from 'vue'
import Vuex from 'vuex'

import states from './states.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
Vue.use(Vuex)

/*
// Issue: https://github.com/vuejs/vuex/issues/1748

export default new Vuex.Store({
  // use strict mode in the dev environment only:
  strict: process.env.NODE_ENV !== 'production',

  state: states,
  getters,
  mutations,
  actions,
})
*/

export default {
  state: states,
  getters,
  mutations,
  actions,
}
