<template>
  <div>
    <ul class>
      <TodoItem v-for="(el, i) in elements" :key="i" :item="el" />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoItem from "@/components/TodoItem.vue";

export default Vue.extend({
  components: {
    TodoItem
  },
  props: {
    elements: Array
  }
});
</script>

<style scoped></style>
