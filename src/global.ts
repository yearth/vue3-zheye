export interface UserProp {
  isLogin: boolean;
  id?: number;
  name?: string;
}

export const testUser: UserProp = {
  isLogin: false
};

export interface ColumnProp {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export const testColunms: ColumnProp[] = [
  {
    id: 1,
    title: 'test1 的专栏',
    description: 'test1 的描述',
    avatar: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg'
  },
  {
    id: 2,
    title: 'test2 的专栏',
    description: 'test2 的描述',
    avatar: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg'
  },
  {
    id: 3,
    title: 'test3 的专栏',
    description: 'test3 的描述'
  },
  {
    id: 4,
    title: 'test4 的专栏',
    description: 'test4 的描述',
    avatar: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg'
  }
];

export interface PostProp {
  id: number;
  title: string;
  content: string;
  image?: string;
  createAt: string;
  colunmId: number;
}

export const testPosts: PostProp[] = [
  {
    id: 1,
    title: '第一篇文章',
    content: '第一篇文章的内容',
    image: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg',
    createAt: '2020年11月25日15:44:00',
    colunmId: 1
  },
  {
    id: 2,
    title: '第二篇文章',
    content: '第二篇文章的内容',
    image: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg',
    createAt: '2020年11月25日15:44:00',
    colunmId: 1
  },
  {
    id: 3,
    title: '第三篇文章',
    content: '第三篇文章的内容',
    image: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg',
    createAt: '2020年11月25日15:44:00',
    colunmId: 2
  },
  {
    id: 4,
    title: '第四篇文章',
    content: '第四篇文章的内容',
    createAt: '2020年11月25日15:44:00',
    colunmId: 1
  }
];
