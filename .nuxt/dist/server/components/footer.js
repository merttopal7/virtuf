exports.ids = [17];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=footer.js.map