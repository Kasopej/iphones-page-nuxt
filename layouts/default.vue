<template>
  <div>
    <nav class="flex bg-purple-700">
      <ul class="main-nav nav-list ml-3">
        <li class="inline p-0">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/">Iphones</nuxt-link>
          <nuxt-link to="/">Cart()</nuxt-link>
          <nuxt-link to="/">Total Route Changes: 1</nuxt-link>
        </li>
      </ul>
      <ul class="auth-nav nav-list ml-auto mr-3">
        <li class="inline p-0">
          <nuxt-link to="/">Login</nuxt-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
  export default {};
</script>
