<template>
	<section class="section-block has-text-centered">
		<div class="row">
			<h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
				Our<span class="text-pink"> Sponsor</span>
			</h1>
		</div>
		<div class="row">
			<div class="columns">
				<div class="column  has-text-centered">
					<h1 class="title is-3 text-pink">Main Sponsor</h1>
					<div class="img-container">

						<img class="sponsor-img" src="../assets/img/sponsors/AmericanCenter.jpg" alt="American Center" />
							<div class="middle">
								<div class="text">
									<a class="text-white" href="https://lk.usembassy.gov/education-culture/american-spaces/american-center-colombo/" target="_blank">Visit Site</a>
								</div>
								-
							</div>
						</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	// eslint-disable
	export default {
	name: "Sponsors"
	};
</script>

<style scoped="">
	@import url("../assets/css/style.css");
	.img-container{
	position: relative;
	}
	.sponsor-img{
	height: 180px;
	}
	.img-container:hover .sponsor-img{
	opacity: 0.2;
	}
	.middle {
	transition: .5s ease;
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	text-align: center;
	}
	.img-container:hover .middle{
	opacity: 1;
	}
	.text {
	border-radius: 10px;
	background-color: #c54da0;
	color: white;
	font-size: 16px;
	padding: 16px 32px;
	}
</style>
