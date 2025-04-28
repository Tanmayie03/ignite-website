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
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-6 font-lato lg:pl-8"><h1 class="text-5xl pt-20 md:text-6xl text-center font-rampart lg:pt-8 text-[#ff6246]"> Aavhan </h1><div class="flex flex-col my-12 md:my-8 lg:flex-row"><div class="flex flex-col justify-center"><img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1728973512/aavhan_hqumcd.png" class="-mt-8"></div><div class="lg:mx-4 lg:w-1/2"><div class="flex flex-col lg:flex-col"><h1 class="px-2 mt-12 text-2xl font-bold text-primary"> About the event:- </h1><p class="mx-2 my-6 text-lg lg:my-0"><span class="text-primary">Ignite Student Association</span> successfully organized <span class="text-primary">Aavhan</span>, its second event, featuring a diverse range of activities such as gaming (including COD and BGMI), video editing, ideathon, Ui/Ux and many more. The event witnessed an enthusiastic participation with over 300 registrations from students. The vibrant engagement and lively atmosphere showcased the students&#39; joy and overwhelming enthusiasm. The positive response has bolstered our confidence to organize more events in the future. All participants received certificates, while winners were rewarded with goodies and cash prizes. Conducting such events was a delightful and enjoyable experience for us. </p><div class="p-4 mt-6 bg-event-backdrop"><div class="flex flex-col md:flex-row md:justify-around bg-[#FEE7D8] p-4 rounded-md"><div class="flex items-center my-2"><div class=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 p-2 text-white bg-blue-500 rounded-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></div><p class="mx-2 text-lg font-semibold"> When:- 24/04/23 To 26/04/23 </p></div><div class="flex items-center my-2"><div class=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 p-2 text-white bg-blue-500 rounded-full"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"></path></svg></div><p class="mx-2 text-lg font-semibold">Type:- Online</p></div></div></div></div></div></div><div class="bg-[#FEE7D8] relative mt-24 p-8"><img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1706961908/avahanLogo_1_fzhrts.png" class="absolute w-[60%] lg:w-[20%] -top-10 right-2 lg:right-12"><h1 class="py-4 text-3xl lg:px-8 font-rampart">Winners:</h1><div class="grid items-start justify-center grid-cols-1 gap-2 py-2 grid-col lg:px-8 lg:grid-cols-5 md:grid-cols-3"><div class="flex flex-col items-start text-lg"><p class="font-rampart text-primary">1. Gpt prompt</p><ol class="px-8 py-2 list-decimal"><li>Abhishek Jadhav</li><li>Piyush Rane</li></ol></div><div class="flex flex-col items-start text-lg"><p class="font-rampart text-primary">2. Ideathon</p><ol class="px-8 py-2 list-decimal"><li>Varad Puranik</li></ol></div><div class="flex flex-col items-start text-lg"><p class="font-rampart text-primary">3. UI UX DESIGNING</p><ol class="px-8 py-2 list-decimal"><li>Vaibhav Lokhande</li><li>Manali Satpute</li></ol></div><div class="flex flex-col items-start text-lg"><p class="font-rampart text-primary">4. Video Editing</p><ol class="px-8 py-2 list-decimal"><li>Yash Gosavi</li><li>Vivek Jadhav</li></ol></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/aavhan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-43spocsG.mjs.map
