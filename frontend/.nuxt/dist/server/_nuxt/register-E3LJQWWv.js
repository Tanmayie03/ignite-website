import { u as useRoute, a as useRuntimeConfig } from "../server.mjs";
import { u as useFetch } from "./fetch-fm8nEad-.js";
import { withAsyncContext, reactive, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { load } from "@cashfreepayments/cashfree-js";
import vSelect from "vue-select";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "aos";
import "ohash";
const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    [__temp, __restore] = withAsyncContext(() => load({
      mode: "production"
      //or production
    })), __temp = await __temp, __restore(), __temp;
    const route = useRoute();
    const {
      data: event,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${useRuntimeConfig().public.base_url}${useRuntimeConfig().public.url_prefix}/public/event/` + route.params.id,
      "$V4JSKSVI2H"
    )), __temp = await __temp, __restore(), __temp);
    const data = reactive({
      name: "",
      email: "",
      phone: "",
      gender: ""
    });
    reactive({});
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-lato" }, _attrs))}><div class="flex items-center justify-center"><h1 class="font-rampart text-center text-[#ff6246] text-5xl lg:text-7xl capitalize pt-20 lg:pt-6">${ssrInterpolate(unref(event).data.name)}</h1></div><div class="flex flex-col items-center justify-center mt-6 lg:mt-0 lg:flex-row"><div class="flex flex-col mx-4 md:mt-6 md:mx-0 lg:mt-0 lg:mr-12"><div class="flex items-center justify-between w-full"><h1 class="my-4 text-lg text-black"><span class="mr-1 font-semibold">Start Date:</span> ${ssrInterpolate(unref(event).data.starts_from.slice(0, 10))}</h1><h1 class="my-4 text-lg text-black"><span class="mr-1 font-semibold">Time:</span> ${ssrInterpolate(unref(event).data.starts_from.slice(-5))}</h1></div><img${ssrRenderAttr("src", (_b = (_a = unref(event)) == null ? void 0 : _a.data.images[0]) == null ? void 0 : _b.url)} class="md:w-[500px] w-full"><h1 class="md:w-[500px] text-md tracking-wide mt-4"><span class="text-lg font-bold">Note:-</span> Please wait until the website automatically redirects to the page after payment to receive your confirmation email. For your convenience, please utilise two payment devices. </h1></div><div class=""><form class="relative flex flex-col items-start lg:mx-0 rounded-lg bg-[#FFDDD1] my-6 md:my-12 px-8 py-6"><div class="flex flex-col items-start my-1"><label for="Name" class="font-bold">Name: <span class="text-orange-500">*</span><span class="font-light text-gray-600"> (This name will be displayed on your certificate)</span></label><input required class="py-2 px-4 rounded-sm my-3 outline-none bg-opacity-80 bg-white w-[300px] lg:w-[500px]" placeholder="Your Name"${ssrRenderAttr("value", unref(data).name)}></div><div class="flex flex-col items-start my-1"><label for="Name" class="font-bold">Email: <span class="text-orange-500">*</span></label><input required type="email" class="py-2 px-4 rounded-sm my-3 outline-none bg-opacity-80 bg-white w-[300px] lg:w-[500px]" placeholder="youremail@gmail.com"${ssrRenderAttr("value", unref(data).email)}></div><div class="flex flex-col items-start my-1"><label for="Name" class="font-bold">Phone: <span class="text-orange-500">*</span></label><input required type="tel" pattern="[1-9]{1}[0-9]{9}" class="py-2 px-4 rounded-sm my-3 outline-none bg-opacity-80 bg-white w-[300px] lg:w-[500px]" placeholder="eg: 9999999999"${ssrRenderAttr("value", unref(data).phone)}></div><div class="flex flex-col items-start w-full my-1"><label for="Name" class="font-bold">Gender:</label>`);
      _push(ssrRenderComponent(unref(vSelect), {
        label: "name",
        placeholder: "Please select your Gender",
        required: "",
        class: "w-full py-2 text-sm text-gray-900 rounded-md",
        modelValue: unref(data).gender,
        "onUpdate:modelValue": ($event) => unref(data).gender = $event,
        options: ["Male", "Female"]
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-between w-full my-2"><p class="my-2 font-semibold md:text-xl"> Total Price:- ₹${ssrInterpolate(unref(event).data.tickets[0].price)}/- </p><button class="${ssrRenderClass([unref(isLoading) ? "bg-gray-300" : "bg-[#FF6246]", "flex justify-between px-2 py-2 text-white rounded-md w-fit md:px-6"])}"${ssrIncludeBooleanAttr(unref(isLoading) ? true : false) ? " disabled" : ""}><span> Proceed to pay </span><div class="${ssrRenderClass([unref(isLoading) ? "block" : "hidden", "ml-2"])}"><div class="spinner"></div></div></button></div><h1 class="lg:w-[500px] mt-2 text-lg text-red-500"> Note:- After making your payment please wait until you are automatically redirected to the website. </h1></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/zen2/[id]/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=register-E3LJQWWv.js.map
