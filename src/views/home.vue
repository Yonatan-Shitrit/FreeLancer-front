<template>
  <section class="gig-home" style="position: relative">
    <div style="margin: auto 0; position: absolute; z-index: 0; width: 100%">
      <agilecarousel style="-max-height: 630px; width: 100%"> </agilecarousel>
    </div>
    <section style="z-index: 10" class="gig-home-top">
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
            type="text"
            class="search-input"
            :placeholder="searchPlaceHolder"
            v-model="searchTerm"
          />
          <button class="search-btn" @click="search">Search</button>
        </form>
        <div class="popular">
          <span>Popular:</span>
          <ul>
            <li>
              <a @click="search">Website Design</a>
            </li>
            <li>
              <a @click="search">WordPress</a>
            </li>
            <li>
              <a @click="search">Logo Design</a>
            </li>
            <li>
              <a @click="search">NFT Art</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>

  <section class="main-home-6">
    <h2 class="main-carousel-header">Popular professional services</h2>
    <test-carousel
      class="carousel"
      :itemsToShow="5"
      :itemsToScroll="5"
      :wrapAround="true"
      :transition="400"
    />
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
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"
            ></path>
            <path
              d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"
            ></path></svg
          >&nbsp; The best for every budget
        </h6>
        <p>
          Find high-quality services at every price point. No hourly <br />
          rates, just project-based pricing.
        </p>

        <h6>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"
            ></path>
            <path
              d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"
            ></path></svg
          >&nbsp; Quality work done quickly
        </h6>
        <p>
          Find the right freelancer to begin working on your <br />
          project within minutes.
        </p>

        <h6>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"
            ></path>
            <path
              d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"
            ></path>
          </svg>
          &nbsp; Protected payments, every time
        </h6>
        <p>
          Always know what you'll pay upfront. Your payment isn't <br />
          released until you approve the work.
        </p>

        <h6>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"
            ></path>
            <path
              d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"
            ></path></svg
          >&nbsp; 24/7 support
        </h6>
        <p>
          Questions? Our round-the-clock support team is <br />
          available to help anytime, anywhere.
        </p>
      </div>
    </section>
  </section>
</template>

<script>
import testCarousel from "../components/main-carousel.vue";
import agilecarousel from "../components/main-header-carousel.vue";

export default {
  methods: {
    search() {
      this.$router.push({
        path: "gig",
        query: { title: this.searchTerm, category: this.searchTerm },
      });
    },
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  created() {},
  computed: {
    searchPlaceHolder() {
      return `Try "building mobile app"`;
    },
    gigs() {
      return this.$store.getters.gigs;
    },
    user() {
      return this.$store.getters.user;
    },
  },

  components: {
    testCarousel,
    agilecarousel,
  },
};
</script>

<style>
</style>