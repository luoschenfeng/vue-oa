import {
  setTheme, getTheme, setLocal, getLocal,
} from '@/unit/settings'
const state = {
  theme: getTheme(),
  local: getLocal(),
  sideBarIsCollapse: false,
}

const mutations = {
  SET_THEME: (state, theme) => {
    state.theme = theme
  },
  SET_LOCAL: (state, local) => {
    state.local = local
  },
  SET_Side_Bar_Is_Collapse: (state, sideBarIsCollapse) => {
    state.sideBarIsCollapse = sideBarIsCollapse
  },
}

const actions = {
  setTheme({
    commit,
  }, theme) {
    commit('SET_THEME', theme)
    setTheme(theme)
  },
  setLocal({
    commit,
  }, local) {
    commit('SET_LOCAL', local)
    setLocal()
  },
  setSideBarIsCollapse({
    commit,
  }, sideBarIsCollapse) {
    commit('SET_Side_Bar_Is_Collapse', sideBarIsCollapse)
  },
}

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
}
