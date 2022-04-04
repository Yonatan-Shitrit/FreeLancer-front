<template>
  <section
    class="full-header"
    :class="{ 'scroll-mode': scrollY || !homePage, 'home-mode': homePage }"
  >
    <section class="app-header">
      <div class="search-bar-wrapper">
        <router-link class="logo" to="/">FreeLancer<span>.</span></router-link>
        <search-bar
          v-if="(scrollY > 159 || !homePage) && buyerMode"
        ></search-bar>
      </div>
      <div class="navBurger">☰</div>
      <nav>
        <ul>
          <li v-if="!user" class="header-item">
            <button @click="openModal('signup')">Join</button>
          </li>
          <li v-else>
            <router-link class="img-wrapper" @click="clearNotifications" to="/orders/">
            <img class="user-pic" :src="user.imgUrl"/>
            <span class="notification-dot-icon" v-if="newBuyerOrders.length"></span>
            </router-link>
          </li>
          <li v-if="!user" class="header-item">
            <button @click="openModal('login')">Sign in</button>
          </li>
          <li v-else><button @click="openModal('logout')">Logout</button></li>
          <li class="header-item">
            <router-link  @click="clearNotifications" v-if="buyerMode" to="/seller/dashboard">
              {{ sellerDisplay }}
              <span class="notification-dot" v-if="newSellerOrders.length"></span>
            </router-link>
            <router-link v-else to="/"> {{ sellerDisplay }} </router-link>
          </li>
          <li v-if="buyerMode" class="header-item">
            <router-link to="/gig">Explore </router-link>
          </li>
        </ul>
      </nav>
    </section>
  </section>
  <section
    v-if="buyerMode"
    class="main-sub-menu-full-header"
    v-bind:style="{
      display: scrollY > 100 || !homePage ? 'block' : 'none',
      transform:
        scrollY > 159 || !homePage ? 'rotateX(0deg)' : 'rotateX(90deg)',
      position: !homePage ? 'relative' : 'fixed',
      margin: !homePage ? 0 : '',
    }"
  >
    <section style="transition: 1s" class="app-header">
      <main-header-sub-menu style="width: 100%"></main-header-sub-menu>
    </section>
  </section>
  <login-modal
    @closeModal="closeModal"
    :loginMode="loginMode"
    v-if="loginMode"
  ></login-modal>
</template>

<script>
import MainHeaderSubMenu from "./main-header-sub-menu.vue";
import SearchBar from "./search-bar.vue";
import loginModal from "./login.vue";
export default {
  data() {
    return {
      scrollY: 0,
      loginMode: false,
    };
  },
  computed: {
    searchPlaceHolder() {
      return `🔍 Try "building mobile app"`;
    },
    user() {
      return this.$store.getters.user;
      // console.log('sellerGigs', this.sellerGigs);
    },
    newBuyerOrders() {
      let orders = this.$store.getters.newOrders;
      console.log("new orders before filter", orders);
      orders = orders.filter((order) => order.buyerId === this.user._id);
      console.log("new orders after filter", orders);
      return orders;
    },
    newSellerOrders() {
      let orders = this.$store.getters.newOrders;
      console.log("new orders before filter", orders);
      orders = orders.filter((order) => order.sellerId === this.user._id);
      console.log("new orders after filter", orders);
      return orders;
    },
    path() {
      return this.$route.path;
    },
    homePage() {
      if (this.path === "/") return true;
      else return false;
    },
    buyerMode() {
      const path = this.path.slice(0, 7);
      console.log(path);
      return path !== "/seller";
    },
    sellerDisplay() {
      if (!this.user) return "Become a Seller";
      if (this.buyerMode) return "Switch to Selling";
      else return "Switch to Buying";
    },
  },

  methods: {
    setScroll() {
      this.scrollY = window.scrollY;
    },
    pageScroll() {},
    closeModal() {
      this.loginMode = false;
    },
    openModal(mode) {
      this.loginMode = mode;
    },
    clearNotifications(){
      this.$store.commit('clearNotifications')
    }
  },
  
  created() {
    document.addEventListener("scroll", this.setScroll);
  },
  unmounted() {
    document.removeEventListener("scroll", this.setScroll);
  },
  components: {
    MainHeaderSubMenu,
    SearchBar,
    loginModal,
  },
};
</script>

<style>
</style>