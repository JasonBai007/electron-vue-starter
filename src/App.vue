<template>
  <div id="app">
    {{location}}
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/chart">Chart</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    location() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin-bottom: 10vh;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding-right: 5px;
    font-size: 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
