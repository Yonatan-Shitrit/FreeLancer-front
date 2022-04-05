<template>
  <form class="search-aria">
    <div style="display:flex">
    <div>
    <input
      v-model="filterBy.title"
      @input="setFilter"
      type="text"
      placeholder="Look for a gig" 
      class="explore-filter-label"
      
    />
    </div>
    <div >
     
      <input
      class="explore-filter-label"
        v-model.number="filterBy.price"
        @input="setFilter"
        type="number" 
        placeholder="Max budget:"
      />
    </div>

        <div class="select-wrapper">
          <img class="less-than" src="@/../imgs/less-than.png" alt="">
      <select
        class="explore-filter-label"
        @change="setFilter"
        v-model="filterBy.category"
      >
        <option value="" >Select category</option>
        <option>Coach</option>
        <option>Video Explainer</option>
        <option>Social Media</option>
        <option>SEO</option>
        <option>Illustration</option>
        <option>Translation</option>
        <option>Data Entry</option>
        <option>Book Covers</option>
        <option>Logo Design</option>
        <option>Word Press</option>
      </select>

    </div>
        <div class="select-wrapper">
          <img class="less-than" src="@/../imgs/less-than.png" alt="">
      <select @change="setFilter" v-model="filterBy.sortBy" class="explore-filter-label">
        <option  value="" class="grey">Additional filter</option>
        <option value="createdAt">Date</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
    <button type="reset" class="reset-btn" @click=" resetFilter">Reset</button>
    </div>
  <router-link class="start-business"  to="/smart"><button class="start-business-btn">Start Your Own Business</button></router-link>
  </form>
</template>

<script>
export default {
  name: "gig-filter",
  data() {
    return {
      filterBy: {
        title: "",
        price: "",
        labels: [],
        category: "",
        sortBy: "",
      },
    };
  },
  created() {
    this.setFilterByParams();
  },
  unmounted() {
    this.resetFilter();
  },
  methods: {
    setFilter() {
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
    setFilterByParams() {
      const params = this.$route.query;
      if (params.title) this.filterBy.title = params.title;
      else if (params.category) this.filterBy.category = params.category;
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
    resetFilter() {
      this.filterBy.price = "";
      this.filterBy.title = "";
      this.filterBy.category = "";
      this.filterBy.sortBy = "";
      this.setFilter();
    },
  },
};
</script>










