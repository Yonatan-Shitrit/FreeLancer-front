<template>
  <section class="dashboard-orders">
    <div class="dashboard-container main-layout">
      <div v-if="false" class="seller-preformance">
        <div class="dashboard-profile">
          <div class="seller-details">
            <img :src="loggedinUser.imgUrl" alt="" />
            <div class="seller-name">{{ loggedinUser.fullname }}</div>
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
              <div class="category-name">Seller</div>
              <div class="category-date">Delivery Date</div>
              <div class="category-price">Price</div>
              <div class="category-actions">Actions</div>
              <div class="category-status">status</div>
            </div>
            <li v-for="order in orders" :key="order._id">
              <img :src="getGig(order.gigId).images[0]" alt="" />
              <div class="gig-title">{{ getGig(order.gigId).title }}</div>
              <!-- <div class="gig-title"></div> -->
              <div class="buyer-name">
                {{ getGig(order.gigId).seller.fullName }}
              </div>
              <div class="delivery-date">
                {{deliveryDateFormat(order.createdAt, getGig(order.gigId).daysToMake)}}
              </div>

              <div class="price">
                ${{ getGig(order.gigId).price.toLocaleString("en-US") }}
              </div>
              <div
                @click="changeStatus(order, 'canceled')"
                class="actions-orders"
              >
                Cancel
              </div>
              <div class="status">{{ order.status }}</div>
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
      filter:'all'
    };
  },
  methods: {
    getGig(id) {
      const gigs = this.$store.getters.gigs;
      return gigs.filter((gig) => gig._id === id)[0];
    },
     deliveryDateFormat(time, days) {
      time = new Date(time+(days*86400000))
      const year = time.getFullYear();
      const month = (time.getMonth() + 1 + "").padStart(2, "0");
      const day = ("" + time.getDate()).padStart(2, "0");
      return day + "-" + month + "-" +year ;
    },
    async changeStatus(order, status) {
      order = JSON.parse(JSON.stringify(order));
      order.status = status;
      order.updatedAt = Date.now();
      console.log("updateOrder", order);
      try {
        await this.$store.dispatch({ type: "saveOrder", order, notification: 'Your order is ' + status });
      } catch (err) {
        console.error("Cannot change status order from user order", err);
      }
    },
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.user;
    },
    orders() {
      const orders = this.$store.getters.orders;
      return orders.filter((order) => (order.buyerId === this.loggedinUser._id && (order.status === this.filter || this.filter === 'all')));
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