import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e040058e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _2c5d2eae = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _5f80ef7a = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _5c29c97a = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _8b61131c = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _f7ddb908 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _42f40cc7 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _e040058e,
    children: [{
      path: "",
      component: _2c5d2eae,
      name: "home"
    }, {
      path: "/login",
      component: _5f80ef7a,
      name: "login"
    }, {
      path: "/register",
      component: _5f80ef7a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _5c29c97a,
      name: "profile"
    }, {
      path: "/settings",
      component: _8b61131c,
      name: "settings"
    }, {
      path: "/editor",
      component: _f7ddb908,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _42f40cc7,
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
