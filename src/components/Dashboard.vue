<template>
  <section>
    <NavBar />
    <div class="row has-text-right">
      <button class="button is-primary mr-2" @click="logout">Logout</button>
    </div>
    <center class="mt-2">
      <h1 class="title is-1 text-white mb-0 hvr hvr-underline-from-center">
        Admin<span class="text-pink"> Dashboard</span>
      </h1>
      <h1 class="title is-6 text-white has-text-centered mt-0 mb-3">Logged in as <span class="text-pink">{{ email }}</span> !</h1>
    </center>

    <div class="timeline-block">
      <h1 class="title is-2 text-white has-text-centered">Timeline Section</h1>

      <div class="req-table has-text-centered mr-1 ml-1">
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
              <td>{{ formatDate(tlitem.from) || "Loading" }}</td>
              <td>{{ tlitem.title || "Loading" }}</td>
              <td>{{ tlitem.description || "Loading" }}</td>
            </tr>
            <tr>
              <td colspan="7" style="text-align: center" v-if="!tlitems">
                You have no timeline events
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row add-tl mt-2 pr-1 pl-1">
        <h1 class="title is-3 text-white has-text-centered">Add New Item</h1>
        <div class="columns">
          <div class="column is-3"></div>
          <div class="column is-6">
            <div class="columns">
              <div class="column is-half">
                <div class="field">
                  <label class="label text-white">Date</label>
                  <div class="control">
                    <input
                      class="input is-success"
                      type="date"
                      placeholder="Your date here..."
                      value=""
                      v-model="date"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="field">
                  <label class="label text-white">Title</label>
                  <div class="control">
                    <input
                      class="input is-success"
                      type="text"
                      placeholder="Your title here..."
                      value=""
                      v-model="title"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-3"></div>
        </div>
        <div class="columns">
          <div class="column is-3"></div>
          <div class="column is-6">
            <div class="field">
                  <label class="label text-white">Description</label>
                  <div class="control">
                    <textarea
                      class="textarea is-success"
                      type="text"
                      placeholder="Your description here..."
                      value=""
                      v-model="description"
                    />
                  </div>
                </div>
          </div>
          <div class="column is-3"></div>
        </div>
        <div class="columns">
          <div class="column is-3"></div>
          <div class="column is-6 has-text-centered">
            <p v-if="isError" class="text-pink">Please complete the form and submit again!</p>
            <button class="button is-primary mt-1 has-text-centered" @click="addItem">Add Item</button>
          </div>
          <div class="column is-3"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import { firebaseApp } from "../firebase";
const TLref = firebaseApp.database().ref("timelineItems");
import axios from 'axios';

export default {
  name: "Dashboard",
  data() {
    return {
      tlitems: [],
      date: '',
      title: '',
      description: '',
      isError: false,
      email: ''
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
    this.email = firebaseApp.auth().currentUser.email;
    
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
    addItem: function(){
      let thisState = this;
      if(this.date == '' || this.title == '' || this.description == ''){
        this.isError = true;
        return;
      }
      axios.post('https://spaceappslk.firebaseio.com/timelineItems.json', {
        title: thisState.title,
        from: thisState.date,
        description: thisState.description
      }).then(response =>{
        console.log(response);
        this.$swal('Submitted Successfully');
      }).catch(err => {
        console.log(err)
      })
    }
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");

th{
  color: white !important;
  background-color: #c54da0;
  text-align: center !important;
  border-right: 1px solid #dbdbdb !important;
}
td{
  border-right: 1px solid #dbdbdb !important;
}

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
.tl-time {
  width: 15%;
}
.tl-title {
  width: 20%;
}
.row {
  flex-direction: row;
}
</style>
