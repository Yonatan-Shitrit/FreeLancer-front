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
            {{filter}} orders
            <span> - {{orders.length}} (${{totalPrice.toLocaleString('en-US')}})</span>
          </h3>
          <select v-model="filter" name="" id="">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
        <div class="orders-container">
          <ul>
            <div class="order-categories">
              <div class="category-title">Gig</div>
              <div class="category-title">Gig</div>
              <div class="category-name">Buyer</div>
              <div class="category-price">Price</div>
              <div class="category-actions-dashboard">Actions</div>
              <div class="category-status">status</div>
            </div>
            <li v-for="order in orders" :key="order._id">
              <img :src="getGig(order.gigId).images[0]" alt="" />
              <div class="gig-title">{{ getGig(order.gigId).title }}</div>
              <div class="buyer-name">
                {{ getGig(order.gigId).seller.fullName }}
              </div>
              <div class="price">${{ getGig(order.gigId).price.toLocaleString('en-US') }}</div>
              <div class="actions">
                <span @click="changeStatus(order,'canceled')">Cancel </span>&nbsp;<span @click="changeStatus(order,'active')"> Accept</span>
              </div>
              <div class="status-dashboard">{{ order.status }}</div>
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
    return {
      filter: 'all'
    }
  },
  methods: {
    getGig(id) {
      const gigs = this.$store.getters.gigs;
      return gigs.filter((gig) => gig._id === id)[0];
    },
    async changeStatus(order, status) {
      order = JSON.parse(JSON.stringify(order));
      order.status = status;
      order.updatedAt = Date.now();
      console.log("updateOrder", order);
      try{
        await this.$store.dispatch({ type: "saveOrder", order });
      }catch{
        console.log('unable to change order status', err);
      }
    },
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.user;
    },
    orders() {
      const orders = this.$store.getters.orders;
      return orders.filter((order) => (order.sellerId === this.loggedinUser._id && (order.status === this.filter || this.filter === 'all')));
    },
    totalPrice(){
      return this.orders.reduce((acc, order) => {
        return (acc + this.getGig(order.gigId).price)
        }, 0)
    }
  },
};
</script>

<style>
</style>