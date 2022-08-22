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

<!--2022-->
        <!-- Team Row 1-->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Build a Space Biology Superhero'"
                  :name1 = "'Space exploration involves overcoming numerous challenges: extreme gravity, disrupted sleep and circadian rhythms, limited supplies and access to medical care, etc. Your challenge is to design a platform that allows users to explore space travel stresses, understand how diverse organisms deal with these stresses, and then build a “Space Biology Superhero” by combining features from these organisms.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/F8pdXM2r2yNyr-35-_NoRqEOh_U=/20179/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Calling All Radio Enthusiasts!'"
                  :name1 = "'Data from the amateur radio International Space Station (ISS) broadcast and reception systems and networks of ham radio broadcasters can be utilized for applied Heliophysics research. Your challenge is to develop an application that uses these datasets to construct and display images of Earth’s ionosphere.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/LJo8WpDKyB08bGisGBSqG6-1wrU=/20070/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Can AI Preserve Our Science Legacy?'"
                  :name1 = "'The NASA Technical Report Server (NTRS) includes hundreds of thousands of items containing scientific and technical information (STI) created or funded by NASA. Imagine how difficult it can be to locate desired information in such a large repository! Your challenge is to develop a technique using Artificial Intelligence (AI) to improve the accessibility and discoverability of records in the public NTRS.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/biUVrKqXYNPVcmnwk6-s36aXc0U=/20113/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <!-- Team Row 2-->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Capacity Building Resources Gateway'"
                  :name1 = "'Earth Observations (EO) can help policymakers around the world make more informed decisions to address natural disasters, land management issues, the impacts of climate change, and other environmental issues. However, policymakers and community members first need to develop the capacity (knowledge and skills) to use EO in their work. Your challenge is to create a user-friendly virtual gateway of capacity-building resources that will help professionals of all levels and disciplines find the training they need to apply EO.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/wcBolLNckVjTLkssnUcMJGsKJNk=/20183/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Create Your Own Challenge'"
                  :name1 = "'Participants are invited to create their own challenge to tackle, but these are not eligible for Global Judging.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/Z8AYhhP9YLS3FHWvO8WH1hZ8tCw=/20207/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Creative Data Display with the Parker Solar Probe'"
                  :name1 = "'Several spacecraft, including the Parker Solar Probe, are gathering data about the Sun that will enable us to learn more about solar effects (a.k.a. “space weather”) in space and on Earth. Your challenge is to create an interactive tool to represent this data in a new and inviting way that improves public knowledge and understanding of space weather.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/bfNvSqFIXHbQP28kDtkRa178VkQ=/20180/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <!-- Team Row 3-->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Earth Data Analysis Developers Wanted!'"
                  :name1 = "'Numerous Earth visualization applications use available Earth Observation data to help us understand our planet, but some of these applications could be augmented to be even more useful. Your challenge is to select an existing NASA, Space Apps, or other open source Earth data visualization web application and improve it by incorporating one or more valuable data analysis features.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/Y9i9vVmWupwY8kOTNfHaCbd1uUQ=/20075/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Exploring Venus Together'"
                  :name1 = "'Your challenge is to design an energy storage system that will power a surface lander or rover on the surface of Venus for at least 60 days so that there is a viable energy storage capability there for long-duration exploration missions.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/X01d4EwI1TlgRaQVG5nkk7BiO1U=/20069/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'How Does Climate Change Affect You?'"
                  :name1 = "'Climate change is a universal topic that may affect people all over our planet in different ways. Your challenge is to create a short video that provides factual and educational information about climate change based on where you might be located or experiences you may have encountered.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/kUjC8uSW1BHDk5MWro_IIngnzbQ=/20181/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->


        <!-- Team Row 4-->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'InSAR Change Detectives!'"
                  :name1 = "'Earth scientists would like to use radar signals to observe small deformations of Earth’s surface, but interactions with tropospheric water vapor slow down the radar signal and make it look like the ground is moving. Your challenge is to come up with an algorithm to remove the tropospheric signal from various radar datasets and discern the real ground motion!'"
                  :img1 = "'https://images.spaceappschallenge.org/images/CApfRFU1A6quzJ7e8EkiEa5n11Q=/20117/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Learning Through the Looking Glass'"
                  :name1 = "'NASA’s James Webb Space Telescope is the largest, most powerful, and most complex space science telescope ever built. Your challenge is to develop a game to help people learn about the James Webb Space Telescope’s amazing capabilities.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/TOcZbGj_8mCg9Hkb7FEBm_dtSE4=/20119/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Make a Moonquake Map!'"
                  :name1 = "'When they explored the Moon, NASA’s Apollo astronauts left behind several instruments to collect geophysical data near each Apollo landing site. Your challenge is to develop an app that plots the seismic data these instruments transmitted back to Earth on an interactive 3-D globe.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/z-bskC7M3zTFkd8gJKwlAOrxs4g=/20114/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->


        <!-- Team Row 5-->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Measuring Open Science'"
                  :name1 = "'Across the world, scientists are moving to make research and results available to all, but to evaluate research activities practicing open science we need to measure the relevance and impact of the research to society. Your challenge is to create a new metric to evaluate the effectiveness of open science activities such as sharing of data, software, tools, and results.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/kNd_3uh_1hz845eFnnC3Mr850Qo=/20110/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Nimbus to Now: The History of NASA’s Earth-Observing Missions'"
                  :name1 = "'NASA has a long and successful history of developing, launching, and operating Earth-observing missions that have contributed significantly to our understanding of the planet. Your challenge is to create an engaging multimedia depiction of all NASA’s Earth-observing missions that also demonstrates how the mission set evolved over time to include new technologies and meet science-driven needs.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/Y2j6K_IVJMGpnq4yAuy5uf-1Wwo=/20116/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'On the Way to the Sun'"
                  :name1 = "'On April 28, 2021, during its eighth flyby of the Sun, Parker Solar Probe did what no other human-made object has ever done: it “touched” the Sun—meaning the spacecraft flew through the Sun’s upper atmosphere (the corona) and sampled particles and magnetic fields there. Your challenge is to develop a creative way to tell young audiences the inspiring story of Parker’s record-breaking journey from Earth to the Sun and all the perils it overcame on the way.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/5L1K9jeG5vZA0DwAarlY0Qf_i7g=/20184/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <!-- Team Row 6-->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Outfitting a Mars Habitat: A 3D Print Challenge'"
                  :name1 = "'Imagine you’re an astronaut who has newly arrived on the Red Planet. Your habitat has been pre-constructed for you, but, other than three 3-D printers, it doesn’t have most of the things you need to live and work. Your challenge is to design tools, furniture, and other items to assist you on your one-year mission.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/jto_2tTcqEsI6tqCucr36m1oGss=/20072/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Save the Earth from Another Carrington Event!'"
                  :name1 = "'If a major space weather event like the Carrington Event of 1859 were to occur today, the impacts to society could be devastating. Your challenge is to develop a machine learning algorithm or neural network pipeline to correctly track changes in the peak solar wind speed so it can provide an early warning of the next potential Carrington Event.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/CjU2uX9GF-0Ni22swE2si7HzwZU=/20182/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Take Flight: Making the Most of NASA’s Airborne Data'"
                  :name1 = "'NASA’s airborne campaigns collect high-resolution data to solve specific scientific problems, but these data can be used to study additional topics, especially when combined with other types of data. Your challenge is to create an app that will utilize the data from one of five selected airborne campaigns to educate the public about a problem associated with Earth’s changing climate.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/6_JLtZ0Ogf_zH24VhJ2ESpKFB94=/20197/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <!-- Team Row 7-->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'The Art in Our Worlds'"
                  :name1 = "'NASA is moving its data to the cloud, and Machine Learning/Artificial Intelligence (ML/AI) can offer an innovative means to analyze and use this massive archive of free and open data. Your challenge is to create an application using ML/AI techniques that allows users to input short text phrases, matches that input to NASA science data or imagery, and displays the results for the user in a creative and artistic manner.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/LmwcZZqLIKW7qKcgma60Pn0dxzY=/20077/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Track the Space Station in 3D'"
                  :name1 = "'Applications that track the International Space Station (ISS) are easy to find online, but their features and capabilities vary. Your challenge is to build and publish an open-source web application that tracks the ISS in three dimensions.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/AKRcVJfWSLYoy8VZNeGhNVuuVLM=/20074/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Turning STEM into STEAM'"
                  :name1 = "'A goal of open science is to make scientific information available to all, and original and innovative approaches can be helpful to effectively communicate scientific information to people with different cultural, socioeconomic, and ethnic backgrounds. Your challenge is to develop a creative method that uses the arts to share and explain the design, process, and/or scientific results from a NASA or partner space agency research project to your audience—i.e., develop an approach that combines science, technology, engineering, the arts, and math (STEAM)'"
                  :img1 = "'https://images.spaceappschallenge.org/images/BFM0JHvgT1YNT-1MVh9Hg7Zyj6Q=/20076/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->

        <!-- Team Row 8-->
        <div class="row mt-2">
          <div class="columns">
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Twinkle, Twinkle, Little Star'"
                  :name1 = "'The stars above are constantly changing, but usually these changes are too slow or too faint for the eye to see. Your challenge is to develop a learning tool to teach people about stellar variability and help them understand how dynamic the night sky really is!'"
                  :img1 = "'https://images.spaceappschallenge.org/images/wkR8RCfyF_3bPMJ8f9TAfgW2r7c=/20118/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
            <div class="column is-4">
              <ChallangeCard
                  :uni = "'Visualizing the Jovian System Like Never Before'"
                  :name1 = "'While NASA’s space probe Juno orbits the planet Jupiter and its moons, its visible-light camera, JunoCam, captures dazzling views of the Jovian system in spectacular detail. Your challenge is to create innovative ways to process JunoCam raw images for scientific, artistic, or other fun purposes.'"
                  :img1 = "'https://images.spaceappschallenge.org/images/-0qp1um0Wy3rx1NH6RN7z5qqw-o=/20071/fill-618x348/'"
                  :cardType = "'single'"
              />
            </div>
          </div>
        </div>
        <!-- End of Team Row -->


