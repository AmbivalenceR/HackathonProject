<template>

    <section>
        <h1>Evénement : {{event.names_events}}</h1>
        <article id="descriptionEvent">
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam, perferendis quaerat voluptas accusantium harum labore consectetur vero odio facere. Mollitia soluta quidem voluptas architecto commodi ipsum consequuntur amet nihil.Ò Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus explicabo quod, quibusdam minima laborum fuga odit officiis aut mollitia veritatis numquam non eius soluta inventore itaque corporis vel voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni error, eveniet sapiente quos cum earum corporis quis molestias odio! Excepturi reprehenderit laboriosam quisquam accusantium expedita repudiandae sit eius maxime!</p>
        </article>
        <article id="staffEvent">
            <h3>Staff</h3>
            <table>
                <thead>
                    <th class="tdFirstname">Prénom</th>
                    <th class="tdLaststname">Nom</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <tr v-for="staff in staffs" :key="staff.id">
                        <td>{{staff.firstname_users}}</td>
                        <td>{{staff.lastname_users}}</td>
                        <td>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-outline-light btn-sm">Modifier</button>
                                <button class="btn btn-outline-danger btn-sm">Supp. de l'évènement</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>

        <article id="teams"   >
            <div class="oneTeam" v-for="team in teams" :key="team.id" @click="showTeam(team.id)" id="statutBtn" type="button" data-bs-toggle="modal" data-bs-target="#team">
                <h3>Nom de l'équipe : {{team.names_teams}}</h3>
                <p>Nom du projet : {{team.names_projects_teams}}</p>
                <p>Sujet : {{team.subject_teams}}</p>
                <p>Salle : {{team.room.names_rooms}}</p>
            </div>
        </article>


    <!-- modal team -->
        <div class="modal fade" id="team" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                  <TeamUnique :teamId="team_id"/>

                </div>
            </div>
        </div>
<!-- fin modal -->

        <CreateTeam :event_id="eventId"/>
</section>
    
</template>

<script>

import config from "@/config";
import CreateTeam from "@/components/CreateTeam.vue";
import TeamUnique from "@/components/UniqueTeam.vue";


export default {


    components: {
        CreateTeam,
         TeamUnique,
    },

    data() {
      return {
        eventId: this.$route.params.event_id ,
        event:[],
        teams: [],
        users: [],
        staffs: [],
        team_id:"",
      }  
    },

    mounted(){
        this.getEvent();

    },

    methods: {

        async getEvent() {
            const response = await fetch(config.apiUrl + `/event/${this.eventId}`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                },
            });

            const data = await response.json();

            this.event = data.event;
            this.teams = data.teams;
            this.users = data.event.users;
            this.staffs = data.staffs
            
            console.log(data);
        },


        showTeam(id){
            this.team_id = id;
            console.log(this.team_id);
        },

    }
}
</script>

<style scoped>
    #descriptionEvent, #staffEvent {
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        background-color: black;
        color: white;
        border: 5px solid red;
        margin: 3rem auto;
        padding: 5%;
        width: 80%;
    }
    #descriptionEvent h3, #staffEvent h3, #teams h3 {
        margin-bottom: 1.6rem;
    }
    .tdFirstname, .tdLaststname {
       column-width: 20rem;
    }
    #teams {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content:center;
        cursor: pointer;
    }
    #teams .oneTeam {
        margin: 1.5rem;
        padding: 2rem;
        border-radius: 15px;
        background-color: black;
        color: white;
        border: 5px solid red;
    }
</style>