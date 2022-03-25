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
export default {
  components: {
    gigSidebar,
    gigOverview,
    gigDescription,
    gigProfile,
  },
};
</script>

<style>
</style>