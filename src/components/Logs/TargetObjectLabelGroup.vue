<template>
  <div class="data-group">
    <h4>Target object</h4>

    <div v-if="log.targetObject.before">
      <div class="p-grid">
        <div class="p-col">
          Before
          <code>
            <div v-for="(value, propertyName) in log.targetObject.before" v-bind:key="propertyName">
              <strong v-if="isDifferent(propertyName)">{{propertyName}}: {{ value }}</strong>
              <span v-else>{{propertyName}}: {{ value }}</span>
            </div>
          </code>
        </div>
        <div class="p-col">
          After
          <code>
            <div v-for="(value, propertyName) in log.targetObject.after" v-bind:key="propertyName">
              <strong v-if="isDifferent(propertyName)">{{propertyName}}: {{ value }}</strong>
              <span v-else>{{propertyName}}: {{ value }}</span>
            </div>
          </code>
        </div>
      </div>
    </div>
    <div v-else>
      <code>
        <div v-for="(value, propertyName) in log.targetObject" v-bind:key="propertyName">
          {{propertyName}}: {{ value }}
        </div>
      </code>
    </div>
  </div>
</template>

<script>
import {logsMixin} from "@/mixins/logsMixin";

export default {
  name: "TargetObjectLabelGroup",

  props: {
    log: {
      type: Object,
      default: () => {}
    },
  },

  mixins: [logsMixin],

  methods: {
    isDifferent(propertyName){
      const before = JSON.stringify(this.log.targetObject.before[propertyName])
      const after = JSON.stringify(this.log.targetObject.after[propertyName])
      return before !== after
    }
  },
}
</script>

<style>
@import "../../assets/css/log-modal.css";
</style>