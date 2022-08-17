<template>
  <section class="section-block pl-1 pr-1 faq-holder">
    <div class="columns">
      <div class="column is-4 self-align-center">
        <img src="../assets/img/faq.png" alt="" />
        <h1 class="title is-1 text-white mb-3 has-text-centered">
          The<span class="text-pink"> FAQs</span>
        </h1>
      </div>
      <div class="column is-8 self-align-center">
        <div class="accordian-section">
          <b-collapse
            class="card"
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
                <i :class="props.open ? 'fas fa-sort-up' : 'fas fa-sort-down'"></i>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                <p v-html="collapse.text" ></p>
                <!-- {{ collapse.text }} -->
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
          title: "What is the NASA International Space Apps Challenge 2022?",
          text:
            "On October 1-2, NASA is inviting coders, entrepreneurs, scientists, designers, storytellers, makers, builders, artists, and technologists to come together in a global, virtual hackathon. During a period of 48 hours, participants from around the world will come together to create virtual teams and solve challenges using NASA’s open-source data.",
          Key_index: 0
        },
        {
          title: "What is the purpose of Space Apps?",
          text:
            "Space Apps, which started in 2012, has now become the largest global hackathon. While NASA provides awards to the top projects, Space Apps is all about collaboration!",
          Key_index: 1
        },
        {
          title: "What is the theme of Space Apps for 2022?",
          // text: "This year’s event theme is <strong>“The Power of Ten”.</strong> This theme was chosen by NASA for several reasons. </p> <p>One, it celebrates the fact that this year’s event is the <strong>tenth </strong> annual event. Since 2012, Space Apps has grown leaps and bounds -- thanks to you! </p> <p>Two, it reminds us that the next ten years have much in store, both for NASA and for Space Apps.</p> <p> Three, the theme captures some of the ways that we are celebrating the tenth annual event this year, which includes our inclusion of additional space agency partners and additional Global Awards -- among other things!",
          text: "This year’s <strong>“Make Space”</strong> theme celebrates that, at Space Apps, “there’s always space for one more”",
          Key_index: 2

        },
        {
          title: "Who should participate in Space Apps?",
          text:
            "Space Apps is for everyone! This includes those who have never “hacked’ before! All passionate problem solvers are encouraged to join - students, experts, engineers, makers, artists, and storytellers. While some of our challenges are technical, others ask you to use your artistic skills, your business acumen, and your historical imaginations! </p> <p> In other words, you do not need to be a coder or data expert to be part of Space Apps. In fact, the most diverse teams are often the most successful.",
          Key_index: 3
        },
        {
          title: "What social media is used for Space Apps?",
          text:
            "<a href='http://twitter.com/spaceapps' target='_blank'> Twitter </a>, <a href='http://facebook.com/spaceappschallenge' target='_blank'> Facebook </a>, and <a href='https://www.youtube.com/c/NASASpaceAppsChallenge' target='_blank'>YouTube </a>are three of the primary channels we use to connect with the global Space Apps community. For updates, please follow us on social media at <strong>@SpaceApps </strong>. We also encourage Space Apps participants to communicate with us and with each other on social media by using the hashtag <strong>#SpaceApps</strong>! Let us know how your Space Apps journey is going!",
        },
        {
          title: "What is the “Virtual Bootcamp”?",
          text:
            "Prior to hackathon weekend, please tune into our website and social media accounts to access exclusive content from NASA, Local Leads, Space Apps Ambassadors, previous Global Winners, and more. Guests will provide relevant workshops and tips for having a successful hackathon experience. This is a wonderful opportunity to tap into the broader Space Apps community. Subscribe to our YouTube channel and turn on notifications to be the first to see our Space Apps 202  Virtual Bootcamp in the lead-up to October 1-2.",
          Key_index: 4
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");

.bottom-border{
  border-radius: 0 0 15px 15px;
}
.top-border{
  border-radius: 15px 15px 0 0;
}

/* .card {
  background-color: #1D0FD0;
} */

.card-header-title{
  color: #673ab7 !important
}
</style>
