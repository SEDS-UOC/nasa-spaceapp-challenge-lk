<template>
  <section class="main">
    <NavBar />
    <br/> <br/>
    <section class="teaam-title has-text-centered mt-3 mr-1 ml-1">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        International<span class="text-pink"> Awards</span>
      </h1>

      
      <section class="winnercards">
        
        <div class="row mt-2">
          <div class="columns">
          <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni = "'Global Nominee'"
                :name1 = "'Space Designers'"
                :img1 =  "require('../assets/img/winners/Spacedesigners.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni = "'Global Nominee'"
                :name1 = "'Space Hunters'"
                :img1 =  "require('../assets/img/winners/Spacehunters.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-1"></div>
          </div>
        </div>

      </section>

<div class="row mt-4"></div>
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        Local<span class="text-pink"> Awards</span>
      </h1>

      
      <section class="WinnerCards">
        
        <div class="row mt-2">
          <div class="columns">
          <div class="column is-1"></div>
            <div class="column is-4">
              <WinnerCard
                :uni = "'Create Catogory'"
                :name1 = "'Team Compass'"
                :img1 =  "require('../assets/img/winners/compass.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni = "'Confront Catogory'"
                :name1 = "'Team WRC'"
                :img1 =  "require('../assets/img/winners/wrc.jpg')" 
                :cardType = "'single'"
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
                :uni = "'Connect Catogory'"
                :name1 = "'Team Zeis'"
                :img1 =  "require('../assets/img/winners/zeis.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni = "'Observe Catogory'"
                :name1 = "'Hat Statics'"
                :img1 =  "require('../assets/img/winners/hats.jpg')" 
                :cardType = "'single'"
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
                :uni = "'Inform Catogory'"
                :name1 = "'A_Better Future'"
                :img1 =  "require('../assets/img/winners/Abetterfu.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-1"></div>

            <div class="column is-4">
              <WinnerCard
                :uni = "'Sustain Catogory'"
                :name1 = "'Colombo GSD'"
                :img1 =  "require('../assets/img/winners/clmbgsd.jpg')" 
                :cardType = "'single'"
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
                :uni = "'Invent Your Own Challenge'"
                :name1 = "'Angry Bird'"
                :img1 =  "require('../assets/img/winners/Angrybrd.png')" 
                :cardType = "'single'"
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
  name: "WinnersPage",
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
