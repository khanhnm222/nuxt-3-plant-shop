<template>
  <button class="flex items-center snipcart-checkout">
    <span class="cart-number pr-2 ml-2 text-lg font-semibold snipcart-items-count bg-brand-beige text-brand-green"></span>
    <IconsCart class="w-6"/>
  </button>
</template>
<style scoped lang="postcss">
.router-link-active {
  @apply text-brand-orange;
}

.cart-number {
  padding: 0px 6px;
  padding-bottom: 1px;
  vertical-align: top;
  border-radius: 50%;
  line-height: 20px;
  position: absolute;
  right: 30px;
  top: 7px;
}
/* .cart-number {
  background: #ff0000;
  padding: 10px 13px;
  vertical-align: top;
  border-radius: 50%;
  line-height: 20px;
  position: absolute;
  right: 30px;
  top: 10px
} */
</style>