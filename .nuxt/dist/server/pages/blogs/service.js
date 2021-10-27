exports.ids = [47,13,17,19,21,22,23,24,32,34];
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=template&id=1f9e6e56&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-box-item"},[_vm._ssrNode("<div class=\"icon-box\"><img"+(_vm._ssrAttr("src",_vm.service.icon))+" alt=\"Icon\" class=\"icon-img\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<div class=\"separator-line\"><img src=\"/images/shape/line-s1.png\" alt=\"Image\"></div> <h4>"+_vm._ssrEscape(_vm._s(_vm.service.title))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.service.desc))+"</p> "),_c('n-link',{staticClass:"btn-link",attrs:{"to":"/service-details"}},[_vm._v("Read More "),_c('i',{staticClass:"icon icofont-arrow-right"})])],2),_vm._ssrNode(" <div class=\"icon-shape\"><img src=\"/images/shape/s1.png\" alt=\"Icon\" class=\"shape-img1\"> <img src=\"/images/shape/s2.png\" alt=\"Icon\" class=\"shape-img2\"> <img src=\"/images/shape/s3.png\" alt=\"Icon\" class=\"shape-img3\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=template&id=1f9e6e56&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServiceItemvue_type_script_lang_js_ = ({
  props: ['service']
});
// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemvue_type_script_lang_js_ = (ServiceItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0634e68d"
  
)

/* harmony default export */ var ServiceItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceWrapper.vue?vue&type=template&id=13c91ad6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"service-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row icon-box-style1\">","</div>",_vm._l((_vm.services),function(service,index){return _vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1100\" class=\"col-md-6 col-lg-4\">","</div>",[_c('ServiceItem',{attrs:{"service":service}})],1)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceWrapper.vue?vue&type=template&id=13c91ad6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServiceWrappervue_type_script_lang_js_ = ({
  data() {
    return {
      services: [{
        icon: "/images/icons/s1.png",
        title: "Web Development",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }, {
        icon: "/images/icons/s2.png",
        title: "Market Analysis",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }, {
        icon: "/images/icons/s3.png",
        title: "Brand Identity",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }, {
        icon: "/images/icons/s4.png",
        title: "Business Consultation",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }, {
        icon: "/images/icons/s5.png",
        title: "SEO Marketing",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }, {
        icon: "/images/icons/s6.png",
        title: "UX & UI Design",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/ServiceWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceWrappervue_type_script_lang_js_ = (ServiceWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "229cefee"
  
)

/* harmony default export */ var ServiceWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ServiceItem: __webpack_require__(41).default})


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/service.vue?vue&type=template&id=2c975be7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"service-page-wrapper"},[_c('Header'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('PageTitle',{attrs:{"title":"Services","breadcrumbTitle":"Services"}}),_vm._ssrNode(" "),_c('ServiceWrapper'),_vm._ssrNode(" "),_c('ContactDevider'),_vm._ssrNode(" "),_c('Footer'),_vm._ssrNode(" "),_c('client-only',[_c('back-to-top',{staticClass:"scroll-top",attrs:{"bottom":"30px"}},[_c('i',{staticClass:"arrow-top icofont-rounded-up"}),_vm._v(" "),_c('i',{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blogs/service.vue?vue&type=template&id=2c975be7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/service.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var servicevue_type_script_lang_js_ = ({
  components: {
    Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31)),
    PageTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)),
    ServiceWrapper: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 55)),
    ContactDevider: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26))
  },

  head() {
    return {
      title: 'Service'
    };
  }

});
// CONCATENATED MODULE: ./pages/blogs/service.vue?vue&type=script&lang=js&
 /* harmony default export */ var blogs_servicevue_type_script_lang_js_ = (servicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blogs/service.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blogs_servicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "100865d7"
  
)

/* harmony default export */ var service = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(27).default,OffCanvasMobileMenu: __webpack_require__(31).default,PageTitle: __webpack_require__(33).default,ServiceWrapper: __webpack_require__(55).default,ContactDevider: __webpack_require__(34).default,Footer: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=service.js.map