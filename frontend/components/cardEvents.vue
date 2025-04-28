
  
<template>
  <div >
      <div class="flex items-center justify-center my-2 drop-shadow-xl lg:my-0 md:flex-row lg:flex-row ">
        <img :src="image" class="z-30 drop-shadow-2xl hidden md:block lg:block w-[200px] lg:w-[400px]" />
        <div
          class="flex flex-col  justify-center items-center text-center lg:text-start rounded-lg drop-shadow-2xl lg:my-4  lg:h-[460px] z-30 bg-[#FFF4F0]   py-4 px-8 sm:p-12">
          <img :src="image" class="z-30 drop-shadow-2xl py-4 w-[240px] md:hidden lg:hidden lg:w-[400px]" />

          <p class="text-[24px] mt-2 font-bold text-[#FF6246]">About this event</p>
          <p class="w-[250px] h-[200px]  text-ellipsis lg:w-[430px] text-sm py-4 sm:py-4 md:py-0 lg:py-0 flex lg:items-center lg:text-[20px]">
            {{ text }}
          </p>
          <!-- <button class=" text-white bg-[#FF6246] px-6 py-2 rounded-md">Know more</button>        -->
        </div>
      </div>
  </div>
</template>
<script setup>
defineProps({
  id: Number,
  image: String,
  text: String,
});
</script>

