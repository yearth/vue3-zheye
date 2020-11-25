<template>
  <validate-form @form-submit="handleSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
      <validate-input
        type="text"
        placeholder="请输入邮箱地址"
        :rules="emailRules"
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <validate-input
        type="password"
        placeholder="请输入密码"
        :rules="passRules"
        v-model="pass"
      />
    </div>
    <template #submit>
      <button type="submit" class="btn btn-primary">自定义的提交</button>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ValidateForm, ValidateInput } from '@/components/ValidateForm';
import { RuleProps } from '@/components/ValidateForm/ValidateInput.vue';
import { emitter } from '@/components/ValidateForm/ValidateForm.vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Login',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    const router = useRouter();
    const emailRules: RuleProps = [
      { type: 'required', message: 'can not be empty' },
      { type: 'email', message: 'should be a valid email' }
    ];
    const passRules: RuleProps = [
      { type: 'required', message: 'can not be empty' },
      { type: 'range', message: 'should be between 3 and 10', min: 3, max: 10 }
    ];
    const email = ref('email@gmail.com');
    const pass = ref();
    const handleSubmit = (result: boolean) => {
      if (!result) {
        emitter.emit('clear-input');
      } else {
        router.push('/');
      }
    };
    return {
      email,
      pass,
      passRules,
      emailRules,
      handleSubmit
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
