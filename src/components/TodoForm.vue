<template>
  <div>
    addData:
    <input type="text" v-model="tmpText" />
    <button @click="submit">追加</button>
    <button @click="submitLower">小文字で追加</button>
  </div>
</template>

<script>
import MyMixin from "../mixin/MyMixin";
export default {
  data() {
    return {
      tmpText: ""
    };
  },
  mixins: [MyMixin],
  methods: {
    submit() {
      this.$emit("submit", this.tmpText);
      this.tmpText = "";
    },
    submitLower() {
      this.$emit("submit", this.getLowerCase(this.tmpText));
    }
  }
};
</script>