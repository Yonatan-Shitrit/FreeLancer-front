<template>
  <div id="app">
      <div style="background-color:white; ">
     <button @click="$refs.main.goToPrev()" type="button" class="view-main-carousel-prev-btn">
         <svg class="carousel__icon" style="width:50%; height:50%; " role="img">
             <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
         </svg>
     </button>

    <agile class="main-carousel-details" ref="main" :options="options1" :as-nav-for="asNavFor1" style="background-color:white">
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :key="index"
        >
        <img :src="slide" />
      </div>
      
    </agile>
     <button @click="$refs.main.goToNext()" type="button" class="view-main-carousel-next-btn" >
         <svg class="carousel__icon"  style="width:50%; height:50%" role="img">
             <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
         </svg>
     </button>

</div>

    <div style="background-color:white">
 <button @click="$refs.thumbnails.goToPrev()" type="button" class=""  style="z-index: 6; position:relative; right:346px; height:100px; width:20px;     margin-bottom: -200px;
    margin-top: -200px;
    top: 67px;">
         <svg class="carousel__icon" role="img" style="    right: 10px;
    position: relative;">
             <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
         </svg>
     </button> 
        <agile
      class="thumbnails"
      ref="thumbnails"
      :options="options2"
      :as-nav-for="asNavFor2"
      style="background-color:white"
    >
          <!-- <template slot="prevButton"><i class="fas fa-chevron-left"></i></template> -->

      <div
        class="slide slide--thumbniail"
        v-for="(slide, index) in slides"
        :key="index"
        @click="$refs.thumbnails.goTo(index)"
      >
        <img style="height:100%" :src="slide" />
      </div>
      
    </agile>
<button @click="$refs.thumbnails.goToNext()" type="button" class="bot-carousel__prev"  style="z-index: 6; position:relative; right:-346px; height:100px; width:20px;     margin-bottom: -200px;
    margin-top: -200px;
    top: -49px;">
         <svg class="carousel__icon" role="img" style="transform: rotateY(180deg); right:16px; position:relative;">
             <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
         </svg>
     </button>     </div>

      <!-- <template slot="nextButton"><i class="fas fa-chevron-right"></i></template> -->

  </div>
</template>

<script>
// import "vue3-carousel/dist/carousel.css";
import { VueAgile } from "vue-agile";
export default {
 components: {
    agile: VueAgile,
  },

  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        infinite:false,
        navButtons: false,
         },


      options2: {
        autoplay: false,
        centerMode: true,
        dots: false,
        navButtons: false,
        infinite:true,
        slidesToShow: 5,
        // responsive: [
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 3 } }
        //     ,



        // {
        //   breakpoint: 1000,
        //   settings: {
        //       slidesToShow: 3,
        //     navButtons: true } }]
             },






      slides: [
      'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'] };


  },
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  } };

</script>

<style>
</style>
