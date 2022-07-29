<template>
<section>
  <LoginAdmin/>
</section>


</template>

<script>
import config from "@/config";
import LoginAdmin from "../components/Login.vue";

export default {

  name: "AdminRegisterView",

   components: {
       LoginAdmin,
 
    },

  };
</script>

<style scoped>

</style>

