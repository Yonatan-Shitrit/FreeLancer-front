<template>
  <section class="main-container gig-edit">
    <form @submit.prevent="">
      <div class="form-container">
        <label for="title">Gig Title </label>
        <textarea
          id="title"
          class="title-input"
          type="text"
          placeholder="I will do something I'm realy good at"
          v-model="gigToSave.title"
        ></textarea>
        <div class="img-input-container">
          <div>Gig Images</div>
          <input
            class="input-with-btn img-input"
            v-for="(image, idx) in imageCount"
            :key="idx"
            type="text"
            placeholder="Image Url"
            v-model="gigToSave.images[idx]"
          />
          <button
            v-if="imageCount < 3"
            class="add-input"
            @click="addMoreImage(imageCount - 1)"
          >
            +
          </button>
        </div>
        <div class="description-input-container">
          <label for="description">Description</label>
          <textarea
            class="description-input"
            id="description"
            rows="7"
            type="text"
            placeholder="description"
            v-model="gigToSave.description"
          ></textarea>
        </div>
        <div class="details-input-container">
          <label for="details">Details</label>
          <textarea
            class="details-input"
            id="details"
            type="text"
            placeholder="details"
            v-model="gigToSave.details"
          />
        </div>
        <div class="container-inputs">
          <span class="delivery-select-container">
            <label for="delivery-time">Delivery Time</label>
            <select
              class="delivery-select"
              name=""
              id="delivery-time"
              v-model.number="gigToSave.daysToMake"
            >
              <option selected value="0">Choose Days To Make</option>
              <option value="1">1 Day</option>
              <option value="3">3 Days</option>
              <option value="7">7 Days</option>
              <option value="14">14 Days</option>
              <option value="21">21 Days</option>
            </select>
          </span>
          <span class="revisions-select-container">
            <label for="revisions">revisions</label>
            <select
              class="revisions-select"
              name=""
              id="revisions"
              v-model.number="gigToSave.revision"
            >
              <option selected value="0">Choose Revision</option>
              <option value="1">1 Revision</option>
              <option value="2">2 Revisions</option>
              <option value="3">3 Revisions</option>
              <option value="4">4 Revisions</option>
              <option value="5">5 Revisions</option>
              <option value="unlimited">Unlimited revisions</option>
            </select>
          </span>
        </div>
        <div class="container-inputs">
          <span class="category-select-container">
            <label for="category">Category</label>
            <select
              class="category-select"
              name=""
              id="category"
              v-model.number="gigToSave.category"
            >
              <option selected value="">Choose Category</option>
              <option
                v-for="category in categories"
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
            </select>
          </span>
          <span class="price-input-container">
            <label for="price">Price</label>
            <input
              class="price-input"
              id="price"
              type="number"
              placeholder="price"
              v-model="gigToSave.price"
            />
          </span>
        </div>
        <div class="label-input-container">
          <div>Labels</div>
          <input
            class="input-with-btn label-input"
            v-for="(label, idx) in labelCount"
            :key="idx"
            type="text"
            placeholder="Labels"
            v-model="gigToSave.labels[idx]"
          />
          <button
            v-if="labelCount < 8"
            class="add-input"
            @click="addMoreLabel(labelCount - 1)"
          >
            +
          </button>
        </div>
        <div class="btn-container">
          <button class="save-btn" type="submit" @click="saveGig">save</button>
        </div>
      </div>
      <button @click="getDemoData">Get Demo Data</button>
    </form>
    <!-- <div v-if="sellerGigs">
      <gig-preview v-for="gig in sellerGigs" :key="gig._id" :gig="gig" />
    </div>
    <pre>
gigToSave:
      {{ gigToSave }}</pre
    >
    <pre>
sellerGigs:
      {{ sellerGigs }}</pre
    > -->
  </section>
</template>

<script>
import { gigService } from "@/services/gig-service.js";
import gigPreview from "../components/gig-preview.vue";
export default {
  data() {
    return {
      gigToSave: {},
      imageCount: 1,
      labelCount: 1,
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
      sellerGigs: null,
    };
  },
  created() {
    this.getEmptyGig();
    this.getUser();
    this.loadSellerGigs();
  },
  components: {
    gigPreview,
  },
  methods: {
    getEmptyGig() {
      this.gigToSave = gigService.getEmptyGig();
    },
    addMoreImage(idx) {
      console.log({ idx });
      if (!this.gigToSave.images[idx]) {
        alert("please enter url");
        return;
      }
      this.imageCount++;
    },
    addMoreLabel(idx) {
      if (!this.gigToSave.labels[idx]) {
        alert("please enter label");
        return;
      }
      this.labelCount++;
    },
    getUser() {
      this.gigToSave.seller._id = this.$store.getters.user._id;
      this.gigToSave.seller.fullName = this.$store.getters.user.fullname;
      this.gigToSave.seller.imgUrl = this.$store.getters.user.imgUrl;
    },
    saveGig() {
      console.log(this.gigToSave);
      this.$store.dispatch({ type: "saveGig", gig: this.gigToSave });
      this.loadSellerGigs();
    },

    loadSellerGigs() {
      this.sellerGigs = this.gigs.filter(
        (gig) => gig.seller._id === this.$store.getters.user._id
      );
      console.log("sellerGigs", this.sellerGigs);
    },
    getDemoData() {
      this.labelCount = 4;
      this.imageCount = 3;
      this.gigToSave.title = "Make logo";
      this.gigToSave.images = [
        "https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80",
        "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        "https://images.unsplash.com/photo-1502404679462-d669245fc482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ];
      this.gigToSave.details =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque.";
      this.gigToSave.price = 120;
      this.gigToSave.daysToMake = 3;
      this.gigToSave.revision = 2;
      this.gigToSave.description =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis maiores eligendi molestias quisquam vero quae rerum explicabo magni unde eveniet! Laudantium aut quisquam tempore ea minus ullam atque voluptatem, eveniet aliquam, error labore, quae excepturi illum beatae nobis sed debitis asperiores fugiat iste dolore! Nemo quo possimus ipsa modi natus.";
      this.gigToSave.category = "Logo Design";
      this.gigToSave.labels = ["logo", "designer", "photo", "business"];
    },
  },
  computed: {
    gigs() {
      return this.$store.getters.gigs;
    },
  },
  mounted() {},
};
</script>

<style>
</style>