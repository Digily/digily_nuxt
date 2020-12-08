<template>
  <nav id="footer-nav-container">
    <ul id="footer-nav-main">
      <NavLinkSlice
        v-for="link in footerLinks"
        :key="link.uid"
        :text="link.text"
        :url="link.url"
      />
    </ul>
  </nav>
</template>

<script>
import NavLinkSlice from "@/components/slices/NavLinkSlice.vue";

export default {
  props: {
    footerLinks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>