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
  <div class="relative w-[100dvw] h-[100dvh] flex flex-col justify-center items-center text-center">
    <button class="button absolute p-[20px_50px] rounded-[10px] top-[50px] right-[50px] border-0 text-[var(--color-background)] bg-[var(--color-accent-soft)] cursor-pointer" @click="changeLanguage">{{ t('language') }}</button>
    <h1 class="text-[32px] font-black text-[var(--color-accent)]">
      {{ t('title-one') }}
    </h1>
    <h2 class="text-[26px] font-medium text-[var(--color-heading)]">{{ t('title-two') }}</h2>
    <h3 class="text-[22px] font-light text-[var(--color-text)]">{{ t('title-three') }}</h3>
  </div>
</template>

<style scoped></style>
