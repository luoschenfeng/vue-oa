<template>
  <div>
    at laster -router - one
    <router-link :to="{name: 'Dashboard'}">
      Dashboard
    </router-link>
    <router-link :to="{name: 'LasterRouterTwo'}">
      laster -router - two
    </router-link>
    <div @click="handelSpanClick">
      {{ a }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: {
        b: 1,
      },
    }
  },
  methods: {
    handelSpanClick() {
      this.$set(this.a, 'c', this.a.c ? this.a.c + 1 : 2)
    },
  },
}
</script>

<style>

</style>
