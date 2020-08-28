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
                :img1 = "require('../assets/img/team/Thilan.png')" 
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
                :name1 = "'Amila Sandun Basnayake'"
                :img1 = "require('../assets/img/team/amila.png')"
                :name2 = "'Anupa Kulathunga'"
                :img2 = "require('../assets/img/team/anupa.png')" 
                :name3 = "'Chenika Thilini'"
                :img3 = "require('../assets/img/team/chenika.png')" 
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
                :uni = "'University of Peredeniya'"
                :name1 = "'Thashmila De silva'"
                :img1 = "require('../assets/img/team/thashmila.png')" 
                :name2 = "'Nirmal Wickramasinghe'"
                :img2 = "require('../assets/img/team/nirmal.png')" 
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Moratuwa'"
                :name1 = "'Uthpala Nethmini'"
                :img1 ="require('../assets/img/team/uthpala.png')" 
                :name2 = "'Vasantharajan Charangan'"
                :img2 = "require('../assets/img/team/charangan.png')" 
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Colombo'"
                :name1 = "'Suvin Nimnaka'"
                :img1 = "'https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4'"
                :name2 = "'Manul Madara'"
                :img2 = "require('../assets/img/team/manul.png')" 
                :cardType = "'double'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <!-- Team Row -->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <TeamCard
                :uni = "'Sabaragamuwa University of Sri Lanka'"
                :name1 = "'Kavinda Wishwajith'"
                :img1 = "require('../assets/img/team/manul.png')" 
                :name2 = "'G.H.D.T.N.Gammanpila'"
                :img2 = "require('../assets/img/team/gammanpila.png')" 
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Open University of Sri Lanka'"
                :name1 = "'Ravindu Balasooriya'"
                :img1 = "require('../assets/img/team/ravindu.png')" 
                :name2 = "'Ishan Pramuditha'"
                :img2 = "require('../assets/img/team/ishan.png')" 
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Ruhuna'"
                :name1 = "'Vidura Wijekoon'"
                :img1 = "require('../assets/img/team/vidura.png')" 
                :name2 = "'Hasitha Gunawardana'"
                :img2 ="require('../assets/img/team/hasitha.png')" 
                :cardType = "'double'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <!-- Team Row -->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Sri Jayawardanapura'"
                :name1 = "'Gayanath Shanuka'"
                :img1 = "require('../assets/img/team/gayanath.png')" 
                :name2 = "'Thilini Dissanayake'"
                :img2 = "require('../assets/img/team/thilini.png')" 
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Kelaniya'"
                :name1 = "'Lahiru Chalana'"
                :img1 = "require('../assets/img/team/lahiru.png')" 
                :name2 = "'K.A.G.Shanuka'"
                :img2 = "require('../assets/img/team/shanuka.png')" 
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Sri Lanka Institute of Information Technology'"
                :name1 = "'Saditha Dissanayake'"
                :img1 = "require('../assets/img/team/saditha.png')" 
                :name2 = "'Thimira Chandrasekara'"
                :img2 = "require('../assets/img/team/thimira.png')"
                :cardType = "'double'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <!-- Team Row -->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Jaffna'"
                :name1 = "'Sarala Shalini'"
                :img1 = "require('../assets/img/team/sarala.png')"
                :name2 = "'Chamod Rajakulathunga'"
                :img2 = "require('../assets/img/team/chamod.png')"
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Wayamba University of Sri Lanka'"
                :name1 = "'Kisal Basuru'"
                :img1 ="require('../assets/img/team/kisal.png')" 
                :name2 = "'S.S.S. Athapaththu'"
                :img2 = "require('../assets/img/team/sss.png')"
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'IESL College of Engineering'"
                :name1 = "'R.M.B.P. Ranaweera'"
                :img1 = "require('../assets/img/team/ranaweera.png')" 
                :cardType = "'single'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <!-- Team Row -->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <TeamCard
                :uni = "'NSBM Green University'"
                :name1 = "'Rashane Pintoe'"
                :img1 = "require('../assets/img/team/rashane.png')" 
                :name2 = "'Malsha Rajapaksha'"
                :img2 = "require('../assets/img/team/malsha.png')" 
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Ocean University of SriLanka'"
                :name1 = "'Udula Athukorala'"
                :img1 = "require('../assets/img/team/udula.png')" 
                :name2 = "'Dilshan Wijerathne'"
                :img2 = "require('../assets/img/team/dilshan.png')" 
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'South Eastern University of Sri Lanka'"
                :name1 = "'Y.M.W.H.M.R.P.J.R.B. Kiridana'"
                :img1 = "require('../assets/img/team/punsisi.png')" 
                :name2 = "'T.M.K.K. Thennakoon'"
                :img2 = "require('../assets/img/team/thennakoon.png')" 
                :cardType = "'double'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4"></div>
            <div class="column is-4">
              <TeamCard
                :uni = "'SEDS Juniors'"
                :name1 = "'Sarah Rizwan'"
                :img1 =  "require('../assets/img/team/sarah.png')" 
                :name2 = "'Kings Perory'"
                :img2 = "require('../assets/img/team/kings.png')"
                :cardType = "'double'"
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
.hvr-underline-from-center:before {
  margin-top: 5px;
  background-color: #760bff;
}
</style>
