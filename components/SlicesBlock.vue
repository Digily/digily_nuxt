<template>
    <section>
        <!-- Slice section template -->
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <!-- Text slice template -->
            <template v-if="slice.slice_type === 'nav_link'">
                <!-- Here :slice="slice" passes the data to the component -->
                <NavLinkSlice 
                :slice="NavLinkSlice"
                />
            </template>
            <!-- Quote slice template -->
            <template v-else-if="slice.slice_type === 'quote'">
                <quote-slice :slice="slice"></quote-slice>
            </template>
            <!-- Image with caption slice template -->
            <template v-else-if="slice.slice_type === 'image_with_caption'">
                <image-caption-slice :slice="slice"></image-caption-slice>
            </template>
        </section>
    </section>
</template>

<script>
// Imports for all slices
import NavLinkSlice from "@/components/slices/NavLinkSlice.vue";

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
      NavLinkSlice
  },
}

/* TEMPLATE
"nav_dropdown" : [ ],
          "nav_link" : [ ],
          "nav_menu" : [ ],
          "nav_text" : [ ],
          "nav_image" : [ ],
          "nav_category" : [ ],
          "nav_image_link" : [ ],
          "nav_spacer" : [ ],
          "nav_anchor" : [ ],
          "nav_social" : [ ]
          */
</script>