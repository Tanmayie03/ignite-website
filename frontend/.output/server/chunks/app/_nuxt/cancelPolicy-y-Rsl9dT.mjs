import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-6 pt-20 md:px-12 md:pt-8 md:mt-0 font-lato"><h1 class="py-4 text-4xl font-bold text-primary"> Ignite Student Association Cancellation Policy </h1><div class="w-full h-[2px] my-2 bg-slate-500"></div><p class="py-2 text-lg"> Ignite Student Association understands that unforeseen circumstances can arise, leading to the need to cancel your registration for an event. While our registration fees are generally non-refundable, we have established a cancellation policy to offer some flexibility in specific situations. Please understand that due to our limited budget and pre-event commitments, refunds are not guaranteed. </p><p class="py-2 text-xl font-bold text-primary"> Cancellation Request Process: </p><div class="py-2"><ol class="pl-4 list-decimal md:pl-12"><li class="py-1"> Submit a cancellation request: Contact Ignite Student Association at <span class="underline">ignitestudentassociation@gmail.com</span> at least 2 days before the event date. Briefly explain the reason for your cancellation. </li><li class="py-1"> Review and decision: The Ignite Student Association team will review your request and assess the situation. We prioritize unforeseen circumstances beyond your control. </li><li class="py-1"> Outcome notification: You will receive an email response within 5 business days notifying you of the decision: <ul class="py-4 pl-6 list-disc"><li class="py-1"> Full refund: In rare cases, a full refund may be granted for justified reasons like documented medical emergencies or extenuating circumstances. </li><li class="py-1"> Partial refund: A partial refund may be offered, considering the costs incurred by Ignite Student Association due to your cancellation. </li><li class="py-1"> No refund: In cases where a refund is not feasible, we will explain the reasoning. </li></ul></li></ol></div><p class="text-xl font-bold text-primary">Additional Notes:</p><ul class="py-2 pl-6 list-disc"><li class="py-1"> This policy applies to all event registrations with Ignite Student Association. </li><li class="py-1"> Event-specific cancellation deadlines or restrictions may be communicated during registration. </li><li class="py-1"> Decisions are final and at the discretion of Ignite Student Association. </li><li class="py-1"> We encourage responsible registration and understanding of this policy before committing to an event. </li></ul><p class="py-4"> By registering for an Ignite Student Association event, you acknowledge and agree to the terms of this cancellation policy. We appreciate your understanding and cooperation. </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cancelPolicy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cancelPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { cancelPolicy as default };
//# sourceMappingURL=cancelPolicy-y-Rsl9dT.mjs.map
