import store from "@/store";
import accessEnum from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";
import router from "@/router";

// router.beforeEach(async (to, from, next) => {
//   console.log("登陆用户信息", store.state.user.loginUser);
//   const loginUser = store.state.user.loginUser;
//   // 如果从未登陆过 就调用
//   if (!loginUser || !loginUser.userRole) {
//     await store.dispatch("user/getLoginUser");
//   }
//   const needAccess = (to.meta?.access as string) ?? accessEnum.NO_LOGIN;
//   if (needAccess !== accessEnum.NO_LOGIN) {
//     if (!loginUser || !loginUser.userRole) {
//       next("/user/login");
//       return;
//     }
//     if (!checkAccess(loginUser, needAccess)) {
//       next("/noAuth");
//       return;
//     }
//   }
//   next();
// });
