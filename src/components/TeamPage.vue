<template>
  <section class="main">
    <NavBar />
    <section class="teaam-title has-text-centered mt-3 mr-1 ml-1">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        The<span class="text-pink"> Team</span>
      </h1>
      <section class="teamcards">
        <div class="row">
          <div class="columns">
            <div class="column is-4"></div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Sri Lanka Local Lead'"
                :name1 = "'Thilan Harshana'"
                :img1 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :name2 = "null"
                :img2 = "null"
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4"></div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-3"></div>
            <div class="column is-6">
              <TeamCard
                :uni = "'Co-Hosts'"
                :name1 = "'Suvin Nimnaka'"
                :img1 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :name2 = "'Suvin Nimnaka'"
                :img2 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :name3 = "'Suvin Nimnaka'"
                :img3 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :cardType = "'triple'"
              />
            </div>
            <div class="column is-3"></div>
          </div>
        </div>


        <!-- Team Row -->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Colombo'"
                :name1 = "'Suvin Nimnaka'"
                :img1 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :name2 = "'John Cena'"
                :img2 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Colombo'"
                :name1 = "'Suvin Nimnaka'"
                :img1 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :name2 = "'John Cena'"
                :img2 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Colombo'"
                :name1 = "'Suvin Nimnaka'"
                :img1 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :name2 = "'John Cena'"
                :img2 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :cardType = "'double'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->



      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "TeamPage",
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
</style>
