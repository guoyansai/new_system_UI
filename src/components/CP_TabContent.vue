<template>
  <div v-if="isSelected">
    <p>This is Content</p>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "cpTabContent",
  
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