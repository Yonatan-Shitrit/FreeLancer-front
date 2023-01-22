<template>
  <agile
    :autoplaySpeed="6000"
    :fade="true"
    :dots="false"
    :navButtons="false"
    :autoplay="true"
    :speed="2000"
  >
    <div v-for="(image, index) in this.images" :key="index">
      <div
        :style="image.bgc"
        style="display: flex; justify-content: center; position: relative"
      >
        <img style="height: 680px; width: auto" :src="image.img" />
        <div style="position:absolute; height:680px; width:1400px; margin: 0 auto;">
          <div style="position: absolute; bottom: 32px; right: 0">
            <img
              style="height: 12px; width:70px; margin-bottom: 10px"
              :src="image.stars"
              alt=""
              v-bind:style="{ display: image.stars ? 'block' : 'none' }"
            />
            <div>{{ image.hero + ", " }} <strong>{{ image.title }}</strong></div>
          </div>
        </div>
      </div>
    </div>
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  data() {
    return {
      images: [
        {
          // img: "@/../imgs/nyess.png",
          img:"https://res.cloudinary.com/dhpnklpna/image/upload/v1674065431/metilda_rwjirs.png",
          bgc: "background-color:#023a15",
          hero: "Jaina",
          title: "Fashion Designer",
          stars: "",
        },
        {
          // img: "@/../imgs/metilda.png", 
          img: "https://res.cloudinary.com/dhpnklpna/image/upload/v1674065431/nyess_fwrgxq.png",
          bgc: "background-color:rgb(238, 165, 174)",
          hero: "Sun",
          title: "Program Manager",
          stars:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/five_stars.e5c37f5.svg",
        },
        {
          // img: "@/../imgs/fiverr-chad.png",
          img: "https://res.cloudinary.com/dhpnklpna/image/upload/v1674065431/fiverr-chad_fdymky.png",
          bgc: "background-color:rgb(112, 130, 132)",
          hero: "Allen",
          title: "Designer",
          stars: "",
        },
        {
          // img: "@/../imgs/boby.png",
          img: "https://res.cloudinary.com/dhpnklpna/image/upload/v1674065431/boby_acadmt.png",
          bgc: "background-color:#88b3e0",
          hero: "Zach",
          title: "Bar Owner",
          stars: "",
        },
        {
          // img: "@/../imgs/monika.png",
          img:"https://res.cloudinary.com/dhpnklpna/image/upload/v1674065431/monika_prooej.png",
          bgc: "background-color:#fe7777",
          hero: "Gabrielle",
          title: "Video Editor",
          stars:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/five_stars.e5c37f5.svg",
        },
      ],
    };
  },
  components: {
    agile: VueAgile,
  },
};
</script>

<style>
</style>