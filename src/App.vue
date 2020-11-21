<template>
  <div class="container">
    <global-header :user="user" />
    <!-- <column-list :list="list" /> -->
    <form action="">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          v-model="emailRef.value"
          @blur="validateEmail"
        />
        <div class="form-text" v-if="emailRef.error">
          {{ emailRef.message }}
        </div>
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
import { defineComponent, reactive } from 'vue';
// import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue';

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

const testUser: UserProps = {
  isLogin: true,
  name: 'yearth'
};

interface FormProps {
  value: string;
  error: boolean;
  message: string;
}
const emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader
  },
  setup() {
    const emailRef: FormProps = reactive({
      value: '',
      error: false,
      message: ''
    });
    const validateEmail = () => {
      if (emailRef.value.trim() === '') {
        emailRef.error = true;
        emailRef.message = 'can not be empty';
      } else if (!emailReg.test(emailRef.value)) {
        emailRef.error = true;
        emailRef.message = 'should be a valid email';
      }
    };

    return {
      emailRef,
      // list: testData,
      validateEmail,
      user: testUser
    };
  }
});
</script>
