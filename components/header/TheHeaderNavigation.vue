<template>
  <nav id="header-nav-container">
    <ul id="header-nav-main">
      <NavItem
        v-for="link in headerLinks"
        :key="link.uid"
        :text="link.text"
        :url="link.url"
      />
    </ul>
  </nav>
</template>

<script>
import NavItem from "@/components/UI/NavItem.vue";

export default {
  props: {
    headerLinks: {
      type: Array,
      required: true,
    },
  },
};
</script>
