<template>
  <div class="container">
    <div class="row align-items-center min-vh-100">
      <div
        class="col-12 col-sm-8 col-md-6 col-lg-4 offset-0 offset-sm-2 offset-md-3 offset-lg-4"
      >
        <form action="">
          <div class="mb-3 text-center">
            <h1>VueFire ToDo</h1>
          </div>
          <hr />
          <div class="mb-3">
            <label class="form-label" for="email">Email</label>
            <input
              class="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-4">
            <label class="form-label" for="password">Password</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                name="password"
                placeholder="Your secure password"
              />
              <div class="input-group-text">
                <input
                  class="form-check-input mt-0 me-2"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />Show
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button class="btn btn-primary">Sign In</button>
            <span class="ms-3 text-end"
              >Not registered yet? <a href="#">Sign Up</a></span
            >
          </div>
        </form>
        <div class="text-center my-3">
          <h4 class="mb-3">or</h4>
          <button class="btn btn-lg btn-outline-primary">
            <div class="d-flex justify-content-center align-items-center gap-2">
              <span class="align-self-baseline"> Sign In with Google </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
