<template>
  <router-link :to="{ name: 'Dashboard', /*params: { id: server._id  }*/}" style="text-decoration: none">
    <BlockUI v-bind:blocked="!server.active"
             v-on:mouseout="isHovering = false"
             v-on:mouseover="isHovering = true">
      <Card v-bind:key="server._id"
            class="grades-card"
            v-bind:class="{'p-shadow-3': isHovering}">
        <template #header>
        </template>
        <template #title>
          <span v-if="!server.active" class="p-tag p-tag-danger">Inactive</span> {{ server.name }}
        </template>
        <template #subtitle>
          Connected by {{ server.owner.name }}
        </template>
        <template #content>
          <div>
            Connected at: {{ toClearDate(server.date) }} <br>
            Is running: {{ toClearDayName(server.date) }}
          </div>

        </template>
        <template #footer>
          <router-link :to="{ name: 'Dashboard', /*params: { id: server._id  }*/}" class="float-right">
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
  name: "ServerCard",

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
    server: null,
  },

}
</script>

<style scoped>
@import "../../assets/css/cards.css";
</style>