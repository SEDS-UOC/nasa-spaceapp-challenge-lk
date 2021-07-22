<template>
  <footer class="footer pb-2">
    <div class="container">
        <div class="columns">
            <div class="column is-3 has-text-left footer-col">
                <h1 class="title is-4 text-pink">Useful Links</h1>
                <ul>
                    <li><a href="https://www.spaceappschallenge.org/" target="__blank">Space Apps Challenge</a></li>
                    <li><a href="https://covid19.spaceappschallenge.org/" target="__blank">Space Apps COVID-19</a></li>
                    <li><a href="https://sa-2019.s3.amazonaws.com/media/documents/Space_Apps_2020_Participant_FAQ.pdf" target="__blank">Participant FAQ</a></li>
                    <li><a href="https://covid19.spaceappschallenge.org/bootcamp/" target="__blank">CODIV-19 Bootcamp</a></li>
                    <li><a href="https://2019.spaceappschallenge.org/live-stream" target="__blank">2019 Live Stream</a></li>
                    <li><a href="https://sa-2019.s3.amazonaws.com/media/documents/SPACEAPPS_THENUMBERs_2019_DIGITALBROCHURE_1.pdf" target="__blank">2019 Brochure</a></li>
                </ul>
            </div>
            <div class="column is-3 has-text-left footer-col">
                <h1 class="title is-4 text-pink">Resources</h1>
                <ul>
                     <li><a href="https://sa-2019.s3.amazonaws.com/media/documents/Space_Apps_2019_Judging_and_Awards.pdf" target="__blank">2019 Judging and Awards</a></li>
                      <li><a href="https://www.spaceappschallenge.org/documents/330/Space_Apps_2019_Team_Formation_Guide_3U1C7DO.pdf" target="__blank">2019 Team Formation Guide</a></li>
                       <li><a href="https://www.spaceappschallenge.org/documents/192/Space_Apps_FAQ_2019_.pdf" target="__blank">2019 FAQ</a></li>
                        <li><a href="https://www.spaceappschallenge.org/documents/331/2019_Submission_Guide_K5vHLAH.pdf" target="__blank">Space Apps Challenge</a></li>

                </ul>
            </div>
            <div class="column is-3 has-text-left footer-col">
                <h1 class="title is-4 text-pink">Our Social Media</h1>
                <ul>
                    <li><i class="sm-icon fab fa-facebook-f"></i><a href="https://www.facebook.com/nasaspaceappscolombo/  " target="__blank">Facebook</a></li>
                    <li><i class="sm-icon fab fa-instagram"></i><a href="https://www.instagram.com/nasa_spaceapps_colombo?r=nametag" target="__blank">Instagram</a></li>
                    <li><i class="sm-icon fab fa-youtube"></i><a href="https://www.youtube.com/channel/UCTLG4OxFsG0a-TrPlLGwtbw?view_as=subscriber" target="__blank">YouTube</a></li>
                    <li><i class="sm-icon fab fa-twitter"></i><a href="https://twitter.com/SpaceAppsLK" target="__blank">Twitter</a></li>
                    <li><i class="sm-icon fab fa-linkedin"></i><a href="https://www.linkedin.com/company/nasa-space-apps-colombo" target="__blank">LinkedIn</a></li>
                </ul>
            </div>
            <div class="column is-3 has-text-right footer-col">
                <h1 class="title is-4 text-pink">Contact Us</h1>
                <ul>
                    <li><i class="sm-icon fas fa-phone"></i><a href="callto:+94717583299" target="__blank">+94 71 758 3299</a></li>
                    <li><i class="sm-icon fas fa-envelope"></i><a href="mailto:+94717583299" target="__blank">info@spaceappscolombo.org</a></li>
                    <br>
                    <li>SEDS Sri Lanka,</li>
                    <li>Colombo</li>
                </ul>
            </div>
        </div>
    </div>
    <p class="has-text-centered mt-3">Copyright © 2021 SEDS Sri Lanka. All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style scoped>
@import url("../assets/css/style.css");
footer{
    background-color: #040127 !important;
}
.sm-icon{
    margin-right: 10px;
}
a{
    color: #fff !important
}
li:hover, li a:hover{
    color: #760bff !important
}

@media(max-width: 768px){
    .footer-col{
        text-align: center !important;
    }
}
</style>