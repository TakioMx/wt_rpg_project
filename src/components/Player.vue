<template>
  <span></span>
</template>

<script>
export default {
  name: 'player',
  data () {
    return {
      x: {
        type: Number,
        required: true
      },
      y: {
        type: Number,
        required: true
      },
      level: {
        type: Number,
        required: true
      },
      exp: {
        type: Number,
        required: true
      },
      health: {
        type: Number,
        required: true
      },
      potions: {
        type: Number,
        required: true
      },
      fieldCurrent: {
        type: String,
        required: true
      }
    }
  }
}
</script>

<style scoped>

</style>
