<template>
  <div class="p-card custom-card page-content">
     <div class="p-grid">
       <div class="p-col-12">
         <h3>Username</h3><span>{{userDetails.name}}</span>
       </div>
       <div class="p-col-12">
         <h3>Email</h3><span>{{userDetails.email}}</span>
       </div>
       <div class="p-col-12">
         <h3>Active</h3><span>{{userDetails.active}}</span>
       </div>
       <div class="p-col-12">
         <h3>Created</h3><span>{{toClearDatePrecise(userDetails.active)}}</span>
       </div>
     </div>
  </div>
</template>

<script>
import {dateMixin} from "@/mixins/dateMixin";

export default {
  name: "UserDetailsCard",

  components: {
  },

  mixins: [dateMixin],

  props: {
    userDetails: {
      type: Object,
      default: () => {}
    },
  },
}
</script>

<style scoped>
.custom-card{
  padding: 10px;
}
</style>