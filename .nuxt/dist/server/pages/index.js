exports.ids = [49,0,1,2,3,5,7,9,13,15,17,19,20,21,22,23,27,32,33,35];
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AccordionStyleOne.vue?vue&type=template&id=741bb009&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"accordion"},[_c('b-card',{attrs:{"no-body":""}},[_c('b-card-header',{attrs:{"header-tag":"header"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":true}}],staticClass:"accordion-button",attrs:{"block":""}},[_c('span',{staticClass:"icon-box"},[_c('i',{staticClass:"icon icofont-plus"}),_vm._v(" "),_c('i',{staticClass:"icon icofont-minus"})]),_vm._v("\n                How to get busineses services?\n            ")])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-1","visible":"","accordion":"my-accordion"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry has industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic.\n                ")])],1)],1)],1),_vm._ssrNode(" "),_c('b-card',{attrs:{"no-body":""}},[_c('b-card-header',{attrs:{"header-tag":"header"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":true}}],staticClass:"accordion-button",attrs:{"block":""}},[_c('span',{staticClass:"icon-box"},[_c('i',{staticClass:"icon icofont-plus"}),_vm._v(" "),_c('i',{staticClass:"icon icofont-minus"})]),_vm._v("\n                How can start digital marketing business?\n            ")])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-2","visible":"","accordion":"my-accordion"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry has industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic.\n                ")])],1)],1)],1),_vm._ssrNode(" "),_c('b-card',{attrs:{"no-body":""}},[_c('b-card-header',{attrs:{"header-tag":"header"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":true}}],staticClass:"accordion-button",attrs:{"block":""}},[_c('span',{staticClass:"icon-box"},[_c('i',{staticClass:"icon icofont-plus"}),_vm._v(" "),_c('i',{staticClass:"icon icofont-minus"})]),_vm._v("\n                How to get easily client from online marketplace?\n            ")])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-3","visible":"","accordion":"my-accordion"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry has industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic.\n                ")])],1)],1)],1),_vm._ssrNode(" "),_c('b-card',{attrs:{"no-body":""}},[_c('b-card-header',{attrs:{"header-tag":"header"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":true}}],staticClass:"accordion-button",attrs:{"block":""}},[_c('span',{staticClass:"icon-box"},[_c('i',{staticClass:"icon icofont-plus"}),_vm._v(" "),_c('i',{staticClass:"icon icofont-minus"})]),_vm._v("\n                How can i payment your product?\n            ")])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-4","visible":"","accordion":"my-accordion"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry has industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic.\n                ")])],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AccordionStyleOne.vue?vue&type=template&id=741bb009&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AccordionStyleOne.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fda4f97c"
  
)

