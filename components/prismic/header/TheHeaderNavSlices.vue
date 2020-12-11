<template>
<ul id="header-nav-main" class="main-nav">
    <li class="nav-item" v-for="(slice, index) in slices" :key="'slice-' + index">
        <template v-if="slice.slice_type === 'link'">
            <HeaderNavLinkSlice :slice="slice.primary" />
        </template>
        <template v-else-if="slice.slice_type === 'anker'">
            <HeaderNavAnchorSlice :slice="slice.primary" />
        </template>
    </li>
</ul>
</template>

<script>
// Imports for all slices
import HeaderNavLinkSlice from "@/components/prismic/header/slices/HeaderNavLinkSlice.vue";
import HeaderNavAnchorSlice from "@/components/prismic/header/slices/HeaderNavAnchorSlice.vue";


export default {
    components: {
        HeaderNavLinkSlice,
        HeaderNavAnchorSlice,
    },
    props: {
        slices: {
            type: Array,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
    ul {
        list-style-type: none;
        display: flex;
        justify-content: flex-end;

        li:not(:first-child) {
            margin-left:75px;
        }

        a{
            text-decoration:none;
        }
    }
</style>