<!--        2021-->
        <!-- Team Row -->
<!--        <div class="row mt-2">-->
<!--          <div class="columns">-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Artfully Illuminated Asteroids'"-->
<!--                :name1 = "'NASA’s Lucy Mission to the Trojan asteroids will survey eight asteroids in six independent orbits around the Sun to help unravel the history of the solar system. Your challenge is to illustrate the diversity Lucy will explore by creating a work of art in the medium of your choice, including, but not limited to painting, drawing, pottery, sculpture, 2D or 3D computer-generated products, music, film/video, written or spoken word, dance, or textile.'"-->
<!--                :img1 = "require('../assets/img/challanges/1.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--               <ChallangeCard-->
<!--                :uni = "'COVID-19: Calculate the Risk'"-->
<!--                :name1 = "'COVID-19 continues to be a global problem even though vaccination efforts are underway to control its propagation. Your challenge is to use environmental data and other information (such as epidemiological, social, policy, and economic data) to build a smartphone application that provides individualized, geolocated, COVID-19 risk warnings to guide social awareness, response, and health security.'"-->
<!--                :img1 = "require('../assets/img/challanges/2.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Discovering Science Connections'"-->
<!--                :name1 = "'The NASA Science Mission Directorate studies our home planet’s systems while exploring the worlds in our solar system and the elements of the larger universe. Your challenge is to find the connections between the diverse NASA science disciplines and communicate those linkages in an innovative and interesting way to new and diverse audiences.'"-->
<!--                :img1 = "require('../assets/img/challanges/3.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- End of Team Row -->

        <!-- Team Row -->
