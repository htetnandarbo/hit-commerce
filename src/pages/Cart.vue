<template>
    <div class="lg:px-10">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div class="lg:px-3 lg:py-8 font-semibold ">
        <h1 class="text-2xl lg:mb-5 mb-8 tracking-wider text-center lg:text-start px-3 mt-3">Your Cart</h1>
        <template v-for = "card in cards" :key = "card.id">
        <div class="flex flex-col lg:flex-col xl:flex-col 2xl:flex-row justify-start my-8 md:py-5 lg:py-0">
          <div class="flex">
            <div class="lg:m-0">
                <img :src="card.imageSrc" alt="" class="lg:w-28 w-40 mx-2 lg:m-0">
            </div>
            <div class="lg:pl-3 pt-3 mx-auto lg:m-0 ms-3">
                <h3 class="font-bold lg:text-base text-xl lg:w-64 w-48 lg:tracking-wider">{{ card.name }}</h3>
                <p class="pt-1 lg:text-base text-xl">{{ card.serial_number }}</p>
            </div>
          </div>
            <div class="flex justify-evenly items-center mt-5 lg:m-0">
                    <button class="btn btn-square bg-white lg:btn-xs btn-xl border-none shadow-none hover:bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                      </svg>
                    </button>
                    <input type="text" placeholder = "3" class="input-sm w-14 max-w-xs lg:mx-3 m-0 font-semibold border border-gray-300 rounded-md text-xl lg:text-base hover:border-gray-300 focus:outline-none text-center" />

                    <!-- <span class="lg:mx-3 m-0 font-semibold border border-gray-300 px-4 py-1 rounded-md text-xl lg:text-base">3</span> -->
                    <button class="btn btn-square bg-white lg:btn-xs btn-xl border-none shadow-none hover:bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </button>
                    <h1 class="text-xl lg:px-6">$1399</h1>
                 
                    <button style = "width:6vw;" class="btn btn-square border-none shadow-none bg-white hover:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
            </div>
        </div>
        <hr> 
      </template>
        </div>
        <div class="py-28 mx-2 md:ml-20">
                <div class="border border-gray-300 lg:full xl:w-3/4 lg:px-20 lg:py-10 p-3 mx-auto rounded-lg ">
                <h1 class="text-xl font-semibold tracking-wider mb-5">Order Summary</h1>

                <h3 class = "mb-2">Discount code / Promo code</h3> 
                <input type="text" placeholder="Code" class="input input-bordered w-full py-6 " />
                <div class=" mt-7 flex justify-between w-100">
                    <h3 class="text-lg font-semibold tracking-wider">Subtotal</h3>
                    <h3 class="font-semibold text-lg tracking-wide">$2347</h3>
                </div>

                <div class=" mt-5 flex justify-between w-100">
                    <h3 class="text-lg font-normal tracking-wider">Estimated</h3>
                    <h3 class="font-semibold text-lg tracking-wide">$34</h3>
                </div>

                <div class=" mt-4 flex justify-between w-100">
                    <h3 class="text-lg font-normal tracking-wider">Estimated shipping & Handling</h3>
                    <h3 class="font-semibold text-lg tracking-wide">$27</h3>
                </div>

                <div class=" mt-5 flex justify-between w-100">
                    <h3 class="text-lg font-semibold tracking-wider">Total</h3>
                    <h3 class="font-semibold text-lg tracking-wide">$2426</h3>
                </div>
                <button class="btn mt-10 bg-black w-full py-2 text-white hover:bg-black mx-auto">Check Out</button>

            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
  {
    id: 1,
    imageSrc : '/public/images/iphone.png',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    serial_number : '#232435456576'
  },
  {
    id: 2,
    imageSrc : '/public/images/iphone.png',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    serial_number : '#232435456576'
  },
  {
    id: 3,
    imageSrc : '/public/images/iphone.png',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    serial_number : '#232435456576'
  },
  {
    id: 4,
    imageSrc : '/public/images/iphone.png',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    serial_number : '#232435456576'
  }
]);
</script>

<style lang="scss" scoped>

</style>