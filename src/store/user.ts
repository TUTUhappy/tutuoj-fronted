// initial state
// shape: [{ id, quantity }]
import { StoreOptions } from "vuex";

const state = () => ({
  loginUser: {
    userName: "tutu",
    role: "noAuth",
  },
});

// getters
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions: {
    getLoginUser({ commit, state }, payload) {
      //todo 从远程获取登陆信息
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
