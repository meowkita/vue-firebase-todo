import { firestore } from "@/firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
} from "firebase/firestore";

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

      const queryRef = query(
        collection(getFirestore(), "todos"),
        where("author", "==", userUid)
      );

      await firestore
        .getDocs(queryRef)
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

      const collectionRef = collection(getFirestore(), "todos");
      await firestore
        .addDoc(collectionRef, newTodo)
        .then(() => dispatch("fetchTodoList"))
        .catch(() => {
          throw Error("Error due add new ToDo.");
        });
    },

    async checkTodo({ dispatch }, { id, currentCheckState }) {
      const documentRef = doc(getFirestore(), "todos", id);
      await firestore
        .updateDoc(documentRef, {
          isChecked: !currentCheckState,
        })
        .then(() => dispatch("fetchTodoList"))
        .catch(() => {
          throw Error("Error due check ToDo.");
        });
    },

    async deleteTodo({ dispatch }, id) {
      const documentRef = doc(getFirestore(), "todos", id);
      await firestore
        .deleteDoc(documentRef)
        .then(() => dispatch("fetchTodoList"))
        .catch(() => {
          throw Error("Error due delete ToDo.");
        });
    },
  },
};
