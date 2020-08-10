<template>
  <div class="side-bar_menu">
    <el-menu
      :default-active="menu.cuttentActive"
      :collapse="isCollapse"
    >
      <submenu-component :routes="routes" />
    </el-menu>
  </div>
</template>

<script>
import SubmenuComponent from './SubmenuComponent'
export default {
  name: 'MenuComponent',
  components: {
    SubmenuComponent,
  },
  data() {
    return {
      menu: {
        cuttentActive: 'dashboard',
      },
      qq: true,
    }
  },
  computed: {
    routes() {
      return this.$store.getters['routes']
    },
    isCollapse() {
      return this.$store.getters['sideBarIsCollapse']
    },

  },
}
</script>

<style lang="scss" scoped>
.side-bar_menu {
  height: 100%;
  position: sticky;
  top: 0;
}
</style>
