<template>
  <div class="js-property-filter">
    <input type="text">
    <select name="comparators">
      <option value="equal">=</option>
      <option value="gt">&gt;</option>
      <option value="lt">&lt;</option>
      <option value="gt-eq">&gt;=</option>
      <option value="lt-eq">&lt;=</option>
    </select>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'PropertyFilter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
