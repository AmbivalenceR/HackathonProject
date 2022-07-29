<template>
  <div>
    <h1> Gestion des équipes </h1>

    <!-- <CreateTeam /> -->
    <br>
    <TeamList />
   
  </div>
</template>

<script>
import TeamList from "@/components/TeamList.vue";
import CreateTeam from "@/components/CreateTeam.vue";

export default {
  name: "TeamsListView",
  components: {
    TeamList, CreateTeam,
  },
};
</script>
