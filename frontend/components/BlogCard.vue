<template>
  <div>
    <div class="max-w-xl">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <AppBtn
            theme="primary-rounded"
            class="px-4 py-2 text-center inline-flex items-center"
            @click="goToBlogDetail"
          >
            Read more
            <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </AppBtn>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  cardList: { type: Array, required: false, default: [] }
})
const router = useRouter()
const goToBlogDetail = () => {
  router.push('/blogs/1')
} 
</script>