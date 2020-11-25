<template>
  <column-list :list="list" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ColumnList, { ColumnProp } from '@/components/ColumnList.vue';

export const testData: ColumnProp[] = [
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

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
