<template>
  <column-list :list="list" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { testColunms } from '@/global';
import ColumnList from '@/components/ColumnList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testColunms
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
