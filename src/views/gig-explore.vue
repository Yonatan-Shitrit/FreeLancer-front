<template>
  <section class="">
    <div class="">
      <gig-list :gigs="gigs" />
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
    this.loadGigs()
  },
  components: {
    gigList,
  },
  methods: {
    loadGigs() {
      this.gigs = this.$store.getters.gigs;
      console.log("i set timeout");
      setTimeout(() => {
        console.log("i timeout");
        this.gigs = this.$store.getters.gigs;
        console.log(this.gigs);
        if(!this.gigs.length)this.loadGigs();
      }, 200);
      console.log(this.gigs);
    },
  },
};
</script>

<style>
</style>