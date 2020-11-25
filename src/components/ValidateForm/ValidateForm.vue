<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onUnmounted } from 'vue';
import mitt from 'mitt';

type ValidateFunc = () => boolean;

export const emitter = mitt();

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup(props, context) {
    let ValidateFuncArr: ValidateFunc[] = [];

    const submitForm = () => {
      const result = ValidateFuncArr.map(func => func()).every(
        result => result
      );
      context.emit('form-submit', result);
    };
    const callback = (func?: ValidateFunc) => {
      func && ValidateFuncArr.push(func);
    };

    onBeforeMount(() => {
      emitter.on('form-item-created', callback);
    });

    onUnmounted(() => {
      emitter.off('form-item-created', callback);
      ValidateFuncArr = [];
    });

    return {
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
