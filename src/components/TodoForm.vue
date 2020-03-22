<template>
  <div>
    addData:
    <input type="text" v-model="tmpText" />
    <button @click="submit">追加</button>
    <button @click="submitLower">小文字で追加</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyMixin from "../mixin/MyMixin.vue";
export default Vue.extend({
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
      this.$emit(
        "submit",
        (this as InstanceType<typeof MyMixin>).getLowerCase(this.tmpText)
      );
    }
  }
});
</script>