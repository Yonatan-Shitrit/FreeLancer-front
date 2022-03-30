<template>
  <section class="full-header" 
  style="position:relative"
      v-bind:style="{backgroundColor: scrollY ? 'rgba(255, 255, 255, 1)': 'rgba(255, 255, 255, 0)' , position: scrollY ? 'fixed' : 'fixed' }"
  >
    <section class="app-header">
      <router-link class="logo" to="/">Fastlancer<span>.</span></router-link>
      <ul>
        <li class="header-item">
          <router-link to="/"
            >Join
          </router-link>
        </li>
        <li class="header-item">
          <router-link to="/login"
            ><a class="" href="">Sign in</a>
          </router-link>
        </li>
        <li class="header-item">
          <router-link to="/seller"
            ><a class="" href="">Become a Seller</a>
          </router-link>
        </li>
        <li class="header-item">
          <router-link to="/gig"><a href="">Explore</a> </router-link>
        </li>
      </ul>
    </section>
  </section>
    <section class="main-sub-menu-full-header" 
      v-bind:style="{display: (scrollY>100) ? 'block': 'none', transform: (scrollY>160)? 'rotateX(0deg)' : 'rotateX(90deg)'}">
    <section style=" transition: 1s;" class="app-header">
     <main-header-sub-menu style="width:100%"></main-header-sub-menu>
    </section>
  </section>
</template>

<script>
import  MainHeaderSubMenu from "./main-header-sub-menu.vue";
export default {
    data() {
    return {

      scrollY:0
    };
  },
  computed: {
    searchPlaceHolder() {
      return `🔍 Try "building mobile app"`;
    },
     user(){
      return this.$store.getters.user
      // console.log('sellerGigs', this.sellerGigs);
    },
  },

  methods:{
    
    setScroll(){
      this.scrollY = window.scrollY
      // console.log(this.scrollY)
    }
  
  },
  created(){
    document.addEventListener('scroll',this.setScroll)
  },
  unmounted(){
    document.removeEventListener('scroll',this.setScroll)
  },
    components:{
      MainHeaderSubMenu,
    }
};
</script>

<style>
</style>