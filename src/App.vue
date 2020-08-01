<template>
  <div id="app">
      <NavBar/>
      <router-view class="routerView"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 5%;
}

.routerView {
    margin-top: 30px;
}
</style>
