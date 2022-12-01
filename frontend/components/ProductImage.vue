<template>
  <div class="flex justify-center bg-gray-100 shadow-xl aspect-w-1 aspect-h-1">
    <img :src="imageUrl" :alt="product.attributes.Title" loading="lazy" />
  </div>
</template>
<script setup>
import { useRuntimeConfig } from '#app';
import { computed } from 'vue';

  const props = defineProps({
    product: Object,
    thumbnail: { type: Boolean, required: false, default: true }
  })
  const config = useRuntimeConfig()
  const imageUrl = computed(() => {
    if (props.thumbnail) {
      return `${config.public.baseURL}${props.product.attributes.Images.data[0].attributes.formats.thumbnail.url}`
    }
    return `${config.public.baseURL}${props.product.attributes.Images.data[0].attributes.url}`
  })
</script>
<style>
</style>