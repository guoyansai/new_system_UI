<template>
    <div>
        <!-- <h1>Customer Shopes</h1> -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2">
                    <div class="row">
                        <div class="col-sm">
                            <csTable />
                        </div>
                        <!-- <div class="col-sm">
                            <csToolsTable />
                        </div> -->
                    </div>
                </div>

                <div class="col-sm-10">
                    <div class="row">
                        <div class="col">
                            <csCanvasModel 
                            :canvas="canvas"
                            :canvasComponent="canvasComponent"
                            ref="editor"/>
                        </div>
                        <div class="col">
                            <DrawBoard ref="canvas"/>
                        </div>
                        <div class="col">
                            <ShopeBtnsList 
                            @add-buttons="createButton($event)"
                            :buttons="buttons" /></div>
                            <csShopeColorPicker 
                            @update-color="changObjColor($event)" 
                            ref="colorPicker" />
                            
                        </div>
                        <div class="col">
                            <csShopeEditor 
                             @change-Objwidth="changeObjWidth($event)"/>
                        </div>
                    <!-- <csTools /> -->
                
                </div>

               

               
            </div>
        </div>
    </div>
</template>

<script>
import csTable from "./CS_Table.vue";
import csTools from "./CS_Tools.vue";
import csToolsTable from "./CS_Tools_Table.vue";
import ShopeBtnsList from "./CS_ShopeBtnsList.vue";
import DrawBoard from "./CS_DrawBoard.vue";
import csCanvasModel from "./CS_CanvasModel.vue";
import csShopeColorPicker from "./CS_ShopeColorPicker.vue";
import csShopeEditor from "./CS_ShopeEditor.vue";


export default {
    name: "CS",
    components: {
        csTable,
        csTools,
        csToolsTable,
        ShopeBtnsList,
        DrawBoard,
        csCanvasModel,
        csShopeColorPicker,
        csShopeEditor
    },

    data() {
        return {
           
            buttons: [
                {
                    type: "Circle",
                    icon: "circle-fill",
                   
                },
                {
                    type: "Rectangle",
                    icon: "square-fill",
                   
                },
            ],

            canvasComponent: undefined,
            canvas: undefined,
        };
    },
  
    methods: {
        changObjColor(event){
            if (event) {
                this.canvasComponent.setCanvasObjFillColor(event.hex8);
            }
        },
        changeObjWidth(event){
            let value = event.target.value
            this.canvasComponent.changeObjWidth(value)
        },
        createButton(event) {
          
            if (event.target.dataset.key === "Circle") {
                console.log("Circle")
                this.canvasComponent.createCir(this.canvas);
            } else if (event.target.dataset.key === "Rectangle") {
                console.log("Rectangle")
                 this.canvasComponent.createRec(this.canvas);

            }
        }

    },

    
     mounted() {
        this.canvasComponent = this.$refs.canvas;
        this.canvas = this.$refs.canvas._data.canvas;
    },
};
</script>

<style scoped>
</style>