<!--        <div class="row mt-2">-->
<!--          <div class="columns">-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Drones and Satellites for Urban Development'"-->
<!--                :name1 = "'Data from Earth-observing satellites, airborne science platforms, unmanned aerial vehicles (UAVs), and in situ platforms can be used to address development challenges around the world. Your challenge is to use this data to enable local stakeholders to develop more sustainable, disaster-risk resilient, and inclusive urban plans.'"-->
<!--                :img1 = "require('../assets/img/challanges/4.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'GUI for materials science'"-->
<!--                :name1 = "'The design of novel alloys via predictive computational modeling is progressing by leaps and bounds, but the numerous open-source tools available for materials science modeling are often difficult to use and interpret. Your challenge is to develop a graphical user interface (GUI) that allows easy and seamless use of these tools.'"-->
<!--                :img1 = "require('../assets/img/challanges/5.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Have seeds will travel!'"-->
<!--                :name1 = "'A viable food system for long-duration exploration missions does not yet exist, but it will be necessary to maintain crew health and performance. Your challenge is to design a deployable crop production system capable of supporting the nutritional requirements of a crew of 4-6 on a transit mission to Mars and back to Earth.'"-->
<!--                :img1 = "require('../assets/img/challanges/6.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- End of Team Row -->

        <!-- Team Row -->
