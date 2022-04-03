<template>
  <form class="search-aria">
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
    <!-- <label>
      Category:
      <input
        v-model="filterBy.category"
        @input="setFilter"
        type="text"
        placeholder="Search category.."
      />
    </label> -->
        <div >
      <select
        class="explore-filter-label"
        @change="setFilter"
        v-model="filterBy.category"
      >
        <option value="" > Select category</option>
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
        <div>
      <select @change="setFilter" v-model="filterBy.sortBy" class="explore-filter-label">
        <option  value="" class="grey">aditional filter</option>
        <option value="createdAt">Date</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
    <button type="reset" class="reset-btn" @click=" resetFilter">reset</button>
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
    resetFilter(){
      this.filterBy.price=""
      this.filterBy.title=""
      this.filterBy.category=""
      this.filterBy.sortBy=""
      this.setFilter()

    }
  },
};
</script>










