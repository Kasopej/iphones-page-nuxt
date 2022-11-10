<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    titleTemplate: "Iphones %s - Nuxt 3",
  });
</script>

<style lang="scss">
  @import "~/assets/scss/base.scss";
</style>
