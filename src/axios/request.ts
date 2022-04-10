import axios from "axios";

const requestAxios = axios.create({
  baseURL: "https://simplebankapplication-default-rtdb.firebaseio.com/",
});

export default requestAxios;
