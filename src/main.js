import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "en",
  messages: {
    ru: {
      "title-one":
        "Поддерживать локализованные проекты так же легко, как и статические.",
      "title-two": "Расширение IDE управления I18n",
      "title-three": "Получить для вашей IDE",
    },
    en: {
      "title-one": "Maintain localized projects as easy as static ones.",
      "title-two": "I18n management IDE extension",
      "title-three": "Get for your IDE",
    },
  },
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
