<script lang="ts" setup>
import { defineProps } from 'vue'
//reson for using defineProps is to pass the message from the parent component which is not required in this component
const props = defineProps({
  message: {
    type: String,
    required: false,
    default: 'Something went wrong'
  }
})
</script>
<template>
    <div>
        <h1 class="sm:text-5xl text-center font-rampart lg:pt-8 text-[#ff6246]">
        EventZen2.0
      </h1>
        <div class="flex flex-col items-center justify-center w-full px-6 my-12 text-center">
        <h1 class="text-3xl md:text-4xl text-[#ff6246] font-semibold">Oh no!!</h1>
        <h1 class="my-4 text-2xl font-semibold"> {{ props.message.charAt(0).toUpperCase() + props.message.slice(1) }} </h1>
        <h1 class="text-xl text-gray-800">(Kindly please recheck your process )</h1>
        <img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1708430666/image_42-removebg-preview_arwuuu.png" class="md:w-1/3" />
        <NuxtLink to="/"><button class="bg-[#ff6246] px-6 py-2 rounded my-4 text-white">Go home</button></NuxtLink>
      </div>
        
    </div>
</template>