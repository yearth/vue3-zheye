<template>
  <ul class="column-list row">
    <li
      class="colunm-item col-4 mb-4"
      v-for="column in columnList"
      :key="column.id"
    >
      <section class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h3 class="column-title card-title">{{ column.title }}</h3>
          <p class="column-description card-text text-left">
            {{ column.description }}
          </p>
          <router-link
            :to="`/column/${column.id}`"
            class="colum-link btn btn-outline-primary"
            >进入专栏</router-link
          >
        </div>
      </section>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { ColumnProp } from '@/global';

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProp[]>,
      required: true
    }
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/noAvatar.png');
        }
        return column;
      });
    });
    return {
      columnList
    };
  }
});
</script>

<style lang="scss" scoped>
.column-list {
  list-style: none;
}
</style>