/* harmony default export */ var AccordionStyleOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFactOne.vue?vue&type=template&id=03d17b80&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"funfact-area funfact-default-area"},[_vm._ssrNode("<div class=\"container\" data-v-03d17b80>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-03d17b80>","</div>",[_vm._ssrNode("<div class=\"col-sm-10 col-md-6 col-lg-5 offset-lg-1 col-xl-5 offset-xl-1\" data-v-03d17b80>","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title xs-text-center\" data-v-03d17b80>","</div>",[_vm._ssrNode("<h2 class=\"title\" data-v-03d17b80>Successfully Complete <span class=\"text-theme-color bottom-style\" data-v-03d17b80>2,500</span> Project.</h2> "),_c('n-link',{staticClass:"btn btn-theme btn-border",attrs:{"to":"/service"}},[_vm._v("\n                        Our Services "),_c('i',{staticClass:"icon icofont-long-arrow-right"})])],2)]),_vm._ssrNode(" <div class=\"col-md-6 col-lg-6 col-xl-4 offset-xl-1\" data-v-03d17b80><div class=\"row funfact-items-style1\" data-v-03d17b80><div class=\"col-6 col-sm-6\" data-v-03d17b80><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"funfact-item mt-20\" data-v-03d17b80><div class=\"number\" data-v-03d17b80><h2 data-v-03d17b80><span class=\"counter-animate\" data-v-03d17b80>98</span>+</h2></div> <p class=\"title\" data-v-03d17b80>Team Member</p></div></div> <div class=\"col-6 col-sm-6\" data-v-03d17b80><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"funfact-item\" data-v-03d17b80><div class=\"number\" data-v-03d17b80><h2 data-v-03d17b80><span class=\"counter-animate\" data-v-03d17b80>2,500</span></h2></div> <p class=\"title\" data-v-03d17b80>Complete Project</p></div></div> <div class=\"col-6 col-sm-6\" data-v-03d17b80><div data-aos=\"fade-up\" data-aos-duration=\"1200\" class=\"funfact-item mt-20\" data-v-03d17b80><div class=\"number\" data-v-03d17b80><h2 data-v-03d17b80><span class=\"counter-animate\" data-v-03d17b80>895</span></h2></div> <p class=\"title\" data-v-03d17b80>Cup of Coffee</p></div></div> <div class=\"col-6 col-sm-6\" data-v-03d17b80><div data-aos=\"fade-up\" data-aos-duration=\"1200\" class=\"funfact-item\" data-v-03d17b80><div class=\"number\" data-v-03d17b80><h2 data-v-03d17b80><span class=\"counter-animate\" data-v-03d17b80>78</span>k</h2></div> <p class=\"title\" data-v-03d17b80>Happy Clients</p></div></div></div></div>")],2)]),_vm._ssrNode(" <div class=\"shape-line-style\" data-v-03d17b80></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FunFactOne.vue?vue&type=template&id=03d17b80&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFactOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FunFactOnevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/FunFactOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FunFactOnevue_type_script_lang_js_ = (FunFactOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FunFactOne.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunFactOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "03d17b80",
  "473998c6"
  
)

/* harmony default export */ var FunFactOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceOne.vue?vue&type=template&id=ec874a34&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"service-area service-default-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-8 col-xl-6 m-auto\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title text-center\"><h2 class=\"title\">What We Do?</h2> <div class=\"separator-line mt-14\"><img src=\"/images/shape/line-s2.png\" alt=\"Images\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"Images\"></div> <div class=\"desc\"><p class=\"mt-21\">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the printer took</p></div></div></div></div> "),_vm._ssrNode("<div class=\"row icon-box-style1\">","</div>",_vm._l((_vm.services),function(service,index){return _vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1100\" class=\"col-md-6 col-lg-4\">","</div>",[_c('ServiceItem',{attrs:{"service":service}})],1)}),0)],2),_vm._ssrNode(" <div class=\"layer-shape\"><img src=\"/images/shape/6.png\" alt=\"shape\" class=\"layer-shape-one\"> <img src=\"/images/shape/7.png\" alt=\"shape\" class=\"layer-shape-two\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceOne.vue?vue&type=template&id=ec874a34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServiceOnevue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/ServiceOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceOnevue_type_script_lang_js_ = (ServiceOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6d0e6f5c"
  
)

