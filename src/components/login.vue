<template>
  <section class="log-page">
    <div @click="closeModal" class="black-screen"></div>
    <div class="login-container">
      <div v-if="sigupScop" class="log-in">
        <section v-if="loggedinUser">
          <h1>Logout</h1>
          <h2>Welcome {{ loggedinUser.fullname }}</h2>
          <button @click="logout">Logout</button>
        </section>
        <form v-else @submit.prevent="login">
          <h1>Login</h1>
          <input
            type="text"
            v-model="loginCred.username"
            placeholder="Enter username"
          />
          <input
            type="text"
            v-model="loginCred.password"
            placeholder="Enter password"
          />
          <button>Login</button>
        <button @click="switchScop" class="switch">{{ titleBtn }}</button>
        </form>
      </div>

      <div class="sign-up" v-if="!sigupScop">
        <h4>Signup</h4>
        <form @submit.prevent="signup">
          <input
            type="text"
            v-model="signupCred.username"
            placeholder="Enter username"
          />
          <input
            type="password"
            v-model="signupCred.password"
            placeholder="Enter password"
          />
          <input
            type="text"
            v-model="signupCred.fullname"
            placeholder="Enter full name"
          />
          <input
            type="text"
            v-model="signupCred.imgUrl"
            placeholder="Enter your image url"
          />
          <button>Signup Now!</button>
        </form>
        <!-- <pre>{{ signupCred }}</pre> -->
        <button @click="switchScop" class="switch">{{ titleBtn }}</button>
      </div>
      
    </div>
  </section>
</template>
 
<script>
// import { userService } from '../services/user.service.js';

export default {
  props: {
    loginMode: {
      type: String,
      required: true,
    },
  },
  name: "Login Page",
  data() {
    return {
      loginCred: { username: "", password: "" },
      signupCred: {
        username: "",
        password: "",
        fullname: "",
        sales: [],
        imgUrl:
          "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg",
        gigs: [],
        orders: [],
        isAdmin: false,
      },
      sigupScop: false,
    };
  },
  methods: {
    closeModal() {
      return this.$emit("closeModal");
    },
    async login() {
      try {
        await this.$store.dispatch({ type: "login", cred: this.loginCred });
        // this.$router.push("/");
        this.closeModal();
      } catch (err) {
        console.log(err);
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("logout");
        // this.$router.push("/");
        this.username = null;
        this.password = null;
        this.closeModal();
      } catch (err) {
        console.log(err);
      }
    },
    async signup() {
      try {
        await this.$store.dispatch({
          type: "signup",
          userCred: this.signupCred,
        });
        console.log(
          "Hi userI am in the log page - this.signupCred",
          this.signupCred
        );
        //this.$router.push('/');
        this.closeModal();
      } catch (err) {
        console.log(err);
      }
    },
    switchScop(mode = null) {
      if (mode === "signup") return (this.sigupScop = false);
      if (mode === "login") return (this.sigupScop = true);
      this.sigupScop = !this.sigupScop;
    },
  },
  created() {
    this.switchScop(this.loginMode);
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.user;
    },
    titleBtn() {
      return !this.sigupScop ? "Go to the Login page" : "Go to the Signup page";
    },
  },
  components: {},
};
</script>
 
<style>
</style>