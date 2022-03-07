<template>
  <h1>User Info</h1>
  <img class="mb-3 rounded-pill" v-if="!!this.getPhoto" :src="this.getPhoto" />
  <div v-if="!!this.getDisplayName">
    <h5>Display Name</h5>
    <p>{{ this.getDisplayName }}</p>
  </div>
  <div>
    <h5>Email</h5>
    <p>{{ this.getEmail }}</p>
  </div>
  <button class="btn btn-danger btn-sm" @click="this.signOut">Log Out</button>
</template>

<script>
export default {
  computed: {
    getPhoto() {
      return this.$store.state.auth.user.photoURL;
    },
    getDisplayName() {
      return this.$store.state.auth.user.displayName;
    },
    getEmail() {
      return this.$store.state.auth.user.email;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
    },
  },
};
</script>

<style></style>
