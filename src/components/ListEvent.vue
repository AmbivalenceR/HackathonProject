<template>
  <section>
    <!-- Récupération des évènements dans la BDD -->
    <div class="jumbotron">
      <h2>Liste des évènements</h2>

      <ul id="list_event">
        <li id="event" v-for="event in events" :key="event.id">
          <h4 :id="event.id" @click="recupid">{{ event.names_events }}</h4>
          <br />
          <p>Date de début de l'évènement: {{ event.start_dates_events }}</p>
          <p>Date de fin de l'évènement: {{ event.end_dates_events }}</p>
          <p>
            Date limite d'inscription: {{ event.end_dates_inscriptions_events }}
          </p>
          <p>Lieu de l'évènement: {{ event.location_events }}</p>
          <br />

          <!-- Modification d'évènement -->
          <p>
            <button
              class="btn btn-dark"
              @click="showModal(event.id)"
              name="edit_event_btn"
              id="edit_event_btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#editEventModal"
            >
              Modifier
            </button>

            <!-- Suppression d'évènement -->
            <button
              type="submit"
              class="btn btn-dark"
              name="delete_event_btn"
              id="delete_event_btn"
              @click="deleteEvent(event.id)"
            >
              Supprimer
            </button>
          </p>

          <!-- Modal Modifier Evenement -->
          <div
            class="modal fade"
            id="editEventModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <center>
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modification de l'évènement
                    </h5>
                  </center>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form class="editEventForm" action="" method="post">
                    <p><label>Nom de l'évènement</label></p>
                    <p><input type="text" placeholder="Nom" /></p>
                    <br />

                    <p><label>Date de départ de l'évènement</label></p>
                    <p><input type="date" placeholder="Date de départ" /></p>
                    <br />

                    <p><label>Date de fin de l'évènement</label></p>
                    <p><input type="date" placeholder="Date de fin" /></p>
                    <br />

                    <p><label>Date limite d'inscription</label></p>
                    <p>
                      <input
                        type="date"
                        placeholder="Date limite d'inscription"
                      />
                    </p>
                    <br />

                    <p><label>Lieu de l'évènement</label></p>
                    <p><input type="text" placeholder="Lieu" /></p>
                    <br />

                    <button
                      type="submit"
                      class="btn btn-dark"
                      v-on:click="update_profil"
                    >
                      Enregistrer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import config from "@/config";

export default {
  name: "ListEvent",

  data() {
    return {
      events: [],
      eventId: "",
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
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      const data = await response.json();

      this.events = data.event;
    },

    showModal(id) {
      this.eventId = id;
      this.getEvents();
    },

    /* Modification des évènements */

    async editEvent() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(config.apiUrl + "/event", options);

      const data = await response.json();
      this.events = data.event;

      this.dataReady = "ok";
    },

    /* Supression des évènements */

    async deleteEvent(event) {
      const response = await fetch(config.apiUrl + `/event/${event}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();

      this.events.splice(this.events.indexOf(event), 1);
      this.getEvents();
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  list-style: none;
}

#event {
  margin: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  background-color: black;
  color: white;
  border: 5px solid red;
}

button {
  margin: 1rem;
  background-color: red;
}

.modal-content {

  margin: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  background-color: black;
  color: white;
  border: 5px solid red;

}

input {
  text-align: center;
}


</style>
