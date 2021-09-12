<template>
  <div class="emptyDataset">
    <div class="p-text-center">
      <i v-bind:class="icon"
              v-bind:style="{ fontSize: size }"></i>
    </div>
    <h2 class="p-text-center">{{ headerText }}</h2>
    <p class="p-text-center" v-if="bottomText">{{ bottomText }}</p>
  </div>
</template>

<script>
export default {
  name: "EmptyInformation",

  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true,
    },
    headerText: {
      type: String,
      required: true,
    },
    bottomText: {
      type: String,
      required: false,
    }
  },
}
</script>

<style scoped>

</style>