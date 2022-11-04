<template>
  <section class="flex justify-center mt-16">
    <div class="col-25">
      <img :src="imgSrc" :alt="phoneName" />
    </div>
    <div class="col-25 text-center">
      <h1 class="m-auto mb-5 text-3xl">Iphone {{ $route.params.version }}</h1>
      <button
        class="m-auto bg-blue-800 text-base text-white py-3 px-16 rounded-md"
      >
        Buy now
      </button>
    </div>
  </section>
</template>

<script setup>
  const route = useRoute();
  const imgSrc = ref();
  watchEffect(async () => {
    imgSrc.value = (
      await import(
        /* @vite-ignore */ `~/assets/img/iphone-${route.params.version}.webp`
      )
    ).default;
  });
  const phoneName = computed(() => `iphone ${route.params.version}`);
</script>

<style lang="scss" scoped></style>
