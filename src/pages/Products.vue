<template>
  <div class="">
    <div class="grid sm:grid-colos:2 md:grid-cols-4 lg:grid-cols-4">
      <div class="bg-white p-5 hidden sm:block">
        <div class="collapse collapse-arrow rounded-none">
          <input type="checkbox" name="my-accordion-2" />
          <div class="collapse-title text-lg font-medium">
            Price
            <hr class="mt-2" />
          </div>
          <div class="collapse-content">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm font-medium">From</p>
                <input
                  type="text"
                  placeholder="1222"
                  class="input input-bordered rounded-none w-32 mt-2"
                />
              </div>
              <div>
                <p class="text-sm font-medium">To</p>
                <input
                  type="text"
                  placeholder="1222"
                  class="input input-bordered rounded-none w-32 mt-2"
                />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value="25"
              class="range range-xs mt-3"
              step="25"
            />
            <div class="w-full flex justify-between text-xs px-2">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
          </div>
        </div>

        <div class="collapse collapse-arrow rounded-none">
          <input type="checkbox" name="my-accordion-2" />
          <div class="collapse-title text-lg font-medium">
            Brands
            <hr class="mt-2" />
          </div>

          <div class="collapse-content snap-y">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered w-full max-w-xs mb-3"
            />
            <div class="flex items-center">
              <input
                type="checkbox"
                checked="checked"
                class="checkbox size-5 me-2 rounded-sm"
              />
              <span class="font-medium">Apple</span>
              <span class="text-xs font-medium text-slate-400 pt-1 ms-1"
                >110</span
              >
            </div>
            <div class="flex items-center">
              <input type="checkbox" class="checkbox size-5 me-2 rounded-sm" />
              <span class="font-medium">Samsung</span>
              <span class="text-xs font-medium text-slate-400 pt-1 ms-1"
                >125</span
              >
            </div>
            <div class="flex items-center">
              <input type="checkbox" class="checkbox size-5 me-2 rounded-sm" />
              <span class="font-medium">Xiaomi</span>
              <span class="text-xs font-medium text-slate-400 pt-1 ms-1"
                >68</span
              >
            </div>
          </div>
        </div>

        <div class="collapse collapse-arrow rounded-none">
          <input type="checkbox" name="my-accordion-2" />
          <div class="collapse-title text-lg font-medium">
            Built-in memory
            <hr class="mt-2" />
          </div>
          <div class="collapse-content">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered w-full max-w-xs mb-3"
            />
            <div class="flex items-center">
              <input type="checkbox" class="checkbox size-5 me-2 rounded-sm" />
              <span class="font-medium">16GB</span>
              <span class="text-xs font-medium text-slate-400 pt-1 ms-1"
                >65</span
              >
            </div>
            <div class="flex items-center">
              <input type="checkbox" class="checkbox size-5 me-2 rounded-sm" />
              <span class="font-medium">32GB</span>
              <span class="text-xs font-medium text-slate-400 pt-1 ms-1"
                >132</span
              >
            </div>
            <div class="flex items-center">
              <input type="checkbox" class="checkbox size-5 me-2 rounded-sm" />
              <span class="font-medium">64GB</span>
              <span class="text-xs font-medium text-slate-400 pt-1 ms-1"
                >48</span
              >
            </div>
          </div>
        </div>

        <div class="collapse collapse-arrow rounded-none">
          <input type="checkbox" name="my-accordion-2" />
          <div class="collapse-title text-lg font-medium">
            Protection Class
            <hr class="mt-2" />
          </div>
          <div class="collapse-content">...</div>
        </div>

        <div class="collapse collapse-arrow rounded-none">
          <input type="checkbox" name="my-accordion-2" />
          <div class="collapse-title text-lg font-medium">
            Screen diagonal
            <hr class="mt-2" />
          </div>
          <div class="collapse-content">...</div>
        </div>

        <div class="collapse collapse-arrow rounded-none">
          <input type="checkbox" name="my-accordion-2" />
          <div class="collapse-title text-lg font-medium">
            Screen type
            <hr class="mt-2" />
          </div>
          <div class="collapse-content">...</div>
        </div>

        <div class="collapse collapse-arrow rounded-none">
          <input type="checkbox" name="my-accordion-2" />
          <div class="collapse-title text-lg font-medium">
            Battery capacity
            <hr class="mt-2" />
          </div>
          <div class="collapse-content">...</div>
        </div>
      </div>

      <div class="font-medium col-span-3 p-5 cursor-pointer">
        <select
          class="select w-56 select-bordered max-w-xs mb-4 sm:inline md:hidden"
        >
          <option disabled selected>By Rating</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <div class="flex">
          <button
            class="select leading-3rem select-bordered bg-white w-40 sm:inline md:hidden"
            onclick="my_modal_1.showModal()"
          >
            Price
          </button>
          <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
              <form method="dialog">
                <button
                  class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-sm font-medium">From</p>
                  <input
                    type="text"
                    placeholder="1222"
                    class="input input-bordered rounded-none w-32 mt-2"
                  />
                </div>
                <div>
                  <p class="text-sm font-medium">To</p>
                  <input
                    type="text"
                    placeholder="1222"
                    class="input input-bordered rounded-none w-32 mt-2"
                  />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value="25"
                class="range range-xs mt-3"
                step="25"
              />
              <div class="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
            </div>
          </dialog>
          <!-- You can open the modal using ID.showModal() method -->
          <button
            class="select leading-3rem select-bordered bg-white w-40 sm:inline md:hidden ms-4"
            onclick="my_modal_2.showModal()"
          >
            Brand
          </button>
          <dialog id="my_modal_2" class="modal">
            <div class="modal-box">
              <form method="dialog">
                <button
                  class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>
              <input
                type="text"
                placeholder="Search"
                class="input input-bordered w-full max-w-xs mb-3"
              />
              <div class="flex items-center">
                <input
                  type="checkbox"
                  checked="checked"
                  class="checkbox size-5 me-2 rounded-sm"
                />
                <span class="font-medium">Apple</span>
                <span class="text-xs font-medium text-slate-400 pt-1 ms-1"
                  >110</span
                >
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="checkbox size-5 me-2 rounded-sm"
                />
                <span class="font-medium">Samsung</span>
                <span class="text-xs font-medium text-slate-400 pt-1 ms-1"
                  >125</span
                >
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="checkbox size-5 me-2 rounded-sm"
                />
                <span class="font-medium">Xiaomi</span>
                <span class="text-xs font-medium text-slate-400 pt-1 ms-1"
                  >68</span
                >
              </div>
            </div>
          </dialog>
        </div>

        <div class="flex my-3">
          <button
            class="select leading-3rem select-bordered bg-white w-40 sm:inline md:hidden"
            onclick="my_modal_3.showModal()"
          >
            Memory
          </button>
          <dialog id="my_modal_3" class="modal">
            <div class="modal-box">
              <form method="dialog">
                <button
                  class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>
              <h3 class="font-bold text-lg">Hello!</h3>
              <p class="py-4">Press ESC key or click on ✕ button to close</p>
            </div>
          </dialog>
          <!-- You can open the modal using ID.showModal() method -->
          <button
            class="select leading-3rem select-bordered bg-white w-40 sm:inline md:hidden ms-4"
            onclick="my_modal_4.showModal()"
          >
            Screen Type
          </button>
          <dialog id="my_modal_4" class="modal">
            <div class="modal-box">
              <form method="dialog">
                <button
                  class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>
              <h3 class="font-bold text-lg">Hello!</h3>
              <p class="py-4">Press ESC key or click on ✕ button to close</p>
            </div>
          </dialog>
        </div>

        <div class="flex justify-between items-center mb-4">
          <p class="text-gray-500">
            Selected Products:
            <span class="font-bold text-lg text-black">85</span>
          </p>
          <select class="select w-56 select-bordered max-w-xs hidden sm:block">
            <option disabled selected>By Rating</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            class="card md:border rounded-none w-full md:p-5 flex-row md:flex-col"
          >
            <figure class="px-5 rounded-md border flex-1">
              <img src="/public/images/detil1.webp" alt="Shoes" class="" />
            </figure>
            <div class="md:text-center ps-3 md:py-5">
              <p class="text-sm font-semibold">Apple iPhone14 Pro Max</p>
              <p class="text-sm font-semibold">128GB Deep Purple (MQ9T3RX/A)</p>
              <p class="text-lg font-semibold pt-2">$900</p>
            </div>
          </div>
          <div
            class="card md:border rounded-none w-full mt-4 md:mt-0 md:p-5 flex-row md:flex-col"
          >
            <figure class="px-5 rounded-md border flex-1">
              <img src="/public/images/detil1.webp" alt="Shoes" class="" />
            </figure>
            <div class="md:text-center ps-3 md:py-5">
              <p class="text-sm font-semibold">Apple iPhone14 Pro Max</p>
              <p class="text-sm font-semibold">128GB Deep Purple (MQ9T3RX/A)</p>
              <p class="text-lg font-semibold pt-2">$900</p>
            </div>
          </div>
          <div
            class="card md:border rounded-none w-full mt-4 md:mt-0 md:p-5 flex-row md:flex-col"
          >
            <figure class="px-5 rounded-md border flex-1">
              <img src="/public/images/detil1.webp" alt="Shoes" class="" />
            </figure>
            <div class="md:text-center ps-3 md:py-5">
              <p class="text-sm font-semibold">Apple iPhone14 Pro Max</p>
              <p class="text-sm font-semibold">128GB Deep Purple (MQ9T3RX/A)</p>
              <p class="text-lg font-semibold pt-2">$900</p>
            </div>
          </div>
          <div
            class="card md:border rounded-none w-full mt-4 md:mt-0 md:p-5 flex-row md:flex-col"
          >
            <figure class="px-5 rounded-md border flex-1">
              <img src="/public/images/detil1.webp" alt="Shoes" class="" />
            </figure>
            <div class="md:text-center ps-3 md:py-5">
              <p class="text-sm font-semibold">Apple iPhone14 Pro Max</p>
              <p class="text-sm font-semibold">128GB Deep Purple (MQ9T3RX/A)</p>
              <p class="text-lg font-semibold pt-2">$900</p>
            </div>
          </div>
          <div
            class="card md:border rounded-none w-full mt-4 md:mt-0 md:p-5 flex-row md:flex-col"
          >
            <figure class="px-5 rounded-md border flex-1">
              <img src="/public/images/detil1.webp" alt="Shoes" class="" />
            </figure>
            <div class="md:text-center ps-3 md:py-5">
              <p class="text-sm font-semibold">Apple iPhone14 Pro Max</p>
              <p class="text-sm font-semibold">128GB Deep Purple (MQ9T3RX/A)</p>
              <p class="text-lg font-semibold pt-2">$900</p>
            </div>
          </div>
          <div
            class="card md:border rounded-none w-full mt-4 md:mt-0 md:p-5 flex-row md:flex-col"
          >
            <figure class="px-5 rounded-md border flex-1">
              <img src="/public/images/detil1.webp" alt="Shoes" class="" />
            </figure>
            <div class="md:text-center ps-3 md:py-5">
              <p class="text-sm font-semibold">Apple iPhone14 Pro Max</p>
              <p class="text-sm font-semibold">128GB Deep Purple (MQ9T3RX/A)</p>
              <p class="text-lg font-semibold pt-2">$900</p>
            </div>
          </div>
          <div
            class="card md:border rounded-none w-full mt-4 md:mt-0 md:p-5 flex-row md:flex-col"
          >
            <figure class="px-5 rounded-md border flex-1">
              <img src="/public/images/detil1.webp" alt="Shoes" class="" />
            </figure>
            <div class="md:text-center ps-3 md:py-5">
              <p class="text-sm font-semibold">Apple iPhone14 Pro Max</p>
              <p class="text-sm font-semibold">128GB Deep Purple (MQ9T3RX/A)</p>
              <p class="text-lg font-semibold pt-2">$900</p>
            </div>
          </div>
          <div
            class="card md:border rounded-none w-full mt-4 md:mt-0 md:p-5 flex-row md:flex-col"
          >
            <figure class="px-5 rounded-md border flex-1">
              <img src="/public/images/detil1.webp" alt="Shoes" class="" />
            </figure>
            <div class="md:text-center ps-3 md:py-5">
              <p class="text-sm font-semibold">Apple iPhone14 Pro Max</p>
              <p class="text-sm font-semibold">128GB Deep Purple (MQ9T3RX/A)</p>
              <p class="text-lg font-semibold pt-2">$900</p>
            </div>
          </div>
        </div>
        <div class="join bg-white rounded-none mt-10">
          <button class="join-item btn mx-2 bg-white btn-dark">1</button>
          <button class="join-item btn mx-2 bg-white btn-dark">2</button>
          <button class="join-item btn mx-2 bg-white btn-dark btn-disabled">
            ...
          </button>
          <button class="join-item btn mx-2 bg-white btn-dark">99</button>
          <button class="join-item btn mx-2 bg-white btn-dark">100</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>

