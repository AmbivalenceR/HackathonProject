<template>

<!-- Formulaire de création d'une équipe -->
  <article id="createTeam">
    <h2>Création d'équipe</h2>
    <div class="container" id="create_team_form">
      <form @submit.prevent="createTeam">

        <p><label>Nom de l'équipe </label></p>
        <p>
          <input
            type="text"
            name="input_name_team"
            v-model="names_teams"
            required
          />
        </p>

        <p><label>Nom du projet </label></p>
        <p>
          <input
            type="text"
            name="input_name_project"
            v-model="names_projects_teams"
          />
        </p>

        <p><label>Sujet </label></p>
        <p>
          <textarea name="input_name_subject" v-model="subject_teams"></textarea>
        </p>

        <!-- Récupération des salles -->

        <p><label>Salle</label></p>
        
        <p>
          <select v-model="room_id">
            <option v-for="room in rooms" :key="room.id" :value="room.id">
              {{ room.names_rooms }}
            </option>
          </select>
        </p>

        <!-- Récupération des évènements -->

        <!-- <p><label>Evènement</label></p>
        <p>
          <select v-model="event_id">
            <option v-for="event in events" :key="event.id" :value="event.id">
              {{ event.names_events }}
            </option>
          </select>
        </p> -->
        
        <button
          type="submit"
          class="btn btn-outline-warning"
          name="create_team_btn"
          v-on:click="create_team"
        >
          Créer
        </button>
      </form>
    </div>
  </article>
</template>

<script>
import config from "@/config";

export default {
  name: "CreateTeam",

  props: ["event_id"],

  data() {
    return {
      teams: [],
      names_teams: "",
      names_projects_teams: "",
      subject_teams: "",
      room_id: "",
      // event_id: "",
      rooms: [],
      // events: [],
    };
  },

  mounted() {
    this.getRooms();
    // this.getEvents();
  },

  methods: {

    // Récupération des salles

    async getRooms() {
      const response = await fetch(config.apiUrl + "/teamslist", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          Accept: "application/json",
        },
      });

      const data = await response.json();

      this.rooms = data.rooms;
    },

    // Récupération des évènements 

    // async getEvents() {
    //   const response = await fetch(config.apiUrl + "/event", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   });

    //   const data = await response.json();

    //   this.events = data.event;
    // },

    /* Création d'une équipe */

    async create_team() {
      const body = {
        names_teams: this.names_teams,
        names_projects_teams: this.names_projects_teams,
        subject_teams: this.subject_teams,
        room_id: this.room_id,
        event_id: this.event_id,
      };

      const response = await fetch(config.apiUrl + "/teamslist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      console.log(data);

      console.log(body);

      this.$router.go();  // Refresh de la page
    },
  },
};


</script>

<style scoped>
#createTeam {
  margin-top: 30px;
}
#create_team_form {
  border-radius: 15px;
  background-color: black;
  color: white;
  border: 5px solid red;
  margin: 1.5rem auto;
  padding: 2rem;
  width: 30%;
}

</style>
