<template>
<<<<<<< HEAD
  <section class="col-10 m-auto">    
  </section>
=======
>>>>>>> a4eb223569cc22447783c2bd0de484a353f5bc4b
  <section class="gig-home">
    <section class="gig-home-top">
      <datalist id="categories">
        <option value="logo maker" />
        <option value="build app" />
        <option value="build web" />
        <option value="create video" />
        <option value="create gallery" />
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
          <span
            ><button class="search-icon"><i class="bi bi-search"></i></button
          ></span>
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
    <main-carousel :itemsToShow="4" :itemsToScroll="4" :wrapAround="true" :snapAlign="start">
  </main-carousel>
</template>

<script>
<<<<<<< HEAD
=======
import mainCarousel from "../components/main-carousel.vue";

>>>>>>> a4eb223569cc22447783c2bd0de484a353f5bc4b

export default {
  computed: {
    searchPlaceHolder() {
      return `Try "building mobile app"`;
    },
  },
  components: {
<<<<<<< HEAD
=======
    mainCarousel,
>>>>>>> a4eb223569cc22447783c2bd0de484a353f5bc4b
  },
};
</script>

<style>
</style>