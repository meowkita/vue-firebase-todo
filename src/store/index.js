import { createStore } from "vuex";
import router from "@/router";
import { app, auth } from "@/firebase";

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
    signUp() {
      router.push("/sign-in");
    },
    signIn(state, user) {
      state.user = user;
      router.push("/home");
    },
    signOut(state) {
      state.user = null;
      router.push("/sign-in");
    },
  },
  actions: {
    async signUpWithEmailAndPassword({ commit }, { email, password }) {
      console.log(email, password);
      await auth
        .createUserWithEmailAndPassword(auth.getAuth(app), email, password)
        .then(() => {
          commit("signUp");
        })
        .catch((error) => {
          throw error;
        });
    },
    async signInWithEmailAndPassword({ commit }, { email, password }) {
      await auth
        .signInWithEmailAndPassword(auth.getAuth(app), email, password)
        .then((response) => {
          commit("signIn", response.user);
        })
        .catch((error) => {
          throw error;
        });
    },
    async signInWithGoogle({ commit }) {
      await auth
        .signInWithPopup(auth.getAuth(app), new auth.GoogleAuthProvider())
        .then((response) => {
          commit("signIn", response.user);
        });
    },
    async signOut({ commit }) {
      await auth
        .signOut(auth.getAuth(app))
        .then(() => commit("signOut"))
        .catch((error) => {
          throw error;
        });
    },
  },
  modules: {},
});
