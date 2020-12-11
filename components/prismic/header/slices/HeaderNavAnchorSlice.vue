<template>
<span>
    <nuxt-link :to="{ path: '/', hash:'#'+slice.link}">{{ slice.text }}</nuxt-link>
</span>
</template>

<script>
export default {
    props: ['slice'],
}
</script>

<style lang="scss" scoped>
 
</style>