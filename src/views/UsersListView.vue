<template>
    <section>
        <h1>Liste des utilisateurs</h1>

        <h2 style="margin-top: 5%;">Administrateurs</h2>

         <table style="width: 90%; margin: 5% auto 0 auto">
            <thead>
                    <th style="width:10%">ID</th>
                    <th style="width:20%">Nom</th>
                    <th style="width:20%">Prénom</th>
                    <th style="width:40%">Email</th>
                    <th style="width:10%">Actions</th>
            </thead>
            <tbody v-for="element in admins" :key="element.id">
                
                <tr>
                    <td style="width:10%">{{ element.id }}</td>
                    <td style="width:20%">{{ element.lastname_users }}</td>
                    <td style="width:20%">{{ element.firstname_users }}</td>
                    <td style="width:40%">{{ element.email_users }}</td>
                    <td style="width:10%">
                        <i @click="editUser(user.id)" id="statutBtn" type="button" data-bs-toggle="modal" data-bs-target="#editStaff" class="fa-solid fa-pen"></i> <button type="submit" ><i @click="deleteUser(user.id)" class="fa-solid fa-circle-minus"></i></button>
                    </td>
                </tr>
                
            </tbody>
        </table>

        <article style="margin-bottom: 10%" v-for="element in events" :key="element.id">
            <h2 style="color: blue; margin-top: 10%;">{{element.names_events}}</h2>

            <button @click="addUser(element.id)" id="statutBtn" type="button" data-bs-toggle="modal" data-bs-target="#addUserModal">Ajouter un utilisateur</button>



            <h3 style="margin-top:5%;">Staff</h3>
            <table style="margin:3% auto 0 auto; width:90%">
                <thead>      
                        <th style="width:10%">ID</th>
                        <th style="width:20%">Nom</th>
                        <th style="width:20%">Prénom</th>
                        <th style="width:40%">Email</th>
                        <th style="width:10%">Actions</th>
                </thead>
            </table>

            <div v-for="ure in ures" :key="ure.id">
                    
                <div v-if="element.id == ure.event_id && ure.role_id == 1">

                    <div v-for="user in users" :key="user.id">

                        <div v-if="user.id == ure.user_id">
                            <table style="margin:0 auto; width:90%">
                                <tr>
                                    <td style="width:10%"> {{ user.id }} </td>
                                    <td style="width:20%">{{ user.lastname_users }}</td>
                                    <td style="width:20%">{{ user.firstname_users }}</td>
                                    <td style="width:40%">{{ user.email_users }}</td>
                                    <td style="width:10%">
                            <i @click="editUser(user.id,element.id)" id="statutBtn" type="button" data-bs-toggle="modal" data-bs-target="#editStaff" class="fa-solid fa-pen"></i> <button type="submit" ><i @click="deleteUser(user.id)" class="fa-solid fa-circle-minus"></i></button>
                        </td>
                                </tr>
                            </table>
                        </div>

                    </div>

                </div>
                    
            </div>

            <h3 style="margin:5%">Participants</h3>

            <table style="margin:3% auto 0 auto; width:90%">
                <thead>      
                        <th style="width:3%">ID</th>
                        <th style="width:10%">Nom</th>
                        <th style="width:10%">Prénom</th>
                        <th style="width:25%">Email</th>
                        <th style="width:20%">Compétences</th>
                        <th style="width:15%">Équipe</th>
                        <th style="width:10%">Salle</th>
                        <th style="width:7%">Actions</th>
                </thead>
            </table>

            <div v-for="ure in ures" :key="ure.id">
                    
                <div v-if="element.id == ure.event_id && ure.role_id == 2">

                    <div v-for="user in users" :key="user.id">

                        <div v-if="user.id == ure.user_id">
                            <table style="margin:0 auto; width:90%">
                                <tr>
                                    <td style="width:3%"> {{ user.id }} </td>
                                    <td style="width:10%">{{ user.lastname_users }}</td>
                                    <td style="width:10%">{{ user.firstname_users }}</td>
                                    <td style="width:25%">{{ user.email_users }}</td>
                                    <td style="width:20%">

                                        <div v-for="userSkill in usersSkills" :key="userSkill.id">
                                            <div v-for="skill in skills" :key="skill.id">
                                                <div v-if="user.id == userSkill.user_id && skill.id == userSkill.skill_id">
                                                        {{skill.name_skills}}
                                                </div>
                                            </div>
                                        </div>

                                    </td>
                                    <td style="width:15%">

                                        <div v-for="userTeam in usersTeams" :key="userTeam.id">
                                            <div v-for="team in teams" :key="team.id">
                                                <div v-if="user.id == userTeam.user_id && team.id == userTeam.team_id && team.event_id == element.id">
                                                        {{team.names_teams}} 
                                                        
                                                </div>
                                            </div>
                                        </div>

                                    </td>
                                    <td style="width:10%">
                                        <div v-for="userTeam in usersTeams" :key="userTeam.id">
                                            <div v-for="room in rooms" :key="room.id">
                                                <div v-for="team in teams" :key="team.id">
                                                     <div v-if="user.id == userTeam.user_id && team.id == userTeam.team_id && room.id == team.room_id && team.event_id == element.id">
                                                            {{room.names_rooms}} 
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>

                                    </td>
                                    <td style="width:7%">
                                        <i @click="editUser(user.id,element.id)" id="statutBtn" type="button" data-bs-toggle="modal" data-bs-target="#editParticipant" class="fa-solid fa-pen"></i> 
                                        <button type="submit" @click="deleteUser(user.id)"><i  class="fa-solid fa-circle-minus"></i></button>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>

                </div>
                    
            </div>

        </article>

