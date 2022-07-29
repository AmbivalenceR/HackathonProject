<template>
  <div id="mainContainer">

    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nouvel utilisateur</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>


    <!-- Formulaire de connexion -->
    <h3>creation user depuis admin</h3>
    <form @submit.prevent="user_register">
      <div class="input-container">
        <label for="firstname">Prénom : </label>
        <input
          type="text"
          id="firstname"
          v-model="firstname_users"
          placeholder="david"
          required
        />
      </div>
      <div class="input-container">
        <label for="lastname">lastname : </label>
        <input
          type="text"
          id="lastname"
          v-model="lastname_users"
          placeholder="athuil"
          required
        />
      </div>

      <div class="input-container">
        <label for="emailInput">Email : </label>
        <input
          type="email"
          id="emailInput"
          v-model="email_users"
          placeholder="john.doe@network"
          required
        />
      </div>

      <div class="input-container">
        <label for="passwordInput">Password : </label>
        <input
          type="password"
          id="passwordInput"
          v-model="password"
          placeholder="1234"
          required
        />
      </div>
            
      <div class="input-container">
        <label for="staff"> Rôle : </label>
        <select id="role_id" name="role_id" v-model="role_id" required>
          <option value="1">Staff</option>
          <option value="2">Participant</option>
        </select>
      </div>

      <button @click="event">voir event</button>

      <input class="login-button" type="submit" value="creation user" />
    </form>

    <p v-if="result === true" class="success">creation réussie</p>
    <p v-else-if="result === false" class="error">creation échouée</p>
  </div>
</template>

<script>
import config from "@/config";

export default {

  props : ['eventId'],

  data() {
    return {
      email_users: "david_athuil@yahoo.fr",
      password: "test",
      result: null,
      token: "",
      lastname_users: "Athuil",
      firstname_users: "David",
      event_id: this.eventId,
      role_id: "rr",
      checkadmin:"test",
    };
  },

  beforeMount(){
     
    console.log(this.eventId);

  },

  methods: {

    event(){
    console.log(this.eventId);
     
    },

     async user_register() {
      console.log(this.eventId);
      const body = {
        firstname_users: this.firstname_users,
        lastname_users: this.lastname_users,
        email_users: this.email_users,
        password: this.password,
        event_id: this.eventId,
        role_id: this.role_id
      };
      
      // $route.params.event_id
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
         body: JSON.stringify(body),
      };
      console.log(this.event_id);
      const response = await fetch(config.apiUrl + `/users`, options);

      const data = await response.json();

      this.result = data.success;
      alert (data.success)

      if (data.success === "true" ) { alert ("toto");
      this.token = data.token;
        localStorage.setItem("token", this.token);
        this.$router.push("/profile/")}
    },
  },
};
</script>

<style scoped>
.input-container {
  margin: 10px;
  display: flex;
  flex-direction: row;
}

.input-container label {
  padding: 5px;
}

.input-container input {
  border: 1px solid grey;
  padding: 5px;
  font-size: 12px;
  border-radius: 5px;
  flex-grow: 1;
}

.login-button {
  margin: 20px;
  padding: 10px;
  background-color: grey;
  color: white;
  border: 0px;
  border-radius: 5px;
  font-size: 15px;
}

.login-button:hover {
  cursor: pointer;
}

.success {
  margin-top: 20px;
  padding: 10px;
  background-color: #2c962c;
  color: white;
}

.error {
  margin-top: 20px;
  padding: 10px;
  background-color: #b42f26;
  color: white;
}
</style>
