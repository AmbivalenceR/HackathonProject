<template>
  <div class="container">
    <h2>Liste des équipes</h2>

    <!-- <div :v-for="(group, event_id) in groups">
  <h2>{{event_id}}</h2> 
  <div :v-for="item in group">{{item}}</div>
</div> -->

    <ul id="team_list">



      <li id="team" v-for="team in teams" :key="team.id">
        
        <h4 :name="team.id_teams">{{ team.names_teams }}</h4>
        <br />
        <p>Nom de projet :{{ team.names_projects_teams }}</p>
        <p>Sujet : {{ team.subject_teams }}</p>
        <!-- <p>Room : {{ team.id_room_teams }}</p> -->
        <!-- <p>Numero d'evenement :{{ team.id_events_teams }}</p> -->
        <!-- <p>Nom des participants :</p>
        <p v-for="nameuser in  team.usert" :key="nameuser.id">{{ nameuser.lastname_users}}</p> -->
        <p>
          <input
            type="submit"
            class="btn btn-primary"
            name="edit_team_btn"
            id="edit_team_btn"
            v-on:click="edit_team"
            href=""
            value="Modifier"
          />
        </p>
        <p>
          <button
            type="submit"
            class="btn btn-primary"
            name="delete_team_btn"
            id="delete_team_btn"
            @click="delete_team(team.id)"
          >
            Supprimer
          </button>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import config from "@/config";

export default {
  name: "TeamList",

  data() {
    return {
      teams: [],
      names_teams: "",
      name_project_team: "",
      subject_teams: "",
      id_room_teams: "",
      id_events_teams: "",
      events_id: "",
      room_id:"",
    };
  },

// computed:{
//   groups(){
//     return groupBy(this.teams, 'event_id')
//   }
// },

  methods: {
    /* Récupération des équipes */
    async getTeams() {
      const response = await fetch(config.apiUrl + "/teamslist", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          Accept: "application/json",
        },
      });

      const data = await response.json();

      this.teams = data.teams;

    },
    /* Modification des équipes */
    edit_team: function () {

    },

    /* Suppression des équipes */
    async delete_team(team) {
      const response = await fetch(config.apiUrl + `/teamslist/${team}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      });

      const data = await response.json();

      this.teams.splice(this.teams.indexOf(team), 1);
      this.$router.go()
    },
    
//     groupBy:function(array, key){
//   const result = {}
//   array.forEach(item => {
//     if (!result[item[key]]){
//       result[item[key]] = []
//     }
//     result[item[key]].push(item)
//   })
//   return result
// }
  },
  mounted() {
    this.getTeams();
  },
};
</script>
<style scoped>
#team_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  list-style: none;
}

#team {
  margin: 1.5rem;
  background-color: darkgray;
  padding: 2rem;
  border-radius: 15px;
}
</style>
