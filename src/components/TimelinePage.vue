<template>
  <section class="main">
    <NavBar />
    <section class="timeline-section section-block has-text-centered">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        Event<span class="text-pink"> Timeline</span>
      </h1>
      <!-- <img
        class="soon-img has-text-centered"
        src="../assets/img/soon.png"
        alt=""
      />
      <h1 class="title is-2 text-white">Will be announced soon!</h1> -->
    </section>

    <section class="has-text-centered ml-2 mr-2">
      <center>
        <div style="margin-bottom: 200px;margin-top: 200px">
          <a style="font-size: 60px">To Be Announced</a>
        </div>
        <Timeline
          :timeline-items="timelineItems"
          :message-when-no-items="messageWhenNoItems"
          :colorDots="'#7a4af6'"
        />
      </center>
    </section>
  </section>
</template>

<script>
// import Timeline from "timeline-vuejs";

export default {
  name: "TimelinePage",
  // components: {
  //   Timeline,
  // },
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
            "During September to October 3rd,we will host a Virtual Bootcamp page on our website that will showcase videos to help orient participants, help teams build skills and meet the partners.",
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
};
</script>


<style>
@import url("../assets/css/style.css");
.soon-img {
  width: 550px;
  /* was 600px */
}
.timeline-section {
  display: flex;
  flex-direction: column !important;
  align-items: center;
}
.hvr-underline-from-center:before {
  margin-top: 5px;
  background-color: #760bff;
}
.date-item {
  color: #c54da0 !important;
  font-size: 1.5rem;
}
.year {
  font-size: 2rem;
}
.description-item {
  text-align: left;
}
.is-completed-item {
  border-left: 5px solid #c54da0 !important;
}
</style>
