<template>
  <div>
    {{actions}}
  </div>
</template>

<script>
export default {
  name: "ActionsPerformedIndicator",
  props: {
    actions: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style scoped>

</style>