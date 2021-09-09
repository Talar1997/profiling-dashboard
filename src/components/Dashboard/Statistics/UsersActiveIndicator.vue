<template>
  <div>
    {{usersActive}}
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