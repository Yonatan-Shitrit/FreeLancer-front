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
          img: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png",
          bgc: "background-color:#88b3e0",
          hero: "Jaina",
          title: "Fashion Designer",
          stars: "",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png",
          bgc: "background-color:rgb(238, 165, 174)",
          hero: "Sun",
          title: "Program Manager",
          stars:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/five_stars.e5c37f5.svg",
        },
        {
          img: "	https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png",
          bgc: "background-color:rgb(112, 130, 132)",
          hero: "Allen",
          title: "Asntronomer and Designer",
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