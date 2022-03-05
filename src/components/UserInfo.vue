<template>
  <h1>User Info</h1>
  <div v-if="!!this.$store.state.auth.user.photoURL">
    <img
      class="mb-3 rounded-pill"
      :src="this.$store.state.auth.user.photoURL"
    />
  </div>
  <div v-if="!!this.$store.state.auth.user.displayName">
    <h5>Display Name</h5>
    <p>{{ this.$store.state.auth.user.displayName }}</p>
  </div>
  <div>
    <h5>Email</h5>
    <p>{{ this.$store.state.auth.user.email }}</p>
  </div>
  <button
    class="btn btn-danger btn-sm"
    @click="this.$store.dispatch('signOut')"
  >
    Log Out
  </button>
</template>

<script>
export default {};
</script>

<style></style>
