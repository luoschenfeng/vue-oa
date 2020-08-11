<template>
  <div class="sidebar_menu">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="menu.cuttentActive"
        :collapse="sidebarCollapse"
        :collapse-transition="false"
        :unique-opened="false"
      >
        <submenu-component :routes="routes" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SubmenuComponent from './components/SubmenuComponent'

// import variables from '@/styles/variables.scss'
export default {
  name: 'LayoutSidebar',
  components: {
    SubmenuComponent,
  },
  data() {
    return {
      menu: {
        cuttentActive: 'dashboard',
      },
    }
  },
  computed: {
    routes() {
      return this.$store.getters['routes']
    },
    sidebarCollapse() {
      return this.$store.getters['sidebarCollapse']
    },

    // variables() {
    //   return variables
    // },
  },
}
</script>

<style lang="scss" scoped>
</style>
