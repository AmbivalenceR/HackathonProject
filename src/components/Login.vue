<template>
  <div id="mainContainer">
  
    <h1>Connexion</h1>

    <!-- Formulaire de connexion -->

    <form id="login_form" @submit.prevent="login">
      <div class="input-container">
        <label for="email_users">Email : </label>
        <input
          type="email"
          id="email_users"
          v-model="email_users"
          placeholder="john.doe@netwo"
          required
        />
      </div>

      <div class="input-container">
        <label for="password">Password : </label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="1234"
          required
        />
      </div><br>

      <button type="submit" class="btn btn-dark">Se Connecter</button>
    </form>

    <p v-if="result === true" class="success">
      Connexion réussie
      <br />
      Token: {{ token }}
    </p>
    <p v-else-if="result === false" class="error">Connexion échouée</p>
  </div>
</template>


<script>
import config from "@/config";

export default {

  emits: [ 'submit'],
  data() {
    return {
      email_users: "test@test.com",
      password: "password",
      result: null,
      token: "",
      admin:"",
    };
  },

   methods: {
    async login() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_users: this.email_users,
          password: this.password,
        }),
      };

      const response = await fetch(config.apiUrl + "/login", options);

      const data = await response.json();

      this.result = data.success;
      this.admin = data.admin;
      if (data.success === true) {
        this.token = data.token;
        localStorage.setItem("token", this.token);
         this.$router.push("/profile");
      }
      if (data.admin === "admin") {
      this.$root.$emit('submit')
      }
      
    },
  },
};
</script>

<style scoped>

#login_form {
    display: flex;
    flex-direction: column;
    width: 30%;    
    border-radius: 15px;
    padding: 1.5rem;
    margin: 1rem auto;
    background-color: black;
    color: white;
    border: 5px solid red;
}


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
#bgvid {
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

button {
  background: red;
}

</style>
