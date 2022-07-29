<template>
  <div>
    <header>
      <div id="bg_header">
        <img id="hackathon_img" src="./assets/hackathon_header.jpg">
        <center style="color: black">ᕦ(ò_ó)ᕤ__ACDBMS Promo 2022 - Bocal Academy__ᕦ(ò_ó)ᕤ </center>
        <img id="nsu_logo_top" src="./assets/logo_nsu.png">
      </div>

    <div id="bandeau_header">
    <button id="disconnect_btn" class="btn btn-dark" @click="disconnect">Déconnexion</button>
    <div v-if="this.emitadmin=='admin'">
      <button id="event" class="btn btn-dark" @click="event">event</button>
      <button id="userlist" class="btn btn-dark" @click="userlist">userlist</button>
    </div>
    </div>
    </header>


    <main style="margin-top: 3%">
    <router-view @submit="emitm" />
    </main>

    
      <footer class="text-center text-lg-start bg-light text-muted">
        <!-- Copyright -->
        <div id="footer_copyright" class="text-center p-4" style="background-color: black;">
          <img id="lba_img" src="./assets/lba_logo.png">  
          <p>© 2022 Copyright: Startup ACDBMS - Société en développement - 
          <a class="text-reset fw-bold" href="https://lebocal.academy"> Le Bocal Academy</a></p>
          <img id="nsu_logo" src="./assets/logo_nsu.png">
      </div>
    
      </footer>

    
  </div>
</template>

<script>
// import Page from './components/Page.vue'
import LoginParticipant from "./components/Login.vue";
import CreateUserByAdmin from "./components/CreateUserByAdmin.vue";
import CreateEvent from "./components/CreateEvent.vue";
import ListEvent from "./components/ListEvent.vue";
import ShowUpdateProfile from "./components/ShowUpdateProfile.vue";
import InscriptionEvent from "./components/InscriptionEvent.vue";
import TeamList from "./components/TeamList.vue";
import RegisterParticipant from "./components/RegisterParticipant.vue";
import CreateTeam from "./components/CreateTeam.vue";
import config from "@/config";

// import Recuperer from './components/Recuperer.vue'
// import Poster from './components/Poster.vue'

export default {
  name: "App",
  components: {
    LoginParticipant,
    CreateUserByAdmin,
    Event,
    CreateEvent,
    ListEvent,
    ShowUpdateProfile,
    InscriptionEvent,
    TeamList,
    RegisterParticipant,
    CreateTeam,
  },

  data() {
    return {
      emitadmin:"",
      isDisplay: true,
    };
  },

  methods : {
    async disconnect() {
        const response = await fetch(config.apiUrl + "/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          Accept: "application/json",
        
        },
        
      });
      localStorage.removeItem("token");
      this.emitadmin = "";
     this.$router.push({name:"HomeEvent"});
    },
emitm() {
      
        this.emitadmin = "admin";
      },
    userlist(){
      this.$router.push({name:"Users"});
      },

    event(){
      this.$router.push({name:"Events"});
      },

 },
  computed: {
    ShowCreation() {
      this.isDisplay = !this.isDisplay;
    },
  },
};
</script>

<style>
* {
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

#bg_header {
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#bg_header img{
    max-width: 50%;
}

#nsu_logo_top {
    margin-right: 3%;
    height: -webkit-fit-content;
    width: 19%;
    margin-top: 10%;
}

#bandeau_header {
  background-color: red;
  padding: 0.5REM;
  text-align: end;
  border-bottom: 6px solid black;
  border-right: 6px solid black;
  margin-bottom: 1rem;
  display: block ruby;
}

footer {
    
    bottom: 0;
    width: 100%;
    
}

#footer_copyright {
    
    border-top: 3px solid red;
    color: white;
    margin-top: 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

#disconnect_btn:hover {
  background-color: white;
  color: black;
}


</style>
