<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.value"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
const emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
interface InputProp {
  value: string;
  error: boolean;
  message: string;
}
interface RuleProp {
  type: 'required' | 'email' | 'range';
  message: string;
  min?: number;
  max?: number;
}
export type RuleProps = RuleProp[];
export default defineComponent({
  name: 'ValidateInput',
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<RuleProps>
    },
    modelValue: {
      type: String
    }
  },
  setup(props, context) {
    const inputRef: InputProp = reactive({
      value: props.modelValue || '',
      message: '',
      error: false
    });
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.value = targetValue;
      context.emit('update:modelValue', targetValue);
    };
    const validateInput = (): void => {
      const rules = props.rules;
      if (rules) {
        const allPassed = rules.every(rule => {
          let eachPassed = true;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          let neverCase: never; // 为了穷尽 rule.type 中所有类型
          inputRef.message = rule.message;
          switch (rule.type) {
            case 'required':
              eachPassed = inputRef.value.trim() !== '';
              break;
            case 'email':
              eachPassed = emailReg.test(inputRef.value);
              break;
            case 'range':
              if (rule.min && rule.max) {
                eachPassed =
                  rule.min < inputRef.value.trim().length &&
                  rule.max > inputRef.value.trim().length;
              } else {
                eachPassed = false;
                inputRef.message = !rule.min ? 'no min' : 'no max';
              }
              break;
            default:
              neverCase = rule.type;
              break;
          }
          return eachPassed;
        });
        inputRef.error = !allPassed;
      }
    };
    return {
      inputRef,
      updateValue,
      validateInput
    };
  }
});
</script>
