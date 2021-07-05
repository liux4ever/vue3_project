import { createStore } from "vuex";
import { testData, testPosts, ColumnProps, PostProps } from "./testData";
import axios from "axios";

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export interface ImageProps {
  _id?: string
  url?: string
  createdAt?: string
}
export interface ColumnsProps {
  _id: string
  title: string
  avatar?: ImageProps
  description: string
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false },
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: "lx" };
    },
    fecthColumns(state, rawData) {
      state.columns = rawData.data.list;
    },
  },
  actions: {
    fecthColumns(context) {
      axios.get("./columns").then((res) => {
        context.commit("fectchColumns", res.data);
      });
    },
  },
  getters: {
    biggerColumnLen(state) {
      return state.columns.filter((item) => item.id > 2).length;
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find((item) => item.id == id);
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.find((item) => item.id == cid);
    },
  },
});

export default store;
