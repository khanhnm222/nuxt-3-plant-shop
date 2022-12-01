<template>
  <div>
    <NuxtLayout>
      <Title>Plant Shop</Title>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import '@/assets/css/tailwind.css'
</script>
<style scoped lang="postcss">
body {
  @apply bg-white text-brand-green
}
</style>
<style>
.snipcart-modal__container {
  z-index: 1000
}
</style>

