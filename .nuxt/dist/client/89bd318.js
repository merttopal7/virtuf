(window.webpackJsonp=window.webpackJsonp||[]).push([[9,38],{279:function(t,e,n){"use strict";n.r(e);n(2);var r=n(280),o=n.n(r),c={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new o.a(t)}))}},l=n(48),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scene",class:t.addClassName},[n("span",{staticClass:"scene-layer",attrs:{"data-depth":t.dataDepth}},[n("img",{attrs:{src:t.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(63),n(19),n(41),n(49),n(1),{components:{ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,279))}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDatas();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{MainImage:"",mainUrl:this.$axiosUrl,aboutContent:[],aboutContentButton:[],errors:[]}},methods:{getDatas:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"pages?Slug=".concat(t.$route.params.page));case 3:null!=(n=e.sent).data[0]&&(t.Title=n.data[0].Title,r=n.data[0].Content.filter((function(t){if("page.about-one"==t.__component)return t}))[0],t.aboutContent=r,t.MainImage=r.image.url),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},filters:{getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about-area about-default-area"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-5 md-text-center"},[n("div",{staticClass:"layer-style",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"thumb tilt-animation"},[n("img",{attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.MainImage),alt:"Images"}})]),t._v(" "),t._m(0),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-style2",imgSrc:"/images/shape/circle-shape1.png","data-depth":".6"}}),t._v(" "),n("div",{staticClass:"experience-time"},[n("div",{staticClass:"content"},[t._v(t._s(t.aboutContent.experienceTop)),n("sup",[t._v(t._s(t.aboutContent.experienceSup))]),t._v(" "),n("span",[t._v(t._s(t.aboutContent.experienceBottom))])])])],1)]),t._v(" "),n("div",{staticClass:"col-lg-6 offset-lg-1"},[n("div",{staticClass:"about-content"},[n("div",{staticClass:"section-title xs-text-center",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("h2",{staticClass:"title"},[t._v(t._s(t.aboutContent.Title)+" "),n("span",{staticClass:"bottom-style"},[t._v(t._s(t.aboutContent.TitleSecond))])]),t._v(" "),n("div",{staticClass:"desc"},[n("p",{staticClass:"mt-20"},[t._v(t._s(t.aboutContent.description))])])]),t._v(" "),n("div",{staticClass:"list-icon-style",attrs:{"data-aos":"fade-up","data-aos-duration":"1200"}},[n("ul",t._l(t.aboutContent.Items,(function(e){return n("li",{key:e.id},[n("i",{class:e.icon}),t._v(" "+t._s(e.text))])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shape-style1"},[e("img",{attrs:{src:"/images/shape/circle-line1.png",alt:"Images"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ShapeWithAnimation:n(279).default})}}]);