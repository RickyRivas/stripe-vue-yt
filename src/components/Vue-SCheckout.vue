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
      publishableKey: `${process.env.VUE_APP_PUBLISH_KEY}`,
      lineItems: [
        {
          price: "price_1JerlnGrIZfge3TFwsnCBBTn", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
        {
          price: "price_1JeQwUGrIZfge3TFvagiQ5Dd", // The id of the one-time price you created in your Stripe dashboard
          quantity: 3,
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