<template>
  <div class="page-wrapper"></div>
</template>

<script>
export default {

  head (){
    return {
      title: this.page.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.meta_description
        },
        {
          property: 'og:title',
          content: this.page.og_title
        },
        {
          property: 'og:description',
          content: this.page.og_description
        },
        {
          property: 'og:image',
          content: this.page.og_image.url
        },
      ]
    }
  },
  data() {
    return {
      page:[]
    }
  },
  async fetch() {
    const homeData = await this.$prismic.api.getByUID("pagina", "home");
    this.page = homeData.data;
  }
};
</script>

<style scoped>
</style>