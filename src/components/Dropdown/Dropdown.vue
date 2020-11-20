<template>
  <div class="dropdown" ref="dropdownRef">
    <button
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggle"
    >
      {{ title }}
    </button>
    <ul
      v-if="visible"
      class="dropdown-menu"
      :style="{
        display: 'block'
      }"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue';
import useClickOutside from '@/hooks/useClickOutside';
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const dropdownRef = ref<null | HTMLElement>(null);
    const visible: Ref<boolean> = ref(false);
    const toggle = (): void => {
      visible.value = !visible.value;
    };
    const isClickOutside = useClickOutside(dropdownRef);
    watch(isClickOutside, () => {
      if (visible.value && isClickOutside.value) {
        visible.value = false;
      }
    });

    return {
      dropdownRef,
      visible,
      toggle
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
