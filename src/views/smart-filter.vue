<template>
<section class="">
  
<smart-filter-popup/>
</section>

</template>

<script>
import smartFilterPopup from '../components/smart-filter-popup.vue'
export default {
  data() {
    return {
      haveABusiness: null,

    };
  },
  created() {
  },
  components: {
    smartFilterPopup
  },
  methods: {
    
    setFilter(filterBy) {
            // console.log(filterBy)
            this.$store.dispatch({ type: 'setFilter', filterBy })
    },    
  },
  computed:{
    gigs(){
      return this.$store.getters.gigs;
    }
  }
};
</script>

<style>
</style>