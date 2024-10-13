<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/organisms/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
