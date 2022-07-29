<template>

<section>
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Équipe</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <ul>
        <li>untel</li>
        <li>unautre</li>
        <li>undernier</li>
    </ul>

    <button @click="users">users</button>
</section>
    
</template>

<script>
import config from "@/config";

export default {

    props: ['teamId'],

    data(){
        return {
            usersT:"a",
        }
    },

    mounted(){
        this.getTeam();
    },

    methods: {

        async getTeam() {
            const options = {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
                },
            };

            let response = await fetch(
            config.apiUrl + `/teamslist/${this.teamId}`, 
                options
            );


            const data = await response.json();

            this.usersT = data.users;
            console.log('cc');
            console.log(data);

        },

        users(){
            console.log(this.usersT);
        }
    },

}
</script>