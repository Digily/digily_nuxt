<template>
  <nav id="header-nav-container">
    <TheHeaderNavSlices :slices="headerNav" />
  </nav>
</template>

<script>

import TheHeaderNavSlices from "@/components/prismic/header/TheHeaderNavSlices.vue";

export default {
  components: {
    TheHeaderNavSlices,
  },
  data() {
    return {
      headerNav:[]
    }
  },
  async fetch() {
  // Fetch Header & Footer navigatie
    const headerNav = await this.$prismic.api.getSingle("navigatie");
    this.headerNav = headerNav.data.nav_header;
  },
};
</script>

<style lang="scss" scoped>
</style>