<template>
  <div>
      <LoginParticipant />
     </div>

</template>

<script>
import LoginParticipant from "../components/Login.vue";


export default {
  
  components: {
    LoginParticipant,

  },
  data() {
    return {
      isDisplay: true,
    };
  },

  computed: {
    ShowCreation() {
      this.isDisplay = !this.isDisplay;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
}

#log {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.507);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: 30%;
  align-items: center;
  margin-top: 2%;
  margin-left: 36%;
  z-index:10000;
}

video {
  resize: both;
  width: 100%;
  height: 100%;
  
}

#inscriptionBtn {
  margin: 20px;
  padding: 10px;
  background-color: black;
  color: white;
  border: 0px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
}

#inscription {
  position:relative;
  z-index: 10000;
}
</style>
