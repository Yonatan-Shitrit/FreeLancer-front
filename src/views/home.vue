<template>
  <section class="gig-home">
    <section class="gig-home-top">
      <datalist id="categories">
        <option
          v-for="gig in gigs"
          :key="gig._id"
          :value="gig.title.slice(6, gig.title.length - 1)"
        />
        <!-- <option value="gig.title" /> -->
      </datalist>

      <div class="left-side">
        <div class="sub-left-side1">
          <h1 class="mini-dis">
            Find the perfect
            <i>freelance</i>
            services for your business
          </h1>
        </div>
        <form @submit.prevent="" class="search-bar">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"
              ></path>
            </svg>
          </span>
          <input
            list="categories"
            type="text"
            class="search-input"
            :placeholder="searchPlaceHolder"
          />
          <button class="search-btn">Search</button>
        </form>
      </div>
    </section>
  </section>
  <section class="main-home-1">

  </section>
  <section class="main-home-1">  
  <h2 class="main-carousel-header"> Popular professional services </h2>
  <test-carousel   :itemsToShow="5" :itemsToScroll="5"  :wrapAround="true" :transition="400" />
  </section>
  <section class="markit-home">
    <section class="main-home-2">
      <div class="right-side">
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
          alt=""
        />
      </div>
      <div class="left-side">
        <h2>
          A whole world of freelance <br />
          talent at your fingertips
        </h2>

        <h6>
          <i class="bi bi-check-circle"></i>&nbsp; The best for every budget
        </h6>
        <p>
          Find high-quality services at every price point. No hourly <br />
          rates, just project-based pricing.
        </p>

        <h6>
          <i class="bi bi-check-circle"></i>&nbsp; Quality work done quickly
        </h6>
        <p>
          Find the right freelancer to begin working on your <br />
          project within minutes.
        </p>

        <h6>
          <i class="bi bi-check-circle"></i> &nbsp; Protected payments, every
          time
        </h6>
        <p>
          Always know what you'll pay upfront. Your payment isn't <br />
          released until you approve the work.
        </p>

        <h6><i class="bi bi-check-circle"></i>&nbsp; 24/7 support</h6>
        <p>
          Questions? Our round-the-clock support team is <br />
          available to help anytime, anywhere.
        </p>
      </div>
    </section>
  </section>
</template>

<script>
import mainCarousel from "../components/main-carousel2.vue";
import testCarousel from "../components/main-carousel.vue";


export default {
  methods: {},
  data() {
    return {};
  },
  created() {},
  computed: {
    searchPlaceHolder() {
      return `Try "building mobile app"`;
    },
    gigs() {
      return this.$store.getters.gigs;
    },
  },
  components: {
    mainCarousel,
    testCarousel
  },
};
</script>

<style>
</style>