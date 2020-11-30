<template>
  <div class="container">
    <global-header :user="user" class="header" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { GlobalProps } from '@/store';
import { computed, defineComponent } from 'vue';
import GlobalHeader from '@/components/GlobalHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup() {
    const store = useStore<GlobalProps>();
    const user = computed(() => store.state.user);
    return {
      user
    };
  }
});
</script>
