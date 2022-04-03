<template>
  <section class="smart-popup-filter">
    <div class="delaynote1" v-if="!delayNote1">
      <div class="questionarie" v-if="!relevantGigs">
        <h1>Start Your Own Business</h1>
        <form v-if="!submited" @submit.prevent>
          <div>
            <h1>Is your store already open?</h1>
            <button class="button" @click="isOpen = false">No</button>
            <button class="button" @click="isOpen = true">Yes</button>
          </div>

          <div class="second-quest" v-if="isOpen !== null">
            <!-- <hr /> -->
            <h1>What Is Your Ocupation?</h1>
            <select v-model="ocupation" name="" id="">
              <option>CopyWriter</option>
              <option>Programer</option>
              <option>Artist</option>
              <option>Bussines Owner</option>
              <option>Trader</option>
              <option>counselor</option>
              <option>Else</option>
            </select>
          </div>

          <div class="second-quest" v-if="ocupation">
            <!-- <hr /> -->
            <h1>Business Type:</h1>
            <select v-model="storeType" name="" id="">
              <option value="web">Web</option>
              <option value="physical">Physical</option>
            </select>
            <button class="button" v-if="storeType" @click="showGigs">Continue</button>
          </div>
        </form>
      </div>
    </div>

    <div class="delaynote1" v-if="!getGigs">
      <div v-if="delayNote1">
        <h2>
          The system organizes you a proposal for the most suitable products for
          your field of practice, please wait
        </h2>
        <img class="img"
          src="https://cdn.dribbble.com/users/1314950/screenshots/6393096/appbuild_drib02.gif"
          alt="loading"
        />
      </div>

      <div class="delaynote1 gg" v-if="!delayNote2">
        <div class="list-container" v-if="relevantGigs">
          <h1>Please remove the services you already have</h1>
          <ul>
            <li><input checked type="checkbox" /> Logo</li>
            <li><input checked type="checkbox" /> Facebook Page</li>
            <li><input checked type="checkbox" /> Intagram Account</li>
            <li><input checked type="checkbox" /> Landing Page</li>
            <li><input checked type="checkbox" /> Introduction Video</li>
            <li><input checked type="checkbox" /> Marketing Advisor</li>
          </ul>
          <button class="button" @click="spend = 0">continue</button>
        </div>

        <div class="delaynote1" v-if="spend !== null">
          <h1>How much money are you willing to spend for these services?</h1>
          <div class="list-container">
            <span>$<input type="number" v-model.number="spend" /></span>
            <button class="button" @click="getRelevantGigs">continue</button>
          </div>
        </div>
      </div>
    </div>

    <div class="final">
      <div class="delaynote1" v-if="delayNote2">
        <h2>The system prepares you the best offer for you!</h2>
        <img class="img"
          src="https://cdn.dribbble.com/users/1314950/screenshots/6393096/appbuild_drib02.gif"
          alt="loading"
        />
      </div>
      <div class="final-offer" v-if="getGigs">
        <h1>If you order now, Your order will be ready in 6 days at most</h1>
        <h2>The total cost of your package is $128</h2>
        <button class="button" @click="orderGigs">Sure, I want to order now!</button>
        <div class="grid-container">
          <div v-for="(gig, idx) in 5" :key="idx">
            <h2>{{ gigs[idx].category.name }}</h2>
            <gig-preview :gig="gigs[idx]" />
          </div>
        </div>
      </div>
    </div>

    <div  v-if="modal" class="order-modal">
    <div @click="closeModal" class="black-screen"></div>
    <div class="modal">
      <h3>Your order has been successfully received</h3>
    </div>
  </div>

  </section>
</template>

<script>
import gigPreview from "./gig-preview.vue";
export default {
  data() {
    return {
      submited: false,
      ocupation: "",
      isOpen: null,
      storeType: "",
      spend: null,
      modal: false,
      relevantGigs: false,
      delayNote1: false,
      delayNote2: false,
      myGigs: 0,
      getGigs: false,
      products: {
        logo: "",
        facebook: "",
        intagram: "",
        landingPage: "",
        introVideo: "",
        marketing: "",
      },
      orderToSave: null,
    };
  },
  methods: {
    showGigs() {
      this.delayNote1 = true;
      setTimeout(() => {
        this.delayNote1 = false;
        this.relevantGigs = true;
      }, 4000);
    },
    getRelevantGigs() {
      this.delayNote2 = true;
      setTimeout(() => {
        this.delayNote2 = false;
        this.getGigs = true;
      }, 4000);
    },
    makeOrder() {
      this.orderToSave = {
        gigId: this.gigs[0]._id,
        sellerId: this.gigs[0].seller._id,
        buyerId: this.user._id,
      };
    },
    async orderGigs() {
      try {
        await this.$store.dispatch({
          type: "saveOrder",
          order: this.orderToSave,
          notification: "A new order logo has been received. You received this job offer after signing up for the site's VIP service club",
        });
        this.confirmation()
      } catch (err) {
        console.error("Cannot save order from smart filter", err);
      }
    },
    confirmation() {
      this.modal = true;
      setTimeout(() => {
        this.modal = false;
      }, 2000);
    },
  },
  computed: {
    gigs() {
      return this.$store.getters.gigs;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  components: {
    gigPreview,
  },
  created() {
    this.makeOrder();
  },
};
</script>

<style>
</style>