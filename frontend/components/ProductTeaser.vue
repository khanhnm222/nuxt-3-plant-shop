<template>
  <div>
    <article>
      <nuxt-link :to="`/products/${product.id}`" class="group relative">
        <ProductImage
          :product="product"
          class="mb-6 transition-transform transform shadow-xl group-hover:scale-105 h-[155px]"
        />
      </nuxt-link>
    </article>
    <div class="grid text-center">
      <Heading tag="h4" font-style="h4" color="text-brand-green truncate block"> {{ product.attributes.Title }} </Heading>
      <p class="text-lg text-brand-green flex justify-center mb-5">
        <RankingStar :quantityStar="product.attributes.Ranking"/>
        <span class="ml-5">${{ product.attributes.Price }}</span>
      </p>
      <AppBtn
        theme="primary-rounded"
        class="snipcart-add-item flex justify-center items-center"
        :data-item-id="product.id"
        :data-item-price="product.attributes.Price"
        :data-item-description="product.attributes.Description"
        :data-item-name="product.attributes.Title"
        :data-item-image="imageUrl"
        :data-item-quantity="quantity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        Add to cart
      </AppBtn>
    </div>
  </div>
</template>
<script setup>
const config = useRuntimeConfig()
const props = defineProps({
  product: Object
})
const quantity = ref(1)
const imageUrl = computed(() => {
  if (!props.product) {
    return null
  }
  return `${config.public.baseURL}${props.product?.attributes.Images.data[0].attributes.url}`
})
</script>
<style>
</style>