<template>
  <div>
    <!-- <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
       <a
          class="nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          ref="nav_di"
          >DI</a>
        <a
          class="nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
          ref="nav_ai"
          >AI</a
        >
        <a
          class="nav-link"
          id="nav-contact-tab"
          data-toggle="tab"
          href="#nav-contact"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
          ref="nav_dps"
          >DPS</a
        > 
      </div>
    </nav> -->

   
  </div>
</template>

<script>

export default {
  name: "cpPointsTable",
  data() {
    return {
      
    };
  },
  mounted() {
  
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in Home:", newMsg);
    });
  },

 
};
</script>

<style scoped>
</style>