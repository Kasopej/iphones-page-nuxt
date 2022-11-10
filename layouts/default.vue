<template>
  <div>
    <nav class="flex bg-purple-800">
      <ul class="main-nav nav-list ml-2 p-3">
        <li class="inline px-2">
          <nuxt-link to="/" class="text-lg">Home</nuxt-link>
        </li>
        <li class="inline px-2">
          <nuxt-link to="/iphones" class="text-lg">Iphones</nuxt-link>
        </li>
        <li class="inline px-2">
          <nuxt-link to="/" class="text-lg">Cart()</nuxt-link>
        </li>
        <li class="inline px-2">
          <nuxt-link to="/" class="text-lg">Total Route Changes: 1</nuxt-link>
        </li>
      </ul>
      <ul class="auth-nav nav-list ml-auto mr-2 p-3">
        <li v-if="!authState.authenticated" class="inline px-2">
          <nuxt-link to="/login" class="text-lg">Login</nuxt-link>
        </li>
        <li v-else class="inline px-2">
          <nuxt-link to="/login" class="text-lg">Profile</nuxt-link>
        </li>
      </ul>
    </nav>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
  export default {
    setup() {
      const authState = useAuth().value;
      return { authState };
    },
  };
</script>
