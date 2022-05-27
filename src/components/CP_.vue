<template>
  <div>

    <div class="container-fluid">
      <div class="row">
         <div class="col-sm-3">
            <cpSelectTable/>
          </div>
          <div class="col-sm-9">
            <cpTabNav :tabs="['DI','AI','DPS']" :selected="selected" @selected="setSelected"/>
              <cpDIContent :isSelected="selected === 'DI'">
              <cpAIContent :isSelected="selected  === 'AI'">
              <cpDPSContent :isSelected="selected === 'DPS'">
          </div>
      </div>
    </div>


  




  </div>

</template>

<script>
import cpSelectTable from "./CP_SelectTable.vue";
import cpPointsTable from "./CP_PointsList.vue";
import cpTabNav from "./CP_TabNav.vue";
import cpDPSContent from "./CP_DPSContent.vue";
import cpDIContent from "./CP_DI-Content.vue";
import cpAIContent from "./CP_AI-Content.vue";

export default {
    name: "cp",

    components: {
        cpSelectTable,
        cpPointsTable,
        cpTabNav,
        cpDPSContent,
        cpDIContent,
        cpAIContent,
    },
    data() {
        return {
            selected: "DI",
        };
    },

    mounted() {
        uibuilder.start();
        uibuilder.onChange("msg", (newMsg) => {
            console.info("Msg received from Node-RED server in Home:", newMsg);
        });
       
    },

    methods: {
        setSelected(tab) {
            this.selected = tab;
            this.$bus.$emit("selected", this.selected);
        },
    },
};
</script>

<style scoped>
</style>