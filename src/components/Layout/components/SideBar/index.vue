<template>
  <div class="side-bar">
    <div class="side-bar_title">
      <router-link
        class="title_inline title_inline__h2"
        to="/"
        tag="h2"
      >
        vue-oa
      </router-link>
    </div>
    <menu-component />
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent'
export default {
  name: 'LayoutSideBar',
  components: {
    MenuComponent,
  },
}
</script>

<style lang="scss" scoped>
.layout_side-bar {
  overflow: hidden;
  .side-bar_title{
    height: $header-height;
    line-height: $header-height;
    .title_inline__h2 {
      @include hasEvent;
      text-align: center;
      font-size: $font-size-h2;

    }
  }
}
</style>
