<template>
  <div class="flex px-10 pt-20">
    <div class="col-50">
      <img
        src="~/assets/img/standing_woman.svg"
        alt="woman holding key - login illustration"
      />
    </div>
    <form
      @submit.prevent="callLogin"
      class="col-50 pr-6 pl-14 flex flex-col justify-center"
    >
      <input
        v-model="loginEntry.email"
        class="w-full rounded-sm border-slate-400 mb-8 form-input p-3"
        type="text"
        placeholder="email"
      />
      <input
        v-model="loginEntry.password"
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

<script setup>
  import { LOGIN_URL } from "@/http/routes";
  useHead({
    title: "App Login",
  });

  const router = useRouter();
  const loginEntry = reactive({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  function callLogin() {
    if (loginEntry.email && loginEntry.password) {
      useFetch(LOGIN_URL, {
        method: "post",
        body: loginEntry,
      }).then((res) => {
        useAuth().value.authenticated = true;
        router.push({ name: "index" });
      });
    }
  }
</script>

<style lang="scss" scoped></style>
