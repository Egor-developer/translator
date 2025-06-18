<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t, locale } = useI18n();
    
    const changeLanguage = () => {
      locale.value = locale.value === 'ru' ? 'en' : 'ru';
    };

    return { t, changeLanguage };
  }
}
</script>

<template>
  <div class="wrapper">
    <button class="button" @click="changeLanguage">{{ t('language') }}</button>
    <h1 class="text title__one">
      {{ t('title-one') }}
    </h1>
    <h2 class="text title__two">{{ t('title-two') }}</h2>
    <h3 class="text title__three">{{ t('title-three') }}</h3>
  </div>
</template>

<style>
body {
  margin: 0;
}

.wrapper {
  position: relative;
  font-family: monospace, sans-serif;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title__one {
  font-weight: 900;
  color: rgb(35, 11, 132)
}

.title__two {
  font-weight: 500;
  color: rgb(15, 139, 139)
}

.title__three {
  font-weight: 300;
  color: rgb(185, 10, 25)
}

.button {
  position: absolute;
  padding: 20px 50px;
  top: 50px;
  right: 50px;
  border-radius: 10px;
  border: none;
  background-color: darkgreen;
  color: #fff;
  cursor: pointer;
}
</style>
