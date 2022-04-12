import axios from "axios";
import router from "../router";

const requestAxios = axios.create({
  baseURL: "https://simplebankapplication-default-rtdb.firebaseio.com/",
});

requestAxios.interceptors.response.use(undefined, (error) => {
  // eslint-disable-next-line no-constant-condition
  if ((error.response.status = 401)) {
    router.push("/auth?message=auth");
  }
  return Promise.reject(error);
});

export default requestAxios;
