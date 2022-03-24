<template>
    <Carousel>
    <Slide v-for="slide in 8" :key="slide" >
        <img style=" border-radius: 4px; margin:18px; width:100%;"  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5344c10fd4820db3626c4fc24968783d-1588608774469/1e4a3bd9-b71d-48ce-8ac0-0ff6d667caf4.jpeg">
      <!-- <div style="width:fit-content; height:fit-content">{{ slide.imgSrc }}</div> -->
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

    data(){
        return{
        slides:[
            {
                imgSrc:"",
                slideSubHeader:"",
                slideHeader:"",
                
            }],
    }},
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