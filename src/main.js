import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Collapse } from 'buefy'
import 'buefy/dist/buefy.css'
import VueSweetalert2 from 'vue-sweetalert2';
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'


import NavBar from './components/NavBar.vue';
import Countdown from './components/Countdown.vue'
import Sponsors from './components/Sponsors.vue'
import Partners from './components/Partners.vue'
import Aboutus from './components/Aboutus.vue'
import FAQ from './components/FAQ.vue'
import Contactus from './components/Contactus.vue'
import Footer from './components/Footer.vue'
import TeamCard from './components/TeamCard.vue'
import WinnerCard from './components/WinnerCard.vue'
import TShirt from './components/TShirt.vue'

Vue.use(Collapse);
Vue.use(VueSweetalert2);

//Register Components
Vue.component('NavBar', NavBar);
Vue.component('Countdown', Countdown);
Vue.component('Sponsors', Sponsors);
Vue.component('Partners', Partners);
Vue.component('Aboutus', Aboutus);
Vue.component('FAQ', FAQ);
Vue.component('Contactus', Contactus);
Vue.component('Footer', Footer);
Vue.component('TeamCard', TeamCard);
Vue.component('WinnerCard', WinnerCard);
Vue.component('TShirt', TShirt);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
