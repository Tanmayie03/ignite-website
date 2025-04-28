<script setup>
const { data, pending, error, refresh } = await useFetch(
  `${useRuntimeConfig().public.base_url}${
    useRuntimeConfig().public.url_prefix
  }/public/events`
);
import event from "/events.json";
</script>
<template>
  <div>
    <div class="w-full">
      <h1
        class="text-6xl pt-20 md:text-6xl text-center font-rampart lg:pt-8 text-[#ff6246]">
        Events
      </h1>
      <div
        class="grid justify-center w-full grid-cols-1 gap-12 px-6 mt-12 lg:px-12 md:justify-around md:items-center md:grid-cols-3">
        <div
          class=""
          v-for="(e, index) in event"
          :key="index"
          data-aos="zoom-in">
          <div class="rounded border border-primary bg-[#ffefe4]">
            <div class="flex flex-row items-center justify-start p-3 space-x-2">
              <div class="w-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <div>
                {{ e.date }}
              </div>
            </div>
            <NuxtLink :to="`/events/${e.page_id}`"
              ><img :src="e.image" alt="" class="p-4"
            /></NuxtLink>
            <div class="flex items-center justify-start p-3 space-x-2">
              <div class="w-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
              </div>
              <div class="capitalize">Online</div>
            </div>
            <div class="flex justify-between p-3 border-t border-primary">
              <div class="text-2xl capitalize">
                {{ e.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
