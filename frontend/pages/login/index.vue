<template>
  <div>
    <section class="h-full gradient-form md:h-screen bg-brand-white flex justify-center">
      <div class="container py-12 px-6 h-full">
        <div class="md:p-12 md:mx-6">
          <div class="text-center">
            <img
              class="mx-auto w-48"
              src="../../assets/images/home.png"
              alt="logo"
            />
            <h4 class="text-2xl font-semibold mt-1 mb-12 pb-1">PLANT ❤ SHOP</h4>
          </div>
          <form class="lg:w-1/2 md:w-1/2 mx-auto">
            <p class="mb-4">Please login to your account</p>
            <div class="mb-4">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Username"
              />
            </div>
            <div class="mb-4">
              <input
                type="password"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </div>
            <div class="text-center pt-1 mb-12 pb-1">
              <button
                class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-brand-green-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-brand-green"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                
              >
                Log in
              </button>
              <a class="text-gray-500" href="#!">Forgot password?</a>
            </div>
            <div class="flex items-center justify-between pb-6">
              <p class="mb-0 mr-2">Do not have an account?</p>
              <nuxt-link to="/">
                <button
                  type="button"
                  class="inline-block px-6 py-2 border-2 font-medium text-xs leading-tight uppercase rounded hover:bg-brand-green-100 hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Back to Home
                </button>
              </nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
definePageMeta({
  layout: "empty",
});
</script>