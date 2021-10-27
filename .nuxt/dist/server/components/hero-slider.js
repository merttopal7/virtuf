exports.ids = [20];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=hero-slider.js.map