<template>
  <div class="column-details-page w-75 mx-auto">
    <div
      v-if="column"
      class="column-info row mb-4 border-bottom pb-4 align-items-cneter"
    >
      <div class="col-3 text-center">
        <img
          :src="column.avatar"
          :alt="column.title"
          class="rounded-circle border border-light w-75 my-auto"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list="postList" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { testData } from './Home.vue';
import PostList from '@/components/PostList.vue';

export interface PostProp {
  id: number;
  title: string;
  content: string;
  image?: string;
  createAt: string;
  colunmId: number;
}

const postData: PostProp[] = [
  {
    id: 1,
    title: '第一篇文章',
    content: '第一篇文章的内容',
    image: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg',
    createAt: '2020年11月25日15:44:00',
    colunmId: 1
  },
  {
    id: 2,
    title: '第二篇文章',
    content: '第二篇文章的内容',
    image: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg',
    createAt: '2020年11月25日15:44:00',
    colunmId: 1
  },
  {
    id: 3,
    title: '第三篇文章',
    content: '第三篇文章的内容',
    image: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg',
    createAt: '2020年11月25日15:44:00',
    colunmId: 2
  },
  {
    id: 4,
    title: '第四篇文章',
    content: '第四篇文章的内容',
    createAt: '2020年11月25日15:44:00',
    colunmId: 1
  }
];

export default defineComponent({
  name: 'Column',
  components: {
    PostList
  },
  setup() {
    const route = useRoute();
    const id = +route.params.id;
    const column = testData.find(c => c.id === id);
    const postList = postData.filter(post => post.colunmId === id);

    return {
      column,
      postList
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
