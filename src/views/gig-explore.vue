<template>
  <section >
    <gig-filter  @setFilter="setTheFilter" />
    <!-- <input type="number" placeholder="min price"> -->
    <div class="">
      <gig-list :gigs="gigs" />
    </div>
  </section>
</template>

<script>
import gigList from "../components/gig-list.vue";
import gigFilter from "../components/gig-filter.vue";
export default {
  data() {
    return {
      // gigs: null,
      setTheFilter: this.debounce((filter) => this.setFilter(filter)),
    };
  },
  created() {
    // this.loadGigs()
  },
  components: {
    gigList,
    gigFilter,
  },
  methods: {
    // loadGigs() {
    //   this.gigs = this.$store.getters.gigs;
    //   console.log("i set timeout");
    //   setTimeout(() => {
    //     console.log("i timeout");
    //     this.gigs = this.$store.getters.gigs;
    //     // console.log(this.gigs);
    //     if(!this.gigs.length)this.loadGigs();
    //   }, 200);
    //   // console.log(this.gigs);
    // },
    setFilter(filterBy) {
      // console.log(filterBy)
      this.$store.dispatch({ type: "setFilter", filterBy });
    },
    debounce(func, timeout = 1000) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    },
  },
  computed: {
    gigs() {
      return this.$store.getters.gigs;
    },
  },
};
</script>

<style>
</style>