import IrequestFormData from "@/types/request/requestData";
import axios from "@/axios/request";
import store from "../index";

export default {
  namespace: false,
  state() {
    return { requests: [] };
  },
  getters: {
    requests(state: { requests: any[] }) {
      return state.requests;
    },
  },
  mutations: {
    setRequests(
      state: { requests: IrequestFormData },
      requests: IrequestFormData
    ) {
      state.requests = requests;
    },
    addRequest(getters: any, request: any) {
      console.log(request);
      console.log(getters.requests);

      getters.requests.push(request);
    },
    setRequest(state: any, requests: IrequestFormData[]) {
      state.requests = requests;
    },
  },
  actions: {
    async create({ commit, dispatch }: any, requests: IrequestFormData) {
      try {
        const token = store.getters.token;
        const { data } = await axios.post(
          `/requests.json?auth=${token}`,
          requests
        );
        commit("addRequest", { ...requests, id: data.name });
        dispatch(
          "setMessage",
          {
            value: "The request has been successfully created!",
            type: "primary",
          },
          { root: true }
        );
      } catch (e) {
        dispatch(
          "setMessage",
          {
            value: e,
            type: "danger",
          },
          { root: true }
        );
      }
    },
    async load({ commit, dispatch }: any) {
      try {
        const token = store.getters.token;
        const { data } = await axios.get(`/requests.json?auth=${token}`);
        const requests = Object.keys(data).map((id) => ({ ...data[id], id }));

        commit("setRequest", requests);
      } catch (e) {
        dispatch(
          "setMessage",
          {
            value: e,
            type: "danger",
          },
          { root: true }
        );
      }
    },
  },
};
