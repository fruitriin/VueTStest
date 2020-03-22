<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoList :elements="elements" />
    <TodoForm @submit="addElement" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";
import MyPlugin from "./plugin/MyPlugin";

export default Vue.extend({
  name: "App",
  components: {
    TodoList,
    TodoForm
  },
  data() {
    return {
      elements: [{ message: "data1" }, { message: "data2" }]
    };
  },
  mounted() {
    this.$sample.pluginEcho();
  },
  methods: {
    addElement(value: string) {
      this.elements.push({ message: value });
    }
  }
});
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
