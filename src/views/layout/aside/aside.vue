<template>
  <div>
    <el-aside id="asideNav">
      <div class="logo-name">
        <p v-if="$store.getters.logoShow">XU</p>
        <p v-else>网站威胁扫描</p>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical"
               @select="selectmenu"
               :collapse="$store.getters.isCollapse"
               background-color="rgba(37,42,47,1)"
               text-color="rgba(255,255,255,1)"
               :router="$store.getters.uniquerouter"
               :unique-opened="$store.getters.uniquerouter"
               :collapse-transition="true"
      >
        <template v-for="(item,index) in $store.getters.routers" v-if="!item.hidden">
          <el-submenu v-if="!item.alone && item.children.length>0" :index="index+''">
            <template slot="title">
              <i :class="item.iconCls?item.iconCls:''"></i>
              <span slot="title">{{ item.name }}</span>
            </template>

            <menu-tree :menuData="item.children"></menu-tree>

          </el-submenu>
          <el-menu-item :index="item.path" v-else>
            <i :class="item.iconCls?item.iconCls:''"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>

      </el-menu>
    </el-aside>
  </div>
</template>

<script>
  import menuTree from './menuTree'

  export default {
    data(){
      return {
        logo:"./static/images/logo.png"
      }
    },
    name: 'asideNav',
    components: {
      menuTree,
    },
    watch: {
      // 监听浏览器直接输入路由，将此路由添加到tabnavBox
      '$route.path': function (val) {
        // this.selectmenu(val)
      }
    },
    methods: {
      selectmenu (key) {
      //   let router = this.$store.getters.routers
      //   let name = ''
      //   let navTitle = function (path, routerARR) {
      //     for (let i = 0; i < routerARR.length; i++) {
      //       if (routerARR[i].children.length > 0 || routerARR[i].path === path) {
      //         if (routerARR[i].path === path && routerARR[i].children.length < 1) {
      //           name = routerARR[i].name
      //           break
      //         }
      //         navTitle(path, routerARR[i].children)
      //       }
      //     }
      //     return name
      //   }
      //   this.$store.dispatch('addTab', {
      //     title: navTitle(key, router),
      //     path: key
      //   })
       }
    }
  }
</script>

<style lang="scss">
  $top: top;
  $bottom: bottom;
  $left: left;
  $right: right;
  %w100 {
    width: 100%;
  }

  %h100 {
    height: 100%;
  }

  %cursor {
    cursor: pointer;
  }

  @mixin set-value($side, $value) {
    @each $prop in $leftright {
      #{$side}-#{$prop}: $value;
    }
  }

  #asideNav {
    display: flex;
    width: 200px!important;
    flex-direction: column;
    overflow-x: hidden;
    border-right: solid 1px #e6e6e6;
    .logo-name {
      background-color: #03152A !important;
      @extend %w100;
      font-weight: 300;
      z-index: 999;
      p {
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
        color:rgba(255,255,255,1);
      }
    }
    .el-menu-vertical:not(.el-menu--collapse) {
      width: 200px;
      @extend %h100;
      overflow-y: scroll;
    }
    .el-submenu .el-submenu__title:hover,.el-submenu.is-active .el-submenu__title:hover{
      background-color:rgba(15,16,18,1)!important;
    }
    .el-menu-item, .el-submenu__title{
      height: 40px!important;
      line-height: 40px!important;
    }
    .el-menu {
      flex: 1;
      overflow: inherit;
      border-right: none;
      &::-webkit-scrollbar {
        display: none;
      }
      .fa {
        vertical-align: middle;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
      }
      .el-menu-item {
        background-color: #020f1d !important;
        border-bottom: 1px solid #020f1d;
        &:hover {
          color: #ffffff !important;
          background-color: #375573 !important;
        }
      }
      .el-menu-item.is-active {
        background-color: rgba(15,16,18,1) !important;
        color: rgba(255,255,255,1) !important;
      }
      .is-opened > .el-submenu__title > .el-icon-arrow-down {
        color: #ffffff;
        font-weight: 500;
        font-size: 18px;
      }
    }

  }
</style>
