import { _ as __nuxt_component_0$1 } from './nuxt-link--dfK6dSA.mjs';
import { useSSRContext, mergeProps, ref, withCtx, createVNode, unref, createTextVNode, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main$2 = {
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const threeel = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed z-50 hidden h-screen lg:block"><div class="flex flex-col items-center xl:justify-center py-[140px] bg-primary absolute z-50 item-center w-[96px] h-screen">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["underline-offset-8 decoration-white hover:underline", {
          "underline-offset-8 underline  decoration-white": _ctx.$route.path === "/" && !_ctx.$route.hash
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-[#FFF4F0] text-[18px] w-fit tracking-wider -rotate-90 py-10"${_scopeId}> HOME </p>`);
          } else {
            return [
              createVNode("p", { class: "text-[#FFF4F0] text-[18px] w-fit tracking-wider -rotate-90 py-10" }, " HOME ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Explore",
        class: ["underline-offset-8 decoration-white hover:underline", {
          "underline-offset-8 underline  decoration-white": _ctx.$route.path === "/Explore"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-[#FFF4F0] text-[18px] w-fit tracking-wider -rotate-90 py-10"${_scopeId}> ABOUT </p>`);
          } else {
            return [
              createVNode("p", { class: "text-[#FFF4F0] text-[18px] w-fit tracking-wider -rotate-90 py-10" }, " ABOUT ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/events",
        class: ["underline-offset-8 decoration-white hover:underline", {
          "underline-offset-8 underline  decoration-white": _ctx.$route.path === "/events"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-[#FFF4F0] text-[18px] w-fit tracking-wider -rotate-90 py-10"${_scopeId}> EVENTS </p>`);
          } else {
            return [
              createVNode("p", { class: "text-[#FFF4F0] text-[18px] w-fit tracking-wider -rotate-90 py-10" }, " EVENTS ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#team",
        class: ["underline-offset-8 decoration-white hover:underline", {
          "underline-offset-8 underline  decoration-white": _ctx.$route.hash === "#team"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="z-50 text-[#FFF4F0] no-underline underline-offset-8 hover:underline ease-in-out transition text-[18px] w-fit tracking-wider -rotate-90 py-10"${_scopeId}> TEAM </p>`);
          } else {
            return [
              createVNode("p", { class: "z-50 text-[#FFF4F0] no-underline underline-offset-8 hover:underline ease-in-out transition text-[18px] w-fit tracking-wider -rotate-90 py-10" }, " TEAM ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#contactpg",
        class: ["underline-offset-8 decoration-white hover:underline", {
          "underline-offset-8 underline  decoration-white": _ctx.$route.hash === "#contactpg"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-[#FFF4F0] text-[18px] -rotate-90 w-fit tracking-wider py-10"${_scopeId}> CONNECT </p>`);
          } else {
            return [
              createVNode("p", { class: "text-[#FFF4F0] text-[18px] -rotate-90 w-fit tracking-wider py-10" }, " CONNECT ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><button class="absolute top-0 left-0 lg:hidden"><div class="fixed z-50 flex items-center justify-between w-screen h-16 px-6 bg-[#fdded3]/20 backdrop-blur-md"><svg xmlns="http://www.w3.org/2000/svg" class="w-6" width="100" height="80" viewBox="0 0 100 80"><rect width="100" height="10" rx="5" fill="text-[#FF6246]"></rect><rect y="35" width="100" height="10" rx="5" fill="text-[#FF6246]"></rect><rect y="70" width="100" height="10" rx="5" fill="text-[#FF6246]"></rect></svg>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1708107501/igniteFire_qezll2.png" class="h-10 w-9"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "https://res.cloudinary.com/dy7zpv1ij/image/upload/v1708107501/igniteFire_qezll2.png",
                class: "h-10 w-9"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      if (unref(threeel)) {
        _push(`<div class="fixed top-0 z-10 w-[100%] lg:w-[100%] transition-transform duration-700 h-full"${ssrRenderAttr("overlay", false)} prevent><div class="absolute top-0 left-0 w-full h-screen -z-10 bg-[#ff6246a4] backdrop-blur-lg"></div>`);
        if (unref(threeel)) {
          _push(`<div class="z-10 flex flex-col justify-center h-screen p-2 py-4 font-bold text-white">`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h1 class="px-6 py-6 text-xl"${_scopeId}>Home</h1>`);
              } else {
                return [
                  createVNode("h1", { class: "px-6 py-6 text-xl" }, "Home")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/Explore" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h1 class="px-6 py-6 text-xl"${_scopeId}>About</h1>`);
              } else {
                return [
                  createVNode("h1", { class: "px-6 py-6 text-xl" }, "About")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/events" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h1 class="px-6 py-6 text-xl no-underline underline-offset-8 hover:underline"${_scopeId}> Events </h1>`);
              } else {
                return [
                  createVNode("h1", { class: "px-6 py-6 text-xl no-underline underline-offset-8 hover:underline" }, " Events ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/#team" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h1 class="px-6 py-6 text-xl no-underline underline-offset-8 hover:underline"${_scopeId}> Team </h1>`);
              } else {
                return [
                  createVNode("h1", { class: "px-6 py-6 text-xl no-underline underline-offset-8 hover:underline" }, " Team ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/#contactpg" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h1 class="px-6 py-6 text-xl no-underline underline-offset-8 hover:underline"${_scopeId}> Contact Us </h1>`);
              } else {
                return [
                  createVNode("h1", { class: "px-6 py-6 text-xl no-underline underline-offset-8 hover:underline" }, " Contact Us ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></button></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="border-t-2 flex md:flex-row flex-col md:items-center justify-between border-[#FFCDAD] mt-12 py-4 px-6 lg:px-12"><p class="text-sm sm:text-base hidden md:block text-[#CA8D66]"> Built by Team Ignite &amp; `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://www.ortigan.com/",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="hover:underline"${_scopeId}>Ortigan Technologies</span>`);
      } else {
        return [
          createVNode("span", { class: "hover:underline" }, "Ortigan Technologies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><div class="flex md:flex-row my-2 md:my-0 flex-col text-[#CA8D66]">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/PrivacyPolicy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="flex text-md md:text-sm"${_scopeId}>Privacy policy <span class="hidden px-1 md:block"${_scopeId}>|</span></p>`);
      } else {
        return [
          createVNode("p", { class: "flex text-md md:text-sm" }, [
            createTextVNode("Privacy policy "),
            createVNode("span", { class: "hidden px-1 md:block" }, "|")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/Terms" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="flex text-md md:text-sm"${_scopeId}>Terms&amp;Conditions <span class="hidden px-1 md:block"${_scopeId}>|</span></p>`);
      } else {
        return [
          createVNode("p", { class: "flex text-md md:text-sm" }, [
            createTextVNode("Terms&Conditions "),
            createVNode("span", { class: "hidden px-1 md:block" }, "|")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/CancelPolicy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="flex text-md md:text-sm"${_scopeId}>Cancellation policy </p>`);
      } else {
        return [
          createVNode("p", { class: "flex text-md md:text-sm" }, "Cancellation policy ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><p class="text-md md:hidden mb-4 sm:text-lg text-[#CA8D66]"> Built by Team Ignite &amp; `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://www.ortigan.com/",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="hover:underline"${_scopeId}>Ortigan Technologies</span>`);
      } else {
        return [
          createVNode("span", { class: "hover:underline" }, "Ortigan Technologies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><div class="flex">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: " https://www.instagram.com/we_ignites/",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 51 51" fill="none" class="mr-2 md:mr-0 md:mx-2"${_scopeId}><path d="M25.5015 18.8955C21.9178 18.9372 19.0272 21.8959 19.069 25.4796C19.1107 29.0634 22.0694 31.9539 25.6531 31.9122C29.2369 31.8704 32.1274 28.9118 32.0857 25.328C32.0439 21.7443 29.0852 18.8537 25.5015 18.8955ZM45.0975 25.1765C45.0661 22.4813 45.0594 19.8103 44.8767 17.1218C44.6889 13.9988 43.9438 11.2339 41.6322 8.97548C39.3156 6.71227 36.539 6.03656 33.4125 5.9216C30.7156 5.80164 28.0451 5.85716 25.3549 5.8885C22.6597 5.91989 19.9888 5.92659 17.3003 6.10928C14.1772 6.29704 11.4123 7.04218 9.15391 9.3538C6.8907 11.6704 6.21499 14.447 6.10003 17.5735C5.98006 20.2704 6.03559 22.9408 6.06692 25.6311C6.09826 28.3213 6.10501 30.9972 6.28771 33.6857C6.47546 36.8087 7.22061 39.5737 9.53222 41.8321C11.8488 44.0953 14.6254 44.771 17.7519 44.8859C20.4488 45.0059 23.1193 44.9504 25.8095 44.9191C28.5046 44.8877 31.1756 44.881 33.8641 44.6983C36.9872 44.5105 39.7521 43.7654 42.0105 41.4537C44.2737 39.1372 44.9494 36.3606 45.0644 33.234C45.1893 30.542 45.1289 27.8716 45.0975 25.1765ZM25.694 35.4178C20.1523 35.4823 15.6279 31.0621 15.5633 25.5205C15.4988 19.9789 19.9191 15.4544 25.4607 15.3899C31.0023 15.3253 35.5267 19.7456 35.5913 25.2872C35.6558 30.8288 31.2356 35.3533 25.694 35.4178ZM35.9072 17.197C34.6134 17.2121 33.5564 16.1794 33.5413 14.8856C33.5262 13.5917 34.5589 12.5347 35.8528 12.5196C37.1466 12.5045 38.2036 13.5372 38.2187 14.8311C38.2227 15.1383 38.166 15.4433 38.0519 15.7286C37.9378 16.0139 37.7686 16.2738 37.5538 16.4936C37.3391 16.7134 37.0832 16.8887 36.8006 17.0094C36.5181 17.1301 36.2145 17.1938 35.9072 17.197Z" fill="#CA8D66"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "40",
            height: "40",
            viewBox: "0 0 51 51",
            fill: "none",
            class: "mr-2 md:mr-0 md:mx-2"
          }, [
            createVNode("path", {
              d: "M25.5015 18.8955C21.9178 18.9372 19.0272 21.8959 19.069 25.4796C19.1107 29.0634 22.0694 31.9539 25.6531 31.9122C29.2369 31.8704 32.1274 28.9118 32.0857 25.328C32.0439 21.7443 29.0852 18.8537 25.5015 18.8955ZM45.0975 25.1765C45.0661 22.4813 45.0594 19.8103 44.8767 17.1218C44.6889 13.9988 43.9438 11.2339 41.6322 8.97548C39.3156 6.71227 36.539 6.03656 33.4125 5.9216C30.7156 5.80164 28.0451 5.85716 25.3549 5.8885C22.6597 5.91989 19.9888 5.92659 17.3003 6.10928C14.1772 6.29704 11.4123 7.04218 9.15391 9.3538C6.8907 11.6704 6.21499 14.447 6.10003 17.5735C5.98006 20.2704 6.03559 22.9408 6.06692 25.6311C6.09826 28.3213 6.10501 30.9972 6.28771 33.6857C6.47546 36.8087 7.22061 39.5737 9.53222 41.8321C11.8488 44.0953 14.6254 44.771 17.7519 44.8859C20.4488 45.0059 23.1193 44.9504 25.8095 44.9191C28.5046 44.8877 31.1756 44.881 33.8641 44.6983C36.9872 44.5105 39.7521 43.7654 42.0105 41.4537C44.2737 39.1372 44.9494 36.3606 45.0644 33.234C45.1893 30.542 45.1289 27.8716 45.0975 25.1765ZM25.694 35.4178C20.1523 35.4823 15.6279 31.0621 15.5633 25.5205C15.4988 19.9789 19.9191 15.4544 25.4607 15.3899C31.0023 15.3253 35.5267 19.7456 35.5913 25.2872C35.6558 30.8288 31.2356 35.3533 25.694 35.4178ZM35.9072 17.197C34.6134 17.2121 33.5564 16.1794 33.5413 14.8856C33.5262 13.5917 34.5589 12.5347 35.8528 12.5196C37.1466 12.5045 38.2036 13.5372 38.2187 14.8311C38.2227 15.1383 38.166 15.4433 38.0519 15.7286C37.9378 16.0139 37.7686 16.2738 37.5538 16.4936C37.3391 16.7134 37.0832 16.8887 36.8006 17.0094C36.5181 17.1301 36.2145 17.1938 35.9072 17.197Z",
              fill: "#CA8D66"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: " https://github.com/IgniteStudentAssociation",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 52 51" fill="none" class="mr-2 md:mr-0 md:mx-2"${_scopeId}><path d="M25.9137 4.5718C23.178 4.60366 20.4754 5.17405 17.9601 6.25039C15.4449 7.32674 13.1663 8.88795 11.2544 10.8449C7.39315 14.7972 5.26009 20.1214 5.32444 25.6464C5.4317 34.8541 11.5015 42.5964 19.804 45.2707C20.8475 45.4252 21.1733 44.7756 21.1668 44.2131L21.1258 40.6925C15.3699 42.0096 14.0937 37.9826 14.0937 37.9826C13.1073 35.5772 11.7457 34.9472 11.7457 34.9472C9.83496 33.6777 11.877 33.6956 11.877 33.6956C13.9619 33.8172 15.0893 35.8042 15.0893 35.8042C16.9385 38.9495 19.9899 37.9764 21.1715 37.4626C21.3432 36.1063 21.8741 35.1834 22.4514 34.6558C17.8206 34.1889 12.9459 32.4539 12.8535 24.5169C12.8265 22.2046 13.5965 20.3413 14.9334 18.8465C14.719 18.3281 13.9647 16.1701 15.0777 13.3444C15.0777 13.3444 16.821 12.7616 20.8312 15.4026C22.4716 14.9251 24.2604 14.6751 26.0312 14.6544C27.8019 14.6338 29.5961 14.8421 31.2471 15.2812C35.1947 12.5476 36.9512 13.0897 36.9512 13.0897C38.1297 15.8886 37.4258 18.0636 37.2236 18.5869C38.5949 20.0501 39.4081 21.895 39.435 24.2073C39.5277 32.1651 34.6734 33.9718 30.034 34.5467C30.7914 35.1837 31.4937 36.4465 31.5162 38.3838L31.5827 44.0918C31.5893 44.6542 31.9304 45.317 32.9906 45.1171C41.2284 42.2293 47.0955 34.3688 46.9883 25.1611C46.9564 22.4254 46.386 19.7228 45.3097 17.2075C44.2333 14.6923 42.6721 12.4136 40.7152 10.5017C38.7582 8.58985 36.4439 7.08214 33.9042 6.06467C31.3646 5.04721 28.6494 4.53993 25.9137 4.5718Z" fill="#CA8D66"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "40",
            height: "40",
            viewBox: "0 0 52 51",
            fill: "none",
            class: "mr-2 md:mr-0 md:mx-2"
          }, [
            createVNode("path", {
              d: "M25.9137 4.5718C23.178 4.60366 20.4754 5.17405 17.9601 6.25039C15.4449 7.32674 13.1663 8.88795 11.2544 10.8449C7.39315 14.7972 5.26009 20.1214 5.32444 25.6464C5.4317 34.8541 11.5015 42.5964 19.804 45.2707C20.8475 45.4252 21.1733 44.7756 21.1668 44.2131L21.1258 40.6925C15.3699 42.0096 14.0937 37.9826 14.0937 37.9826C13.1073 35.5772 11.7457 34.9472 11.7457 34.9472C9.83496 33.6777 11.877 33.6956 11.877 33.6956C13.9619 33.8172 15.0893 35.8042 15.0893 35.8042C16.9385 38.9495 19.9899 37.9764 21.1715 37.4626C21.3432 36.1063 21.8741 35.1834 22.4514 34.6558C17.8206 34.1889 12.9459 32.4539 12.8535 24.5169C12.8265 22.2046 13.5965 20.3413 14.9334 18.8465C14.719 18.3281 13.9647 16.1701 15.0777 13.3444C15.0777 13.3444 16.821 12.7616 20.8312 15.4026C22.4716 14.9251 24.2604 14.6751 26.0312 14.6544C27.8019 14.6338 29.5961 14.8421 31.2471 15.2812C35.1947 12.5476 36.9512 13.0897 36.9512 13.0897C38.1297 15.8886 37.4258 18.0636 37.2236 18.5869C38.5949 20.0501 39.4081 21.895 39.435 24.2073C39.5277 32.1651 34.6734 33.9718 30.034 34.5467C30.7914 35.1837 31.4937 36.4465 31.5162 38.3838L31.5827 44.0918C31.5893 44.6542 31.9304 45.317 32.9906 45.1171C41.2284 42.2293 47.0955 34.3688 46.9883 25.1611C46.9564 22.4254 46.386 19.7228 45.3097 17.2075C44.2333 14.6923 42.6721 12.4136 40.7152 10.5017C38.7582 8.58985 36.4439 7.08214 33.9042 6.06467C31.3646 5.04721 28.6494 4.53993 25.9137 4.5718Z",
              fill: "#CA8D66"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: " https://www.linkedin.com/company/ignite-student-association ",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 41 44" fill="none" class="mt-1 mr-2 md:mr-0 md:mx-2"${_scopeId}><path d="M0.473627 3.76123C0.453874 2.06546 1.75278 0.675846 3.37517 0.656948L37.4979 0.25948C39.1202 0.240582 40.4512 1.59956 40.4709 3.29533L40.8987 40.0183C40.9184 41.714 39.6195 43.1037 37.9971 43.1226L3.87444 43.52C2.25205 43.5389 0.921136 42.1799 0.901384 40.4842L0.473627 3.76123ZM13.2125 36.429L12.987 17.0736L6.98494 17.1435L7.21039 36.4989L13.2125 36.429ZM9.95644 14.4645C12.0488 14.4401 13.3339 12.9408 13.3123 11.0816C13.2526 9.18265 11.9734 7.75341 9.91855 7.77734C7.86368 7.80128 6.53813 9.26355 6.56022 11.1602C6.58188 13.0194 7.90157 14.4884 9.91644 14.4649L9.95644 14.4645ZM22.4819 36.321L22.3559 25.5115C22.3492 24.9328 22.3825 24.3537 22.5376 23.9393C22.9567 22.7796 23.9302 21.5706 25.59 21.5513C27.7624 21.526 28.6505 23.2894 28.6808 25.8933L28.8014 36.2474L34.8035 36.1775L34.6742 25.0759C34.6049 19.1287 31.6129 16.3985 27.6632 16.4445C24.4784 16.4816 23.0729 18.3735 22.2883 19.7035L22.2891 19.7705L22.2491 19.771L22.2883 19.7035L22.2564 16.9657L16.2568 17.0355C16.353 18.851 16.4823 36.3909 16.4823 36.3909L22.4819 36.321Z" fill="#CA8D66"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "33",
            height: "33",
            viewBox: "0 0 41 44",
            fill: "none",
            class: "mt-1 mr-2 md:mr-0 md:mx-2"
          }, [
            createVNode("path", {
              d: "M0.473627 3.76123C0.453874 2.06546 1.75278 0.675846 3.37517 0.656948L37.4979 0.25948C39.1202 0.240582 40.4512 1.59956 40.4709 3.29533L40.8987 40.0183C40.9184 41.714 39.6195 43.1037 37.9971 43.1226L3.87444 43.52C2.25205 43.5389 0.921136 42.1799 0.901384 40.4842L0.473627 3.76123ZM13.2125 36.429L12.987 17.0736L6.98494 17.1435L7.21039 36.4989L13.2125 36.429ZM9.95644 14.4645C12.0488 14.4401 13.3339 12.9408 13.3123 11.0816C13.2526 9.18265 11.9734 7.75341 9.91855 7.77734C7.86368 7.80128 6.53813 9.26355 6.56022 11.1602C6.58188 13.0194 7.90157 14.4884 9.91644 14.4649L9.95644 14.4645ZM22.4819 36.321L22.3559 25.5115C22.3492 24.9328 22.3825 24.3537 22.5376 23.9393C22.9567 22.7796 23.9302 21.5706 25.59 21.5513C27.7624 21.526 28.6505 23.2894 28.6808 25.8933L28.8014 36.2474L34.8035 36.1775L34.6742 25.0759C34.6049 19.1287 31.6129 16.3985 27.6632 16.4445C24.4784 16.4816 23.0729 18.3735 22.2883 19.7035L22.2891 19.7705L22.2491 19.771L22.2883 19.7035L22.2564 16.9657L16.2568 17.0355C16.353 18.851 16.4823 36.3909 16.4823 36.3909L22.4819 36.321Z",
              fill: "#CA8D66"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/foot.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_navbar = __nuxt_component_0;
  const _component_Foot = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_navbar, null, null, _parent));
  _push(`<div class="pr-0 lg:pl-24 bg-background">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Foot, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-xEp7XozA.mjs.map
