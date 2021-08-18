<template>
  <router-link :to="{ name: 'User', params: { id: user._id  }}" style="text-decoration: none">
    <BlockUI v-bind:blocked="!user.active"
             v-on:mouseout="isHovering = false"
             v-on:mouseover="isHovering = true">
      <Card v-bind:key="user._id"
            class="grades-card"
            v-bind:class="{'p-shadow-3': isHovering}">
        <template #header>
        </template>
        <template #title>
          <span v-if="!user.active" class="p-tag p-tag-danger">Inactive</span> {{ user.name }}
        </template>
        <template #subtitle>
          Email: {{ user.email }} ({{ user.role }})<br>
        </template>
        <template #content>
          <div>
            Last login: {{ toClearDate(user.lastLogin) }} <br>
            Registered: {{ toClearDate(user.createdAt) }}
          </div>
        </template>
        <template #footer>
          <router-link :to="{ name: 'User', params: { id: user._id  }}" class="float-right">
            <Button class="p-button-text p-button-primary" icon="pi pi-arrow-right"/>
          </router-link>
          <div class="clear-both"></div>
        </template>
      </Card>
    </BlockUI>
  </router-link>
</template>

<script>
import Card from "primevue/components/card/Card";
import Button from "primevue/components/button/Button";
import BlockUI from 'primevue/blockui';
import {dateMixin} from "@/mixins/dateMixin";


export default {
  name: "UserCard",

  components: {
    Card,
    Button,
    BlockUI
  },

  mixins:[
    dateMixin
  ],

  data() {
    return {
      isHovering: false,
    }
  },

  props: {
    user: null,
  },

}
</script>

<style scoped>
@import "../../assets/css/cards.css";
</style>