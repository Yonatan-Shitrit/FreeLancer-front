<template>
  <section class="full-header" 
  style="position:relative"
      v-bind:style="{backgroundColor: stickyNav ? 'rgba(0, 255, 255, 0.5)': 'rgba(255, 255, 255, 0.5)' , position: stickyNav ? 'relative' : 'fixed' }"
      
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
          <router-link to="/"
            ><a class="not-exist" href="">Become a Seller</a>
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
    }
  
  },

    mounted(){
    this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
      rootMargin : "-30px 0px 0px",
      threshold: 0.5
    })
    this.headerObserver.observe(this.$refs.header)
    
    
    
    }
};
</script>

<style>
</style>