<template>
  <section>
    <h2>Start Your Own Business</h2>
    <form v-if="!submited" @submit.prevent>
      <h3>What Is Your Ocupation?</h3>
      <select v-model="ocupation" name="" id="">
        <option>CopyWriter</option>
        <option>Programer</option>
        <option>Artist</option>
        <option>Bussines Owner</option>
        <option>Trader</option>
        <option>counselor</option>
        <option>Else</option>
      </select>
      <div v-if="ocupation">
        <h3>Business Type:</h3>
        <select v-model="storeType" name="" id="">
          <option value="">Web</option>
          <option value="">Pysical</option>
        </select>
        <button v-if="storeType">Continue</button>
      </div>
    </form>
    <div v-else>
      <ul>
        <li><input checked type="checkbox" /> Logo</li>
        <li><input checked type="checkbox" /> Facebook Page</li>
        <li><input checked type="checkbox" /> Intagram Account</li>
        <li><input checked type="checkbox" /> Landing Page</li>
        <li><input checked type="checkbox" /> Introduction Video</li>
        <li><input checked type="checkbox" /> Marketing Advisor</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      submited: false,
      ocupation: "",
      storeType: "",
      products: {
        logo: "",
        facebook: "",
        intagram: "",
        landingPage: "",
        introVideo: "",
        marketing: "",
      },
    };
  },
};
</script>

<style>
</style>