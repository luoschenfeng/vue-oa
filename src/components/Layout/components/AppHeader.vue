<template>
  <div class="header">
    <div class="header_title">
      <h2 class="title_inline">
        vue-oa
      </h2>
    </div>
    <div class="header_search">
      <transition
        name="zoom-in-center"
      >
        <el-input
          v-if="showInput"
          v-model="searchValue"
          :placeholder="$t('common.placeholder.search')"
        />
      </transition>
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="handleClick"
      />
    </div>
    <div class="header_prompt">
      <svg-icon class-name="prompt" />
      <svg-icon class-name="email" />
    </div>
    <div class="header_avatar"></div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data: function () {
    return {
      showInput: false,
      searchValue: '',
    };
  },
  methods: {
    handleClick() {
      this.showInput = !this.showInput
    },
  },
}
</script>

<style>

</style>
