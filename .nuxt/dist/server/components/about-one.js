exports.ids = [5,35];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=about-one.js.map