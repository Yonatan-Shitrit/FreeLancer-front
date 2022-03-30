<template>
  <form class="search-aria">
    <input v-model="filterBy.title" @input="setFilter" type="text" placeholder="Search gig.." />
    <label>
      price:
      <input v-model.number="filterBy.price" @input="setFilter" type="number" placeholder="Search price.." />
      <!-- <select @change="setFilter" v-model="filterBy.price">
        <option label="All" value=''></option>
        <option label="In stock" value="true" />
        <option label="Not in stock" value="false" />
      </select> -->
    </label>
    <label>
      Labels:
      <select class="labselect" @change="setFilter" multiple v-model="filterBy.labels">
        <option value="Voice Over">Voice Over</option>
        <option value="Video Explainer">Video Explainer</option>
        <option value="Social Media">Social Media</option>
        <option value="SEO">SEO</option>
        <option value="Illustration">Illustration</option>
        <option value="Translation">Translation</option>
        <option value="Data Entry">Data Entry</option>
        <option value="Book Covers">Book Covers</option>
        <option value="Logo Design">Logo Design</option>
        <option value="Word Press">Word Press</option>
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










