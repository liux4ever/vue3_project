import { createStore } from "vuex";
import { testData, testPosts, ColumnProps, PostProps } from "./testData";

export interface UserProps {
    isLogin: boolean
    name?: string
    id?: number
}
export interface GlobalDataProps {
    columns: ColumnProps[]
    posts: PostProps[]
    user: UserProps
}
const store = createStore<GlobalDataProps>({
    state: {
        columns: testData,
        posts: testPosts,
        user: { isLogin: false }
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, name: 'lx' }
        }
    },
    getters: {
        biggerColumnLen(state) {
            return state.columns.filter(item => item.id > 2).length
        },
        getColumnById: (state) => (id: number) => {
            return state.columns.find(item => item.id === id)
        },
        getPostsByCid: (state) => (cid: number) => {
            return state.posts.find(item => item.id === cid)
        }
    }
})

export default store