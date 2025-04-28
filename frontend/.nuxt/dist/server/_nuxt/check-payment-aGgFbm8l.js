import { _ as __nuxt_component_0$1 } from "./nuxt-link--dfK6dSA.js";
import { withCtx, createVNode, useSSRContext, defineComponent, reactive, withAsyncContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, u as useRoute, a as useRuntimeConfig } from "../server.mjs";
import { u as useFetch } from "./fetch-fm8nEad-.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
import "klona";
import "devalue";
import "aos";
import "ohash";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-4xl md:text-7xl text-center font-rampart pt-8 lg:pt-8 text-[#ff6246]"> EventZen2.0 </h1><div class="flex flex-col items-center justify-center w-full px-6 my-12 text-center"><h1 class="text-3xl md:text-4xl text-[#ff6246] font-semibold">Hurray!! </h1><h1 class="my-4 text-2xl font-semibold">You have successfully registered for this event </h1><h1 class="text-xl text-gray-800">(Kindly please check your spam session of email for your confirmation)</h1><img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1706837382/hurrayImg_y5ymi9.png" class="md:w-1/3">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="bg-[#ff6246] px-6 py-2 rounded my-4 text-white"${_scopeId}>Go home</button>`);
      } else {
        return [
          createVNode("button", { class: "bg-[#ff6246] px-6 py-2 rounded my-4 text-white" }, "Go home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaymentSuccess.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PaymentUnsuccess",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String,
      required: false,
      default: "Something went wrong"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="sm:text-5xl text-center font-rampart lg:pt-8 text-[#ff6246]"> EventZen2.0 </h1><div class="flex flex-col items-center justify-center w-full px-6 my-12 text-center"><h1 class="text-3xl md:text-4xl text-[#ff6246] font-semibold">Oh no!!</h1><h1 class="my-4 text-2xl font-semibold">${ssrInterpolate(props.message.charAt(0).toUpperCase() + props.message.slice(1))}</h1><h1 class="text-xl text-gray-800">(Kindly please recheck your process )</h1><img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1708430666/image_42-removebg-preview_arwuuu.png" class="md:w-1/3">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="bg-[#ff6246] px-6 py-2 rounded my-4 text-white"${_scopeId}>Go home</button>`);
          } else {
            return [
              createVNode("button", { class: "bg-[#ff6246] px-6 py-2 rounded my-4 text-white" }, "Go home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaymentUnsuccess.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "check-payment",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const formdata = new FormData();
    formdata.append("ticket_id", route.query.ticket_id);
    const data = reactive({
      status: false,
      pending: true
    });
    const { data: payment, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${useRuntimeConfig().public.base_url}${useRuntimeConfig().public.url_prefix}/public/event/${route.query.event_id}/confirm/${route.query.registration_id}`,
      {
        method: `POST`,
        headers: {
          "accept": "application/json"
        },
        body: formdata
      },
      "$aNDp5wNKXo"
    )), __temp = await __temp, __restore(), __temp);
    if (payment.value) {
      if (payment.value.data.hasOwnProperty("payment_status")) {
        if (payment.value.data.payment_status == "COMPLETED") {
          data.status = true;
        }
      } else {
        data.status = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PaymentSuccess = __nuxt_component_0;
      const _component_PaymentUnsuccess = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="pt-16 text-2xl md:pt-0">`);
      if (!unref(pending)) {
        _push(`<div>`);
        if (unref(data).status == true) {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_PaymentSuccess, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div>`);
          if (!unref(payment)) {
            _push(`<div>`);
            _push(ssrRenderComponent(_component_PaymentUnsuccess, {
              message: unref(error).data.error
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<div>`);
            _push(ssrRenderComponent(_component_PaymentUnsuccess, null, null, _parent));
            _push(`</div>`);
          }
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div> Loading </div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/check-payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=check-payment-aGgFbm8l.js.map
