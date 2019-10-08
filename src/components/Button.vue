<template>
  <div v-on:click='onClick' class="js-button button">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    'onClick': Function,
    'text': String
  }
}
</script>

<style scoped>
  .button {
    border-style: solid;
    border-width: 1px;

    display: inline-block
  }
</style>
