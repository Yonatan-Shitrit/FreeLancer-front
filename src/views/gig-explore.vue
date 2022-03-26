<template>
  <section class="">
    <div class="">
      <gig-list :gigs="gigs"/>
    </div>
  </section>
</template>

<script>
import gigList from "../components/gig-list.vue";
export default {
  data() {
    return {
      gigs: null,
    };
  },
  created() {
    this.gigs = this.$store.getters.gigs;
    console.log(this.$store.getters.gigs);
  },
  components: {
    gigList,
  },
};
</script>

<style>
</style>