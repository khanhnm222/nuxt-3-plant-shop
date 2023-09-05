<template>
  <nav>
    <ul class="flex flex-col item-center justify-center gap-6 text-center md:flex-row">
      <li
        v-for="route in routes"
        :key="route.id"
        class="nav-underline text-xl tracking-tighter transition-colors text-brand-white font-heading hover:text-orange-200 w-20"
        :class="{'activate-route': activateRouteClass(route)}"
      >
        <nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const routes = ref([
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/products', name: 'Shop' },
  { id: 3, path: '/blogs', name: 'Blogs' },
  { id: 4, path: '/contact', name: 'Contact' },
])
const router = useRouter()
const activateRouteClass = (route) => {
  if (route.path.length > 1) {
    return router.currentRoute.value.path.includes(route.path)
  }
  return router.currentRoute.value.path === route.path
}
</script>
<style scoped lang="css">
/* .router-link-active {
  @apply text-brand-beige
} */
.nav-underline {
  display: inline-block;
  padding-bottom: 2px;
  background-image: linear-gradient(#fff, #fff);
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition:
    background-size 0.3s,
    background-position 0s 0.3s;
}
.nav-underline:hover {
  background-position: 100% 100%; /*OR bottom right*/
  background-size: 100% 2px;
  background-image: linear-gradient(#FED7AA, #FED7AA);
}
.activate-route {
  background-size: 100% 2px !important
}
</style>