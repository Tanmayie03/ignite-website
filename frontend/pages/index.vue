<script setup>
import members from "/members.json";
import event from "/events.json";
import { useToast } from "vue-toastification";
const toast = useToast();
// function showToast(newMessage) {
//   toast.success("Message sent successfully", {timeout: 2000, position:"bottom-right"});
// }

const formDetails = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});
const isChatopen = ref(false);
const toggleChatbot = () => {
  isChatopen.value = !isChatopen.value;
};
const something = async () => {
  console.log(formDetails);
  const res = await fetch("https://formail-api.ortigan.dev/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apiKey: "oqB9nwO5g1nnKE6d",
    },
    body: JSON.stringify({
      body: formDetails,
    }),
  });
  console.log(res.status);
  if (res.status !== 200) {
    toast.error("Something went wrong", {
      timeout: 2000,
      position: "bottom-right",
    });
  } else {
    toast.success("Message sent successfully", {
      timeout: 2000,
      position: "bottom-right",
    });
  }
  console.log("This is something");
  formDetails.firstName = "";
  formDetails.lastName = "";
  formDetails.email = "";
  formDetails.message = "";
};
const {
  data: events,
  pending,
  error,
  refresh,
} = await useFetch(
  `https://api.ignitestudentassociation.com/api/public/events`
);
</script>
<template>
  <div>
    <div class="fixed z-50 bottom-2 right-8">
      <img
        src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1730975087/chat-bot_venq9u.png"
        class="cursor-pointer w-14"
        @click="toggleChatbot" />
    </div>
    <Chatbot v-if="isChatopen" />
    <div class="overflow-hidden bg-background">
      <div
        class="lg:flex-row md:h-screen scroll-smooth md:flex-row flex flex-col font-lato lg:h-screen justify-center w-full items-center py-16 lg:py-[72px]">
        <img
          data-aos="fade-right"
          src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1728973513/Untitled66_20240112132139_1_iwk495.png"
          class="md:w-[48%] w-[90%] md:mr-12" />
        <div
          data-aos="fade-left"
          class="flex flex-col items-center justify-center text-center md:items-start md:text-start lg:items-start lg:text-start lg:px-0">
          <div class="text-primary">
            <p
              class="text-[80px] sm:text-[80px] md:text-[96px] lg:text-[106px] leading-none font-semibold">
              Ignite
            </p>
            <p class="text-[36px] lg:text-[40px]">Student Association</p>
            <p class="text-[24px] lg:text-[35px]">MIT- Chh. Sambhajinagar</p>
          </div>
          <p class="lg:text-[20px] lg:w-[500px] py-4 lg:px-0 lg:py-7">
            Blending <span class="text-primary">Curricular </span>with
            <span class="text-primary">Extracurricular</span> activities for a
            remarkable learning journey.
          </p>
          <NuxtLink to="/Explore"
            ><button
              class="px-12 py-2 text-lg text-white rounded-lg bg-primary">
              Explore
            </button></NuxtLink
          >
        </div>
      </div>

      <div class="relative items-center w-full scroll-smooth" id="aboutpg">
        <p
          class="font-rampart flex justify-center lg:justify-end lg:pr-14 text-[76px] lg:text-[96px] text-[#FF6246]">
          ABOUT
        </p>

        <div
          class="relative flex flex-col-reverse items-center w-full lg:justify-around lg:flex-row lg:items-center">
          <div
            data-aos="fade-right"
            class="relative flex flex-col items-center md:justify-between">
            <p
              class="text-[26px] md:text-[20px] z-10 md:text-start text-center lg:text-start mt-6 md:mt-12 lg:mt-6 lg:my-0 lg:text-[40px] lg:w-[500px]">
              From <span class="text-[#FF6246]">Classroom</span> to Community:
              Where Growth Happens.
            </p>
            <img
              src="https://res.cloudinary.com/dthrgos9e/image/upload/v1705476164/ignite-assets/ivybm6nwyefgoesiewks.png"
              class="hidden -z-0 md:w-[110px] lg:block lg:w-[210px] absolute md:top-3 -top-6 xs md:left-44 left-[130px] lg:-top-[46px] lg:left-[90px]" />

            <p
              class="lg:text-[20px] sm:[100px] md:text-[16px] text-center px-4 lg:text-start md:px-0 lg:px-0 md:w-[80%] md:text-start lg:w-[490px] py-6">
              Ignite SA is a student community that boasts the most brilliant
              minds from our college. Comprising individuals from diverse
              fields, including tech area, all members possess exceptional
              skills in their respective domains and work in unison to make
              Ignite SA an exceptional entity. Our main objective is to create a
              space that nurtures self-improvement and development for our
              students, and we proudly declare ourselves as a community that is
              created, run, and dedicated to the students.
            </p>
          </div>

          <img
            data-aos="fade-left"
            src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1728973514/Untitled71_20240227225722-01_oh0nen.jpg"
            class="px-6 mt-4 md:px-0 md:w-1/2 md:mt-0 md:mb-0 lg:-mt-0" />
        </div>
      </div>

      <div class="relative" id="eventpg">
        <p
          class="font-rampart md:pl-14 text-center mt-12 lg:text-start text-[76px] lg:text-[96px] text-[#FF6246]">
          EVENT
        </p>

        <div class="bg-event-backdrop">
          <!-- <img
              src="https://res.cloudinary.com/dthrgos9e/image/upload/v1705476164/ignite-assets/evlbohl2mrkj6gnn6nxa"
              class="hidden w-full lg:block"
    
            /> -->

          <Swiper
            :modules="[SwiperAutoplay]"
            :slides-per-view="1"
            :loop="false"
            :effect="'creative'"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: true,
            }"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['100%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }">
            <SwiperSlide
              v-for="(e, index) in event"
              :key="index"
              class="w-full event-backdrop">
              <div class="flex justify-center my-2 event-backdrop">
                <CardEvents :id="e.id" :image="e.image" :text="e.text" />
                <!-- <EventCard2 :id="e.id" :image="e.image" :text="e.text" /> -->
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <!-- <p
          class="font-rampart text-center mt-12 lg:text-end lg:pr-14 text-[56px] lg:text-[96px] text-primary uppercase">
          Activities
        </p> -->

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
            <a href="https://forms.gle/ER7wwb3xBR73DMf5A">
              <button
                class="px-12 py-2 text-lg text-white rounded-lg bg-primary">
                Apply now
              </button></a
            >
          </div>
        </div> -->
        <!-- <p class="mt-4 text-xl font-semibold text-center lg:text-end lg:mr-16">
          Results will be displayed soon...!
        </p> -->
        <!-- <div
          class="grid w-full grid-flow-row grid-cols-1 gap-6 px-6 mt-3 lg:gap-6 lg:px-8 md:grid-cols-3">
          <div
            data-aos="zoom-in"
            v-for="(event, index) in events.data"
            :key="index"
            class="w-full">
            <NuxtLink :to="`/events/zen2/${event.id}`">
              <EventCard :event="event" />
            </NuxtLink>
          </div>
        </div> -->
      </div>

      <div class="relative py-6 scroll-smooth" id="team">
        <div class="py-12 lg:py-12">
          <div class="flex lg:justify-end">
            <div
              class="absolute z-10 swiper-button-prev hover:scale-110"
              style="color: #ff6246; font-weight: 600; margin-top: 12px"></div>
            <div
              class="absolute swiper-button-next hover:scale-110"
              style="color: #ff6246; font-weight: 600; margin-top: 12px"></div>
          </div>
          <p
            class="font-rampart flex justify-center lg:pl-14 lg:justify-start text-[76px] lg:text-[96px] text-[#FF6246]">
            TEAM
          </p>
          <div class="w-full">
            <Swiper
              ref="swiper"
              :modules="[SwiperAutoplay, SwiperNavigation]"
              :slides-per-view="1"
              :loop="true"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }"
              :effect="'creative'"
              :breakpoints="{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }">
              <SwiperSlide v-for="(m, index) in members" :key="index" class="">
                <div class="flex justify-center w-full py-6">
                  <MemberCard :member="m" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div class="relative" id="contactpg">
        <p
          class="font-rampart text-[72px] tracking-tighter text-center lg:text-end lg:text-[96px] lg:pr-14 leading-none text-[#FF6246]">
          CONNECT
        </p>
        <div
          class="flex flex-col items-center justify-between w-full px-4 my-4 md:px-14 lg:flex-row">
          <img
            src="https://res.cloudinary.com/dthrgos9e/image/upload/v1705476164/ignite-assets/xzakcfbsa5lgxhn9kqcf"
            class="w-full md:w-1/2 lg:-mt-12" />

          <form
            class="bg-[#FEE7D8] relative flex flex-col items-center my-6 lg:my-4 p-4 lg:p-8 rounded-md"
            @submit.prevent="something()">
            <div class="flex justify-between">
              <div class="flex flex-col mr-3 lg:my-2">
                <label class="text-[#FF6246] text-md lg:text-[20px] py-1"
                  >First Name</label
                >
                <input
                  class="h-[40px] sm:h-[40px] md:h-[45px] lg:h-[45px] rounded-md outline-none px-3 w-[135px] sm:w-[150px] md:w-[210px] lg:w-[210px]"
                  required
                  v-model="formDetails.firstName" />
              </div>
              <div class="flex flex-col ml-2 sm:ml-2 lg:my-2">
                <label class="text-[#FF6246] text-md lg:text-[20px] py-1"
                  >Last Name</label
                >
                <input
                  class="h-[40px] sm:h-[40px] md:h-[45px] lg:h-[45px] rounded-md outline-none px-3 w-[135px] sm:w-[150px] md:w-[210px] lg:w-[210px]"
                  required
                  v-model="formDetails.lastName" />
              </div>
            </div>
            <div class="flex flex-col lg:my-2">
              <label class="text-[#FF6246] text-md lg:text-[20px] py-1"
                >Email Id</label
              >
              <input
                type="email"
                size="30"
                class="h-[40px] sm:h-[40px] md:h-[45px] lg:h-[45px] rounded-md outline-none px-3 w-[290px] sm:w-[320px] md:w-[450px] lg:w-[435px]"
                required
                v-model="formDetails.email" />
            </div>
            <div class="flex flex-col justify-start lg:my-2">
              <label class="text-[#FF6246] text-md lg:text-[20px] py-1"
                >Your message</label
              >
              <!-- <input
              class="h-[180px] rounded-md outline-none px-3 w-[320px] lg:w-[450px]"
              v-model="formDetails.message"
            /> -->
              <textarea
                class="h-[180px] rounded-md outline-none p-3 w-[290px] sm:w-[320px] md:w-[450px] lg:w-[435px] resize-none"
                v-model="formDetails.message"
                required
                fixed></textarea>
            </div>
            <button
              class="bg-[#FF6246] my-4 py-2 px-4 rounded-md lg:text-[20px] text-white w-fit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div class="relative" id="contactpg">
        <p
          class="font-rampart pt-12 text-[72px] tracking-tighter text-center lg:text-start lg:text-[96px] lg:pl-12 leading-none text-[#FF6246]">
          CONTACT US
        </p>
        <div
          class="flex flex-col justify-between w-full px-4 pt-12 lg:px-16 lg:flex-row">
          <div class="flex flex-col lg:w-1/2 font-lato">
            <div class="flex flex-col py-2">
              <div class="flex items-center lg:mt-2">
                <div class="bg-[#FEE7D8] p-2 w-10 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-6 h-6 text-[#FF6246]">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                  </svg>
                </div>

                <p class="text-xl font-semibold">Email us</p>
              </div>
              <NuxtLink to="mailto:ignitestudentassociation@gmail.com">
                <div class="ml-12 text-md md:text-lg overflow-clip">
                  ignitestudentassociation@gmail.com
                </div>
              </NuxtLink>
            </div>
            <div class="flex flex-col py-2">
              <div class="flex items-center mt-2">
                <div class="bg-[#FEE7D8] p-2 w-10 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-6 h-6 text-[#FF6246]">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>

                <p class="text-xl font-semibold">Phone Number</p>
              </div>
              <div class="ml-12 text-md md:text-lg">+91-9112348575</div>
            </div>
            <div class="flex flex-col py-2">
              <div class="flex items-center lg:mt-2">
                <div class="bg-[#FEE7D8] p-2 w-10 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2 "
                    stroke="currentColor"
                    class="w-6 h-6 text-[#FF6246]">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>

                <p class="text-xl font-semibold">Address</p>
              </div>
              <div class="ml-12 text-md md:text-lg lg:pr-12">
                MIT Campus, Beed Bypass Road, Satara Village Road, Chh.
                Sambhajinagar (Aurangabad)- 431010 Maharashtra, INDIA
              </div>
            </div>
          </div>
          <div class="mx-2 my-6 lg:mx-0 lg:w-1/2 lg:my-0 h-1/2">
            <div class="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15011.116294125524!2d75.3218713!3d19.8492987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb988c254eb873%3A0x4388791935b718e6!2sMaharashtra%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1708334543339!5m2!1sen!2sin"
                class="w-full h-96"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
