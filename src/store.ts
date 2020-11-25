import { createStore } from 'vuex';
import {
  UserProp,
  PostProp,
  testUser,
  testPosts,
  ColumnProp,
  testColunms
} from '@/global';

interface GlobalProps {
  user: UserProp;
  posts: PostProp[];
  colunms: ColumnProp[];
}

const store = createStore<GlobalProps>({
  state: {
    user: testUser,
    posts: testPosts,
    colunms: testColunms
  },
  mutations: {
    login(state) {
      state.user = {
        ...state.user,
        isLogin: true,
        name: 'yearth'
      };
    }
  }
});

export default store;
