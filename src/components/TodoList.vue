<template>
  <div>
    <ul class>
      <TodoItem v-for="(el, i) in elements" :key="i" :item="el" />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  components: {
    TodoItem
  },
  props: {
    elements: {
      Type: Array
    }
  }
};
</script>

<style scoped></style>
