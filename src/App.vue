<template>
  <div class="container">
    <global-header :user="user" class="header" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { UserProp } from '@/global';
import { computed, defineComponent, Ref } from 'vue';
import GlobalHeader from '@/components/GlobalHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup() {
    const store = useStore();
    const user: Ref<UserProp> = computed(() => store.state.user);
    return {
      user
    };
  }
});
</script>
