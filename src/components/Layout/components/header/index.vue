<template>
  <div class="header">
    <div
      :collapse="sidebarCollapse"
      :class="[sidebarCollapse ? 'header_title__collapse' : '', 'header_title']"
    >
      <router-link
        class="title_link"
        to="/"
        tag="h2"
      >
        <svg-icon
          class-name="vue"
          class="icon_vue"
        />
        <span
          v-if="!sidebarCollapse"
          class="title_link title_link__h2"
        >vue-oa</span>
      </router-link>
    </div>
    <div class="header_menu">
      <svg-icon
        class-name="menu"
        class="menu_icon"
        @click="handleToggleSidebar"
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
    sidebarCollapse: {
      get() {
        return this.$store.getters['sidebarCollapse']
      },
      set(sidebarCollapse) {
        this.$store.dispatch('settings/setSidebarCollapse', sidebarCollapse)
      },
    },
  },
  methods: {
    handleClick() {
      this.showInput = !this.showInput
    },
    handleToggleSidebar() {
      this.sidebarCollapse = !this.sidebarCollapse
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  background: $classics-headerBg;
  color: $classics-color-text-primary;
  justify-content: space-between;
  align-items: center;
  height: $header-height;
  width: 100%;
  .header_title {
    height: $header-height;
    line-height: $header-height;
    box-sizing: border-box;
    width: $sidebar-max-width;
    // transition: $width-transition-base;
    // border-right: 1px solid $--border-color-lighter;
    // border-bottom: 1px solid $--border-color-lighter;
    // &:hover {
    //   border-right: 1px solid $--border-color-base;
    // }
    &.header_title__collapse {
      width: $sidebar-min-width;
    }
    .title_link {
      @include hasEvent;
      text-align: center;
      font-size: $font-size-h2;
      .title_link__h2 {
        padding-left: 1rem;
      }
    }
  }
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
