<template>
  <div class="main">
    <vue-stripe></vue-stripe>
  </div>
</template>

<script>
import VueStripe from "./components/VueStripe.vue";
export default {
  components: { VueStripe },
  name: "App",
};
</script>

<style>
.main {
  max-width: 768px;
  margin: auto;
  margin-top: 100px;
}
</style>
