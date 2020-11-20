<template>
  <li
    class="dropdown-option"
    :class="{
      'is-disabled': disabled
    }"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss">
.dropdown-option.is-disabled * {
  pointer-events: none;
  color: #6c757d;
  background: transparent;
}
</style>
