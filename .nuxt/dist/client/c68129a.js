(window.webpackJsonp=window.webpackJsonp||[]).push([[48,16,20,22,24,25,26,27,31],{261:function(t,e,n){},262:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:t.year=(new Date).getFullYear();case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,Configs:[],year:"",FooterMenu:[],errors:[],siteLogoLightUrl:""}},methods:{getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,t.FooterMenu=n.data.FooterLinks.menus,t.siteLogoLightUrl=n.data.SiteLogo.url,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.errors.push(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},filters:{getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}}}),l=n(48),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area bg-img-cover",style:{backgroundImage:"url('/images/photos/bg-footer.jpg')"}},[n("div",{staticClass:"footer-top",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"contact-info-content"},[n("div",{staticClass:"contact-info-item"},[t._m(0),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Bizi Arayın.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),t._l(t.Configs.Telephone,(function(e){return n("a",{key:e.id,attrs:{href:"tel://"+e.text}},[t._v(t._s(e.text))])}))],2)]),t._v(" "),n("div",{staticClass:"contact-info-item"},[t._m(1),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Email.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),t._l(t.Configs.mail,(function(e){return n("a",{key:e.id,attrs:{href:"mailto://"+e.text}},[t._v(t._s(e.text))])}))],2)]),t._v(" "),n("div",{staticClass:"contact-info-item"},[t._m(2),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Adres.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.Configs.adres)}})])])])])])])]),t._v(" "),n("div",{staticClass:"container",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-9 col-lg-8 col-xl-8"},[n("div",{staticClass:"widget-item mt-0"},[n("div",{staticClass:"about-widget"},[n("n-link",{staticClass:"footer-logo",attrs:{to:"/"}},[n("img",{attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.siteLogoLightUrl),alt:"Logo"}})]),t._v(" "),n("p",[t._v(t._s(t.Configs.SiteAciklamasi))]),t._v(" "),n("div",{staticClass:"widget-newsletter"})],1)])]),t._v(" "),n("div",{staticClass:"col-md-8 col-lg-4 col-xl-4"},[n("div",{staticClass:"widget-item menu-wrap-two-column"},[n("h4",{staticClass:"widget-title"},[t._v("Menü")]),t._v(" "),n("img",{staticClass:"line-shape",attrs:{src:"/images/shape/line-s1.png",alt:"shape"}}),t._v(" "),n("nav",{staticClass:"widget-menu-wrap"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",{staticClass:"nav-menu nav"},t._l(t.FooterMenu,(function(e){return n("li",{key:e.id},[n("n-link",{attrs:{to:e.Link?e.Link:""}},[t._v(t._s(e.Baslik))])],1)})),0)])])])])])])]),t._v(" "),n("div",{staticClass:"footer-bottom"},[n("div",{staticClass:"container"},[n("div",{staticClass:"footer-bottom-content"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-6 order-2 order-md-1"},[n("div",{staticClass:"widget-copyright"},[n("p",[t._v("© "+t._s(t.year)+" "),n("span",[t._v(t._s(t.Configs.SiteTitle))])])])]),t._v(" "),n("div",{staticClass:"col-md-6 order-1 order-md-2"},[n("div",{staticClass:"widget-social-icons"},t._l(t.Configs.Social,(function(t){return n("a",{key:t.id,attrs:{href:t.link?t.link:""}},[n("i",{class:t.ikon?"icofont-"+t.ikon:"icofont-share"})])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c1.png",alt:"Icon"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c2.png",alt:"Icon"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c3.png",alt:"Icon"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(262).default})},263:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(19),n(41),n(49),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:case"end":return e.stop()}}),e)})))()},components:{Navigation:function(){return Promise.resolve().then(n.bind(null,265))}},data:function(){return{isSticky:!1,mainUrl:this.$axiosUrl,Configs:[],errors:[],siteLogoUrl:"",siteLogoLightUrl:""}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,t.siteLogoUrl=n.data.SiteLogo.url,t.siteLogoLightUrl=n.data.SiteLogoLight.url,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.errors.push(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},filters:{getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}}),l=n(48),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-area header-default transparent sticky-header",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 col-sm-4 col-lg-3"},[n("div",{staticClass:"header-logo-area"},[n("n-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo-main",attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.siteLogoUrl),alt:"Logo"}}),t._v(" "),n("img",{staticClass:"logo-light",attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.siteLogoLightUrl),alt:"Logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-6 col-sm-8 col-lg-9"},[n("div",{staticClass:"header-align"},[n("div",{staticClass:"header-navigation-area navigation-style-two"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"header-action-area"},[n("button",{staticClass:"btn-menu d-xl-none",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")]),t._v(" "),n("n-link",{staticClass:"btn-theme btn-style",attrs:{to:"/contact"}},[t._v("\n                            Get A Free Quote \n                            "),n("i",{staticClass:"icon-style icofont-double-right"})])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(265).default,Header:n(263).default})},264:function(t,e,n){"use strict";n(261)},265:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMenus();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{Menus:[],errors:[]}},methods:{getMenus:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"menus");case 3:n=e.sent,t.Menus=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),l=n(48),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"main-menu nav justify-content-center"},t._l(t.Menus,(function(menu){return n("li",{key:menu.id,class:{"has-submenu":menu.AltMenu.length}},[menu.Yayinla?[n("n-link",{attrs:{to:menu.Link?menu.Link:""}},[t._v(t._s(menu.Baslik))]),t._v(" "),menu.AltMenu.length?n("ul",{staticClass:"submenu-nav"},t._l(menu.AltMenu,(function(e){return n("li",{key:e.id},[n("n-link",{attrs:{to:e.link?e.link:""}},[t._v(t._s(e.baslik))])],1)})),0):t._e()]:t._e()],2)})),0)}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,n){"use strict";n.r(e);var r={mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var r=t.querySelectorAll(".menu-expand"),o=r.length,l=0;l<o;l++)r[l].addEventListener("click",(function(t){v(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},o=(n(264),n(48)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/service"}},[t._v("Service")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service-details"}},[t._v("Service Details")])],1)])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);n(19),n(41),n(49);var r={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,266))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=n(48),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"offcanvas-mobile-menu",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo-light.png",alt:"brand logo"}})])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(266).default})},268:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(63),{props:["title","breadcrumbTitle"],created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,Configs:[],errors:[]}},methods:{getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),l=n(48),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-title-area",style:{backgroundImage:"url('/images/photos/bg-page-title.jpg')"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"page-title-content"},[n("h2",{staticClass:"title text-white"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"bread-crumbs"},[n("img",{staticClass:"line-shape",attrs:{src:"/images/shape/line-s3.png",alt:"shape"}}),t._v(" "),n("n-link",{attrs:{to:"/"}},[t._v(" Home "),n("span",{staticClass:"breadcrumb-sep"},[t._v("/")])]),t._v(" "),n("span",{staticClass:"active"},[t._v(t._s(t.breadcrumbTitle))])],1)])])])]),t._v(" "),n("div",{staticClass:"page-sidebar",attrs:{"data-aos":"fade-right","data-aos-duration":"1100"}},[n("div",{staticClass:"social-icon"},t._l(t.Configs.Social,(function(t){return n("a",{key:t.id,attrs:{href:t.link?t.link:""}},[n("i",{class:t.ikon?"icofont-"+t.ikon:"icofont-share"})])})),0)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layer-shape"},[n("img",{staticClass:"layer-shape-one",attrs:{src:"/images/shape/1.png",alt:"shape"}}),t._v(" "),n("img",{staticClass:"layer-shape-two",attrs:{src:"/images/shape/4.png",alt:"shape"}}),t._v(" "),n("img",{staticClass:"layer-shape-three",attrs:{src:"/images/shape/5.png",alt:"shape"}}),t._v(" "),n("img",{staticClass:"layer-shape-four",attrs:{src:"/images/shape/3.png",alt:"shape"}})])}],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(2),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDevider();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,Devider:[],DeviderBtn:[],errors:[]}},methods:{getDevider:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"pages?Slug=".concat(t.$route.params.page));case 3:null!=(n=e.sent).data[0].Content&&n.data[0].Content.forEach((function(e){"page.contact-divider"==e.__component&&(t.Devider=e,t.DeviderBtn=e.Button)})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),l=n(48),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact-divider-area",style:{backgroundColor:"#f6f7fc"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-9 col-lg-8"},[n("div",{staticClass:"contact-divider-content",attrs:{"data-aos":"fade-up","data-aos-duration":"1100"}},[n("div",{staticClass:"section-title"},[n("div",{staticClass:"subtitle-content"},[n("img",{attrs:{src:"/images/shape/line1.png",alt:"shape"}}),t._v(" "),n("h5",[t._v(t._s(t.Devider.SmallText))])]),t._v(" "),n("h2",{staticClass:"title"},[t._v(t._s(t.Devider.text)+" "),n("span",{staticClass:"bottom-style"},[t._v(t._s(t.Devider.text2))])])])])]),t._v(" "),n("div",{staticClass:"col-md-3 col-lg-4 text-left text-md-right"},[n("n-link",{staticClass:"btn btn-theme",attrs:{to:t.DeviderBtn.link?t.DeviderBtn.link:"","data-aos":"fade-up","data-aos-duration":"1100"}},[t._v(t._s(t.DeviderBtn.title)+" "),n("i",{staticClass:"icon icofont-long-arrow-right"})])],1)])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layer-shape"},[e("img",{staticClass:"shape-style1",attrs:{src:"/images/shape/15.png",alt:"shape"}})])}],!1,null,null,null);e.default=component.exports},288:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{mixer:null,portfolios:[{imgSrc:"/images/portfolio/1.jpg",title:"Business Management",category:"business"},{imgSrc:"/images/portfolio/2.jpg",title:"Market Statics & Analysis.",category:"marketing"},{imgSrc:"/images/portfolio/3.jpg",title:"Digital Marketing",category:"consulting"},{imgSrc:"/images/portfolio/4.jpg",title:"Business Consultation",category:"digital"},{imgSrc:"/images/portfolio/5.jpg",title:"Link Building Services",category:"business"},{imgSrc:"/images/portfolio/6.jpg",title:"Social Media Marketing",category:"marketing"}]}},mounted:function(){var t=this;this.$nextTick((function(){var e=document.querySelector(".box");t.mixer=new t.mixitup(e)}))}},o=n(48),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"portfolio-area"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row portfolio-grid gutter-50 box",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},t._l(t.portfolios,(function(e,r){return n("div",{key:r,staticClass:"col-md-6 portfolio-item mix",class:e.category},[n("div",{staticClass:"inner-content"},[n("div",{staticClass:"thumb"},[n("n-link",{attrs:{to:"/project-details"}},[n("img",{attrs:{src:e.imgSrc,alt:e.title}})])],1),t._v(" "),n("div",{staticClass:"portfolio-info"},[n("div",{staticClass:"content"},[n("img",{staticClass:"shape-line-img",attrs:{src:"/images/shape/line-s1.png",alt:"shape image"}}),t._v(" "),n("h3",{staticClass:"title"},[n("n-link",{attrs:{to:"/project-details"}},[t._v(t._s(e.title))])],1),t._v(" "),n("n-link",{staticClass:"category",attrs:{to:"/project-details"}},[t._v(t._s(e.category))])],1),t._v(" "),n("n-link",{staticClass:"btn-icon",attrs:{to:"/project-details"}},[n("i",{staticClass:"icofont-long-arrow-right"})])],1)])])})),0),t._v(" "),n("div",{staticClass:"portfolio-footer text-center",attrs:{"data-aos":"fade-up","data-aos-duration":"1300"}},[n("n-link",{staticClass:"btn btn-theme btn-lg mb-1",attrs:{to:"/project-details"}},[t._v("Load More")])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"section-title text-center",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"portfolio-filter-menu mb-0"},[n("button",{attrs:{"data-filter":"all"}},[t._v("All ProjectS")]),t._v(" "),n("button",{attrs:{"data-filter":".business"}},[t._v("Business")]),t._v(" "),n("button",{attrs:{"data-filter":".marketing"}},[t._v("Marketing")]),t._v(" "),n("button",{attrs:{"data-filter":".consulting"}},[t._v(" Consulting")]),t._v(" "),n("button",{attrs:{"data-filter":".digital"}},[t._v("Digital Marketing")])])])])])}],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);n(19),n(41),n(49);var r={components:{Header:function(){return Promise.resolve().then(n.bind(null,263))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,267))},PageTitle:function(){return Promise.resolve().then(n.bind(null,268))},PortfolioWrapper:function(){return Promise.resolve().then(n.bind(null,288))},ContactDevider:function(){return Promise.resolve().then(n.bind(null,269))},Footer:function(){return Promise.resolve().then(n.bind(null,262))}},head:function(){return{title:"Project"}}},o=n(48),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"portfolio-page-wrapper"},[n("Header"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),n("PageTitle",{attrs:{title:"Projects",breadcrumbTitle:"Projects"}}),t._v(" "),n("PortfolioWrapper"),t._v(" "),n("ContactDevider"),t._v(" "),n("Footer"),t._v(" "),n("client-only",[n("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[n("i",{staticClass:"arrow-top icofont-rounded-up"}),t._v(" "),n("i",{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(263).default,OffCanvasMobileMenu:n(267).default,PageTitle:n(268).default,PortfolioWrapper:n(288).default,ContactDevider:n(269).default,Footer:n(262).default})}}]);