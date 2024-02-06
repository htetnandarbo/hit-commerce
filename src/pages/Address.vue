<template>

    <div v-if="5>4">
        <div class="container mx-auto pt-8 pb-3"> 
            <div class="rounded border-none bg-neutral-200 py-4 px-5 my-5 text-sm font-semibold"> 
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
                            <span class="label-text font-medium text-zinc-500">ORDER FROM (CITY)</span> 
                        </div> 
                        <input type="text" class="input input-bordered rounded-md w-full" /> 
                    </label> 
                </div> 
            </div>

        </div>
            
        <div class="container mx-auto pb-2">
            <div class="join flex justify-between">
                <button class="w-18 font-semibold flex items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    BACK 
                </button>
                <button class="w-18 font-semibold flex justify-center items-center"> 
                    NEXT
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div v-if="2>1">
        <div class="container mx-auto pt-8 pb-3"> 
            <div class="rounded border-none bg-neutral-200 py-4 px-5 my-5 text-sm font-semibold"> 
            Please Choose Your Paymet Method 
            </div> 

            <div class="grid grid-cols-7 my-14">
                <div class="border rounded-lg col-span-3 px-4 py-5 h-3/4">
                    <h4 class="font-bold">SUMMARY</h4>
                    <div class="flex justify-between items-center font-semibold rounded-lg w-full px-3 mt-4 py-4 bg-zinc-100">
                        <div class="flex items-center">
                            <img src="/public/images/iPhone.png" alt="" class="w-10 me-3">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>$1334</div>
                    </div>
                    <div class="flex justify-between items-center font-semibold rounded-lg w-full px-3 mt-4 py-4 bg-zinc-100">
                        <div class="flex items-center">
                            <img src="/public/images/airPod.png" alt="" class="w-10 me-3">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>$549</div>
                    </div>
                    <div class="flex justify-between items-center font-semibold rounded-lg w-full px-3 mt-4 py-4 bg-zinc-100">
                        <div class="flex items-center">
                            <img src="/public/images/appleWatch.png" alt="" class="w-10 me-3">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>$339</div>
                    </div>

                    <div class="text-sm font-medium text-slate-500 my-3">Address</div>
                    <div class="font-semibold my-3">1131 Lorem ipsum dolor sit amet, consectetur.</div>

                    <div class="flex justify-between font-semibold mb-4 mt-8">
                        <p>Subtotal</p>
                        <span>$234</span>
                    </div>
                    
                </div>

                <div class="col-span-4 py-5 px-10">
                    <h4 class="font-bold">PAYMENT</h4>

                    <div class="form-control my-6">
                        <label class="flex items-center cursor-pointer mb-2">
                            <input type="radio" name="radio-10" class="radio w-5 h-5" checked />
                            <span class="label-text ps-2 font-semibold text-sm">CASH ON DELIVERY</span> 
                        </label>
                        <label class="flex items-center cursor-pointer">
                            <input type="radio" name="radio-10" class="radio w-5 h-5" checked />
                            <span class="label-text ps-2 font-semibold text-sm">PAY BY BANK/WALLET</span> 
                        </label>
                    </div>

                    <div class="text-sm font-semibold text-neutral-600 mb-6">ACCOUNT</div>
                    <div class="mb-12">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 border rounded bg-black text-slate-100 me-2 ms-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            <p class="text-sm font-semibold">KPAY - YE MYINTT SOE (09376698698)</p>
                        </div>
                        <input type="text" placeholder="Transaction Number" class="h-9 input input-bordered rounded-md w-full form-control my-3 text-sm" /> 
                    </div>
                    <div class="my-12">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 border rounded bg-black text-slate-100 me-2 ms-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            <p class="text-sm font-semibold">KBZ - 076372674634827</p>
                        </div>
                        <input type="text" placeholder="Transaction Number" class="h-9 input input-bordered rounded-md w-full form-control my-3 text-sm" /> 
                    </div>
                    <div class="my-12">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 border rounded bg-black text-slate-100 me-2 ms-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            <p class="text-sm font-semibold">CB - 8793249816</p>
                        </div>
                        <input type="text" placeholder="Transaction Number" class="h-9 input input-bordered rounded-md w-full form-control my-3 text-sm" /> 
                    </div>
                    <div class="my-12">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 border rounded bg-black text-slate-100 me-2 ms-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            <p class="text-sm font-semibold">AYA - 7386864386</p>
                        </div>
                        <input type="text" placeholder="Transaction Number" class="h-9 input input-bordered rounded-md w-full form-control my-3 text-sm" /> 
                    </div>
                    <div class="my-12">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 border rounded bg-black text-slate-100 me-2 ms-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            <p class="text-sm font-semibold">YOMA - 357793792</p>
                        </div>
                        <input type="text" placeholder="Transaction Number" class="h-9 input input-bordered rounded-md w-full form-control my-3 text-sm" /> 
                    </div>
                </div>
            </div>
             
            <div class="container mx-auto pb-2">
                <div class="join flex justify-between">
                   
                    <button class="w-18 font-semibold flex items-center"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        BACK 
                    </button>
                    <button class="border text-sm rounded-md text-white bg-black py-2 ps-7 pe-2 w-18 font-semibold flex items-center"> 
                        PLACE AN ORDER 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="ps-1 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                
                </div>
            </div>
        </div>
    </div>
        
    <div>
        <div class="container mx-auto pt-8 pb-3"> 
            <div class="rounded border-none bg-neutral-200 py-4 px-5 mb-5 my-5 text-sm font-semibold"> 
            ORDER COMFIRMED
            </div> 

            <div class="text-center">
                <div class="text-6xl font-semibold my-20">ORDER COMFIRMED</div>
 
                <div class="w-14 h-14 bg-amber-200 rounded-full m-auto flex justify-center aligns-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-12 text-orange-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>

                <p class="text-lg tracking-wider font-semibold my-5">Thank you, Htet Nandar Bo. Your order is comfirmed.</p>

                <div class="">
                    <button class="h-9 rounded-md border-2 border-black px-6 text-sm font-semibold mt-5">VIEW YOUR ORDER</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>