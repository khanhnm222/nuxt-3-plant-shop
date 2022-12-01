<template>
  <div class="steps container px-4 mx-auto mb-10">
    <div class="py-14 px-10 bg-brand-green-100 mb-20 rounded-2xl">
      <h2 class="text-4xl text-brand-white text-center leading-10 font-bold">
        About us
      </h2>

      <div class="grid grid-cols-3 gap-10 py-4">
        <div class="steps__card bg-brand-white pt-6 pr-12 pb-8 pl-6 rounded-xl">
          <div class="steps__card-number inline-block bg-brand-green-100 text-brand-white py-2 px-3 rounded text-2xl mb-6 ease-in">
            01
          </div>
          <h3 class="text-2xl mb-6 font-bold text-brand-green">Outside In</h3>
          <p class="text-xl">
            We’re here to help re-connect people with the natural world, and to inspire them to build and maintain more beautiful spaces.
          </p>
        </div>

        <div class="steps__card bg-brand-white pt-6 pr-12 pb-8 pl-6 rounded-xl">
          <div class="steps__card-number inline-block bg-brand-green-100 text-brand-white py-2 px-3 rounded text-2xl text-md mb-6 ease-in">
            02
          </div>
          <h3 class="text-2xl mb-6 font-bold text-brand-green">Quality Plants & Curated Goods</h3>
          <p class="text-xl">
            We offer a carefully curated selection of indoor and outdoor plants, hand crafted home goods that put quality ahead of quantity, and living art made right here in the shop: terrariums, landscapes, arrangements, vessels, and holders.
          </p>
        </div>

        <div class="steps__card bg-brand-white pt-6 pr-12 pb-8 pl-6 rounded-xl">
          <div class="steps__card-number inline-block bg-brand-green-100 text-brand-white py-2 px-3 rounded text-2xl text-md mb-6 ease-in">
            03
          </div>
          <h3 class="text-2xl mb-6 font-bold text-brand-green">Plants for the People</h3>
          <p class="text-xl">
            We want our visitors to be inspired to get their hands dirty. We have a passionate and knowledgeable team at your disposal with helpful tips and tricks, and all the supplies you need to get creative at home.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss">
.steps__card:hover .steps__card-number {
  transform: translateY(-.25rem);
}

.steps__card-number {
  transition: .3s;
}

@media screen and (max-width: 320px) {
  .steps__bg{
    padding: 2rem 1rem;
  }
  .steps__card{
    padding: 1.5rem;
  }
}
@media screen and (max-width: 576px) {
  .steps__container{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 992px) {
  .steps__container{
    grid-template-columns: repeat(3, 1fr);
  }
  .steps__bg{
    padding: 3.5rem 2.5rem;
  }
  .steps__card-title{
    font-size: 0.398rem;
  }
}
</style>