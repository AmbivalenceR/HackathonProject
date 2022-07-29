<template>
  <div>
    <h3>Choisis ton évènement</h3>

    <!-- Récupération des évènements -->
    <ul id="list_event">
      <li id="event" v-for="event in events" :key="event.id">
        <h3 >{{ event.names_events }}</h3>
        <p>Date de début de l'évènement: {{ event.start_dates_events }}</p>
        <p>Date de fin de l'évènement: {{ event.end_dates_events }}</p>
        <p>
          Date limite d'inscription: {{ event.end_dates_inscriptions_events }}
        </p>
        <p>Lieu de l'évènement: {{ event.location_events }}</p>

        <button
          type="submit"
          class="btn btn-danger"
          name="inscription_btn"
          :id="event.id"
          v-on:click="inscription_event"
        >
          S'inscrire
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import config from "@/config";

export default {
  name: "ListEvent",

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
    /* Récupération des évènements */
    async getEvents() {
      const response = await fetch(config.apiUrl + "/event", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();

      this.events = data.event;
    },

    inscription_event(e) {
      let event_id = e.target.id;


    this.$router.push({name:"LoginRegister", params: {event_id}});
    },

    recupid(e) {
      let id = e.target;
      
    },
  },

  mounted() {
    this.getEvents();
  },
};
</script>

<style scoped>
#list_event {
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#event {
  margin: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  background-color: black;
  color: white;
  border: 5px solid red;
}

li {
  list-style: none;
}

button {
  background-color: red;
}
</style>
