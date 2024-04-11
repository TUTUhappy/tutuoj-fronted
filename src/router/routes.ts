import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import CodeView from "@/views/CodeView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
  },
  {
    path: "/code",
    name: "题目",
    component: CodeView,
    meta: {
      access: "user",
    },
  },
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    meta: {
      hiddenView: "true",
    },
    children: [
      {
        path: "/user/login",
        name: "用户登陆",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
    meta: {
      hiddenView: "true",
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    meta: {
      access: "admin",
    },
  },
  {
    path: "/about",
    name: "关于我们",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
