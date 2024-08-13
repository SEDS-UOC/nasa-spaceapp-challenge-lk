<template>
  <div class="team-card has-text-centered">
    <h3 class="title is-5 mt-1 mb-1">{{ uni }}</h3>
    <div class="team-members">
      <div v-if="single" class="team-member">
        <img class="team-avatar" :src="img1" alt="Team Member" />
        <h1 class="title is-6 text-dark mt-1 mb-1">
          {{ name1.split(" ")[0] }}
          <span class="text-pink"> {{ name1.split(" ")[1] }}</span>
        </h1>
      </div>
      <div v-if="double" class="team-members-container">
        <div class="team-member">
          <img class="team-avatar" :src="img1" alt="Team Member" />
          <h1 class="title is-6 text-dark mt-1 mb-1">
            {{ name1.split(" ")[0] }}
            <span class="text-pink"> {{ name1.split(" ")[1] }}</span>
          </h1>
        </div>
        <div class="team-member">
          <img class="team-avatar" :src="img2" alt="Team Member" />
          <h1 class="title is-6 text-dark mt-1 mb-1">
            {{ name2.split(" ")[0] }}
            <span class="text-pink"> {{ name2.split(" ")[1] }}</span>
          </h1>
        </div>
      </div>
      <div v-if="triple" class="team-members-container">
        <div class="team-member">
          <img class="team-avatar" :src="img1" alt="Team Member" />
          <h1 class="title is-6 text-dark mt-1 mb-1">
            {{ name1.split(" ")[0] }}
            <span class="text-pink"> {{ name1.split(" ")[1] }}</span>
          </h1>
        </div>
        <div class="team-member">
          <img class="team-avatar" :src="img2" alt="Team Member" />
          <h1 class="title is-6 text-dark mt-1 mb-1">
            {{ name2.split(" ")[0] }}
            <span class="text-pink"> {{ name2.split(" ")[1] }}</span>
          </h1>
        </div>
        <div class="team-member">
          <img class="team-avatar" :src="img3" alt="Team Member" />
          <h1 class="title is-6 text-dark mt-1 mb-1">
            {{ name3.split(" ")[0] }}
            <span class="text-pink"> {{ name3.split(" ")[1] }}</span>
          </h1>
        </div>
      </div>
    </div>
    <div class="social-media-links">
      <a v-if="twitter" :href="twitter" target="_blank" class="social-icon">
        <i class="fab fa-twitter"></i>
      </a>
      <a v-if="linkedin" :href="linkedin" target="_blank" class="social-icon">
        <i class="fab fa-linkedin"></i>
      </a>
      <a v-if="github" :href="github" target="_blank" class="social-icon">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";

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
      default: "",
    },
    name1: {
      type: String,
      default: "",
    },
    name2: {
      type: String,
      default: "",
    },
    name3: {
      type: String,
      default: "",
    },
    img1: {
      type: String,
      default: "",
    },
    img2: {
      type: String,
      default: "",
    },
    img3: {
      type: String,
      default: "",
    },
    cardType: {
      type: String,
      default: "",
    },
    twitter: {
      type: String,
      default: "",
    },
    linkedin: {
      type: String,
      default: "",
    },
    github: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.team-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
}

.team-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.team-members {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-members-container {
  display: flex;
  gap: 20px;
}

.social-media-links {
  margin-top: 10px;
}

.social-icon {
  font-size: 24px;
  color: #333;
  margin: 0 5px;
  text-decoration: none;
}

.social-icon:hover {
  color: #007bff; /* Adjust color on hover */
}
</style>
