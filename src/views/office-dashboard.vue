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
        <div class="seller-graphs">
          <ul>
            <li>
              <h6>Inbox response rate</h6>
              <div class="proggress-container">
                <div class="progress-bar">
                  <span :style="{ width: '87%' }"></span>
                </div>
                <div class="percentage-text">87%</div>
              </div>
            </li>
            <li>
              <h6>Inbox response time</h6>
              <div class="proggress-container">
                <div class="progress-bar">
                  <span :style="{ width: '91%' }"></span>
                </div>
                <div class="percentage-text">91%</div>
              </div>
            </li>
            <li>
              <h6>Order response rate</h6>
              <div class="proggress-container">
                <div class="progress-bar">
                  <span :style="{ width: '67%' }"></span>
                </div>
                <div class="percentage-text">67%</div>
              </div>
            </li>
            <li>
              <h6>Delivered on time</h6>
              <div class="proggress-container">
                <div class="progress-bar">
                  <span :style="{ width: '98%' }"></span>
                </div>
                <div class="percentage-text">98%</div>
              </div>
            </li>
            <li>
              <h6>Order completion</h6>
              <div class="proggress-container">
                <div class="progress-bar">
                  <span :style="{ width: completedPercentage + '%' }"></span>
                </div>
                <div class="percentage-text">{{ completedPercentage }}%</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="seller-earnings">
          <div>Earned Last Month</div>
          <span>${{ totalEarned.toLocaleString("en-US") }}</span>
        </div>
      </div>
      <div class="dashboard-orders">
        <div class="orders-filter">
          <h3>
            {{ filter }} orders
            <span>
              - {{ orders.length }} (${{
                totalPrice.toLocaleString("en-US")
              }})</span
            >
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
              <div class="category-title">Date</div>
              <div class="category-name">Buyer</div>
              <div class="category-price">Price</div>
              <div class="category-actions-dashboard">Actions</div>
              <div class="category-status">Status</div>
            </div>
            <li v-for="order in orders" :key="order._id">
              <div class="media-q">
                <img :src="getGig(order.gigId).images[0]" alt="" />
                <div class="gig-title">{{ getGig(order.gigId).title }}</div>
                <div class="buyer-date"></div>
                <div class="buyer-name">
                  {{ getGig(order.gigId).seller.fullName }}
                </div>
                <div class="price">
                  ${{ getGig(order.gigId).price.toLocaleString("en-US") }}
                </div>
                <div class="actions">
                  <span @click="changeStatus(order, 'canceled')">Cancel </span
                  >&nbsp;<span @click="changeStatus(order, 'active')">
                    Accept</span
                  >
                </div>
                <div class="status-dashboard">{{ order.status }}</div>
              </div>

              <div class="mobile-card">
                <div class="mobile-title">{{ getGig(order.gigId).title }}</div>
                <div class="mobile-name">
                  <span>Buyer: {{ order.buyerName }}</span>
                  <span
                    >Price: ${{
                      getGig(order.gigId).price.toLocaleString("en-US")
                    }}</span
                  >
                </div>
                <div class="mobile-status">
                  <span>Status: {{ order.status }}</span>
                  <span>Delivery Date: {{deliveryDateFormat(order.createdAt, getGig(order.gigId).daysToMake)}}</span>
                </div>
                <div class="mobile-actions">
                  <span class="cancel" @click="changeStatus(order, 'canceled')"
                    >Cancel </span
                  >&nbsp;<span
                    class="accept"
                    @click="changeStatus(order, 'active')"
                    >Accept</span
                  >
                </div>
              </div>
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
      filter: "all",
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
      console.log("updateStatus", status);
      try {
        await this.$store.dispatch({
          type: "saveOrder",
          order,
          notification: "Your order is " + status,
        });
      } catch {
        console.log("unable to change order status", err);
      }
    },
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.user;
    },
    completedOrders() {
      const orders = this.$store.getters.orders;
      return orders.filter(
        (order) =>
          order.sellerId === this.loggedinUser._id &&
          order.status === "completed"
      );
    },
    allOrders() {
      const orders = this.$store.getters.orders;
      return orders.filter((order) => order.sellerId === this.loggedinUser._id);
    },
    orders() {
      const orders = this.$store.getters.orders;
      return orders.filter(
        (order) =>
          order.sellerId === this.loggedinUser._id &&
          (order.status === this.filter || this.filter === "all")
      );
    },
    totalPrice() {
      return this.orders.reduce((acc, order) => {
        return acc + this.getGig(order.gigId).price;
      }, 0);
    },
    totalEarned() {
      return this.completedOrders.reduce((acc, order) => {
        return acc + this.getGig(order.gigId).price;
      }, 0);
    },
    completedPercentage() {
      return (this.completedOrders.length * 100) / this.allOrders.length;
    },
  },
};
</script>

<style>
</style>