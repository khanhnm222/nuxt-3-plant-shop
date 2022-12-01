<template>
  <div v-show="open" class="dialog fixed flex">
   	<div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
      <!--content-->
      <div class="min-w-[300px]">
        <!--body-->
        <div class="text-center p-5 flex-auto justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <h2 class="text-xl font-bold py-4 ">{{ title }}</h2>
          <p class="text-sm text-gray-500 px-8">{{ message }}</p>    
        </div>
        <!--footer-->
        <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button
              @click="emit('cancel')"
              class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
              @click="emit('confirm')"
            >
              Confirm
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'infor',
    validator: (value) => ['infor', 'danger', 'success'].includes(value)
  },
  open: { type: Boolean, required: false, default: false },
  title: { type: String, required: false, default: 'Information' },
  message: { type: String, required: false, default: 'Good morning' }
})
const emit = defineEmits(['confirm', 'cancel'])
</script>
<style scoped>
.dialog {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
}
</style>