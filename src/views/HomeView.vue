<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3 mb-3 mb-md-0">
        <h1>User Info</h1>
        <div>
          <h5>Email</h5>
          <p>name.surname@example.com</p>
        </div>
        <button
          class="btn btn-danger btn-sm"
          @click="this.$store.dispatch('signOut')"
        >
          Log Out
        </button>
      </div>
      <div class="col-12 col-md-8 col-lg-9 mt-2">
        <TodoItemCreator />
        <hr />
        <ul class="list-group">
          <ToDoListItem />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoListItem from "@/components/TodoListItem.vue";
import TodoItemCreator from "@/components/TodoItemCreator.vue";

export default {
  name: "HomeView",
  components: { ToDoListItem, TodoItemCreator },
};
</script>
