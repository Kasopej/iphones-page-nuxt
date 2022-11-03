<template>
  <div class="flex px-10 pt-20">
    <div class="col-50">
      <img
        src="~/assets/img/standing_woman.svg"
        alt="woman holding key - login illustration"
      />
    </div>
    <form class="col-50 pr-6 pl-14 flex flex-col justify-center">
      <input
        class="w-full rounded-sm border-slate-400 mb-8 form-input p-3"
        type="text"
        placeholder="email"
      />
      <input
        class="w-full rounded-sm border-slate-400 mb-8 form-input p-3"
        type="password"
        placeholder="password"
      />
      <button
        class="w-full rounded-sm bg-blue-800 text-white p-3"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
