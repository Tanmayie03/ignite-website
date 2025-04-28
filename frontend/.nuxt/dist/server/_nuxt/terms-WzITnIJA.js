import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-6 pt-20 md:px-12 md:pt-8 md:mt-0 font-lato"><h1 class="py-4 text-4xl font-bold text-primary"> Ignite Student Association Terms &amp; Conditions </h1><div class="w-full h-[2px] my-2 bg-slate-500"></div><h1 class=""></h1><p class="py-2 text-xl font-bold text-primary"> General Terms and Conditions for Ignite Student Association Events</p><h1 class="py-2 text-lg font-semibold">1. Registration and Payment:</h1><ul class="pl-12 list-disc"><li class="py-1">By registering for an Ignite Student Association event, you agree to these terms and conditions.</li><li class="py-1">Registration fees are non-refundable unless stated otherwise in the specific event details or covered by the cancellation policy.</li><li class="py-1">You are responsible for ensuring the accuracy of your registration information.</li><li class="py-1">Payment must be made in full at the time of registration.</li></ul><h1 class="py-2 text-lg font-semibold">2. Event Participation:</h1><ul class="pl-12 list-disc"><li class="py-1">All participants must abide by the rules and regulations set forth by Ignite Student Association for each event.</li><li class="py-1">Ignite Student Association reserves the right to refuse entry or remove any participant who violates these rules or exhibits disruptive behavior.</li><li class="py-1">You are responsible for your own safety and well-being during the event.</li></ul><h1 class="py-2 text-lg font-semibold">3. Content and Intellectual Property:</h1><ul class="pl-12 list-disc"><li class="py-1">Any materials provided at the event, including presentations, handouts, and recordings, are the intellectual property of Ignite Student Association or its presenters.</li><li class="py-1">You may not distribute or copy these materials without written permission.</li></ul><h1 class="py-2 text-lg font-semibold">4. Liability:</h1><ul class="pl-12 list-disc"><li class="py-1">Ignite Student Association is not liable for any personal injury, loss, or damage incurred during an event.</li><li class="py-1">You participate at your own risk.</li></ul><h1 class="py-2 text-lg font-semibold">5. Changes and Cancellations:</h1><ul class="pl-12 list-disc"><li class="py-1">Ignite Student Association reserves the right to change or cancel an event at any time due to unforeseen circumstances or insufficient registration.</li><li class="py-1">In case of cancellation, a full refund will be issued to registered participants.</li></ul><h1 class="py-2 text-lg font-semibold">6. Privacy:</h1><ul class="pl-12 list-disc"><li class="py-1">Ignite Student Association collects personal information during registration for event management purposes.</li><li class="py-1">Your information will be kept confidential and will not be shared with third parties without your consent.</li></ul><h1 class="py-2 text-lg font-semibold">7. Contact:</h1><ul class="pl-12 list-disc"><li class="py-1">For any questions or concerns, please contact Ignite Student Association at <span class="underline">ignitestudentassociation@gmail.com</span></li></ul><h1 class="py-2 text-lg font-semibold">8. Disclaimer:</h1><li class="py-1 pl-8">These terms and conditions are subject to change without notice.</li> Note: This is a general template, and you may need to adapt it to your specific needs and the types of events you organize. It is advisable to consult with a legal professional to ensure your terms and conditions are legally sound. </div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  terms as default
};
//# sourceMappingURL=terms-WzITnIJA.js.map
