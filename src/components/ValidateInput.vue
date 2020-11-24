<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-model="inputRef.value"
      @blur="validateInput"
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
  type: 'required' | 'email';
  message: string;
}
export type RuleProps = RuleProp[];

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: {
      type: Array as PropType<RuleProps>
    }
  },
  setup(props) {
    const inputRef: InputProp = reactive({
      value: '',
      message: '',
      error: false
    });
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
      validateInput
    };
  }
});
</script>
