<template>
  <section class="main-container">
    <form @submit.prevent="saveGig">
      <div class="edit-form">
        <input type="text" placeholder="Title" v-model="gigToSave.title" />
        <input
          class="input-with-btn"
          v-for="(image, idx) in imageCount"
          :key="image"
          type="text"
          placeholder="Image Url"
          v-model="gigToSave.images[idx]"
        />
        <button class="add-input" @click="addMoreImage">+</button>
        <input type="number" placeholder="price" v-model="gigToSave.price" />
        <select name="" id="" v-model.number="gigToSave.daysToMake">
          <option selected value="">Choose Days To Make</option>
          <option value="1">1 Day</option>
          <option value="3">3 Days</option>
          <option value="7">7 Days</option>
          <option value="14">14 Days</option>
          <option value="21">21 Days</option>
        </select>
        <select name="" id="" v-model.number="gigToSave.revision">
          <option selected value="">Choose Revision</option>
          <option value="1">1 Revision</option>
          <option value="2">2 Revisions</option>
          <option value="3">3 Revisions</option>
          <option value="4">4 Revisions</option>
          <option value="5">5 Revisions</option>
          <option value="unlimited">Unlimited revisions</option>
        </select>
        <textarea
          rows="7"
          type="text"
          placeholder="description"
          v-model="gigToSave.description"
        ></textarea>
        <select name="" id="" v-model.number="gigToSave.category">
          <option selected value="">Choose Category</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
        <input
          class="input-with-btn"
          v-for="(image, idx) in imageCount"
          :key="image"
          type="text"
          placeholder="Labels"
          v-model="gigToSave.labels[idx]"
        />
        <button class="add-input" @click="addMoreImage">+</button>
      </div>
      <button>save</button>
    </form>
    <pre>{{ gigToSave }}</pre>
  </section>
</template>

<script>
import { gigService } from "@/services/gig-service.js";
export default {
  data() {
    return {
      gigToSave: {},
      imageCount: 1,
      categories: [
        "Voice Over",
        "Video Explainer",
        "Social Media",
        "SEO",
        "Illustration",
        "Translation",
        "Data Entry",
        "Book Covers",
        "Logo Design",
        "Word Press",
      ],
    };
  },
  created() {
    this.getEmptyGig();
    this.getUser();
  },
  components: {},
  methods: {
    // async getEmptyGig(){
    //   this.emptyGig = await this.$store.getters.getEmptyGig;
    // }
    getEmptyGig() {
      this.gigToSave = gigService.getEmptyGig();
    },
    addMoreImage() {
      this.imageCount++;
    },
    getUser() {
      this.gigToSave.seller = this.$store.getters.user;
    },
    saveGig() {
      console.log(this.gigToSave);
      this.$store.dispatch({ type: "saveGig", gig: this.gigToSave });
    },
  },
  computed: {},
};
</script>

<style>
</style>