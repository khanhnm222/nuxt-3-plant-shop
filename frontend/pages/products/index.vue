<template>
  <div class="">
    <Container class="pt-2 col-span-9">
      <div class="pb-2 text-center">
        <Heading tag="h3" font-style="h3">The Shop</Heading>
        <Heading tag="h2" font-style="h2" class="mb-1">Enjoy chosing</Heading>
      </div>
    </Container>
    <div class="container px-6 py-8 mx-auto">
      <div class="lg:flex lg:-mx-2">
        <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 lg:block hidden">
          <a
            class="block font-medium text-gray-500 dark:text-gray-300 hover:underline hover:font-semibold hover:cursor-pointer"
            :class="{ 'text-brand-green font-semibold underline': filterSelector === 'all' }"
            @click="selectFilterCategory('all')"
          >All Plants</a>
          <a
            v-for="category in categoryList"
            :key="category.id"
            class="block font-medium text-gray-500 dark:text-gray-300 hover:underline hover:font-semibold hover:cursor-pointer"
            :class="{ 'text-brand-green font-semibold underline': filterSelector === category.value }"
            @click="selectFilterCategory(category)"
          >
            {{ category.name }}
          </a>
        </div>
        <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
          <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
            <p class="text-gray-500 dark:text-gray-300">{{ filteredData.length }} Items</p>
            <div class="flex items-center">
              <p class="text-gray-500 dark:text-gray-300">Sort</p>
              <select
                class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none hover:cursor-pointer"
                @change="selectSorting($event)"
              >
                <option
                  v-for="item in sortList"
                  :value="item.value"
                  :key="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <product-teaser
              class="col-span-1"
              v-for="product in filteredData"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
      <Pagination v-show="filteredData.length > 0" class="flex justify-center mt-16"/>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: products } = await useFetch(`${config.public.baseURL}/api/products?populate=*`)
const categoryList = ref([
  { id: 1, name: 'Mini Plants', value: 'miniPlants' },
  { id: 2, name: 'Outdoor Plants', value: 'outdoorPlants' },
  { id: 3, name: 'Floor Plants', value: 'floorPlants' },
  { id: 4, name: 'Lower Light Indoor Plants', value: 'lowerLightIndoorPlants' },
  { id: 5, name: 'Rare Indoor Plants', value: 'rareIndoorPlants' },
  { id: 6, name: 'Pots', value: 'pots' },
  { id: 7, name: 'Gifts', value: 'gifts' },
  { id: 8, name: 'Sale', value: 'sale' }
])
const sortList = ref([
  { id: 1, name: 'Recommended', value: 'recommanded' },
  { id: 2, name: 'Increasing Price', value: 'increasingPrice' },
  { id: 3, name: 'Decreasing Price', value: 'decreasingPrice' },
  { id: 4, name: 'A - Z', value: 'a2z' },
  { id: 5, name: 'Z - A', value: 'z2a' }
])

const sortSelector = ref('recommanded')
const filterSelector = ref('all')

const selectFilterCategory = (category) => {
  if (category.value) {
    filterSelector.value = category.value
  } else {
    filterSelector.value = category
  }
}

const selectSorting = (event) => {
  sortSelector.value = event.target.value
}

const filteredData = computed(() => {
  let filteredAndSortedData = products.value.data
  if (filterSelector.value && filterSelector.value !== 'all') {
    filteredAndSortedData = [...filteredAndSortedData.filter(product => product.attributes.Category === filterSelector.value)]
  }
  if (sortSelector.value && sortSelector.value !== 'recommanded') {
    switch (sortSelector.value) {
      case 'increasingPrice':
        filteredAndSortedData = [...filteredAndSortedData.sort((a, b) => a.attributes.Price - b.attributes.Price )]
        break
      case 'decreasingPrice':
        filteredAndSortedData = [...filteredAndSortedData.sort((a, b) => a.attributes.Price - b.attributes.Price).reverse()]
        break
      case 'a2z':
        filteredAndSortedData = [...filteredAndSortedData.sort((a, b) => a.attributes.Title.localeCompare(b.attributes.Title))]
        break
      case 'z2a':
        filteredAndSortedData = [...filteredAndSortedData.sort((a, b) => a.attributes.Title.localeCompare(b.attributes.Title)).reverse()]
        break
    }
  }
  return filteredAndSortedData
})
</script>

<style scoped lang="postcss">

</style>