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
              <div class="category-title">Gig</div>
              <div class="category-name">Seller</div>
              <div class="category-price">Price</div>
              <div class="category-actions">Actions</div>
              <div class="category-status">status</div>
            </div>
            <li  v-for="order in orders" :key="order._id">
              <img :src="getGig(order.gigId).images[0]" alt="" />
              <div class="gig-title">{{getGig(order.gigId).title}}</div>
              <!-- <div class="gig-title"></div> -->
              <div class="buyer-name">{{getGig(order.gigId).seller.fullName}}</div>
              <div class="price">${{ getGig(order.gigId).price }}</div>
              <div @click="changeStatus(order, 'canceled')" class="actions-orders">Cancel</div>
              <div class="status">{{order.status}}</div>
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
  methods: {
    getGig(id) {
      const gigs = this.$store.getters.gigs;
      return gigs.filter((gig) => gig._id === id)[0];
    },
    async changeStatus(order, status){
      order = JSON.parse(JSON.stringify(order))
      order.status = status
      order.updatedAt = Date.now()
      console.log('updateOrder',order);
      try{
      await this.$store.dispatch({ type: "saveOrder", order });      
      }
      catch(err){
        console.error('Cannot change status order from user order', err);
      }
    }
  },
  computed: {
    loggedinUser() {
      console.log("logged user", this.$store.getters.user);
      return this.$store.getters.user;
    },
    orders() {
      const orders = this.$store.getters.orders;
      console.log("orders", orders);
      return orders.filter((order) => order.buyerId === this.loggedinUser._id);
    },
  },
};
</script>

<style>
</style>