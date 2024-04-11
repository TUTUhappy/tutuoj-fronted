import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import accessEnum from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";
import { UserControllerService } from "../generated";

createApp(App).use(router).use(ArcoVue).use(store).mount("#app");

router.beforeEach(async (to, from, next) => {
  console.log("登陆用户信息", store.state.user.loginUser.username);
  const loginUser = store.state.user.loginUser;
  // 如果已经登陆 但是全局变量未更新 就调用一下
  if (!loginUser || !loginUser.userRole) {
    console.log(1);
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta?.access as string) ?? accessEnum.NO_LOGIN;
  if (needAccess !== accessEnum.NO_LOGIN) {
    console.log(2);
    if (!loginUser) {
      next("/user/login");
      return;
    }
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
