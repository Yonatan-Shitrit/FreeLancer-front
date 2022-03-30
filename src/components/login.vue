<template>
  <section class="log-page">
    <div v-if="sigupScop" class="log-in">
      <h1>LOGIN/SIGNUP Page</h1>
      <section v-if="loggedinUser">
        <h2>Welcome {{ loggedinUser.fullname }}</h2>
        <button @click="logout">Logout</button>
      </section>
      <form v-else @submit.prevent="login">
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
      </form>
      <pre>{{ loginCred }}</pre>
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
      <pre>{{ signupCred }}</pre>
    </div>
    <button @click="switchScop" class="switch">{{ titleBtn }}</button>
  </section>
</template>
 
<script>
// import { userService } from '../services/user.service.js';

export default {
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
    async login() {
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("logout");
        this.$router.push("/");
        this.username = null;
        this.password = null;
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
      } catch (err) {
        console.log(err);
      }
    },
    switchScop() {
      this.sigupScop = !this.sigupScop;
    },
  },
  created() {},
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
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