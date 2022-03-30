<template>
  <section class="gig-page">
    <div class="gig-details">
      <gig-overview :gig="gig" />

      <div class="put-carousel">
        <agilecarousel :gig="gig" style="z-index: 1000;">

        </agilecarousel>

      </div>
      <gig-description :gig="gig" />
      <h2>About The Seller</h2>
      <gig-profile />
      <gig-reviews :gig="gig" />
    </div>
    <section class="sidebar">
      <gig-sidebar :gig="gig" />
    </section>
  </section>
</template>

<script>
import gigSidebar from "../components/gig-sidebar.vue";
import gigOverview from "../components/gig-overview.vue";
import gigDescription from "../components/gig-description.vue";
import gigProfile from "../components/gig-profile.vue";
import gigReviews from "../components/gig-reviews.vue";
import { gigService } from "../services/gig-service.js";
import agilecarousel from "../components/agile-carousel.vue";
export default {
  components: {
    gigSidebar,
    gigOverview,
    gigDescription,
    gigProfile,
    gigReviews,
    agilecarousel
 
  },
  data() {
    return {
      gig: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    const gig = await gigService.getById(id);
    console.log('i got gig', gig);
    this.gig = gig;
  },
};
</script>

<style>
</style>