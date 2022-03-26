<template>
  <section class="gig-list">
    <gig-preview v-for="gig in gigs" :key="gig._id" :gig="gig" />
  </section>
</template>

<script>
import gigPreview from "../components/gig-preview.vue";
export default {
  props: {
    gigs: {
      type: Array,
      required: true,
    },
  },
  components: {
    gigPreview,
  },
};
</script>

<style>
</style>