exports.ids = [41,5,6,13,14,16,17,19,20,21,22,23,24,35];
exports.modules = {

/***/ 25:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=08ebbb70&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer-area bg-img-cover",style:({ backgroundImage: "url('/images/photos/bg-footer.jpg')" })},[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"footer-top\"><div class=\"container\"><div class=\"row\"><div class=\"col-12\"><div class=\"contact-info-content\"><div class=\"contact-info-item\"><div class=\"icon\"><img src=\"/images/icons/c1.png\" alt=\"Icon\" class=\"icon-img\"></div> <div class=\"content\"><h4>Bizi Arayın.</h4> <img src=\"/images/shape/line-s1.png\" alt=\"Icon\" class=\"line-icon\"> "+(_vm._ssrList((_vm.Configs.Telephone),function(tel){return ("<a"+(_vm._ssrAttr("href",("tel://" + (tel.text))))+">"+_vm._ssrEscape(_vm._s(tel.text))+"</a>")}))+"</div></div> <div class=\"contact-info-item\"><div class=\"icon\"><img src=\"/images/icons/c2.png\" alt=\"Icon\" class=\"icon-img\"></div> <div class=\"content\"><h4>Email.</h4> <img src=\"/images/shape/line-s1.png\" alt=\"Icon\" class=\"line-icon\"> "+(_vm._ssrList((_vm.Configs.mail),function(mail){return ("<a"+(_vm._ssrAttr("href",("mailto://" + (mail.text))))+">"+_vm._ssrEscape(_vm._s(mail.text))+"</a>")}))+"</div></div> <div class=\"contact-info-item\"><div class=\"icon\"><img src=\"/images/icons/c3.png\" alt=\"Icon\" class=\"icon-img\"></div> <div class=\"content\"><h4>Adres.</h4> <img src=\"/images/shape/line-s1.png\" alt=\"Icon\" class=\"line-icon\"> <p>"+(_vm._s(_vm.Configs.adres))+"</p></div></div></div></div></div></div></div> "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9 col-lg-8 col-xl-8\">","</div>",[_vm._ssrNode("<div class=\"widget-item mt-0\">","</div>",[_vm._ssrNode("<div class=\"about-widget\">","</div>",[_c('n-link',{staticClass:"footer-logo",attrs:{"to":"/"}},[_c('img',{attrs:{"src":_vm.$options.filters.getImgSrc(_vm.mainUrl,_vm.siteLogoLightUrl),"alt":"Logo"}})]),_vm._ssrNode(" <p>"+_vm._ssrEscape(_vm._s(_vm.Configs.SiteAciklamasi))+"</p> <div class=\"widget-newsletter\"></div>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-8 col-lg-4 col-xl-4\">","</div>",[_vm._ssrNode("<div class=\"widget-item menu-wrap-two-column\">","</div>",[_vm._ssrNode("<h4 class=\"widget-title\">Menü</h4> <img src=\"/images/shape/line-s1.png\" alt=\"shape\" class=\"line-shape\"> "),_vm._ssrNode("<nav class=\"widget-menu-wrap\">","</nav>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-12\">","</div>",[_vm._ssrNode("<ul class=\"nav-menu nav\">","</ul>",_vm._l((_vm.FooterMenu),function(lnk){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":lnk.Link ? lnk.Link : ''}},[_vm._v(_vm._s(lnk.Baslik))])],1)}),0)])])])],2)])],2)]),_vm._ssrNode(" <div class=\"footer-bottom\"><div class=\"container\"><div class=\"footer-bottom-content\"><div class=\"row align-items-center\"><div class=\"col-md-6 order-2 order-md-1\"><div class=\"widget-copyright\"><p>"+_vm._ssrEscape("© "+_vm._s(_vm.year)+" ")+"<span>"+_vm._ssrEscape(_vm._s(_vm.Configs.SiteTitle))+"</span></p></div></div> <div class=\"col-md-6 order-1 order-md-2\"><div class=\"widget-social-icons\">"+(_vm._ssrList((_vm.Configs.Social),function(social){return ("<a"+(_vm._ssrAttr("href",social.link ? social.link : ''))+"><i"+(_vm._ssrClass(null,social.ikon ? 'icofont-' + social.ikon : 'icofont-share'))+"></i></a>")}))+"</div></div></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=08ebbb70&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  async created() {
    await this.getConfig();
    this.year = new Date().getFullYear(); // vue get current year
  },

  data() {
    return {
      mainUrl: this.$axiosUrl,
      Configs: [],
      year: "",
      FooterMenu: [],
      errors: [],
      siteLogoLightUrl: ""
    };
  },

  methods: {
    async getConfig() {
      try {
        const confs = await this.$axios.get(this.$axiosUrl + "ayarlar");
        this.Configs = confs.data;
        this.FooterMenu = confs.data.FooterLinks.menus;
        this.siteLogoLightUrl = confs.data.SiteLogo.url;
      } catch (error) {
        this.errors.push(error);
      }
    }

  },
  filters: {
    getImgSrc(str1, str2) {
      return str1.substring(0, str1.length - 1) + str2;
    }

  }
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6625ea06"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(26).default})


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=9654c42e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header-area header-default transparent sticky-header",class:{'is-sticky': _vm.isSticky}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-3\">","</div>",[_vm._ssrNode("<div class=\"header-logo-area\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"logo-main",attrs:{"src":_vm.$options.filters.getImgSrc(_vm.mainUrl,_vm.siteLogoUrl),"alt":"Logo"}}),_vm._v(" "),_c('img',{staticClass:"logo-light",attrs:{"src":_vm.$options.filters.getImgSrc(_vm.mainUrl,_vm.siteLogoLightUrl),"alt":"Logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-6 col-sm-8 col-lg-9\">","</div>",[_vm._ssrNode("<div class=\"header-align\">","</div>",[_vm._ssrNode("<div class=\"header-navigation-area navigation-style-two\">","</div>",[_c('Navigation')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"header-action-area\">","</div>",[_vm._ssrNode("<button class=\"btn-menu d-xl-none\"><span></span> <span></span> <span></span></button> "),_c('n-link',{staticClass:"btn-theme btn-style",attrs:{"to":"/contact"}},[_vm._v("\n                            Get A Free Quote \n                            "),_c('i',{staticClass:"icon-style icofont-double-right"})])],2)],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=9654c42e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  async created() {
    await this.getConfig();
  },

  components: {
    Navigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29))
  },

  data() {
    return {
      isSticky: false,
      mainUrl: this.$axiosUrl,
      Configs: [],
      errors: [],
      siteLogoUrl: "",
      siteLogoLightUrl: ""
    };
  },

  methods: {
    // offcanvas mobile-menu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    async getConfig() {
      try {
        const configss = await this.$axios.get(this.$axiosUrl + "ayarlar");
        this.Configs = configss.data;
        this.siteLogoUrl = configss.data.SiteLogo.url;
        this.siteLogoLightUrl = configss.data.SiteLogoLight.url;
      } catch (error) {
        this.errors.push(error);
      }
    }

  },
  filters: {
    getImgSrc(str1, str2) {
      return str1.substring(0, str1.length - 1) + str2;
    }

  },

  mounted() {
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;

      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  }

});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f14f6410"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(29).default,Header: __webpack_require__(27).default})


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=0cc9492c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"main-menu nav justify-content-center"},_vm._l((_vm.Menus),function(menu){return _vm._ssrNode("<li"+(_vm._ssrClass(null,{ 'has-submenu': menu.AltMenu.length }))+">","</li>",[(menu.Yayinla)?[_c('n-link',{attrs:{"to":menu.Link ? menu.Link : ''}},[_vm._v(_vm._s(menu.Baslik))]),_vm._ssrNode(" "),(menu.AltMenu.length)?_vm._ssrNode("<ul class=\"submenu-nav\">","</ul>",_vm._l((menu.AltMenu),function(altmenuinfo){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":altmenuinfo.link ? altmenuinfo.link : ''}},[_vm._v(_vm._s(altmenuinfo.baslik))])],1)}),0):_vm._e()]:_vm._e()],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=0cc9492c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({
  async created() {
    await this.getMenus();
  },

  data() {
    return {
      Menus: [],
      errors: []
    };
  },

  methods: {
    async getMenus() {
      try {
        const response = await this.$axios.get(this.$axiosUrl + "menus");
        this.Menus = response.data;
      } catch (error) {
        this.errors.push(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f82787f"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=template&id=4e2d80a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-navigation"},[_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">","</nav>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("About")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"has-children\">","</li>",[_c('n-link',{attrs:{"to":"/service"}},[_vm._v("Service")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/service"}},[_vm._v("Service")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/service-details"}},[_vm._v("Service Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"has-children\">","</li>",[_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Project")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Project")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/project-details"}},[_vm._v("Project Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"has-children\">","</li>",[_c('n-link',{attrs:{"to":"/blog"}},[_vm._v("Blog")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog"}},[_vm._v("Blog")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Blog Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Contact")])],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=template&id=4e2d80a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
/* harmony default export */ var MobileNavigationvue_type_script_lang_js_ = ({
  mounted() {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = e => {
      e.currentTarget.parentElement.classList.toggle('active');
    };

    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
      offcanvasMobileMenu.classList.remove('active');
    };
  }

});
// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavigationvue_type_script_lang_js_ = (MobileNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MobileNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7017b0fe"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=4a323cc6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"offcanvas-mobile-menu",attrs:{"id":"offcanvas-menu"}},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"inner\">","</div>",[_vm._ssrNode("<div class=\"mobile-header\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/logo/logo-light.png","alt":"brand logo"}})])],1),_vm._ssrNode(" <button class=\"mobile-close-btn\"></button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"menu-content\">","</div>",[_c('MobileNavigation')],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=4a323cc6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
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
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({
  components: {
    MobileNavigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 30))
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7eec064d"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileNavigation: __webpack_require__(30).default})


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageTitle.vue?vue&type=template&id=572b1744&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"page-title-area",style:({ backgroundImage: "url('/images/photos/bg-page-title.jpg')" })},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"page-title-content\">","</div>",[_vm._ssrNode("<h2 class=\"title text-white\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> "),_vm._ssrNode("<div class=\"bread-crumbs\">","</div>",[_vm._ssrNode("<img src=\"/images/shape/line-s3.png\" alt=\"shape\" class=\"line-shape\"> "),_c('n-link',{attrs:{"to":"/"}},[_vm._v(" Home "),_c('span',{staticClass:"breadcrumb-sep"},[_vm._v("/")])]),_vm._ssrNode(" <span class=\"active\">"+_vm._ssrEscape(_vm._s(_vm.breadcrumbTitle))+"</span>")],2)],2)])])]),_vm._ssrNode(" <div data-aos=\"fade-right\" data-aos-duration=\"1100\" class=\"page-sidebar\"><div class=\"social-icon\">"+(_vm._ssrList((_vm.Configs.Social),function(social){return ("<a"+(_vm._ssrAttr("href",social.link ? social.link : ''))+"><i"+(_vm._ssrClass(null,social.ikon ? 'icofont-' + social.ikon : 'icofont-share'))+"></i></a>")}))+"</div></div> <div class=\"layer-shape\"><img src=\"/images/shape/1.png\" alt=\"shape\" class=\"layer-shape-one\"> <img src=\"/images/shape/4.png\" alt=\"shape\" class=\"layer-shape-two\"> <img src=\"/images/shape/5.png\" alt=\"shape\" class=\"layer-shape-three\"> <img src=\"/images/shape/3.png\" alt=\"shape\" class=\"layer-shape-four\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PageTitle.vue?vue&type=template&id=572b1744&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageTitle.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PageTitlevue_type_script_lang_js_ = ({
  props: ['title', 'breadcrumbTitle'],

  async created() {
    await this.getConfig();
  },

  data() {
    return {
      mainUrl: this.$axiosUrl,
      Configs: [],
      errors: []
    };
  },

  methods: {
    async getConfig() {
      try {
        const confs = await this.$axios.get(this.$axiosUrl + "ayarlar");
        this.Configs = confs.data;
      } catch (error) {
        this.errors.push(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/PageTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageTitlevue_type_script_lang_js_ = (PageTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PageTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2cf4aa24"
  
)

/* harmony default export */ var PageTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactDevider.vue?vue&type=template&id=74e7da70&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"contact-divider-area",style:({ backgroundColor: '#f6f7fc' })},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-md-9 col-lg-8\"><div data-aos=\"fade-up\" data-aos-duration=\"1100\" class=\"contact-divider-content\"><div class=\"section-title\"><div class=\"subtitle-content\"><img src=\"/images/shape/line1.png\" alt=\"shape\"> <h5>"+_vm._ssrEscape(_vm._s(_vm.Devider.SmallText))+"</h5></div> <h2 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.Devider.text)+" ")+"<span class=\"bottom-style\">"+_vm._ssrEscape(_vm._s(_vm.Devider.text2))+"</span></h2></div></div></div> "),_vm._ssrNode("<div class=\"col-md-3 col-lg-4 text-left text-md-right\">","</div>",[_c('n-link',{staticClass:"btn btn-theme",attrs:{"to":_vm.DeviderBtn.link ? _vm.DeviderBtn.link : '',"data-aos":"fade-up","data-aos-duration":"1100"}},[_vm._v(_vm._s(_vm.DeviderBtn.title)+" "),_c('i',{staticClass:"icon icofont-long-arrow-right"})])],1)],2)]),_vm._ssrNode(" <div class=\"layer-shape\"><img src=\"/images/shape/15.png\" alt=\"shape\" class=\"shape-style1\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ContactDevider.vue?vue&type=template&id=74e7da70&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactDevider.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ContactDevidervue_type_script_lang_js_ = ({
  async created() {
    await this.getDevider();
  },

  data() {
    return {
      mainUrl: this.$axiosUrl,
      Devider: [],
      DeviderBtn: [],
      errors: []
    };
  },

  methods: {
    async getDevider() {
      try {
        const confs = await this.$axios.get(this.$axiosUrl + `pages?Slug=${this.$route.params.page}`);

        if (confs.data[0].Content != null) {
          confs.data[0].Content.forEach(elem => {
            if (elem.__component == "page.contact-divider") {
              this.Devider = elem;
              this.DeviderBtn = elem.Button;
            }
          });
        }
      } catch (error) {
        this.errors.push(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/ContactDevider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactDevidervue_type_script_lang_js_ = (ContactDevidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactDevider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactDevidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59a840c8"
  
)

/* harmony default export */ var ContactDevider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=template&id=cf9abc0e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scene",class:_vm.addClassName},[_vm._ssrNode("<span"+(_vm._ssrAttr("data-depth",_vm.dataDepth))+" class=\"scene-layer\"><img"+(_vm._ssrAttr("src",_vm.imgSrc))+" alt=\"shape image\"></span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=template&id=cf9abc0e&

// EXTERNAL MODULE: external "parallax-js"
var external_parallax_js_ = __webpack_require__(24);
var external_parallax_js_default = /*#__PURE__*/__webpack_require__.n(external_parallax_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var ShapeWithAnimationvue_type_script_lang_js_ = ({
  props: ['addClassName', 'imgSrc', 'dataDepth'],

  mounted() {
    var scene = document.querySelectorAll('.scene');

    if (scene) {
      scene.forEach((el, i) => {
        new external_parallax_js_default.a(el);
      });
    }

    ;
  }

});
// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShapeWithAnimationvue_type_script_lang_js_ = (ShapeWithAnimationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShapeWithAnimationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a694628"
  
)

/* harmony default export */ var ShapeWithAnimation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactWrapper.vue?vue&type=template&id=52be677e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"contact-area"},[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"contact-info-light\""+(_vm._ssrStyle(null,{ display: 'none' }, null))+" data-v-52be677e><div class=\"contact-info-content\" data-v-52be677e><div class=\"contact-info-item\" data-v-52be677e><div class=\"icon\" data-v-52be677e><img src=\"/images/icons/c1.png\" alt=\"Icon\" class=\"icon-img\" data-v-52be677e></div> <div class=\"content\" data-v-52be677e><h4 data-v-52be677e>Bizi Arayın.</h4> <img src=\"/images/shape/line-s1.png\" alt=\"Icon\" class=\"line-icon\" data-v-52be677e> "+(_vm._ssrList((_vm.Configs.Telephone),function(tel){return ("<a"+(_vm._ssrAttr("href",("tel://" + (tel.text))))+" data-v-52be677e>"+_vm._ssrEscape(_vm._s(tel.text))+"</a>")}))+"</div></div> <div class=\"contact-info-item\" data-v-52be677e><div class=\"icon\" data-v-52be677e><img src=\"/images/icons/c2.png\" alt=\"Icon\" class=\"icon-img\" data-v-52be677e></div> <div class=\"content\" data-v-52be677e><h4 data-v-52be677e>Email.</h4> <img src=\"/images/shape/line-s1.png\" alt=\"Icon\" class=\"line-icon\" data-v-52be677e> "+(_vm._ssrList((_vm.Configs.mail),function(mail){return ("<a"+(_vm._ssrAttr("href",("mailto://" + (mail.text))))+" data-v-52be677e>"+_vm._ssrEscape(_vm._s(mail.text))+"</a>")}))+"</div></div> <div class=\"contact-info-item\" data-v-52be677e><div class=\"icon\" data-v-52be677e><img src=\"/images/icons/c3.png\" alt=\"Icon\" class=\"icon-img\" data-v-52be677e></div> <div class=\"content\" data-v-52be677e><h4 data-v-52be677e>Adres.</h4> <img src=\"/images/shape/line-s1.png\" alt=\"Icon\" class=\"line-icon\" data-v-52be677e> <p data-v-52be677e>"+(_vm._s(_vm.Configs.adres))+"</p></div></div></div></div> <div class=\"container\" data-v-52be677e><div class=\"row\" data-v-52be677e><div class=\"col-lg-12\" data-v-52be677e><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"contact-colunm\" data-v-52be677e><div class=\"contact-map-area\" data-v-52be677e><iframe"+(_vm._ssrAttr("src",_vm.Mapframe))+" data-v-52be677e></iframe></div> <div class=\"contact-form\" data-v-52be677e><form class=\"contact-form-wrapper\" data-v-52be677e><div class=\"row\" data-v-52be677e><div class=\"col-lg-12\" data-v-52be677e><div class=\"section-title\" data-v-52be677e><div class=\"subtitle-content\" data-v-52be677e><img src=\"/images/shape/line-s4.png\" alt=\"shape\" data-v-52be677e> <h5 class=\"text-light\" data-v-52be677e>İletişime geçin.</h5></div> <h2 class=\"title text-light\" data-v-52be677e>Mesaj <span data-v-52be677e>Bırakın.</span></h2> <div class=\"separator-line\" data-v-52be677e><img src=\"/images/shape/line-s4.png\" alt=\"shape\" data-v-52be677e> <img src=\"/images/shape/line-s4.png\" alt=\"shape\" data-v-52be677e></div></div></div></div> <div class=\"row\" data-v-52be677e><div class=\"col-md-12\" data-v-52be677e><div class=\"form-group\" data-v-52be677e><input type=\"text\" name=\"con_name\" placeholder=\"İsim Soyisim\" class=\"form-control\" data-v-52be677e></div></div> <div class=\"col-md-12\" data-v-52be677e><div class=\"form-group\" data-v-52be677e><input type=\"email\" name=\"con_email\" placeholder=\"Email Adresi\" class=\"form-control\" data-v-52be677e></div></div> <div class=\"col-md-12\" data-v-52be677e><div class=\"form-group\" data-v-52be677e><input type=\"text\" name=\"con_phone\" placeholder=\"Telefon Numarası\" class=\"form-control\" data-v-52be677e></div></div> <div class=\"col-md-12\" data-v-52be677e><div class=\"form-group mb-0\" data-v-52be677e><textarea name=\"con_message\" placeholder=\"Mesaj\" data-v-52be677e></textarea></div></div> <div class=\"col-md-12\" data-v-52be677e><div class=\"form-group mb-0\" data-v-52be677e><button type=\"submit\" class=\"btn btn-theme\" data-v-52be677e>Gönder <i class=\"icofont-long-arrow-right\" data-v-52be677e></i></button></div></div></div></form></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ContactWrapper.vue?vue&type=template&id=52be677e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactWrapper.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ContactWrappervue_type_script_lang_js_ = ({
  async created() {
    await this.getConfig();
  },

  data() {
    return {
      mainUrl: this.$axiosUrl,
      Configs: [],
      Mapframe: "",
      errors: []
    };
  },

  methods: {
    async getConfig() {
      try {
        const confs = await this.$axios.get(this.$axiosUrl + "ayarlar");
        this.Configs = confs.data;
        this.Mapframe = confs.data.map;
      } catch (error) {
        this.errors.push(error);
      }
    },

    async sendMail() {
      await this.$axios.post(this.$axiosUrl + "mail/mail.php", {
        name: 'Test',
        mail: 'test@mail.com',
        subject: 'Subject',
        message: 'Test message'
      });
    }

  }
});
// CONCATENATED MODULE: ./components/ContactWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactWrappervue_type_script_lang_js_ = (ContactWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactWrapper.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "52be677e",
  "129bac84"
  
)

/* harmony default export */ var ContactWrapper = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSlider.vue?vue&type=template&id=48b28e96&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"home-slider-area slider-default"},[_vm._ssrNode("<div class=\"home-slider-content\">","</div>",[_vm._ssrNode("<div class=\"home-slider-container\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.Slides),function(slide){return _c('div',{key:slide.id,staticClass:"swiper-slide home-slider-item",style:({ backgroundImage: "url('/images/slider/bg1.jpg')" })},[_c('div',{staticClass:"slider-content-area"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"subtitle-content"},[_c('img',{attrs:{"src":"/images/shape/line1.png","alt":"Images"}}),_vm._v(" "),_c('h6',[_vm._v(_vm._s(slide.smallText))])]),_vm._v(" "),_c('div',{staticClass:"tittle-wrp"},[_c('h2',[_vm._v(_vm._s(slide.mainText)+" "),_c('span',[_vm._v(_vm._s(slide.mainTextSecond))])])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(slide.description))]),_vm._v(" "),_c('n-link',{staticClass:"btn btn-theme btn-theme-color2",attrs:{"to":slide.button.link ? slide.button.link : ''}},[_vm._v(_vm._s(slide.button.title)+" "),_c('i',{staticClass:"icon icofont-long-arrow-right"})])],1),_vm._v(" "),_c('div',{staticClass:"layer-style"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":_vm.$options.filters.getImgSrc(_vm.mainUrl,slide.Photo.url),"alt":"Images"}})]),_vm._v(" "),_c('div',{staticClass:"success-rate"},[_c('div',{staticClass:"content"},[_vm._v(_vm._s(slide.CircleOnPhoto.topText)+" "),_c('span',[_vm._v(_vm._s(slide.CircleOnPhoto.bottomText))])])]),_vm._v(" "),_c('div',{staticClass:"trusted-clients-content"},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$options.filters.getTrust(slide.clientsOnPhoto.Text))}}),_vm._v(" "),_c('ul',{staticClass:"clients-list"},_vm._l((slide.clientsOnPhoto.Clients),function(client){return _c('li',{key:client.id},[_c('img',{attrs:{"src":_vm.$options.filters.getImgSrc(_vm.mainUrl,client.url),"alt":"Images"}})])}),0)]),_vm._v(" "),_c('div',{staticClass:"shape-style1"},[_c('img',{attrs:{"src":"/images/shape/1.png","alt":"Images"}})]),_vm._v(" "),_c('div',{staticClass:"shape-style2"},[_c('img',{attrs:{"src":"/images/shape/2.png","alt":"Images"}})]),_vm._v(" "),_c('div',{staticClass:"shape-style3"},[_c('img',{attrs:{"src":"/images/shape/3.png","alt":"Images"}})]),_vm._v(" "),_c('div',{staticClass:"shape-style4"},[_c('img',{attrs:{"src":"/images/shape/4.png","alt":"Images"}})]),_vm._v(" "),_c('div',{staticClass:"shape-style5"},[_c('img',{attrs:{"src":"/images/shape/5.png","alt":"Images"}})])])])])}),0),_vm._ssrNode(" <div class=\"swiper-button-next\"><i class=\"icofont-rounded-double-right\"></i></div> <div class=\"swiper-button-prev\"><i class=\"icofont-rounded-double-left\"></i></div>")],2)]),_vm._ssrNode(" <div data-aos=\"fade-zoom-in\" data-aos-duration=\"1300\" class=\"home-slider-sidebar\""+(_vm._ssrStyle(null,{ backgroundColor: "#19ce67" }, null))+"><div class=\"social-icon\">"+(_vm._ssrList((_vm.Configs.Social),function(social){return ("<a"+(_vm._ssrAttr("href",social.link ? social.link : ''))+"><i"+(_vm._ssrClass(null,social.ikon ? 'icofont-' + social.ikon : 'icofont-share'))+"></i></a>")}))+"</div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeroSlider.vue?vue&type=template&id=48b28e96&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSlider.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HeroSlidervue_type_script_lang_js_ = ({
  async created() {
    await this.getSlides();
    await this.getConfig();
  },

  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        autoplay: false,
        navigation: {
          nextEl: '.home-slider-container .swiper-button-next',
          prevEl: '.home-slider-container .swiper-button-prev'
        }
      },
      Slides: [],
      Configs: [],
      mainUrl: this.$axiosUrl,
      errors: []
    };
  },

  methods: {
    async getSlides() {
      try {
        const response = await this.$axios.get(this.$axiosUrl + "slides");
        this.Slides = response.data;
      } catch (error) {
        this.errors.push(error);
      }
    },

    async getConfig() {
      try {
        const response = await this.$axios.get(this.$axiosUrl + "ayarlar");
        this.Configs = response.data;
      } catch (error) {
        this.errors.push(error);
      }
    }

  },
  filters: {
    getTrust(string) {
      return string.split(' ').join('<br>');
    },

    getImgSrc(str1, str2) {
      return str1.substring(0, str1.length - 1) + str2;
    }

  }
});
// CONCATENATED MODULE: ./components/HeroSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroSlidervue_type_script_lang_js_ = (HeroSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeroSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "73bd9734"
  
)

