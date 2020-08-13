<template>
  <section class="pr-2 pl-2 mt-2 mb-2 pt-1 pb-2">
    <div class="columns">
      <div class="column is-2 has-text-centered self-align-center">
        <h1 class="title is-3 text-pink mb-0 countdown-title">Days</h1>
        <h1 class="title is-1 text-white">{{ days | two_digits }}</h1>
      </div>
      <div class="column is-2 has-text-centered self-align-center">
        <h1 class="title is-3 text-pink mb-0 countdown-title">Hours</h1>
        <h1 class="title is-1 text-white">{{ hours | two_digits }}</h1>
      </div>
      <div class="column is-2 has-text-centered self-align-center">
        <h1 class="title is-3 text-pink mb-0 countdown-title">Minutes</h1>
        <h1 class="title is-1 text-white">{{ minutes | two_digits }}</h1>
      </div>
      <div class="column is-2 has-text-centered self-align-center">
        <h1 class="title is-3 text-pink mb-0 countdown-title">Seconds</h1>
        <h1 class="title is-1 text-white">{{ seconds | two_digits }}</h1>
      </div>
      <div class="column is-4 has-text-left self-align-center">
        <h1 class="title is-2 text-white countdown-des">
          Counts <span class="text-purple">Every<br />Second</span> Until the
          Hackathon
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Countdown",
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  props: {
    date: {
      type: String,
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
    };
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    },
  },
  filters: {
    two_digits: function(value) {
      if (value < 0) {
        return "00";
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");

@media (max-width: 922px) {
  .countdown-title {
    font-size: 1.5rem;
  }
}
@media (max-width: 769px) {
  .countdown-des {
    text-align: center !important;
  }
}
</style>
