<script setup>
const threeel = ref(false);

function threeElements() {
  threeel.value = !threeel.value;
}
</script>
<template>
  <div>
    <div class="fixed z-50 hidden h-screen lg:block">
      <div
        class="flex flex-col items-center xl:justify-center py-[140px] bg-primary absolute z-50 item-center w-[96px] h-screen">
        <NuxtLink
          to="/"
          class="underline-offset-8 decoration-white hover:underline"
          :class="{
            'underline-offset-8 underline  decoration-white':
              $route.path === '/' && !$route.hash,
          }"
          ><p
            class="text-[#FFF4F0] text-[18px] w-fit tracking-wider -rotate-90 py-10">
            HOME
          </p></NuxtLink
        >
        <NuxtLink
          to="/Explore"
          class="underline-offset-8 decoration-white hover:underline"
          :class="{
            'underline-offset-8 underline  decoration-white':
              $route.path === '/Explore',
          }"
          ><p
            class="text-[#FFF4F0] text-[18px] w-fit tracking-wider -rotate-90 py-10">
            ABOUT
          </p></NuxtLink
        >
        <NuxtLink
          to="/events"
          class="underline-offset-8 decoration-white hover:underline"
          :class="{
            'underline-offset-8 underline  decoration-white':
              $route.path === '/events',
          }"
          ><p
            class="text-[#FFF4F0] text-[18px] w-fit tracking-wider -rotate-90 py-10">
            EVENTS
          </p></NuxtLink
        >
        <NuxtLink
          to="/#team"
          class="underline-offset-8 decoration-white hover:underline"
          :class="{
            'underline-offset-8 underline  decoration-white':
              $route.hash === '#team',
          }"
          ><p
            class="z-50 text-[#FFF4F0] no-underline underline-offset-8 hover:underline ease-in-out transition text-[18px] w-fit tracking-wider -rotate-90 py-10">
            TEAM
          </p></NuxtLink
        >
        <NuxtLink
          to="/#contactpg"
          class="underline-offset-8 decoration-white hover:underline"
          :class="{
            'underline-offset-8 underline  decoration-white':
              $route.hash === '#contactpg',
          }"
          ><p
            class="text-[#FFF4F0] text-[18px] -rotate-90 w-fit tracking-wider py-10">
            CONNECT
          </p></NuxtLink
        >
      </div>
    </div>

    <button @click="threeElements" class="absolute top-0 left-0 lg:hidden">
      <div
        class="fixed z-50 flex items-center justify-between w-screen h-16 px-6 bg-[#fdded3]/20 backdrop-blur-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6"
          width="100"
          height="80"
          viewBox="0 0 100 80">
          <rect width="100" height="10" rx="5" fill="text-[#FF6246]" />
          <rect y="35" width="100" height="10" rx="5" fill="text-[#FF6246]" />
          <rect y="70" width="100" height="10" rx="5" fill="text-[#FF6246]" />
        </svg>
        <NuxtLink to="/"
          ><img
            src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1708107501/igniteFire_qezll2.png"
            class="h-10 w-9"
        /></NuxtLink>
      </div>
      <div class="relative">
        <div
          class="fixed top-0 z-10 w-[100%] lg:w-[100%] transition-transform duration-700 h-full"
          v-if="threeel"
          :overlay="false"
          prevent>
          <div
            @click="threeel = true"
            class="absolute top-0 left-0 w-full h-screen -z-10 bg-[#ff6246a4] backdrop-blur-lg"></div>
          <div
            v-if="threeel"
            class="z-10 flex flex-col justify-center h-screen p-2 py-4 font-bold text-white">
            <NuxtLink to="/"><h1 class="px-6 py-6 text-xl">Home</h1></NuxtLink>
            <NuxtLink to="/Explore"
              ><h1 class="px-6 py-6 text-xl">About</h1></NuxtLink
            >
            <NuxtLink to="/events"
              ><h1
                class="px-6 py-6 text-xl no-underline underline-offset-8 hover:underline">
                Events
              </h1></NuxtLink
            >
            <NuxtLink to="/#team"
              ><h1
                class="px-6 py-6 text-xl no-underline underline-offset-8 hover:underline">
                Team
              </h1></NuxtLink
            >
            <NuxtLink to="/#contactpg"
              ><h1
                class="px-6 py-6 text-xl no-underline underline-offset-8 hover:underline">
                Contact Us
              </h1></NuxtLink
            >
          </div>
        </div>
      </div>
    </button>
  </div>
</template>
