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
                        <div class="col-sm">
                            <csToolsTable />
                        </div>
                    </div>
                </div>

                <div class="col-sm-10">
                    <div class="row">

                        <div class="col">
                            <div class="row">
                                <div class="col">
                                    <csCanvasModel :canvas="canvas" :canvasComponent="canvasComponent" />
                                </div>
                                <div class="col">
                                    <DrawBoard ref="canvas" />
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <div class="row">

                                <div class="col">
                                    <div class="row">
                                        <div class="col-4">
                                            <ShopeBtnsList 
                                            @add-buttons="createButton($event)" 
                                            :buttons="buttons" 
                                            @add-image="addImage"/>
                                        </div>
                                        <div class="col-8">
                                            <csShopeEditor @change-Objwidth="changeObjWidth($event)"
                                                @change-ObjHeight="changeObjHeight($event)" />
                                        </div>
                                    </div>

                                </div>
                                <div class="w-100"></div>
                                <div class="col">
                                    <!-- <csShopeColorPicker @update-color="changObjColor($event)" ref="colorPicker" /> -->
                                </div>



                            </div>
                            <div class="row">
                                <div class="col">

                                </div>
                            </div>

                        </div>


                    </div>


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
                    type: "Rectangle",
                },
                {
                    type: "Circle",
                    imgSrc: require("../icons/edit.svg"),
                },
                {
                    type: "Triangle",
                },
                {
                    type: "Line",
                },
                {
                    type: "Text",
                }
            ],

            canvasComponent: undefined,
            canvas: undefined,

        };
    },

    methods: {
        changObjColor(event) {
            if (event) {
                this.canvasComponent.setCanvasObjFillColor(event.hex8);
            }
        },
        changeObjWidth(event) {
            let value = event.target.value
            this.canvasComponent.changeObjWidth(value)
        },
        changeObjHeight(event) {
            let value = event.target.value
            this.canvasComponent.changeObjHeight(value)
        },
        createButton(event) {
            switch (event.target.dataset.key) {
                case "Circle":
                    this.canvasComponent.createCir(this.canvas);
                    break;
                case "Rectangle":
                    this.canvasComponent.createRec(this.canvas);
                    break;
                case "Trianlge":
                    this.canvasComponent.createTri(this.canvas);
                    break;
                case "Line":
                    this.canvasComponent.createLine(this.canvas);
                    break;
                case "Text":
                    this.canvasComponent.createText(this.canvas);
                    break;
                default:
            }

        },
        addImage() {
             console.log("clicked");
            this.canvasComponent.addImageCanvas();
        },
    },


    mounted() {
        this.canvasComponent = this.$refs.canvas;
        this.canvas = this.$refs.canvas._data.canvas;

    },
};
</script>

<style >
</style>
