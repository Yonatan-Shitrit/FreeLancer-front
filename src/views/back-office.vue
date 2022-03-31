<template>
  <section class="main-container">
    <form @submit.prevent="">
      <div class="edit-form">
        <input type="text" placeholder="Title" v-model="gigToSave.title" />
        <input
          class="input-with-btn"
          v-for="(image, idx) in imageCount"
          :key="idx"
          type="text"
          placeholder="Image Url"
          v-model="gigToSave.images[idx]"
        />
        <button class="add-input" @click="addMoreImage(imageCount-1)">+</button>
        <input type="number" placeholder="price" v-model="gigToSave.price" />
        <input type="text" placeholder="details" v-model="gigToSave.details" />
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
          v-for="(label, idx) in labelCount"
          :key="idx"
          type="text"
          placeholder="Labels"
          v-model="gigToSave.labels[idx]"
        />
        <button class="add-input" @click="addMoreLabel(labelCount-1)">+</button>
      </div>
      <button type="submit" @click="saveGig">save</button>
      <button  @click="getDemoData">Get Demo Data</button>
    </form>
    <div v-if="gigs">
      <div class="div-preview" v-for="gig in gigs" :key="gig._id">
          <p>IDX: {{gig._id}}</p>
          <p>Title: {{gig.title}}</p>
          <p>Price: {{gig.price}}</p>
          <p>Category: {{gig.category.name}}</p>
          <button @click="removeGig(gig._id)">Remove</button>
          <button @click="gigToEdit(gig)">Edit</button>
          <router-link :to="'/gig/'+ gig._id"><button>Details</button></router-link>
      </div>
    </div>
    <div v-if="sellerGigs">
    <gig-preview  v-for="gig in sellerGigs" :key="gig._id" :gig="gig" />        
    </div>
    <pre>gigToSave:
      {{ gigToSave }}</pre>
      <!-- <pre>gigs:
      {{ gigs }}</pre> -->
    <pre>sellerGigs:
      {{ sellerGigs }} <span v-if="!this.$store.getters.user">please sing in to get your gigs</span></pre>
      

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
      // sellerGigs: null
    };
  },
  created() {
    this.getEmptyGig();
    this.getUser();  
    // this.loadSellerGigs() 
    
  },
  components: {
    gigPreview
  },
  methods: {    
    getEmptyGig() {
      this.gigToSave = gigService.getEmptyGig();
    },
    addMoreImage(idx) {
      console.log({idx});
      if(!this.gigToSave.images[idx]){
        alert('please enter url')
        return
      }
      this.imageCount++;
    },
    addMoreLabel(idx) {
      if(!this.gigToSave.labels[idx]){
        alert('please enter label')
        return
      }
      this.labelCount++
    },
    getUser() {
      if(!this.$store.getters.user)return
        this.gigToSave.seller._id = this.$store.getters.user._id;
        this.gigToSave.seller.fullName = this.$store.getters.user.fullname;
        this.gigToSave.seller.imgUrl = this.$store.getters.user.imgUrl;
    },
    async saveGig() {
      try{
      console.log(this.gigToSave);
      await this.$store.dispatch({ type: "saveGig", gig: this.gigToSave });
      }
      catch(err){
        console.error('Cannot save gig from back-office', err);
      }
    },
    
    getDemoData(){
      this.labelCount = 4
      this.imageCount = 3
      this.gigToSave.title = 'Make logo'
      this.gigToSave.images = ['https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80', 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80', 'https://images.unsplash.com/photo-1502404679462-d669245fc482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
      this.gigToSave.details = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque.'
      this.gigToSave.price = 120
      this.gigToSave.daysToMake = 3
      this.gigToSave.revision = 2
      this.gigToSave.description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis maiores eligendi molestias quisquam vero quae rerum explicabo magni unde eveniet! Laudantium aut quisquam tempore ea minus ullam atque voluptatem, eveniet aliquam, error labore, quae excepturi illum beatae nobis sed debitis asperiores fugiat iste dolore! Nemo quo possimus ipsa modi natus.'
      this.gigToSave.category = 'Logo Design'
      this.gigToSave.labels = ['logo', 'designer', 'photo', 'business']

    },
    removeGig(idx){
      console.log('remove from back office: ', idx);
      this.$store.dispatch({ type: 'removeGig', idx })
    },
    gigToEdit(gig){
      console.log('edit from back office: ', gig);
      //this.$store.dispatch({ type: 'removeGig', idx })
      this.labelCount = gig.labels.length
      this.imageCount = gig.images.length
      this.gigToSave.title = gig.title
      this.gigToSave.images = gig.images
      this.gigToSave.details = gig.details
      this.gigToSave.price = gig.price
      this.gigToSave.daysToMake = gig.daysToMake
      this.gigToSave.revision = gig.revision
      this.gigToSave.description = gig.description
      this.gigToSave.category = gig.category.name
      this.gigToSave.labels = gig.labels
      this.gigToSave._id = gig._id
      this.gigToSave.reviews = gig.reviews

    },
    
  },
  computed: {
    sellerGigs(){
      if(!this.$store.getters.user) return 
      return this.gigs.filter(gig=> gig.seller._id === this.$store.getters.user._id)
    },
    gigs(){
      return this.$store.getters.gigs;
    }
  },
  mounted(){      
    
  },
};
</script>

<style>
</style>