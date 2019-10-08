<template>
  <div class="js-property-filter">
    <div v-for="(property, index) in filterProperties"
      v-bind:key="property.id"
      v-bind:name="property.name"
      v-bind:operator="property.operator"
      v-bind:value="property.value"
      class="width--100 md-layout md-gutter md-alignment-center-center">
      <div class="md-layout-item">
        <md-field>
          <md-input class="margin--half" type="text" v-model="property.name"/>
        </md-field>
      </div>
      <div class="md-layout-item md-size-10">
        <md-field style="md-layout-item width: 80px">
          <md-select v-model="property.operator" class="margin--half" name="comparators">
            <md-option value="eq">=</md-option>
            <md-option value="gt">&gt;</md-option>
            <md-option value="lt">&lt;</md-option>
            <md-option value="gt-eq">&gt;=</md-option>
            <md-option value="lt-eq">&lt;=</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <md-input class="margin--half" type="text" v-model="property.value"/>
        </md-field>
      </div>
      <div class="md-layout-item md-size-5">
        <md-button class="md-icon-button" v-on:click="removeFilterProperty(index)">
          <md-icon>delete</md-icon>
        </md-button>
      </div>
    </div>
    <md-button class="md-raised" v-on:click="addFilterProperty()">+ Add Filter Property</md-button>
  </div>
</template>

<script>
export default {
  name: 'PropertyFilter',
  data: function() {
    return {
    }
  },
  methods: {
    addFilterProperty: function() {
      this.filterProperties.push({
        id: this.filterProperties.length,
        name: '',
        operator: '',
        value: ''
      });
    },

    removeFilterProperty: function(index) {
      this.filterProperties.splice(index, 1);
    }
  },
  props: {
    filterProperties: Array
  },
  components: {
  }
}
</script>

<style scoped>
</style>