<!--        <div class="row mt-2">-->
<!--          <div class="columns">-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Identifying risk with science + communities'"-->
<!--                :name1 = "'Landslides often interfere with the economic development of rural communities. Your challenge is to develop a tool that uses data from NASA satellites and ground-based sources to determine the risk of landslides in rural communities and share the results with local communities and governments.'"-->
<!--                :img1 = "require('../assets/img/challanges/7.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Invent Your Own Challenge'"-->
<!--                :name1 = "'Participants are invited to create their own challenge to tackle, but these are not eligible for Global Judging.'"-->
<!--                :img1 = "require('../assets/img/challanges/8.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Leveraging AI/ML for plastic marine debris'"-->
<!--                :name1 = "'Marine debris is one of the most pervasive threats to the health of coastal areas, oceans, and waterways. Your challenge is to leverage Artificial Intelligence/Machine Learning to monitor, detect, and quantify plastic pollution and increase our understanding about using these techniques for this purpose.'"-->
<!--                :img1 = "require('../assets/img/challanges/9.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- End of Team Row -->

        <!-- Team Row -->
<!--        <div class="row mt-2">-->
<!--          <div class="columns">-->

<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Lunar Surface Operations: Real-Time Collaboration'"-->
<!--                :name1 = "'As astronauts collect data on the Moon, NASA and the worldwide scientific community will be documenting and reviewing the information in real time. Your challenge is to create an application to allow NASA flight controllers and the broader scientific community to collaborate and compare notes on lunar mission data as it is collected.'"-->
<!--                :img1 = "require('../assets/img/challanges/10.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Mapping Space Trash in Real Time'"-->
<!--                :name1 = "'The increasing amount of debris orbiting Earth could potentially limit our access to space, impacting not only exploration efforts, but routine aspects of our life on Earth. Your challenge is to develop an open-source geospatial application that displays and locates every known debris object orbiting Earth in real time.'"-->
<!--                :img1 = "require('../assets/img/challanges/11.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--           <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Measuring the Value of Earth Observations'"-->
<!--                :name1 = "'Information from Earth-observing satellites is used to make decisions that benefit society and the environment, but it can be challenging to document how this information leads to improved outcomes and to measure these improvements. Your challenge is to describe how Earth observations inform a specific decision that improves outcomes for society and propose a strategy for measuring these benefits.'"-->
<!--                :img1 = "require('../assets/img/challanges/12.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- End of Team Row -->

        <!-- Team Row -->
