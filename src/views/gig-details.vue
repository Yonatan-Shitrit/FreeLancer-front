<template>
  <section class="gig-page">
    <div class="gig-details">
      <gig-overview />
      <div class="put-carousel">put carousel here</div>
      <gig-description />
      <h2>About The Seller</h2>
      <gig-profile />
    </div>
    <section class="sidebar">
      <gig-sidebar />
    </section>
  </section>
</template>

<script>
import gigSidebar from "../components/gig-sidebar.vue";
import gigOverview from "../components/gig-overview.vue";
import gigDescription from "../components/gig-description.vue";
import gigProfile from "../components/gig-profile.vue";
import { gigService } from "../services/gig-service.js";
export default {
  components: {
    gigSidebar,
    gigOverview,
    gigDescription,
    gigProfile,
  },
  data(){
    return{
      gig: null
    }
  },
  async created() {
    const { id } = this.$route.params;
    console.log(id);
    const gig = await gigService.getById(id);
    console.log(gig);
    this.gig = gig;
  },
};
</script>

<style>
</style>