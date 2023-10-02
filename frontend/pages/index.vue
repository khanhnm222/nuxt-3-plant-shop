<template>
  <div>
    <section class="relative mb-20 -mt-20 border-b-4md:mb-10 header border-brand-beige">
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img :src="HeaderBg" class="home-head-image object-cover w-full h-full" alt="header" />
      </div>
      <div class="relative z-20 h-full header-content">
        <div class="absolute flex flex-col justify-center p-8 mx-auto hero-box">
          <div class="relative px-6 py-8 bg-white rounded drop-shadow-2xl">
            <Heading tag="h2" font-style="h2" color="text-brand-green">Plants for the people</Heading>
            <Heading tag="h3" font-style="h3" color="text-brand-green" class="mt-5 mb-5">We offer a curated selection of indoor and outdoor plants, hand crafted home goods, and living art.</Heading>
            <AppBtn
              class="absolute md:-right-3 md:-bottom-3 min-w-[160px]"
              @click="goToShop"
            >
              Shop now
            </AppBtn>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-28">
      <Container>
        <div class="w-full mx-auto mb-12 text-center lg:w-4/6">
          <Heading tag="h2" font-style="h2" class="mb-5" color="text-brand-green">Our Plants</Heading>
          <Heading tag="h3" font-style="h3" class="mb-2" color="text-brand-green">
            We want our visitors to be inspired to get their hands dirty. We have a passionate and knowledgeable team at your disposal with helpful tips and tricks, and all the supplies you need to get creative at home.
          </Heading>
        </div>
        <div class="grid grid-cols-2 gap-12 md:grid-cols-4">
          <ProductTeaser
            class="col-span-1"
            v-for="product in products?.data"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="flex justify-center mt-10">
          <AppBtn theme="secondary" @click="goToShop">View all plants</AppBtn>
        </div>
      </Container>
    </section>
    <section class="text-gray-600 body-font">
      <div class="w-full mx-auto mb-12 text-center lg:w-4/6">
        <Heading tag="h2" font-style="h2" class="mb-5" color="text-brand-green">Explore the blogs</Heading>
        <Heading tag="h3" font-style="h3" class="mb-2" color="text-brand-green">
          We want our visitors to be inspired to get their hands dirty. We have a passionate and knowledgeable team at your disposal with helpful tips and tricks, and all the supplies you need to get creative at home.
        </Heading>
      </div>
      <div class="container px-5 pb-20 mx-auto flex flex-wrap">
        <div class="lg:w-2/3 mx-auto">
          <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-70 absolute inset-0" src="../assets/images/white-wall-with-window-shadow.jpg">
            <div class="text-center relative z-10 w-full">
              <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Plants and People</h2>
              <p class="leading-relaxed">Enjoy your life with many plants around you</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Read More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-wrap -mx-2">
            <div class="px-2 w-1/2">
              <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img alt="gallery" class="w-full object-cover h-full object-center block opacity-60 absolute inset-0" src="../assets/images/green-leaf.jpg">
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Plants and People</h2>
                  <p class="leading-relaxed">Enjoy your life with many plants around you</p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Read More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="px-2 w-1/2">
              <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img alt="gallery" class="w-full object-cover h-full object-center block opacity-60 absolute inset-0" src="../assets/images/green-wall.jpg">
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Plants and People</h2>
                  <p class="leading-relaxed">Enjoy your life with many plants around you</p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Read More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <SectionAbout />
    </section>
  </div>
</template>
<script setup>
import HeaderBg from '../assets/images/Homepage_Slider_Welcome6_1512x.webp'
const config = useRuntimeConfig()
const router = useRouter()
const { data: products } = await useFetch(`${config.public.baseURL}/api/products?pagination[start]=0&pagination[limit]=4&populate=*`)
// const products = await useHttpApi().getProducts(0, 4)
const goToShop = function () {
router.push('/products');
} 
</script>
<style scoped lang="postcss">
.header {
  height: 600px;
  /* margin-top: -106px;   */
}
@screen md {
  .hero-box {
    left: 10%;
    top: 175px;
    width: 485px;
  }
}
@screen md {
  .header {
    height: 700px;
  }
}
@screen md {
  .home-head-image {
    top: -110px;
    height: 770px;
    width: 100%;
  }
}
.hero-box {
  bottom: -50px;
  left: 0px;
  width: 100%;
}
@screen md {
  .hero-box {
    left: 10%;
    top: 100px;
    width: 485px;
  }
}
</style>