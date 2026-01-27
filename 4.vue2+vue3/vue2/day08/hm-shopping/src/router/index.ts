import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout/Index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/layout/Home.vue')
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('../views/layout/Category.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/layout/Cart.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/layout/User.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Index.vue')
  },
  {
    path: '/search/:placeholder',
    name: 'search',
    component: () => import('../views/search/Index.vue')
  },
  {
    path: '/searchList/:searchValue',
    name: 'searchList',
    component: () => import('../views/search/List.vue')
  },
  {
    path: '/proDetail/:id',
    name: 'proDetail',
    component: () => import('../views/proDetail/Index.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('../views/pay/Index.vue')
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: () => import('@/views/myOrder/Index.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/404/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // @ts-ignore
  base: (process.env.BASE_URL as string) || '/',
  routes
})

// 路由前置守卫
// to: 即将进入的目标路由对象
// from: 当前导航正要离开的路由对象
// next: 如果执行该方法，则进入下一个导航。
// next(): 如果执行该方法，则进入下一个导航。
// next(false): 如果执行该方法，则中断当前导航。
// 定义一个数组，存用户需要权限访问的页面
const authRoutes = ['/myOrder', '/pay']

router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  if (!authRoutes.includes(to.path)) {
    next()
    return
  }

  // 要校验token
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
