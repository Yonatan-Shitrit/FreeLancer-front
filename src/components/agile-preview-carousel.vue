<template>
  <div id="app">
    <div class="gig-card-img" style=" background-color: white">
      <button
        @click="$refs.main.goToNext()"
        type="button"
        class="view-sub-carousel-prev-btn"
      >
        <svg class="carousel__icon" style="" role="img">
          <path
            d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
          ></path>
        </svg>
      </button>

      <agile @click="goToDetail" ref="main" class="" :options="options1" style="background-color: white">
        <div
        class="slide gig-card-img"
        v-for="(slide, index) in slides"
        :key="index"
        >
        <img :src="slide"  alt="<No image to show>" />
      </div>
      </agile>
      <button
        @click="$refs.main.goToPrev()"
        type="button"
        class="view-sub-carousel-next-btn"
      >
        <svg class="carousel__icon" style="height:32px; width:32px; right:8px; top:1px; position:relative;" role="img">
          <path
            d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  props: {
    gig: {
      type: Object,
      required: true,
    },
  },
  components: {
    agile: VueAgile,
  },

  methods:{

    goToDetail(){
      this.$emit('goToDetail')
    }
  },
  data() {
    return {
      options1: {
        dots: true,
        fade: false,
        infinite: true,
        navButtons: false,
      },
      slides: null,
    };
  },


  created(){
      this.slides= this.gig.images
  }
};
</script>

<style>
</style>
