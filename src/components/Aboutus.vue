<template>
  <section class="section-block pr-2 pl-2">
    <div class="columns">
      <div class="column is-half self-align-center">
        <iframe
        class="video-frame"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/39WSi3JKMIs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="column is-half pl-2 self-align-center">
        <h1 class="title is-1 text-white mb-3 hvr-underline-from-center">
          About<span class="text-pink"> Us</span>
        </h1>
        <h1 class="subtitle is-5 text-white justify-text">
          We are proud and thrilled to announce ‘NASA Space Apps Colombo, 2022’
          International hackathon event in Sri Lanka for the third consecutive year.
          In line with NASA’s guidelines and direct collaboration.
          The event is organized by <span class="text-pink">SEDS Sri Lanka </span>, which is the international
          body that strives to promote space exploration and development via
          educational and engineering projects.
        </h1>
        <h1 class="subtitle is-5 text-white justify-text">
          Find out more about NASA Space Apps Colombo from our Social Media Channels.
        </h1>
        <div class="row">
          <span class="hvr hvr-grow"><i class="sm-icon fab fa-facebook-f"></i><a class="mr-2" href="https://www.facebook.com/nasaspaceappscolombo/  " target="__blank">Facebook</a></span>
          <span class="hvr hvr-grow"><i class="sm-icon fab fa-instagram"></i><a class="mr-2" href="https://www.instagram.com/nasa_spaceapps_colombo?r=nametag" target="__blank">Instagram</a></span>
          <span class="hvr hvr-grow"><i class="sm-icon fab fa-youtube"></i><a class="mr-2" href="https://www.youtube.com/channel/UCTLG4OxFsG0a-TrPlLGwtbw?view_as=subscriber" target="__blank">YouTube</a></span>
          <span class="hvr hvr-grow"><i class="sm-icon fab fa-twitter"></i><a class="mr-2" href="https://twitter.com/SpaceAppsLK" target="__blank">Twitter</a></span>
          <span class="hvr hvr-grow"><i class="sm-icon fab fa-linkedin"></i><a class="mr-1" href="https://www.linkedin.com/company/nasa-space-apps-colombo" target="__blank">LinkedIn</a></span>

        </div>
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
.hvr-underline-from-center:before {
  margin-top: 5px;
  background-color: #760bff;
}
a{
  color: white !important;
}
.sm-icon{
  margin-right: 5px;
  color: #760bff;
}
</style>