<!--        <div class="row mt-2">-->
<!--          <div class="columns">-->

<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Near-Space Near You!'"-->
<!--                :name1 = "'Develop a lesson-plan and bill of materials which teach students how to build a low-cost high-altitude balloon capable of reaching near-space.'"-->
<!--                :img1 = "require('../assets/img/challanges/13.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Ontologies and Interactive Network Visualizations'"-->
<!--                :name1 = "'Tens of thousands of NASA datasets are publicly available online, but with so many files available, how can potential users determine those that will meet their needs? Your challenge is to (1) create an ontology to integrate descriptions of disparate NASA data sets, and (2) develop an interactive network visualization to depict relationships among those data sets.'"-->
<!--                :img1 = "require('../assets/img/challanges/14.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--           <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Planetary Lander Video Game'"-->
<!--                :name1 = "'NASA’s near-term space exploration plans include returning to the Moon and future plans include landing a crew on Mars. Your challenge is to create an inspiring and educational video game or interactive 3D model to simulate a landing on the Moon or Mars!'"-->
<!--                :img1 = "require('../assets/img/challanges/15.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- End of Team Row -->

        <!-- Team Row -->
<!--        <div class="row mt-2">-->
<!--          <div class="columns">-->

<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Seeing the unseeable -  Viewing Bugs from Space'"-->
<!--                :name1 = "'Our lives hinge on the wellbeing of insects; at the same time, insect biodiversity is disproportionately affected by human actions. Your challenge is to develop innovative ways to advance our ability to detect insect life, track and predict change over time, and communicate that information to scientists and society to combat the loss of insect biodiversity.'"-->
<!--                :img1 = "require('../assets/img/challanges/16.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Space for Change'"-->
<!--                :name1 = "'Marginalized communities are often disproportionately impacted by environmental hazards. Your challenge is to use NASA\'s Earth observation data to: 1) identify regions where such environmental injustice occurs, and 2) design implementable solutions that enable equitable outcomes.'"-->
<!--                :img1 = "require('../assets/img/challanges/17.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--           <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Space Quest: The Game'"-->
<!--                :name1 = "'Your challenge is to create a game that teaches players about space from the perspective of the architectures and challenges of exploration. The setting can be the past through to the future with destinations in our solar system and beyond.'"-->
<!--                :img1 = "require('../assets/img/challanges/18.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- End of Team Row -->

        <!-- Team Row -->
<!--        <div class="row mt-2">-->
<!--          <div class="columns">-->

<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'SuperpowEARTH'"-->
<!--                :name1 = "'The Earth has many abilities and processes that help keep the Earth and its inhabitants alive. If the Earth had a superpower that could help or possibly eliminate something that harms the planet in general, such as climate change, what would the superpower be? What would the Earth be able to do?'"-->
<!--                :img1 = "require('../assets/img/challanges/19.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'The Trail to Mars: Can You Keep Your Crew Alive'"-->
<!--                :name1 = "'Long-distance space travel comes with a multitude of health risks, but it is difficult to imagine the combined effects of these risks, especially for those who are not fluent in NASA jargon. Your challenge is to create an educational game for middle schoolers (approx. ages 10-14) that focuses on keeping an avatar alive and healthy during a voyage from Earth to Mars and back, and that identifies the most difficult challenges and the biggest risks involved in human spaceflight.'"-->
<!--                :img1 = "require('../assets/img/challanges/20.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--           <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Unlocking the Secrets of the Sun'"-->
<!--                :name1 = "'Many space missions support our understanding of the Sun &#45;&#45; our nearest star &#45;&#45; and its significant impact on our lives here on Earth and on our plans to send human and robotic explorers to the Moon, Mars, and beyond! Your challenge is to develop a method to improve public awareness and understanding of these spacecraft and how the valuable data they provide impacts the way we live, work, and play.'"-->
<!--                :img1 = "require('../assets/img/challanges/21.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- End of Team Row -->

        <!-- Team Row -->
