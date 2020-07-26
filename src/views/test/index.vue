<template>
  <div>
    i'm index
    <router-link
      to="/test"
      tag="li"
    >
      login
    </router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route)
  },
}
</script>
