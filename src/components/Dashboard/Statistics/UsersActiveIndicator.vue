<template>
  <div class="page-content">
    <span class="indicator-header ">Users active <span class="span-indicator">{{ usersActive }}</span></span>

  </div>
</template>

<script>
export default {
  name: "UsersActiveIndicator",
  props: {
    usersActive: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style scoped>

</style>