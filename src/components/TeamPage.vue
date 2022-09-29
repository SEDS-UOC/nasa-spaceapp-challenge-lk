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
							 :name1 = "'Uthpala Nethmini'"
							 :img1 = "require('../assets/img/team/uthpala.jpg')"
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
							  :name1 = "'Thilosha Nipunajith'"
							  :img1 = "require('../assets/img/team/thilosha.jpg')"
							  :name2 = "'Hassan Salih'"
							  :img2 = "require('../assets/img/team/hassan.jpg')"
							  :name3 = "'Kings Perory'"
							  :img3 = "require('../assets/img/team/kings.jpg')"
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
							  :name1 = "'Yashika Nipuni'"
							  :img1 = "require('../assets/img/team/yashika.jpg')"
							  :name2 = "'Ravindya Parami'"
							  :img2 = "require('../assets/img/team/ravindya.jpg')"
							  :cardType = "'double'"
              />
						</div>
						<div class="column is-4">
							<TeamCard
							  :uni = "'University of Colombo'"
							  :name1 = "'Saif Humaid'"
							  :img1 = "require('../assets/img/team/saif.jpg')"
							  :name2 = "'Fathima Zahra'"
							  :img2 = "require('../assets/img/team/zahra.jpg')"
							  :name3 = "'Dewni Jithara'"
							  :img3 = "require('../assets/img/team/dewni.jpg')"
							  :cardType = "'triple'"
              />
						</div>
						<div class="column is-4">
							<TeamCard
							  :uni = "'Open University of Sri Lanka'"
							  :name1 = "'Mohmmed Razsul'"
							  :img1 = "require('../assets/img/team/razsul.jpg')"
							  :name2 = "'Thathsara Dilan'"
							  :img2 = "require('../assets/img/team/thathsara.jpg')"
							  :cardType = "'double'"
              />
						</div>
					</div>
				</div>
				<!-- End of Team Row -->

				<!-- Team Row -->
				<div class="row mt-2">
					<div class="columns">
						<!--   <div class="column is-4">
              <TeamCard
                :uni = "'University of Moratuwa '"
                :name1 = "'Warnitha Nipun'"
                :img1 = "require('../assets/img/team/warnitha.jpg')" 
                :cardType = "'single'"
              />
            </div> -->
						<div class="column is-4">
							<TeamCard
							  :uni = "'Sabaragamuwa University of Sri Lanka'"
							  :name1 = "'Dilan Fernando'"
							  :img1 = "require('../assets/img/team/dilan.jpg')"
							  :name2 = "'Malmi Weerasekara'"
							  :img2 = "require('../assets/img/team/malmi.jpg')"
							  :cardType = "'double'"
                />
						</div>
						<div class="column is-4">
							<TeamCard
							  :uni = "'Sabaragamuwa University of Sri Lanka'"
							  :name1 = "'Ishan Randika'"
							  :img1 = "require('../assets/img/team/ishan.jpg')"
							  :name2 = "'Rideevitage Oshani'"
							  :img2 = "require('../assets/img/team/oshani.jpg')"
							  :cardType = "'double'"
              />
						</div>
						<div class="column is-4">
							<TeamCard
							  :uni = "'Sri Lanka Institute of Information Technology'"
							  :name1 = "'Fahim Fuard'"
							  :img1 = "require('../assets/img/team/fahim.jpg')"
							  :cardType = "'single'"
              />
						</div>
					</div>
				</div>
				<!-- End of Team Row -->

				<!-- Team Row -->
				<div class="row mt-2">
					<div class="columns">
						<!--           <div class="column is-4">
              <TeamCard
                :uni = "'NSBM Green University'"
                :name1 = "'Malsha Rajapaksha'"
                :img1 = "require('../assets/img/team/malsha.jpg')" 
                :name2 = "'Rashane Pintoe'"
                :img2 = "require('../assets/img/team/rashane.jpg')"
                :cardType = "'double'"
              />  
            </div> -->
						<div class="column is-4">
							<TeamCard
							  :uni = "'University of Sri Jayawardanapura'"
							  :name1 = "'Nethmi Muthugala'"
							  :img1 = "require('../assets/img/team/nethmi.jpg')"
							  :cardType = "'single'"
              />
						</div>
						<div class="column is-4">
							<TeamCard
							  :uni = "'Sri Lanka Technological Campus'"
							  :name1 = "'Uvindu Abeysinghe'"
							  :img1 = "require('../assets/img/team/kings.jpg')"
							  :cardType = "'single'"
              />
						</div>
						<div class="column is-4">
							<TeamCard
							  :uni = "'Ocean University of SriLanka'"
							  :name1 = "'Supun Bandara'"
							  :img1 = "require('../assets/img/team/supun.jpg')"
							  :cardType = "'single'"
              />
						</div>
					</div>
				</div>
				<!-- End of Team Row -->

				<!-- Team Row -->
				<div class="row mt-2">
					<div class="columns">

						<!--         <div class="column is-4">
              <TeamCard
                :uni = "'Wayamba University of Sri Lanka'"
                :name1 = "'Thisara Herath'"
                :img1 ="require('../assets/img/team/thisara.jpg')" 
                :name2 = "'Vidyani Gunarathne'"
                :img2 = "require('../assets/img/team/vidyani.jpg')"
                :cardType = "'double'"
              />
            </div> -->

						<div class="column is-4">
							<TeamCard
							  :uni = "'SEDS Sri Lanka'"
							  :name1 = "'Sanjana Attanayake'"
							  :img1 = "require('../assets/img/team/sanjana.jpg')"
							  :cardType = "'single'"
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
							  :name1 = "'Pubudhi Nethmini'"
							  :img1 =  "require('../assets/img/team/nethmini.jpg')"
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
							  :uni = "'SEDS Juniors'"
							  :name1 = "'Mohammed Hamdhan'"
							  :img1 =  "require('../assets/img/team/hamdhan.jpg')"
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

			</section>
		</section>
	</section>
</template>

<script>
	export default {
	name: "TeamPage",
	};
</script>

<style scoped="">
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
