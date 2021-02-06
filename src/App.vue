<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
    Navbar,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
</style>