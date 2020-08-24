<template>
  <section class="main">
    <NavBar :dark="true" />
    <section class="home-root">
      <section>
        <div class="banner has-text-centered">
          <div class="titlebox mr-2 ml-2">
            <div class="row">
              <img class="logos" src="../assets/img/bannerlogos.png" alt="" />
            </div>
            <h1 class="title is-1 text-white mb-0 title-main">
              Space Apps Challenge 2020
            </h1>
            <vue-typer
              class="title is-2 text-white typer-title"
              :text="['2nd to 4th October', 'Colombo, Sri Lanka']"
              erase-style="clear"
            ></vue-typer>
            <div class="row">
              <a
                href="https://2020.spaceappschallenge.org/locations/colombo/"
                target="_blank"
              >
                <button class="button is-primary reg-button is-normal">
                  <b>Register Now</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Aboutus />
      <Countdown date="2020-10-02 08:00:00" />
      <!-- <Sponsors /> -->
      <FAQ />
      <Partners />
      <Contactus />
    </section>
  </section>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  name: "HomePage",
  components: {
    VueTyper,
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");

.banner {
  background-image: url("../assets/img/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 850px;
  /* clip-path: circle(59.4% at 53% 1%); */
  align-self: center;
  /* border-radius: 0% 0% 150% 150%/0% 0% 40% 40%; */
}
.banner-mobile {
  height: 700px;
}
.title-main {
  font-size: 4rem;
}
.titlebox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.logos {
  width: 400px;
}
.typed[data-v-302772ec] {
  color: white !important;
}
.reg-button {
  background-color: #c54da0 !important;
  color: #fff;
}
.reg-button:hover {
  background-color: #760bff !important;
  color: #fff;
}

@media (max-width: 430px) {
  .title-main {
    font-size: 3rem;
  }
  .typer-title {
    font-size: 1.5rem;
  }
}
@media (max-width: 1044px) {
  .banner {
    height: 700px;
  }
}
</style>
