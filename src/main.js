import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";
// import SolsticeVue from "solstice-vue";
import { Vue3Mq, MqResponsive } from "vue3-mq";

import App from "@/app.vue";
import router from "@/router";

// bootstrap js + bootstrap-icons
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// solstice-vue
//import "@/css/custom.scss";
import "solstice-vue/dist/style.css";
import "solstice-vue/dist/solstice.scss";

// bootstrap-vue-next css
//import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// app specific scss
//import "@/assets/css/styles.scss";

const app = createApp(App);

app.config.productionTip = false;

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});
app.component("mq-responsive", MqResponsive);

// bootstrap-vue-next
app.use(createBootstrap());

// solstice-vue
// app.use(SolsticeVue);

// declar global properties here
app.config.globalProperties.appName = "Solstice";

// unplugin-vue-router (auto page routing)
app.use(router);

app.mount("#app");
