<template>
  <nav class="container flex items-center justify-between py-6">
    <router-link to="/" class="text-xl font-semibold"
      >Vue.js FakeStore API</router-link
    >

    <p class="mr-4">Hello, {{ user ? user.user : "Guest" }}</p>

    <div>
      <router-link
        to="/login"
        class="px-6 pt-3 pb-4 font-semibold text-white bg-blue-500 rounded-2xl"
      >
        Login
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    this.$store.dispatch("fetchUser");
    console.log(this.user);
  },
};
</script>
