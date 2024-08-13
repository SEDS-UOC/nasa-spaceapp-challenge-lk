<template>
  <footer class="footer pb-2">
    <div class="container">
      <div class="columns">
        <div class="column is-3 has-text-left footer-col">
          <h1 class="title is-4 text-pink">Useful Links</h1>
          <ul>
            <li>
              <a
                href="https://www.spaceappschallenge.org/"
                target="_blank"
                rel="noopener noreferrer"
                >Space Apps Challenge</a
              >
            </li>
            <li>
              <a
                href="https://sa-2019.s3.amazonaws.com/media/documents/NASAs_Open_Data_Universe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >NASA's Open Data Universe</a
              >
            </li>
            <li>
              <a
                href="https://covid19.spaceappschallenge.org/"
                target="_blank"
                rel="noopener noreferrer"
                >Space Apps COVID-19</a
              >
            </li>
            <li>
              <a
                href="https://www.spaceappschallenge.org/resources/faq/"
                target="_blank"
                rel="noopener noreferrer"
                >Participant FAQ</a
              >
            </li>
            <li>
              <a
                href="https://covid19.spaceappschallenge.org/bootcamp/"
                target="_blank"
                rel="noopener noreferrer"
                >COVID-19 Bootcamp</a
              >
            </li>
            <li>
              <a
                href="https://2019.spaceappschallenge.org/live-stream"
                target="_blank"
                rel="noopener noreferrer"
                >2019 Live Stream</a
              >
            </li>
          </ul>
        </div>
        <div class="column is-3 has-text-left footer-col">
          <h1 class="title is-4 text-pink">Resources</h1>
          <ul>
            <li>
              <a
                href="https://www.spaceappschallenge.org/resources/space-apps-2024-virtual-bootcamp/"
                target="_blank"
                rel="noopener noreferrer"
                >2024 Virtual Bootcamp</a
              >
            </li>
            <li>
              <a
                href="https://sa-2019.s3.amazonaws.com/media/documents/Space_Apps_2024_Judging_and_Awards_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >2024 Judging and Awards</a
              >
            </li>
            <li>
              <a
                href="https://sa-2019.s3.amazonaws.com/media/documents/Space_Apps_2024_Team_Formation_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >2024 Team Formation Guide</a
              >
            </li>
            <li>
              <a
                href="https://www.spaceappschallenge.org/resources/faq/"
                target="_blank"
                rel="noopener noreferrer"
                >2024 FAQ</a
              >
            </li>
            <li>
              <a
                href="https://sa-2019.s3.amazonaws.com/media/documents/Space_Apps_2024_Project_Submission_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >2024 Project Submission Guide</a
              >
            </li>
            <li>
              <a
                href="https://sa-2019.s3.amazonaws.com/media/documents/Space_Apps_2024_Project_Demo_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >2024 Project Demo Guide</a
              >
            </li>
          </ul>
        </div>
        <div class="column is-3 has-text-left footer-col">
          <h1 class="title is-4 text-pink">Our Social Media</h1>
          <ul class="social-media">
            <li>
              <i class="sm-icon fab fa-facebook-f"></i>
              <a
                href="https://www.facebook.com/nasaspaceappscolombo/"
                target="_blank"
                rel="noopener noreferrer"
                >Facebook</a
              >
            </li>
            <li>
              <i class="sm-icon fab fa-instagram"></i>
              <a
                href="https://www.instagram.com/nasa_spaceapps_colombo/?r=nametag"
                target="_blank"
                rel="noopener noreferrer"
                >Instagram</a
              >
            </li>
            <li>
              <i class="sm-icon fab fa-youtube"></i>
              <a
                href="https://www.youtube.com/channel/UCTLG4OxFsG0a-TrPlLGwtbw?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
                >YouTube</a
              >
            </li>
            <li>
              <i class="sm-icon fab fa-twitter"></i>
              <a
                href="https://twitter.com/SpaceAppsLK"
                target="_blank"
                rel="noopener noreferrer"
                >Twitter</a
              >
            </li>
            <li>
              <i class="sm-icon fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/company/nasa-space-apps-colombo"
                target="_blank"
                rel="noopener noreferrer"
                >LinkedIn</a
              >
            </li>
          </ul>
        </div>
        <div class="column is-3 has-text-left footer-col">
          <h1 class="title is-4 text-pink">Contact Us</h1>
          <ul class="contact-info">
            <li>
              <i class="sm-icon fas fa-phone"></i>
              <a
                href="tel:+94712068707"
                target="_blank"
                rel="noopener noreferrer"
                >+94 71 206 8707</a
              >
            </li>
            <li>
              <i class="sm-icon fas fa-envelope"></i>
              <a
                href="mailto:info@spaceappscolombo.org"
                target="_blank"
                rel="noopener noreferrer"
                >info@spaceappscolombo.org</a
              >
            </li>
            <li>SEDS Sri Lanka,</li>
            <li>Colombo</li>
          </ul>
        </div>
      </div>
    </div>
    <p class="has-text-centered mt-3">
      Copyright © 2024 SEDS Sri Lanka. All Rights Reserved
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@import url("../assets/css/style.css");

footer {
  background-color: #020202 !important; /* Darker background color for contrast */
  color: #fff; /* Ensure text is visible on dark background */
}

.sm-icon {
  margin-right: 10px;
  font-size: 1.5rem; /* Adjust icon size for better visibility */
}

a {
  color: #fff !important;
  transition: color 0.3s ease; /* Smooth color transition */
}

a:hover {
  color: #760bff !important;
}

ul {
  padding: 0;
  list-style: none; /* Remove default list styles */
}

li {
  margin-bottom: 10px; /* Space out list items */
}

.footer-col h1 {
  margin-bottom: 20px; /* Space out section titles */
}

@media (max-width: 768px) {
  .footer-col {
    text-align: center !important;
    margin-bottom: 20px; /* Space out columns on small screens */
  }
}
</style>
