exports.ids = [42,8,11,12,13,17,19,21,22,23,24,29,30,36,37,38,39,40];
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceCategoryWidget.vue?vue&type=template&id=70e41765&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[_vm._ssrNode("<h3 class=\"widget-title\">Service Category</h3> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"Image-HasTech\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"Image-HasTech\"></div> "),_vm._ssrNode("<div class=\"widget-category\">","</div>",_vm._l((_vm.categories),function(category,index){return _c('n-link',{key:index,attrs:{"to":"/service"}},[_c('i',{staticClass:"icofont-double-right"}),_vm._v(" \n            "+_vm._s(category)+"\n        ")])}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceCategoryWidget.vue?vue&type=template&id=70e41765&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceCategoryWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServiceCategoryWidgetvue_type_script_lang_js_ = ({
  data() {
    return {
      categories: ['Business Management', 'Web Development', 'Digital Marketing', 'User Interface Design']
    };
  }

});
// CONCATENATED MODULE: ./components/ServiceCategoryWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceCategoryWidgetvue_type_script_lang_js_ = (ServiceCategoryWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceCategoryWidget.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceCategoryWidgetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5716b348"
  
)

/* harmony default export */ var ServiceCategoryWidget = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetVideo.vue?vue&type=template&id=baddbd3a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1100"}},[_vm._ssrNode("<div class=\"widget-video\">","</div>",[_vm._ssrNode("<div class=\"thumb\"><img src=\"/images/photos/sidebar-video1.jpg\" alt=\"video image\"></div> "),_c('CoolLightBox',{attrs:{"items":_vm.items,"index":_vm.index},on:{"close":function($event){_vm.index = null}}}),_vm._ssrNode(" "+(_vm._ssrList((_vm.items),function(image,imageIndex){return ("<a href=\"javascript:void(0)\" class=\"btn-play play-video-popup\"><span class=\"icon\"><img src=\"/images/icons/play.png\" alt=\"video\"></span></a>")})))],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WidgetVideo.vue?vue&type=template&id=baddbd3a&

// EXTERNAL MODULE: external "vue-cool-lightbox"
var external_vue_cool_lightbox_ = __webpack_require__(23);
var external_vue_cool_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_vue_cool_lightbox_);

// EXTERNAL MODULE: ./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css
var vue_cool_lightbox_min = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetVideo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var WidgetVideovue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/WidgetVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WidgetVideovue_type_script_lang_js_ = (WidgetVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WidgetVideo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WidgetVideovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59aff83c"
  
)

/* harmony default export */ var WidgetVideo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetSocial.vue?vue&type=template&id=091f0e78&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1200"}},[_vm._ssrNode("<h3 class=\"widget-title\">Share Now.</h3> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"Image-HasTech\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"Image-HasTech\"></div> <div class=\"widget-social\">"+(_vm._ssrList((_vm.socialList),function(social,index){return ("<div class=\"social-item\"><a"+(_vm._ssrAttr("href",social.url))+"><div class=\"icon\"><i"+(_vm._ssrClass(null,social.iconName))+"></i></div> <span>"+_vm._ssrEscape(_vm._s(social.title))+"</span></a></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WidgetSocial.vue?vue&type=template&id=091f0e78&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetSocial.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WidgetSocialvue_type_script_lang_js_ = ({
  data() {
    return {
      socialList: [{
        iconName: "icofont-facebook",
        title: "Facebook",
        url: "#"
      }, {
        iconName: "icofont-pinterest",
        title: "Pinterest",
        url: "#"
      }, {
        iconName: "icofont-instagram",
        title: "Instagram",
        url: "#"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/WidgetSocial.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WidgetSocialvue_type_script_lang_js_ = (WidgetSocialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WidgetSocial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WidgetSocialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5fab8c08"
  
)

/* harmony default export */ var WidgetSocial = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetSearch.vue?vue&type=template&id=8422fdd0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[_vm._ssrNode("<div class=\"widget-search-box\"><form><div class=\"form-input-item\"><label for=\"search2\" class=\"sr-only\">Search Here</label> <input type=\"text\" id=\"search2\" placeholder=\"Search Here\"> <button type=\"submit\" class=\"btn-src\"><i class=\"icofont-search-2\"></i></button></div></form></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WidgetSearch.vue?vue&type=template&id=8422fdd0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetSearch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WidgetSearchvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/WidgetSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WidgetSearchvue_type_script_lang_js_ = (WidgetSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WidgetSearch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WidgetSearchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1504f2b7"
  
)

/* harmony default export */ var WidgetSearch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetRecentPost.vue?vue&type=template&id=1425085e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[_vm._ssrNode("<h3 class=\"widget-title\">Recent Post</h3> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"image\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"image\"></div> "),_vm._ssrNode("<div class=\"widget-blog-post\">","</div>",[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.recentPosts),function(post,index){return _vm._ssrNode("<li class=\"recent-post-item\">","</li>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_c('img',{attrs:{"src":post.imgSrc,"alt":post.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content\">","</div>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v(_vm._s(post.title))]),_vm._ssrNode(" <span><i class=\"icofont-ui-calendar\"></i>"+_vm._ssrEscape(_vm._s(post.date))+"</span>")],2)],2)}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WidgetRecentPost.vue?vue&type=template&id=1425085e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetRecentPost.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WidgetRecentPostvue_type_script_lang_js_ = ({
  data() {
    return {
      recentPosts: [{
        imgSrc: "/images/blog/s1.jpg",
        title: "Make type specimen book only five.",
        date: "07 June, 2021"
      }, {
        imgSrc: "/images/blog/s2.jpg",
        title: "We work in the fields of UI/UX design",
        date: "26 July, 2021"
      }, {
        imgSrc: "/images/blog/s3.jpg",
        title: "printing industry has been printer.",
        date: "18 March, 2021"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/WidgetRecentPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WidgetRecentPostvue_type_script_lang_js_ = (WidgetRecentPostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WidgetRecentPost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WidgetRecentPostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "929e14ac"
  
)

/* harmony default export */ var WidgetRecentPost = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetTags.vue?vue&type=template&id=77efe3b6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[_vm._ssrNode("<h3 class=\"widget-title\">Popular Tags</h3> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"shape\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"shape\"></div> "),_vm._ssrNode("<div class=\"widget-tags\">","</div>",[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.tags),function(tag,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog"}},[_vm._v(_vm._s(tag))])],1)}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WidgetTags.vue?vue&type=template&id=77efe3b6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetTags.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WidgetTagsvue_type_script_lang_js_ = ({
  data() {
    return {
      tags: ["Business", "Consulting", "User Interface", "Corporate", "Agency", "Gardening", "Industry", "Minimal", "Unique"]
    };
  }

});
// CONCATENATED MODULE: ./components/WidgetTags.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WidgetTagsvue_type_script_lang_js_ = (WidgetTagsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WidgetTags.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WidgetTagsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "57e95268"
  
)

/* harmony default export */ var WidgetTags = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentList.vue?vue&type=template&id=5958070f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-content",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[_vm._ssrNode("<div class=\"single-comment\"><div class=\"author-info\"><div class=\"thumb\"><img src=\"/images/blog/c1.jpg\" alt=\"Image\"></div> <div class=\"author-details\"><h4 class=\"name\">Marcella Moody</h4> <img src=\"/images/shape/line-s1.png\" alt=\"image\" class=\"line-shape\"> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p> <button class=\"btn-reply\"><i class=\"icofont-reply\"></i> Reply</button></div> <div class=\"comment-date\">07 Jan, 2021</div></div></div> <div class=\"single-comment pl-xxs-30 pl-70\"><div class=\"author-info\"><div class=\"thumb\"><img src=\"/images/blog/c2.jpg\" alt=\"Image\"></div> <div class=\"author-details\"><h4 class=\"name\">Jan Roberts</h4> <img src=\"/images/shape/line-s1.png\" alt=\"image\" class=\"line-shape\"> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p> <button class=\"btn-reply\"><i class=\"icofont-reply\"></i> Reply</button></div> <div class=\"comment-date\">15 Mar, 2021</div></div></div> <div class=\"single-comment\"><div class=\"author-info\"><div class=\"thumb\"><img src=\"/images/blog/c3.jpg\" alt=\"Image\"></div> <div class=\"author-details\"><h4 class=\"name\">Kristy Kelly</h4> <img src=\"/images/shape/line-s1.png\" alt=\"image\" class=\"line-shape\"> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p> <button class=\"btn-reply\"><i class=\"icofont-reply\"></i> Reply</button></div> <div class=\"comment-date\">24 Sep, 2021</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentList.vue?vue&type=template&id=5958070f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentListvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/CommentList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentListvue_type_script_lang_js_ = (CommentListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CommentList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32f73c42"
  
)

/* harmony default export */ var CommentList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=template&id=4c5de77f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-form",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[_vm._ssrNode("<h2 class=\"title\">Leav a <span>Reply</span></h2> <form><div class=\"comment-form-content\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Name\" required=\"required\" class=\"form-control\"></div></div> <div class=\"col-md-12\"><div class=\"form-group\"><input type=\"email\" placeholder=\"Email Address\" required=\"required\" class=\"form-control\"></div></div> <div class=\"col-md-12\"><div class=\"form-group\"><textarea name=\"comment\" id=\"comment\" cols=\"45\" rows=\"7\" placeholder=\"Message\" required=\"required\" class=\"form-control textarea\"></textarea></div></div></div> <div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group group-style mb-0\"><button type=\"submit\" class=\"btn btn-theme\">Submit Now <i class=\"icon icofont-long-arrow-right\"></i></button></div></div></div></div></form>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=template&id=4c5de77f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentFormvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentFormvue_type_script_lang_js_ = (CommentFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CommentForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0203d530"
  
)

/* harmony default export */ var CommentForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PostAuthorInfo.vue?vue&type=template&id=2c083d14&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"author-info",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[_vm._ssrNode("<div class=\"thumb\"><img src=\"/images/blog/author-01.jpg\" alt=\"Image\"></div> <div class=\"author-details\"><h4 class=\"title\">Marcella Moody</h4> <img src=\"/images/shape/line-s1.png\" alt=\"image\" class=\"line-shape\"> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industr standard dummy text ever since the 1500swhean an unknown printer took an galley of type and scrambled.</p> <div class=\"social-icons\"><a href=\"#\"><i class=\"icofont-facebook\"></i></a> <a href=\"#\"><i class=\"icofont-skype\"></i></a> <a href=\"#\"><i class=\"icofont-instagram\"></i></a></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PostAuthorInfo.vue?vue&type=template&id=2c083d14&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PostAuthorInfo.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f27f27f8"
  
)

/* harmony default export */ var PostAuthorInfo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogDetailsWrapper.vue?vue&type=template&id=b6d9d08a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-details-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"blog-details-column\">","</div>",[_vm._ssrNode("<div class=\"post-details-content\">","</div>",[_vm._ssrNode("<div class=\"post-details-body\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"content\">","</div>",[_vm._ssrNode("<h2 class=\"title\">"+_vm._ssrEscape(_vm._s(this.$route.params.blog))+"</h2> <div class=\"separator-line mb-21\"><img src=\"/images/shape/line-s2.png\" alt=\"shape\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"shape\"></div> "),_vm._ssrNode("<div class=\"meta\">","</div>",[_vm._ssrNode("<div class=\"inner-meta\">","</div>",[_c('n-link',{staticClass:"post-date",attrs:{"to":"/blog"}},[_vm._v("06 Jan, 2021")]),_vm._ssrNode(" "),_c('n-link',{staticClass:"post-comment",attrs:{"to":"/blog"}},[_c('i',{staticClass:"icofont-speech-comments"}),_vm._v(" 2,538")]),_vm._ssrNode(" "),_c('n-link',{staticClass:"post-like",attrs:{"to":"/blog"}},[_c('i',{staticClass:"icofont-heart"}),_vm._v(" 789")]),_vm._ssrNode(" <a class=\"post-author\"><i class=\"icofont-user-alt-7\"></i> Alvin Malone</a>")],2)]),_vm._ssrNode(" <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p> <p class=\"mb-0\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p> <div class=\"thumb\"><img src=\"/images/blog/b1.jpg\" alt=\"image\"></div> <h2 class=\"title\">Business Management</h2> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"shape\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"shape\"></div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p> <p class=\"mb-0\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p> <div class=\"blockquote-area\"><blockquote class=\"blockquote-style\"><p>Lorem Ipsum simply dummy text the printing and industry has been the industry' <span>standard dummy text ever</span> make a type specimen book.</p> <div class=\"icon\">”</div></blockquote></div> <p class=\"mb-26\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p> "),_vm._ssrNode("<div class=\"category-social-content\">","</div>",[_vm._ssrNode("<div class=\"category-items\">","</div>",[_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Business")]),_vm._ssrNode(" "),_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Marketing")]),_vm._ssrNode(" "),_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Consulting")])],2),_vm._ssrNode(" <div class=\"social-items\"><a href=\"#\"><i class=\"icofont-facebook\"></i></a> <a href=\"#\"><i class=\"icofont-skype\"></i></a> <a href=\"#\"><i class=\"icofont-instagram\"></i></a></div>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"page-navigation\">","</div>",[_vm._ssrNode("<div class=\"nav-item prev\">","</div>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_vm._ssrNode("<img src=\"/images/portfolio/nav1.jpg\" alt=\"image\"> "),_c('n-link',{attrs:{"to":"/blog-details"}},[_c('i',{staticClass:"icofont-double-left"})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<img src=\"/images/shape/line-s1.png\" alt=\"image\" class=\"line-shape\"> "),_vm._ssrNode("<h4>","</h4>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Digital "),_c('br'),_vm._v("Marketing")])],1),_vm._ssrNode(" "),_c('n-link',{staticClass:"post-date",attrs:{"to":"/blog"}},[_vm._v("07 Jan, 2021")])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"nav-item-center\">","</div>",[_c('n-link',{attrs:{"to":"/blog"}},[_c('img',{attrs:{"src":"/images/icons/dot.png","alt":"image"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"nav-item next\">","</div>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_vm._ssrNode("<img src=\"/images/portfolio/nav2.jpg\" alt=\"image\"> "),_c('n-link',{attrs:{"to":"/blog-details"}},[_c('i',{staticClass:"icofont-double-right"})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<img src=\"/images/shape/line-s1.png\" alt=\"image\" class=\"line-shape\"> "),_vm._ssrNode("<h4>","</h4>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Business "),_c('br'),_vm._v("Consulting")])],1),_vm._ssrNode(" "),_c('n-link',{staticClass:"post-date",attrs:{"to":"/blog-details"}},[_vm._v("07 Jan, 2021")])],2)],2)],2),_vm._ssrNode(" "),_c('PostAuthorInfo'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"comment-area\">","</div>",[_vm._ssrNode("<h2 data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"title\">Comments <span>(25)</span></h2> "),_c('CommentList'),_vm._ssrNode(" "),_c('CommentForm')],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-area\">","</div>",[_c('WidgetSearch'),_vm._ssrNode(" "),_c('ServiceCategoryWidget'),_vm._ssrNode(" "),_c('WidgetVideo'),_vm._ssrNode(" "),_c('WidgetSocial'),_vm._ssrNode(" "),_c('WidgetRecentPost'),_vm._ssrNode(" "),_c('WidgetTags')],2)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogDetailsWrapper.vue?vue&type=template&id=b6d9d08a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogDetailsWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogDetailsWrappervue_type_script_lang_js_ = ({
  components: {
    PostAuthorInfo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 49)),
    CommentList: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 44)),
    CommentForm: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 45)),
    WidgetSearch: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 38)),
    ServiceCategoryWidget: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 35)),
    WidgetVideo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36)),
    WidgetSocial: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 37)),
    WidgetRecentPost: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39)),
    WidgetTags: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 40))
  }
});
// CONCATENATED MODULE: ./components/BlogDetailsWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogDetailsWrappervue_type_script_lang_js_ = (BlogDetailsWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogDetailsWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogDetailsWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1de1381e"
  
)

