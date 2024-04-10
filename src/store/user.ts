// initial state
// shape: [{ id, quantity }]
import { StoreOptions } from "vuex";
import { UserControllerService } from "../../generated";
import accessEnum from "@/access/accessEnum";

const state = () => ({
  loginUser: {},
});

// getters
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions: {
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getCurrentLoginUserUsingPost();
      if (res.code === 0) {
        console.log(res.data);
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: accessEnum.NO_LOGIN,
        });
      }
      //todo 从远程获取登陆信息
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
