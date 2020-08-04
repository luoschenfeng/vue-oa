<template>
  <div class="layout">
    <app-header />
    <app-side-bar />
    <app-sittings />
    <app-footer />
    <router-view />
  </div>
</template>

<script>

import AppHeader from './components/AppHeader'
import AppSideBar from './components/AppSideBar'
import AppSittings from './components/AppSittings'
import AppFooter from './components/AppFooter'
export default {
  name: 'Layout',

  components: {
    AppHeader,
    AppSideBar,
    AppSittings,
    AppFooter,
  },
}
</script>
<style lang="scss" scoped>
.layout {
  // background: $--color-primary;
}
</style>
