<template>
<div>
        
    <!-- <h1>Bienvenue {{this.$route.params }} !</h1> -->

    <div class="contenair_login_register">

    <div class="connection_block" >
    <h3>Déjà Challenger ?</h3>
    <h4>Connecte-toi !</h4>

    <br>

    <p><button
          type="submit"
          class="btn btn-dark"
          name="redirect_login_btn"
          :id=$route.params.event_id
          v-on:click="redirect_login_view"
       
        >
          Connexion
        </button></p>
    </div>

    <div class="inscription_block">
    <h3>Nouveau Challenger ?</h3>
    <h4>Inscris-toi !</h4>

    <br>

    <p><button
          type="submit"
          class="btn btn-dark"
          name="redirect_register_btn"
          :id=this.$route.params.event_id 
          v-on:click="redirect_register_view"
        >
          Inscription
        </button></p>
    </div>
    </div>
</div>


  
</template>

<script>

export default {
  
    name: "LoginRegisterView",

//     data() {
//     return {
//       events: [],
//       names_events: "",
//       start_dates_events: "",
//       end_dates_events: "",
//       end_dates_inscriptions_events: "",
//       location_events: "",
//     };
//   },

  methods: {
//     /* Récupération des évènements */
//     async getEvents() {
//       const response = await fetch(config.apiUrl + "/event", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });
    
    

//       const data = await response.json();

//       this.events = data.event;
//     },
//    },
 redirect_login_view(e) {
      let event_id = e.target.id;


    this.$router.push({name:"Login", params: {event_id}});
    },
    // redirect_login_view() {

    //   this.$router.push("/Login");

    // },
    redirect_register_view(e) {
      let event_id = e.target.id;

    this.$router.push({name:"Register", params: {event_id}});
    },

    // redirect_register_view() {

    //   this.$router.push("/Register");

    // },

}
}
</script>

<style scoped>

.connection_block {
  margin: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  background-color: black;
  color: white;
  border: 5px solid red;
  width: 23rem;
}

.inscription_block {
  margin: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  background-color: black;
  color: white;
  border: 5px solid red;
  width: 23rem;
}

.contenair_login_register {
  display: flex;
  justify-content: space-evenly;
}

button {
  background: red;
}

</style>

