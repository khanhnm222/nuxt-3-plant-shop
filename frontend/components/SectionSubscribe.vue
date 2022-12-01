<template>
  <div class="relative flex justify-center w-full h-64 pb-16 mt-14 subscribe-bg">
    <Container>
      <div class="w-full mx-auto lg:w-3/6">
        <div class="px-10 -mt-12 text-center bg-white rounded-lg shadow-xl py-9 subscribe-box">
          <Heading tag="h3" font-style="h3">Subscribe</Heading>
          <Heading tag="h2" font-style="h2">Plant Shop</Heading>
          <p class="w-full px-2 mx-auto text-center pb-7 text-brand-grey-400">
            Subscribe to our newsletter to stay update
          </p>
          <div class="flex items-center">
            <app-input type="email" placeholder="Your email" class="w-3/4 mr-8" />
            <AppBtn theme="primary-sm" class="h-full">Subscribe</AppBtn>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>


<style scoped>
.subscribe-bg {
  background: url("assets/images/subscribe-bg.jpg") repeat, #e9ba9e;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
</style>