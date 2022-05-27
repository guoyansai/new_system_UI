<template>
    <div>
        <!-- left 
        
            1.Views Table 
            2.Vies Shapes Table
        ----- Right

            1.Shopes Tools
            2.Customer Shopes Table
        ----- Middle

            1.Vie  
            2.Point -> X ,Y ,%
        -->

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2">
                    <guiViewsTable />
                </div>

                <div class="col-sm-7">
                    <!-- Canvas drawe board -->
                    <div id="viewName"></div>
                    <div id="canvasId">
                        <canvas ref="canvas"></canvas>
                    </div>
                </div>

                <div class="col-sm-2">
                     <guiElementsTable />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">
                   <!-- <div class="form-group">
                        <label for="shope">Shape Type</label>
                        <select  
                            class="custom-select"
                           
                            >
                            <!--eslint-disable-next-line-->
                            <!-- <option :key="null" disabled selected>
                                Select Shope Type
                            </option> -->
                            <!-- <option v-for="(item,key) in shopeTypeArr" :key="key" @click="shopeTypeChange(item,key)">
                                {{ item.text }}
                            </option> 
                        </select>
                    </div>-->

                   

                   





                </div>
                <div class="col-sm-7"></div>
                <div class="col-sm-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import guiViewsTable from "./GUI_ViewsTable.vue";
import guiViewShopesTable from "./GUI_ViewShopesTable.vue";
import guiShopesTools from "./GUI_ShopesTools.vue";
import csTabl from "./CS_Table.vue";
import guiElementsTable from "./GUI_ElementsTable.vue";

export default {
    name: "GUI",
    components: {
        guiViewsTable,
        guiViewShopesTable,
        guiShopesTools,
        csTabl,
        guiElementsTable
    },

    data() {
        return {
            viewItem: [],
            editorCanvas: null,
            bgColor: "#000000",
            viewName: "",
            viewItem: "",
            viewList:[],
            viewObjs: [],

            shopeTypeArr: [
                { id: 1, text: "Elements (DI / DPS)" },
                { id: 2, text: "Object Text (AI)" },
                { id: 3, text: "Custom Shopes" },
            ],
            shope: null,
            shopeModel:null,
            shopeTypeKey: 0,
            currentOption:"",
        };
    },

    created() {
        this.$bus.$on("viewList", (data) => {
            console.log(data);
            this.bgColor = data.color;
            this.viewName = data.name;

            this.editorCanvas.set({
                background: this.bgColor,
            });
            this.editorCanvas.renderAll();
            var viewDiv = document.getElementById("viewName");
            viewDiv.innerText = this.viewName;
        });

        this.$bus.$on("CS_Table_Item", (data) => {
            // console.log(data);
            // loading -> add to canvas
            var objs = this.viewObjs;

            var obj = data.shopesList.slice(30, -2);
            objs.push(obj);
            var canvasJson = `{"version":"5.2.1","objects":[${objs}]}`;
            this.editorCanvas.loadFromJSON(canvasJson);

        });
    },

    mounted() {
        this.initCanvas();
    },
    computed: {},
    methods: {
        initCanvas() {
            this.editorCanvas = new fabric.Canvas(this.$refs.canvas, {
                devicePixelRatio: true,
                width: 1756,
                height: 786,
                background: this.bgColor,
                hoverCursor: "progress", // 移動時鼠標顯示
            });
            this.editorCanvas.preserveObjectStacking = true;
            this.$bus.$emit("gui_editorCanvas", this.editorCanvas);
        },

        getElements() {},
        getCustomShopes() {},

        shopeTypeChange(item,key) {
            console.log(item);
            console.log(key);
          
            //this.shopeTypeKey = key
            //var item = e.target.value;
            //this.currentTool = e.target.value;
           // console.log(this.currentTool);
            // switch(e.target.value){
            //     case "Elements (DI / DPS)":
                    
            //         break;
            //     case "Object Text (AI)":
                    

            //         break;
            //     case "Custom Shopes":
                    

            //         break;
           // }
        },
    },
};
</script>

<style scoped>
#canvasId {
    width: 1756px;
    height: 786px;
    border: 2px solid black;
}
</style>