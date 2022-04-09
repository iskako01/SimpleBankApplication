import axios from "axios";
import Ilogin from "@/types/auth/login";
import { error } from "@/utils/error";
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
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`;

        const { data } = await axios.post(url, {
          ...payload,
          returnSecureToken: true,
        });

        commit("setToken", data.idToken);
      } catch (e: any) {
        console.log(error(e.response.data.error.message));
      }
    },
  },
};
