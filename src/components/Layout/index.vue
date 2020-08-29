<template>
  <div class="layout">
    <layout-header
      class="layout_header"
    />
    <div class="layout_main">
      <layout-sidebar
        :class="['main_sidebar', sidebarCollapse ? 'main_sidebar__resize' : '']"
      />
      <div :class="['main', sidebarCollapse ? 'main__resize' : '']">
        <keep-alive>
          <router-view class="main_view" />
        </keep-alive>
      </div>
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
  height: 100%;
  .layout_header {
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .layout_main {
    height: calc(100% - #{$header-height});
    padding-top: $header-height;
    .main_sidebar {
      position: fixed;
      top: $header-height;
      width: $sidebar-max-width;
      &.main_sidebar__resize {
        width: $sidebar-min-width;
      }
    }
    .main {
      padding: 1rem;
      background-color: $classics-app-bg;
      position: relative;
      margin-left: $sidebar-max-width;
      transition: margin 0.24s;
      &.main__resize {
        margin-left: $sidebar-min-width;
      }
      .main_view {
        padding: 1rem;
        background-color: $classics-router-view-bc;
        box-shadow: $classics-box-shadow-base;
        border-radius: $border-radius-base;
      }
    }
  }
}
</style>
