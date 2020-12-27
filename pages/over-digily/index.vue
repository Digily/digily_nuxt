<template>
  <div class="page-wrapper">Dit is de 'Over ons' pagina</div>
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
  async asyncData({ $prismic, params, error }) {
    try {
      const pageData = await $prismic.api.getByUID("pagina", "over-digily");
      const page = pageData.data;
      console.log("data in pageData is", page);

      return {
        page,
      };
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>

<style scoped>
</style>