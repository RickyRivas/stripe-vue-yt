<template>
  <div class="main">
    <vue-checkout/>
  </div>
</template>

<script>
import VueCheckout from "./components/Vue-SCheckout.vue";
export default {
  components: { VueCheckout },
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
