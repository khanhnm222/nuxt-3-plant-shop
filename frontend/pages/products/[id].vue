<template>
  <div>
    <Container class="grid grid-cols-12 gap-2 pt-32 pb-24 md:gap-12">
      <div class="col-span-12 md:col-span-6 lg:col-span-5">
        <ProductImage :product="product?.data" :thumbnail="false"/>
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-7">
        <Heading tag="h2" font-style="h2" color="text-brand-green">{{ product?.data.attributes.Title }}</Heading>
        <p class="mb-6 text-2xl text-brand-grey-600">{{ product?.data.attributes.Price }}</p>
        <p class="mb-6 text-2xl text-brand-grey-500">{{ product?.data.attributes.Description }}</p>

        <div class="flex items-center">
          <AppInput type="Number" class="mr-4" min="1" v-model="quantity"/>
          <AppBtn
            theme="primary-sm"
            class="snipcart-add-item"
            :data-item-id="product.data.id"
            :data-item-price="product.data.attributes.Price"
            :data-item-description="product.data.attributes.Description"
            :data-item-name="product.data.attributes.Title"
            :data-item-image="imageUrl"
            :data-item-quantity="quantity"
          >Add to cart</AppBtn>
        </div>
      </div>
    </Container>
    <Container>
      <div class="pb-8">
        <Heading tag="h3" font-style="h3" color="text-brand-green">Related products</Heading>
        <Heading tag="h2" font-style="h2" color="text-brand-green">Other plants</Heading>
        <div class="grid grid-cols-2 gap-12 md:grid-cols-4 mt-10">
          <ProductTeaser
            class="col-span-1"
            v-for="productItem in products?.data"
            :key="productItem.id"
            :product="productItem"
          />
        </div>
      </div>
    </Container>
  </div>
</template>
<script setup>
  const route = useRoute()
  const config = useRuntimeConfig()
  const quantity = ref(1)
  const { data: products } = await useFetch(`${config.public.baseURL}/api/products?pagination[start]=0&pagination[limit]=4&populate=*`)
  const { data: product } = await useFetch(`${config.public.baseURL}/api/products/${parseInt(route.params.id)}?populate=*`)
  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
  }
  const imageUrl = computed(() => {
    if (!product.value.data) {
      return null
    }
    return `${config.public.baseURL}${product?.value.data.attributes.Images.data[0].attributes.url}`
  })
</script>