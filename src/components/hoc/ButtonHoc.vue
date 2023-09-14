<template>
  <button
    :type="type"
    :class="[dark ? 'darkButton' : 'lightButton', 'baseButton']"
  >
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<script lang="ts">
import type { PropType } from "vue";

export default {
  props: {
    type: {
      type: String as PropType<"button" | "submit">,
      default: "button",
      required: false,
    },
    buttonText: {
      type: String,
      default: () => "Login",
    },
    dark: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
<style scoped lang="scss">
.baseButton {
  padding: 10px 25px;
  border: none;
  border-radius: 4px;
}
.lightButton {
  background: #ffffff;
  border: 1px solid #383838;
}
.darkButton {
  background: #383838;
  color: #ffffff;
}
</style>
