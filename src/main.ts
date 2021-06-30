import { createApp } from "vue";
import store from "./store";
import axios from "axios";
import router from "./router";
import App from "./App.vue";

axios.defaults.baseURL = "http://api.vikingship.xyz/api/";
axios.interceptors.request.use((config) => {
  config.params = { ...config.params, icode: "" };
  return config;
});
axios.get("/columns").then((res) => {
  console.log(res);
});

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
