<template>
  <svg
    class="svg-icon"
    :class="className"
    aria-hidden="true"
    v-on="$listeners"
  >
    <use :xlink:href="useName" />
  </svg>
</template>

<script>

// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage

export default {
  name: 'SvgIcon',
  props: {
    className: {
      type: String,
      required: true,
    },
  },
  computed: {
    useName() {
      return `#icon-${this.className}`
    },
  },
}
</script>
