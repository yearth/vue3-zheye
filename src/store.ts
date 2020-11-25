import { createStore } from 'vuex';
import {
  UserProp,
  PostProp,
  testUser,
  testPosts,
  ColumnProp,
  testColunms
} from '@/global';

export interface GlobalProps {
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
  },
  getters: {
    getColumnById: state => (id: number) => {
      return state.colunms.find(c => c.id === id);
    },
    getPostsByCid: state => (cid: number) => {
      return state.posts.filter(post => post.colunmId === cid);
    }
  }
});

export default store;
