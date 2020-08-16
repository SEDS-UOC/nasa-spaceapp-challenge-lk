<template>
  <section class="main">
    <NavBar />
    <section class="timeline-section section-block has-text-centered">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        Event<span class="text-pink"> Timeline</span>
      </h1>
      <img
        class="soon-img has-text-centered"
        src="../assets/img/soon.png"
        alt=""
      />
      <h1 class="title is-2 text-white">Will be announced soon!</h1>
    </section>

    <section class="has-text-centered ml-2 mr-2">
      <center>
        <Timeline
        :timeline-items="timelineItems"
        :message-when-no-items="messageWhenNoItems"
      />
      </center>
    </section>
  </section>
</template>

<script>
import Timeline from "timeline-vuejs";
export default {
  name: "TimelinePage",
  components: {
    Timeline,
  },
  data() {
    return {
      messageWhenNoItems: "There are not items",
      timelineItems: [
        {
          from: new Date(2018, 7),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
        {
          from: new Date(2016, 1),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
        {
          from: new Date(2016, 6),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
        {
          from: new Date(2012, 1),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
      ],
    };
  },
};
</script>

<style>
@import url("../assets/css/style.css");
.soon-img {
  width: 600px;
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
.date-item{
  color: #c54da0 !important;
  font-size: 1.5rem;
}
.year{
  font-size: 2rem;
}
.description-item{
  text-align: justify;
}
.is-completed-item{
  border-left: 5px solid #c54da0 !important;
}
</style>
