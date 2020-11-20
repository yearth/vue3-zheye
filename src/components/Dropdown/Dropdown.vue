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
import { defineComponent, onMounted, onUnmounted, Ref, ref } from 'vue';
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
    const handler = (e: MouseEvent) => {
      if (dropdownRef.value) {
        if (
          !dropdownRef.value.contains(e.target as HTMLElement) &&
          visible.value
        ) {
          visible.value = false;
        }
      }
    };
    onMounted(() => {
      document.addEventListener('click', handler);
    });
    onUnmounted(() => {
      document.removeEventListener('click', handler);
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
