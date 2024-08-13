<template>
  <nav
    class="is-fixed-top"
    :class="dark ? 'navbar nav-dark' : 'navbar nav-dark'"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <img src="../assets/nav-logo.png" width="224" height="56" />
        <span class="navbar-text">SpaceApps</span>
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
      <div class="navbar-end">
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
      type: Boolean,
    },
  },
  methods: {
    fireBurger: function() {
      const event = new Event("triggerBuger");
      document.dispatchEvent(event);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=San+Francisco:wght@400&display=swap");
nav {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 85%; /* Adjusted width */
  max-width: 1000px; /* Maximum width for larger screens */
  margin: 40px auto; /* Adjusted top and bottom margin */
  border-radius: 15px; /* Rounded corners */
  border: 1px solid #9b59b6; /* Reduced border thickness */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  height: 80px; /* Increased height */
  backdrop-filter: blur(8px); /* Enhanced glassy effect */
  background-color: rgba(
    255,
    255,
    255,
    0.75
  ); /* Reduced background intensity */
  padding: 0 30px; /* Added more space on the sides */
  display: flex;
  align-items: center; /* Centering vertically */
  margin-bottom: 40px; /* Added spacing below the navbar */
}

.nav-light {
  background-color: rgba(255, 255, 255, 0.75); /* Light grayish overlay */
}

.nav-dark {
  background-color: rgba(
    50,
    50,
    50,
    0.6
  ) !important; /* Darker gray for dark mode, reduced intensity */
}

.navbar-item,
.navbar-link {
  color: black; /* Changed text color to black for better contrast */
  font-family: "San Francisco", sans-serif; /* Apple-like font */
  font-weight: 400; /* Normal font weight */
}

a.navbar-item:hover,
a.navbar-item:focus,
a.navbar-item:focus-within {
  background-color: transparent;
  color: black; /* Changed text color on hover for better visibility */
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
  color: white; /* Changed text color to black for better contrast */
}

.navbar-item {
  padding: 0 1rem; /* Adjusted padding for space */
}

.navbar-brand {
  display: flex;
  align-items: center; /* Aligns items vertically */
  justify-content: center; /* Center horizontally */
  flex: 1; /* Allows navbar-brand to take available space */
}

.navbar-brand img {
  width: 100px; /* Adjusted logo width */
  height: auto; /* Adjusted logo height proportionally */
}

.navbar-text {
  font-size: 1.125rem; /* Slightly reduced font size */
  color: white; /* Changed text color to black for better contrast */
  margin-left: 0.5rem; /* Margin to separate text from logo */
}

.navbar-end {
  display: flex;
  align-items: center; /* Center items vertically */
  margin-left: auto; /* Push items to the right */
}
</style>
