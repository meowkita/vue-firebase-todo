<template>
  <li
    class="list-group-item"
    style="--bs-bg-opacity: 0.2"
    :class="this.item.isChecked ? 'bg-success' : 'bg-light'"
  >
    <h5 class="mt-1">{{ this.item.header }}</h5>
    <p style="white-space: pre-line">{{ this.item.content }}</p>
    <div class="text-end mb-2">
      <button
        class="btn btn-success me-2"
        @click="
          this.$store.dispatch('checkTodo', {
            id: this.item.id,
            currentCheckState: this.item.isChecked,
          })
        "
      >
        Check
      </button>
      <button class="btn btn-outline-danger" @click="checkTodo">Delete</button>
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
  methods: {
    checkTodo() {
      this.$store.dispatch("deleteTodo", this.item.id);
    },
  },
};
</script>
