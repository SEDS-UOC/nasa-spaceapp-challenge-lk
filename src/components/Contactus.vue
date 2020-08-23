<template>
  <div class="section-block container has-items-centered" style="height: 100%;">
    <div class="container" id="#home">
      <div class="columns">
        <div class="column is-4 has-text-centered self-align-center">
          <div class="container has-text-centered">
            <img src="../assets/img/contact.png" style="width: 300px" />
            <h1
              class="title is-1 text-white mb-3 hvr hvr-underline-from-center"
            >
              Contact<span class="text-pink"> Us</span>
            </h1>
          </div>
        </div>
        <div class="column is-8 has-text-centered" style="align-self: center;">
          <h1 class="title is-3 mb-0 text-white">How can we help you?</h1>
          <h1 class="title is-6 mt-0  text-pink">or just say hello!</h1>

          <div
            class="notification is-warning"
            style="margin-left: 3rem; margin-right: 3rem;"
            v-if="isSuccess"
          >
            <button class="delete"></button>
            Successfully Submitted!
          </div>
          <div
            class="notification is-danger"
            style="margin-left: 3rem; margin-right: 3rem;"
            v-if="isError"
          >
            <button class="delete"></button>
            Something went wrong!
          </div>

          <form style="margin-left: 3rem; margin-right: 3rem;">
            <div class="field">
              <label class="label has-text-left">Your Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Your awesome name here..."
                  v-model="contact_name"
                />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-left">Your Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="And the email goes here..."
                  v-model="contact_email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-left">Your Message</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="What do you wanna tell us?"
                  v-model="contact_message"
                ></textarea>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button
                  class="button is-pink"
                  @click="sendEmail()"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div class="control">
                <button class="button is-link is-light" @click="clear">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import emailjs from "emailjs-com";
export default {
  name: "Contactus",
  data() {
    return {
      contact_name: "",
      contact_email: "",
      contact_message: "",
      isSuccess: false,
      isError: false,
    };
  },
  methods: {
    sendEmail: function() {
      //event.preventDefault();

      if (
        this.contact_name == "" ||
        this.contact_email == "" ||
        this.contact_message == ""
      ) {
        this.$swal.fire(
          "Whooops!",
          "Please fill all the required fields before sending!",
          "error"
        );
        return;
      }

      let templateParams = {
        reply_to: this.contact_name,
        from_name: this.contact_email,
        message_html: this.contact_message,
      };

      emailjs
        .send(
          "spaceapps_gmail",
          "template_U0izV8Lp",
          templateParams,
          "user_kKl7M90RMttSx6zJ6y0hs"
        )
        .then((callback) => {
          console.log(callback);
          this.$swal.fire(
            "Nice Work!",
            "Successfully Sent Your Message!",
            "success"
          );
        })
        .catch((error) => {
          console.log(error);
          this.$swal.fire(
            "Whooops!",
            "Something went wrong!",
            "error"
          );
        });
    },
    clear: function(){
      this.contact_name = "",
      this.contact_email = "",
      this.contact_message = ""
    }
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");
.label {
  color: #fff;
}
.hvr-underline-from-center:before {
  margin-top: 5px;
  background-color: #760bff;
}
</style>
