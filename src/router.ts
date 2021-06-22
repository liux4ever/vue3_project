import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import ColumnDetail from "./views/ColumnDetail.vue";
import PostDetail from "./views/PostDetail.vue";
import store from "./store";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { redirectLogin: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
      meta: { redirectLogin: true },
    },
    // {
    //     path: '/create',
    //     name: 'create',
    //     component: CreatePost,
    //     meta: { requiredLogin: true }
    // },
    {
      path: "/column/:id",
      name: "column",
      component: ColumnDetail,
    },
    {
      path: "/posts/:id",
      name: "post",
      component: PostDetail,
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: "login" });
  } else if (to.meta.redirectLogin && store.state.user.isLogin) {
    next("/");
  } else {
    next();
  }
});

export default router;
