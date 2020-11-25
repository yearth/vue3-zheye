<template>
  <div class="container" v-if="list">
    <div class="row" v-for="post in list" :key="post.id">
      <section class="card shadow-sm">
        <div class="card-body text-center">
          <img
            v-if="post.image"
            :src="post.image"
            :alt="post.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h3 class="column-title card-title">{{ post.title }}</h3>
          <p class="column-description card-text text-left">
            {{ post.content }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PostProp } from '@/views/Column.vue';
export default defineComponent({
  name: 'PostList',
  props: {
    list: {
      type: Array as PropType<PostProp[]>
    }
  },
  setup(props) {
    console.log('post list', props.list);
    return {
      postList: props.list
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
