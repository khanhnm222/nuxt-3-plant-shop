<template>
  <div>
    <Container class="pt-24 mb-40 text-center">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-3xl font-bold title-font mb-4 text-brand-green">Contact Us</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-md text-gray-600 float-left">Name</label>
                  <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-brand-green focus:border-brand-green-100 focus:bg-white focus:brand-green-100 focus:brand-green-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-md text-gray-600 float-left">Email</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-brand-green focus:border-brand-green-100 focus:bg-white focus:brand-green-100 focus:brand-green-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-md text-gray-600 float-left">Message</label>
                  <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-brand-green focus:border-brand-green-100 focus:bg-white focus:brand-green-100 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class="p-2 w-full flex justify-center">
                <AppBtn theme="primary-rounded" class="w-[150px]">Send Message</AppBtn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  </div>
</template>