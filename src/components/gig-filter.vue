<template>
  <form class="search-aria">
    <input v-model="filterBy.title" @input="setFilter" type="text" placeholder="Search gig.." />
    <label>
      price:
      <input v-model.number="filterBy.price" @input="setFilter" type="number" placeholder="Search price.." />      
    </label>
    <label>
      Category:
      <input v-model="filterBy.category" @input="setFilter" type="text" placeholder="Search category.." />      
    </label>
    <label>
      Labels:
      <select class="labselect" @change="setFilter" multiple v-model="filterBy.labels">
        <option >Coach</option>
        <option >Video Explainer</option>
        <option >Social Media</option>
        <option >SEO</option>
        <option >Illustration</option>
        <option >Translation</option>
        <option >Data Entry</option>
        <option >Book Covers</option>
        <option >Logo Design</option>
        <option >Word Press</option>
      </select>
    </label>
    <label>
      Sort By:
      <select @change="setFilter" v-model="filterBy.sortBy">
        <option value="createdAt">Time</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </label>
  </form>
</template>

<script>
export default {
  name: 'gig-filter',
  data() {
    return {
      filterBy: {
        title: '',
        price: '',
        labels: [],
        category: '',
        sortBy: '',
      },
    }
  },
  methods: {
    setFilter() {
      // console.log(this.filterBy)
      this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)))
    },
  },
}
</script>










