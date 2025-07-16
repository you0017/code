import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/views/layOut/Index.vue'
import Login from '@/views/login/Index.vue'
import Order from '@/views/myOrder/Index.vue'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayOut,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/layOut/Home.vue')
      },
      {
        path: '/category',
        component: () => import('@/views/layOut/Category.vue')
      },
      {
        path: '/cart',
        component: () => import('@/views/layOut/Cart.vue')
      },
      {
        path: '/user',
        component: () => import('@/views/layOut/User.vue')
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/pay',
    component: () => import('@/views/pay/Index.vue')
  },
  {
    path: '/prodetail/:id',
    component: () => import('@/views/proDetail/Index.vue')
  },
  {
    path: '/search',
    component: () => import('@/views/search/Index.vue')
  },
  {
    path: '/searchlist',
    component: () => import('@/views/search/SearchIndex.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

//存储需要权限访问的页面
const authUrls = ['/pay','/order']

/**
 * 路由卫士
 * to 到哪去，完整路由信息
 * from 从哪来，完整路由信息
 * next() 是否放行
 *
 * 1. next() 直接放行到to的页面
 * 2. next(path) 进行拦截，跳转到path
 */
router.beforeEach((to, from, next) => {
  if ( !authUrls.includes(to.path) ) {
    next()
  }else if (store.getters.token) {
    next()
  } else {
    next('/login')
  }
})

export default router
