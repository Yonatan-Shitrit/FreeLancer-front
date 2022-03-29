<template>
  <div id="app">
  <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
    <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`"><img :src="slide"/></div>
  </agile>
  <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
    <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)"><img :src="slide"/></div>
    <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
    <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
  </agile>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
