import { createApp } from "vue";
import AxddComponents from "axdd-components";
import { Vue3Mq, MqResponsive } from "vue3-mq";

import App from "@/app.vue";
import router from "@/router";
import { routes } from "vue-router/auto/routes";
// bootstrap js + icons
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// axdd-components css (1.1.0 task/dark-mode)
import "axdd-components/dist/style.css";
import "axdd-components/dist/custom.scss";

// app specific scss
//import "@/assets/css/styles.scss";

const app = createApp(App);

app.config.productionTip = false;

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});
app.component("mq-responsive", MqResponsive);

// axdd-components
app.use(AxddComponents);

// declar global properties here
app.config.globalProperties.appName = "Solstice";

// auto router
app.use(router);

app.mount("#app");
