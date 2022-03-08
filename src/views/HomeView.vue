<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3 mb-3 mb-md-0">
        <user-info />
      </div>
      <div class="col-12 col-md-8 col-lg-9 mt-2">
        <todo-item-creator />
        <hr />
        <ul class="list-group">
          <todo-list-item
            v-for="todoItem in this.getTodoList"
            :key="todoItem.header"
            :item="todoItem"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import TodoItemCreator from "@/components/TodoItemCreator.vue";

export default {
  name: "HomeView",
  components: { TodoListItem, TodoItemCreator, UserInfo },
  computed: {
    getTodoList() {
      return this.$store.state.todos.todoList;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTodoList");
  },
};
</script>
