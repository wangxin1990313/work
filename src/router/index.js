import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import Layout from '@/views/layout/layout'
import Artical from '@/views/artical'
import Zichan from '@/views/zichan'
import Muma from '@/views/muma'
import Task from '@/views/task'
import NotFound from  '@/page404'
import login from '@/views/login'
import guide from '@/views/guide'
Vue.use(Router)

let defaultRouter = [
    { path: '/',
      redirect: '/guide',
      hidden: true,
      component: guide,
      children: []
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide,
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
      name: '首页',
      children: [
        {
          path: '/index',
          iconCls: 'el-icon-edit-outline', // 图标样式class
          name: '首页',
          component: home,
          children: []
        }
      ]
    },
    {
      path: '/index',
      component: Layout,
      name: '总览',
      iconCls: 'el-icon-edit-outline', // 图标样式class
      children: [
        {
          path: '/artical',
          iconCls: 'el-icon-edit-outline', // 图标样式class
          name: "总览",
          component: Artical,
          children: []
        },
      ]
    },
  {
    path: '/index',
    component: Layout,
    name: '资产列表',
    iconCls: 'el-icon-edit-outline', // 图标样式class
    children: [
      {
        path: '/zichan',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: "资产列表",
        component: Zichan,
        children: []
      },
    ]
  },
  {
    path: '/index',
    component: Layout,
    name: '敏感/木马列表',
    iconCls: 'el-icon-edit-outline', // 图标样式class
    children: [
      {
        path: '/muma',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: "敏感/木马列表",
        component: Muma,
        children: []
      },
    ]
  },
  {
    path: '/index',
    component: Layout,
    name: '扫描任务',
    iconCls: 'el-icon-edit-outline', // 图标样式class
    children: [
      {
        path: '/task',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: "扫描任务",
        component: Task,
        children: []
      },
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
