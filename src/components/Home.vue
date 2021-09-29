<template>
  <div>
    <h2>Check Out Page</h2>

    <stripe-checkout />

  </div>
</template>

<script>
import StripeCheckout from "./Vue-SCheckout.vue";

export default {
  components: {
    StripeCheckout
  },
  setup() {
    return {};
  }
};
</script>

<style scoped></style>
