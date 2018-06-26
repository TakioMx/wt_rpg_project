<template>
  <div id="app">
    <Map/>
  </div>
</template>

<script>
import Map from './components/Map'

export default {
  name: 'App',
  components: {
    Map: Map
  }
}
</script>

<style>
#app {
  color: #2c3e50;
}
</style>
