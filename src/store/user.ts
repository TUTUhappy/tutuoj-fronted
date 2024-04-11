// initial state
// shape: [{ id, quantity }]
import { StoreOptions } from "vuex";
import { UserControllerService } from "../../generated";
import accessEnum from "@/access/accessEnum";

// getters
const getters = {};

export default {
  namespaced: true,
  state: () => ({
    loginUser: {},
  }),
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
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
