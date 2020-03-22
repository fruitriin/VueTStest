<template>
  <li>
    <span>{{ item }}</span>
    <span>{{ message }}</span>
    <span>{{ count }}</span>/
    <span>{{ double }}</span>/
    <span>{{ $sample.triple(double)}}</span>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      Type: Object
    },
    count: {
      type: Number
    }
  },
  data() {
    return {
      message: "sample",
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
