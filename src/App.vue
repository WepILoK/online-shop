<template>
  <div id="app">
    <MainWrapper/>
  </div>
</template>


<script>
import MainWrapper from './components/MainWrapper'

export default {
  name: 'App',
  components: {
    MainWrapper
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
