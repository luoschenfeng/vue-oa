<template>
  <div class="layout">
    <layout-header
      class="layout_header"
    />
    <div class="layout_main">
      <layout-sidebar
        :class="[sidebarCollapse ? 'main_sidebar__resize' : '','main_sidebar']"
      />
      <transition name="fade-in">
        <keep-alive>
          <router-view :class="[sidebarCollapse ? 'main_view__resize' : '','main_view']" />
        </keep-alive>
      </transition>
    </div>
    <layout-sittings class="layout_sittings" />
  </div>
</template>

<script>

import LayoutHeader from './components/header'
import LayoutSidebar from './components/sidebar'
import LayoutSittings from './components/setting'
export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutSidebar,
    LayoutSittings,
  },
  computed: {
    sidebarCollapse() {
      return this.$store.getters['sidebarCollapse']
    },
  },
}
</script>
<style lang="scss" scoped>
.layout {
  // height: calc(100% - #{$header-height});
  // position: relative;
  .layout_header {
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .layout_main {
    .main_sidebar {
      position: fixed;
      top: $header-height;
      width: $sidebar-max-width;
      &.main_sidebar__resize {
        width: $sidebar-min-width;
      }
    }
    .main_view {
      padding: 1rem;
      padding-top: 6rem;
      margin-left: $sidebar-max-width;
      transition: margin 0.24s;
      background-color: $main-view-bg;
      &.main_view__resize {
        margin-left: $sidebar-min-width;
      }
    }
  }
}
</style>
