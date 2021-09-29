<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  components: {
    StripeCheckout,
  },
  data() {
    return {
      loading: false,
      publishableKey: 'pk_live_51J8FIAGrIZfge3TFtDXmPpp8Am7dnL41gArStq3yL5WdGoiZJJv5ySWCvBQZMdiXA264PmzEqvKmbNqwLh3tgUaH00xrQJmJXj',
      lineItems: [
        {
          price: "price_1JeQwUGrIZfge3TFvagiQ5Dd", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "https://rwvs.netlify.app/",
      cancelURL: "https://rwvs.netlify.app/",
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
<style scoped>
div {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
button {
    background-color: black;
    padding: 10px 30px;
    color: white;
    border: 0;
    border-radius: .5em;
}
</style>