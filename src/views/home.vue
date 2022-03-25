<template>
  
  <section class="gig-home">
    <section class="gig-home-top">
      <datalist id="categories">
          <option v-for="(gig) in gigs[0]" :key="gig._id" :value="gig.title.slice(6,gig.title.length-1)" />
          <!-- <option value="gig.title" /> -->
      </datalist>

      <div class="left-side">
        <div class="sub-left-side1">
          <p class="mini-dis">
            Find the perfect
            <span
              class="text-success"
              style="font-weight: bold; font-family: 'domaine', cursive"
              >freelance</span
            >
            <br />
            services for your business
          </p>
        </div>
        <div class="sub-left-side2">
          <span><button class="search-icon"><i class="bi bi-search"></i></button></span>
          <input
            list="categories"
            type="text"
            class="search-input"
            :placeholder="searchPlaceHolder"
          />
          <span><button class="search-btn">search</button></span>
        </div>
      </div>
    </section>
  </section>
  <section class="main-home-1">  
  <h2 style="font-size: 32px; line-height: 120%; color: #404145; font-weight: 700;"> Popular professional services </h2>
    <main-carousel   style=" margin:auto; width:calc (100% + 20px);"  :itemsToShow="5" :itemsToScroll="5"  :modelValue="2" :wrapAround="true" :transition="400">
  </main-carousel>  
  <!-- <pre><h2>Our Gigs:</h2>
  {{gigs}}</pre> -->
  </section>
  <section class="markit-home">
  <section class="main-home-2">
    <div class="right-side">
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="">
    </div>
    <div class="left-side">
      <h2>
        A whole world of freelance <br> talent at your fingertips
      </h2>

      <h6>
        <i class="bi bi-check-circle"></i>&nbsp; 
        The best for every budget
      </h6>
      <p>
        Find high-quality services at every price point. No hourly <br> rates, just project-based pricing.
      </p>

      <h6>
        <i class="bi bi-check-circle"></i>&nbsp; 
        Quality work done quickly
      </h6>
      <p>
        Find the right freelancer to begin working on your <br> project within minutes.
      </p>

      <h6>
        <i class="bi bi-check-circle"></i> &nbsp; 
        Protected payments, every time
      </h6>
      <p>
        Always know what you'll pay upfront. Your payment isn't <br> released until you approve the work.
      </p>

      <h6>
        <i class="bi bi-check-circle"></i>&nbsp; 
        24/7 support
      </h6>
      <p>
        Questions? Our round-the-clock support team is <br> available to help anytime, anywhere.
      </p>

    </div>

  </section>
  </section>
</template>

<script>
import mainCarousel from "../components/main-carousel.vue";


export default {  
  methods:{    
    
  },
  data(){
    return{
      
    }
  },
  created(){
    
  },
  computed: {
    searchPlaceHolder() {
      return `Try "building mobile app"`;
    },
    gigs(){
      return this.$store.getters.gigs
    },
    
  },
  components: {
    mainCarousel,
  },
};
</script>

<style>
</style>