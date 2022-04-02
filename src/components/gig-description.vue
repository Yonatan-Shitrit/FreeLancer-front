<template>
  <section class="gig-description">

    <p>{{gig.description}}</p>
    <!-- <p>You're in the right place!</p>
    <p>
      For $40 I'll draw you a colorfull and modern trippy dripping style
      illustration in less than 7 days. Perfect for stickers, your website, app,
      blog, album or single cover or for anything you want. Let me make your
      ideas come to life with a lot of dripping color.
    </p>
    <p>
      <strong>
        PRICE AND DELIVERY TIME VARY ACCORDING TO THE COMPLEXITY OF THE PROJECT
        (PLEASE CONTACT ME BEFORE ORDERING)
      </strong>
    </p>
    <p>
      This style is also perfect for flyers, banners, infographics, t-shirts or
      just for being printed and framed.
    </p>
    <p>
      If you want a custom request, please contact me before ordering so we can
      discuss the project.
    </p>
    <p>Thank You!</p> -->
  </section>
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