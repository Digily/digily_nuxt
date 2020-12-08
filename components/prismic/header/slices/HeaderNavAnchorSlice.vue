<template>
<span>
    <a :href="'#'+slice.link">{{ slice.text }}</a>
</span>
</template>

<script>
export default {
    props: ['slice'],
}
</script>

<style lang="scss" scoped>

</style>