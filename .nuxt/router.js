import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cba7f854 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _9eea05b8 = () => interopDefault(import('..\\pages\\blogs\\contact.vue' /* webpackChunkName: "pages/blogs/contact" */))
const _7615ff9d = () => interopDefault(import('..\\pages\\blogs\\project.vue' /* webpackChunkName: "pages/blogs/project" */))
const _62bb3d92 = () => interopDefault(import('..\\pages\\blogs\\project-details.vue' /* webpackChunkName: "pages/blogs/project-details" */))
const _3b2a4d39 = () => interopDefault(import('..\\pages\\blogs\\service.vue' /* webpackChunkName: "pages/blogs/service" */))
const _7a33a1a4 = () => interopDefault(import('..\\pages\\blogs\\service-details.vue' /* webpackChunkName: "pages/blogs/service-details" */))
const _af7757f6 = () => interopDefault(import('..\\pages\\blogs\\_blog.vue' /* webpackChunkName: "pages/blogs/_blog" */))
const _816c7b26 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _280b0709 = () => interopDefault(import('..\\pages\\_page.vue' /* webpackChunkName: "pages/_page" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/blogs",
    component: _cba7f854,
    name: "blogs"
  }, {
    path: "/blogs/contact",
    component: _9eea05b8,
    name: "blogs-contact"
  }, {
    path: "/blogs/project",
    component: _7615ff9d,
    name: "blogs-project"
  }, {
    path: "/blogs/project-details",
    component: _62bb3d92,
    name: "blogs-project-details"
  }, {
    path: "/blogs/service",
    component: _3b2a4d39,
    name: "blogs-service"
  }, {
    path: "/blogs/service-details",
    component: _7a33a1a4,
    name: "blogs-service-details"
  }, {
    path: "/blogs/:blog",
    component: _af7757f6,
    name: "blogs-blog"
  }, {
    path: "/",
    component: _816c7b26,
    name: "index"
  }, {
    path: "/:page",
    component: _280b0709,
    name: "page"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
