<template>
  <div>
    <CustomSearch v-model="searchValue" placeholder="Enter a search term" />
    <p>Search Value: {{ searchValue }}</p>
  </div>
</template>

<script>
import CustomSearch from "@/components/CustomSearch.vue";

export default {
  components: {
    CustomSearch,
  },
  data() {
    return {
      searchValue: "",
    };
  },
};
</script>

<style scoped>
/* You can add more scoped styles here if needed */
</style>