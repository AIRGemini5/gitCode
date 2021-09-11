import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _487c2cf2 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _3e6c5308 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _38a9416c = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _e6f53228 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _d530f180 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _6019e06c = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _734faa39 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _487c2cf2,
    children: [{
      path: "",
      component: _3e6c5308,
      name: "home"
    }, {
      path: "/login",
      component: _38a9416c,
      name: "login"
    }, {
      path: "/register",
      component: _38a9416c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _e6f53228,
      name: "profile"
    }, {
      path: "/settings",
      component: _d530f180,
      name: "settings"
    }, {
      path: "/editor",
      component: _6019e06c,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _734faa39,
      name: "article"
    }]
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
