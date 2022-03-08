<template>
  <li
    class="list-group-item"
    style="--bs-bg-opacity: 0.2"
    :class="getBackground"
  >
    <h5 class="mt-1 text-wrap">
      {{ this.item.header }}
    </h5>
    <p class="text-wrap">
      {{ this.item.content }}
    </p>
    <div class="text-end mb-2">
      <button class="btn btn-success me-2" @click="checkTodo">Check</button>
      <button class="btn btn-outline-danger" @click="deleteTodo">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    item: {
      id: String,
      author: String,
      header: String,
      content: String,
      isChecked: Boolean,
    },
  },
  computed: {
    getBackground() {
      return this.item.isChecked ? "bg-success" : "bg-light";
    },
  },
  methods: {
    checkTodo() {
      const todoData = {
        id: this.item.id,
        currentCheckState: this.item.isChecked,
      };

      this.$store.dispatch("checkTodo", todoData);
    },

    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.item.id);
    },
  },
};
</script>

<style scoped>
.text-wrap {
  white-space: pre-line;
  overflow-wrap: break-word;
}
</style>
