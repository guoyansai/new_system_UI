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
                                    <DrawBoard ref="canvas" @points="getCoordPoints"/>
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <div class="row">

                                <div class="col">
                                    <div class="row">
                                        <div class="col-4">
                                            <ShopeBtnsList @add-buttons="createButton($event)" :buttons="buttons"
                                                @add-image="addImage" />
                                        </div>
                                        <div class="col-8">
                                            <div class="row">
                                                <div class="col-12">
                                                    <csShopeEditor :inp_width="inp_width" 
                                                    :inp_height="inp_height"
                                                        :inp_color="inp_color"
                                                        :inp_borderW="inp_borderW" 
                                                        :inp_borderC="inp_borderC"
                                                        :inp_position_x="inp_position_x"
                                                        :inp_position_y="inp_position_y" 
                                                        :inp_zoom="inp_zoom"
                                                        @change-ObjWidth="changeObjWidth($event)"
                                                        @change-ObjHeight="changeObjHeight($event)"
                                                        @change-ObjColor="changeObjColor($event)"
                                                        @change-ObjBorderW="changeObjBorderW($event)"
                                                        @change-ObjBorderC="changeObjBorderC($event)"
                                                        @change-ObjObjPositionX="changeObjPositionX($event)"
                                                        @change-ObjObjPositionY="changeObjPositionY($event)"
                                                        @change-ObjRadius="changeObjRadius($event)" />
                                                </div>
                                                <div class="col-12">
                                                    <csInputsRadius :inp_radius="inp_radius"/>
                                                </div>
                                                <div class="col-12">
                                                    <csInputsTextBox 
                                                        :inp_font_size="inp_font_size"
                                                        :inp_font_style="inp_font_style"
                                                        @change-textSize="changeTextSize($event)"
                                                        @change-textWeight="changeTextWeight($event)" />
                                                </div>
                                                <div class="col-12">
                                                    <csInputsArcBox 
                                                    :inp_arcStart="inp_arcStart"
                                                    :inp_arcEnd="inp_arcEnd"
                                                    @change-ObjArcStart="changeObjArcStart($event)"
                                                    @change-ObjArcEnd="changeObjArcEnd($event)"
                                                    />
                                                </div>
                                                <div class="col-12">
                                                    <csInputsCoordBox 
                                                    :inp_CoordX="inp_CoordX"
                                                    :inp_CoordY="inp_CoordY"
                                                    @change-ObjCoordX="changeObjCoordX($event)"
                                                    @change-ObjCoordY="changeObjCoordY($event)"
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                    </div>

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
import csInputsTextBox from "./CS_InputsTextBox.vue"
import csInputsArcBox from "./CS_InputsArcBox.vue"
import csInputsCoordBox from "./CS_InputsCoordBox.vue"
import csInputsRadius from "./CS_InputsRadius.vue"

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
        csShopeEditor,
        csInputsTextBox,
        csInputsArcBox,
        csInputsCoordBox,
        csInputsRadius
    },

    data() {
        return {
            curBtnType: undefined,
            buttons: [
                {
                    type: "Rectangle",
                },
                {
                    type: "Circle",
                },
                {
                    type: "Line",
                },
                {
                    type: "Acr",
                },
                {
                    type: "Text",
                }
            ],
            //ShopeEditor
            inp_width: 100,
            inp_height: 100,
            inp_radius: 50,
            inp_color: "#BD10E0",
            inp_borderW: 3,
            inp_borderC: "#7ED321",
            inp_position_x: 100,
            inp_position_y: 100,
            inp_zoom: 100,
            inp_font_size: [6, 8, 10, 12, 14, 16, 18, 20, 24, 26, 28, 30, 32, 72],
            inp_font_style: [
                {
                    text: "Regular",
                    id: "normal",
                },
                {
                    text: "Bold",
                    id: "bold",
                },
                {
                    text: "Italic",
                    id: "italic",
                },
                {
                    text: "Underline",
                    id: "text-cmd-underline",
                },
                {
                    text: "Linethrough",
                    id: "text-cmd-linethrough",
                },
                {
                    text: "Overline",
                    id: "text-cmd-overline",
                },
            ],
            inp_font_family: [
                {
                    text: "Regular",
                    id: "Ubuntu",
                },
                {
                    text: "Bold",
                    id: "bold",
                },
                {
                    text: "Italic",
                    id: "italic",
                },
                {
                    text: "Underline",
                    id: "text-cmd-underline",
                },
                {
                    text: "Linethrough",
                    id: "text-cmd-linethrough",
                },
                // {
                //     text: "Overline",
                //     id: "text-cmd-overline",
                // },
            ],
            inp_arcStart:360,
            inp_arcEnd:0,
            inp_CoordX:[],
            inp_CoordY:[],
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
        changeObjColor(event) {
            let value = event.target.value
            this.canvasComponent.changeObjColor(value)
        },
        changeObjBorderW(event) {
            let value = event.target.value
            this.canvasComponent.changeObjBorderW(value)
        },
        changeObjBorderC(event) {
            let value = event.target.value
            this.canvasComponent.changeObjBorderC(value)
        },
        changeObjPositionX(event) {
            let value = event.target.value
            this.canvasComponent.changeObjPositionX(value)
        },
        changeObjPositionY(event) {
            let value = event.target.value
            this.canvasComponent.changeObjPositionY(value)
        },
        //changeObjZoom
        changeObjRadius(event) {
            let value = event.target.value
            this.canvasComponent.changeObjRadius(value)
        },
        changeTextSize(event) {
            let value = event.target.value
            this.canvasComponent.changeTextSize(value)
        },
        changeTextWeight(event) {
            let value = event.target.value
            this.canvasComponent.changeTextWeight(value)
        },
        changeObjArcStart(event) {
            let value = event.target.value
            this.canvasComponent.changeObjArcStart(value)
        },
        changeObjArcEnd(event) {
            let value = event.target.value
            this.canvasComponent.changeObjArcEnd(value)
        },
        changeObjCoordX(event) {
            let value = event.target.value
            this.canvasComponent.changeObjCoordX(value)
        },
         changeObjCoordY(event) {
            let value = event.target.value
            this.canvasComponent.changeObjCoordY(value)
        },

        createButton(event) {
            let key = event.target.dataset.key
            this.curBtnType = key
            switch (this.curBtnType) {
                case "Circle":
                    this.canvasComponent.createCir(this.canvas);
                    break;
                case "Rectangle":
                    this.canvasComponent.createRec(this.canvas);
                    break;
                case "Line":
                    this.canvasComponent.createLine(this.canvas);
                    break;
                case "Acr":
                    this.canvasComponent.createAcr(this.canvas);
                    break;
                case "Text":
                    this.canvasComponent.createText(this.canvas);
                    break;
                default:
            }

        },
        addImage() {
            this.canvasComponent.addImageCanvas();
        },

        getCoordPoints(value){
            //value.x/y -->> underfind 
            this.inp_CoordX.push(value)
            this.inp_CoordY.push(value.y)
            console.log(this.inp_CoordX);
            console.log(this.inp_CoordY);
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
