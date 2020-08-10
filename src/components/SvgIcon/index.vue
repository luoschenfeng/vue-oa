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
  created() {

    // svg debugger
    if (process.env.NODE_ENV === 'development') {
      if (!this.$svgList.includes(this.className)) {
        /* eslint no-console: ["warn", { allow: ["warn"] }] */
        console.warn(`[SvgIcon] plase add the '${this.className}.svg' file at path '@/icons/svg'`)
      }
      if (this.className === 'default-menu') {
        /* eslint no-console: ["warn", { allow: ["warn"] }] */
        console.warn(`[SvgIcon] you used 'default-menu.svg' place chenge!`)
      }
    }
  },
}
</script>
