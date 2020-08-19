<template>
  <section>
    <NavBar />
    <div class="container login-container mt-1">
      <div class="has-text-centered">
       <h1 class="title is-1 text-white mb-3">
        Log<span class="text-pink"> In</span>
      </h1>
        <img class="login-image" src="../assets/img/faq.png" />

        <div class="container has-text-centered">
          <div class="has-text-centred" v-if="isloading">
            <img src="../assets/img/loader.gif" style="height: 50px" />
            <p>Signing in...</p>
          </div>
          <h1 class="title is-6 text-white" v-if="!isloading">
            Don't have an account?
            <router-link to="/admin">Signup</router-link>
          </h1>
          <form v-if="!isloading">
            <div class="field">
              <label class="label text-white">Email Address</label>
              <div class="control">
                <input
                  class="input is-success"
                  type="text"
                  placeholder="Your email here..."
                  value=""
                  v-model="email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label text-white">Password</label>
              <div class="control">
                <input
                  class="input is-success"
                  type="password"
                  placeholder="Your password here..."
                  value=""
                  v-model="password"
                />
              </div>
              <p class="help is-danger">{{ error }}</p>
            </div>
            <div class="field is-grouped justify-content-center has-text-centered mt-2">
              <div class="control">
                <button class="button is-primary" @click="login">Login</button>
              </div>
              <div class="control">
                <button class="button is-danger is-light" @click="reset">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { firebaseApp } from "../firebase";

export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: "",
      error: "",
      isloading: false,
    };
  },
  methods: {
    login: function(e) {
        let thisState = this;
      this.isloading = true;
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user.user.email);
            thisState.$router.push("/dashboard")
            //thisState.$router.go({ path: this.$router.path });
            
          },
          (err) => {
            this.isloading = false;
            this.error = err.message;
          }
        );
        firebaseApp.auth().currentUser
      e.preventDefault();
    },
    reset: function(e) {
      this.email = "";
      this.password = "";
      this.error = "";
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");
.login-image {
  width: 500px;
}
.input {
  width: 350px;
}
.control {
  text-align: center;
}
.login-container {
  height: 100vh;
}
.justify-content-center{
    justify-content: center !important;
}
.input{
    border-color: #c54da0 !important;
}

</style>
