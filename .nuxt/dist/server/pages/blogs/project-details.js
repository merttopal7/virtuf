exports.ids = [46,13,17,19,21,22,23,24,26];
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

/***/ 32:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioDetailsWrapper.vue?vue&type=template&id=431ea65d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"portfolio-details-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"portfolio-details-content\">","</div>",[_vm._ssrNode("<div class=\"portfolio-tab-content\"><div class=\"thumb\"><img src=\"/images/portfolio/tab-b1.jpg\" alt=\"image\"></div> <div class=\"portfolio-info-list\"><h4>Information</h4> <div class=\"separator-line\"><img src=\"/images/shape/line-s4.png\" alt=\"image\" class=\"me-1\"> <img src=\"/images/shape/line-s4.png\" alt=\"image\"></div> <ul class=\"info-list-style\"><li><span>Project</span> <span>Digital Marketing</span></li> <li><span>Clients</span> <span>Kenneth Glover</span></li> <li><span>Budget</span> <span>$598.75</span></li> <li><span>Duration</span> <span>01 Year &amp; 05 Months</span></li> <li><span>Location</span> <span>95 St, New York, 259 New York, USA</span></li></ul></div></div> <h2 class=\"title\">Market Statics &amp; Analysis</h2> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"image\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"image\"></div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ially unchanged. It was popularised in the 1960s with the release of Letraset sheets an contaning orem Ipsum passages, and more recently with desktop publishing software like pageMaker including versions of Lorem Ipsum.</p> <p class=\"mb-39\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ially unchanged. It was popularised in the 1960s with the release.</p> <h2 class=\"title\">Running &amp; Protected</h2> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"image\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"image\"></div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ially unchanged. It was popularised in the 1960s with the release of Letraset sheets an contaning orem Ipsum passages, and more recently with desktop publishing software like pageMaker including versions of Lorem Ipsum.</p> <p class=\"mb-0\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ially unchanged. It was popularised in the 1960s with the release.</p> "),_vm._ssrNode("<div class=\"video-divider\">","</div>",[_vm._ssrNode("<img src=\"/images/photos/video1.jpg\" alt=\"image\"> "),_c('CoolLightBox',{attrs:{"items":_vm.items,"index":_vm.index},on:{"close":function($event){_vm.index = null}}}),_vm._ssrNode(" "+(_vm._ssrList((_vm.items),function(image,imageIndex){return ("<a href=\"javascript:void(0)\" class=\"btn-play play-video-popup\"><span class=\"icon\"><img src=\"/images/icons/play.png\" alt=\"image\"></span></a>")}))+" <span class=\"video-duration\">02 Min Intro Video</span>")],2),_vm._ssrNode(" <h2 class=\"title\">Project Summery</h2> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"image\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"image\"></div> <p class=\"mb-13\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ially unchanged. It was popularised in the 1960s with the release of Letraset sheets an contaning orem Ipsum passages, and more recently with desktop publishing software like pageMaker including versions of  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ially unchanged. It was popularised in the 1960s with the release.</p> <p class=\"mb-0\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> "),_vm._ssrNode("<div class=\"category-social-content\">","</div>",[_vm._ssrNode("<div class=\"category-items\">","</div>",[_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Business")]),_vm._ssrNode(" "),_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Marketing")]),_vm._ssrNode(" "),_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Consulting")])],2),_vm._ssrNode(" <div class=\"social-items\"><a href=\"#\"><i class=\"icofont-facebook\"></i></a> <a href=\"#\"><i class=\"icofont-skype\"></i></a> <a href=\"#\"><i class=\"icofont-instagram\"></i></a></div>")],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"page-navigation\">","</div>",[_vm._ssrNode("<div class=\"nav-item prev\">","</div>",[_vm._ssrNode("<div class=\"thumb\"><img src=\"/images/portfolio/nav1.jpg\" alt=\"image\"> <a href=\"#\"><i class=\"icofont-double-left\"></i></a></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<img src=\"/images/shape/line-s1.png\" alt=\"image\" class=\"line-shape\"> <h4><a href=\"#\">Digital Marketing</a></h4> "),_c('n-link',{staticClass:"category",attrs:{"to":"/project"}},[_vm._v("Business / Marketing")])],2)],2),_vm._ssrNode(" <div class=\"nav-item-center\"><a href=\"#\"><img src=\"/images/icons/dot.png\" alt=\"image\"></a></div> "),_vm._ssrNode("<div class=\"nav-item next\">","</div>",[_vm._ssrNode("<div class=\"thumb\"><img src=\"/images/portfolio/nav2.jpg\" alt=\"image\"> <a href=\"#\"><i class=\"icofont-double-right\"></i></a></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<img src=\"/images/shape/line-s1.png\" alt=\"image\" class=\"line-shape\"> <h4><a href=\"#\">Business Consulting</a></h4> "),_c('n-link',{staticClass:"category",attrs:{"to":"/project"}},[_vm._v("Business / Marketing")])],2)],2)],2)])]),_vm._ssrNode(" <div class=\"row\"><div class=\"col-lg-12\"><div data-aos=\"fade-up\" data-aos-duration=\"1100\" class=\"comment-form\"><div class=\"section-title text-center\"><h2 class=\"title\">Leave a <span>Comments.</span></h2></div> <div class=\"row\"><div class=\"col-lg-10 m-auto\"><form><div class=\"comment-form-content\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Name\" required=\"required\" class=\"form-control\"></div></div> <div class=\"col-md-6\"><div class=\"form-group\"><input type=\"email\" placeholder=\"Email Address\" required=\"required\" class=\"form-control\"></div></div> <div class=\"col-md-12\"><div class=\"form-group\"><textarea name=\"comment\" id=\"comment\" cols=\"45\" rows=\"7\" placeholder=\"Message\" required=\"required\" class=\"form-control textarea\"></textarea></div></div></div> <div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group group-style mb-0\"><button type=\"submit\" class=\"btn btn-theme\">Submit Now <i class=\"icon icofont-long-arrow-right\"></i></button></div></div></div></div></form></div></div></div></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PortfolioDetailsWrapper.vue?vue&type=template&id=431ea65d&

// EXTERNAL MODULE: external "vue-cool-lightbox"
var external_vue_cool_lightbox_ = __webpack_require__(23);
var external_vue_cool_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_vue_cool_lightbox_);

