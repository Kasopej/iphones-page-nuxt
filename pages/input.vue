<template>
  <div>
    <input type="text" v-model="count" />
    <hr />
    <button @click="increment">Increment</button>
    <hr />
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
  definePageMeta({
    layout: "another",
  });
  export default {
    created() {
      console.log("created input");
    },
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      increment() {
        this.count.value++;
      },

      decrement() {
        this.count.value--;
      },
    },
  };
</script>

<style lang="scss" scoped></style>
