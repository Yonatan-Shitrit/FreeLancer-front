<template>
<section class="col-10 m-auto">
  <h1>Home page</h1>
  <category-carousel :arrows="true" :dots="true" />
        <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
  <category-carousel/>
  </section>
</template>

<script>
  // import 'vue-slick-carousel/dist/slick.css'
  // import 'vue-slick-carousel/dist/slick-theme.css'
import categoryCarousel from "../components/category-carousel.vue"


export default {
    components:{
    categoryCarousel
},

}
</script>

<style>

</style>