import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.11:3333" // change it according yto your ip address
});

export default api;
