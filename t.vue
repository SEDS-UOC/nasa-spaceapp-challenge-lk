<template>
  <section class="main">
    <NavBar />
    <br />
    <br />

    <section class="teaam-title has-text-centered mt-3 mr-1 ml-1">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        International<span class="text-pink"> Awards 2021</span>
      </h1>

      <section class="winnercards">
        <div class="row mt-2 ml-4 mr-4">
          <div class="columns ">
            <div class="column is-4">
              <WinnerCard
                :uni="'Global Nominee'"
                :name1="'Astroseed'"
                :img1="require('../assets/img/winners-21/Astroseed.jpg')"
                :cardType="'single'"
              />
            </div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Global Nominee'"
                :name1="'Trash-X'"
                :img1="require('../assets/img/winners-21/trash-X.jpg')"
                :cardType="'single'"
              />
            </div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Global Nominee'"
                :name1="'Cifra'"
                :img1="require('../assets/img/winners-21/cifra.jpg')"
                :cardType="'single'"
              />
            </div>
          </div>
        </div>
      </section>

      <div class="row mt-4"></div>
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        Local<span class="text-pink"> Awards 2021</span>
      </h1>

      <section class="WinnerCards">
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni="'Best use of Science'"
                :name1="'Team Trash-X'"
                :img1="require('../assets/img/winners-21/trash-X.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Best use of Data'"
                :name1="'Team Compass'"
                :img1="require('../assets/img/winners-21/compass.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni="'Best use of Technology'"
                :name1="'Static Wave'"
                :img1="require('../assets/img/winners-21/static_wave.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Galactic Impact Award'"
                :name1="'Little Seeker'"
                :img1="require('../assets/img/winners-21/little_seeker.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni="'Best Mission Concept'"
                :name1="'Team Astroseed'"
                :img1="require('../assets/img/winners-21/Astroseed.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Most Inspirational Award'"
                :name1="'Dasa Games'"
                :img1="require('../assets/img/winners-21/dasa_games.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni="'Best Story Telling Award'"
                :name1="'Team Argonauts'"
                :img1="require('../assets/img/winners-21/argonauts.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Global Connection Award'"
                :name1="'Fire Birds '"
                :img1="require('../assets/img/winners-21/fire_birds.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni="'Art and Technology Award'"
                :name1="'Team Aquila'"
                :img1="require('../assets/img/winners-21/aquila.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Local Impact Award'"
                :name1="'Team Cifra'"
                :img1="require('../assets/img/winners-21/cifra.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>
          </div>
        </div>
      </section>
    </section>

    <section class="teaam-title has-text-centered mt-3 mr-1 ml-1">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        International<span class="text-pink"> Awards 2020</span>
      </h1>

      <section class="winnercards">
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni="'Global Nominee'"
                :name1="'Space Designers'"
                :img1="require('../assets/img/winners/Spacedesigners.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Global Nominee'"
                :name1="'Space Hunters'"
                :img1="require('../assets/img/winners/Spacehunters.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>
          </div>
        </div>
      </section>

      <div class="row mt-4"></div>
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        Local<span class="text-pink"> Awards 2020</span>
      </h1>

      <section class="WinnerCards">
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni="'Create Catogory'"
                :name1="'Team Compass'"
                :img1="require('../assets/img/winners/compass.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Confront Catogory'"
                :name1="'Team WRC'"
                :img1="require('../assets/img/winners/wrc.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni="'Connect Catogory'"
                :name1="'Team Zeis'"
                :img1="require('../assets/img/winners/zeis.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Observe Catogory'"
                :name1="'Hat Statics'"
                :img1="require('../assets/img/winners/hats.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni="'Inform Catogory'"
                :name1="'A_Better Future'"
                :img1="require('../assets/img/winners/Abetterfu.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni="'Sustain Catogory'"
                :name1="'Colombo GSD'"
                :img1="require('../assets/img/winners/clmbgsd.jpg')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-1"></div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4"></div>
            <div class="column is-4">
              <WinnerCard
                :uni="'Invent Your Own Challenge'"
                :name1="'Angry Bird'"
                :img1="require('../assets/img/winners/Angrybrd.png')"
                :cardType="'single'"
              />
            </div>
            <div class="column is-4"></div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "HallOfFame",
};
</script>

<style scoped>
@import url("../assets/css/style.css");
.row {
  flex-direction: row;
}
.teamcards {
  display: flex;
  flex-direction: column;
}
.hvr-underline-from-center:before {
  margin-top: 5px;
  background-color: #760bff;
}
</style>