/* harmony default export */ var ServiceOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ServiceItem: __webpack_require__(41).default})


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FaqOne.vue?vue&type=template&id=b7463c3c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"faq-area faq-default-area",style:({ backgroundImage: "url('/images/photos/bg-faq.jpg')" })},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-8\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1100\" class=\"faq-content\">","</div>",[_vm._ssrNode("<div class=\"section-title xs-text-center\"><h2 class=\"title text-white\">You Are Confused! Question &amp; <span class=\"bottom-color-style2\">Answers.</span></h2></div> "),_vm._ssrNode("<div class=\"accordion-content\">","</div>",[_c('AccordionStyleOne')],1),_vm._ssrNode(" <div class=\"text-center\"><a href=\"#\" class=\"btn btn-theme btn-white btn-border\">Click For Others Question &amp; Answer <i class=\"icon icofont-long-arrow-right\"></i></a></div>")],2)])])]),_vm._ssrNode(" <div class=\"layer-shape\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"layer-shape-one\"><img src=\"/images/photos/faq1.jpg\" alt=\"Virtuf-Image\" class=\"img-shape1 tilt-animation\"> <img src=\"/images/shape/1.png\" alt=\"Virtuf-Image\" class=\"img-shape2\"> <img src=\"/images/shape/2.png\" alt=\"Virtuf-Image\" class=\"img-shape3\"></div> <div class=\"layer-shape-two\"><img src=\"/images/shape/circle-line2.png\" alt=\"Virtuf-Image\"></div> <div class=\"layer-shape-three\"><img src=\"/images/shape/circle-line3.png\" alt=\"Virtuf-Image\"></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FaqOne.vue?vue&type=template&id=b7463c3c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FaqOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FaqOnevue_type_script_lang_js_ = ({
  components: {
    AccordionStyleOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 50))
  }
});
// CONCATENATED MODULE: ./components/FaqOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FaqOnevue_type_script_lang_js_ = (FaqOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FaqOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FaqOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f8efe54a"
  
)

