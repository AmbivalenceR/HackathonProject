<template>
<div>
 
    
<h1> Evènements Hackathon </h1>
           
        <CreateEvent />
        <ListEvent />
  
 </div>
</template>



<script>

import CreateEvent from '@/components/CreateEvent.vue'
import ListEvent from '@/components/ListEvent.vue'


export default {
    name: "EventView",
    components: {
        CreateEvent, ListEvent
    }
        
}

</script>

<style scoped>

</style>