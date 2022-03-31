<template>
  <section
    class="full-header"
    v-bind:style="{
      backgroundColor: scrollY || !homePage
        ? 'rgba(255, 255, 255, 1)'
        : 'rgba(255, 255, 255, 0)',
        position: !homePage ? 'relative' : 'fixed'
    }"
  >
    <section class="app-header">
      <div class="search-bar-wrapper">
        <router-link class="logo" to="/">Fastlancer<span>.</span></router-link>
        <search-bar v-if="scrollY > 159 || !homePage"></search-bar>
      </div>
      <nav>
        <ul>
          <li v-if="!user" class="header-item">
            <button @click="openModal('signup')">Join</button>
          </li>
          <li v-else>
            <router-link to="/orders/"
              ><img class="user-pic" :src="user.imgUrl"
            /></router-link>
          </li>
          <li v-if="!user" class="header-item">
            <button @click="openModal('login')">Sign in</button>
          </li>
          <li v-else><button @click="openModal('logout')">Logout</button></li>
          <li class="header-item">
            <router-link to="/seller/dashboard">Become a Seller </router-link>
          </li>
          <li class="header-item">
            <router-link to="/gig">Explore </router-link>
          </li>
        </ul>
      </nav>
    </section>
  </section>
  <section
    class="main-sub-menu-full-header"
    v-bind:style="{
      display: (scrollY > 100 || !homePage) ? 'block' : 'none',
      transform: (scrollY > 159 || !homePage) ? 'rotateX(0deg)' : 'rotateX(90deg)',
      position: !homePage ? 'relative' : 'fixed',
      margin: !homePage ? 0 :''
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
    path() {
      return this.$route.path;
    },
    homePage() {
      if (this.path === "/") return true;
      else return false;
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