<template>
<!-- <pre>Categories: {{categories}}</pre> -->
    <Carousel>
    <Slide v-for="category in 1" :key="category" >
      <img style=" border-radius: 4px; margin:18px; width:252px; height: 345px"  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png">
      <img style=" border-radius: 4px; margin:18px; width:252px; height: 345px"  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png">
      <img style=" border-radius: 4px; margin:18px; width:252px; height: 345px"  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png">
      <img style=" border-radius: 4px; margin:18px; width:252px; height: 345px"  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png">
      <img style=" border-radius: 4px; margin:18px; width:252px; height: 345px"  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png">
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
        categories: [
            {name: 'Logo Design', image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png'},
            {name: 'Word Press', image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png'},
            {name: 'Voice Over', image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png'},
            {name: 'Social Media', image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png'},
            {name: 'Translation', image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png'}
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