<template>
  <header>
    <div class="row">
      <div class="col-md-6"><NuxtLink to="/"><prismic-image :field="companyData.logo_small" /></NuxtLink></div>
      <div class="col-md-6">
        <TheHeaderNav />

      </div>
    </div>
  </header>
</template>

<script>
import TheHeaderNav from "@/components/header/TheHeaderNav.vue";
export default {
  components: {
    TheHeaderNav,
  },
  props: {
    companyData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

a.nuxt-link-active{
  &:after{
    width:0;
    background:none;
    transition:none;
  }
}
</style>