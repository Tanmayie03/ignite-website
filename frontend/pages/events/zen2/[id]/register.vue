<script setup>
import { load } from "@cashfreepayments/cashfree-js";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
const cashfree = await load({
  mode: "production", //or production
});
const route = useRoute();
const {
  data: event,
  pending,
  error,
  refresh,
} = await useFetch(
  `${useRuntimeConfig().public.base_url}${
    useRuntimeConfig().public.url_prefix
  }/public/event/` + route.params.id
);
const data = reactive({
  name: "",
  email: "",
  phone: "",
  gender: "",
});
const checkoutOptions = reactive({});
const isLoading = ref(false);
async function register() {
  if (isLoading.value) {
    return;
  }
  isLoading.value = true;
  const formdata = new FormData();
  formdata.append("name", data.name);
  formdata.append("email", data.email);
  formdata.append("phone", data.phone);
  formdata.append("gender", data.gender);
  formdata.append("ticket_id", event.value.data.tickets[0].id);
  let res = await useFetch(
    `${useRuntimeConfig().public.base_url}${
      useRuntimeConfig().public.url_prefix
    }/public/event/${event.value.data.id}/register`,

    {
      method: `POST`,
      headers: {
        accept: "application/json",
      },
      body: formdata,
    }
  );

  //  console.log(res.value)
  if (event.value.data.tickets[0].type == "paid") {
    checkoutOptions.value = {
      // paymentSessionId: `session_nLUJ3Xs5ONqeCC2oOTMd2C4HUzu8PbCuRAyWwlVfaHZL8vidLxh8auqPGi_qnD1_5dpMHx7pDJa88n5VdpZJGKeeGcm9qdH64Mk3CkbklibZ`,
      // returnUrl: `http://192.168.1.75:3000/paymentStatus?id=6516aee1a75edaede50e2f9b`,
      paymentSessionId: res.data?.value?.data?.payment.payment_session_id,
      returnUrl: `${
        useRuntimeConfig().public.frontend_base
      }/check-payment?registration_id=${res.data?.value?.data.id}&event_id=${
        event.value.data.id
      }&ticket_id=${event.value.data.tickets[0].id}`,
    };
    // console.log(checkoutOptions.value)

    checkout();
  } else {
    navigateTo(
      `/check-payment?registration_id=${res.data.value.data.id}&event_id=${event.value.data.id}&ticket_id=${event.value.data.tickets[0].id}`
    );
  }
  isLoading.value = false;
}

function checkout() {
  cashfree.checkout(checkoutOptions.value).then(function (result) {
    if (result.error) {
      alert(result.error.message);
    }
    if (result.redirect) {
      console.log("Redirection");
    }
  });
}
</script>
<style>
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.spinner:after {
  content: " ";
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: #fff transparent;
  animation: spinner 1.2s linear infinite;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<template>
  <div class="font-lato">
    <!-- <div :class="!isLoading? 'hidden':'block'" class="fixed top-0 right-0 z-10 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm">
            <div class="spinner"></div>
        </div> -->
    <!-- <div class="flex flex-col items-center"> -->
    <div class="flex items-center justify-center">
      <h1
        class="font-rampart text-center text-[#ff6246] text-5xl lg:text-7xl capitalize pt-20 lg:pt-6">
        {{ event.data.name }}
      </h1>
    </div>
    <div
      class="flex flex-col items-center justify-center mt-6 lg:mt-0 lg:flex-row">
      <div class="flex flex-col mx-4 md:mt-6 md:mx-0 lg:mt-0 lg:mr-12">
        <div class="flex items-center justify-between w-full">
          <h1 class="my-4 text-lg text-black">
            <span class="mr-1 font-semibold">Start Date:</span>
            {{ event.data.starts_from.slice(0, 10) }}
          </h1>
          <h1 class="my-4 text-lg text-black">
            <span class="mr-1 font-semibold">Time:</span>
            {{ event.data.starts_from.slice(-5) }}
          </h1>
        </div>
        <img :src="event?.data.images[0]?.url" class="md:w-[500px] w-full" />
        <h1 class="md:w-[500px] text-md tracking-wide mt-4">
          <span class="text-lg font-bold">Note:-</span> Please wait until the
          website automatically redirects to the page after payment to receive
          your confirmation email. For your convenience, please utilise two
          payment devices.
        </h1>
      </div>
      <div class="">
        <form
          @submit.prevent="register()"
          class="relative flex flex-col items-start lg:mx-0 rounded-lg bg-[#FFDDD1] my-6 md:my-12 px-8 py-6">
          <div class="flex flex-col items-start my-1">
            <label for="Name" class="font-bold"
              >Name: <span class="text-orange-500">*</span>
              <span class="font-light text-gray-600">
                (This name will be displayed on your certificate)</span
              ></label
            >
            <input
              required
              class="py-2 px-4 rounded-sm my-3 outline-none bg-opacity-80 bg-white w-[300px] lg:w-[500px]"
              placeholder="Your Name"
              v-model="data.name" />
          </div>
          <div class="flex flex-col items-start my-1">
            <label for="Name" class="font-bold"
              >Email: <span class="text-orange-500">*</span></label
            >
            <input
              required
              type="email"
              class="py-2 px-4 rounded-sm my-3 outline-none bg-opacity-80 bg-white w-[300px] lg:w-[500px]"
              placeholder="youremail@gmail.com"
              v-model="data.email" />
          </div>
          <div class="flex flex-col items-start my-1">
            <label for="Name" class="font-bold"
              >Phone: <span class="text-orange-500">*</span></label
            >
            <input
              required
              type="tel"
              pattern="[1-9]{1}[0-9]{9}"
              class="py-2 px-4 rounded-sm my-3 outline-none bg-opacity-80 bg-white w-[300px] lg:w-[500px]"
              placeholder="eg: 9999999999"
              v-model="data.phone" />
          </div>
          <div class="flex flex-col items-start w-full my-1">
            <label for="Name" class="font-bold">Gender:</label>
            <v-select
              label="name"
              placeholder="Please select your Gender"
              required
              class="w-full py-2 text-sm text-gray-900 rounded-md"
              v-model="data.gender"
              :options="['Male', 'Female']">
            </v-select>
          </div>
          <div class="flex items-center justify-between w-full my-2">
            <p class="my-2 font-semibold md:text-xl">
              Total Price:- ₹{{ event.data.tickets[0].price }}/-
            </p>

            <button
              @click="addData"
              :class="isLoading ? 'bg-gray-300' : 'bg-[#FF6246]'"
              class="flex justify-between px-2 py-2 text-white rounded-md w-fit md:px-6"
              :disabled="isLoading ? true : false">
              <span> Proceed to pay </span>
              <div :class="isLoading ? 'block' : 'hidden'" class="ml-2">
                <div class="spinner"></div>
              </div>
            </button>
          </div>
          <h1 class="lg:w-[500px] mt-2 text-lg text-red-500">
            Note:- After making your payment please wait until you are
            automatically redirected to the website.
          </h1>
        </form>
      </div>
    </div>

    <!-- </div> -->
  </div>
</template>
