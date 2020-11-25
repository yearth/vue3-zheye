<template>
  <div class="container">
    <global-header :user="user" class="header" />
    <router-view />
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import { defineComponent } from 'vue';
import GlobalHeader, { UserProp } from '@/components/GlobalHeader.vue';

const user: UserProp = {
  isLogin: true,
  name: 'yearth'
};

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup() {
    return {
      user
    };
  }
});
</script>
