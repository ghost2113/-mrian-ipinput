module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0c6d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9bf2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPInput_vue_vue_type_style_index_0_id_0ed4848f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0c6d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPInput_vue_vue_type_style_index_0_id_0ed4848f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPInput_vue_vue_type_style_index_0_id_0ed4848f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPInput_vue_vue_type_style_index_0_id_0ed4848f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a6ee3674-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/IPInput/src/IPInput.vue?vue&type=template&id=0ed4848f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"ipAddress"},_vm._l((_vm.ipAddress),function(item,index){return _c('li',{key:index},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.value),expression:"item.value"}],ref:"ipInput",refInFor:true,attrs:{"type":"text"},domProps:{"value":(item.value)},on:{"keyup":function($event){return _vm.keyup(index, $event)},"focus":function($event){return _vm.focus(item)},"blur":function($event){return _vm.blur(index)},"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "value", $event.target.value)}}}),_c('span',{directives:[{name:"show",rawName:"v-show",value:((_vm.ipAddress.length - 1) !== index),expression:"(ipAddress.length - 1) !== index"}]})])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/IPInput/src/IPInput.vue?vue&type=template&id=0ed4848f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/IPInput/src/IPInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var IPInputvue_type_script_lang_js_ = ({
  name: 'ip-input',
  props: {
    ip: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      ipAddress: [
        {
          value: ''
        },
        {
          value: ''
        },
        {
          value: ''
        },
        {
          value: ''
        }
      ],
      ipValue: this.ip,
      exceptKey: '=37=38=39=40=17=18=9=8=46=33=34=35=36=144=16=13=',
      cursorPosition_down: -1,
      cursorPosition_up: -1,
      isFocus: false
    }
  },

  watch: {
    ip: {
      handler: function(val) {
        this.ipValue = val
        this.setIpAddress()
      }
    }
  },
  mounted() {
    this.setIpAddress()
  },
  methods: {
    keyup(index, e) {
      const keycode = e.keyCode
      this.cursorPosition_up = -1
      var val = this.$refs.ipInput[index].value.toString()
      if (keycode === 110) {
        if (val !== '') this.tabLeftRight('right', index)
      } else if (this.exceptKey.indexOf('=' + keycode + '=') < 0) {
        val = parseInt(val.replace(/\D/g, ''))
        if (val > 255) val = 255
        this.ipAddress[index].value = val === 0 ? val : (val || '')
        this.checkAndTab(index, keycode)
      } else if (
        keycode === 37 ||
				keycode === 39 ||
				keycode === 8 ||
				keycode === 46
      ) {
        this.checkAndTab(index, keycode)
      }
    },
    blur(index) {
      this.isFocus = false
      let val = this.ipAddress[index].value.toString()
      val = val.replace('.', '')
      this.ipAddress[index].value = val
      const ipValue = this.getIpValue()
      if (ipValue.length > 4) { // 当有值输入时，则进行验证
        this.$emit('update:ip', ipValue)
      }
      // 如果焦点不在IP框上面
      setTimeout(() => {
        if (!this.isFocus) {
          this.$emit('validate')
        }
      }, 10)
    },
    focus() {
      this.isFocus = true
    },
    getCursorPosition(obj) {
      if (obj.selectionStart !== undefined) {
        return obj.selectionStart
      } else {
        var rang = document.selection.createRange()
        rang.moveStart('character', -obj.value.length)
        return rang.text.length
      }
    },
    tabLeftRight(LR, index) {
      if (LR === 'left') {
        index--
        index = index < 0 ? 3 : index
      } else if (LR === 'right') {
        index++
        index = index >= 4 ? 0 : index
      }
      this.$refs.ipInput[index].focus()
    },
    checkAndTab(index, keycode) {
      const obj = this.$refs.ipInput[index]
      this.cursorPosition_up = this.getCursorPosition(obj)

      if (this.cursorPosition_down === this.cursorPosition_up) { // 37左；39右；8退格；46删除
        if (keycode === 37 || keycode === 8) {
          this.tabLeftRight('left', index)
        } else if (keycode === 39) {
          this.tabLeftRight('right', index)
        } else {
          this.tabLeftRight('right', index)
        }
      }
    },
    setIpAddress() {
      if (this.ipValue) {
        const arr = this.ipValue.split('.')
        arr.forEach(function(element, index) {
          this.ipAddress[index].value = element
        }, this)
      } else {
        this.ipAddress.forEach(function(obj) {
          obj.value = ''
        })
      }
    },
    getIpValue() {
      const arr = []
      this.ipAddress.forEach(function(element) {
        arr.push(element.value)
      })
      return arr.join('.')
    }
  }
});

// CONCATENATED MODULE: ./packages/IPInput/src/IPInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IPInputvue_type_script_lang_js_ = (IPInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/IPInput/src/IPInput.vue?vue&type=style&index=0&id=0ed4848f&scoped=true&lang=css&
var IPInputvue_type_style_index_0_id_0ed4848f_scoped_true_lang_css_ = __webpack_require__("9bf2");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/IPInput/src/IPInput.vue






/* normalize component */

var component = normalizeComponent(
  src_IPInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0ed4848f",
  null
  
)

/* harmony default export */ var IPInput = (component.exports);
// CONCATENATED MODULE: ./packages/IPInput/index.js


IPInput.install = function(Vue) {
    Vue.component(IPInput.name, IPInput)
}

/* harmony default export */ var packages_IPInput = (IPInput);
// CONCATENATED MODULE: ./packages/index.js


const components = [
    packages_IPInput
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function(Vue) {
    //是否已经安装
    if (install.installed) return
    components.map(component => {// 遍历注册全局组件
        Vue.component(component.name, component)
    })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
    install, // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    // 组件列表
    IPInput: packages_IPInput
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=mrian.common.js.map