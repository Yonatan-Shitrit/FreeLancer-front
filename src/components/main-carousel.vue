<template>
<!-- <pre>Categories: {{categories}}</pre> -->
    <Carousel>
    <Slide  style="padding: 0 10px 0 10px; display:grid; " v-for="category in this.categories" :key="category" >
      <img  style="
  grid-column-start: 1;
  grid-column-end: one;
  grid-row-start: 1;
  grid-row-end: 1;"
   v-bind:src=" category.image">
      <h4 style="
  font-size: 24px;
  grid-column-start: 1;
  grid-column-end: one;
  grid-row-start: 1;
  grid-row-end: 1;
  color:white;
  padding:16px;
  margin-bottom: auto;
  text-align:left;
  font-weight: 700;
  ">
   <small style="font-size: 14px; font-weight: 100;">{{category.description}}</small><br>
  {{category.name}}
  </h4>
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
            categories: [
            {name: 'Logo Design', description: "Build your brand", image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png'},
            {name: 'Word Press', description: "Costumize your site", image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png'},
            {name: 'Voice Over', description: "Share your message", image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png'},
            {name: 'Video Explainer', description: "Engage your audience", image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png'},
            {name: 'Social Media', description: "Reach more customers", image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png'},
            {name: 'SEO', description: "Unlock growth online", image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png'},
            {name: 'Illustration', description: "Color your dreams", image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png'},
            {name: 'Translation', description: "Go global", image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png'},
            {name: 'Data Entry', description: "Learn your business", image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png'},
            {name: 'Book Covers', description: "Showcase your story", image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png'}
          ]
    }},
    methods:{
      getImagesCat(){
        let imagesCat = this.categories.map(category=>`
          <img style=" border-radius: 4px; margin:18px; width:252px; height: 345px"  src="${category.image}">
        `)
        // console.log('imagesCat', imagesCat.join(''));
        return imagesCat.join()
      }
    },
    computed:{
      images(){
        return this.getImagesCat()
      }
    },
    created(){
      this.getImagesCat()
    },
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