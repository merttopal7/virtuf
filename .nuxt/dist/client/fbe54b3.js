(window.webpackJsonp=window.webpackJsonp||[]).push([[44,9,10,16,17,19,20,22,23,24,25,26,27,38],{261:function(t,e,n){},262:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:t.year=(new Date).getFullYear();case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,Configs:[],year:"",FooterMenu:[],errors:[],siteLogoLightUrl:""}},methods:{getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,t.FooterMenu=n.data.FooterLinks.menus,t.siteLogoLightUrl=n.data.SiteLogo.url,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.errors.push(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},filters:{getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area bg-img-cover",style:{backgroundImage:"url('/images/photos/bg-footer.jpg')"}},[n("div",{staticClass:"footer-top",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"contact-info-content"},[n("div",{staticClass:"contact-info-item"},[t._m(0),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Bizi Arayın.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),t._l(t.Configs.Telephone,(function(e){return n("a",{key:e.id,attrs:{href:"tel://"+e.text}},[t._v(t._s(e.text))])}))],2)]),t._v(" "),n("div",{staticClass:"contact-info-item"},[t._m(1),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Email.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),t._l(t.Configs.mail,(function(e){return n("a",{key:e.id,attrs:{href:"mailto://"+e.text}},[t._v(t._s(e.text))])}))],2)]),t._v(" "),n("div",{staticClass:"contact-info-item"},[t._m(2),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Adres.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.Configs.adres)}})])])])])])])]),t._v(" "),n("div",{staticClass:"container",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-9 col-lg-8 col-xl-8"},[n("div",{staticClass:"widget-item mt-0"},[n("div",{staticClass:"about-widget"},[n("n-link",{staticClass:"footer-logo",attrs:{to:"/"}},[n("img",{attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.siteLogoLightUrl),alt:"Logo"}})]),t._v(" "),n("p",[t._v(t._s(t.Configs.SiteAciklamasi))]),t._v(" "),n("div",{staticClass:"widget-newsletter"})],1)])]),t._v(" "),n("div",{staticClass:"col-md-8 col-lg-4 col-xl-4"},[n("div",{staticClass:"widget-item menu-wrap-two-column"},[n("h4",{staticClass:"widget-title"},[t._v("Menü")]),t._v(" "),n("img",{staticClass:"line-shape",attrs:{src:"/images/shape/line-s1.png",alt:"shape"}}),t._v(" "),n("nav",{staticClass:"widget-menu-wrap"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",{staticClass:"nav-menu nav"},t._l(t.FooterMenu,(function(e){return n("li",{key:e.id},[n("n-link",{attrs:{to:e.Link?e.Link:""}},[t._v(t._s(e.Baslik))])],1)})),0)])])])])])])]),t._v(" "),n("div",{staticClass:"footer-bottom"},[n("div",{staticClass:"container"},[n("div",{staticClass:"footer-bottom-content"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-6 order-2 order-md-1"},[n("div",{staticClass:"widget-copyright"},[n("p",[t._v("© "+t._s(t.year)+" "),n("span",[t._v(t._s(t.Configs.SiteTitle))])])])]),t._v(" "),n("div",{staticClass:"col-md-6 order-1 order-md-2"},[n("div",{staticClass:"widget-social-icons"},t._l(t.Configs.Social,(function(t){return n("a",{key:t.id,attrs:{href:t.link?t.link:""}},[n("i",{class:t.ikon?"icofont-"+t.ikon:"icofont-share"})])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c1.png",alt:"Icon"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c2.png",alt:"Icon"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c3.png",alt:"Icon"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(262).default})},263:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(19),n(41),n(49),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:case"end":return e.stop()}}),e)})))()},components:{Navigation:function(){return Promise.resolve().then(n.bind(null,265))}},data:function(){return{isSticky:!1,mainUrl:this.$axiosUrl,Configs:[],errors:[],siteLogoUrl:"",siteLogoLightUrl:""}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,t.siteLogoUrl=n.data.SiteLogo.url,t.siteLogoLightUrl=n.data.SiteLogoLight.url,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.errors.push(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},filters:{getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-area header-default transparent sticky-header",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 col-sm-4 col-lg-3"},[n("div",{staticClass:"header-logo-area"},[n("n-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo-main",attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.siteLogoUrl),alt:"Logo"}}),t._v(" "),n("img",{staticClass:"logo-light",attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.siteLogoLightUrl),alt:"Logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-6 col-sm-8 col-lg-9"},[n("div",{staticClass:"header-align"},[n("div",{staticClass:"header-navigation-area navigation-style-two"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"header-action-area"},[n("button",{staticClass:"btn-menu d-xl-none",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")]),t._v(" "),n("n-link",{staticClass:"btn-theme btn-style",attrs:{to:"/contact"}},[t._v("\n                            Get A Free Quote \n                            "),n("i",{staticClass:"icon-style icofont-double-right"})])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(265).default,Header:n(263).default})},264:function(t,e,n){"use strict";n(261)},265:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMenus();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{Menus:[],errors:[]}},methods:{getMenus:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"menus");case 3:n=e.sent,t.Menus=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"main-menu nav justify-content-center"},t._l(t.Menus,(function(menu){return n("li",{key:menu.id,class:{"has-submenu":menu.AltMenu.length}},[menu.Yayinla?[n("n-link",{attrs:{to:menu.Link?menu.Link:""}},[t._v(t._s(menu.Baslik))]),t._v(" "),menu.AltMenu.length?n("ul",{staticClass:"submenu-nav"},t._l(menu.AltMenu,(function(e){return n("li",{key:e.id},[n("n-link",{attrs:{to:e.link?e.link:""}},[t._v(t._s(e.baslik))])],1)})),0):t._e()]:t._e()],2)})),0)}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,n){"use strict";n.r(e);var r={mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var r=t.querySelectorAll(".menu-expand"),o=r.length,c=0;c<o;c++)r[c].addEventListener("click",(function(t){d(t)}));for(var l=0;l<n.length;l++)n[l].addEventListener("click",(function(){v()}));var d=function(t){t.currentTarget.parentElement.classList.toggle("active")},v=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},o=(n(264),n(48)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/service"}},[t._v("Service")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service-details"}},[t._v("Service Details")])],1)])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);n(19),n(41),n(49);var r={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,266))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=n(48),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"offcanvas-mobile-menu",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo-light.png",alt:"brand logo"}})])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(266).default})},268:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(63),{props:["title","breadcrumbTitle"],created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,Configs:[],errors:[]}},methods:{getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-title-area",style:{backgroundImage:"url('/images/photos/bg-page-title.jpg')"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"page-title-content"},[n("h2",{staticClass:"title text-white"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"bread-crumbs"},[n("img",{staticClass:"line-shape",attrs:{src:"/images/shape/line-s3.png",alt:"shape"}}),t._v(" "),n("n-link",{attrs:{to:"/"}},[t._v(" Home "),n("span",{staticClass:"breadcrumb-sep"},[t._v("/")])]),t._v(" "),n("span",{staticClass:"active"},[t._v(t._s(t.breadcrumbTitle))])],1)])])])]),t._v(" "),n("div",{staticClass:"page-sidebar",attrs:{"data-aos":"fade-right","data-aos-duration":"1100"}},[n("div",{staticClass:"social-icon"},t._l(t.Configs.Social,(function(t){return n("a",{key:t.id,attrs:{href:t.link?t.link:""}},[n("i",{class:t.ikon?"icofont-"+t.ikon:"icofont-share"})])})),0)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layer-shape"},[n("img",{staticClass:"layer-shape-one",attrs:{src:"/images/shape/1.png",alt:"shape"}}),t._v(" "),n("img",{staticClass:"layer-shape-two",attrs:{src:"/images/shape/4.png",alt:"shape"}}),t._v(" "),n("img",{staticClass:"layer-shape-three",attrs:{src:"/images/shape/5.png",alt:"shape"}}),t._v(" "),n("img",{staticClass:"layer-shape-four",attrs:{src:"/images/shape/3.png",alt:"shape"}})])}],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(2),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDevider();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,Devider:[],DeviderBtn:[],errors:[]}},methods:{getDevider:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"pages?Slug=".concat(t.$route.params.page));case 3:null!=(n=e.sent).data[0].Content&&n.data[0].Content.forEach((function(e){"page.contact-divider"==e.__component&&(t.Devider=e,t.DeviderBtn=e.Button)})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact-divider-area",style:{backgroundColor:"#f6f7fc"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-9 col-lg-8"},[n("div",{staticClass:"contact-divider-content",attrs:{"data-aos":"fade-up","data-aos-duration":"1100"}},[n("div",{staticClass:"section-title"},[n("div",{staticClass:"subtitle-content"},[n("img",{attrs:{src:"/images/shape/line1.png",alt:"shape"}}),t._v(" "),n("h5",[t._v(t._s(t.Devider.SmallText))])]),t._v(" "),n("h2",{staticClass:"title"},[t._v(t._s(t.Devider.text)+" "),n("span",{staticClass:"bottom-style"},[t._v(t._s(t.Devider.text2))])])])])]),t._v(" "),n("div",{staticClass:"col-md-3 col-lg-4 text-left text-md-right"},[n("n-link",{staticClass:"btn btn-theme",attrs:{to:t.DeviderBtn.link?t.DeviderBtn.link:"","data-aos":"fade-up","data-aos-duration":"1100"}},[t._v(t._s(t.DeviderBtn.title)+" "),n("i",{staticClass:"icon icofont-long-arrow-right"})])],1)])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layer-shape"},[e("img",{staticClass:"shape-style1",attrs:{src:"/images/shape/15.png",alt:"shape"}})])}],!1,null,null,null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);n(2);var r=n(280),o=n.n(r),c={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new o.a(t)}))}},l=n(48),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scene",class:t.addClassName},[n("span",{staticClass:"scene-layer",attrs:{"data-depth":t.dataDepth}},[n("img",{attrs:{src:t.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},281:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(12),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,Configs:[],Mapframe:"",errors:[]}},methods:{getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,t.Mapframe=n.data.map,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.errors.push(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},sendMail:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post(t.$axiosUrl+"mail/mail.php",{name:"Test",mail:"test@mail.com",subject:"Subject",message:"Test message"});case 2:case"end":return e.stop()}}),e)})))()}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact-area"},[n("div",{staticClass:"contact-info-light",style:{display:"none"},attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"contact-info-content"},[n("div",{staticClass:"contact-info-item"},[t._m(0),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Bizi Arayın.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),t._l(t.Configs.Telephone,(function(e){return n("a",{key:e.id,attrs:{href:"tel://"+e.text}},[t._v(t._s(e.text))])}))],2)]),t._v(" "),n("div",{staticClass:"contact-info-item"},[t._m(1),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Email.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),t._l(t.Configs.mail,(function(e){return n("a",{key:e.id,attrs:{href:"mailto://"+e.text}},[t._v(t._s(e.text))])}))],2)]),t._v(" "),n("div",{staticClass:"contact-info-item"},[t._m(2),t._v(" "),n("div",{staticClass:"content"},[n("h4",[t._v("Adres.")]),t._v(" "),n("img",{staticClass:"line-icon",attrs:{src:"/images/shape/line-s1.png",alt:"Icon"}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.Configs.adres)}})])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"contact-colunm",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"contact-map-area"},[n("iframe",{attrs:{src:t.Mapframe}})]),t._v(" "),n("div",{staticClass:"contact-form"},[n("form",{staticClass:"contact-form-wrapper",on:{submit:function(e){return e.preventDefault(),t.sendMail(e)}}},[t._m(3),t._v(" "),t._m(4)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c1.png",alt:"Icon"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c2.png",alt:"Icon"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{staticClass:"icon-img",attrs:{src:"/images/icons/c3.png",alt:"Icon"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"section-title"},[n("div",{staticClass:"subtitle-content"},[n("img",{attrs:{src:"/images/shape/line-s4.png",alt:"shape"}}),t._v(" "),n("h5",{staticClass:"text-light"},[t._v("İletişime geçin.")])]),t._v(" "),n("h2",{staticClass:"title text-light"},[t._v("Mesaj "),n("span",[t._v("Bırakın.")])]),t._v(" "),n("div",{staticClass:"separator-line"},[n("img",{attrs:{src:"/images/shape/line-s4.png",alt:"shape"}}),t._v(" "),n("img",{attrs:{src:"/images/shape/line-s4.png",alt:"shape"}})])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control",attrs:{type:"text",name:"con_name",placeholder:"İsim Soyisim"}})])]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control",attrs:{type:"email",name:"con_email",placeholder:"Email Adresi"}})])]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control",attrs:{type:"text",name:"con_phone",placeholder:"Telefon Numarası"}})])]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group mb-0"},[n("textarea",{attrs:{name:"con_message",placeholder:"Mesaj"}})])]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group mb-0"},[n("button",{staticClass:"btn btn-theme",attrs:{type:"submit"}},[t._v("Gönder "),n("i",{staticClass:"icofont-long-arrow-right"})])])])])}],!1,null,"52be677e",null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(14),n(9),n(22),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSlides();case 2:return e.next=4,t.getConfig();case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{swiperOptions:{slidesPerView:1,loop:!0,spaceBetween:30,autoplay:!1,navigation:{nextEl:".home-slider-container .swiper-button-next",prevEl:".home-slider-container .swiper-button-prev"}},Slides:[],Configs:[],mainUrl:this.$axiosUrl,errors:[]}},methods:{getSlides:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"slides");case 3:n=e.sent,t.Slides=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getConfig:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"ayarlar");case 3:n=e.sent,t.Configs=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},filters:{getTrust:function(t){return t.split(" ").join("<br>")},getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home-slider-area slider-default"},[n("div",{staticClass:"home-slider-content"},[n("div",{staticClass:"home-slider-container"},[n("swiper",{attrs:{options:t.swiperOptions}},t._l(t.Slides,(function(e){return n("div",{key:e.id,staticClass:"swiper-slide home-slider-item",style:{backgroundImage:"url('/images/slider/bg1.jpg')"}},[n("div",{staticClass:"slider-content-area"},[n("div",{staticClass:"content"},[n("div",{staticClass:"subtitle-content"},[n("img",{attrs:{src:"/images/shape/line1.png",alt:"Images"}}),t._v(" "),n("h6",[t._v(t._s(e.smallText))])]),t._v(" "),n("div",{staticClass:"tittle-wrp"},[n("h2",[t._v(t._s(e.mainText)+" "),n("span",[t._v(t._s(e.mainTextSecond))])])]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),n("n-link",{staticClass:"btn btn-theme btn-theme-color2",attrs:{to:e.button.link?e.button.link:""}},[t._v(t._s(e.button.title)+" "),n("i",{staticClass:"icon icofont-long-arrow-right"})])],1),t._v(" "),n("div",{staticClass:"layer-style"},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,e.Photo.url),alt:"Images"}})]),t._v(" "),n("div",{staticClass:"success-rate"},[n("div",{staticClass:"content"},[t._v(t._s(e.CircleOnPhoto.topText)+" "),n("span",[t._v(t._s(e.CircleOnPhoto.bottomText))])])]),t._v(" "),n("div",{staticClass:"trusted-clients-content"},[n("span",{domProps:{innerHTML:t._s(t.$options.filters.getTrust(e.clientsOnPhoto.Text))}}),t._v(" "),n("ul",{staticClass:"clients-list"},t._l(e.clientsOnPhoto.Clients,(function(e){return n("li",{key:e.id},[n("img",{attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,e.url),alt:"Images"}})])})),0)]),t._v(" "),n("div",{staticClass:"shape-style1"},[n("img",{attrs:{src:"/images/shape/1.png",alt:"Images"}})]),t._v(" "),n("div",{staticClass:"shape-style2"},[n("img",{attrs:{src:"/images/shape/2.png",alt:"Images"}})]),t._v(" "),n("div",{staticClass:"shape-style3"},[n("img",{attrs:{src:"/images/shape/3.png",alt:"Images"}})]),t._v(" "),n("div",{staticClass:"shape-style4"},[n("img",{attrs:{src:"/images/shape/4.png",alt:"Images"}})]),t._v(" "),n("div",{staticClass:"shape-style5"},[n("img",{attrs:{src:"/images/shape/5.png",alt:"Images"}})])])])])})),0),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)]),t._v(" "),n("div",{staticClass:"home-slider-sidebar",style:{backgroundColor:"#19ce67"},attrs:{"data-aos":"fade-zoom-in","data-aos-duration":"1300"}},[n("div",{staticClass:"social-icon"},t._l(t.Configs.Social,(function(t){return n("a",{key:t.id,attrs:{href:t.link?t.link:""}},[n("i",{class:t.ikon?"icofont-"+t.ikon:"icofont-share"})])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-button-next"},[e("i",{staticClass:"icofont-rounded-double-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-button-prev"},[e("i",{staticClass:"icofont-rounded-double-left"})])}],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(63),n(19),n(41),n(49),n(1),{components:{ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,279))}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDatas();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{MainImage:"",mainUrl:this.$axiosUrl,aboutContent:[],aboutContentButton:[],errors:[]}},methods:{getDatas:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"pages?Slug=".concat(t.$route.params.page));case 3:null!=(n=e.sent).data[0]&&(t.Title=n.data[0].Title,r=n.data[0].Content.filter((function(t){if("page.about-one"==t.__component)return t}))[0],t.aboutContent=r,t.MainImage=r.image.url),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},filters:{getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about-area about-default-area"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-5 md-text-center"},[n("div",{staticClass:"layer-style",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"thumb tilt-animation"},[n("img",{attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.MainImage),alt:"Images"}})]),t._v(" "),t._m(0),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-style2",imgSrc:"/images/shape/circle-shape1.png","data-depth":".6"}}),t._v(" "),n("div",{staticClass:"experience-time"},[n("div",{staticClass:"content"},[t._v(t._s(t.aboutContent.experienceTop)),n("sup",[t._v(t._s(t.aboutContent.experienceSup))]),t._v(" "),n("span",[t._v(t._s(t.aboutContent.experienceBottom))])])])],1)]),t._v(" "),n("div",{staticClass:"col-lg-6 offset-lg-1"},[n("div",{staticClass:"about-content"},[n("div",{staticClass:"section-title xs-text-center",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("h2",{staticClass:"title"},[t._v(t._s(t.aboutContent.Title)+" "),n("span",{staticClass:"bottom-style"},[t._v(t._s(t.aboutContent.TitleSecond))])]),t._v(" "),n("div",{staticClass:"desc"},[n("p",{staticClass:"mt-20"},[t._v(t._s(t.aboutContent.description))])])]),t._v(" "),n("div",{staticClass:"list-icon-style",attrs:{"data-aos":"fade-up","data-aos-duration":"1200"}},[n("ul",t._l(t.aboutContent.Items,(function(e){return n("li",{key:e.id},[n("i",{class:e.icon}),t._v(" "+t._s(e.text))])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shape-style1"},[e("img",{attrs:{src:"/images/shape/circle-line1.png",alt:"Images"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ShapeWithAnimation:n(279).default})},302:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(1),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDatas();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{mainUrl:this.$axiosUrl,features:[],errors:[]}},methods:{getDatas:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"pages?Slug=".concat(t.$route.params.page));case 3:null!=(n=e.sent).data[0]&&(r=n.data[0].Content.filter((function(t){if("page.feature-list-component"==t.__component)return t}))[0],t.features=r.Feature),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},filters:{getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"feature-area feature-about-area"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row feature-list",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},t._l(t.features,(function(e,r){return n("div",{key:r,staticClass:"col-lg-4"},[n("div",{staticClass:"feature-list-item"},[n("div",{staticClass:"icon"},[n("img",{staticClass:"img-icon",attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,e.icon.url),alt:e.title}})]),t._v(" \n                    "+t._s(e.title)+"\n                ")])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},303:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(1),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDatas();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{status:!1,Title:"",MainImage:"",mainUrl:this.$axiosUrl,aboutContent:[],aboutContentButton:[],errors:[]}},methods:{getDatas:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"pages?Slug=".concat(t.$route.params.page));case 3:null!=(n=e.sent).data[0]&&(t.Title=n.data[0].Title,r=n.data[0].Content.filter((function(t){if("page.about-two"==t.__component)return t}))[0],t.status=r.status,t.aboutContent=r,t.MainImage=r.mainImage.url,t.aboutContentButton=r.experinceButton),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},filters:{getImgSrc:function(t,e){return t.substring(0,t.length-1)+e}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.status?n("section",{staticClass:"about-area"},[n("div",{staticClass:"position-relative"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-0"},[n("div",{staticClass:"layer-about-style",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"thumb tilt-animation"},[n("img",{attrs:{src:t.$options.filters.getImgSrc(t.mainUrl,t.MainImage),alt:"image"}})]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"experience-time"},[n("div",{staticClass:"content"},[t._v("\n                                "+t._s(t.aboutContent.experinceTop)),n("sup",[t._v(t._s(t.aboutContent.experinceSup))]),t._v(" "),t._m(1),t._v(" "),n("span",[t._v(t._s(t.aboutContent.experinceBottom))])])])])]),t._v(" "),n("div",{staticClass:"col-lg-12 col-xl-6"},[n("div",{staticClass:"about-content-style2"},[n("div",{staticClass:"section-title",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("div",{staticClass:"subtitle-content"},[n("img",{attrs:{src:"/images/shape/line1.png",alt:"image"}}),t._v(" "),n("h5",[t._v(t._s(t.Title))])]),t._v(" "),n("h2",{staticClass:"title"},[t._v(t._s(t.aboutContent.AboutTitle)+" "),n("span",[t._v(t._s(t.aboutContent.AboutTitleSecond))])]),t._v(" "),n("p",[t._v(t._s(t.aboutContent.AboutUnderTitle))])]),t._v(" "),n("div",{staticClass:"inner-content",attrs:{"data-aos":"fade-up","data-aos-duration":"1200"}},[n("p",{domProps:{innerHTML:t._s(t.aboutContent.AboutDescription)}}),t._v(" "),n("div",{staticClass:"inline-style"},[n("a",{staticClass:"btn btn-theme btn-border",attrs:{href:t.aboutContentButton.link}},[t._v("\n                                    "+t._s(t.aboutContentButton.title)+"\n                                    "),n("i",{staticClass:"icon icofont-long-arrow-right"})])])])])])])])])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shape-style1"},[e("img",{attrs:{src:"/images/shape/1.png",alt:"image"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line-separetor"},[n("img",{attrs:{src:"/images/shape/line-s4.png",alt:"image"}}),t._v(" "),n("img",{attrs:{src:"/images/shape/line-s4.png",alt:"image"}})])}],!1,null,null,null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(2),n(19),n(41),n(49),n(63),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDatas();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{headTitle:"",PageTitle:!1,slider:!1,FeatureList:!1,AboutOne:!1,AboutTwo:!1,ContactWrapper:!1,ContactDevider:!1,errors:[]}},methods:{getDatas:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$axiosUrl+"pages?Slug=".concat(t.$route.params.page));case 3:null!=(n=e.sent).data[0]?(t.headTitle=n.data[0].Title,n.data[0].Content.forEach((function(e){"page.slider"==e.__component&&(t.slider=e.Status),"page.page-title"==e.__component&&(t.PageTitle=e.Status),"page.feature-list-component"==e.__component&&(t.FeatureList=e.status),"page.about-two"==e.__component&&(t.AboutTwo=e.status),"page.about-one"==e.__component&&(t.AboutOne=e.Status),"page.contact-divider"==e.__component&&(t.ContactDevider=e.Status),"page.contact"==e.__component&&(t.ContactWrapper=e.Status)}))):window.location.href="/anasayfa",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},components:{Header:function(){return Promise.resolve().then(n.bind(null,263))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,267))},HeroSlider:function(){return Promise.resolve().then(n.bind(null,282))},PageTitle:function(){return Promise.resolve().then(n.bind(null,268))},FeatureList:function(){return Promise.resolve().then(n.bind(null,302))},AboutOne:function(){return Promise.resolve().then(n.bind(null,283))},AboutTwo:function(){return Promise.resolve().then(n.bind(null,303))},FunFactOne:function(){return n.e(4).then(n.bind(null,294))},TeamSection:function(){return n.e(5).then(n.bind(null,297))},BrandLogoSection:function(){return n.e(3).then(n.bind(null,300))},TestimonialOne:function(){return n.e(6).then(n.bind(null,299))},ContactWrapper:function(){return Promise.resolve().then(n.bind(null,281))},ContactDevider:function(){return Promise.resolve().then(n.bind(null,269))},Footer:function(){return Promise.resolve().then(n.bind(null,262))}},head:function(){return{title:this.headTitle}}}),c=n(48),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-page-wrapper"},[n("Header"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),t.slider?n("HeroSlider"):t._e(),t._v(" "),t.PageTitle?n("PageTitle",{attrs:{title:t.headTitle,breadcrumbTitle:t.headTitle}}):t._e(),t._v(" "),t.FeatureList?n("FeatureList"):t._e(),t._v(" "),t.AboutTwo?n("AboutTwo"):t._e(),t._v(" "),t.AboutOne?n("AboutOne"):t._e(),t._v(" "),t.ContactWrapper?n("ContactWrapper"):t._e(),t._v(" "),t.ContactDevider?n("ContactDevider"):t._e(),t._v(" "),n("Footer"),t._v(" "),n("client-only",[n("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[n("i",{staticClass:"arrow-top icofont-rounded-up"}),t._v(" "),n("i",{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(263).default,OffCanvasMobileMenu:n(267).default,HeroSlider:n(282).default,PageTitle:n(268).default,FeatureList:n(302).default,AboutTwo:n(303).default,AboutOne:n(283).default,ContactWrapper:n(281).default,ContactDevider:n(269).default,Footer:n(262).default})}}]);