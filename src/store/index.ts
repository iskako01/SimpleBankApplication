import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    async login({ state }, payload) {
      console.log(payload);
    },
  },
  modules: {},
});