/* harmony default export */ var BlogDetailsWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PostAuthorInfo: __webpack_require__(49).default,CommentList: __webpack_require__(44).default,CommentForm: __webpack_require__(45).default,WidgetSearch: __webpack_require__(38).default,ServiceCategoryWidget: __webpack_require__(35).default,WidgetVideo: __webpack_require__(36).default,WidgetSocial: __webpack_require__(37).default,WidgetRecentPost: __webpack_require__(39).default,WidgetTags: __webpack_require__(40).default})


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/_blog.vue?vue&type=template&id=a9b9aad4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-page-wrapper"},[_c('Header'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('PageTitle',{attrs:{"title":_vm.pageTitle.blog,"breadcrumbTitle":_vm.pageTitle.blog}}),_vm._ssrNode(" "),_c('BlogDetailsWrapper'),_vm._ssrNode(" "),_c('ContactDevider'),_vm._ssrNode(" "),_c('Footer'),_vm._ssrNode(" "),_c('client-only',[_c('back-to-top',{staticClass:"scroll-top",attrs:{"bottom":"30px"}},[_c('i',{staticClass:"arrow-top icofont-rounded-up"}),_vm._v(" "),_c('i',{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blogs/_blog.vue?vue&type=template&id=a9b9aad4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/_blog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _blogvue_type_script_lang_js_ = ({
  components: {
    Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31)),
    PageTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)),
    BlogDetailsWrapper: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 57)),
    ContactDevider: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26))
  },

  data() {
    return {
      pageTitle: this.$route.params
    };
  },

  head() {
    return {
      title: this.$route.params.blog
    };
  }

});
// CONCATENATED MODULE: ./pages/blogs/_blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blogs_blogvue_type_script_lang_js_ = (_blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blogs/_blog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blogs_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f2807ba"
  
)

/* harmony default export */ var _blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(27).default,OffCanvasMobileMenu: __webpack_require__(31).default,PageTitle: __webpack_require__(33).default,BlogDetailsWrapper: __webpack_require__(57).default,ContactDevider: __webpack_require__(34).default,Footer: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=_blog.js.map