<!-- modal add user -->
        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                  <CreateUser :eventId="eventId"/>

                </div>
            </div>
        </div>
<!-- fin modal -->

<!-- Modal PARTICIPANTS -->
        <div class="modal fade" id="editParticipant" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modification de {{firstnameUser}} {{lastnameUser}}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="editUserForm">
                            <div>
                              <label for="firstname">Prénom : </label>
                              <input id="firstname" type="text" v-model="firstnameUser" placeholder="Prénom" >
                            </div>
                            
                            <div>
                              <label for="lastname">Nom : </label>
                            <input id="lastname" type="text" v-model="lastnameUser" placeholder="Nom" >
                            </div>
                            
                            <div>
                              <label for="email">Email : </label>
                            <input id="email" type="email" v-model="emailUser" placeholder="Email" >
                            </div>
                             <div>
                              <label for="role">New role : </label>
                               <select v-model="roleUser">
                                  <option  value=1>staffs </option>
                                  <option  value=2 selected="selected" >Participants </option>
                              </select>
                               </div>
                            <fieldset>
                                <legend>Compétences</legend>

                                    <div v-show="editSkills == false">

                                      <span v-for="skill in userSkill" :key="skill.id">{{skill.name_skills}}</span>
                                      <i @click="showEditSkills" style="margin-left: 10px" class="fa-solid fa-pen"></i>

                                    </div>

                                    <section v-show="editSkills == true">

                                        <div>
                                          <input name="skills" type="checkbox" id="dev" value="1">
                                          <label for="dev">Développeur/euse</label>
                                        </div>
                                        <div>
                                          <input name="skills" type="checkbox" id="uiux" value="2">
                                          <label for="uiux">UX/UI</label>
                                        </div>
                                        <div>
                                          <input name="skills"  type="checkbox" id="maker" value="3">
                                          <label for="maker">Maker</label>
                                        </div>
                                        <div>
                                          <input name="skills"  type="checkbox" id="management" value="3">
                                          <label for="management">Management</label>
                                        </div>
                                        <div>
                                          <input name="skills"  type="checkbox" id="commercial" value="5">
                                          <label for="commercial">Commercial</label>
                                        </div>
                                        <div>
                                          <input name="skills"  type="checkbox" id="communication" value="6">
                                          <label for="communication">Communication</label>
                                        </div>
                                        <div>
                                          <input  name="skills" type="checkbox" id="ops" value="7">
                                          <label for="ops">DevOps</label>
                                        </div>
                                        <div>
                                          <input name="skills"  type="checkbox" id="design" value="8">
                                          <label for="design">Web-Designer</label>
                                        </div>

                                    </section>
                            </fieldset>
                            
                            <button @click.prevent="updateUser" type="submit">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

<!-- Modal STAFF -->
        <div class="modal fade" id="editStaff" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modification de {{firstnameUser}} {{lastnameUser}}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <form class="editUserForm">

                            <div>
                              <label for="firstname">Prénom : </label>
                              <input id="firstname" type="text" v-model="firstnameUser" placeholder="Prénom" >
                            </div>
                            
                            <div>
                              <label for="lastname">Nom : </label>
                            <input id="lastname" type="text" v-model="lastnameUser" placeholder="Nom" >
                            </div>
                            
                            <div>
                              <label for="email">Email : </label>
                            <input id="email" type="email" v-model="emailUser" placeholder="Email" >
                            </div>
                            <div>
                              <label for="role">New role : </label>
                               <select v-model="roleUser">
                                  <option  value=1 selected="selected">staffs </option>
                                  <option  value=2  >Participants </option>
                              </select>
                               </div>
                            
                            <button @click.prevent="updateUser" type="submit">Enregistrer</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>

    </section>  
