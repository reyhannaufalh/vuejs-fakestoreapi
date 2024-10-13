<template>
  <div
    className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
  >
    <div
      className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
    >
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl "
        >
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" @submit.prevent="login">
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            class="rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-white border border-neutral-200"
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-white border border-neutral-200"
          />
          <button
            type="submit"
            class="w-full px-6 pt-2 pb-3 font-semibold text-white bg-blue-500 rounded cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "https://fakestoreapi.com/auth/login",
          {
            username: this.username,
            password: this.password,
          }
        );

        localStorage.setItem("token", response.data.token);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
        // Tampilkan pesan error
      }
    },
  },
};
</script>
