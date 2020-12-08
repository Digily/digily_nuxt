<template>
  <header>
    <TheFooterNavigation :footerLinks="footerLinks" />
  </header>
</template>

<script>
import TheFooterNavigation from "@/components/footer/TheFooterNavigation.vue";
export default {
  components: {
    TheFooterNavigation,
  },
  data() {
    return {
      footerLinks: [],
    };
  },
};
</script>

<style scoped>
</style>