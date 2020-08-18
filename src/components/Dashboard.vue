<template>
  <section>
    <NavBar />
    <div class="row has-text-right">
      <button class="button is-primary mr-2" @click="logout">Logout</button>
    </div>
    <center class="mt-2">
      <h1 class="title is-1 text-white mb-3 hvr hvr-underline-from-center">
        Admin<span class="text-pink"> Dashboard</span>
      </h1>
    </center>

    <div class="timeline-section">
      <h1 class="title is-2 text-white">Timeline Section</h1>
      <div class=" container req-table has-text-centered mr-1 ml-1">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th class="tl-time">Date and Time</th>
              <th class="tl-title">Heading</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(tlitem, index) in tlitems" v-bind:key="index">
              <td>{{ formatDate(tlitem.from) }}</td>
              <td>{{ tlitem.title }}</td>
              <td>{{ tlitem.description }}</td>
            </tr>
            <tr>
              <td colspan="7" style="text-align: center" v-if="!tlitems">
                You have no timeline events
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import { firebaseApp } from "../firebase";
const TLref = firebaseApp.database().ref("timelineItems");

export default {
  name: "Dashboard",
  data() {
    return {
      tlitems: [],
    };
  },
  firebase: {
    timelineItems: TLref,
  },
  created() {
    firebaseApp
      .database()
      .ref("timelineItems")
      .on("value", (snapshot) => {
        this.tlitems = snapshot.val();
      });
  },
  methods: {
    logout: function() {
      firebaseApp
        .auth()
        .signOut()
        .then(() => {
          this.isLoggedIn = false;
          this.$router.push("/admin");
        });
    },
    formatDate: function(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");

@media only screen and (max-width: 770px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
    background-color: #fff;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  tr {
    border: 1px solid #ccc;
  }
  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 200px;
    margin-left: 150px;
  }
  td:before {
    position: absolute;
    top: 12px;
    left: 6px;
    width: 200px;
    padding-right: 40px;
    white-space: nowrap;
    margin-left: -150px;
  }
  td:nth-of-type(1):before {
    content: "Date and Time";
  }
  td:nth-of-type(2):before {
    content: "Heading";
  }
  td:nth-of-type(3):before {
    content: "Description";
  }
}
.tl-time{
  width: 15%;
}
.tl-title{
  width: 20%;
}
</style>
