import { _ as __nuxt_component_0 } from "./nuxt-link--dfK6dSA.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-4xl md:text-7xl text-center font-rampart pt-24 lg:pt-8 text-[#ff6246]"> EventZen3.0 </h1><div class="flex flex-col items-center justify-center w-full px-6 my-8 text-center"><h1 class="text-3xl md:text-4xl text-[#ff6246] font-semibold"> Hurray!! </h1><h1 class="my-4 text-2xl font-semibold"> You have successfully registered for this event </h1><h1 class="text-xl text-gray-800"> (Kindly please check your confirmation mail in your mailbox) </h1><img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1706837382/hurrayImg_y5ymi9.png" class="md:w-1/3">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="bg-[#ff6246] px-6 py-2 rounded my-4 text-white"${_scopeId}> Go home </button>`);
      } else {
        return [
          createVNode("button", { class: "bg-[#ff6246] px-6 py-2 rounded my-4 text-white" }, " Go home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const success = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  success as default
};
//# sourceMappingURL=success-SkcUjARY.js.map
