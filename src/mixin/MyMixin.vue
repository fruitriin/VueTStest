<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      mixinData: "Mixin Data is Here!"
    };
  },
  methods: {
    getLowerCase(message) {
      return message.toLowerCase();
    }
  },
  mounted() {
    console.log("mixin echo");
  }
});
</script>