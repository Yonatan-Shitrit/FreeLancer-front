<template>
<section class="col-10 m-auto">
  <h1>Home page</h1>
  <category-carousel :arrows="true" :dots="true" />
  </section>
</template>

<script>
import categoryCarousel from "../components/category-carousel.vue"

export default {
    components:{
    categoryCarousel,
}

}
</script>

<style>

</style>