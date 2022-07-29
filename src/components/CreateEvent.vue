<template>

<!-- Formulaire de création d'un évènement -->
  <div id="create_event_form">
    <form @submit.prevent="createEvent">
      <h3>Créer un évènement</h3>

      <div class="input-container">
        <label>Nom de l'évènement: </label>
        <input
          type="text"
          name="input_name_event"
          id="input_name_event"
          v-model="names_events"
          required
        />
      </div>

      <div class="input-container">
        <label>Date de début de d'évènement: </label>
        <input
          type="date"
          name="input_start_dates_events"
          id="input_start_dates_events"
          v-model="start_dates_events"
          required
        />
      </div>

      <div class="input-container">
        <label>Date de fin de d'évènement: </label>
        <input
          type="date"
          name="input_end_dates_events"
          id="input_end_dates_events"
          v-model="end_dates_events"
          required
        />
      </div>

      <div class="input-container">
        <label>Date limite d'inscription: </label>
        <input
          type="date"
          name="input_end_register_dates_events"
          id="input_end_register_dates_events"
          v-model="end_dates_inscriptions_events"
          required
        />
      </div>

      <div class="input-container">
        <label>Lieu de l'évènement: </label>
        <input
          type="text"
          name="input_place_event"
          id="input_place_event"
          v-model="location_events"
          required
        />
      </div>

      <p>
        <button
          class="btn btn-dark"
          v-on:click="create_event"
          type="submit"
          name="create_event_btn"
          id="create_event_btn"
        >
          Valider
        </button>
      </p>
    </form>
  </div>
</template>

<script>
import config from "@/config";

export default {
  name: "CreateEvent",

  data() {
    return {
      events: [],
      names_events: "",
      start_dates_events: "",
      end_dates_events: "",
      end_dates_inscriptions_events: "",
      location_events: "",
    };
  },

  methods: {

    /* Création d'un Evènement */

    async createEvent() {
      const body = {
        names_events: this.names_events,
        start_dates_events: this.start_dates_events,
        end_dates_events: this.end_dates_events,
        end_dates_inscriptions_events: this.end_dates_inscriptions_events,
        location_events: this.location_events,
      };

      const response = await fetch(config.apiUrl + "/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      console.log(data);

      this.$router.go()
    },
  },
};
</script>

<style scoped>
#create_event_form {
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

button {
  background-color: red;
  margin-top: 1rem;
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
