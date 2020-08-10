<template>
  <div>
    <template
      v-for="route of routes"
    >
      <template v-if="route.children && route.children.length">
        <el-submenu
          v-if="submenuShow(route)"
          :key="route.path"
          :index="route.path"
        >
          <template slot="title">
            <svg-icon
              :class-name="route.meta.icon || 'default-menu'"
            />
            <span
              slot="title"
            >
              {{ $t(`${route.meta.title}`) }}
            </span>
          </template>
          <submenu-component :routes="route.children" />
        </el-submenu>
        <submenu-component
          v-else
          :key="route.path"
          :routes="route.children"
        />
      </template>
      <template v-else-if="submenuShow(route)">
        <router-link
          :key="route.path"
          :to="{name: route.name}"
        >
          <el-menu-item
            :index="route.path"
          >
            <svg-icon
              :class-name="route.meta.icon || 'default-menu'"
            />
            <span slot="title">{{ $t(`${route.meta.title}`) }}</span>
          </el-menu-item>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SubmenuComponent',
  props: {
    routes: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    submenuShow(route) {
      return route.meta && (route.meta.sideBarShow === undefined || route.meta.sideBarShow) && route.meta.title
    },
    routerPath(route) {
      return this.$router.resolve(route)
    },

  },
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 14px;
  height: 14px;
}
</style>
