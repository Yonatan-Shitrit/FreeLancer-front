<template>
  <agile
    :autoplaySpeed="6000"
    :fade="true"
    :dots="false"
    :navButtons="false"
    :autoplay="true"
  >
    <div v-for="(image, index) in this.images" :key="index">
      <div
        :style="image.bgc"
        style="display: flex; justify-content: center; position: relative"
      >
        <img style="height: 630px; width: auto" :src="image.img" />
        <div style="position:absolute; height:630px; width:1400px; margin: 0 auto;">
          <div style="position: absolute; bottom: 10px; right: 0">
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
          img: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png",
          bgc: "background-color:#023a15",
          hero: "Andrea",
          title: "Fashion Designer",
          stars: "",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png",
          bgc: "background-color:#b64762",
          hero: "Moon",
          title: "Marketing Expert",
          stars:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/five_stars.e5c37f5.svg",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png",
          bgc: "background-color:#540e1f",
          hero: "Ritika",
          title: "Shoemaker and Designer",
          stars: "",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png",
          bgc: "background-color:#023a15",
          hero: "Zach",
          title: "Bar Owner",
          stars: "",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png",
          bgc: "background-color:#7d1a00",
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