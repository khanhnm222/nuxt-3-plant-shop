<template>
 <div>
  <button v-bind="$attrs" :class="classes">
    <slot />
  </button>
 </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    required: false,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'primary-sm', 'secondary-sm', 'primary-rounded'].includes(value)
  },
  rounded: { type: Boolean, required: false, default: false }
})

const classes = computed(()  => {
  const roundedClass = 'hover:rounded-3xl'
  const themeClasses = {
    'primary': 'btn px-6 py-4 text-2xl text-white shadow-xl bg-brand-green font-heading rounded-none group-hover:text-green hover:bg-brand-green-100 transition duration-150 ease-in-out',
    'secondary': 'btn px-6 py-4 text-2xl text-brand-green border border-3 border-brand-green font-heading rounded-none hover:bg-brand-green-100 hover:text-white transition duration-150 ease-in-out',
    'primary-sm': 'btn px-3 py-2 text-xl text-white shadow-xl bg-brand-green font-heading rounded-none group-hover:text-green hover:bg-brand-green-100 transition duration-150 ease-in-out',
    'secondary-sm': 'btn px-3 py-2 text-xl text-brand-green border border-3 border-brand-green font-heading rounded-none hover:bg-brand-green-100 transition duration-150 ease-in-out',
    'primary-rounded': 'flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-brand-green rounded-md hover:bg-brand-green-100 focus:outline-none'
  }
  return props.rounded ? `${themeClasses[props.theme]} ${roundedClass}` : themeClasses[props.theme]
})

</script>