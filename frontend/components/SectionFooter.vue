<template>
  <footer class="pt-12 pb-4 text-white bg-brand-green">
    <Container class="grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-6">
        <!-- <img :src="LogoWhite" class="w-32" alt="Plant shop" /> -->
        <IconsLogo />
        <p class="py-4 md:w-4/5">Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div class="col-span-12 md:col-span-3">
        <Heading tag="h4" font-style="h4" color="text-white">Menu</Heading>
        <ul>
          <li class="underline list-disc list-inside">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="underline list-disc list-inside">
            <nuxt-link to="/shop">Shop</nuxt-link>
          </li>
          <li class="underline list-disc list-inside">
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-12 md:col-span-3">
        <Heading tag="h4" font-style="h4" color="text-white">Contact</Heading>
        <p>Ha Noi</p>
        <p>Da Nang</p>
        <p>Ho Chi Minh</p>
      </div>
    </Container>
    <div class="flex justify-center">© 2022 Plant Shop | Privacy Policy | Built by Nguyen Minh Khanh</div>
  </footer>
</template>
<script setup>
import LogoWhite from 'assets/images/logo-white.svg'
</script>