<template>
  <div>
    at laster -router - one
    <router-link :to="{name: 'Dashboard'}">
      Dashboard
    </router-link>
    <router-link :to="{name: 'LasterRouterTwo'}">
      laster -router - two
    </router-link>
    <el-checkbox v-model="checked">
      备选项
    </el-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    }
  },
  methods: {},
}
</script>

<style>

</style>
