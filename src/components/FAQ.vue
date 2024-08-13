<template>
  <section class="section-block pl-1 pr-1 faq-holder">
    <h1 class="title is-1 text-white mb-3 has-text-centered">
      The<span class="text-pink"> FAQs</span>
    </h1>
    <div class="columns">
      <div class="column is-4 self-align-center">
        <img src="../assets/img/faq.png" alt="" />
      </div>
      <div class="column is-8 self-align-center">
        <div class="accordian-section">
          <b-collapse
            class="card-container"
            animation="slide"
            v-for="(collapse, index) of collapses"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index"
          >
            <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
            >
              <p class="card-header-title">
                {{ collapse.title }}
              </p>
              <a class="card-header-icon">
                <i
                  :class="props.open ? 'fas fa-sort-up' : 'fas fa-sort-down'"
                ></i>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                <p v-html="collapse.text"></p>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: "What is the NASA International Space Apps Challenge 2024?",
          text:
            "On October 1-2, NASA is hosting a global virtual hackathon where participants from around the world will collaborate to solve challenges using NASA’s open-source data. It's a 48-hour event designed for coders, entrepreneurs, scientists, designers, and more.",
          Key_index: 0,
        },
        {
          title: "What is the purpose of Space Apps?",
          text:
            "Launched in 2012, Space Apps has become the largest global hackathon. It's focused on collaboration rather than competition, though NASA does provide awards to top projects.",
          Key_index: 1,
        },
        {
          title: "What is the theme of Space Apps for 2024?",
          text:
            "The theme for this year is <strong>“Make Space”</strong>, highlighting the idea that there’s always room for one more idea or participant.",
          Key_index: 2,
        },
        {
          title: "Who should participate in Space Apps?",
          text:
            "Space Apps is open to everyone, including those who have never hacked before. It welcomes students, experts, engineers, makers, artists, and storytellers. Diverse teams are often the most successful.",
          Key_index: 3,
        },
        {
          title: "What social media is used for Space Apps?",
          text:
            "<a href='http://twitter.com/spaceapps' target='_blank'>Twitter</a>, <a href='http://facebook.com/spaceappschallenge' target='_blank'>Facebook</a>, and <a href='https://www.youtube.com/c/NASASpaceAppsChallenge' target='_blank'>YouTube</a> are the primary channels. Follow us at <strong>@SpaceApps</strong> and use the hashtag <strong>#SpaceApps</strong>!",
        },
        {
          title: "What is the “Virtual Bootcamp”?",
          text:
            "Leading up to the hackathon, the Virtual Bootcamp offers exclusive content and workshops from NASA, Local Leads, and past winners. Subscribe to our YouTube channel and enable notifications for updates.",
          Key_index: 4,
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");

.bottom-border {
  border-radius: 0 0 15px 15px;
}

.top-border {
  border-radius: 15px 15px 0 0;
}

.card-container {
  max-width: 750px; /* Increased from 600px to 750px to make the cards about 25% larger */
  margin: 0 auto; /* Center the cards */
}

.card-header-title {
  color: #673ab7 !important;
}
</style>
