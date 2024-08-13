<template>
  <section class="section-block has-text-centered">
    <div class="row">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        Our<span class="text-pink"> Sponsors</span>
      </h1>
    </div>
    <div class="row">
      <div class="columns">
        <div class="column has-text-centered">
          <h1 class="title is-3 text-pink">Main Sponsor</h1>
          <div class="img-container">
            <img
              class="sponsor-img"
              src="../assets/img/sponsors/AmericanCenter.jpg"
              alt="American Center"
            />
            <div class="middle">
              <div class="text">
                <h2 class="text-title">American Center</h2>
                <p class="text-description">
                  The American Center in Colombo provides a space for cultural
                  and educational exchange.
                </p>
                <a
                  class="text-white btn-link"
                  href="https://lk.usembassy.gov/education-culture/american-spaces/american-center-colombo/"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Add more sponsor sections here -->
        <div class="column has-text-centered">
          <h1 class="title is-3 text-pink">Secondary Sponsor</h1>
          <div class="img-container">
            <img
              class="sponsor-img"
              src="../assets/img/sponsors/AmericanCenter.jpg"
              alt="Example Sponsor"
            />
            <div class="middle">
              <div class="text">
                <h2 class="text-title">Example Sponsor</h2>
                <p class="text-description">
                  Description of the example sponsor goes here. More details
                  about their support.
                </p>
                <a class="text-white btn-link" href="#" target="_blank">
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Sponsors",
};
</script>

<style scoped>
@import url("../assets/css/style.css");

.img-container {
  position: relative;
  display: inline-block; /* Ensure the container is only as wide as its content */
}

.sponsor-img {
  height: 180px;
  width: auto; /* Maintain aspect ratio */
  transition: opacity 0.5s ease;
}

.img-container:hover .sponsor-img {
  opacity: 0.5; /* Adjusted opacity to make the image partially visible */
}

.middle {
  transition: opacity 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Cover the width of the image */
  height: 100%; /* Cover the height of the image */
  backdrop-filter: blur(8px); /* Blurs the background */
  background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent background */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.img-container:hover .middle {
  opacity: 1;
}

.text {
  border-radius: 10px;
  color: white;
  font-size: 14px; /* Slightly larger font size for readability */
  padding: 12px 24px; /* Padding to match the new font size */
  max-width: 90%; /* Increased width to allow more text visibility */
  box-sizing: border-box; /* Include padding in width calculations */
}

.text-title {
  font-size: 18px; /* Adjusted title size */
  margin-bottom: 6px; /* Spacing below the title */
}

.text-description {
  font-size: 14px; /* Adjusted description size */
  margin-bottom: 10px; /* Increased spacing below the description */
}

.btn-link {
  font-size: 14px; /* Adjusted button text size */
  padding: 8px 16px; /* Adjusted button padding */
  background-color: #c54da0; /* Button background color (pink) */
  border-radius: 5px; /* Rounded button corners */
  text-decoration: none; /* Remove underline from link */
}
</style>
