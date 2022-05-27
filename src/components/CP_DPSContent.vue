<template>
  <div>


    <div v-if="isSelected">
       
       
         <p>This is Content</p>
      

    </div>
   


  </div>
</template>

<script>

export default {
  name: "cpDPSContent",
  
  props:{
    isSelected:{
      type: Boolean
    }
  },



  data() {
    return {
    
    };
  },


  mounted() {
   
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in Home:", newMsg);
    });
  },


  methods: {
   
  },



















};
</script>

<style scoped>
</style>