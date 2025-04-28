import { _ as __nuxt_component_0 } from './nuxt-link--dfK6dSA.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-fm8nEad-.mjs';
import { a as useRuntimeConfig } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "eventCard",
  __ssrInlineRender: true,
  props: {
    event: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full rounded border-2 border-primary bg-[#ffefe4]"><div class="flex flex-row items-center justify-start p-3 space-x-2 border-b border-primary"><div class="w-6 text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"></path></svg></div><div>${ssrInterpolate(__props.event.starts_from.slice(0, 10))}</div></div><img${ssrRenderAttr("src", (_b = (_a = __props.event) == null ? void 0 : _a.images[0]) == null ? void 0 : _b.url)} alt="" class="w-full"><div class="flex items-center justify-start p-3 space-x-2 border-t border-primary"><div class="w-6 text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"></path></svg></div><div class="capitalize">Online</div></div><div class="flex justify-between p-3 border-t border-primary"><div class="text-lg font-semibold capitalize sm:text-xl">${ssrInterpolate(__props.event.title)}</div><div class="text-xl font-semibold">\u20B9${ssrInterpolate(__props.event.ticket_price)} /-</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/eventCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${useRuntimeConfig().public.base_url}${useRuntimeConfig().public.url_prefix}/public/events`,
      "$fULDD618S5"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_EventCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full font-lato" }, _attrs))}><div class="px-6 lg:pl-8"><h1 class="text-5xl pt-20 md:text-6xl text-center font-rampart lg:pt-8 text-[#ff6246]"> Zen 2.0 (Ongoing) </h1><div class="flex w-full my-6"><div class="lg:w-2/3"><h1 class="text-2xl py-3 font-lato text-[#ff6246]">Wait!! What?</h1> Welcome to <span class="text-[#ff6246]">Zen 2.0</span>, a vibrant exhibition of talent and innovation. This event offers a varied range of tasks for\xA0\xA0creators, and gamers alike. Join us for an exciting day of learning and networking. Zen 2.0 is your canvas to shine, so mark your calendars and join us on this wonderful trip! \u{1F310}\u2728 </div></div></div><div class="grid w-full grid-flow-row grid-cols-1 gap-6 px-6 mt-3 lg:gap-6 lg:px-8 md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(data), (event, index) => {
        _push(`<div class="w-full">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/events/zen2/${event._id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_EventCard, {
                event,
                "data-aos": "zoom-in"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_EventCard, {
                  event,
                  "data-aos": "zoom-in"
                }, null, 8, ["event"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/zen2/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-II967EYT.mjs.map
