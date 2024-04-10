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
  console.log("登陆用户信息", store.state.user.loginUser);
  const loginUser = store.state.user.loginUser;
  // 如果从未登陆过 就调用
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta?.access as string) ?? accessEnum.NO_LOGIN;
  if (needAccess !== accessEnum.NO_LOGIN) {
    if (!loginUser || !loginUser.userRole) {
      next("/user/login");
      store.state.user.loginUser =
        UserControllerService.getCurrentLoginUserUsingPost();
      return;
    }
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
