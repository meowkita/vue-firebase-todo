<template>
  <li class="list-group-item">
    <h5 class="mt-1">ToDo's header</h5>
    <p>ToDo's description</p>
    <div class="text-end mb-2">
      <button class="btn btn-success me-2">Check</button>
      <button class="btn btn-outline-danger">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  data() {
    return {
      checked: false,
    };
  },
  props: {
    item: {
      id: String,
      header: String,
      content: String,
    },
  },
};
</script>
