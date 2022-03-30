<template>
  <div class="preview">
    <img @click="goToDetail" class="gig-card-img" :src="gig.images[0]" alt="..." />
    <div class="gig-mini-user">
      <img :src="gig.seller.imgUrl" alt="" />

      <div class="seller-identifiers">
        <div>{{ gig.seller.fullName }}</div>
        <span>Level 2 Seller</span>
        <p></p>
      </div>
    </div>
    <h3 @click="goToDetail" class="gig-title">
      {{ gig.title }}
    </h3>

    <div class="gig-rating">
      <span class="star-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1792 1792"
          width="15"
          height="15"
          class="rating-cosmetic"
        >
          <path
            fill="currentColor"
            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
          ></path>
        </svg>
        <span class="rating-cosmetic"> {{ gigRating }}</span>
        <span class="comment-counter">({{ gig.reviews.length }})</span>
      </span>
    </div>
    <div class="gig-footer">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"
        ></path>
      </svg>
      <span @click="goToDetail" class="price-container">
        <small class="price-tag">starting at</small>
        <span class="gig-price"
          >${{ gig.price }}<sup class="price-cents">56</sup>
        </span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    gig: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToDetail() {
      this.$router.push(`/gig/${this.gig._id}`);
    },
  },
  computed: {
    gigRating() {
      const sum = this.gig.reviews.reduce((acc, rate) => {
        return acc + rate.rate;
      }, 0);
      const avg = ("" + sum / this.gig.reviews.length).slice(0, 3);
      return avg;
    },
  },
};
</script>

<style>
</style>