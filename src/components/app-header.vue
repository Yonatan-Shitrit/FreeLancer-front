<template>
  <section class="full-header" 
  style="position:relative"
      v-bind:style="{backgroundColor: scrollY ? 'rgba(255, 255, 255, 1)': 'rgba(255, 255, 255, 0)' , position: scrollY ? 'fixed' : 'fixed' }"
      
      ref="header"
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
</template>

<script>
export default {
    data() {
    return {

      headerObserver: null,
      stickyNav:false,
      scrollY:0
    };
  },
  computed: {
    searchPlaceHolder() {
      return `🔍 Try "building mobile app"`;
    },
  },

  methods:{
    
    onHeaderObserved(entries) {
      entries.forEach((entry)=> {
      if(entry.isIntersecing){
        console.log("is intersecting")
      }
        this.stickyNav = entry.isIntersecing ? true :false
        console.log(this.stickyNav)
     })
    },
    setScroll(){
      this.scrollY = window.scrollY
    }
  
  },
  created(){
    document.addEventListener('scroll',this.setScroll)
  },
  unmounted(){
    document.removeEventListener('scroll',this.setScroll)
  },
    mounted(){
    this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
      rootMargin : "-30px 0px 0px",
      // threshold: 0.5
    })
    // this.headerObserver.observe(this.$refs.header)
    
    
    
    }
};
</script>

<style>
</style>