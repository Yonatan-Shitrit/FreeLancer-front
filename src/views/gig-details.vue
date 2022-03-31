<template>
  <div class="gig-details-header" 
  :style="{ position: (scrollY<120)
  ? 'fixed'
  : 'inherit'
  
  }"
  >
    <nav class="gig-details-header-nav">
      <ul class="gig-details-header-ul">
        <li class="gig-details-header-item" style="margin-left: 0;">
          <a href=""  class="gig-details-header-item-a">Overview</a>
        </li>
        <li class="gig-details-header-item">
          <a href=""  class="gig-details-header-item-a">Description</a>
        </li>
        <li class="gig-details-header-item">
          <a href=""  class="gig-details-header-item-a">About the seller</a>
        </li>
        <li class="gig-details-header-item">
          <a href="" class="gig-details-header-item-a">Reviews</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="order-modal">
    <div class="black-screen"></div>
    <div class="modal"></div>
  </div>
  <section v-if="gig" class="gig-page">
    <div class="gig-details">
      <gig-overview :gig="gig" />

      <div class="put-carousel">
        <agilecarousel :gig="gig" style="z-index: 1000"> </agilecarousel>
      </div>
      <h2>About This Gig</h2>
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
    agilecarousel,
  },
  data() {
    return {
      scrollY: 0,
      gig: null,

    }
  },
   methods: {
    setScroll() {
      this.scrollY = window.scrollY;
    },
  },
  created() {
    document.addEventListener("scroll", this.setScroll);
  },
  unmounted() {
    document.removeEventListener("scroll", this.setScroll);
  },
  async created() {
    const { id } = this.$route.params;
    const gig = await gigService.getById(id);
    console.log("i got gig", gig);
    this.gig = gig;
  },
};
</script>

<style>
</style>