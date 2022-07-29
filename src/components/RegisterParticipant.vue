<template>

  <h1>Création de votre compte</h1>

<div id="mainContainer_user_register">

  <div id="block_register">

    

    

    <!-- Formulaire de création de compte pour les participants -->

    <form @submit.prevent="register">

      <img src="../assets/logo_nsu.png">

    <div class="input-container">        
        <label for="lastname">Nom* : </label>
        <input
        type="text"
        id="lastname"
        v-model="lastname_users"
        placeholder="Nom"
        required/>
    </div>  

    <div class="input-container">
        <label for="firstname">Prénom* : </label>
        <input
        type="text"
        id="firstname"
        v-model="firstname_users"
        placeholder="Prénom"
        required/>
    </div>
     
    <div class="input-container">
        <label for="emailInput">Email* : </label>
        <input
          type="email"
          id="emailInput"
          v-model="email_users"
          placeholder="Email"
          required/>
    </div>

    <div class="input-container">
        <label for="passwordInput">Password* : </label>
        <input
          type="password"
          id="passwordInput"
          v-model="password"
          placeholder="Entrez votre mot de passe"
          required/>
    </div>

    <div class="input-container">
        <label for="addressInput">Votre adresse : </label>
        <input
          type="text"
          id="addressInput"
          placeholder="Adresse"
          v-model="adress_users"/>
          
    </div>

     <div class="input-container">
        <label for="linkedinInput">Votre compte Linkedin : </label>
        <input
          type="text"
          id="linkedinInput"
          placeholder="monlinkedin.com"
          v-model="likedin_link_users"/>
    </div>

    <div class="input-container">
        <label for="webInput">Votre site internet : </label>
        <input
          type="text"
          id="webInput"
          placeholder="monsite.fr"
          v-model="web_link_users"/>
    </div>

    <div class="input-container">
        <label for="githubInput">Votre compte Github : </label>
        <input
          type="text"
          id="githubInput"
          placeholder="mongithub.com"
          v-model="github_link_users"/>
    </div>

    <div class="input-container">
        <label for="portfolioInput">Votre Portfolio : </label>
        <input
          type="text"
          id="portfolioInput"
          placeholder="monportfolio.fr"
          v-model="portfolio_link_users"/>
    </div>

    <div class="input-container"> 
      
        <input type="hidden" :id="event_id" name="event_id" :value=this.$route.params.event_id required/>
    </div>

    <div class="input-container">
        <label for="portfolioInput">Votre Description : </label>
        <textarea
          type="text"
          id="bioInput"
          placeholder="Biographie"
          
          v-model="biography_users">
        </textarea>
    </div>

    <div class="btn_form">
    <button v-on:click="user_register"
          type="submit"
          class="btn btn-dark"
          name="user_register_btn"
          id="user_register_btn" 
          >Valider</button>

    <button v-on:click="redirect_return"
          type="submit"
          class="btn btn-dark"
          name="redirect_return_btn"
          id="redirect_return_btn" 
          >Retour</button>
    </div>
   
    <p id="required_data">(*) Champs obligatoires </p>

    </form>
  </div>
    <p v-if="result === true" class="success">creation de votre compte réussie</p>
    <p v-else-if="result === false" class="error">creation échouée</p>
  </div>

</template>

<script>

import config from "@/config";

export default {
    name: "NewUserRegister",

    data() {
    return {
      users: [],
      firstname_users: "",
      lastname_users: "",
      email_users: "",
      password: "",
      adress_users:"",
      likedin_link_users:"",
      web_link_users:"",
      github_link_users:"",
      portfolio_link_users:"",
      biography_users:"",
      event_id:this.$route.params.event_id ,
      token: "",
      result: null,
    };
  },

   methods: {

    /* Création d'un User */

    async user_register() {
      const body = {
        firstname_users: this.firstname_users,
        lastname_users: this.lastname_users,
        email_users: this.email_users,
        password: this.password,
        adress_users: this.adress_users,
        likedin_link_users: this.likedin_link_users,
        web_link_users: this.web_link_users,
        github_link_users: this.github_link_users,
        portfolio_link_users: this.portfolio_link_users,
        biography_users: this.biography_users,
        event_id:this.event_id,

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

      const response = await fetch(config.apiUrl + "/newusers/"+this.event_id, options);

      const data = await response.json();
      this.result = data.success;

      if (data.success === "true" ) {
      this.token = data.token;
        localStorage.setItem("token", this.token);
        this.$router.push("/profile/")}
    },
  },
          // +data.id
    redirect_return() {
     this.$router.push("/profile/");
    }          

}
</script>

<style scoped>

#mainContainer_user_register {
    display: flex;
    flex-direction: column;
    width: 30%;
    border-radius: 15px;
    background-color: black;
    color: white;
    border: 5px solid red;
    margin: 3rem auto;
    padding: 3rem;

}

textarea {
     
     border-radius: 5px;
     align-items: center;
     text-align: center;
}


#user_register_btn {
    margin: 1rem;
}

button {
  background-color: red;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  
  }

input {
  text-align: center;
  border-radius: 15px;
}


</style>

