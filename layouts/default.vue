<template>
  <div>
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
  head(){
    return {
      link: [
        {
          rel:'icon',
          type:'image/svg+xml',
          href: this.companyData.favicon.url
        }
      ]
    }
  }
};
</script>

<style lang="scss">
/* COLORS */
$color-primary: #4fb797;
$color-secondary: #0a0d1c;
$color-tertiary: #ffffff;

/* FONTS */
@font-face {
  font-family: "ProductSans";
  font-weight: bold;
  src: url(~assets/fonts/ProductSans-Bold.woff) format("truetype");
}

@font-face {
  font-family: "ProductSans";
  font-weight: normal;
  src: url(~assets/fonts/ProductSans-Regular.woff) format("truetype");
}

/* TEMPLATE CSS */
* {
  position: relative;
}

html {
  font-size: 1px;
}

html,
body {
  font-family: "ProductSans";
  background: radial-gradient(
      193.51% 382.67% at 193.51% 22.56%,
      rgba(18, 49, 45, 0.8) 0%,
      rgba(10, 13, 28, 0.8) 100%
    ),
    #000000;
  color: $color-tertiary;
}

body {
  font-size: 14rem;
  padding: 40rem;
}

a {
  color: $color-tertiary;
  display: inline-block;
  text-decoration:none;

  &:after {
    content: "";
    z-index: 1;
    position: absolute;
    width: 15px;
    height: 1px;
    background-color: $color-tertiary;
    bottom: -3px;
    left: calc(50% - 7.5px);
    transition: left 0.4s ease-in-out, background-color 0.4s ease-in-out,
      width 0.4s ease-in-out;
  }

  &:hover {
    text-decoration: none;
    color: $color-tertiary;

    &:after {
      width: 100%;
      left: 0;
      background-color: $color-primary;
    }
  }
}

</style>