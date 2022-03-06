import { firestore } from "@/firebase";
import { collection, query, where } from "firebase/firestore";

export default {
  state: {
    todoList: null,
  },
  mutations: {
    fetchTodoList(state, todoList) {
      state.todoList = todoList;
    },
  },
  actions: {
    async fetchTodoList({ commit, rootState }) {
      const userUid = rootState.auth.user.uid;
      let todoArray = [];

      await firestore
        .getDocs(
          query(
            collection(firestore.getFirestore(), "todos"),
            where("author", "==", userUid)
          )
        )
        .then((response) => {
          response.forEach((element) => {
            todoArray.push(element.data());
          });
          commit("fetchTodoList", todoArray);
        })
        .catch((error) => console.error(error));
    },
    async addNewTodo({ rootState, dispatch }, newTodo) {
      const userUid = rootState.auth.user.uid;
      newTodo.author = userUid;

      console.log(newTodo);

      await firestore
        .addDoc(
          firestore.collection(firestore.getFirestore(), "todos"),
          newTodo
        )
        .then(() => dispatch("fetchTodoList"))
        .catch((error) => console.error(error));
    },
  },
};
