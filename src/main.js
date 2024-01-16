import { createApp } from "vue";
import SolsticeVue from "solstice-vue";
import { Vue3Mq, MqResponsive } from "vue3-mq";

import App from "@/app.vue";
import router from "@/router";

// bootstrap js + icons
// import "bootstrap";
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// solstice-vue css (1.1.0 task/dark-mode)
import "solstice-vue/dist/style.css";
import "solstice-vue/dist/custom.scss";

// app specific scss
//import "@/assets/css/styles.scss";

const app = createApp(App);

app.config.productionTip = false;

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});
app.component("mq-responsive", MqResponsive);

// solstice-vue
app.use(SolsticeVue);

// declar global properties here
app.config.globalProperties.appName = "Solstice";

// unplugin-vue-router (auto page routing)
app.use(router);

app.mount("#app");
