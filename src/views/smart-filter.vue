<template>
<section class="smart-filter">
  <h4>Is your store already open?</h4>

</section>

</template>

<script>

export default {
  data() {
    return {
      haveABusiness: null,

    };
  },
  created() {
  },
  components: {
    
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