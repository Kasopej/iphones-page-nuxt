<template>
  <div class="mt-8 flex flex-wrap">
    <article
      class="col-25 border border-gray-200 rounded-lg shadow-lg px-14 mr-2 text-center"
    >
      Iphone 12
      <NuxtLink to="/iphone12"
        ><img src="~/assets/img/iphone-12.webp" alt="Iphone 12"
      /></NuxtLink>
    </article>
    <article
      class="col-25 border border-gray-200 rounded-lg shadow-lg px-14 mx-2 text-center"
    >
      Iphone 12
      <NuxtLink to="/iphone12-pro"
        ><img src="~/assets/img/iphone-12-pro.webp" alt="Iphone 12-pro"
      /></NuxtLink>
    </article>
    <article
      class="col-25 border border-gray-200 rounded-lg shadow-lg px-14 mx-2 text-center"
    >
      Iphone 12
      <NuxtLink to="/iphone13"
        ><img src="~/assets/img/iphone-13.webp" alt="Iphone 13"
      /></NuxtLink>
    </article>
    <article
      class="col-25 border border-gray-200 rounded-lg shadow-lg px-14 ml-2 text-center"
    >
      Iphone 12
      <NuxtLink to="/iphone13-pro"
        ><img src="~/assets/img/iphone-13-pro.webp" alt="Iphone 13-pro"
      /></NuxtLink>
    </article>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  article {
    &.col-25 {
      flex-basis: calc(25% - 1rem);
      min-width: calc(25% - 1rem);
      flex-grow: 1;
    }
  }
</style>
