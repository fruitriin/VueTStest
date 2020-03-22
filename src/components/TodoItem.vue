<template>
  <li>
    <span>{{ item }}</span>
    <span>{{ message }}</span>
    <span>{{ count }}</span>
    <span>{{ double }}</span>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      Type: Object
    }
  },
  data() {
    return {
      message: "sample",
      count: 2
    };
  },
  computed: {
    double() {
      return this.count * 2;
    }
  }
};
</script>

<style scoped></style>
