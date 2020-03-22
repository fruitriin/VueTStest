<template>
  <div>
    addData:
    <input type="text" v-model="tmpText" />
    <button @click="submit">追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpText: ""
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.tmpText);
      this.tmpText = "";
    }
  }
};
</script>