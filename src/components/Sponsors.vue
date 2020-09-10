<template>
  <section class="section-block has-text-centered">
    <div class="row">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">Our<span class="text-pink"> Sponsors</span></h1>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div><img class="carousal-image" src="require('../assets/img/sponsers/sponser1.png')"></div>
   <!--<div><img class="carousal-image" src="https://cdn.freebiesupply.com/logos/large/2x/sri-lankan-airlines-logo-png-transparent.png"></div> -->
    <!--  <div><img class="carousal-image" src="https://pngimg.com/uploads/visa/visa_PNG4.png"></div>
      <div><img class="carousal-image" src="https://pngimg.com/uploads/mcdonalds/mcdonalds_PNG16.png"></div>
      <div><img class="carousal-image" src="https://www.pngmart.com/files/4/Microsoft-Logo-PNG-Transparent.png"></div>-->
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
export default {
  name: "Sponsors",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        lazyLoad: "ondemand",
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssease: "linear"
      },
    };
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");
.carousal-image{
  height: 100px;
}
/* Hover Styles */
.hvr-underline-from-center:before {
  margin-top: 5px;
  background-color: #760bff;
}
</style>
