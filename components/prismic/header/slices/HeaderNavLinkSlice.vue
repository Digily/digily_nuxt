<template>
<span>
    <prismic-link :field="slice.url">{{ slice.text }}</prismic-link>
</span>
</template>

<script>
export default {
    props: ['slice'],
}
</script>

<style lang="scss" scoped>

</style>