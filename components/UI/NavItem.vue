<template>
  <li class="nav-item">
    <a :href="url">{{ text }}</a>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>