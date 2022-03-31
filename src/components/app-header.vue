<template>
  <section
    class="full-header"
    style="position: relative"
    v-bind:style="{
      backgroundColor: scrollY
        ? 'rgba(255, 255, 255, 1)'
        : 'rgba(255, 255, 255, 0)',
      position: scrollY ? 'fixed' : 'fixed',
    }"
  >
    <section class="app-header">
      <div class="search-bar-wrapper">
        <router-link class="logo" to="/">FreeLancer<span>.</span></router-link>
        <search-bar v-if="scrollY>160"> </search-bar>
      </div>
      <nav>
        <ul>
          <li v-if="!user" class="header-item">
            <button @click="openModal('signup')">Join</button>
          </li>
          <li v-else><img :src="user.imgUrl" alt="" /></li>
          <li class="header-item">
            <button @click="openModal('login')">Sign in</button>
          </li>
          <li class="header-item">
            <router-link to="/seller">Become a Seller </router-link>
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
      display: scrollY > 100 ? 'block' : 'none',
      transform: scrollY > 160 ? 'rotateX(0deg)' : 'rotateX(90deg)',
    }"
  >
    <section style="transition: 1s" class="app-header">
      <main-header-sub-menu style="width: 100%"></main-header-sub-menu>
    </section>
  </section>
  <login-modal
    @closeModal="closeModal"
    :loginMode="loginMode"
    v-if="loginMode"></login-modal>
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
   
  },

  methods: {
    setScroll() {
      this.scrollY = window.scrollY;
      // console.log(this.scrollY)
    },
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