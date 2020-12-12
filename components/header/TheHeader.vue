<template>
  <header>
    <div class="row">
      <div class="col-md-6">
        <NuxtLink class="anim-link" to="/"
          ><prismic-image :field="companyData.logo_small"
        /></NuxtLink>
      </div>
      <div class="col-md-6">
        <TheHeaderNav />
      </div>
    </div>
    <script
      async
      defer
      src="https://static.cdn.prismic.io/prismic.js?new=true&repo=digily"
    ></script>
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
a.nuxt-link-active {
  &:after {
    width: 0;
    background: none;
    transition: none;
  }
}
</style>