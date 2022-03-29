<template>
  <section class="dashboard">
    <div class="dashboard-container main-layout">
      <div class="seller-preformance">
        <div class="dashboard-profile">
          <div class="seller-details">
            <img :src="loggedinUser.imgUrl" alt="" />
            <div class="seller-name">{{ loggedinUser.username }}</div>
          </div>
        </div>
      </div>
      <div class="dashboard-orders">
        <div class="orders-filter">
          <h3>
            Active orders
            <span> - 0 ($0)</span>
          </h3>
          <select name="" id="">
            <option value="">Active orders (0)</option>
            <option value="">Pending</option>
            <option value="">Completed</option>
            <option value="">Canceled</option>
          </select>
        </div>
        <div class="orders-container">
          <ul>
            <div class="order-categories">
              <div class="category-title">Gig</div>
              <div class="category-name">Buyer</div>
              <div class="category-price">Price</div>
              <div class="category-actions"></div>
            </div>
            <li>
              <img src="" alt="" />
              <div class="gig-title">I will cook food</div>
              <div class="buyer-name">boby</div>
              <div class="price">$5</div>
              <div class="actions">delete</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    loggedinUser() {
      console.log("logged user", this.$store.getters.user);
      return this.$store.getters.user;
    },
  },
};
</script>

<style>
</style>