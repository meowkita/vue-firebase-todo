import { createStore } from "vuex";
import { auth } from "@/firebase";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
  },
  actions: {
    async loginWithEmailAndPassword({ commit }, { email, password }) {
      await auth
        .signInWithEmailAndPassword(auth.getAuth(), email, password)
        .then((response) => {
          console.log(response);
          commit("login", response.user);
        })
        .catch((error) => {
          throw error;
        });
    },
    async loginWithGoogle({ commit }) {
      await auth
        .signInWithPopup(auth.getAuth(), new auth.GoogleAuthProvider())
        .then((response) => {
          console.log(response);
          commit("login", response.user);
        });
    },
  },
  modules: {},
});
