<template>
  <input
    class="w-24 px-3 py-2 text-xl bg-brand-beige rounded border border-3 border-brand-green bg-opacity-40 placeholder-brand-grey-600 text-brand-grey-600"
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    name="text"
  />
</template>

<script setup>
const props = defineProps({
  type: String,
  placeholder: String,
  modelValue: [String, Number]
});
</script>

<style scoped>
</style>