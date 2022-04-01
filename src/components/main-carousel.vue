<template>
    <Carousel :breakpoints="breakpoints">
    <Slide  style="padding: 0 10px 0 10px; display:grid; " v-for="slide in 10" :key="slide" >
      <img  class="slide-image" @click="explore(title[slide-1])" :src="images[slide-1]">
      <h4 class="main-carousel-slide-txt">
   <small style="font-size: 14px; font-weight: 100;position:relative; bottom:7px;">{{description[slide-1]}}</small><br>
  {{title[slide-1]}}
  </h4>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
    data(){
        return{

          breakpoints: {
				// 700px and up
				1000: {
					itemsToShow: 5,
          itemsToScroll:5,
          wrapAround:"true",
          transition:"400",
				},
        // 				1120: {
				// 	itemsToShow: 4,
        //   itemsToScroll:4,
        //   wrapAround:"true",
        //   transition:"400",
				// },
                				550: {
					itemsToShow: 3,
          itemsToScroll:3,
          wrapAround:"true",
          transition:"400",
				},
        //         				560: {
				// 	itemsToShow: 2,
        //   itemsToScroll:2,
        //   wrapAround:"true",
        //   transition:"400",
				// },
                        1: {
					itemsToShow: 1,
          itemsToScroll:1,
          wrapAround:"true",
          transition:"400",
				},
				// 1024 and up
				// 1024: {
				// 	itemsToShow: 5,
				// 	snapAlign: "start"
				// }
			},


            title: [
            'Voice Over','Video Explainer','Social Media','SEO','Illustration','Translation','Data Entry', 'Book Covers','Logo Design', 'Word Press',
          ],
          images:[
          'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png',
          'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png',
          'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png',
          'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png',
          'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png',
          'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png',
          'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png',
          'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png',
          'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png',
          'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png',],
          
          description:["Share your message","Engage your audience","Reach more customers","Unlock growth online",
          "Color your dreams","Go global","Learn your business","Showcase your story","Build your brand","Costumize your site",],

    }},
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  methods:{
    explore(search){
      this.$router.push({ path: 'gig', query: { category: search }})
    }
  }
};
</script>

<style>

</style>