<template>
  <div>
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 pb-10 mx-auto">
        <Container class="pt-2 col-span-9">
          <div class="pb-2 text-center">
            <Heading tag="h3" font-style="h3">The Shop</Heading>
            <Heading tag="h2" font-style="h2" class="mb-1">Explore the blogs</Heading>
          </div>
        </Container>
        <div class="container px-6 py-8 mx-auto grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <BlogCard v-for="blog in 5" :key="blog"/>
        </div>
      </div>
      <Pagination class="flex justify-center mt-2"/>
    </section>
  </div>
</template>
<script setup>
</script>