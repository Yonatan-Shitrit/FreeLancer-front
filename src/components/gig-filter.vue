<template>
  <form class="search-aria">
    <input
      v-model="filterBy.title"
      @input="setFilter"
      type="text"
      placeholder="Look for a gig.."
    />
    <label>
      Max-budget:
      <input
        v-model.number="filterBy.price"
        @input="setFilter"
        type="number"
        placeholder="Search price.."
      />
    </label>
    <label>
      <!-- Category:
      <input
        v-model="filterBy.category"
        @input="setFilter"
        type="text"
        placeholder="Search category.."
      /> -->
    </label>
    <label>
      Category:
      <select class="labselect" @change="setFilter" v-model="filterBy.category">
        <option></option>
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
    </label>
    <label>
      Sort By:
      <select @change="setFilter" v-model="filterBy.sortBy">
        <option></option>
        <option value="createdAt">Time</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </label>
    <button type="reset" @click="resetFilter">reset</button>
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
      // console.log(this.filterBy)
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










