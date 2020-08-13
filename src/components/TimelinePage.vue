<template>
  <section class="main">
    <NavBar />
    <section class="timeline-section section-block has-text-centered">
    <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">Event<span class="text-pink"> Timeline</span></h1>
    <img class="soon-img has-text-centered" src="../assets/img/soon.png" alt="">
    <h1 class="title is-2 text-white">Will be announced soon!</h1>
  </section>
  </section>
</template>

<script>
export default {
    name: 'TimelinePage'
}
</script>

<style>
@import url("../assets/css/style.css");
.soon-img{
  width: 600px;
}
.timeline-section{
  display: flex;
  flex-direction: column !important;
  align-items: center;
}
</style>