// EXTERNAL MODULE: ./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css
var vue_cool_lightbox_min = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioDetailsWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var PortfolioDetailsWrappervue_type_script_lang_js_ = ({
  components: {
    CoolLightBox: external_vue_cool_lightbox_default.a
  },

  data() {
    return {
      items: [{
        src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
        autoplay: true
      }],
      index: null
    };
  }

});
// CONCATENATED MODULE: ./components/PortfolioDetailsWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PortfolioDetailsWrappervue_type_script_lang_js_ = (PortfolioDetailsWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PortfolioDetailsWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PortfolioDetailsWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4595367e"
  
)

/* harmony default export */ var PortfolioDetailsWrapper = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/project-details.vue?vue&type=template&id=0e18a2ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio-details-page-wrapper"},[_c('Header'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('PageTitle',{attrs:{"title":"Market Statics & Analysis","breadcrumbTitle":"Project Details"}}),_vm._ssrNode(" "),_c('PortfolioDetailsWrapper'),_vm._ssrNode(" "),_c('ContactDevider'),_vm._ssrNode(" "),_c('Footer'),_vm._ssrNode(" "),_c('client-only',[_c('back-to-top',{staticClass:"scroll-top",attrs:{"bottom":"30px"}},[_c('i',{staticClass:"arrow-top icofont-rounded-up"}),_vm._v(" "),_c('i',{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blogs/project-details.vue?vue&type=template&id=0e18a2ee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/project-details.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var project_detailsvue_type_script_lang_js_ = ({
  components: {
    Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31)),
    PageTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)),
    PortfolioDetailsWrapper: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 54)),
    ContactDevider: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26))
  },

  head() {
    return {
      title: 'Project Details'
    };
  }

});
// CONCATENATED MODULE: ./pages/blogs/project-details.vue?vue&type=script&lang=js&
 /* harmony default export */ var blogs_project_detailsvue_type_script_lang_js_ = (project_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blogs/project-details.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blogs_project_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "663dd830"
  
)

/* harmony default export */ var project_details = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(27).default,OffCanvasMobileMenu: __webpack_require__(31).default,PageTitle: __webpack_require__(33).default,PortfolioDetailsWrapper: __webpack_require__(54).default,ContactDevider: __webpack_require__(34).default,Footer: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=project-details.js.map