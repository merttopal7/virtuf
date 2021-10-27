exports.ids = [6];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=about-two.js.map