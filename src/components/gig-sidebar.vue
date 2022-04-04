<template>
  <section class="sidebar-container">
    <aside>
      <form @submit.prevent="" class="sidebar-form">
        <header>
          <h3>
            <b>Order Details:</b>
            <div>${{ gig.price }}</div>
          </h3>
          <p>
            {{ gig.details }}
          </p>
        </header>
        <article>
          <div class="sidebar-delivery">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
              ></path>
              <path d="M9 4H7v5h5V7H9V4z"></path>
            </svg>
            <b> {{ gig.daysToMake }} {{ gigDelivery }} delivery</b>
          </div>
          <div class="sidebar-revision">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"
              ></path>
              <path
                d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"
              ></path>
            </svg>
            <b> {{ gig.revision }} {{ gigRevisions }}</b>
          </div>
        </article>
        <footer>
          <button @click="saveOrder">Continue (${{ gig.price }})</button>
        </footer>
      </form>
      <div class="contact-seller">
        <button>Contact Seller</button>
      </div>
    </aside>
  </section>
</template>

<script>
import { orderService } from "../services/order-service";
export default {
  props: {
    gig: {
      type: Object,
      required: true,
    },
    data() {
      return {
        orderToSave: null,
      };
    },
  },
  methods: {
    getEmptyGig() {
      this.orderToSave = orderService.getEmptyOrder();
    },
    orderGig() {
      this.orderToSave.gigId = this.gig._id;
      this.orderToSave.sellerId = this.gig.seller._id;
      this.orderToSave.buyerId = this.user._id;
      this.orderToSave.buyerName = this.user.fullname;
      console.log("this.orderToSave", this.orderToSave);
    },
    async saveOrder() {
      if (!this.user) {
        this.loginModal();
        return;
      }
      this.orderGig();
      try {
        await this.$store.dispatch({
          type: "saveOrder",
          order: this.orderToSave,
          notification: 'A new order has been received'
        });
        this.$emit("confirmation");
      } catch (err) {
        console.error("Cannot save order from gig sidebar", err);
      }
    },
    loginModal() {
      this.$emit("openLoginModal");
    },
  },
  computed: {
    gigRevisions() {
      if (this.gig.revision === 1) return "revision";
      else return "revisions";
    },
    gigDelivery() {
      if (this.gig.daysToMake === 1) return "day";
      else return "days";
    },
    user() {
      return this.$store.getters.user;
    },
    users() {
      console.log("users", this.$store.getters.users);
      return this.$store.getters.users;
    },
  },
  created() {
    this.getEmptyGig();
  },
};
</script>

<style>
</style>