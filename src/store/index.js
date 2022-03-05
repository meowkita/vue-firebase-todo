import { createStore } from "vuex";
import auth from "./auth";
import todos from "./todos";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    todos,
  },
});
