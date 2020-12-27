<template>
  <div class="page-wrapper">
    <div class="text-center">
      <div id="logo_home" class="p-top-100 anim-link">
        <prismic-image :field="page.header_image" />
      </div>
      <div class="title-animated">
        <prismic-rich-text :field="page.description" />
      </div>
    </div>
    <!--<div id="bm"></div> -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.page.meta_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.meta_description,
        },
        {
          property: "og:title",
          content: this.page.og_title,
        },
        {
          property: "og:description",
          content: this.page.og_description,
        },
        {
          property: "og:image",
          content: this.page.og_image.url,
        },
      ],
    };
  },
  data() {
    return {
      page: [],
    };
  },
  /*async fetch() {
    const pageData = await this.$prismic.api.getByUID("pagina", "home");
    this.page = pageData.data;
  },*/
  async asyncData({ $prismic, params, error }) {
    try {
      const pageData = await $prismic.api.getByUID("pagina", "home");
      const page = pageData.data;
      console.log("data in pageData is", page);

      return {
        page,
      };
    } catch (error) {
      console.log("error", error);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$gsap.set("#logo_home", { opacity: 0, paddingTop: 0 });
      const tl = this.$gsap.timeline({
        repeat: 0,
        ease: this.$gsap.Linear.easeInOut(2),
      });
      tl.to("#logo_home", 2, { opacity: 1, paddingTop: 40 + "rem" }),
        tl.to(".title-animated", 2, { opacity: 1, paddingTop: 15 + "vh" });
    });
  },
};
</script>

<style lang="scss" scoped>
.title-animated {
  padding-top: 0;
  opacity: 0;
}

#logo_home {
  opacity: 0;
  padding-top: 0;
  display: inline-block;
}
</style>