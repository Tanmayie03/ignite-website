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
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-6 font-lato lg:pl-8"><h1 class="text-5xl pt-20 md:text-6xl text-center font-rampart lg:pt-8 text-[#ff6246]"> EventZen </h1><div class="flex flex-col my-12 lg:flex-row"><img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1728973513/eventzen_poster_o9ycwt.png" class="" data-aos="fade-right"><div class="my-4 lg:w-[50%] lg:mx-4 lg:my-0" data-aos="fade-left"><h1 class="px-2 mt-4 mb-8 text-2xl font-bold text-primary"> About the event:- </h1><img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1706956852/eventZen-removebg-preview_b8ty4w.png" class="w-3/4 my-4 lg:w-1/3"><p class="mx-2 my-4 text-lg"> Eventzen a inaugral event, organized by the Ignite Student Association, achieved significant success, garnering an enthusiastic response from students, with over 500 registrations. The positive outcome of our online events has strengthened our confidence, motivating us to host more events in the future. The purpose of this event was to inspire students to learn something new and actively participate in each activity. Prizes were arranged for all winners, and certificates were provided to all participants. The event, held on January 23, 2023, received overwhelming responses. Various online events, such as photography, video editing, essay writing, and coding, were conducted. The prize distribution took place offline, with teachers distributing prizes and goodies to the winners. </p><div class="w-full p-4 my-6 bg-event-backdrop"><div class="flex flex-col md:flex-row md:justify-around bg-[#FEE7D8] p-4 rounded-md"><div class="flex items-center my-2"><div class=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 p-2 text-white bg-blue-500 rounded-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></div><p class="mx-2 text-lg font-semibold"> When:- 12/01/23 To 15/01/23 </p></div><div class="flex items-center my-2"><div class=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 p-2 text-white bg-blue-500 rounded-full"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"></path></svg></div><p class="mx-2 text-lg font-semibold">Type:- Online</p></div></div></div></div></div><div class="bg-[#FEE7D8] relative py-8 px-6" data-aos="flip-left"><img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1706956852/eventZen-removebg-preview_b8ty4w.png" class="absolute right-2 -top-6 lg:right-12 w-[60%] lg:w-[30%] lg:-top-10"><h1 class="py-4 text-3xl lg:px-6 font-rampart">Winners:</h1><div class="grid justify-center grid-cols-1 gap-2 py-2 lg:px-8 lg:grid-cols-5 md:grid-cols-3"><div class="flex flex-col items-start text-lg"><p class="font-rampart text-primary">1. Coding Competition</p><ol class="px-8 list-decimal"><li>Sakshi dhole</li><li>Shaikh Arman</li></ol></div><div class="flex flex-col items-start text-lg"><p class="font-rampart text-primary">2. Quiz Competition</p><ol class="px-8 list-decimal"><li>Sudarshan Gawali</li><li>Virendra Bahure</li></ol></div><div class="flex flex-col items-start text-lg"><p class="font-rampart text-primary">3. Essay writing</p><ol class="px-8 list-decimal"><li>Anam Sayed</li><li>Mohammad bamzaina</li></ol></div><div class="flex flex-col items-start text-lg"><p class="font-rampart text-primary">4. Template designing</p><ol class="px-8 list-decimal"><li>Udit Choudhari</li><li>Radhika Patil</li></ol></div><div class="flex flex-col items-start text-lg"><p class="font-rampart text-primary">5. Photography</p><ol class="px-8 list-decimal"><li>Sanika parihar</li><li>Krishna malunjka</li></ol></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/zen/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-7oWQA-g_.mjs.map
