<template>
  <section class="main">
    <NavBar :dark="true" />
    <section class="home-root">
      <section>
        <div class="banner has-text-centered">
          <!--           <div class="row mr-1 ml-1">
            <div class="notification is-danger is-light">
              We regret to inform you that <strong>Local People's Choice</strong> award has been withdrawn.
              Please refer here for the <a href="../assets/legal/PublicAnnouncement14.10.20.pdf" target="__blank" download>official announcement</a>. Apologies for any inconveniences caused.
            </div>
          </div> -->
          <div class="titlebox mr-2 ml-2">
            <div class="row">
              <img
                class="logos"
                src="../assets/img/bannerlogo_2022.png"
                alt=""
              />
            </div>
            <br />
            <h1 class="title is-1 text-white mb-0 title-main">
              Space Apps Challenge 2024
            </h1>
            <vue-typer
              class="title is-2 text-white typer-title"
              :text="['1st & 2nd October', 'Colombo, Sri Lanka']"
              erase-style="clear"
            ></vue-typer>
            <div class="row">
              <!-- <a
                href="https://2021.spaceappschallenge.org/locations/colombo/"
                target="_blank"
              >  -->

              <!--              <router-link to="/winners">-->
              <!--                <button class="button is-primary reg-button is-normal">-->
              <!--                  <b>See the Winners</b>-->
              <!--                  &lt;!&ndash; was "Register Now" &ndash;&gt;-->
              <!--                </button>-->

              <!--              </router-link>-->

              <!-- </a> -->
            </div>
          </div>
        </div>
      </section>
      <Aboutus />
      <Countdown date="2024-12-21 08:00:00" />
      <!-- <TShirt /> -->
      <Sponsors />
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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Additional styles for centering content */
}

.titlebox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center items horizontally */
  text-align: center; /* Center text */
  animation: fadeIn 2s ease-out; /* Animation for fade-in effect */
}

.logos {
  width: 400px;
  animation: bounce 2s infinite; /* Animation for bounce effect */
}

.title-main {
  font-size: 4rem;
  animation: fadeIn 2s 1s ease-out; /* Delayed fade-in effect */
}

.typer-title {
  font-size: 2rem;
  animation: fadeIn 2s 1.5s ease-out; /* Delayed fade-in effect */
}

.reg-button {
  background-color: #c54da0 !important;
  color: #fff;
  transition: background-color 0.3s ease;
}

.reg-button:hover {
  background-color: #760bff !important;
  color: #fff;
}



@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
    height: 100vh;
  }
}

</style>
