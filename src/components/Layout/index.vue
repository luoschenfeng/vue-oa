<template>
  <div class="layout">
    <div class="layout_column">
      <div class="layout_row column_item">
        <layout-side-bar
          class="row_item layout_side-bar"
        />
        <div class="row_item layout_main">
          <layout-header class="main_header" />
          <router-view class="main_view" />
        </div>
      </div>
      <layout-footer class="column_item layout_footer" />
    </div>
    <layout-sittings class="layout_sittings" />
  </div>
</template>

<script>

import LayoutHeader from './components/header'
import LayoutSideBar from './components/SideBar'
import LayoutSittings from './components/setting'
import LayoutFooter from './components/footer'
export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutSideBar,
    LayoutSittings,
    LayoutFooter,
  },
}
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  position: relative;
  .layout_column {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    .layout_row {
      flex-grow: 1;
      display: flex;
      .layout_side-bar {
        width: 20rem;
      }
      .layout_main {
        flex-grow: 1;
      }
    }
    .footer_scope {

    }
  }
}
</style>
