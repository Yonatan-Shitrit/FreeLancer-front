<template>
    <Carousel>
    <Slide v-for="slide in 8" :key="slide" >
      <div style="width:50px;background-color:purple">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {

    // data(){
    //     slide{

    //     }
    // },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style>

</style>