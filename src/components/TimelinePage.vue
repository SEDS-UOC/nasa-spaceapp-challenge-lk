<template>
  <section class="main">
    <NavBar />
    <br /><br />
    <br /><br>
    <section class="timeline-section section-block has-text-centered">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        Event<span class="text-pink"> Timeline</span>
      </h1>
    </section>
    <section class="timeline-wrapper">
      <div v-if="timelineItems.length">
        <div class="timeline-container">
          <div class="timeline-line"></div>
          <div
            v-for="(item, index) in timelineItems"
            :key="index"
            class="timeline-item-wrapper"
          >
            <div
              :class="[
                'timeline-item',
                {
                  'timeline-item-right': index % 2 === 0,
                  'timeline-item-left': index % 2 !== 0,
                },
              ]"
            >
              <div class="timeline-content">
                <h2 class="timeline-title">{{ item.title }}</h2>
                <p class="timeline-description">{{ item.description }}</p>
                <span class="timeline-date">{{ formatDate(item.from) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>{{ messageWhenNoItems }}</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "TimelinePage",
  data() {
    return {
      messageWhenNoItems: "Will be here soon...",
      timelineItems: [
        {
          from: new Date(2021, 6),
          title: "Participant Registrations",
          description:
            "We will be encouraging participants to register for Space Apps 2021 from July 15th to October 3rd.",
        },
        {
          from: new Date(2021, 7),
          title: "Challenge Summaries Released",
          description:
            "We will provide a summary of each of the challenges on our website on August 17th.",
        },
        {
          from: new Date(2021, 8),
          title: "Challenge Statements Released",
          description:
            "We will announce the full challenge statements on our website on September 9th.",
        },
        {
          from: new Date(2021, 8),
          title: "Virtual Bootcamp",
          description:
            "During September to October 3rd, we will host a Virtual Bootcamp page on our website that will showcase videos to help orient participants, help teams build skills and meet the partners.",
        },
        {
          from: new Date(2021, 9),
          title: "Space Apps 2021",
          description: "Space Apps 2021 kicks off on 2nd and 3rd October!",
        },
        {
          from: new Date(2021, 10),
          title: "Judging",
          description:
            "Several rounds of judging to get from thousands of submissions to 10 Global Winners",
        },
      ],
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
  },
};
</script>

<style>
@import url("../assets/css/style.css");
.timeline-wrapper {
  padding: 50px 0;
  position: relative;
}

.timeline-container {
  position: relative;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px; /* Increased width for better visibility */
  height: 100%;
  background-color: #7a4af6;
  transform: translateX(-50%);
}

.timeline-item-wrapper {
  position: relative;
  margin: 80px 0; /* Increased vertical spacing between items */
}

.timeline-item {
  position: relative;
  width: 90%; /* Adjusted width for better alignment */
  max-width: 500px; /* Reduced max-width for smaller cards */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.timeline-item-left {
  margin-left: 0;
  margin-right: auto;
  flex-direction: row-reverse;
}

.timeline-item-right {
  margin-left: auto;
  margin-right: 0;
  flex-direction: row;
}

.timeline-dot {
  position: absolute;
  left: -10px; /* Adjusted for better alignment */
  width: 20px; /* Increased size for visibility */
  height: 20px; /* Increased size for visibility */
  background-color: #7a4af6;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #fff;
  z-index: 1;
}

.timeline-content {
  margin-left: 40px;
  width: 100%;
}

.timeline-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #333;
}

.timeline-description {
  font-size: 0.875rem;
  color: #666;
}

.timeline-date {
  display: block;
  margin-top: 10px;
  font-size: 0.75rem;
  color: #7a4af6;
}
</style>
