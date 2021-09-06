<template>
  <nav class= "is-fixed-top" :class="dark ? 'navbar nav-dark' : 'navbar nav-light' " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <img src="../assets/nav-logo.png" width="224" height="56" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="fireBurger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item hvr hvr-underline-from-center">
          <router-link to="/">Home</router-link>
        </a>
        <a class="navbar-item hvr hvr-underline-from-center">
          <router-link to="/competition">Competition</router-link>
        </a>
        <a class="navbar-item hvr hvr-underline-from-center">
          <router-link to="/challanges">Challenges</router-link>
        </a>
        <a class="navbar-item hvr hvr-underline-from-center">
          <router-link to="/timeline">Timeline</router-link>
        </a>
        <!-- <a class="navbar-item hvr hvr-underline-from-center">
          <router-link to="/winners">Winners</router-link>
        </a> -->
        <a class="navbar-item hvr hvr-underline-from-center">
          <router-link to="/team">Team</router-link>
        </a>
        <a class="navbar-item hvr hvr-underline-from-center">
          <router-link to="/hall_of_fame">Hall of Fame</router-link>
        </a>
        
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    dark: {
      type: Boolean
    }
  },
  methods: {
    fireBurger: function(){
      const event = new Event('triggerBuger');
      document.dispatchEvent(event);
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/style.css");
.navbar-item img {
  max-height: 56px;
}
nav {
  /* background-image: url("../assets/img/nav-bg.png"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.nav-light{
  background-color: #040127 ;;
}
.nav-dark{
  background-color: #02010ed2 !important ;
}
.navbar-item,
.navbar-link {
  color: white;
}
a.navbar-item:hover, a.navbar-item:focus, a.navbar-item:focus-within {
  background-color: transparent;
  color: white;
}
/* Hover Styles */
.hvr-underline-from-center {
  display: flex !important;
}
.hvr-underline-from-center:before {
  background-color: #c54da0;
}

a {
  background-color: transparent;
  color: white;
}
.navbar-item {
  padding-right: 1rem;
  padding-left: 1rem;
}

</style>
