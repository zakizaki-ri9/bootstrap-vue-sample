<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello-world/>
    <boot-strap-sample/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import BootStrapSample from './components/BootStrapSample'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
