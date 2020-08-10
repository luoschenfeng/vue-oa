<template>
  <div class="header">
    <div class="header_menu">
      <svg-icon
        class-name="menu"
        class="menu_icon"
        @click="toggleSideBar"
      />
    </div>
    <div class="header_search">
      <transition
        name="zoom-in-right"
      >
        <el-input
          v-if="showInput"
          v-model="searchValue"
          class="search_input"
          :placeholder="$t('common.placeholder.search')"
        />
      </transition>
      <i
        class="el-icon-search search_icon"
        @click="handleClick"
      ></i>
    </div>
    <div class="header_message">
      <el-badge
        :value="12"
        class="message_item"
      >
        <svg-icon
          class-name="prompt"
          class="info_icon"
        />
      </el-badge>
      <el-badge
        :value="12"
        class="message_item"
      >
        <svg-icon
          class-name="email"
          class="info_icon"
        />
      </el-badge>
    </div>
    <div class="header_operate">
      <el-dropdown>
        <div class="header_avatar">
          <el-avatar
            :size="avatar.size"
            :src="avatar.url"
          />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data: function () {
    return {
      showInput: false,
      searchValue: '',
      avatar: {
        size: 'medium',
        url: 'https://cdn.pixabay.com/photo/2017/03/05/23/14/girl-2120196_960_720.jpg',
      },
    };
  },
  computed: {
    sideBarIsCollapse: {
      get() {
        return this.$store.getters['sideBarIsCollapse']
      },
      set(val) {
        this.$store.dispatch('settings/setSideBarIsCollapse', val)
      },
    },
  },
  methods: {
    handleClick() {
      this.showInput = !this.showInput
    },
    toggleSideBar() {
      this.sideBarIsCollapse = !this.sideBarIsCollapse
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-height;
  .header_menu::v-deep {
    .menu_icon {
      @include hasEvent;
      width: 3rem;
      height: 3rem;
    }
  }
  .header_search {
    flex-grow: 1;
    display: inline-flex;
    justify-content: flex-end;
    padding: 0 1rem;
    .search_input {
      display: inline-block;
      width: initial;
      &::v-deep .el-input__inner {
        border-top: none;
        border-left: none;
        border-right: none;
      }
    }
    .search_icon {
      line-height: 4rem;
      @include hasEvent
    }
  }
  .header_message {
    .message_item {
      @include hasEvent;
      margin: 0 1rem;
      .info_icon {
        @include hasEvent;
      }
    }
  }
  .header_operate {
    padding: 0 1rem;
    .header_avatar {
      @include hasEvent;
    }
  }
}
</style>
