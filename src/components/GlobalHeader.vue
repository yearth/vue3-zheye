<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a href="#" class="navbar-brand" @click.prevent="handleGoHome">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a
          href=""
          class="btn btn-outline-light my-2"
          @click.prevent="handleLogin"
        >
          登录
        </a>
      </li>
      <li class="list-inline-item">
        <a href="" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`你好： ${user.name}`">
          <dropdown-item>
            <a href="#" class="dropdown-item">新建文章</a>
          </dropdown-item>
          <dropdown-item :disabled="true">
            <a href="#" class="dropdown-item">编辑资料</a>
          </dropdown-item>
          <dropdown-item>
            <a href="#" class="dropdown-item">退出登录</a>
          </dropdown-item>
        </dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { UserProp } from '@/global';
import { useRouter } from 'vue-router';
import { defineComponent, PropType } from 'vue';
import { Dropdown, DropdownItem } from './Dropdown';

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProp>,
      required: true
    }
  },
  components: {
    Dropdown,
    DropdownItem
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const handleGoHome = () => {
      router.push('/');
    };
    const handleLogin = () => {
      store.commit('login');
    };
    return {
      handleLogin,
      handleGoHome
    };
  }
});
</script>
