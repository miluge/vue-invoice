import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    data: null,
    sideBarOpen: false
  },
  getters: {
    user(state) {
      return state.user
    },
    sideBarOpen: state => {
      return state.sideBarOpen
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    toggleSidebar (state) {
      state.sideBarOpen = !state.sideBarOpen
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit ("SET_USER", null);
      }
    },
    toggleSidebar(context) {
      context.commit('toggleSidebar')
    }
  },
  modules: {
  }
})
