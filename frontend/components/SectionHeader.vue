<template>
  <header class="fixed flex z-50 w-full py-2 min-h-40 h-16">
    <div class="grid items-center w-full grid-cols-12 pl-4 pr-6 mx-auto">
      <div class="col-span-4 flex items-center justify-start">
        <button title="menu" class="p-1 mr-4" @click="openMenu">
          <svg
            class="w-6 h-6 md:hidden text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nuxt-link to="/" class="min-w-[150px]">
          <IconsLogo />
        </nuxt-link>
      </div>
      <div class="col-span-6">
        <NavBar class="hidden md:block"/>
      </div>
      <div class="col-span-2 flex items-center justify-end mr-5">
        <nuxt-link to="/login">
          <span class="material-symbols-outlined text-brand-white mr-3 text-3xl">account_circle</span>
          <!-- <AppBtn rounded theme="primary-sm" class="hidden md:block mr-5">Sign in</AppBtn> -->
        </nuxt-link>
        <CartInfo />
      </div>
    </div>
    <transition name="menu">
      <MobileMenu v-if="mobileMenuOpen" @close="openMenu"/>
    </transition>
    <!-- <Dialog :open="openDialog" @cancel="openDialog = false"/> -->
  </header>
</template>
<script setup>
const mobileMenuOpen = ref(false)
const openDialog = ref(true)
const openMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped lang="postcss">
header {
  background: rgba(40, 65, 57, 1);
  z-index: 100;
  /* background: rgba(227, 217, 205, 0.8) */
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

@keyframes menu {
  from {
    transform: translateX(100%);
    opacity: 0
  }
  to {
    transform: translateX(0);
    opacity: 1
  }
}
</style>
