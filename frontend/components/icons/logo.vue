<template>
  <nuxt-link to="/" class="cursor-pointer app-logo text-sm xs:text-sm sm:text-sm md:text-base lg:text-2xl">
    PLANT ❤ SHOP
  </nuxt-link>
  <!-- <img :src="LogoWhite" class="w-40" alt="Plant shop" /> -->
</template>
<script setup>
import LogoWhite from 'assets/images/logo-white.svg'
</script>
<style scoped>
.app-logo {
  margin-right: 50px;
  font-weight: 600;
}
.app-logo:visited {
  /* color: #c09763 !important; */
  color: white;
}
</style>