<template>
  <div class="team-card has-text-centered">
    <div v-if="single">
      <div class="column">
        <img class="team-avatar" :src="img1" alt="Team member avatar" />
        <h3 class="title is-5 mt-1 mb-1"><span class="text-pink">{{ uni }}</span></h3>
        <h1 class="title is-6 text-dark mt-1 mb-1">{{ name1 }}</h1>
      </div>
    </div>
    <div v-if="double">
      <div class="columns">
        <div class="column is-6">
          <img class="team-avatar" :src="img1" alt="Team member avatar 1" />
          <h1 class="title is-6 text-dark mt-1 mb-1">{{ formatName(name1) }}</h1>
        </div>
        <div class="column is-6">
          <img class="team-avatar" :src="img2" alt="Team member avatar 2" />
          <h1 class="title is-6 text-dark mt-1 mb-1">{{ formatName(name2) }}</h1>
        </div>
      </div>
    </div>
    <div v-if="triple">
      <div class="columns">
        <div class="column is-4">
          <img class="team-avatar" :src="img1" alt="Team member avatar 1" />
          <h1 class="title is-6 text-dark mt-1 mb-1">{{ formatName(name1) }}</h1>
        </div>
        <div class="column is-4">
          <img class="team-avatar" :src="img2" alt="Team member avatar 2" />
          <h1 class="title is-6 text-dark mt-1 mb-1">{{ formatName(name2) }}</h1>
        </div>
        <div class="column is-4">
          <img class="team-avatar" :src="img3" alt="Team member avatar 3" />
          <h1 class="title is-6 text-dark mt-1 mb-1">{{ formatName(name3) }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChallengeCard",
  mounted() {
    switch (this.cardType) {
      case "single":
        this.single = true;
        break;
      case "double":
        this.double = true;
        break;
      case "triple":
        this.triple = true;
        break;
    }
  },
  data() {
    return {
      single: false,
      double: false,
      triple: false,
    };
  },
  props: {
    uni: {
      type: String,
      required: true,
    },
    name1: {
      type: String,
      required: true,
    },
    img1: {
      type: String,
      required: true,
    },
    name2: {
      type: String,
      default: null,
    },
    img2: {
      type: String,
      default: null,
    },
    name3: {
      type: String,
      default: null,
    },
    img3: {
      type: String,
      default: null,
    },
    cardType: {
      type: String,
      required: true,
    },
  },
  methods: {
    formatName(name) {
      const parts = name.split(" ");
      return `${parts[0]}<span class="text-pink"> ${parts.slice(1).join(" ")}</span>`;
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");

.team-avatar {
  text-align: center;
  border-radius: 5px;
}

.team-card {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  height: 100%;
}

.column {
  display: inline-grid;
  justify-content: center;
  justify-items: center;
}

.title.is-6.text-dark {
  color: #333;
}

.text-pink {
  color: #ff4081;
}
</style>
