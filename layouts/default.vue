<template>
  <div>
    <div id="cursor"></div>
    <TheHeader :companyData="companyData" />
    <Nuxt keep-alive />
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
import TheHeader from "@/components/header/TheHeader.vue";
//import TheFooter from "@/components/footer/TheFooter.vue";
export default {
  component: {
    TheHeader,
    //TheFooter,
  },

  async fetch() {
    // Fetch bedrijfsgegevens
    const companyData = await this.$prismic.api.getSingle("bedrijfsgegevens");
    this.companyData = companyData.data;
  },
  data() {
    return {
      companyData: {},
      headerNav: {},
      footerNav: {},
    };
  },
  head() {
    return {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: this.companyData.favicon.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
* {
  cursor: none;
}

#cursor {
  width: 5px;
  height: 5px;
  border: 1px solid white;
  border-radius: 50%;
  position: absolute;
  left: 20rem;
  top: 20rem;
  transition-duration: 50ms;
  z-index: 1;
  transition-timing-function: ease-out;
  pointer-events: none;
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);
  transition-property: background-color, width, height, mix-blend-mode, filter,
    box-shadow;
  transform-origin: 100% 100%;
  background: transparent;
  mix-blend-mode: normal;
  box-shadow: 0;
  filter: blur(0);

  &.hover {
    width: 25px;
    height: 25px;
    border: 1px solid $color-primary;
    background: $color-primary;
    mix-blend-mode: screen;
    box-shadow: 0px 0px 50px 0px rgba(79, 183, 151, 0.7),
      0px 0px 150px 0px rgba(79, 183, 151, 0.5);
    filter: blur(15px);
  }
}
</style>