<template lang="pug">
  div#app
    hr
    boot-strap-sample
    hr
</template>

<script>
import BootStrapSample from './components/BootStrapSample'

export default {
  name: 'App',
  components: {
    BootStrapSample
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
