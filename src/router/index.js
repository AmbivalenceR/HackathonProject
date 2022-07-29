import { createRouter, createWebHistory } from "vue-router";

import LoginParticipantView from "../views/LoginParticipantView.vue";
import LoginAdminView from "../views/LoginAdminView.vue";
import UsersListView from "../views/UsersListView.vue";
import EventsView from "../views/EventsView.vue";
import EventUniqueView from "../views/EventUniqueView.vue";
import ProfileView from "../views/ProfileView.vue";
import HomeEventView from "../views/HomeEventView.vue";
import LoginRegisterParticipantView from "../views/LoginRegisterParticipantView.vue";
import RegisterParticipantView from "../views/RegisterParticipantView.vue";
import QRGeneratorView from "../views/QRGeneratorView.vue";
import TeamsListView from "../views/TeamsListView.vue";


const routes = [
  {
    path: "/LoginAdmin",
    name: "LoginAdmin",
    component: LoginAdminView,
  },
  {
    path: "/Login/:event_id",
    name: "Login",
    component: LoginParticipantView,
    beforeEnter: (to, from,next) => {
      let array = [1, 2, 4]
    
      if (array.indexOf(Number(to.params.event_id)) == -1)      
      alert('Error'),
      next(false);
      else
          next()
  }
  },

  {
    path: "/Users",
    name: "Users",
    component: UsersListView,
  },

  {
    path: "/Events",
    name: "Events",
    component: EventsView,
  },

    {
    path: "/Event/:event_id",
    name: "EventUnique",
    component: EventUniqueView,
  },

  

  {
    path: "/profile/",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/HomeEvent",
    name: "HomeEvent",
    component: HomeEventView,
  },
  {
    path: "/TeamsList",
    name: "TeamsList",
    component: TeamsListView,
  },
  {
    path: "/LoginRegister/:event_id",
    name: "LoginRegister",
    component: LoginRegisterParticipantView,
  },

  {
    path: "/Register/:event_id",
    name: "Register",
    component: RegisterParticipantView,
  },

  {
    path: "/QRGenerator",
    name: "QRGenerator",
    component: QRGeneratorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
