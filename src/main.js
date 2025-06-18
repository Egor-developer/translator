import "./assets/main.css";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

import en from "./languages/en.json";
import ru from "./languages/ru.json";

const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "en",
  messages: {
    en,
    ru
  },
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