/* harmony default export */ var HeroSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutOne.vue?vue&type=template&id=0d046406&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"about-area about-default-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-5 md-text-center\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"layer-style\">","</div>",[_vm._ssrNode("<div class=\"thumb tilt-animation\"><img"+(_vm._ssrAttr("src",_vm.$options.filters.getImgSrc(_vm.mainUrl,_vm.MainImage)))+" alt=\"Images\"></div> <div class=\"shape-style1\"><img src=\"/images/shape/circle-line1.png\" alt=\"Images\"></div> "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-style2","imgSrc":"/images/shape/circle-shape1.png","data-depth":".6"}}),_vm._ssrNode(" <div class=\"experience-time\"><div class=\"content\">"+_vm._ssrEscape(_vm._s(_vm.aboutContent.experienceTop))+"<sup>"+_vm._ssrEscape(_vm._s(_vm.aboutContent.experienceSup))+"</sup> <span>"+_vm._ssrEscape(_vm._s(_vm.aboutContent.experienceBottom))+"</span></div></div>")],2)]),_vm._ssrNode(" <div class=\"col-lg-6 offset-lg-1\"><div class=\"about-content\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title xs-text-center\"><h2 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.aboutContent.Title)+" ")+"<span class=\"bottom-style\">"+_vm._ssrEscape(_vm._s(_vm.aboutContent.TitleSecond))+"</span></h2> <div class=\"desc\"><p class=\"mt-20\">"+_vm._ssrEscape(_vm._s(_vm.aboutContent.description))+"</p></div></div> <div data-aos=\"fade-up\" data-aos-duration=\"1200\" class=\"list-icon-style\"><ul>"+(_vm._ssrList((_vm.aboutContent.Items),function(item){return ("<li><i"+(_vm._ssrClass(null,item.icon))+"></i>"+_vm._ssrEscape(" "+_vm._s(item.text))+"</li>")}))+"</ul></div></div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutOne.vue?vue&type=template&id=0d046406&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutOne.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AboutOnevue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 42))
  },

  async created() {
    await this.getDatas();
  },

  data() {
    return {
      MainImage: "",
      mainUrl: this.$axiosUrl,
      aboutContent: [],
      aboutContentButton: [],
      errors: []
    };
  },

  methods: {
    async getDatas() {
      try {
        const response = await this.$axios.get(this.$axiosUrl + `pages?Slug=${this.$route.params.page}`);

        if (response.data[0] != null) {
          this.Title = response.data[0].Title;
          let pageDetails = response.data[0].Content.filter(function (elem) {
            if (elem.__component == "page.about-one") return elem;
          })[0];
          this.aboutContent = pageDetails;
          this.MainImage = pageDetails.image.url;
        } else {//window.location.href = '/';
        }
      } catch (error) {
        this.errors.push(error);
      }
    }

  },
  filters: {
    getImgSrc(str1, str2) {
      return str1.substring(0, str1.length - 1) + str2;
    }

  }
});
// CONCATENATED MODULE: ./components/AboutOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutOnevue_type_script_lang_js_ = (AboutOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cd3e6f78"
  
)

