<template>
  <div>
    <span class="indicator-header">Actions performed <span class="span-indicator">{{ actions }}</span></span>
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
@import '../../../assets/css/global.css';
</style>