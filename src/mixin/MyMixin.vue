<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      mixinData: "Mixin Data is Here!"
    };
  },
  methods: {
    getLowerCase(message: string): string {
      return message.toLowerCase();
    }
  },
  mounted() {
    console.log("mixin echo");
  }
});
</script>