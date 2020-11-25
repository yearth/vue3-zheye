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
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { GlobalProps } from '@/store';
import { computed, defineComponent } from 'vue';
import PostList from '@/components/PostList.vue';

export default defineComponent({
  name: 'Column',
  components: {
    PostList
  },
  setup() {
    const route = useRoute();
    const store = useStore<GlobalProps>();

    const id = +route.params.id;

    const column = computed(() => store.getters.getColumnById(id));
    const postList = computed(() => store.getters.getPostsByCid(id));

    return {
      column,
      postList
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
