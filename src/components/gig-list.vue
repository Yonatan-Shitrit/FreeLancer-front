<template>
<section class="gig-list">
  <gig-preview v-for="card in 20" :key="card"/>
</section>
</template>

<script>
import gigPreview from "../components/gig-preview.vue"
export default {
  components:{
    gigPreview
  }
}
</script>

<style>

</style>