<template>
  <section>
      <div class="banner has-text-centered">
          <div class="titlebox">
            <div class="row"><img class="logos" src="../assets/img/bannerlogos.png" alt=""></div>
            <h1 class="title is-1 text-white mb-0 title-main">Space Apps Challenge 2020</h1>
            <h2 class="title is-2 text-white">Sri Lanka</h2>
            <!-- <h3 class="title is-3 mt-2 text-white">[ 2nd to 4th October 2020 ]</h3> -->
            <vue-typer class="title is-3 mt-2 text-white" :text='["2nd to 4th October","Colombo, Sri Lanka"]' erase-style='clear'></vue-typer>
          </div>
      </div>
  </section>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
    name: 'HomePage',
    components: {
        VueTyper
    }
}
</script>

<style scoped>
@import url('../assets/css/style.css');

.banner{
    background-image: url("../assets/img/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 1000px;
    /* clip-path: circle(59.4% at 53% 1%); */
    align-self: center;
}
.title-main{
    font-size: 4rem;
}
.titlebox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}
.logos{
    width: 400px;
}
.typed[data-v-302772ec]{
color: white !important;
}
</style>