/* harmony default export */ var AboutOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(42).default})


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureList.vue?vue&type=template&id=73bee1e3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"feature-area feature-about-area"},[_vm._ssrNode("<div class=\"container\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"row feature-list\">"+(_vm._ssrList((_vm.features),function(feature,index){return ("<div class=\"col-lg-4\"><div class=\"feature-list-item\"><div class=\"icon\"><img"+(_vm._ssrAttr("src",_vm.$options.filters.getImgSrc(_vm.mainUrl,feature.icon.url)))+(_vm._ssrAttr("alt",feature.title))+" class=\"img-icon\"></div>"+_vm._ssrEscape(" \n                    "+_vm._s(feature.title)+"\n                ")+"</div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FeatureList.vue?vue&type=template&id=73bee1e3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureList.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FeatureListvue_type_script_lang_js_ = ({
  async created() {
    await this.getDatas();
  },

  data() {
    return {
      mainUrl: this.$axiosUrl,
      features: [],
      errors: []
    };
  },

  methods: {
    async getDatas() {
      try {
        const response = await this.$axios.get(this.$axiosUrl + `pages?Slug=${this.$route.params.page}`);

        if (response.data[0] != null) {
          let pageDetails = response.data[0].Content.filter(function (elem) {
            if (elem.__component == "page.feature-list-component") return elem;
          })[0];
          this.features = pageDetails.Feature;
        } else {//window.location.href = '/';
        }
      } catch (error) {
        this.errors.push(error);
      }
    }

  },
  filters: {
    getImgSrc(str1, str2) {
      return str1.substring(0, str1.length - 1) + str2;
    }

  }
});
// CONCATENATED MODULE: ./components/FeatureList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeatureListvue_type_script_lang_js_ = (FeatureListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FeatureList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeatureListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35f57c4e"
  
)

/* harmony default export */ var FeatureList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutTwo.vue?vue&type=template&id=481c8b24&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.status)?_c('section',{staticClass:"about-area"},[_vm._ssrNode("<div class=\"position-relative\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-0\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"layer-about-style\"><div class=\"thumb tilt-animation\"><img"+(_vm._ssrAttr("src",_vm.$options.filters.getImgSrc(_vm.mainUrl,_vm.MainImage)))+" alt=\"image\"></div> <div class=\"shape-style1\"><img src=\"/images/shape/1.png\" alt=\"image\"></div> <div class=\"experience-time\"><div class=\"content\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.aboutContent.experinceTop))+"<sup>"+_vm._ssrEscape(_vm._s(_vm.aboutContent.experinceSup))+"</sup> <div class=\"line-separetor\"><img src=\"/images/shape/line-s4.png\" alt=\"image\"> <img src=\"/images/shape/line-s4.png\" alt=\"image\"></div> <span>"+_vm._ssrEscape(_vm._s(_vm.aboutContent.experinceBottom))+"</span></div></div></div></div> <div class=\"col-lg-12 col-xl-6\"><div class=\"about-content-style2\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title\"><div class=\"subtitle-content\"><img src=\"/images/shape/line1.png\" alt=\"image\"> <h5>"+_vm._ssrEscape(_vm._s(_vm.Title))+"</h5></div> <h2 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.aboutContent.AboutTitle)+" ")+"<span>"+_vm._ssrEscape(_vm._s(_vm.aboutContent.AboutTitleSecond))+"</span></h2> <p>"+_vm._ssrEscape(_vm._s(_vm.aboutContent.AboutUnderTitle))+"</p></div> <div data-aos=\"fade-up\" data-aos-duration=\"1200\" class=\"inner-content\"><p>"+(_vm._s(_vm.aboutContent.AboutDescription))+"</p> <div class=\"inline-style\"><a"+(_vm._ssrAttr("href",_vm.aboutContentButton.link))+" class=\"btn btn-theme btn-border\">"+_vm._ssrEscape("\n                                    "+_vm._s(_vm.aboutContentButton.title)+"\n                                    ")+"<i class=\"icon icofont-long-arrow-right\"></i></a></div></div></div></div></div></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutTwo.vue?vue&type=template&id=481c8b24&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutTwo.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
/* harmony default export */ var AboutTwovue_type_script_lang_js_ = ({
  async created() {
    await this.getDatas();
  },

  data() {
    return {
      status: false,
      Title: "",
      MainImage: "",
      mainUrl: this.$axiosUrl,
      aboutContent: [],
      aboutContentButton: [],
      errors: []
    };
  },

  methods: {
    async getDatas() {
      try {
        const response = await this.$axios.get(this.$axiosUrl + `pages?Slug=${this.$route.params.page}`);

        if (response.data[0] != null) {
          this.Title = response.data[0].Title;
          let pageDetails = response.data[0].Content.filter(function (elem) {
            if (elem.__component == "page.about-two") return elem;
          })[0];
          this.status = pageDetails.status;
          this.aboutContent = pageDetails;
          this.MainImage = pageDetails.mainImage.url;
          this.aboutContentButton = pageDetails.experinceButton;
        } else {//window.location.href = '/';
        }
      } catch (error) {
        this.errors.push(error);
      }
    }

  },
  filters: {
    getImgSrc(str1, str2) {
      return str1.substring(0, str1.length - 1) + str2;
    }

  }
});
// CONCATENATED MODULE: ./components/AboutTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutTwovue_type_script_lang_js_ = (AboutTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9c6f0dac"
  
)

/* harmony default export */ var AboutTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_page.vue?vue&type=template&id=b35f4bf4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-page-wrapper"},[_c('Header'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),(_vm.slider)?_c('HeroSlider'):_vm._e(),_vm._ssrNode(" "),(_vm.PageTitle)?_c('PageTitle',{attrs:{"title":_vm.headTitle,"breadcrumbTitle":_vm.headTitle}}):_vm._e(),_vm._ssrNode(" "),(_vm.FeatureList)?_c('FeatureList'):_vm._e(),_vm._ssrNode(" "),(_vm.AboutTwo)?_c('AboutTwo'):_vm._e(),_vm._ssrNode(" "),(_vm.AboutOne)?_c('AboutOne'):_vm._e(),_vm._ssrNode(" "),(_vm.ContactWrapper)?_c('ContactWrapper'):_vm._e(),_vm._ssrNode(" "),(_vm.ContactDevider)?_c('ContactDevider'):_vm._e(),_vm._ssrNode(" "),_c('Footer'),_vm._ssrNode(" "),_c('client-only',[_c('back-to-top',{staticClass:"scroll-top",attrs:{"bottom":"30px"}},[_c('i',{staticClass:"arrow-top icofont-rounded-up"}),_vm._v(" "),_c('i',{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_page.vue?vue&type=template&id=b35f4bf4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_page.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _pagevue_type_script_lang_js_ = ({
  async created() {
    await this.getDatas();
  },

  data() {
    return {
      headTitle: "",
      PageTitle: false,
      slider: false,
      FeatureList: false,
      AboutOne: false,
      AboutTwo: false,
      ContactWrapper: false,
      ContactDevider: false,
      errors: []
    };
  },

  methods: {
    async getDatas() {
      try {
        const response = await this.$axios.get(this.$axiosUrl + `pages?Slug=${this.$route.params.page}`);

        if (response.data[0] != null) {
          this.headTitle = response.data[0].Title;
          response.data[0].Content.forEach(elem => {
            if (elem.__component == "page.slider") {
              this.slider = elem.Status;
            }

            if (elem.__component == "page.page-title") {
              this.PageTitle = elem.Status;
            }

            if (elem.__component == "page.feature-list-component") {
              this.FeatureList = elem.status;
            }

            if (elem.__component == "page.about-two") {
              this.AboutTwo = elem.status;
            }

            if (elem.__component == "page.about-one") {
              this.AboutOne = elem.Status;
            }

            if (elem.__component == "page.contact-divider") {
              this.ContactDevider = elem.Status;
            }

            if (elem.__component == "page.contact") {
              this.ContactWrapper = elem.Status;
            }
          });
        } else {
          window.location.href = '/anasayfa';
        }
      } catch (error) {
        this.errors.push(error);
      }
    }

  },
  components: {
    Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31)),
    HeroSlider: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 46)),
    PageTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)),
    FeatureList: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 66)),
    AboutOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 47)),
    AboutTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 67)),
    FunFactOne: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 58)),
    TeamSection: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 61)),
    BrandLogoSection: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 64)),
    TestimonialOne: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 63)),
    ContactWrapper: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 43)),
    ContactDevider: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26))
  },

  head() {
    return {
      title: this.headTitle
    };
  }

});
// CONCATENATED MODULE: ./pages/_page.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_pagevue_type_script_lang_js_ = (_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_page.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "28a28d4a"
  
)

/* harmony default export */ var _page = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(27).default,OffCanvasMobileMenu: __webpack_require__(31).default,HeroSlider: __webpack_require__(46).default,PageTitle: __webpack_require__(33).default,FeatureList: __webpack_require__(66).default,AboutTwo: __webpack_require__(67).default,AboutOne: __webpack_require__(47).default,ContactWrapper: __webpack_require__(43).default,ContactDevider: __webpack_require__(34).default,Footer: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=_page.js.map