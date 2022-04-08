import Ilogin from "@/types/auth/login";
const TOKEN_KEY = "jwt-token";

export default {
  namespace: false,
  state() {
    return { token: localStorage.getItem(TOKEN_KEY) };
  },
  getters: {
    token(state: any) {
      return state.token;
    },
    isAuthenticated(_: any, getters: { token: unknown }) {
      return !!getters.token;
    },
  },
  mutations: {
    setToken(state: { token: any }, token: string) {
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token);
    },
    logout(state: { token: null }) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  },
  actions: {
    async login({ commit }: any, payload: Ilogin) {
      console.log(payload);

      commit("setToken", "payload");
    },
  },
};
