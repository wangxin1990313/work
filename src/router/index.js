import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import Layout from '@/views/layout/layout'
import Artical from '@/views/artical'
import addArtical from '@/views/artical/add'
import NotFound from  '@/page404'
import login from '@/views/login'
Vue.use(Router)

let defaultRouter = [
    { path: '/',
      redirect: '/index',
      hidden: true,
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      hidden: true,
      children: []
    },
    {
      path: '/index',
      component: Layout,
      iconCls: 'el-icon-edit-outline', // 图标样式class
      name: '主页',
      children: [
        {
          path: '/index',
          iconCls: 'el-icon-edit-outline', // 图标样式class
          name: '主页',
          component: home,
          children: []
        }
      ]
    },
    {
      path: '/index',
      component: Layout,
      name: '主页1',
      iconCls: 'el-icon-edit-outline', // 图标样式class
      children: [
        {
          path: '/artical',
          iconCls: 'el-icon-edit-outline', // 图标样式class
          name: "aaa",
          component: Artical,
          children: []
        },
        {
          path: '/add',
          iconCls: 'el-icon-edit-outline', // 图标样式class
          name: "aaa",
          component: addArtical,
          children: []
        }
      ]
    },
    {
      path: '/404',
      component: NotFound,
      name: '404',
      hidden: true,
      children: []
    },
  ]
let addRouter = [

]
export default new Router({
  routes: defaultRouter
})
export {defaultRouter, addRouter}