<!--        <div class="row mt-2">-->
<!--          <div class="columns">-->

<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Virtual Planetary Exploration v2.0'"-->
<!--                :name1 = "'Future astronauts will conduct various activities in space and on or near celestial bodies to help us learn about their mission destinations, Earth, and our universe. Your challenge is to create interactive 3D models of equipment (e.g., planetary geology tools) that future space explorers might use for activities like exploring a planetary surface.'"-->
<!--                :img1 = "require('../assets/img/challanges/22.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Warning: Things are heating up!'"-->
<!--                :name1 = "'Climate change is expected to exacerbate heat-related extremes that impact human health and environmental and ecological systems. Your challenge is to build a tool that uses Earth Observations (EO), crowdsourced data, and models to provide warnings about potential impacts of these events, along with guidance on mitigation measures.'"-->
<!--                :img1 = "require('../assets/img/challanges/23.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--           <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Webb Origami Design Challenge'"-->
<!--                :name1 = "'NASA\’s James Webb Space Telescope is NASA\'s next premier space science observatory and will fulfill the agency\'s vision to “discover and expand knowledge for the benefit of humanity.” Your challenge is to create origami artwork that looks like the James Webb Space Telescope and showcases Webb as a technological and design marvel using an “arts-meets-science” approach.'"-->
<!--                :img1 = "require('../assets/img/challanges/24.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- End of Team Row -->

        <!-- Team Row -->
<!--        <div class="row mt-2">-->
<!--          <div class="columns">-->

<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'What on Earth is Synthetic Aperture Radar?'"-->
<!--                :name1 = "'Upcoming space missions will provide an abundance of Synthetic Aperture Radar data; however, the tremendous impact this data can have will only be realized if the public understands the data and its potential. Your challenge is to create a 2-5 min video explaining Synthetic Aperture Radar technology to the public in your own language with English subtitles.'"-->
<!--                :img1 = "require('../assets/img/challanges/25.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'When Light Curves Throw Us Curve Balls'"-->
<!--                :name1 = "'From Earth, the Trojan asteroids appear to be single points of light; their light curves—the way their observed brightness varies with time—are one of the few clues available to scientists working to determine the shapes of these distant bodies. Your challenge is to design a tool that allows users to explore how the shape of an asteroid affects the appearance of its light curve.'"-->
<!--                :img1 = "require('../assets/img/challanges/26.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--           <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'You Are My Sunshine'"-->
<!--                :name1 = "'NASA produces a variety of surface solar and meteorological data parameters that are useful to commercial renewable energy and sustainable building ventures, but this information is not easily accessible to the typical homeowner. Your challenge is to develop a mobile application to access the information on NASA’s Prediction of Worldwide renewable Energy Resources (POWER) web services portal and provide useful information about sunshine to the general public.'"-->
<!--                :img1 = "require('../assets/img/challanges/27.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- End of Team Row -->

<!--        <div class="row mt-2">-->
<!--          <div class="columns">-->
<!--            <div class="column is-4"></div>-->
<!--            <div class="column is-4">-->
<!--              <ChallangeCard-->
<!--                :uni = "'Let It Go (Without A Bang)'"-->
<!--                :name1 = "'Letting things go in space, or separating spacecraft parts, is often a violent, high-shock event. Your challenge is to design a mechanical separation device that can cut a parachute reefing line, a bolt for an adapter ring, or a cable, or release two parts from each other smoothly in space without pyrotechnics.'"-->
<!--                :img1 = "require('../assets/img/challanges/28.jpg')"-->
<!--                :cardType = "'single'"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="column is-4"></div>-->
<!--          </div>-->
<!--        </div>-->

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
