<template>
  <section class="main">
    <NavBar />    <br /><br />
    <br /><br>
    <section class="team-title has-text-centered mt-3 mr-1 ml-1">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        The<span class="text-pink"> Team</span>
      </h1>
    </section>

    <section class="teamcards-container">
      <!-- Hosts Section -->
      <section class="team-section">
        <h2 class="title is-3 text-white mt-3">Hosts</h2>
        <hr class="section-line" />
        <div class="team-row">
          <TeamCard
            :uni="'Anupa Kulathunga'"
            :name1="'Anupa Kulathunga'"
            :img1="require('../assets/img/team/ganesha.jpg')"
            :cardType="'host'"
            :twitter="'https://twitter.com/anupa'"
            :linkedin="'https://linkedin.com/in/anupa'"
            :github="'https://github.com/anupa'"
          />
        </div>
      </section>

      <!-- Co-Hosts Section -->
      <section class="team-section">
        <h2 class="title is-3 text-white mt-3">Co-Hosts</h2>
        <hr class="section-line" />
        <div class="team-row">
          <TeamCard
            :uni="'Suvin Kodituwakku'"
            :name1="'Suvin Kodituwakku'"
            :img1="require('../assets/img/team/dewni.jpg')"
            :cardType="'co-host'"
            :twitter="'https://twitter.com/suvin'"
            :linkedin="'https://linkedin.com/in/suvin'"
            :github="'https://github.com/suvin'"
          />
          <TeamCard
            :uni="'Uthpala Nethmini'"
            :name1="'Uthpala Nethmini'"
            :img1="require('../assets/img/team/ishan.jpg')"
            :cardType="'co-host'"
            :twitter="'https://twitter.com/uthpala'"
            :linkedin="'https://linkedin.com/in/uthpala'"
            :github="'https://github.com/uthpala'"
          />
          <TeamCard
            :uni="'Dilshan Wijerathne'"
            :name1="'Dilshan Wijerathne'"
            :img1="require('../assets/img/team/oshani.jpg')"
            :cardType="'co-host'"
            :twitter="'https://twitter.com/dilshan'"
            :linkedin="'https://linkedin.com/in/dilshan'"
            :github="'https://github.com/dilshan'"
          />
        </div>
      </section>

      <!-- Organizers Section -->
      <section class="team-section">
        <h2 class="title is-3 text-white mt-3">Organizers</h2>
        <hr class="section-line" />
        <div class="team-row">
          <TeamCard
            :uni="'Subasri Rajendran'"
            :name1="'Subasri Rajendran'"
            :img1="require('../assets/img/team/thilosha.jpg')"
            :cardType="'organizer'"
            :twitter="'https://twitter.com/subasri'"
            :linkedin="'https://linkedin.com/in/subasri'"
            :github="'https://github.com/subasri'"
          />
          <TeamCard
            :uni="'Ruwan Kumar'"
            :name1="'Ruwan Kumar'"
            :img1="require('../assets/img/team/uthpala.jpg')"
            :cardType="'organizer'"
            :twitter="'https://twitter.com/ruwan'"
            :linkedin="'https://linkedin.com/in/ruwan'"
            :github="'https://github.com/ruwan'"
          />
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import TeamCard from "@/components/TeamCard.vue";

export default {
  name: "TeamPage",
  components: {
    NavBar,
    TeamCard,
  },
};
</script>

<style scoped>
.main {
  padding-top: 60px; /* Adjust for navbar height */
}

.team-title {
  margin-top: 20px;
}

.teamcards-container {
  margin: 0 auto;
  max-width: 1200px; /* Adjust max-width for better alignment */
}

.team-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.team-section {
  margin-bottom: 40px;
}

.section-line {
  border: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(128, 0, 128, 0.8),
    rgba(128, 0, 128, 0) 100%
  );
  margin: 10px auto;
  width: 90%; /* Increased width */
}
</style>
