import { createStore, createLogger } from "vuex";
import auth from "./modules/auth.module";
import request from "./modules/request.module";

const plugins = [];

if (process.env.NODE_ENV === "development") {
  plugins.push(createLogger());
}
export default createStore({
  state: {
    message: "",
    sidebar: false,
  },
  getters: {},
  mutations: {
    setMessage(state, message: string) {
      state.message = message;
    },
    clearMessage(state) {
      state.message = "";
    },
    openSidebar(state) {
      state.sidebar = true;
    },
    closeSidebar(state) {
      state.sidebar = false;
    },
  },
  actions: {
    async setMessage({ commit }, message: string) {
      commit("setMessage", message);
      setInterval(() => {
        commit("clearMessage");
      }, 5000);
    },
  },
  modules: { auth, request },
});
