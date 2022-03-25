<template>
  <div class="preview">
    <img
      class="gig-card-img"
      src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155512325/original/9d62fbdec2b0bffd0318f9af43c2de023b62f5f0.jpg"
      alt="..."
    />
    <div class="gig-mini-user">
      <img
        src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5344c10fd4820db3626c4fc24968783d-1588608774469/1e4a3bd9-b71d-48ce-8ac0-0ff6d667caf4.jpeg"
        alt=""
      />
      <div class="seller-identifiers">
        <div>andreacarvalho_</div>
        <span>Level 2 Seller</span>
      </div>
    </div>
    <h3 class="gig-title">
      Card title will be up to 2 lines Card title will be up to 2 lines
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
        <span class="rating-cosmetic"> 4.5</span>
        <span class="comment-counter">(1k+)</span>
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
      <span class="price-container">
        <small class="price-tag">starting at</small>
        <span class="gig-price">$20<sup class="price-cents">56</sup>
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
};
</script>

<style>
</style>