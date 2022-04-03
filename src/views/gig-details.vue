<template>
  <div class="gig-details-header"
   
  :style="{ position: (scrollY<120)
  ? 'relative'
  : 'fixed' ,
  marginTop: (scrollY<120)
  ? ''
  : '-120px' ,  
  }"
  >
    <nav class="gig-details-header-nav">
      <ul class="gig-details-header-ul">
        <li class="gig-details-header-item" style="margin-left: 0;">
          <a  @click="scrollMeTo('Overview')" class="gig-details-header-item-a">Overview</a>
        </li>
        <li class="gig-details-header-item">
          <a @click="scrollMeTo('Description')" class="gig-details-header-item-a">Description</a>
        </li>
        <li class="gig-details-header-item">
          <a @click="scrollMeTo('AboutTheSeller')"  class="gig-details-header-item-a">About the seller</a>
        </li>
        <li class="gig-details-header-item">
          <a @click="scrollMeTo('Reviews')" class="gig-details-header-item-a">Reviews</a>
        </li>
      </ul>
    </nav>
  </div>
  <div  v-if="modal" class="order-modal">
    <div @click="closeModal" class="black-screen"></div>
    <div class="modal">
      <h3>Your order has been successfully received</h3>
    </div>
  </div>
  <section v-if="gig" class="gig-page" >
    
    <div class="gig-details" >
      <h2 ref="Overview" >Overview</h2>
      <gig-overview :gig="gig" />

      <div class="put-carousel">
        <agilecarousel :gig="gig" style="z-index: 1000"> </agilecarousel>
      </div>
      <h2 ref="Description" >About This Gig</h2>
      <gig-description :gig="gig" />
      <h2 ref="AboutTheSeller" >About The Seller</h2>
      <gig-profile />      
      <h2 ref="Reviews" >Reviews</h2>
      <gig-reviews  :gig="gig" />
    </div>
    <section class="sidebar">
      <gig-sidebar :gig="gig" @openLoginModal="openLoginModal" @confirmation="confirmation" />
    </section>
    <login-modal @closeModal="closeLoginModal" v-if="login"/>
  </section>
</template>

<script>
import gigSidebar from "../components/gig-sidebar.vue";
import gigOverview from "../components/gig-overview.vue";
import gigDescription from "../components/gig-description.vue";
import gigProfile from "../components/gig-profile.vue";
import gigReviews from "../components/gig-reviews.vue";
import { gigService } from "../services/gig-service.js";
import agilecarousel from "../components/agile-carousel.vue";
import loginModal from "../components/login.vue";
export default {
  components: {
    gigSidebar,
    gigOverview,
    gigDescription,
    gigProfile,
    gigReviews,
    agilecarousel,
    loginModal,
  },
  data() {
    return {
      scrollY: 0,
      gig: null,
      modal: false,
      login: false,
    };
  },
  methods: {
    setScroll() {
      this.scrollY = window.scrollY;
    },
    scrollMeTo(refName){
      var element = this.$refs[refName]
      var top = element.offsetTop - element.offsetHeight
      console.log("element", top)

      window.scrollTo(0,top)
    },
    confirmation() {
      this.modal = true;
      setTimeout(() => {
        this.modal = false;
      }, 2000);
    },
    closeModal() {
      this.modal = false;
    },
    openLoginModal(){
      this.login = true;
    },
    closeLoginModal(){
      this.login = false
    }
  },
  // created() {
  //   document.addEventListener("scroll", this.setScroll);
  // },
  unmounted() {
    document.removeEventListener("scroll", this.setScroll);
  },
  async created() {    
    document.addEventListener("scroll", this.setScroll);
    const { id } = this.$route.params;
    try{
    const gig = await gigService.getById(id);
    console.log("i got gig", gig);
    this.gig = gig;
    }
    catch(err){
      console.error('Cannot get gig by id from gig details', err);
    }
  },
};
</script>

<style>
</style>