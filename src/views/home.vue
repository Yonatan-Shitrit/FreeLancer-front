<template>
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
    <main-carousel :items-to-show="1.5">
    <slide v-for="slide in 8" :key="slide">
      {{ slide }}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </main-carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  computed: {
    searchPlaceHolder() {
      return `Try "building mobile app"`;
    },
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