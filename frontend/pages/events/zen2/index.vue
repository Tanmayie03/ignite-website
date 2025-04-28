<script setup>
const { data, pending, error, refresh } = await useFetch(
  `${useRuntimeConfig().public.base_url}${
    useRuntimeConfig().public.url_prefix
  }/public/events`
);
</script>
<template>
  <div class="h-full font-lato">
    <div class="px-6 lg:pl-8">
      <h1
        class="text-5xl pt-20 md:text-6xl text-center font-rampart lg:pt-8 text-[#ff6246]">
        Zen 2.0 (Ongoing)
      </h1>
      <div class="flex w-full my-6">
        <div class="lg:w-2/3">
          <h1 class="text-2xl py-3 font-lato text-[#ff6246]">Wait!! What?</h1>
          Welcome to <span class="text-[#ff6246]">Zen 2.0</span>, a vibrant
          exhibition of talent and innovation. This event offers a varied range
          of tasks for  creators, and gamers alike. Join us for an exciting day
          of learning and networking. Zen 2.0 is your canvas to shine, so mark
          your calendars and join us on this wonderful trip! 🌐✨
        </div>
        <!-- <div
          class="flex flex-col items-center w-full px-6 py-8 lg:flex-row lg:px-8 font-lato lg:justify-between">
          <div class="flex lg:w-[60%] font-lato flex-col">
            <p
              class="my-4 text-xl font-semibold text-center lg:text-justify lg:mr-16">
              📢 Registrations Closed 📢
            </p>
            <p class="my-4 text-xl text-justify lg:mr-16">
              Thank you to everyone who registered for our events at
              <span class="text-primary"> EventZen 3.0</span>! We’re thrilled to
              have so many participants onboard.
            </p>
            <p
              class="mt-2 text-lg italic text-justify lg:text-justify lg:mr-16">
              <span class="mt-2 font-bold">⚠️Note: </span>The rules for every
              event are provided on our Instagram handle. All event submissions
              are due by November 3rd. Please make sure to submit your entries
              on time to be considered for evaluation.
            </p>
            <p
              class="text-xl font-semibold text-center lg:text-start w-fit bg-[#FEE7D8] py-2 px-6 rounded-full mt-8 lg:mr-16">
              ⏰ Deadline: 3rd November 2024
            </p>
          </div>
          <div class="flex flex-col items-center lg:w-[40%]">
            <img
              src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1730056572/Group_3522-removebg-preview_1_anans7.png"
              class="w-full" />
          </div>
        </div> -->
      </div>
    </div>
    <!-- <p class="mt-12 text-xl font-semibold text-center">
      Results will be displayed soon...!
    </p> -->

    <div
      class="grid w-full grid-flow-row grid-cols-1 gap-6 px-6 mt-3 lg:gap-6 lg:px-8 md:grid-cols-3">
      <div v-for="(event, index) in data" :key="index" class="w-full">
        <NuxtLink :to="`/events/zen2/${event._id}`">
          <EventCard :event="event" data-aos="zoom-in" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
