<template>
<span>
    <prismic-link v-if="slice.text[0].length > 0" :field="slice.url">{{ slice.text }}</prismic-link>
</span>
</template>

<script>

// check slice.url.link_type !!

export default {
    props: ['slice'],
}
</script>


<style lang="scss" scoped>
</style>