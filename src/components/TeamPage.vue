<template>
  <section class="main">
    <NavBar />
    <br/>
    <br/>
    <!-- <br/> -->
    <section class="teaam-title has-text-centered mt-3 mr-1 ml-1">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        The<span class="text-pink"> Team</span>
      </h1>
<br/>
      <!-- <img
        class="soon-img has-text-centered"
        src="../assets/img/team_soon.png"
        alt=""
      />
      <h1 class="title is-2 text-white">Will be announced soon!</h1> -->
<br/>
      <section class="teamcards mr-2 ml-2">
        <div class="row">
          <div class="columns">
            <div class="column is-4"></div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Sri Lanka Local Lead'"
                :name1 = "'Anupa Kulathunga '"
                :img1 = "require('../assets/img/team/anupa.jpg')" 
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
                :name1 = "'Suvin Kodituwakku'"
                :img1 = "require('../assets/img/team/suvin.jpg')"
                :name2 = "'Uthpala Nethmini'"
                :img2 = "require('../assets/img/team/uthpala.jpg')" 
                :name3 = "'Dilshan Wijerathne'"
                :img3 = "require('../assets/img/team/dilshan.jpg')" 
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
                :name1 = "'Supul Edirisinghe'"
                :img1 = "require('../assets/img/team/supul.jpg')" 
                :name2 = "'Pulathisi Navarathne'"
                :img2 = "require('../assets/img/team/pulathisi.jpg')" 
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Colombo'"
                :name1 = "'Manul Madara'"
                :img1 = "require('../assets/img/team/manul.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Open University of Sri Lanka'"
                :name1 = "'Ishan Pramuditha'"
                :img1 = "require('../assets/img/team/ishan.jpg')" 
                :name2 = "'Akeela Bhanu'"
                :img2 = "require('../assets/img/team/akeela.jpg')" 
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
                :uni = "'University of Moratuwa '"
                :name1 = "'Warnitha Nipun'"
                :img1 = "require('../assets/img/team/warnitha.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Sabaragamuwa University of Sri Lanka'"
                :name1 = "'Thilosha Nipunajith'"
                :img1 = "require('../assets/img/team/thilosha.jpg')" 
                :name2 = "'Kavinda Wishwajith'"
                :img2 = "require('../assets/img/team/kavinda.jpg')" 
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Sri Lanka Institute of Information Technology'"
                :name1 = "'Thimira Chandrasekara'"
                :img1 = "require('../assets/img/team/thimira.jpg')"
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
                :name1 = "'Malsha Rajapaksha'"
                :img1 = "require('../assets/img/team/malsha.jpg')" 
                :name2 = "'Rashane Pintoe'"
                :img2 = "require('../assets/img/team/rashane.jpg')"
                :cardType = "'double'"
              />  
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'University of Sri Jayawardanapura'"
                :name1 = "'Gayanath Shanuka'"
                :img1 = "require('../assets/img/team/gayanath.jpg')" 
                :cardType = "'single'"
              />          
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Sri Lanka Technological Campus'"
                :name1 = "'Hassan Salih'"
                :img1 = "require('../assets/img/team/hassan.jpg')" 
                :name2 = "'Pasindu Hatharasinghe'"
                :img2 = "require('../assets/img/team/pasindu.jpg')" 
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
                :uni = "'Wayamba University of Sri Lanka'"
                :name1 = "'Thisara Herath'"
                :img1 ="require('../assets/img/team/thisara.jpg')" 
                :name2 = "'Vidyani Gunarathne'"
                :img2 = "require('../assets/img/team/vidyani.jpg')"
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'Ocean University of SriLanka'"
                :name1 = "'Supun Bandara'"
                :img1 = "require('../assets/img/team/supun.jpg')" 
                :name2 = "'Udula Athukorala'"
                :img2 = "require('../assets/img/team/udula.jpg')" 
                :cardType = "'double'"
              />
            </div> 
           <div class="column is-4">
              <TeamCard
                :uni = "'University of Ruhuna'"
                :name1 = "'Vidura Wijekoon'"
                :img1 = "require('../assets/img/team/wijekoon.jpg')" 
                :name2 = "'Sajini Karunaratne'"
                :img2 ="require('../assets/img/team/sajini.jpg')" 
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
                :uni = "'SEDS Juniors'"
                :name1 = "'Dedunu Shanika'"
                :img1 =  "require('../assets/img/team/dedunu.jpg')" 
                :name2 = "'Tharindu Weerasingha'"
                :img2 = "require('../assets/img/team/tharindu.jpg')"
                :cardType = "'double'"
              />
            </div>
            <div class="column is-4">
              <TeamCard
                :uni = "'South Eastern University of Sri Lanka'"
                :name1 = "'Ganesha Nanayakkara'"
                :img1 = "require('../assets/img/team/ganesha.jpg')" 
                :cardType = "'single'"
              />
            </div> 
           <div class="column is-4">
              <TeamCard
                :uni = "'University of Kelaniya '"
                :name1 = "'Geshan Shanuka'"
                :img1 =  "require('../assets/img/team/shanuka.jpg')" 
                :name2 = "'Lahiru Chalana'"
                :img2 = "require('../assets/img/team/lahiru.jpg')"
                :cardType = "'double'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <!-- <div class="row mt-2">
          <div class="columns">
            <div class="column is-4"></div>
            <div class="column is-4">

            </div>
            <div class="column is-4"></div>
          </div>
        </div> -->

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

.soon-img {
  width: 550px;
  /* was 600px */
}

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
