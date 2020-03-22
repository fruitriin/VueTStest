<template>
  <li>
    <span>{{ item }}</span>
    <span>{{ item.message }}</span>
    <span>{{ message }}</span>
    <span>{{ count }}</span> / <span>{{ double }}</span> /
    <span>{{ $sample.triple(double) }}</span>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
export type itemType = {
  message: string;
};

export default Vue.extend({
  props: {
    item: Object as PropType<itemType>,
    count: Number
  },
  data() {
    return {
      message: "sample"
    };
  },
  computed: {
    double(): number {
      return this.count * 2;
    }
  }
});
</script>

<style scoped></style>
