<template>
  <div>
    <div class="container-fluid">
      <div class="row">

        
        <div class="col-sm-2">
         
          <csTable />
          
        </div>




        <div class="col-sm-6">

          <!-- Canvas drawe board -->
          <div id="canvasId">
            <canvas ref="canvas" id="canvasId"></canvas>
          </div>

        </div>

        <div class="col-sm-4">
           <elTable/>
          
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import csTable from "./CS_Table.vue";
import elTable from "./El_Table.vue";

import cpTabNav from "./CP_TabNav.vue";
import cpDPSContent from "./CP_DPSContent.vue";
import cpDIContent from "./CP_DIContent.vue";
import cpAIContent from "./CP_AIContent.vue";

export default {
  name: "El",
  components: {
    csTable,
    elTable,
    cpTabNav,
    cpDPSContent,
    cpDIContent,
    cpAIContent,
  },

  data() {
    return {
      shopesList:[],
      editorCanvas:null,
      
    };
  },
   created (){
     //CS_Table.vue
    this.$bus.$on('CS_Table_Item', (data) => {
     // console.log(data);
      if(data !=[] || data != null){
        var canvasJson = `{"version":"5.2.1","objects":${data.shopesList}}`;
        this.shopesList = canvasJson;
        this.editorCanvas.loadFromJSON(this.shopesList); 
       // console.log(this.shopesList);
      }

    })
  },
  mounted() {
    this.initCanvas();
    
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in Page1:", newMsg);
      //this.msg = newMsg
    });
  },

  methods: {
   

    initCanvas() {
      this.editorCanvas = new fabric.StaticCanvas(this.$refs.canvas, {
        devicePixelRatio: true,
        width: 500,
        height: 500,
        // backgroundColor:"",
      });
      this.editorCanvas.preserveObjectStacking = true;
      this.$bus.$emit("El_Canvas",this.editorCanvas)
    },

  



  },
};
</script>

<style scoped>

#canvasId {
  width: 500px;
  height: 500px;
  background-color: rgb(255, 255, 255);
  border: 2px solid black;
}
</style>