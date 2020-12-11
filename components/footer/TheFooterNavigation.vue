<template>
  <nav id="footer-nav-container">
    <ul id="footer-nav-main">
<<<<<<< HEAD
      <NavLinkSlice
=======
      <NavItem
>>>>>>> 1995f96f097dff28b55e3a580d729ff5c5e3470f
        v-for="link in footerLinks"
        :key="link.uid"
        :text="link.text"
        :url="link.url"
      />
    </ul>
  </nav>
</template>

<script>
<<<<<<< HEAD
import NavLinkSlice from "@/components/slices/NavLinkSlice.vue";
=======
import NavItem from "@/components/UI/NavItem.vue";
>>>>>>> 1995f96f097dff28b55e3a580d729ff5c5e3470f

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