/* harmony default export */ var FaqOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AccordionStyleOne: __webpack_require__(50).default})


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamSection.vue?vue&type=template&id=67ee0016&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"team-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-8 m-auto\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title text-center\"><h2 class=\"title\">We’ve Awesome Team</h2> <div class=\"separator-line mt-14\"><img src=\"/images/shape/line-s2.png\" alt=\"Images\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"Images\"></div> <div class=\"desc\"><p class=\"mt-21\">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been <br>the industry's standard dummy text ever since the printer took</p></div></div></div></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1200\" class=\"team-slider-content\">","</div>",[_vm._ssrNode("<div class=\"team-slider-container\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOptions}},[_c('div',{staticClass:"swiper-slide team-member"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":"/images/team/1.jpg","alt":"Image"}})]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"member-info"},[_c('div',{staticClass:"separator-line"},[_c('img',{attrs:{"src":"/images/shape/line-s1.png","alt":"Images"}})]),_vm._v(" "),_c('h4',{staticClass:"name"},[_vm._v("Hosea Steiner")]),_vm._v(" "),_c('h6',{staticClass:"designation"},[_vm._v("UI/UX Designer")]),_vm._v(" "),_c('div',{staticClass:"progress-item"},[_c('div',{staticClass:"progress-line"},[_c('div',{staticClass:"progress-bar-line",staticStyle:{"width":"75%"}},[_c('span',{staticClass:"percent"},[_vm._v("75%")])])]),_vm._v(" "),_c('div',{staticClass:"progress-info"},[_c('span',{staticClass:"title"},[_vm._v("Professional Skill")])])])])]),_vm._v(" "),_c('div',{staticClass:"shape-style"},[_c('img',{staticClass:"shape-style1",attrs:{"src":"/images/shape/8.png","alt":"Image"}}),_vm._v(" "),_c('img',{staticClass:"shape-style2",attrs:{"src":"/images/shape/9.png","alt":"Image"}}),_vm._v(" "),_c('img',{staticClass:"shape-style3",attrs:{"src":"/images/shape/10.png","alt":"Image"}})])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide team-member"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":"/images/team/2.jpg","alt":"Image"}})]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"member-info"},[_c('div',{staticClass:"separator-line"},[_c('img',{attrs:{"src":"/images/shape/line-s1.png","alt":"Images"}})]),_vm._v(" "),_c('h4',{staticClass:"name"},[_vm._v("Rosario Matthew")]),_vm._v(" "),_c('h6',{staticClass:"designation"},[_vm._v("Web Developer")]),_vm._v(" "),_c('div',{staticClass:"progress-item"},[_c('div',{staticClass:"progress-line"},[_c('div',{staticClass:"progress-bar-line",staticStyle:{"width":"90%"}},[_c('span',{staticClass:"percent"},[_vm._v("90%")])])]),_vm._v(" "),_c('div',{staticClass:"progress-info"},[_c('span',{staticClass:"title"},[_vm._v("Professional Skill")])])])])]),_vm._v(" "),_c('div',{staticClass:"shape-style"},[_c('img',{staticClass:"shape-style1",attrs:{"src":"/images/shape/8.png","alt":"Image"}}),_vm._v(" "),_c('img',{staticClass:"shape-style2",attrs:{"src":"/images/shape/9.png","alt":"Image"}}),_vm._v(" "),_c('img',{staticClass:"shape-style3",attrs:{"src":"/images/shape/10.png","alt":"Image"}})])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide team-member"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":"/images/team/3.jpg","alt":"Image"}})]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"member-info"},[_c('div',{staticClass:"separator-line"},[_c('img',{attrs:{"src":"/images/shape/line-s1.png","alt":"Images"}})]),_vm._v(" "),_c('h4',{staticClass:"name"},[_vm._v("Tyson Holiday")]),_vm._v(" "),_c('h6',{staticClass:"designation"},[_vm._v("Digital Marketer")]),_vm._v(" "),_c('div',{staticClass:"progress-item"},[_c('div',{staticClass:"progress-line"},[_c('div',{staticClass:"progress-bar-line",staticStyle:{"width":"80%"}},[_c('span',{staticClass:"percent"},[_vm._v("80%")])])]),_vm._v(" "),_c('div',{staticClass:"progress-info"},[_c('span',{staticClass:"title"},[_vm._v("Professional Skill")])])])])]),_vm._v(" "),_c('div',{staticClass:"shape-style"},[_c('img',{staticClass:"shape-style1",attrs:{"src":"/images/shape/8.png","alt":"Image"}}),_vm._v(" "),_c('img',{staticClass:"shape-style2",attrs:{"src":"/images/shape/9.png","alt":"Image"}}),_vm._v(" "),_c('img',{staticClass:"shape-style3",attrs:{"src":"/images/shape/10.png","alt":"Image"}})])])])],1)])])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TeamSection.vue?vue&type=template&id=67ee0016&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TeamSectionvue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOptions: {
        speed: 1500,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
          992: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false
          },
          0: {
            slidesPerView: 1
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/TeamSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamSectionvue_type_script_lang_js_ = (TeamSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "768d44ed"
  
)

/* harmony default export */ var TeamSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioSection.vue?vue&type=template&id=f72ef5bc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"portfolio-area portfolio-default-area"},[_vm._ssrNode("<div class=\"container pb-sm-50 pb-xl-70 pb-120\" data-v-f72ef5bc>","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"row align-items-center\" data-v-f72ef5bc>","</div>",[_vm._ssrNode("<div class=\"col-sm-8\" data-v-f72ef5bc><div class=\"section-title xs-text-center\" data-v-f72ef5bc><div class=\"subtitle-content xs-d-i-flex\" data-v-f72ef5bc><img src=\"/images/shape/line1.png\" alt=\"Virtuf-HasTech\" data-v-f72ef5bc> <h5 data-v-f72ef5bc>Portfolio</h5></div> <h2 class=\"title\" data-v-f72ef5bc>We Have Leadership Strong Experience In <span data-v-f72ef5bc>Business.</span></h2></div></div> "),_vm._ssrNode("<div class=\"col-sm-4 text-right\" data-v-f72ef5bc>","</div>",[_c('n-link',{staticClass:"btn btn-theme btn-border btn-theme-color2 xs-d-none",attrs:{"to":"/project"}},[_vm._v("All Projects "),_c('i',{staticClass:"icon icofont-long-arrow-right"})])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container custom-container\" data-v-f72ef5bc>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-f72ef5bc>","</div>",[_vm._ssrNode("<div class=\"col-lg-12\" data-v-f72ef5bc>","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"portfolio-slider-content\" data-v-f72ef5bc>","</div>",[_vm._ssrNode("<div class=\"swiper-container portfolio-slider-container\" data-v-f72ef5bc>","</div>",[_c('swiper',{attrs:{"options":_vm.portfolioSliderContainer}},[_c('div',{staticClass:"swiper-slide portfolio-item"},[_c('div',{staticClass:"inner-content"},[_c('div',{staticClass:"thumb",style:({ backgroundImage: "url('/images/portfolio/s2.jpg')" })},[_c('n-link',{attrs:{"to":"/portfolio-details"}})],1),_vm._v(" "),_c('div',{staticClass:"portfolio-info"},[_c('div',{staticClass:"content"},[_c('img',{staticClass:"shape-line-img",attrs:{"src":"/images/shape/line-s1.png","alt":"Virtuf-HasTech"}}),_vm._v(" "),_c('h3',{staticClass:"title"},[_c('n-link',{attrs:{"to":"/portfolio-details"}},[_vm._v("Market Statics & Analysis.")])],1),_vm._v(" "),_c('n-link',{staticClass:"category",attrs:{"to":"/portfolio-details"}},[_vm._v("Business / Marketing")])],1),_vm._v(" "),_c('n-link',{staticClass:"btn btn-theme btn-border btn-portfolio",attrs:{"to":"/portfolio-details"}},[_vm._v("View Details "),_c('i',{staticClass:"icon icofont-long-arrow-right"})])],1)])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide portfolio-item"},[_c('div',{staticClass:"inner-content"},[_c('div',{staticClass:"thumb",style:({ backgroundImage: "url('/images/portfolio/s3.jpg')" })},[_c('n-link',{attrs:{"to":"/portfolio-details"}})],1),_vm._v(" "),_c('div',{staticClass:"portfolio-info"},[_c('div',{staticClass:"content"},[_c('img',{staticClass:"shape-line-img",attrs:{"src":"/images/shape/line-s1.png","alt":"Virtuf-HasTech"}}),_vm._v(" "),_c('h3',{staticClass:"title"},[_c('n-link',{attrs:{"to":"/portfolio-details"}},[_vm._v("Market Statics & Analysis.")])],1),_vm._v(" "),_c('n-link',{staticClass:"category",attrs:{"to":"/portfolio-details"}},[_vm._v("Business / Marketing")])],1),_vm._v(" "),_c('n-link',{staticClass:"btn btn-theme btn-border btn-portfolio",attrs:{"to":"/portfolio-details"}},[_vm._v("View Details "),_c('i',{staticClass:"icon icofont-long-arrow-right"})])],1)])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide portfolio-item"},[_c('div',{staticClass:"inner-content"},[_c('div',{staticClass:"thumb",style:({ backgroundImage: "url('/images/portfolio/s1.jpg')" })},[_c('n-link',{attrs:{"to":"/portfolio-details"}})],1),_vm._v(" "),_c('div',{staticClass:"portfolio-info"},[_c('div',{staticClass:"content"},[_c('img',{staticClass:"shape-line-img",attrs:{"src":"/images/shape/line-s1.png","alt":"Virtuf-HasTech"}}),_vm._v(" "),_c('h3',{staticClass:"title"},[_c('n-link',{attrs:{"to":"/portfolio-details"}},[_vm._v("Market Statics & Analysis.")])],1),_vm._v(" "),_c('n-link',{staticClass:"category",attrs:{"to":"/portfolio-details"}},[_vm._v("Business / Marketing")])],1),_vm._v(" "),_c('n-link',{staticClass:"btn btn-theme btn-border btn-portfolio",attrs:{"to":"/portfolio-details"}},[_vm._v("View Details "),_c('i',{staticClass:"icon icofont-long-arrow-right"})])],1)])])])],1)])])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PortfolioSection.vue?vue&type=template&id=f72ef5bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PortfolioSectionvue_type_script_lang_js_ = ({
  data() {
    return {
      portfolioSliderContainer: {
        speed: 1500,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        breakpoints: {
          1800: {
            slidesPerView: 'auto',
            spaceBetween: 50
          },
          1400: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false
          },
          0: {
            slidesPerView: 1
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/PortfolioSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PortfolioSectionvue_type_script_lang_js_ = (PortfolioSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PortfolioSection.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PortfolioSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f72ef5bc",
  "ba178fb0"
  
)

/* harmony default export */ var PortfolioSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialOne.vue?vue&type=template&id=7774734c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"testimonial-area testimonial-default-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-5 col-xl-5 md-text-center\"><div data-aos=\"fade-up\" data-aos-duration=\"1100\" class=\"shape-layer tilt-animation\"><img src=\"/images/testimonial/1.jpg\" alt=\"Virtuf-HasTech\"></div></div> "),_vm._ssrNode("<div class=\"col-lg-7 col-xl-7\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title xs-text-center\"><div class=\"subtitle-content xs-d-i-flex\"><img src=\"/images/shape/line1.png\" alt=\"Virtuf-HasTech\"> <h5>Testimonial</h5></div> <h2 class=\"title\">Happy Clients. They Are Think <span>About Us.</span></h2> <div class=\"separator-line\"><img src=\"/images/shape/line1.png\" alt=\"Virtuf-HasTech\"> <img src=\"/images/shape/line2.png\" alt=\"Virtuf-HasTech\"></div></div> "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1100\" class=\"testimonial-content md-pl-0 pl-lg-30 pl-70\">","</div>",[_vm._ssrNode("<div class=\"testimonial-slider-content position-relative\">","</div>",[_vm._ssrNode("<div class=\"testimonial-slider-container\">","</div>",[_c('swiper',{attrs:{"options":_vm.testimonialSlider}},_vm._l((_vm.testimonials),function(testimonial,index){return _c('div',{key:index,staticClass:"swiper-slide testimonial-single"},[_c('div',{staticClass:"client-content"},[_c('p',[_vm._v(_vm._s(testimonial.desc))]),_vm._v(" "),_c('img',{staticClass:"quote-icon",attrs:{"src":"/images/icons/quote-icon.png","alt":"Icon"}})]),_vm._v(" "),_c('div',{staticClass:"client-info"},[_c('img',{staticClass:"shape-line-img",attrs:{"src":"/images/shape/line1.png","alt":"Virtuf-HasTech"}}),_vm._v(" "),_c('h4',{staticClass:"name"},[_vm._v(_vm._s(testimonial.name))]),_vm._v(" "),_c('h6',{staticClass:"designation"},[_vm._v(_vm._s(testimonial.designation))])]),_vm._v(" "),_c('div',{staticClass:"icon-box"},[_c('img',{attrs:{"src":testimonial.imgSrc,"alt":testimonial.name}})])])}),0),_vm._ssrNode(" <div class=\"swiper-button-next\"><i class=\"icofont-long-arrow-up\"></i></div> <div class=\"swiper-button-prev\"><i class=\"icofont-long-arrow-down\"></i></div>")],2)])])],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestimonialOne.vue?vue&type=template&id=7774734c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TestimonialOnevue_type_script_lang_js_ = ({
  data() {
    return {
      testimonialSlider: {
        speed: 1500,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.testimonial-slider-container .swiper-button-next',
          prevEl: '.testimonial-slider-container .swiper-button-prev'
        }
      },
      testimonials: [{
        name: "Reinaldo Thurman",
        designation: "Senior Consultant",
        imgSrc: "/images/icons/t1.png",
        desc: "It is long established fact that reader will distract by the readable content a page when looking atten layout. The point of using  and that it has a more normal distribution of letters, as opposed using making it look like readable English."
      }, {
        name: "Jannat Maya",
        designation: "Marketing Consultant",
        imgSrc: "/images/icons/t1.png",
        desc: "Lorem ipsum dolor sit amet, marketing consultant elit eiusmod tempor incididunt labore et doloreant magna aliqua. Enim minim veniam, adritu ullamco marketing consultant normal distribution opostent using making it look like readable English."
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/TestimonialOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialOnevue_type_script_lang_js_ = (TestimonialOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TestimonialOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32d3569c"
  
)

/* harmony default export */ var TestimonialOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoSection.vue?vue&type=template&id=1c1f2516&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"brand-logo-area brand-logo-default-area",style:({ backgroundImage: "url('/images/photos/bg-brand.jpg')" })},[_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-5 col-xl-5\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title xs-text-center\"><div class=\"subtitle-content xs-d-i-flex\"><img src=\"/images/shape/line1.png\" alt=\"image\"> <h5>Trusted Partner</h5></div> <h2 class=\"title text-white mb-lg-40 mb-80\">We’re Work With Long <span>Time.</span></h2> <a href=\"#\" class=\"btn btn-theme btn-border\">Join Us Today <i class=\"icon icofont-long-arrow-right\"></i></a></div></div> <div class=\"col-lg-7 col-xl-6 offset-xl-1\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"brand-logo-content\"><div class=\"row\">"+(_vm._ssrList((_vm.logos),function(logo,index){return ("<div class=\"col-sm-4 col-6\"><div class=\"brand-logo-item\"><img"+(_vm._ssrAttr("src",logo.logoSrc))+(_vm._ssrAttr("alt",logo.alt))+"></div></div>")}))+"</div></div></div></div></div> <div class=\"layer-shape\"><img src=\"/images/shape/11.png\" alt=\"image\" class=\"shape-style1\"> <img src=\"/images/shape/12.png\" alt=\"image\" class=\"shape-style2\"> <img src=\"/images/shape/13.png\" alt=\"image\" class=\"shape-style3\"> <img src=\"/images/shape/14.png\" alt=\"image\" class=\"shape-style4\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BrandLogoSection.vue?vue&type=template&id=1c1f2516&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BrandLogoSectionvue_type_script_lang_js_ = ({
  data() {
    return {
      logos: [{
        logoSrc: "/images/brand-logo/1.png",
        alt: "logo 01"
      }, {
        logoSrc: "/images/brand-logo/2.png",
        alt: "logo 02"
      }, {
        logoSrc: "/images/brand-logo/3.png",
        alt: "logo 03"
      }, {
        logoSrc: "/images/brand-logo/4.png",
        alt: "logo 04"
      }, {
        logoSrc: "/images/brand-logo/5.png",
        alt: "logo 05"
      }, {
        logoSrc: "/images/brand-logo/6.png",
        alt: "logo 06"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/BrandLogoSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandLogoSectionvue_type_script_lang_js_ = (BrandLogoSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BrandLogoSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BrandLogoSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2bde795e"
  
)

/* harmony default export */ var BrandLogoSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSection.vue?vue&type=template&id=48e842d0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-area blog-default-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-6 m-auto\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title text-center\"><h2 class=\"title\">News Of Company</h2> <div class=\"separator-line mt-14\"><img src=\"/images/shape/line-s2.png\" alt=\"image\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"image\"></div> <div class=\"desc\"><p class=\"mt-21\">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the printer took</p></div></div></div></div> "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1100\" class=\"row \">","</div>",_vm._l((_vm.blogs),function(blog,index){return _vm._ssrNode("<div class=\"col-md-6 col-lg-4\">","</div>",[_vm._ssrNode("<div class=\"post-item mb-md-50\">","</div>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_c('img',{attrs:{"src":blog.imgSrc,"alt":blog.title}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"meta\">","</div>",[_c('n-link',{staticClass:"post-date",attrs:{"to":"/blog"}},[_vm._v(_vm._s(blog.date))]),_vm._ssrNode(" <button class=\"post-comment\"><i class=\"icofont-speech-comments\"></i>"+_vm._ssrEscape(" "+_vm._s(blog.comment))+"</button> <button class=\"post-like\"><i class=\"icofont-heart\"></i>"+_vm._ssrEscape(_vm._s(blog.like))+"</button>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<div class=\"category-inner\">","</div>",[_vm._ssrNode("<img src=\"/images/shape/line-s1.png\" alt=\"image\"> "),_c('n-link',{staticClass:"category",attrs:{"to":"/blog"}},[_vm._v(_vm._s(blog.category))])],2),_vm._ssrNode(" "),_vm._ssrNode("<h4 class=\"title\">","</h4>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v(_vm._s(blog.title))])],1),_vm._ssrNode(" <p>"+_vm._ssrEscape(_vm._s(blog.excerpt))+"</p> "),_c('n-link',{staticClass:"btn btn-theme btn-border btn-gray",attrs:{"to":"/blog-details"}},[_vm._v("\n                            Read More "),_c('i',{staticClass:"icon icofont-long-arrow-right"})])],2)],2)])}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogSection.vue?vue&type=template&id=48e842d0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogSectionvue_type_script_lang_js_ = ({
  data() {
    return {
      blogs: [{
        imgSrc: "/images/blog/01.jpg",
        title: "We work in the fields of UI/UX design and art direction.",
        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
        date: "21 March, 2021",
        comment: 2566,
        like: 750,
        category: "Business/Marketing"
      }, {
        imgSrc: "/images/blog/02.jpg",
        title: "printing and type setting industry has been printer.",
        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
        date: "17 June, 2021",
        comment: 3345,
        like: 980,
        category: "Development/Design"
      }, {
        imgSrc: "/images/blog/03.jpg",
        title: "We work in the fields of UI/UX design and art direction.",
        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
        date: "28 May, 2021",
        comment: 1450,
        like: 380,
        category: "Fashion/Style"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/BlogSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogSectionvue_type_script_lang_js_ = (BlogSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f30ca88"
  
)

/* harmony default export */ var BlogSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4b3a335a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('Header'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('HeroSlider'),_vm._ssrNode(" "),_c('AboutOne'),_vm._ssrNode(" "),_c('FunFactOne'),_vm._ssrNode(" "),_c('ServiceOne'),_vm._ssrNode(" "),_c('FaqOne'),_vm._ssrNode(" "),_c('TeamSection',{staticClass:"team-default-area"}),_vm._ssrNode(" "),_c('PortfolioSection'),_vm._ssrNode(" "),_c('TestimonialOne'),_vm._ssrNode(" "),_c('BrandLogoSection'),_vm._ssrNode(" "),_c('BlogSection'),_vm._ssrNode(" "),_c('ContactDevider'),_vm._ssrNode(" "),_c('Footer'),_vm._ssrNode(" "),_c('client-only',[_c('back-to-top',{staticClass:"scroll-top",attrs:{"bottom":"30px"}},[_c('i',{staticClass:"arrow-top icofont-rounded-up"}),_vm._v(" "),_c('i',{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4b3a335a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31)),
    HeroSlider: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 46)),
    AboutOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 47)),
    FunFactOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 58)),
    ServiceOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 59)),
    FaqOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 60)),
    TeamSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 61)),
    PortfolioSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 62)),
    TestimonialOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 63)),
    BrandLogoSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 64)),
    BlogSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 65)),
    ContactDevider: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26))
  },

  head() {
    return {
      title: 'Home'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fa251682"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(27).default,OffCanvasMobileMenu: __webpack_require__(31).default,HeroSlider: __webpack_require__(46).default,AboutOne: __webpack_require__(47).default,FunFactOne: __webpack_require__(58).default,ServiceOne: __webpack_require__(59).default,FaqOne: __webpack_require__(60).default,TeamSection: __webpack_require__(61).default,PortfolioSection: __webpack_require__(62).default,TestimonialOne: __webpack_require__(63).default,BrandLogoSection: __webpack_require__(64).default,BlogSection: __webpack_require__(65).default,ContactDevider: __webpack_require__(34).default,Footer: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=index.js.map