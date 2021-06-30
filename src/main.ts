import { createApp } from "vue";
import store from "./store";
import axios from "axios";
import router from "./router";
import App from "./App.vue";

axios.get("http://api.vikingship.xyz/api/columns").then((res) => {
  console.log(res);
});

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
