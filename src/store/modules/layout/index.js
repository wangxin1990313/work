export default {
  state: {
    isCollapse: false,
    logoShow: false,
    uniquerouter: true,
    rightNav: {},
  },
  mutations: {
    addTab (state, arg) {
      state.isActive = arg.path
      for (let i = 0; i < state.tabnavBox.length; i++) {
        if (state.tabnavBox[i].path === arg.path) {
          return false
        }
      }
      state.tabnavBox.push({
        title: arg.title,
        path: arg.path
      })
    },
    openMenu (state, arg) {
      state.rightNav = arg
    },
    collapse (state, arg) {
      state.isCollapse = !state.isCollapse
      if (state.logoShow) {
        setTimeout(function () {
          state.logoShow = false
        }, 300)
      } else {
        state.logoShow = true
      }
    },
  },
  actions: {
    openMenu ({commit}, arg) {
      commit('openMenu', arg)
    },
    collapse ({commit}, arg) {
      commit('collapse', arg)
    },
  }
}
