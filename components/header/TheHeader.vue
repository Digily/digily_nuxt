<template>
  <header>
    <div class="row">
      <div class="col-md-6">
        <!--<NuxtLink class="anim-link" to="/"
          ><prismic-image :field="companyData.logo_small"
        /></NuxtLink> -->
        <NuxtLink class="anim-link" to="/"
          ><div id="digily-logo"></div
        ></NuxtLink>
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
  mounted() {
    // logo animation
    let logoContainer = document.getElementById("digily-logo");
    let logoAnimation = lottie.loadAnimation({
      container: logoContainer,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/digily.json",
    });

    // add hover animations
    var directionMenu = 1;
    logoContainer.addEventListener("mouseenter", (e) => {
      logoAnimation.setDirection(directionMenu);
      logoAnimation.play();
    });

    logoContainer.addEventListener("mouseleave", (e) => {
      logoAnimation.setDirection(-directionMenu);
      logoAnimation.play();
    });
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

#digily-logo {
  width: 75px;
  display: inline-block;
}

.row {
  display: flex;
  flex-wrap: wrap;

  .col-md-6 {
    width: 50%;
  }
}
</style>