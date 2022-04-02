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
    this.$store.dispatch({ type: "loadOrders" });
    this.notification();
    console.log('store load gigs dispatch from app');
  },
  methods:{
    notification(){
      if(Notification.permission !== 'granted') Notification.requestPermission().then(result=>console.log(result))
    }
  },
  components:{
    appHeader,
    appFooter
  }
}
</script>

<style>

</style>