</template>

<script>
import config from "@/config";
import CreateUser from "../components/CreateUserByAdmin.vue";

export default {

  data() {
    return {
      users: [],
      admins: [],
      staffs: [],
      participants: [],
      events: [],
      ures:[],
      usersSkills:[],
      usersTeams:[],
      skills:{},
      teams:[],
      rooms:[],
      userId: null,
      user: [],
      userSkill: [],
      displayModal: 'none',
      firstnameUser: "",
      lastnameUser: "" ,
      emailUser: "",
      roleUser:"",
      requestMessage: "",
      editSkills: false,
      updateSkills: [],
      eventId: null,
      eventIdR:"",
      checkadmin:"admin ok",
      checklogin:true,
    };
  },

  components: {
    CreateUser,
  },

 mounted() {
    this.getUsersList();
    this.getEventsList();
    this.getUsersSkillsList();
    this.getUsersTeamsList();
    this.getSkillsList();
    this.getTeamsList();
    this.getRoomsList();
    // this.getUser();
  },

  // computed:{
  //   checkadmin(){
  //   if (checkadmin="admin pas ok."){
  //      return this.$router.push({name:"HomeEvent"});
  //   }
  //   }

  // },
  watch: {
    // whenever question changes, this function will run
    // checklogin(newQuestion,oldqueestion) {
    //   if (newQuestion=="Unauthenticated.") {
    //       this.$router.push({name:"HomeEvent"})
    //   }
    // },
    // checkadmin(newQuestion) {
    //   if (newQuestion="admin pas ok") {
    //      this.$router.push({name:"HomeEvent"})
    //   }
    // }


  },


  methods: {

    async getUsersList() {

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
      config.apiUrl + "/users", 
        options
      );

      const data = await response.json();
      this.users = data.users;
      this.admins = data.admins;
      this.staffs = data.staffs;
      this.ures = data.user_role_event;
      this.participants = data.participants;
      this.checkadmin = data.checkadmin;
      this.checklogin = data.message
      console.log(data);
    },

    async getEventsList(){
        const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
      config.apiUrl + "/event", 
        options
      );

      const data = await response.json();
      this.events = data.event;
      
    },

    async getUsersSkillsList(){
        const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
      config.apiUrl + "/usersskills", 
        options
      );

      const data = await response.json();
      this.usersSkills = data.users_skills;
      console.log(data);
    },

    async getUsersTeamsList(){
        const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
      config.apiUrl + "/usersteams", 
        options
      );

      const data = await response.json();
      this.usersTeams = data.users_teams;
      console.log(data);
    },

    async getSkillsList(){
        const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
      config.apiUrl + "/skills", 
        options
      );

      const data = await response.json();
      this.skills = data.skills;
  console.log(data);
    },

    async getTeamsList(){
        const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
      config.apiUrl + "/teamslist", 
        options
      );

      const data = await response.json();
      this.teams = data.teams;
      console.log(data);
    },

    async getRoomsList(){
        const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
      config.apiUrl + "/rooms", 
        options
      );

      const data = await response.json();
      this.rooms = data.rooms;
      console.log(data);
    },

    addUser(id){
      this.eventId = id;
      console.log(this.eventId);
    },

    editUser(id,id2){
      this.userId = id;
      this.eventIdR=id2
      this.getUser();
    },

    async getUser(){
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      let response = await fetch(
      config.apiUrl + `/users/${this.userId}`, 
        options
      );

      const data = await response.json();
      
      this.user = data.user;
      this.userSkill =  data.skills;
      this.firstnameUser = data.user.firstname_users;
      this.lastnameUser =  data.user.lastname_users;
      this.emailUser = data.user.email_users;
console.log(data);
    },


    async updateUser(){
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          firstname_users: this.firstnameUser,
          lastname_users: this.lastnameUser,
          email_users: this.emailUser,
          role_id:this.roleUser,
          event_id:this.eventIdR,

        }),
      };

      let response = await fetch(
      config.apiUrl + `/users/${this.userId}`, 
        options
      );

      const data = await response.json();
      this.$router.go();
      console.log(data);
    },

/* Suppression d'un user (liste Admin/Staff/Participant) */
   async deleteUser(user) {
      const response = await fetch(config.apiUrl + `/users/${user}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      const data = await response.json();

      this.users.splice(this.users.indexOf(user), 1);
      this.$router.go()
      console.log(data);
    },



    showEditSkills(){
      this.editSkills = true;
    },

  }
}

</script>

<style scoped>
    .none {
      display: none;
    }

    .block{
      display: block;
    }
    
    table {
        margin: 3% auto;
    }

    table, td, th {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
    }

    .editUserForm{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .editUserForm fieldset {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

</style>