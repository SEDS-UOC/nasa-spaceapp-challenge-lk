<template>
  <section class="mt-2 pr-2 pl-2 mb-2">
    <div class="columns">
      <div class="column is-half self-align-center">
        <iframe
        class="video-frame"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gIEGN5rV2JY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="column is-half pl-2 self-align-center">
        <h1 class="title is-1 text-white mb-3">
          About<span class="text-pink"> Us</span>
        </h1>
        <h1 class="subtitle is-5 text-white justify-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h1>
        <h1 class="subtitle is-5 text-white justify-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Aboutus",
};
</script>

<style scoped>
@import url("../assets/css/style.css");
.video-frame{
    width: 100%;
    min-height: 400px;
}
</style>
