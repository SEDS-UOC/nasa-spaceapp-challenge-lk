<template>
  <section class="section-block has-text-centered mt-2">
    <h1 class="title is-1 text-white mb-3 hvr-underline-from-center">
      Our<span class="text-pink"> Partners</span>
    </h1>
    <VueSlickCarousel v-bind="settings">
      <div>
        <img class="carousal-image" src="../assets/img/chapterlogos/uop.png" />
      </div>
      <div>
        <img class="carousal-image" src="../assets/img/chapterlogos/uom.png" />
      </div>
      <div>
        <img class="carousal-image" src="../assets/img/chapterlogos/uoc.png" />
      </div>
      <div>
        <img class="carousal-image" src="../assets/img/chapterlogos/susl.png" />
      </div>
      <div>
        <img class="carousal-image" src="../assets/img/chapterlogos/uor.png" />
      </div>
      <div>
        <img
          class="carousal-image"
          src="../assets/img/chapterlogos/uosj1.png"
        />
      </div>
      <div>
        <img
          class="carousal-image"
          src="../assets/img/chapterlogos/kelaniya.png"
        />
      </div>
      <div>
        <img
          class="carousal-image"
          src="../assets/img/chapterlogos/slitt.png"
        />
      </div>
      <div>
        <img
          class="carousal-image"
          src="../assets/img/chapterlogos/jaffna.png"
        />
      </div>
      <div>
        <img
          class="carousal-image"
          src="../assets/img/chapterlogos/wayamba.png"
        />
      </div>
      <div>
        <img
          class="carousal-image"
          src="../assets/img/chapterlogos/kelaniya.png"
        />
      </div>
      <div>
        <img class="carousal-image" src="../assets/img/chapterlogos/nsbm.png" />
      </div>
      <div>
        <img
          class="carousal-image"
          src="../assets/img/chapterlogos/ocean.png"
        />
      </div>
      <div>
        <img
          class="carousal-image"
          src="../assets/img/chapterlogos/seusl.png"
        />
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  name: "Partners",
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
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        cssease: "linear",
        swipe: true,
        responsive: [
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 920,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 470,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 330,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");
.carousal-image {
  height: 100px;
}
.hvr-underline-from-center:before {
  margin-top: 5px;
  background-color: #760bff;
}
</style>
