(window.webpackJsonp=window.webpackJsonp||[]).push([[47,13,16,20,22,24,25,26,27,28,33,39,40,41,42,43],{261:function(t,e,n){},262:function(t,e,n){"use strict";n.r(e);var r=n(25),l=(n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:t.year=(new Date).getFullYear();case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,Configs:[],year:"",FooterMenu:[],errors:[],siteLogoLightUrl:""}},methods:{getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,t.FooterMenu=n.data.FooterLinks.menus,t.siteLogoLightUrl=n.data.SiteLogo.url,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.errors.push(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},filters:{getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}}}),o=n(48),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area bg-img-cover",style:{backgroundImage:"url('/images/photos/bg-footer.jpg')"}},[n("div",{staticClass:"footer-top",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"contact-info-content"},[n("div",{staticClass:"contact-info-item"},[t._m(0),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Bizi Arayın.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),t._l(t.Configs.Telephone,(function(e){return n("a",{key:e.id,attrs:{href:"tel://"+e.text}},[t._v(t._s(e.text))])}))],2)]),t._v(" "),n("div",{staticClass:"contact-info-item"},[t._m(1),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Email.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),t._l(t.Configs.mail,(function(e){return n("a",{key:e.id,attrs:{href:"mailto://"+e.text}},[t._v(t._s(e.text))])}))],2)]),t._v(" "),n("div",{staticClass:"contact-info-item"},[t._m(2),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Adres.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.Configs.adres)}})])])])])])])]),t._v(" "),n("div",{staticClass:"container",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-9 col-lg-8 col-xl-8"},[n("div",{staticClass:"widget-item mt-0"},[n("div",{staticClass:"about-widget"},[n("n-link",{staticClass:"footer-logo",attrs:{to:"/"}},[n("img",{attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.siteLogoLightUrl),alt:"Logo"}})]),t._v(" "),n("p",[t._v(t._s(t.Configs.SiteAciklamasi))]),t._v(" "),n("div",{staticClass:"widget-newsletter"})],1)])]),t._v(" "),n("div",{staticClass:"col-md-8 col-lg-4 col-xl-4"},[n("div",{staticClass:"widget-item menu-wrap-two-column"},[n("h4",{staticClass:"widget-title"},[t._v("Menü")]),t._v(" "),n("img",{staticClass:"line-shape",attrs:{src:"/images/shape/line-s1.png",alt:"shape"}}),t._v(" "),n("nav",{staticClass:"widget-menu-wrap"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",{staticClass:"nav-menu nav"},t._l(t.FooterMenu,(function(e){return n("li",{key:e.id},[n("n-link",{attrs:{to:e.Link?e.Link:""}},[t._v(t._s(e.Baslik))])],1)})),0)])])])])])])]),t._v(" "),n("div",{staticClass:"footer-bottom"},[n("div",{staticClass:"container"},[n("div",{staticClass:"footer-bottom-content"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-6 order-2 order-md-1"},[n("div",{staticClass:"widget-copyright"},[n("p",[t._v("© "+t._s(t.year)+" "),n("span",[t._v(t._s(t.Configs.SiteTitle))])])])]),t._v(" "),n("div",{staticClass:"col-md-6 order-1 order-md-2"},[n("div",{staticClass:"widget-social-icons"},t._l(t.Configs.Social,(function(t){return n("a",{key:t.id,attrs:{href:t.link?t.link:""}},[n("i",{class:t.ikon?"icofont-"+t.ikon:"icofont-share"})])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c1.png",alt:"Icon"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c2.png",alt:"Icon"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c3.png",alt:"Icon"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(262).default})},263:function(t,e,n){"use strict";n.r(e);var r=n(25),l=(n(19),n(41),n(49),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:case"end":return e.stop()}}),e)})))()},components:{Navigation:function(){return Promise.resolve().then(n.bind(null,265))}},data:function(){return{isSticky:!1,mainUrl:this.$axiosUrl,Configs:[],errors:[],siteLogoUrl:"",siteLogoLightUrl:""}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,t.siteLogoUrl=n.data.SiteLogo.url,t.siteLogoLightUrl=n.data.SiteLogoLight.url,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.errors.push(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},filters:{getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}}),o=n(48),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-area header-default transparent sticky-header",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 col-sm-4 col-lg-3"},[n("div",{staticClass:"header-logo-area"},[n("n-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo-main",attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.siteLogoUrl),alt:"Logo"}}),t._v(" "),n("img",{staticClass:"logo-light",attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.siteLogoLightUrl),alt:"Logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-6 col-sm-8 col-lg-9"},[n("div",{staticClass:"header-align"},[n("div",{staticClass:"header-navigation-area navigation-style-two"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"header-action-area"},[n("button",{staticClass:"btn-menu d-xl-none",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")]),t._v(" "),n("n-link",{staticClass:"btn-theme btn-style",attrs:{to:"/contact"}},[t._v("\n                            Get A Free Quote \n                            "),n("i",{staticClass:"icon-style icofont-double-right"})])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(265).default,Header:n(263).default})},264:function(t,e,n){"use strict";n(261)},265:function(t,e,n){"use strict";n.r(e);var r=n(25),l=(n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMenus();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{Menus:[],errors:[]}},methods:{getMenus:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"menus");case 3:n=e.sent,t.Menus=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),o=n(48),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"main-menu nav justify-content-center"},t._l(t.Menus,(function(menu){return n("li",{key:menu.id,class:{"has-submenu":menu.AltMenu.length}},[menu.Yayinla?[n("n-link",{attrs:{to:menu.Link?menu.Link:""}},[t._v(t._s(menu.Baslik))]),t._v(" "),menu.AltMenu.length?n("ul",{staticClass:"submenu-nav"},t._l(menu.AltMenu,(function(e){return n("li",{key:e.id},[n("n-link",{attrs:{to:e.link?e.link:""}},[t._v(t._s(e.baslik))])],1)})),0):t._e()]:t._e()],2)})),0)}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,n){"use strict";n.r(e);var r={mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var r=t.querySelectorAll(".menu-expand"),l=r.length,o=0;o<l;o++)r[o].addEventListener("click",(function(t){d(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){v()}));var d=function(t){t.currentTarget.parentElement.classList.toggle("active")},v=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},l=(n(264),n(48)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/service"}},[t._v("Service")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service-details"}},[t._v("Service Details")])],1)])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);n(19),n(41),n(49);var r={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,266))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"offcanvas-mobile-menu",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo-light.png",alt:"brand logo"}})])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(266).default})},268:function(t,e,n){"use strict";n.r(e);var r=n(25),l=(n(63),{props:["title","breadcrumbTitle"],created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,Configs:[],errors:[]}},methods:{getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),o=n(48),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-title-area",style:{backgroundImage:"url('/images/photos/bg-page-title.jpg')"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"page-title-content"},[n("h2",{staticClass:"title text-white"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"bread-crumbs"},[n("img",{staticClass:"line-shape",attrs:{src:"/images/shape/line-s3.png",alt:"shape"}}),t._v(" "),n("n-link",{attrs:{to:"/"}},[t._v(" Home "),n("span",{staticClass:"breadcrumb-sep"},[t._v("/")])]),t._v(" "),n("span",{staticClass:"active"},[t._v(t._s(t.breadcrumbTitle))])],1)])])])]),t._v(" "),n("div",{staticClass:"page-sidebar",attrs:{"data-aos":"fade-right","data-aos-duration":"1100"}},[n("div",{staticClass:"social-icon"},t._l(t.Configs.Social,(function(t){return n("a",{key:t.id,attrs:{href:t.link?t.link:""}},[n("i",{class:t.ikon?"icofont-"+t.ikon:"icofont-share"})])})),0)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layer-shape"},[n("img",{staticClass:"layer-shape-one",attrs:{src:"/images/shape/1.png",alt:"shape"}}),t._v(" "),n("img",{staticClass:"layer-shape-two",attrs:{src:"/images/shape/4.png",alt:"shape"}}),t._v(" "),n("img",{staticClass:"layer-shape-three",attrs:{src:"/images/shape/5.png",alt:"shape"}}),t._v(" "),n("img",{staticClass:"layer-shape-four",attrs:{src:"/images/shape/3.png",alt:"shape"}})])}],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r=n(25),l=(n(2),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDevider();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,Devider:[],DeviderBtn:[],errors:[]}},methods:{getDevider:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"pages?Slug=".concat(t.$route.params.page));case 3:null!=(n=e.sent).data[0].Content&&n.data[0].Content.forEach((function(e){"page.contact-divider"==e.__component&&(t.Devider=e,t.DeviderBtn=e.Button)})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),o=n(48),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact-divider-area",style:{backgroundColor:"#f6f7fc"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-9 col-lg-8"},[n("div",{staticClass:"contact-divider-content",attrs:{"data-aos":"fade-up","data-aos-duration":"1100"}},[n("div",{staticClass:"section-title"},[n("div",{staticClass:"subtitle-content"},[n("img",{attrs:{src:"/images/shape/line1.png",alt:"shape"}}),t._v(" "),n("h5",[t._v(t._s(t.Devider.SmallText))])]),t._v(" "),n("h2",{staticClass:"title"},[t._v(t._s(t.Devider.text)+" "),n("span",{staticClass:"bottom-style"},[t._v(t._s(t.Devider.text2))])])])])]),t._v(" "),n("div",{staticClass:"col-md-3 col-lg-4 text-left text-md-right"},[n("n-link",{staticClass:"btn btn-theme",attrs:{to:t.DeviderBtn.link?t.DeviderBtn.link:"","data-aos":"fade-up","data-aos-duration":"1100"}},[t._v(t._s(t.DeviderBtn.title)+" "),n("i",{staticClass:"icon icofont-long-arrow-right"})])],1)])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layer-shape"},[e("img",{staticClass:"shape-style1",attrs:{src:"/images/shape/15.png",alt:"shape"}})])}],!1,null,null,null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{categories:["Business Management","Web Development","Digital Marketing","User Interface Design"]}}},l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("h3",{staticClass:"widget-title"},[t._v("Service Category")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"widget-category"},t._l(t.categories,(function(e,r){return n("n-link",{key:r,attrs:{to:"/service"}},[n("i",{staticClass:"icofont-double-right"}),t._v(" \n            "+t._s(e)+"\n        ")])})),1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"separator-line"},[n("img",{staticClass:"me-1",attrs:{src:"/images/shape/line-s2.png",alt:"Image-HasTech"}}),t._v(" "),n("img",{attrs:{src:"/images/shape/line-s1.png",alt:"Image-HasTech"}})])}],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r=n(273),l=(n(274),{components:{CoolLightBox:r.a},data:function(){return{items:[{src:"https://www.youtube.com/watch?v=eS9Qm4AOOBY",autoplay:!0}],index:null}}}),o=n(48),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1100"}},[n("div",{staticClass:"widget-video"},[t._m(0),t._v(" "),n("CoolLightBox",{attrs:{items:t.items,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),t._l(t.items,(function(image,e){return n("a",{key:e,staticClass:"btn-play play-video-popup",attrs:{href:"javascript:void(0)"},on:{click:function(n){t.index=e}}},[t._m(1,!0)])}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"thumb"},[e("img",{attrs:{src:"/images/photos/sidebar-video1.jpg",alt:"video image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("img",{attrs:{src:"/images/icons/play.png",alt:"video"}})])}],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{socialList:[{iconName:"icofont-facebook",title:"Facebook",url:"#"},{iconName:"icofont-pinterest",title:"Pinterest",url:"#"},{iconName:"icofont-instagram",title:"Instagram",url:"#"}]}}},l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1200"}},[n("h3",{staticClass:"widget-title"},[t._v("Share Now.")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"widget-social"},t._l(t.socialList,(function(e,r){return n("div",{key:r,staticClass:"social-item"},[n("a",{attrs:{href:e.url}},[n("div",{staticClass:"icon"},[n("i",{class:e.iconName})]),t._v(" "),n("span",[t._v(t._s(e.title))])])])})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"separator-line"},[n("img",{staticClass:"me-1",attrs:{src:"/images/shape/line-s2.png",alt:"Image-HasTech"}}),t._v(" "),n("img",{attrs:{src:"/images/shape/line-s1.png",alt:"Image-HasTech"}})])}],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);var r={},l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"widget-search-box"},[n("form",[n("div",{staticClass:"form-input-item"},[n("label",{staticClass:"sr-only",attrs:{for:"search2"}},[t._v("Search Here")]),t._v(" "),n("input",{attrs:{type:"text",id:"search2",placeholder:"Search Here"}}),t._v(" "),n("button",{staticClass:"btn-src",attrs:{type:"submit"}},[n("i",{staticClass:"icofont-search-2"})])])])])])}],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{recentPosts:[{imgSrc:"/images/blog/s1.jpg",title:"Make type specimen book only five.",date:"07 June, 2021"},{imgSrc:"/images/blog/s2.jpg",title:"We work in the fields of UI/UX design",date:"26 July, 2021"},{imgSrc:"/images/blog/s3.jpg",title:"printing industry has been printer.",date:"18 March, 2021"}]}}},l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("h3",{staticClass:"widget-title"},[t._v("Recent Post")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"widget-blog-post"},[n("ul",t._l(t.recentPosts,(function(e,r){return n("li",{key:r,staticClass:"recent-post-item"},[n("div",{staticClass:"thumb"},[n("n-link",{attrs:{to:"/blog-details"}},[n("img",{attrs:{src:e.imgSrc,alt:e.title}})])],1),t._v(" "),n("div",{staticClass:"content"},[n("n-link",{attrs:{to:"/blog-details"}},[t._v(t._s(e.title))]),t._v(" "),n("span",[n("i",{staticClass:"icofont-ui-calendar"}),t._v(t._s(e.date))])],1)])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"separator-line"},[n("img",{staticClass:"me-1",attrs:{src:"/images/shape/line-s2.png",alt:"image"}}),t._v(" "),n("img",{attrs:{src:"/images/shape/line-s1.png",alt:"image"}})])}],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tags:["Business","Consulting","User Interface","Corporate","Agency","Gardening","Industry","Minimal","Unique"]}}},l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("h3",{staticClass:"widget-title"},[t._v("Popular Tags")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"widget-tags"},[n("ul",t._l(t.tags,(function(e,r){return n("li",{key:r},[n("n-link",{attrs:{to:"/blog"}},[t._v(t._s(e))])],1)})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"separator-line"},[n("img",{staticClass:"me-1",attrs:{src:"/images/shape/line-s2.png",alt:"shape"}}),t._v(" "),n("img",{attrs:{src:"/images/shape/line-s1.png",alt:"shape"}})])}],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);var r=n(48),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-area text-center pt-0 pb-70",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("nav",[n("ul",{staticClass:"page-numbers"},[n("li",[n("a",{staticClass:"page-number",attrs:{href:"#"}},[t._v("1")])]),t._v(" "),n("li",[n("a",{staticClass:"page-number",attrs:{href:"#"}},[t._v("2")])]),t._v(" "),n("li",[n("a",{staticClass:"page-number",attrs:{href:"#"}},[t._v("3")])]),t._v(" "),n("li",[n("a",{staticClass:"page-number next",attrs:{href:"#"}},[n("i",{staticClass:"icofont-double-right"})])])])])])}],!1,null,null,null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);n(19),n(41),n(49);var r={components:{Pagination:function(){return Promise.resolve().then(n.bind(null,284))},WidgetSearch:function(){return Promise.resolve().then(n.bind(null,276))},ServiceCategoryWidget:function(){return Promise.resolve().then(n.bind(null,270))},WidgetVideo:function(){return Promise.resolve().then(n.bind(null,271))},WidgetSocial:function(){return Promise.resolve().then(n.bind(null,272))},WidgetRecentPost:function(){return Promise.resolve().then(n.bind(null,277))},WidgetTags:function(){return Promise.resolve().then(n.bind(null,278))}},data:function(){return{blogs:[{imgSrc:"/images/blog/b1.jpg",title:"We work in the fields of UI/UX design and art direction.",excerpt:"Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",date:"21 March, 2021",comment:2566,like:750,author:"Alvin Malone",category:"Business/Marketing"},{imgSrc:"/images/blog/b2.jpg",title:"printing and type setting industry has been printer.",excerpt:"Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",date:"17 June, 2021",comment:3345,like:980,author:"Andrew Rechard",category:"Development/Design"},{imgSrc:"/images/blog/b3.jpg",title:"We work in the fields of UI/UX design and art direction.",excerpt:"Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",date:"28 May, 2021",comment:1450,like:380,author:"Antony Gomes",category:"Fashion/Style"},{imgSrc:"/images/blog/b4.jpg",title:"Printer took galle scrambled it to make a type specimen.",excerpt:"Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",date:"12 August, 2020",comment:1780,like:1290,author:"Falguni",category:"Electronics/Gadget"}]}}},l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"blog-grid-area"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"blog-content-column"},[n("div",{staticClass:"blog-content-area post-items-style2"},[t._l(t.blogs,(function(e,r){return n("div",{key:r,staticClass:"post-item",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"thumb"},[n("n-link",{attrs:{to:"/blog-details"}},[n("img",{attrs:{src:e.imgSrc,alt:e.title}})])],1),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"meta"},[n("n-link",{staticClass:"post-date",attrs:{to:"/blog"}},[t._v(t._s(e.date))]),t._v(" "),n("n-link",{staticClass:"post-comment",attrs:{to:"/blog"}},[n("i",{staticClass:"icofont-speech-comments"}),t._v(t._s(e.comment))]),t._v(" "),n("n-link",{staticClass:"post-like",attrs:{to:"/blog"}},[n("i",{staticClass:"icofont-heart"}),t._v(t._s(e.like))]),t._v(" "),n("n-link",{staticClass:"post-author",attrs:{to:"/blog"}},[n("i",{staticClass:"icofont-user-alt-7"}),t._v(t._s(e.author))])],1),t._v(" "),n("h4",{staticClass:"title"},[n("n-link",{attrs:{to:"/blog-details"}},[t._v(t._s(e.title))])],1),t._v(" "),t._m(0,!0),t._v(" "),n("p",[t._v(t._s(e.excerpt))]),t._v(" "),n("n-link",{staticClass:"btn btn-theme btn-border btn-gray",attrs:{to:"/blog-details"}},[t._v("Read More "),n("i",{staticClass:"icon icofont-long-arrow-right"})])],1)])})),t._v(" "),n("Pagination")],2),t._v(" "),n("div",{staticClass:"sidebar-area"},[n("WidgetSearch"),t._v(" "),n("ServiceCategoryWidget"),t._v(" "),n("WidgetVideo"),t._v(" "),n("WidgetSocial"),t._v(" "),n("WidgetRecentPost"),t._v(" "),n("WidgetTags")],1)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"separator-line"},[n("img",{staticClass:"me-1",attrs:{src:"/images/shape/line-s2.png",alt:"shape"}}),t._v(" "),n("img",{attrs:{src:"/images/shape/line-s1.png",alt:"shape"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:n(284).default,WidgetSearch:n(276).default,ServiceCategoryWidget:n(270).default,WidgetVideo:n(271).default,WidgetSocial:n(272).default,WidgetRecentPost:n(277).default,WidgetTags:n(278).default})},307:function(t,e,n){"use strict";n.r(e);n(19),n(41),n(49);var r={components:{Header:function(){return Promise.resolve().then(n.bind(null,263))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,267))},PageTitle:function(){return Promise.resolve().then(n.bind(null,268))},BlogWrapper:function(){return Promise.resolve().then(n.bind(null,286))},ContactDevider:function(){return Promise.resolve().then(n.bind(null,269))},Footer:function(){return Promise.resolve().then(n.bind(null,262))}},head:function(){return{title:"Blog"}}},l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-page-wrapper"},[n("Header"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),n("PageTitle",{attrs:{title:"Blog Post",breadcrumbTitle:"Blog"}}),t._v(" "),n("BlogWrapper"),t._v(" "),n("ContactDevider"),t._v(" "),n("Footer"),t._v(" "),n("client-only",[n("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[n("i",{staticClass:"arrow-top icofont-rounded-up"}),t._v(" "),n("i",{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(263).default,OffCanvasMobileMenu:n(267).default,PageTitle:n(268).default,BlogWrapper:n(286).default,ContactDevider:n(269).default,Footer:n(262).default})}}]);