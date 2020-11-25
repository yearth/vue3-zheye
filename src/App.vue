<template>
  <div class="container">
    <global-header :user="user" />
    <!-- <column-list :list="list" /> -->
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
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import { defineComponent, ref } from 'vue';
// import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
import GlobalHeader, { UserProp } from '@/components/GlobalHeader.vue';
import { ValidateForm, ValidateInput } from '@/components/ValidateForm';
import { RuleProps } from '@/components/ValidateForm/ValidateInput.vue';
import { emitter } from '@/components/ValidateForm/ValidateForm.vue';

// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: 'test1 的专栏',
//     description: 'test1 的描述',
//     avatar: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg'
//   },
//   {
//     id: 2,
//     title: 'test2 的专栏',
//     description: 'test2 的描述',
//     avatar: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg'
//   },
//   {
//     id: 3,
//     title: 'test3 的专栏',
//     description: 'test3 的描述'
//   },
//   {
//     id: 4,
//     title: 'test4 的专栏',
//     description: 'test4 的描述',
//     avatar: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg'
//   }
// ];

const user: UserProp = {
  isLogin: true,
  name: 'yearth'
};

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateForm,
    ValidateInput
  },
  setup() {
    const emailRules: RuleProps = [
      { type: 'required', message: 'can not be empty' },
      { type: 'email', message: 'should be a valid email' }
    ];
    const passRules: RuleProps = [
      { type: 'required', message: 'can not be empty' },
      { type: 'range', message: 'should be between 3 and 10', min: 3, max: 10 }
    ];

    const email = ref('email@gmail.com');
    const pass = '';
    const handleSubmit = (result: boolean) => {
      if (!result) {
        emitter.emit('clear-input');
      }
    };

    return {
      // list: testData,
      user,
      email,
      pass,
      passRules,
      emailRules,
      handleSubmit
    };
  }
});
</script>
