import { defineComponent, reactive, ref, withAsyncContext, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, toRaw, createElementBlock, normalizeStyle, normalizeClass, resolveDynamicComponent, mergeProps, createTextVNode, toDisplayString, resolveComponent, createCommentVNode, createElementVNode, toHandlers, withModifiers, TransitionGroup, renderSlot, getCurrentInstance, inject } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link--dfK6dSA.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { u as useFetch } from './fetch-fm8nEad-.mjs';
import { Autoplay, Navigation } from 'swiper/modules';
import { m as members } from './members-o3vEXXSb.mjs';
import { e as event } from './events-83UHZAiH.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = {
  __name: "chatbot",
  __ssrInlineRender: true,
  setup(__props) {
    const userMessage = ref("");
    const messages = ref([]);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed z-50 transition ease-in-out delay-300 border border-gray-300 rounded-lg shadow-xl duration-800 no-scrollbar bg-background h-96 bottom-20 right-5 w-80" }, _attrs))}><div class="p-2 text-lg font-bold text-white bg-primary">Ignito</div><div class="h-[300px] relative py-4 bg-center bg-no-repeat bg-contain" style="${ssrRenderStyle({ "background-image": "linear-gradient(\r\n            rgba(255, 244, 240, 0.6),\r\n            rgba(255, 244, 240, 0.6)\r\n          ),\r\n          url('https://res.cloudinary.com/dy7zpv1ij/image/upload/v1730971280/chat-bot_1_e8oxrk.png')" })}"><div class="pb-12 space-y-2 overflow-y-scroll rounded-t-lg no-scrollbar h-72"><!--[-->`);
      ssrRenderList(messages.value, (message, index) => {
        _push(`<div class="${ssrRenderClass(message.from === "user" ? "text-right" : "text-left")}"><div class="${ssrRenderClass(
          message.from === "user" ? " max-w-[70%] w-fit ml-auto" : " max-w-[70%] w-fit mr-auto"
        )}"><div class="flex flex-col rounded-md"><p class="px-2 font-semibold text-black">${ssrInterpolate(message.from === "user" ? "You " : "Bot ")}</p><p class="${ssrRenderClass(
          message.from === "user" ? "bg-primary p-2 mx-2 rounded-l text-white " : "bg-white p-2 mx-2 rounded-r text-black "
        )}">${ssrInterpolate(message.text)}</p></div></div></div>`);
      });
      _push(`<!--]--></div><div class=""><input${ssrRenderAttr("value", userMessage.value)} type="text" class="w-full p-2 border rounded outline-none" placeholder="Type your message..."></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chatbot.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "cardEvents",
  __ssrInlineRender: true,
  props: {
    id: Number,
    image: String,
    text: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-center my-2 drop-shadow-xl lg:my-0 md:flex-row lg:flex-row"><img${ssrRenderAttr("src", __props.image)} class="z-30 drop-shadow-2xl hidden md:block lg:block w-[200px] lg:w-[400px]"><div class="flex flex-col justify-center items-center text-center lg:text-start rounded-lg drop-shadow-2xl lg:my-4 lg:h-[460px] z-30 bg-[#FFF4F0] py-4 px-8 sm:p-12"><img${ssrRenderAttr("src", __props.image)} class="z-30 drop-shadow-2xl py-4 w-[240px] md:hidden lg:hidden lg:w-[400px]"><p class="text-[24px] mt-2 font-bold text-[#FF6246]">About this event</p><p class="w-[250px] h-[200px] text-ellipsis lg:w-[430px] text-sm py-4 sm:py-4 md:py-0 lg:py-0 flex lg:items-center lg:text-[20px]">${ssrInterpolate(__props.text)}</p></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cardEvents.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "memberCard",
  __ssrInlineRender: true,
  props: {
    member: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class=""><div class="flex w-[264px] justify-center items-center flex-col"><div class="overflow-hidden w-[264px] rounded-lg"><img${ssrRenderAttr("src", __props.member.image)} class="w-[264px] rounded-xl duration-500 hover:scale-110"></div><p class="text-[24px] pt-4 text-[#585858] font-bold">${ssrInterpolate(__props.member.name)}</p><p class="text-[#CA8D66]">${ssrInterpolate(__props.member.position)}</p><div class="flex justify-center"><!--[-->`);
      ssrRenderList(__props.member.socialMedia, (social, index) => {
        _push(`<div class="flex justify-center"><div class="flex justify-center"><a target="_blank"${ssrRenderAttr("href", social.website)}><img${ssrRenderAttr("src", social.websiteicon)} class="mt-[2px]"></a><a target="_blank"${ssrRenderAttr("href", social.linkedIn)}><img${ssrRenderAttr("src", social.linkedInicon)} class="mx-[2px]"></a><a target="_blank"${ssrRenderAttr("href", social.twitter)}><img${ssrRenderAttr("src", social.twittericon)} class=""></a><a target="_blank"${ssrRenderAttr("href", social.instagram)}><img${ssrRenderAttr("src", social.instagramicon)} class=""></a></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/memberCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
var isFunction = (value) => typeof value === "function";
var isString = (value) => typeof value === "string";
var isNonEmptyString = (value) => isString(value) && value.trim().length > 0;
var isNumber = (value) => typeof value === "number";
var isUndefined = (value) => typeof value === "undefined";
var isObject = (value) => typeof value === "object" && value !== null;
var isJSX = (obj) => hasProp(obj, "tag") && isNonEmptyString(obj.tag);
var isTouchEvent = (event2) => (void 0).TouchEvent && event2 instanceof TouchEvent;
var isToastComponent = (obj) => hasProp(obj, "component") && isToastContent(obj.component);
var isVueComponent = (c) => isFunction(c) || isObject(c);
var isToastContent = (obj) => !isUndefined(obj) && (isString(obj) || isVueComponent(obj) || isToastComponent(obj));
var isDOMRect = (obj) => isObject(obj) && ["height", "width", "right", "left", "top", "bottom"].every((p) => isNumber(obj[p]));
var hasProp = (obj, propKey) => (isObject(obj) || isFunction(obj)) && propKey in obj;
function getX(event2) {
  return isTouchEvent(event2) ? event2.targetTouches[0].clientX : event2.clientX;
}
function getY(event2) {
  return isTouchEvent(event2) ? event2.targetTouches[0].clientY : event2.clientY;
}
var removeElement = (el) => {
  if (!isUndefined(el.remove)) {
    el.remove();
  } else if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
};
var getVueComponentFromObj = (obj) => {
  if (isToastComponent(obj)) {
    return getVueComponentFromObj(obj.component);
  }
  if (isJSX(obj)) {
    return defineComponent({
      render() {
        return obj;
      }
    });
  }
  return typeof obj === "string" ? obj : toRaw(unref(obj));
};
var normalizeToastComponent = (obj) => {
  if (typeof obj === "string") {
    return obj;
  }
  const props = hasProp(obj, "props") && isObject(obj.props) ? obj.props : {};
  const listeners = hasProp(obj, "listeners") && isObject(obj.listeners) ? obj.listeners : {};
  return { component: getVueComponentFromObj(obj), props, listeners };
};
var EventBus = class {
  constructor() {
    this.allHandlers = {};
  }
  getHandlers(eventType) {
    return this.allHandlers[eventType] || [];
  }
  on(eventType, handler) {
    const handlers = this.getHandlers(eventType);
    handlers.push(handler);
    this.allHandlers[eventType] = handlers;
  }
  off(eventType, handler) {
    const handlers = this.getHandlers(eventType);
    handlers.splice(handlers.indexOf(handler) >>> 0, 1);
  }
  emit(eventType, event2) {
    const handlers = this.getHandlers(eventType);
    handlers.forEach((handler) => handler(event2));
  }
};
var TYPE;
(function(TYPE2) {
  TYPE2["SUCCESS"] = "success";
  TYPE2["ERROR"] = "error";
  TYPE2["WARNING"] = "warning";
  TYPE2["INFO"] = "info";
  TYPE2["DEFAULT"] = "default";
})(TYPE || (TYPE = {}));
var POSITION;
(function(POSITION2) {
  POSITION2["TOP_LEFT"] = "top-left";
  POSITION2["TOP_CENTER"] = "top-center";
  POSITION2["TOP_RIGHT"] = "top-right";
  POSITION2["BOTTOM_LEFT"] = "bottom-left";
  POSITION2["BOTTOM_CENTER"] = "bottom-center";
  POSITION2["BOTTOM_RIGHT"] = "bottom-right";
})(POSITION || (POSITION = {}));
var EVENTS;
(function(EVENTS2) {
  EVENTS2["ADD"] = "add";
  EVENTS2["DISMISS"] = "dismiss";
  EVENTS2["UPDATE"] = "update";
  EVENTS2["CLEAR"] = "clear";
  EVENTS2["UPDATE_DEFAULTS"] = "update_defaults";
})(EVENTS || (EVENTS = {}));
var VT_NAMESPACE = "Vue-Toastification";
var COMMON = {
  type: {
    type: String,
    default: TYPE.DEFAULT
  },
  classNames: {
    type: [String, Array],
    default: () => []
  },
  trueBoolean: {
    type: Boolean,
    default: true
  }
};
var ICON = {
  type: COMMON.type,
  customIcon: {
    type: [String, Boolean, Object, Function],
    default: true
  }
};
var CLOSE_BUTTON = {
  component: {
    type: [String, Object, Function, Boolean],
    default: "button"
  },
  classNames: COMMON.classNames,
  showOnHover: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: "close"
  }
};
var PROGRESS_BAR = {
  timeout: {
    type: [Number, Boolean],
    default: 5e3
  },
  hideProgressBar: {
    type: Boolean,
    default: false
  },
  isRunning: {
    type: Boolean,
    default: false
  }
};
var TRANSITION = {
  transition: {
    type: [Object, String],
    default: `${VT_NAMESPACE}__bounce`
  }
};
var CORE_TOAST = {
  position: {
    type: String,
    default: POSITION.TOP_RIGHT
  },
  draggable: COMMON.trueBoolean,
  draggablePercent: {
    type: Number,
    default: 0.6
  },
  pauseOnFocusLoss: COMMON.trueBoolean,
  pauseOnHover: COMMON.trueBoolean,
  closeOnClick: COMMON.trueBoolean,
  timeout: PROGRESS_BAR.timeout,
  hideProgressBar: PROGRESS_BAR.hideProgressBar,
  toastClassName: COMMON.classNames,
  bodyClassName: COMMON.classNames,
  icon: ICON.customIcon,
  closeButton: CLOSE_BUTTON.component,
  closeButtonClassName: CLOSE_BUTTON.classNames,
  showCloseButtonOnHover: CLOSE_BUTTON.showOnHover,
  accessibility: {
    type: Object,
    default: () => ({
      toastRole: "alert",
      closeButtonLabel: "close"
    })
  },
  rtl: {
    type: Boolean,
    default: false
  },
  eventBus: {
    type: Object,
    required: false,
    default: () => new EventBus()
  }
};
var TOAST = {
  id: {
    type: [String, Number],
    required: true,
    default: 0
  },
  type: COMMON.type,
  content: {
    type: [String, Object, Function],
    required: true,
    default: ""
  },
  onClick: {
    type: Function,
    default: void 0
  },
  onClose: {
    type: Function,
    default: void 0
  }
};
var CONTAINER = {
  container: {
    type: [
      Object,
      Function
    ],
    default: () => (void 0).body
  },
  newestOnTop: COMMON.trueBoolean,
  maxToasts: {
    type: Number,
    default: 20
  },
  transition: TRANSITION.transition,
  toastDefaults: Object,
  filterBeforeCreate: {
    type: Function,
    default: (toast) => toast
  },
  filterToasts: {
    type: Function,
    default: (toasts) => toasts
  },
  containerClassName: COMMON.classNames,
  onMounted: Function,
  shareAppContext: [Boolean, Object]
};
var propValidators_default = {
  CORE_TOAST,
  TOAST,
  CONTAINER,
  PROGRESS_BAR,
  ICON,
  TRANSITION,
  CLOSE_BUTTON
};
var VtProgressBar_default = defineComponent({
  name: "VtProgressBar",
  props: propValidators_default.PROGRESS_BAR,
  data() {
    return {
      hasClass: true
    };
  },
  computed: {
    style() {
      return {
        animationDuration: `${this.timeout}ms`,
        animationPlayState: this.isRunning ? "running" : "paused",
        opacity: this.hideProgressBar ? 0 : 1
      };
    },
    cpClass() {
      return this.hasClass ? `${VT_NAMESPACE}__progress-bar` : "";
    }
  },
  watch: {
    timeout() {
      this.hasClass = false;
      this.$nextTick(() => this.hasClass = true);
    }
  },
  mounted() {
    this.$el.addEventListener("animationend", this.animationEnded);
  },
  beforeUnmount() {
    this.$el.removeEventListener("animationend", this.animationEnded);
  },
  methods: {
    animationEnded() {
      this.$emit("close-toast");
    }
  }
});
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    style: normalizeStyle(_ctx.style),
    class: normalizeClass(_ctx.cpClass)
  }, null, 6);
}
VtProgressBar_default.render = render;
var VtProgressBar_default2 = VtProgressBar_default;
var VtCloseButton_default = defineComponent({
  name: "VtCloseButton",
  props: propValidators_default.CLOSE_BUTTON,
  computed: {
    buttonComponent() {
      if (this.component !== false) {
        return getVueComponentFromObj(this.component);
      }
      return "button";
    },
    classes() {
      const classes = [`${VT_NAMESPACE}__close-button`];
      if (this.showOnHover) {
        classes.push("show-on-hover");
      }
      return classes.concat(this.classNames);
    }
  }
});
var _hoisted_1 = /* @__PURE__ */ createTextVNode(" \xD7 ");
function render2(_ctx, _cache) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.buttonComponent), mergeProps({
    "aria-label": _ctx.ariaLabel,
    class: _ctx.classes
  }, _ctx.$attrs), {
    default: withCtx(() => [
      _hoisted_1
    ]),
    _: 1
  }, 16, ["aria-label", "class"]);
}
VtCloseButton_default.render = render2;
var VtCloseButton_default2 = VtCloseButton_default;
var VtSuccessIcon_default = {};
var _hoisted_12 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "check-circle",
  class: "svg-inline--fa fa-check-circle fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
var _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
}, null, -1);
var _hoisted_3 = [
  _hoisted_2
];
function render3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_12, _hoisted_3);
}
VtSuccessIcon_default.render = render3;
var VtSuccessIcon_default2 = VtSuccessIcon_default;
var VtInfoIcon_default = {};
var _hoisted_13 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "info-circle",
  class: "svg-inline--fa fa-info-circle fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
var _hoisted_22 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
}, null, -1);
var _hoisted_32 = [
  _hoisted_22
];
function render4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_13, _hoisted_32);
}
VtInfoIcon_default.render = render4;
var VtInfoIcon_default2 = VtInfoIcon_default;
var VtWarningIcon_default = {};
var _hoisted_14 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "exclamation-circle",
  class: "svg-inline--fa fa-exclamation-circle fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
var _hoisted_23 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
}, null, -1);
var _hoisted_33 = [
  _hoisted_23
];
function render5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_14, _hoisted_33);
}
VtWarningIcon_default.render = render5;
var VtWarningIcon_default2 = VtWarningIcon_default;
var VtErrorIcon_default = {};
var _hoisted_15 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "exclamation-triangle",
  class: "svg-inline--fa fa-exclamation-triangle fa-w-18",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
};
var _hoisted_24 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
}, null, -1);
var _hoisted_34 = [
  _hoisted_24
];
function render6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_15, _hoisted_34);
}
VtErrorIcon_default.render = render6;
var VtErrorIcon_default2 = VtErrorIcon_default;
var VtIcon_default = defineComponent({
  name: "VtIcon",
  props: propValidators_default.ICON,
  computed: {
    customIconChildren() {
      return hasProp(this.customIcon, "iconChildren") ? this.trimValue(this.customIcon.iconChildren) : "";
    },
    customIconClass() {
      if (isString(this.customIcon)) {
        return this.trimValue(this.customIcon);
      } else if (hasProp(this.customIcon, "iconClass")) {
        return this.trimValue(this.customIcon.iconClass);
      }
      return "";
    },
    customIconTag() {
      if (hasProp(this.customIcon, "iconTag")) {
        return this.trimValue(this.customIcon.iconTag, "i");
      }
      return "i";
    },
    hasCustomIcon() {
      return this.customIconClass.length > 0;
    },
    component() {
      if (this.hasCustomIcon) {
        return this.customIconTag;
      }
      if (isToastContent(this.customIcon)) {
        return getVueComponentFromObj(this.customIcon);
      }
      return this.iconTypeComponent;
    },
    iconTypeComponent() {
      const types = {
        [TYPE.DEFAULT]: VtInfoIcon_default2,
        [TYPE.INFO]: VtInfoIcon_default2,
        [TYPE.SUCCESS]: VtSuccessIcon_default2,
        [TYPE.ERROR]: VtErrorIcon_default2,
        [TYPE.WARNING]: VtWarningIcon_default2
      };
      return types[this.type];
    },
    iconClasses() {
      const classes = [`${VT_NAMESPACE}__icon`];
      if (this.hasCustomIcon) {
        return classes.concat(this.customIconClass);
      }
      return classes;
    }
  },
  methods: {
    trimValue(value, empty = "") {
      return isNonEmptyString(value) ? value.trim() : empty;
    }
  }
});
function render7(_ctx, _cache) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.component), {
    class: normalizeClass(_ctx.iconClasses)
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.customIconChildren), 1)
    ]),
    _: 1
  }, 8, ["class"]);
}
VtIcon_default.render = render7;
var VtIcon_default2 = VtIcon_default;
var VtToast_default = defineComponent({
  name: "VtToast",
  components: { ProgressBar: VtProgressBar_default2, CloseButton: VtCloseButton_default2, Icon: VtIcon_default2 },
  inheritAttrs: false,
  props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.TOAST),
  data() {
    const data = {
      isRunning: true,
      disableTransitions: false,
      beingDragged: false,
      dragStart: 0,
      dragPos: { x: 0, y: 0 },
      dragRect: {}
    };
    return data;
  },
  computed: {
    classes() {
      const classes = [
        `${VT_NAMESPACE}__toast`,
        `${VT_NAMESPACE}__toast--${this.type}`,
        `${this.position}`
      ].concat(this.toastClassName);
      if (this.disableTransitions) {
        classes.push("disable-transition");
      }
      if (this.rtl) {
        classes.push(`${VT_NAMESPACE}__toast--rtl`);
      }
      return classes;
    },
    bodyClasses() {
      const classes = [
        `${VT_NAMESPACE}__toast-${isString(this.content) ? "body" : "component-body"}`
      ].concat(this.bodyClassName);
      return classes;
    },
    draggableStyle() {
      if (this.dragStart === this.dragPos.x) {
        return {};
      } else if (this.beingDragged) {
        return {
          transform: `translateX(${this.dragDelta}px)`,
          opacity: 1 - Math.abs(this.dragDelta / this.removalDistance)
        };
      } else {
        return {
          transition: "transform 0.2s, opacity 0.2s",
          transform: "translateX(0)",
          opacity: 1
        };
      }
    },
    dragDelta() {
      return this.beingDragged ? this.dragPos.x - this.dragStart : 0;
    },
    removalDistance() {
      if (isDOMRect(this.dragRect)) {
        return (this.dragRect.right - this.dragRect.left) * this.draggablePercent;
      }
      return 0;
    }
  },
  mounted() {
    if (this.draggable) {
      this.draggableSetup();
    }
    if (this.pauseOnFocusLoss) {
      this.focusSetup();
    }
  },
  beforeUnmount() {
    if (this.draggable) {
      this.draggableCleanup();
    }
    if (this.pauseOnFocusLoss) {
      this.focusCleanup();
    }
  },
  methods: {
    hasProp,
    getVueComponentFromObj,
    closeToast() {
      this.eventBus.emit(EVENTS.DISMISS, this.id);
    },
    clickHandler() {
      if (this.onClick) {
        this.onClick(this.closeToast);
      }
      if (this.closeOnClick) {
        if (!this.beingDragged || this.dragStart === this.dragPos.x) {
          this.closeToast();
        }
      }
    },
    timeoutHandler() {
      this.closeToast();
    },
    hoverPause() {
      if (this.pauseOnHover) {
        this.isRunning = false;
      }
    },
    hoverPlay() {
      if (this.pauseOnHover) {
        this.isRunning = true;
      }
    },
    focusPause() {
      this.isRunning = false;
    },
    focusPlay() {
      this.isRunning = true;
    },
    focusSetup() {
      addEventListener("blur", this.focusPause);
      addEventListener("focus", this.focusPlay);
    },
    focusCleanup() {
      removeEventListener("blur", this.focusPause);
      removeEventListener("focus", this.focusPlay);
    },
    draggableSetup() {
      const element = this.$el;
      element.addEventListener("touchstart", this.onDragStart, {
        passive: true
      });
      element.addEventListener("mousedown", this.onDragStart);
      addEventListener("touchmove", this.onDragMove, { passive: false });
      addEventListener("mousemove", this.onDragMove);
      addEventListener("touchend", this.onDragEnd);
      addEventListener("mouseup", this.onDragEnd);
    },
    draggableCleanup() {
      const element = this.$el;
      element.removeEventListener("touchstart", this.onDragStart);
      element.removeEventListener("mousedown", this.onDragStart);
      removeEventListener("touchmove", this.onDragMove);
      removeEventListener("mousemove", this.onDragMove);
      removeEventListener("touchend", this.onDragEnd);
      removeEventListener("mouseup", this.onDragEnd);
    },
    onDragStart(event2) {
      this.beingDragged = true;
      this.dragPos = { x: getX(event2), y: getY(event2) };
      this.dragStart = getX(event2);
      this.dragRect = this.$el.getBoundingClientRect();
    },
    onDragMove(event2) {
      if (this.beingDragged) {
        event2.preventDefault();
        if (this.isRunning) {
          this.isRunning = false;
        }
        this.dragPos = { x: getX(event2), y: getY(event2) };
      }
    },
    onDragEnd() {
      if (this.beingDragged) {
        if (Math.abs(this.dragDelta) >= this.removalDistance) {
          this.disableTransitions = true;
          this.$nextTick(() => this.closeToast());
        } else {
          setTimeout(() => {
            this.beingDragged = false;
            if (isDOMRect(this.dragRect) && this.pauseOnHover && this.dragRect.bottom >= this.dragPos.y && this.dragPos.y >= this.dragRect.top && this.dragRect.left <= this.dragPos.x && this.dragPos.x <= this.dragRect.right) {
              this.isRunning = false;
            } else {
              this.isRunning = true;
            }
          });
        }
      }
    }
  }
});
var _hoisted_16 = ["role"];
function render8(_ctx, _cache) {
  const _component_Icon = resolveComponent("Icon");
  const _component_CloseButton = resolveComponent("CloseButton");
  const _component_ProgressBar = resolveComponent("ProgressBar");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.draggableStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
    onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.hoverPause && _ctx.hoverPause(...args)),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.hoverPlay && _ctx.hoverPlay(...args))
  }, [
    _ctx.icon ? (openBlock(), createBlock(_component_Icon, {
      key: 0,
      "custom-icon": _ctx.icon,
      type: _ctx.type
    }, null, 8, ["custom-icon", "type"])) : createCommentVNode("v-if", true),
    createElementVNode("div", {
      role: _ctx.accessibility.toastRole || "alert",
      class: normalizeClass(_ctx.bodyClasses)
    }, [
      typeof _ctx.content === "string" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.content), 1)
      ], 2112)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.getVueComponentFromObj(_ctx.content)), mergeProps({
        key: 1,
        "toast-id": _ctx.id
      }, _ctx.hasProp(_ctx.content, "props") ? _ctx.content.props : {}, toHandlers(_ctx.hasProp(_ctx.content, "listeners") ? _ctx.content.listeners : {}), { onCloseToast: _ctx.closeToast }), null, 16, ["toast-id", "onCloseToast"]))
    ], 10, _hoisted_16),
    !!_ctx.closeButton ? (openBlock(), createBlock(_component_CloseButton, {
      key: 1,
      component: _ctx.closeButton,
      "class-names": _ctx.closeButtonClassName,
      "show-on-hover": _ctx.showCloseButtonOnHover,
      "aria-label": _ctx.accessibility.closeButtonLabel,
      onClick: withModifiers(_ctx.closeToast, ["stop"])
    }, null, 8, ["component", "class-names", "show-on-hover", "aria-label", "onClick"])) : createCommentVNode("v-if", true),
    _ctx.timeout ? (openBlock(), createBlock(_component_ProgressBar, {
      key: 2,
      "is-running": _ctx.isRunning,
      "hide-progress-bar": _ctx.hideProgressBar,
      timeout: _ctx.timeout,
      onCloseToast: _ctx.timeoutHandler
    }, null, 8, ["is-running", "hide-progress-bar", "timeout", "onCloseToast"])) : createCommentVNode("v-if", true)
  ], 38);
}
VtToast_default.render = render8;
var VtToast_default2 = VtToast_default;
var VtTransition_default = defineComponent({
  name: "VtTransition",
  props: propValidators_default.TRANSITION,
  emits: ["leave"],
  methods: {
    hasProp,
    leave(el) {
      if (el instanceof HTMLElement) {
        el.style.left = el.offsetLeft + "px";
        el.style.top = el.offsetTop + "px";
        el.style.width = getComputedStyle(el).width;
        el.style.position = "absolute";
      }
    }
  }
});
function render9(_ctx, _cache) {
  return openBlock(), createBlock(TransitionGroup, {
    tag: "div",
    "enter-active-class": _ctx.transition.enter ? _ctx.transition.enter : `${_ctx.transition}-enter-active`,
    "move-class": _ctx.transition.move ? _ctx.transition.move : `${_ctx.transition}-move`,
    "leave-active-class": _ctx.transition.leave ? _ctx.transition.leave : `${_ctx.transition}-leave-active`,
    onLeave: _ctx.leave
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["enter-active-class", "move-class", "leave-active-class", "onLeave"]);
}
VtTransition_default.render = render9;
var VtTransition_default2 = VtTransition_default;
var VtToastContainer_default = defineComponent({
  name: "VueToastification",
  devtools: {
    hide: true
  },
  components: { Toast: VtToast_default2, VtTransition: VtTransition_default2 },
  props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.CONTAINER, propValidators_default.TRANSITION),
  data() {
    const data = {
      count: 0,
      positions: Object.values(POSITION),
      toasts: {},
      defaults: {}
    };
    return data;
  },
  computed: {
    toastArray() {
      return Object.values(this.toasts);
    },
    filteredToasts() {
      return this.defaults.filterToasts(this.toastArray);
    }
  },
  beforeMount() {
    const events = this.eventBus;
    events.on(EVENTS.ADD, this.addToast);
    events.on(EVENTS.CLEAR, this.clearToasts);
    events.on(EVENTS.DISMISS, this.dismissToast);
    events.on(EVENTS.UPDATE, this.updateToast);
    events.on(EVENTS.UPDATE_DEFAULTS, this.updateDefaults);
    this.defaults = this.$props;
  },
  mounted() {
    this.setup(this.container);
  },
  methods: {
    async setup(container) {
      if (isFunction(container)) {
        container = await container();
      }
      removeElement(this.$el);
      container.appendChild(this.$el);
    },
    setToast(props) {
      if (!isUndefined(props.id)) {
        this.toasts[props.id] = props;
      }
    },
    addToast(params) {
      params.content = normalizeToastComponent(params.content);
      const props = Object.assign({}, this.defaults, params.type && this.defaults.toastDefaults && this.defaults.toastDefaults[params.type], params);
      const toast = this.defaults.filterBeforeCreate(props, this.toastArray);
      toast && this.setToast(toast);
    },
    dismissToast(id) {
      const toast = this.toasts[id];
      if (!isUndefined(toast) && !isUndefined(toast.onClose)) {
        toast.onClose();
      }
      delete this.toasts[id];
    },
    clearToasts() {
      Object.keys(this.toasts).forEach((id) => {
        this.dismissToast(id);
      });
    },
    getPositionToasts(position) {
      const toasts = this.filteredToasts.filter((toast) => toast.position === position).slice(0, this.defaults.maxToasts);
      return this.defaults.newestOnTop ? toasts.reverse() : toasts;
    },
    updateDefaults(update) {
      if (!isUndefined(update.container)) {
        this.setup(update.container);
      }
      this.defaults = Object.assign({}, this.defaults, update);
    },
    updateToast({
      id,
      options,
      create
    }) {
      if (this.toasts[id]) {
        if (options.timeout && options.timeout === this.toasts[id].timeout) {
          options.timeout++;
        }
        this.setToast(Object.assign({}, this.toasts[id], options));
      } else if (create) {
        this.addToast(Object.assign({}, { id }, options));
      }
    },
    getClasses(position) {
      const classes = [`${VT_NAMESPACE}__container`, position];
      return classes.concat(this.defaults.containerClassName);
    }
  }
});
function render10(_ctx, _cache) {
  const _component_Toast = resolveComponent("Toast");
  const _component_VtTransition = resolveComponent("VtTransition");
  return openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.positions, (pos) => {
      return openBlock(), createElementBlock("div", { key: pos }, [
        createVNode(_component_VtTransition, {
          transition: _ctx.defaults.transition,
          class: normalizeClass(_ctx.getClasses(pos))
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getPositionToasts(pos), (toast) => {
              return openBlock(), createBlock(_component_Toast, mergeProps({
                key: toast.id
              }, toast), null, 16);
            }), 128))
          ]),
          _: 2
        }, 1032, ["transition", "class"])
      ]);
    }), 128))
  ]);
}
VtToastContainer_default.render = render10;
var createMockToastInterface = () => {
  const toast = () => console.warn(`[${VT_NAMESPACE}] This plugin does not support SSR!`);
  return new Proxy(toast, {
    get() {
      return toast;
    }
  });
};
function createToastInterface(optionsOrEventBus) {
  {
    return createMockToastInterface();
  }
}
var toastInjectionKey = Symbol("VueToastification");
var useToast = (eventBus) => {
  if (eventBus) {
    return createToastInterface();
  }
  const toast = getCurrentInstance() ? inject(toastInjectionKey, void 0) : void 0;
  return toast ? toast : createToastInterface();
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useToast();
    const formDetails = reactive({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
    const isChatopen = ref(false);
    [__temp, __restore] = withAsyncContext(() => useFetch(
      `https://api.ignitestudentassociation.com/api/public/events`,
      "$PslAyef5YX"
    )), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Chatbot = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_CardEvents = __nuxt_component_4;
      const _component_MemberCard = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed z-50 bottom-2 right-8"><img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1730975087/chat-bot_venq9u.png" class="cursor-pointer w-14"></div>`);
      if (unref(isChatopen)) {
        _push(ssrRenderComponent(_component_Chatbot, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="overflow-hidden bg-background"><div class="lg:flex-row md:h-screen scroll-smooth md:flex-row flex flex-col font-lato lg:h-screen justify-center w-full items-center py-16 lg:py-[72px]"><img data-aos="fade-right" src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1728973513/Untitled66_20240112132139_1_iwk495.png" class="md:w-[48%] w-[90%] md:mr-12"><div data-aos="fade-left" class="flex flex-col items-center justify-center text-center md:items-start md:text-start lg:items-start lg:text-start lg:px-0"><div class="text-primary"><p class="text-[80px] sm:text-[80px] md:text-[96px] lg:text-[106px] leading-none font-semibold"> Ignite </p><p class="text-[36px] lg:text-[40px]">Student Association</p><p class="text-[24px] lg:text-[35px]">MIT- Chh. Sambhajinagar</p></div><p class="lg:text-[20px] lg:w-[500px] py-4 lg:px-0 lg:py-7"> Blending <span class="text-primary">Curricular </span>with <span class="text-primary">Extracurricular</span> activities for a remarkable learning journey. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/Explore" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="px-12 py-2 text-lg text-white rounded-lg bg-primary"${_scopeId}> Explore </button>`);
          } else {
            return [
              createVNode("button", { class: "px-12 py-2 text-lg text-white rounded-lg bg-primary" }, " Explore ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative items-center w-full scroll-smooth" id="aboutpg"><p class="font-rampart flex justify-center lg:justify-end lg:pr-14 text-[76px] lg:text-[96px] text-[#FF6246]"> ABOUT </p><div class="relative flex flex-col-reverse items-center w-full lg:justify-around lg:flex-row lg:items-center"><div data-aos="fade-right" class="relative flex flex-col items-center md:justify-between"><p class="text-[26px] md:text-[20px] z-10 md:text-start text-center lg:text-start mt-6 md:mt-12 lg:mt-6 lg:my-0 lg:text-[40px] lg:w-[500px]"> From <span class="text-[#FF6246]">Classroom</span> to Community: Where Growth Happens. </p><img src="https://res.cloudinary.com/dthrgos9e/image/upload/v1705476164/ignite-assets/ivybm6nwyefgoesiewks.png" class="hidden -z-0 md:w-[110px] lg:block lg:w-[210px] absolute md:top-3 -top-6 xs md:left-44 left-[130px] lg:-top-[46px] lg:left-[90px]"><p class="lg:text-[20px] sm:[100px] md:text-[16px] text-center px-4 lg:text-start md:px-0 lg:px-0 md:w-[80%] md:text-start lg:w-[490px] py-6"> Ignite SA is a student community that boasts the most brilliant minds from our college. Comprising individuals from diverse fields, including tech area, all members possess exceptional skills in their respective domains and work in unison to make Ignite SA an exceptional entity. Our main objective is to create a space that nurtures self-improvement and development for our students, and we proudly declare ourselves as a community that is created, run, and dedicated to the students. </p></div><img data-aos="fade-left" src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1728973514/Untitled71_20240227225722-01_oh0nen.jpg" class="px-6 mt-4 md:px-0 md:w-1/2 md:mt-0 md:mb-0 lg:-mt-0"></div></div><div class="relative" id="eventpg"><p class="font-rampart md:pl-14 text-center mt-12 lg:text-start text-[76px] lg:text-[96px] text-[#FF6246]"> EVENT </p><div class="bg-event-backdrop">`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
        "slides-per-view": 1,
        loop: false,
        effect: "creative",
        autoplay: {
          delay: 5e3,
          disableOnInteraction: true
        },
        "creative-effect": {
          prev: {
            shadow: false,
            translate: ["100%", 0, -1]
          },
          next: {
            translate: ["100%", 0, 0]
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(event), (e, index) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: index,
                class: "w-full event-backdrop"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex justify-center my-2 event-backdrop"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_CardEvents, {
                      id: e.id,
                      image: e.image,
                      text: e.text
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-center my-2 event-backdrop" }, [
                        createVNode(_component_CardEvents, {
                          id: e.id,
                          image: e.image,
                          text: e.text
                        }, null, 8, ["id", "image", "text"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(event), (e, index) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: index,
                  class: "w-full event-backdrop"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex justify-center my-2 event-backdrop" }, [
                      createVNode(_component_CardEvents, {
                        id: e.id,
                        image: e.image,
                        text: e.text
                      }, null, 8, ["id", "image", "text"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div></div><div class="relative py-6 scroll-smooth" id="team"><div class="py-12 lg:py-12"><div class="flex lg:justify-end"><div class="absolute z-10 swiper-button-prev hover:scale-110" style="${ssrRenderStyle({ "color": "#ff6246", "font-weight": "600", "margin-top": "12px" })}"></div><div class="absolute swiper-button-next hover:scale-110" style="${ssrRenderStyle({ "color": "#ff6246", "font-weight": "600", "margin-top": "12px" })}"></div></div><p class="font-rampart flex justify-center lg:pl-14 lg:justify-start text-[76px] lg:text-[96px] text-[#FF6246]"> TEAM </p><div class="w-full">`);
      _push(ssrRenderComponent(_component_Swiper, {
        ref: "swiper",
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
        "slides-per-view": 1,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        effect: "creative",
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(members), (m, index) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: index,
                class: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex justify-center w-full py-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_MemberCard, { member: m }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-center w-full py-6" }, [
                        createVNode(_component_MemberCard, { member: m }, null, 8, ["member"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(members), (m, index) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: index,
                  class: ""
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex justify-center w-full py-6" }, [
                      createVNode(_component_MemberCard, { member: m }, null, 8, ["member"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="relative" id="contactpg"><p class="font-rampart text-[72px] tracking-tighter text-center lg:text-end lg:text-[96px] lg:pr-14 leading-none text-[#FF6246]"> CONNECT </p><div class="flex flex-col items-center justify-between w-full px-4 my-4 md:px-14 lg:flex-row"><img src="https://res.cloudinary.com/dthrgos9e/image/upload/v1705476164/ignite-assets/xzakcfbsa5lgxhn9kqcf" class="w-full md:w-1/2 lg:-mt-12"><form class="bg-[#FEE7D8] relative flex flex-col items-center my-6 lg:my-4 p-4 lg:p-8 rounded-md"><div class="flex justify-between"><div class="flex flex-col mr-3 lg:my-2"><label class="text-[#FF6246] text-md lg:text-[20px] py-1">First Name</label><input class="h-[40px] sm:h-[40px] md:h-[45px] lg:h-[45px] rounded-md outline-none px-3 w-[135px] sm:w-[150px] md:w-[210px] lg:w-[210px]" required${ssrRenderAttr("value", unref(formDetails).firstName)}></div><div class="flex flex-col ml-2 sm:ml-2 lg:my-2"><label class="text-[#FF6246] text-md lg:text-[20px] py-1">Last Name</label><input class="h-[40px] sm:h-[40px] md:h-[45px] lg:h-[45px] rounded-md outline-none px-3 w-[135px] sm:w-[150px] md:w-[210px] lg:w-[210px]" required${ssrRenderAttr("value", unref(formDetails).lastName)}></div></div><div class="flex flex-col lg:my-2"><label class="text-[#FF6246] text-md lg:text-[20px] py-1">Email Id</label><input type="email" size="30" class="h-[40px] sm:h-[40px] md:h-[45px] lg:h-[45px] rounded-md outline-none px-3 w-[290px] sm:w-[320px] md:w-[450px] lg:w-[435px]" required${ssrRenderAttr("value", unref(formDetails).email)}></div><div class="flex flex-col justify-start lg:my-2"><label class="text-[#FF6246] text-md lg:text-[20px] py-1">Your message</label><textarea class="h-[180px] rounded-md outline-none p-3 w-[290px] sm:w-[320px] md:w-[450px] lg:w-[435px] resize-none" required fixed>${ssrInterpolate(unref(formDetails).message)}</textarea></div><button class="bg-[#FF6246] my-4 py-2 px-4 rounded-md lg:text-[20px] text-white w-fit"> Submit </button></form></div></div><div class="relative" id="contactpg"><p class="font-rampart pt-12 text-[72px] tracking-tighter text-center lg:text-start lg:text-[96px] lg:pl-12 leading-none text-[#FF6246]"> CONTACT US </p><div class="flex flex-col justify-between w-full px-4 pt-12 lg:px-16 lg:flex-row"><div class="flex flex-col lg:w-1/2 font-lato"><div class="flex flex-col py-2"><div class="flex items-center lg:mt-2"><div class="bg-[#FEE7D8] p-2 w-10 rounded-full mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-[#FF6246]"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"></path></svg></div><p class="text-xl font-semibold">Email us</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mailto:ignitestudentassociation@gmail.com" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ml-12 text-md md:text-lg overflow-clip"${_scopeId}> ignitestudentassociation@gmail.com </div>`);
          } else {
            return [
              createVNode("div", { class: "ml-12 text-md md:text-lg overflow-clip" }, " ignitestudentassociation@gmail.com ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col py-2"><div class="flex items-center mt-2"><div class="bg-[#FEE7D8] p-2 w-10 rounded-full mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-[#FF6246]"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path></svg></div><p class="text-xl font-semibold">Phone Number</p></div><div class="ml-12 text-md md:text-lg">+91-9112348575</div></div><div class="flex flex-col py-2"><div class="flex items-center lg:mt-2"><div class="bg-[#FEE7D8] p-2 w-10 rounded-full mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2 " stroke="currentColor" class="w-6 h-6 text-[#FF6246]"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path></svg></div><p class="text-xl font-semibold">Address</p></div><div class="ml-12 text-md md:text-lg lg:pr-12"> MIT Campus, Beed Bypass Road, Satara Village Road, Chh. Sambhajinagar (Aurangabad)- 431010 Maharashtra, INDIA </div></div></div><div class="mx-2 my-6 lg:mx-0 lg:w-1/2 lg:my-0 h-1/2"><div class="w-full"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15011.116294125524!2d75.3218713!3d19.8492987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb988c254eb873%3A0x4388791935b718e6!2sMaharashtra%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1708334543339!5m2!1sen!2sin" class="w-full h-96" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-dFe-NsY2.mjs.map
