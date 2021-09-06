<template>
  <section class="main">
    <NavBar />
    <br/>
    <br/>
    <!-- <br/> -->
    <section class="teaam-title has-text-centered mt-3 mr-1 ml-1">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        <span class="text-pink"> Challanges</span>
      </h1>
<br/>
      <!-- <img
        class="soon-img has-text-centered"
        src="../assets/img/team_soon.png"
        alt=""
      />
      <h1 class="title is-2 text-white">Will be announced soon!</h1> -->
<br/>
      <section class="teamcards mr-4 ml-4">
        <!-- <div class="row">
          <div class="columns">
            <div class="column is-4"></div>
            <div class="column is-4">
              <ChallangeCard
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
              <ChallangeCard
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
        </div> -->


        <!-- Team Row -->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <ChallangeCard
                :uni = "'Artfully Illuminated Asteroids'"
                :name1 = "'NASA’s Lucy Mission to the Trojan asteroids will survey eight asteroids in six independent orbits around the Sun to help unravel the history of the solar system. Your challenge is to illustrate the diversity Lucy will explore by creating a work of art in the medium of your choice, including, but not limited to painting, drawing, pottery, sculpture, 2D or 3D computer-generated products, music, film/video, written or spoken word, dance, or textile.'"
                :img1 = "require('../assets/img/challanges/1.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
               <ChallangeCard
                :uni = "'COVID-19: Calculate the Risk'"
                :name1 = "'COVID-19 continues to be a global problem even though vaccination efforts are underway to control its propagation. Your challenge is to use environmental data and other information (such as epidemiological, social, policy, and economic data) to build a smartphone application that provides individualized, geolocated, COVID-19 risk warnings to guide social awareness, response, and health security.'"
                :img1 = "require('../assets/img/challanges/2.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'Discovering Science Connections'"
                :name1 = "'The NASA Science Mission Directorate studies our home planet’s systems while exploring the worlds in our solar system and the elements of the larger universe. Your challenge is to find the connections between the diverse NASA science disciplines and communicate those linkages in an innovative and interesting way to new and diverse audiences.'"
                :img1 = "require('../assets/img/challanges/3.jpg')" 
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
              <ChallangeCard
                :uni = "'Drones and Satellites for Urban Development'"
                :name1 = "'Data from Earth-observing satellites, airborne science platforms, unmanned aerial vehicles (UAVs), and in situ platforms can be used to address development challenges around the world. Your challenge is to use this data to enable local stakeholders to develop more sustainable, disaster-risk resilient, and inclusive urban plans.'"
                :img1 = "require('../assets/img/challanges/4.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'GUI for materials science'"
                :name1 = "'The design of novel alloys via predictive computational modeling is progressing by leaps and bounds, but the numerous open-source tools available for materials science modeling are often difficult to use and interpret. Your challenge is to develop a graphical user interface (GUI) that allows easy and seamless use of these tools.'"
                :img1 = "require('../assets/img/challanges/5.jpg')" 
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'Have seeds will travel!'"
                :name1 = "'A viable food system for long-duration exploration missions does not yet exist, but it will be necessary to maintain crew health and performance. Your challenge is to design a deployable crop production system capable of supporting the nutritional requirements of a crew of 4-6 on a transit mission to Mars and back to Earth.'"
                :img1 = "require('../assets/img/challanges/6.jpg')"
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
              <ChallangeCard
                :uni = "'Identifying risk with science + communities'"
                :name1 = "'Landslides often interfere with the economic development of rural communities. Your challenge is to develop a tool that uses data from NASA satellites and ground-based sources to determine the risk of landslides in rural communities and share the results with local communities and governments.'"
                :img1 = "require('../assets/img/challanges/7.jpg')"
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'Invent Your Own Challenge'"
                :name1 = "'Participants are invited to create their own challenge to tackle, but these are not eligible for Global Judging.'"
                :img1 = "require('../assets/img/challanges/8.jpg')"
                :cardType = "'single'"
              />           
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'Leveraging AI/ML for plastic marine debris'"
                :name1 = "'Marine debris is one of the most pervasive threats to the health of coastal areas, oceans, and waterways. Your challenge is to leverage Artificial Intelligence/Machine Learning to monitor, detect, and quantify plastic pollution and increase our understanding about using these techniques for this purpose.'"
                :img1 = "require('../assets/img/challanges/9.jpg')"
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
              <ChallangeCard
                :uni = "'Lunar Surface Operations: Real-Time Collaboration'"
                :name1 = "'As astronauts collect data on the Moon, NASA and the worldwide scientific community will be documenting and reviewing the information in real time. Your challenge is to create an application to allow NASA flight controllers and the broader scientific community to collaborate and compare notes on lunar mission data as it is collected.'"
                :img1 = "require('../assets/img/challanges/10.jpg')"
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'Mapping Space Trash in Real Time'"
                :name1 = "'The increasing amount of debris orbiting Earth could potentially limit our access to space, impacting not only exploration efforts, but routine aspects of our life on Earth. Your challenge is to develop an open-source geospatial application that displays and locates every known debris object orbiting Earth in real time.'"
                :img1 = "require('../assets/img/challanges/11.jpg')"
                :cardType = "'single'"
              />
            </div> 
           <div class="column is-4">
              <ChallangeCard
                :uni = "'Measuring the Value of Earth Observations'"
                :name1 = "'Information from Earth-observing satellites is used to make decisions that benefit society and the environment, but it can be challenging to document how this information leads to improved outcomes and to measure these improvements. Your challenge is to describe how Earth observations inform a specific decision that improves outcomes for society and propose a strategy for measuring these benefits.'"
                :img1 = "require('../assets/img/challanges/12.jpg')"
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
              <ChallangeCard
                :uni = "'Near-Space Near You!'"
                :name1 = "'Develop a lesson-plan and bill of materials which teach students how to build a low-cost high-altitude balloon capable of reaching near-space.'"
                :img1 = "require('../assets/img/challanges/13.jpg')"
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'Ontologies and Interactive Network Visualizations'"
                :name1 = "'Tens of thousands of NASA datasets are publicly available online, but with so many files available, how can potential users determine those that will meet their needs? Your challenge is to (1) create an ontology to integrate descriptions of disparate NASA data sets, and (2) develop an interactive network visualization to depict relationships among those data sets.'"
                :img1 = "require('../assets/img/challanges/14.jpg')"
                :cardType = "'single'"
              />
            </div> 
           <div class="column is-4">
              <ChallangeCard
                :uni = "'Planetary Lander Video Game'"
                :name1 = "'NASA’s near-term space exploration plans include returning to the Moon and future plans include landing a crew on Mars. Your challenge is to create an inspiring and educational video game or interactive 3D model to simulate a landing on the Moon or Mars!'"
                :img1 = "require('../assets/img/challanges/15.jpg')"
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
              <ChallangeCard
                :uni = "'Seeing the unseeable -  Viewing Bugs from Space'"
                :name1 = "'Our lives hinge on the wellbeing of insects; at the same time, insect biodiversity is disproportionately affected by human actions. Your challenge is to develop innovative ways to advance our ability to detect insect life, track and predict change over time, and communicate that information to scientists and society to combat the loss of insect biodiversity.'"
                :img1 = "require('../assets/img/challanges/16.jpg')"
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'Ontologies and Interactive Network Visualizations'"
                :name1 = "'Marginalized communities are often disproportionately impacted by environmental hazards. Your challenge is to use NASA\'s Earth observation data to: 1) identify regions where such environmental injustice occurs, and 2) design implementable solutions that enable equitable outcomes.'"
                :img1 = "require('../assets/img/challanges/17.jpg')"
                :cardType = "'single'"
              />
            </div> 
           <div class="column is-4">
              <ChallangeCard
                :uni = "'Space Quest: The Game'"
                :name1 = "'Your challenge is to create a game that teaches players about space from the perspective of the architectures and challenges of exploration. The setting can be the past through to the future with destinations in our solar system and beyond.'"
                :img1 = "require('../assets/img/challanges/18.jpg')"
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
              <ChallangeCard
                :uni = "'SuperpowEARTH'"
                :name1 = "'The Earth has many abilities and processes that help keep the Earth and its inhabitants alive. If the Earth had a superpower that could help or possibly eliminate something that harms the planet in general, such as climate change, what would the superpower be? What would the Earth be able to do?'"
                :img1 = "require('../assets/img/challanges/19.jpg')"
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'The Trail to Mars: Can You Keep Your Crew Alive'"
                :name1 = "'Long-distance space travel comes with a multitude of health risks, but it is difficult to imagine the combined effects of these risks, especially for those who are not fluent in NASA jargon. Your challenge is to create an educational game for middle schoolers (approx. ages 10-14) that focuses on keeping an avatar alive and healthy during a voyage from Earth to Mars and back, and that identifies the most difficult challenges and the biggest risks involved in human spaceflight.'"
                :img1 = "require('../assets/img/challanges/20.jpg')"
                :cardType = "'single'"
              />
            </div> 
           <div class="column is-4">
              <ChallangeCard
                :uni = "'Unlocking the Secrets of the Sun'"
                :name1 = "'Many space missions support our understanding of the Sun -- our nearest star -- and its significant impact on our lives here on Earth and on our plans to send human and robotic explorers to the Moon, Mars, and beyond! Your challenge is to develop a method to improve public awareness and understanding of these spacecraft and how the valuable data they provide impacts the way we live, work, and play.'"
                :img1 = "require('../assets/img/challanges/21.jpg')"
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
              <ChallangeCard
                :uni = "'Virtual Planetary Exploration v2.0'"
                :name1 = "'Future astronauts will conduct various activities in space and on or near celestial bodies to help us learn about their mission destinations, Earth, and our universe. Your challenge is to create interactive 3D models of equipment (e.g., planetary geology tools) that future space explorers might use for activities like exploring a planetary surface.'"
                :img1 = "require('../assets/img/challanges/22.jpg')"
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'Warning: Things are heating up!'"
                :name1 = "'Climate change is expected to exacerbate heat-related extremes that impact human health and environmental and ecological systems. Your challenge is to build a tool that uses Earth Observations (EO), crowdsourced data, and models to provide warnings about potential impacts of these events, along with guidance on mitigation measures.'"
                :img1 = "require('../assets/img/challanges/23.jpg')"
                :cardType = "'single'"
              />
            </div> 
           <div class="column is-4">
              <ChallangeCard
                :uni = "'Webb Origami Design Challenge'"
                :name1 = "'NASA\’s James Webb Space Telescope is NASA\'s next premier space science observatory and will fulfill the agency\'s vision to “discover and expand knowledge for the benefit of humanity.” Your challenge is to create origami artwork that looks like the James Webb Space Telescope and showcases Webb as a technological and design marvel using an “arts-meets-science” approach.'"
                :img1 = "require('../assets/img/challanges/24.jpg')"
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
              <ChallangeCard
                :uni = "'What on Earth is Synthetic Aperture Radar?'"
                :name1 = "'Upcoming space missions will provide an abundance of Synthetic Aperture Radar data; however, the tremendous impact this data can have will only be realized if the public understands the data and its potential. Your challenge is to create a 2-5 min video explaining Synthetic Aperture Radar technology to the public in your own language with English subtitles.'"
                :img1 = "require('../assets/img/challanges/25.jpg')"
                :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                :uni = "'When Light Curves Throw Us Curve Balls'"
                :name1 = "'From Earth, the Trojan asteroids appear to be single points of light; their light curves—the way their observed brightness varies with time—are one of the few clues available to scientists working to determine the shapes of these distant bodies. Your challenge is to design a tool that allows users to explore how the shape of an asteroid affects the appearance of its light curve.'"
                :img1 = "require('../assets/img/challanges/26.jpg')"
                :cardType = "'single'"
              />
            </div> 
           <div class="column is-4">
              <ChallangeCard
                :uni = "'You Are My Sunshine'"
                :name1 = "'NASA produces a variety of surface solar and meteorological data parameters that are useful to commercial renewable energy and sustainable building ventures, but this information is not easily accessible to the typical homeowner. Your challenge is to develop a mobile application to access the information on NASA’s Prediction of Worldwide renewable Energy Resources (POWER) web services portal and provide useful information about sunshine to the general public.'"
                :img1 = "require('../assets/img/challanges/27.jpg')"
                :cardType = "'single'"
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
        <br/>
        <br/>
        <br/>
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
