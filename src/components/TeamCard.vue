<template>
  <div class="team-card has-text-centered">
    <h3 class="title is-5 mt-1 mb-1">{{ uni }}</h3>
    <div class="columns" v-if="double">
      <div class="column is-6">
        <img class="team-avatar" :src="img1" alt="" />
        <h1
          class="title is-6 text-dark mt-1 mb-1"
        >
          {{ name1.split(" ")[0]
          }}<span class="text-pink"> {{ name1.split(" ")[1] }}</span>
        </h1>
      </div>
      <div class="column is-6">
        <img class="team-avatar" :src="img2" alt="" />
        <h1
          class="title is-6 text-dark mt-1 mb-1"
        >
          {{ name2.split(" ")[0]
          }}<span class="text-pink"> {{ name2.split(" ")[1] }}</span>
        </h1>
      </div>
    </div>
    <div v-if="single">
      <div class="column">
        <img class="team-avatar" :src="img1" alt="" />
        <h1
          class="title is-6 text-dark mt-1 mb-1"
        >
          {{ name1.split(" ")[0]
          }}<span class="text-pink"> {{ name1.split(" ")[1] }}</span>
        </h1>
      </div>
    </div>
    <div class="columns" v-if="triple">
      <div class="column is-4">
        <img class="team-avatar" :src="img1" alt="" />
        <h1
          class="title is-6 text-dark mt-1 mb-1"
        >
          {{ name1.split(" ")[0]
          }}<span class="text-pink"> {{ name1.split(" ")[1] }}</span>
        </h1>
      </div>
      <div class="column is-4">
        <img class="team-avatar" :src="img2" alt="" />
        <h1
          class="title is-6 text-dark mt-1 mb-1"
        >
          {{ name2.split(" ")[0]
          }}<span class="text-pink"> {{ name2.split(" ")[1] }}</span>
        </h1>
      </div>
      <div class="column is-4">
        <img class="team-avatar" :src="img2" alt="" />
        <h1
          class="title is-6 text-dark mt-1 mb-1"
        >
          {{ name2.split(" ")[0]
          }}<span class="text-pink"> {{ name2.split(" ")[1] }}</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  mounted() {
    switch (this.cardType) {
      case "single":
        this.single = true;
        return;
      case "double":
        this.double = true;
        return;
      case "triple":
        this.triple = true;
        return;
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
    },
    name1: {
      type: String,
    },
    img1: {
      type: String,
    },
    name2: {
      type: String,
    },
    img2: {
      type: String,
    },
    cardType: {
      type: String,
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");
.team-avatar {
  text-align: center;
  border-radius: 50%;
  height: 100px;
}
.team-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
}
.column {
  display: inline-grid;
  justify-content: center;
  justify-items: center;
}
</style>
