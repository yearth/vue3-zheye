<template>
  <div class="container">
    <global-header :user="user" />
    <!-- <column-list :list="list" /> -->
    <form action="">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <validate-input :rules="rules" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import { defineComponent } from 'vue';
// import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
import GlobalHeader, { UserProp } from '@/components/GlobalHeader.vue';
import ValidateInput, { RuleProps } from '@/components/ValidateInput.vue';

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

const testUser: UserProp = {
  isLogin: true,
  name: 'yearth'
};

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup() {
    const testRules: RuleProps = [
      { type: 'required', message: 'can not be empty' },
      { type: 'email', message: 'should be a valid email' }
    ];

    return {
      // list: testData,
      user: testUser,
      rules: testRules
    };
  }
});
</script>
