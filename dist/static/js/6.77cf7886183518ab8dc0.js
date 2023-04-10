(self["webpackChunkgithub_pages_framework"] = self["webpackChunkgithub_pages_framework"] || []).push([[6],{

/***/ 8573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nul.breadcrumb[data-v-366f83e8] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  padding-top: 8px;\n  padding-bottom: 7px;\n  padding-left: 1.2rem;\n  margin: 0;\n  list-style: none;\n  background: #f8f8f8;\n  border-bottom: 1px solid #ddd;\n}\nul.breadcrumb li[data-v-366f83e8] {\n  display: inline;\n  font-size: 0.9rem;\n}\nul.breadcrumb li + li[data-v-366f83e8]::before {\n  padding: 8px;\n  color: black;\n  content: \"/\\00a0\";\n}\nul.breadcrumb li a[data-v-366f83e8] {\n  color: #0275d8;\n  text-decoration: none;\n}\nul.breadcrumb li a[data-v-366f83e8]:hover {\n  color: #01447e;\n  text-decoration: underline;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tags[data-v-7ba8904b] {\n  margin-left: 1rem;\n}\n.tag[data-v-7ba8904b] {\n  display: inline-block;\n  padding: 5px;\n  padding-right: 10px;\n  padding-left: 10px;\n  margin: 4px 2px;\n  font-size: 14px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #2d74da;\n  border: none;\n  border-radius: 20px;\n}\n.tag[data-v-7ba8904b]:hover {\n  background-color: #424242;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2006:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DefaultPageRenderer; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DefaultPageRenderer.vue?vue&type=template&id=7ba8904b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    { staticClass: "container", on: { scroll: _vm.handleScroll } },
    [
      _c("Breadcrumb"),
      _vm._v(" "),
      _vm.pageConfig && !_vm.pageConfig.tiles
        ? _c(
            "section",
            {
              staticClass: "banner",
              class: { active: _vm.isActive },
              attrs: { "data-name": _vm.pageConfig.name },
            },
            [
              _c("h2", { staticClass: "banner__title" }, [
                _vm._v(_vm._s(_vm.pageConfig.name)),
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "banner__text" }, [
                _vm._v(_vm._s(_vm.pageConfig.description)),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "banner__timestamp" }, [
                _vm._v("Last Modified: " + _vm._s(_vm.lastModified)),
              ]),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.tags
        ? _c(
            "section",
            { staticClass: "tags" },
            _vm._l(_vm.tags, function (tag, idx) {
              return _c(
                "span",
                {
                  key: idx,
                  staticClass: "tag",
                  attrs: { tabindex: "0" },
                  on: {
                    keyup: function ($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      )
                        return null
                      return _vm.searchTopic(tag)
                    },
                    click: function ($event) {
                      return _vm.searchTopic(tag)
                    },
                  },
                },
                [_vm._v(_vm._s(tag))]
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("vue-markdown", {
        staticClass: "content",
        attrs: { source: _vm.markdown },
      }),
      _vm._v(" "),
      _vm.pageConfig.tiles
        ? _c(
            "ul",
            { staticClass: "cards" },
            _vm._l(_vm.pageConfig.tiles, function (tile, key) {
              return _c(
                "li",
                {
                  key: key,
                  staticClass: "card",
                  style: { backgroundColor: tile.bgColor },
                },
                [
                  _c(
                    "router-link",
                    { attrs: { to: tile.path } },
                    [
                      _c("font-awesome-icon", {
                        staticClass: "card__icon",
                        attrs: { size: "2x", icon: tile.icon },
                      }),
                      _vm._v(" "),
                      _c("h4", { staticClass: "card__title" }, [
                        _vm._v(_vm._s(tile.name)),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card__text" }, [
                        _vm._v(_vm._s(tile.description)),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              )
            }),
            0
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/views/DefaultPageRenderer.vue?vue&type=template&id=7ba8904b&scoped=true&

// EXTERNAL MODULE: ./src/services/configManager.js + 1 modules
var configManager = __webpack_require__(2558);
// EXTERNAL MODULE: ./node_modules/vue-markdown/dist/vue-markdown.common.js
var vue_markdown_common = __webpack_require__(9296);
var vue_markdown_common_default = /*#__PURE__*/__webpack_require__.n(vue_markdown_common);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Breadcrumb.vue?vue&type=template&id=366f83e8&scoped=true&
var Breadcrumbvue_type_template_id_366f83e8_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "ul",
    { staticClass: "breadcrumb" },
    _vm._l(_vm.breadcrumbList, function (breadcrumb, idx) {
      return _c(
        "li",
        {
          key: idx,
          class: { linked: !!breadcrumb.link },
          on: {
            click: function ($event) {
              return _vm.routeTo(breadcrumb.path)
            },
          },
        },
        [
          _c("a", { attrs: { href: "javascript:void(0);" } }, [
            _vm._v(_vm._s(breadcrumb.name)),
          ]),
        ]
      )
    }),
    0
  )
}
var Breadcrumbvue_type_template_id_366f83e8_scoped_true_staticRenderFns = []
Breadcrumbvue_type_template_id_366f83e8_scoped_true_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/Breadcrumb.vue?vue&type=template&id=366f83e8&scoped=true&

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Breadcrumb.vue?vue&type=script&lang=js&



/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  name: 'AppBreadcrumb',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (targetPath) {
      // console.log('shall route to ', targetPath)
      this.$router.push(targetPath)
      // if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () {
      let currentPath = this.$router.currentRoute.path
      this.pageConfig = configManager/* default.getMetaById */.Z.getMetaById(currentPath)

      // calculate the breadcrumb
      // console.log('BreadCrumb ', JSON.stringify(this.pageConfig.breadCrumb))
      this.breadcrumbList = this.pageConfig.breadCrumb
    }
  }
});

;// CONCATENATED MODULE: ./src/components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Breadcrumb.vue?vue&type=style&index=0&id=366f83e8&prod&scoped=true&lang=css&
var Breadcrumbvue_type_style_index_0_id_366f83e8_prod_scoped_true_lang_css_ = __webpack_require__(7910);
;// CONCATENATED MODULE: ./src/components/Breadcrumb.vue?vue&type=style&index=0&id=366f83e8&prod&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/components/Breadcrumb.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  components_Breadcrumbvue_type_script_lang_js_,
  Breadcrumbvue_type_template_id_366f83e8_scoped_true_render,
  Breadcrumbvue_type_template_id_366f83e8_scoped_true_staticRenderFns,
  false,
  null,
  "366f83e8",
  null
  
)

/* harmony default export */ var Breadcrumb = (component.exports);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DefaultPageRenderer.vue?vue&type=script&lang=js&






/* harmony default export */ var DefaultPageRenderervue_type_script_lang_js_ = ({
  components: {
    VueMarkdown: (vue_markdown_common_default()),
    Breadcrumb: Breadcrumb
  },
  data () {
    return {
      markdown: '',
      lastModified: '',
      pageConfig: {},
      tocItems: configManager/* default.getPages */.Z.getPages(),
      isActive: false,
      container: null,
      initialScroll: false,
      isCommentOpen: false,
      comment: '',
      likes: 0,
      dislikes: 0,
      tags: null
    }
  },
  mounted () {
    this.initialize(this.$router.currentRoute.path)
    setTimeout(() => {
      this.scrollTo(this.$route.hash)
    }, 150)

    this.container = document.querySelector('main > .container')
    if (this.container) {
      this.container.addEventListener('scroll', () => {
      })
    }
    console.log('this.container', this.container)
    setTimeout(() => {
      const iframes = document.querySelectorAll('iframe')
      console.log('iframes', iframes)
      for (let iframe of iframes) {
        iframe.addEventListener('load', () => {
          console.log('iframe LOADED')
        })
        console.log('iframe', iframe)
      }
    }, 150)
  },
  watch: {
    '$route' (to, from) {
      if (to.path !== from.path) {
        this.pageConfig = to.meta
        this.initialize()
      } else {
        setTimeout(() => {
          if (to.hash) {
            this.scrollTo(to.hash)
            console.log('to.hash', to.hash)
            if (to.hash.toLowerCase() === '#toc') {
              console.log('this.$route', this.$route)
              this.$router.push({ path: to.path })
              // this.$route.push
            }
          }
        }, 10)
      }
    }
  },
  methods: {
    searchTopic (tag) {
      let filter = `tag:${tag}`
      let query = Object.assign({}, this.$route.query, { search: filter })
      this.$router.push({ query })
    },
    onLoadIFrame (event) {
      console.log('onload iframe', event)
    },
    /**
     * initialize - called whenever the DefaultPageRenderer needs to re-initialize to render a specific page
     */
    initialize () {
      this.tags = null
      if (!this.pageConfig.name) {
        let currentPath = this.$router.currentRoute.path
        this.pageConfig = configManager/* default.getMetaById */.Z.getMetaById(currentPath)
      }

      console.log('PAGECONFIG: ', this.tags)

      // load the markdown resource from its static resources
      this.markdown = ''
      if (this.pageConfig.markdown !== undefined) {
        const pathName = window.location.pathname
        const path = `${pathName.substring(0, pathName.length - 1)}${this.pageConfig.markdown}`
        this.tags = this.pageConfig.tags
        var config = {headers: {'Cache-Control': 'no-cache'}}
        axios_default().get(path, config).then(response => {
          this.lastModified = response.headers['last-modified']
          console.log(this.lastModified)
          this.markdown = response.data
        })
      }
    },
    routeTo (pRouteTo) {
      console.log('expects me to route to ', pRouteTo)
    },
    handleScroll (event) {
      if (event.target.scrollTop >= 155) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    },
    scrollTo (hash) {
      if (hash) {
        let target = document.querySelector(`.content ${hash.toLowerCase()}`)
        if (target) {
          target.scrollIntoView(true)
          this.initialScroll = true
        }
      } else {
        document.querySelector(`main > .container`).scrollTo(0, 0)
        this.initialScroll = true
      }
    },
    // formatTimestamp (timestamp) {
    //   const date = new Date(timestamp)
    //   const formattedDate = new Intl.DateTimeFormat(undefined, {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric'
    //   }).format(date)

    //   return formattedDate
    // }
  }
});

;// CONCATENATED MODULE: ./src/views/DefaultPageRenderer.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_DefaultPageRenderervue_type_script_lang_js_ = (DefaultPageRenderervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DefaultPageRenderer.vue?vue&type=style&index=0&id=7ba8904b&prod&scoped=true&lang=css&
var DefaultPageRenderervue_type_style_index_0_id_7ba8904b_prod_scoped_true_lang_css_ = __webpack_require__(7228);
;// CONCATENATED MODULE: ./src/views/DefaultPageRenderer.vue?vue&type=style&index=0&id=7ba8904b&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/views/DefaultPageRenderer.vue



;


/* normalize component */

var DefaultPageRenderer_component = (0,componentNormalizer/* default */.Z)(
  views_DefaultPageRenderervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7ba8904b",
  null
  
)

/* harmony default export */ var DefaultPageRenderer = (DefaultPageRenderer_component.exports);

/***/ }),

/***/ 7910:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8573);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(2611)/* ["default"] */ .Z)
var update = add("66a2b930", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 7228:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(554);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(2611)/* ["default"] */ .Z)
var update = add("31770304", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);