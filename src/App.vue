<template>
  <div class="container">
    <global-header :user="user" />
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import { defineComponent } from 'vue';
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue';

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1 的专栏',
    description: 'test1 的描述',
    avatar: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg'
  },
  {
    id: 2,
    title: 'test2 的专栏',
    description: 'test2 的描述',
    avatar: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg'
  },
  {
    id: 3,
    title: 'test3 的专栏',
    description: 'test3 的描述'
  },
  {
    id: 4,
    title: 'test4 的专栏',
    description: 'test4 的描述',
    avatar: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg'
  }
];

const testUser: UserProps = {
  isLogin: true,
  name: 'yearth'
};

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      user: testUser
    };
  }
});
</script>
