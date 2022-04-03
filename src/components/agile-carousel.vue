<template>
  <div id="app">
    <div style="background-color: white">
      <button
        @click="$refs.main.goToPrev()"
        type="button"
        class="view-main-carousel-prev-btn"
      >
        <svg class="carousel__icon" style="width: 50%; height: 50%" role="img">
          <path
            d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
          ></path>
        </svg>
      </button>

      <agile
        class="main-carousel-details"
        ref="main"
        :options="options1"
        :as-nav-for="asNavFor1"
        style="background-color: white"
      >
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img style="    width: calc(100% - 6px);" :src="slide" />
        </div>
      </agile>
      <button
        @click="$refs.main.goToNext()"
        type="button"
        class="view-main-carousel-next-btn"
      >
        <svg class="carousel__icon" style="width: 50%; height: 50%" role="img">
          <path
            d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
          ></path>
        </svg>
      </button>
    </div>

    <div style="background-color: white">
      <button
        @click="$refs.thumbnails.goToPrev()"
        type="button"
        class="bot-carousel__next"
        style="
          z-index: 6;
          position: relative;
          right: 347px;
          height: 100px;
          width: 20px;
          margin-bottom: -200px;
          margin-top: -200px;
          top: 42px;
        "
      >
        <svg
          class="carousel__icon"
          role="img"
          style="right: 10px; position: relative"
        >
          <path
            d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
          ></path>
        </svg>
      </button>
      <agile
        class="thumbnails"
        ref="thumbnails"
        :options="options2"
        :as-nav-for="asNavFor2"
        style="background-color: white"
      >
        <div
          class="slide slide--thumbniail"
          v-for="(slide, index) in slides"
          :key="index"
          @click="$refs.thumbnails.goTo(index)"
        >
          <img style="height: 100%" :src="slide" />
        </div>
      </agile>
      <button
        @click="$refs.thumbnails.goToNext()"
        type="button"
        class="bot-carousel__prev"
        style="
          z-index: 6;
          position: relative;
          right: -347px;
          height: 100px;
          width: 20px;
          margin-bottom: -200px;
          margin-top: -200px;
          top: -49px;
        "
      >
        <svg
          class="carousel__icon"
          role="img"
          style="transform: rotateY(180deg); right: 16px; position: relative"
        >
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

  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: false,
        infinite: true,
        navButtons: false,
      },

      options2: {
        autoplay: false,
        centerMode: true,
        dots: false,
        navButtons: false,
        infinite: true,
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

      slides: null,
    };
  },
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  },

  created() {
    this.slides = this.gig.images;
    if (this.gig.images.length < 5) {
      this.options2.slidesToShow = this.gig.images.length;
    }
  },
};
</script>

<style>
</style>
