  
  <script setup>
  
  defineProps({
    member: Object
  });
  </script>
<template>
    <div class="">

      <div class="">
        <div class="flex w-[264px] justify-center items-center flex-col">
          <div class="overflow-hidden w-[264px] rounded-lg">
            <img
              :src="member.image"
              class="w-[264px] rounded-xl duration-500 hover:scale-110" />
          </div>
          <p class="text-[24px] pt-4 text-[#585858] font-bold">{{ member.name }}</p>
          <p class="text-[#CA8D66]">{{ member.position }}</p>
      
          
          <div class="flex justify-center">
                      <div
                        v-for="(social, index) in member.socialMedia"
                        :key="index"
                        class="flex justify-center"
                      >
                        <div class="flex justify-center">
                          <a target="_blank" :href="social.website"
                            ><img :src="social.websiteicon" class="mt-[2px]"
                          /></a>
                          <a target="_blank" :href="social.linkedIn"
                            ><img :src="social.linkedInicon" class="mx-[2px]"
                          /></a>
                          <a target="_blank" :href="social.twitter"
                            ><img :src="social.twittericon" class=""
                          /></a>
                          <a target="_blank" :href="social.instagram"
                            ><img :src="social.instagramicon" class=""
                          /></a>
                        </div>
                      </div>
                    </div>
        </div>
      </div>
    </div>
  </template>
