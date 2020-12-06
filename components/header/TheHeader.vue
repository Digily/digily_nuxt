<template>
  <header>
    <div class="row">
      <div class="col-md-6">
        <prismic-image :field="companyData.logo" />
      </div>
      <div class="col-md-6">
        <TheHeaderNavigation :headerLinks="headerLinks" />
      </div>
    </div>
  </header>
</template>

<script>
import TheHeaderNavigation from "@/components/header/TheHeaderNavigation.vue";
export default {
  components: {
    TheHeaderNavigation,
  },
  props: {
    companyData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      headerLinks: [
        {
          uid: "1",
          text: "0472 35 80 94",
          url: "tel:0472358094",
        },
        {
          uid: "2",
          text: "Websites",
          url: "/websites",
        },
        {
          uid: "3",
          text: "Over",
          url: "/over-digily",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>