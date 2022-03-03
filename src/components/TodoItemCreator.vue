<template>
  <div>
    <div class="form-block mb-3">
      <label class="form-label" for="header">Header</label>
      <input class="form-control" type="text" />
    </div>
    <div class="form-block mb-3">
      <label class="form-label" for="content">Content</label>
      <textarea
        class="form-control"
        style="resize: none"
        rows="3"
        name="content"
        id="content"
      ></textarea>
    </div>
    <div class="form-block text-end">
      <button class="btn btn-primary">Create</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItemCreator",
};
</script>
