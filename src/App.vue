<template>
  <div id="app">
    <PropertyFilter v-bind:filterProperties="filterProperties"/>
  </div>
</template>

<script>
import PropertyFilter from './components/PropertyFilter.vue'

export default {
  name: 'app',
  data: function() {
    return {
      filterProperties: [{
        id: 0,
        name: '',
        operator: 'eq',
        value: ''
      }]
    }
  },
  components: {
    PropertyFilter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
