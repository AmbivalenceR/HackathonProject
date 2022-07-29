<template>
 
  <div id="edit_user_page">
    <form @submit.prevent="updateProfile">
      
        <h2>Profil du Challenger {{user.email_users}}</h2>
         
      
        <div class="avatar">
          <div>
            <img
              :src="'http://hackathonback-david/storage/' + user.image_link_users" alt="Avatar" class="img-fluid rounded-start"/>
          </div><br>
          <div class="item">
            <label for="image_link_users">Modifier votre avatar :</label><br><br>
            <input
              type="file"
              name="image_link_users"
              id="image_link_users"
              accept=".jpg, .jpeg, .png, .webp"
            />
          </div>
        </div>

      <div class="container_name_adress_bio">
        <div class="label_input">
          <label>Prénom :</label>
          <input
            type="text"
            name="firstname_users"
            id="firstname_users"
            v-model="user.firstname_users"
            required
          />
          <br />
          <label>Nom :</label>
          <input
            type="text"
            name="lastname_users"
            id="lastname_users"
            v-model="user.lastname_users"
            required
          />
        </div>
      

      
        <div class="label_input">
          <label>Adresse :</label>
          
          <textarea
            type="text"
            name="adress_users"
            id="adress_users"
            v-model="user.adress_users"
          ></textarea>
        </div>
        
        <div class="label_input">
          <label>Ma bio :</label>
          
          <textarea
            type="text"
            name="biography_users"
            id="biography_users"
            v-model="user.biography_users"
          ></textarea>
        </div>
      </div>

      <div class="container">
      <div class="label_input">
        <fieldset>
          <h4>Compétences</h4>
          <ul>
            <li v-for="(skill, index) in skills" :key="index">
              <input :checked="hasUserSkill(skill.id)" type="checkbox" />
              <!-- </p> -->
              <label for="dev">{{ skill.name_skills }}</label>
            </li>
          </ul>
        </fieldset>
      </div>

      <div class="challenger_logo">
        <img src="../assets/challenger_logo.jpg">
      </div>

      <div class="container_link">
      <div class="label_input">
        <label>Site Web :</label>
        <input
          type="url"
          name="web_link_users"
          id="web_link_users"
          v-model="user.web_link_users"
          placeholder="http://www.monsite.com"
        />
      </div>

      <div class="label_input">
        <label>Linkedin :</label>
        <input
          type="url"
          name="likedin_link_users"
          id="likedin_link_users"
          v-model="user.likedin_link_users"
          placeholder="http://www.monlinkedin.com"
        />
      </div>

      <div class="label_input">
        <label>Github :</label>
        <input
          type="url"
          name="github_link_users"
          id="github_link_users"
          v-model="user.github_link_users"
          placeholder="http://www.mongithub.com"
        />
      </div>

      <div class="label_input">
        <label>Portfolio :</label>
        <input
          type="url"
          name="portfolio_link_users"
          id="portfolio_link_users"
          v-model="user.portfolio_link_users"
          placeholder="http://www.monportfolio.com"
        />
      </div>
    </div>
    </div>

      <br />
      <div>
        <button type="submit" name="update_profil_btn" id="update_profil_btn" class="btn btn-dark">
          Valider
        </button>
      </div>
    </form>
  </div>


  <div class="container_qr_event" id="Profil_infos">
    <div class="events">
    <h3>Mes évènements :</h3>

    <p>Liste des évènements inscrit :</p>

    <div v-for="userevent in userevents" :key="userevent.id">
      <div v-for="event in events" :key="event.id">
        <p v-if="userevent.event_id == event.id" for="dev">
          {{ event.names_events }}
        </p>
      </div>
    </div>
  </div>
  
  <div id="Card_profile">
    <h3>Mon QRCode :</h3>
    <div id="myQrCode">
      <p><qrcode-vue :value="JSON.stringify(this.user)" :size="300" level="H" /></p>
      <p><button class="btn btn-dark" id="qrCodePrint" @click="printWindow()">Impression QrCode</button></p>
    </div>
  </div>
  </div>
</template>

<script>
import config from "@/config";
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    QrcodeVue,
  },

  data() {
    return {
      token: localStorage.getItem("token"),
      user: {},
      skills: [],
      userevents: [],
      user_firstname: "",
      user_lastname: "",
      user_email: "",
      user_skills: "",
      user_linkedin: "",
      user_github: "",
      user_portfolio: "",
      eventId: this.$route.params.event_id ,
        events:"",
    };
  },

  mounted() {
    this.getProfile();
    this.getEvent();
  },

  methods: {
    async getProfile() {
      const response = await fetch(config.apiUrl + "/profiles", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.token,
        },
      });

      const data = await response.json();

      this.user = data.user;
      this.skills = data.skills;
      this.user_firstname = data.user.firstname_users;
      this.user_lastname = data.user.lastname_users;
      this.user_email = data.user.email_users;
      this.user_skills = data.user.user_skills;
      this.user_linkedin = data.user.linkedin_link_users;
      this.user_github = data.user.github_link_users;
      this.user_portfolio = data.user.portfolio_link_users;
    },

    hasUserSkill(skillId) {
      const index = this.user.user_skills.findIndex(
        (us) => us.skill_id === skillId
      );
      return index != -1;
    },

    async updateProfile(e) {
      const form = e.target;

      const response = await fetch(config.apiUrl + "/profiles?_method=PUT", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.token,
        },
        body: new FormData(form),
      });

      const data = await response.json();

      this.user = data.user;
      this.userevents = data.user;

      this.$router.go()
    },

    printWindow: function () {
      window.print(Card_profile);

      // var prtContent = document.getElementById("myQrCode");
      // var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      // WinPrint.document.write(prtContent.innerHTML);
      // WinPrint.document.close();
      // WinPrint.focus();
      // WinPrint.print();
      // WinPrint.close();
    },

    async getEvent() {
        const response = await fetch(config.apiUrl + `/event/${this.eventId}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
        });
        const data = await response.json();
        this.events = data.event;
        console.log(data);
      },
  }
  
};
</script>

<style scoped>

/* #Profil_infos,
#Card_profile {
  text-align: center;
  border: solid;
  padding: 2rem;
  margin: 3rem auto;
  background-color: white;
  border-radius: 15px;
  border: 2px solid black;
  width: 60%;
} */

#edit_user_page {
  border-radius: 15px;
  background-color: black;
  color: white;
  border: 5px solid red;
  margin: 1.5rem auto;
  padding: 2rem;
  width: 70%;
}

li {
  list-style: none;
}

.label_input {
  display: flex;
  flex-direction: column;
  margin: 0.25rem;
}

.container {
  display: flex;
  justify-content: space-between;
  margin:1rem auto;
}

.container_link {

  display: flex;
  justify-content: space-between;
  margin:1rem;
  flex-direction: column;

}

.container_name_adress_bio{
  display: flex;
  justify-content: space-between;
  margin:1rem auto;
  flex-direction: column;
  width: 50%;
}

ul {
  text-align: initial;
}

h2 {
  margin-bottom: 3rem;
}

input {
  text-align: center;
}

button {
  background-color: red;
}

.container_qr_event {
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  background-color: black;
  color: white;
  border: 5px solid red;
  margin: 1.5rem auto;
  padding: 2rem;
  width: 70%;
}

#Card_profile {
    background-color: white;
    color: black;
    padding: 1rem;
    border-radius: 15px;
}
</style>
