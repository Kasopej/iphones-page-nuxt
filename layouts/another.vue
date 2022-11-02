<template>
  <div>
    <nav>
      <nuxt-link to="/">Heading</nuxt-link>
      <nuxt-link to="/input">Input</nuxt-link>
    </nav>
    Another!!!
    <slot></slot>
  </div>
</template>

<script>
  export default {
    created() {
      console.log("other template created!");
    },
  };
</script>

<style lang="scss" scoped></style>