<!-- <template>
  <div class="container mx-auto px-11 pt-8 pb-3">
    <div
      class="rounded border-none bg-neutral-200 py-4 px-5 my-5 text-sm font-semibold"
    >
      INVOICE ADDRESS
    </div>

    <div class="grid grid-cols-2 gap-10">
      <div class="">
        <label class="w-full max-w-xs">
          <div class="label">
            <span class="label-text font-medium text-zinc-500">NAME</span>
          </div>
          <input type="text" class="input input-bordered rounded-md w-full" />
        </label>
      </div>

      <div class="">
        <label class="w-full max-w-xs">
          <div class="label">
            <span class="label-text font-medium text-zinc-500">PHONE</span>
          </div>
          <input type="text" class="input input-bordered rounded-md w-full" />
        </label>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-10 my-5">
      <div class="">
        <label class="form-control">
          <div class="label">
            <span class="label-text font-medium text-zinc-500">ADDRESS</span>
          </div>
          <textarea class="textarea textarea-bordered h-36"></textarea>
        </label>
      </div>

      <div class="">
        <label class="w-full max-w-xs">
          <div class="label">
            <span class="label-text font-medium text-zinc-500"
              >ORDER FROM (CITY)</span
            >
          </div>
          <input type="text" class="input input-bordered rounded-md w-full" />
        </label>
      </div>
    </div>

    <div class="join flex justify-between">
      <button type="button" class="w-18 text-sm border-hidden font-semibold">
        &lt; BACK
      </button>

      <button type="button" class="w-18 text-sm border-hidden font-semibold">
        NEXT <b>&gt; </b>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style> -->
