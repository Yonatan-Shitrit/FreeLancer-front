<template>  
  <app-header />
  <router-view />
  <app-footer />
</template>

<script>
  import appHeader from "./components/app-header.vue"
  import appFooter from "./components/app-footer.vue"
export default {
  created(){    
    this.$store.dispatch({ type: "loadGigs" });
    this.$store.dispatch({ type: "loadUsers" });
    console.log('store load gigs dispatch from app');
  },
  components:{
    appHeader,
    appFooter
  }
}
</script>

<style>

</style>