import { firestore } from "@/firebase";

export default {
  state: {
    todoList: null,
  },
  mutations: {
    fetchTodoList() {
      // const userId = rootState.user.uid;

      firestore
        .addDoc(firestore.collection(firestore.getFirestore(), "todos"), {
          header: "Nikita",
          content: "Lossinov",
          isChecked: true,
        })
        .then((response) =>
          console.log("Document written with ID: ", response.id)
        );
    },
  },
  actions: {
    fetchTodoList({ commit, rootState }) {
      commit("fetchTodoList", rootState.auth);
    },
  },
};
