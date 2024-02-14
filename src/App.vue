<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
}

a:hover {
  color: #666;
}

a:focus {
  outline: none;
}

/* Other styles for HomeScreenBox or its components go here */
</style>
