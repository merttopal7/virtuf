exports.ids = [16];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=feature-list.js.map