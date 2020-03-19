<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoList :elements="elements" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    TodoList
  },
  data() {
    return {
      elements: [{ message: "data1" }, { message: "data2" }]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
