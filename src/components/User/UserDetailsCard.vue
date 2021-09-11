<template>
  <Card>
    <template #content>
      <!--      TODO: user details box-->
      {{userDetails}}
    </template>
  </Card>
</template>

<script>
import Card from "primevue/components/card/Card";

export default {
  name: "UserDetailsCard",

  components: {
    Card,
  },

  props: {
    userDetails: {
      type: Object,
      default: () => {}
    },
  },
}
</script>

<style scoped>

</style>