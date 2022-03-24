<template>
  <section class="gig-page">
    <div class="gig-details">
      <gig-Overview />
      put carousel here
    </div>
    <section class="sidebar">
      <gig-sidebar />
    </section>
  </section>
</template>

<script>
import gigSidebar from "../components/gig-sidebar.vue";
import gigOverview from"../components/gig-overview.vue"
export default {
  components: {
    gigSidebar,
    gigOverview,
  },
};
</script>

<style>
</style>