<template>
  <div class="container">
    <div class="row align-items-center min-vh-100">
      <div
        class="col-12 col-sm-8 col-md-6 col-lg-4 offset-0 offset-sm-2 offset-md-3 offset-lg-4"
      >
        <form @submit="this.signUpWithEmailAndPassword">
          <div class="mb-3 text-center">
            <h1>VueFire ToDo</h1>
          </div>
          <hr />
          <div
            class="mb-3 border bg-warning border-warning rounded p-2"
            style="--bs-bg-opacity: 0.2"
            v-if="!!this.message"
          >
            {{ this.message }}
          </div>
          <div class="mb-3">
            <label class="form-label" for="email">Email</label>
            <input
              class="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="name@example.com"
              v-model="this.email"
              required
            />
          </div>
          <div class="mb-4">
            <label class="form-label" for="password">Password</label>
            <div class="input-group mb-3">
              <input
                :type="this.isPasswordVisible ? 'text' : 'password'"
                class="form-control"
                name="password"
                placeholder="Your secure password"
                v-model="this.password"
                required
              />
              <div class="input-group-text">
                <input
                  class="form-check-input mt-0 me-2"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  v-model="this.isPasswordVisible"
                />Show
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button type="submit" class="btn btn-primary">Sign Up</button>
            <button
              class="ms-3 btn btn-outline-danger"
              @click="this.$router.push('/sign-in')"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpView",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      isPasswordVisible: false,
    };
  },
  methods: {
    async signUpWithEmailAndPassword(event) {
      event.preventDefault();

      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("signUpWithEmailAndPassword", formData);
      } catch (error) {
        this.message = error.message;
      }
    },
  },
};
</script>
