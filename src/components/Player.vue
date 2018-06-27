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
        default: 5
      },
      y: {
        type: Number,
        default: 5
      },
      /* level: {
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
      }, */
      fieldCurrent: {
        type: String,
        default: ' '
      }
    }
  }
}
</script>

<style scoped>

</style>
