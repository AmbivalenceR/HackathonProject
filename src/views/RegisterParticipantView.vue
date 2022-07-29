<template>
<!-- <Register /> -->
<RegisterParticipant />

</template>

<script>
import config from "@/config";
import RegisterParticipant from '@/components/RegisterParticipant.vue'
// import Register from '@/components/Register.vue';

export default {

  name: "LoginRegisterView",

   components: {
        RegisterParticipant,
      // Register,
    },

  };
</script>

<style scoped>

</style>

