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
          :colorDots="'#7a4af6'"
        />
      </center>
    </section>
  </section>
</template>

<script>
import Timeline from "timeline-vuejs";
import axios from 'axios';
export default {
  name: "TimelinePage",
  components: {
    Timeline,
  },
  data() {
    return {
      messageWhenNoItems: "Will be here soon...",
      timelineItems: [],
    };
  },
  created() {
    let thisState = this;

    axios.get("https://spaceappslk.firebaseio.com/timelineItems.json").then(response => {
      //thisState.timelineItems = response.data;
      console.log(response.data);
      let arr = Object.keys(response.data).map((k) => response.data[k]);
      console.log(arr);
      thisState.mapArray(arr);

    })

  },
  methods: {
    mapArray(tl_array){
      let formattedArray = tl_array.map(function(tl_item){
        let splitDate = tl_item.from.toString().split("-")
        //tl_item.from = new Date(splitDate[0],splitDate[1])
        return {
          from: new Date(splitDate[0],splitDate[1]),
          title: tl_item.title,
          description: tl_item.description
        }
      });
      console.log(formattedArray)
      this.timelineItems = formattedArray;
    }
  }
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
.date-item {
  color: #c54da0 !important;
  font-size: 1.5rem;
}
.year {
  font-size: 2rem;
}
.description-item {
  text-align: justify;
}
.is-completed-item {
  border-left: 5px solid #c54da0 !important;
}
</style>

