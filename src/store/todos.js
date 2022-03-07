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
            const elementData = element.data();
            elementData.id = element.id;
            todoArray.push(elementData);
          });
          commit("fetchTodoList", todoArray);
        })
        .catch(() => {
          throw Error("Error due fetch ToDos.");
        });
    },
    async addNewTodo({ rootState, dispatch }, newTodo) {
      const userUid = rootState.auth.user.uid;
      newTodo.author = userUid;

      await firestore
        .addDoc(
          firestore.collection(firestore.getFirestore(), "todos"),
          newTodo
        )
        .then(() => dispatch("fetchTodoList"))
        .catch(() => {
          throw Error("Error due add new ToDo.");
        });
    },
    async checkTodo({ dispatch }, { id, currentCheckState }) {
      await firestore
        .updateDoc(firestore.doc(firestore.getFirestore(), "todos", id), {
          isChecked: !currentCheckState,
        })
        .then(() => dispatch("fetchTodoList"))
        .catch(() => {
          throw Error("Error due check ToDo.");
        });
    },
    async deleteTodo({ dispatch }, id) {
      await firestore
        .deleteDoc(firestore.doc(firestore.getFirestore(), "todos", id))
        .then(() => dispatch("fetchTodoList"))
        .catch(() => {
          throw Error("Error due delete ToDo.");
        });
    },
  },
};
