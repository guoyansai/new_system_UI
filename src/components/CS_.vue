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

                        <div class="col-8">
                            <div class="row">
                                <div class="col">
                                    <csCanvasModel :canvas="canvas" :canvasComponent="canvasComponent" />
                                </div>
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <ShopeBtnsList @add-buttons="createButton($event)" :buttons="buttons"
                                                @add-image="addImage($event)" />
                                        </div>
                                        <div class="col">
                                            <DrawBoard ref="canvas" @points="getCoordPoints" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-4" id="InputBoxs">
                            <div class="row">

                                <div class="col">
                                    <div class="row">


                                        <div class="col">
                                            <div class="row">
                                                <div class="col-12" v-show="isWH">
                                                    <csInputsWidthHeight :inp_width="inp_width" :inp_height="inp_height"
                                                        @change-ObjWidth="changeObjWidth($event)"
                                                        @change-ObjHeight="changeObjHeight($event)" />
                                                </div>
                                                 <div class="col-12" v-show="isRxy">
                                                    <csInputsRXY :inp_rx="inp_rx" :inp_ry="inp_ry"
                                                        @change-ObjRx="changeObjRx($event)"
                                                        @change-ObjRy="changeObjRy($event)" />
                                                </div>
                                                <div class="col-12" v-show="isFillColor">
                                                    <csInputsFillColor :inp_color="inp_color"
                                                        @change-ObjColor="changeObjColor($event)" />
                                                </div>
                                                <div class="col-12" v-show="isPosition">
                                                    <csInputsPosition :inp_position_x="inp_position_x"
                                                        :inp_position_y="inp_position_y" :inp_zoom="inp_zoom"
                                                        @change-ObjPositionX="changeObjPositionX($event)"
                                                        @change-ObjPositionY="changeObjPositionY($event)"
                                                        @change-ObjZoom="changeObjZoom($event)" />
                                                </div>

                                                <div class="col-12" v-show="isRadius">
                                                    <csInputsRadius :inp_radius="inp_radius"
                                                        @change-ObjRadius="changeObjRadius($event)" />
                                                </div>

                                                <div class="col-12" v-show="isBorder">
                                                    <csInputsBorder :inp_borderW="inp_borderW"
                                                        :inp_borderC="inp_borderC"
                                                        @change-ObjBorderW="changeObjBorderW($event)"
                                                        @change-ObjBorderC="changeObjBorderC($event)" />
                                                </div>
                                                <div class="col-12" v-show="isArcBox">
                                                    <csInputsArcBox :inp_arcStart="inp_arcStart"
                                                        :inp_arcEnd="inp_arcEnd"
                                                        @change-ObjArcStart="changeObjArcStart($event)"
                                                        @change-ObjArcEnd="changeObjArcEnd($event)" />
                                                </div>
                                                <div class="col-12" v-show="isCoordBox">
                                                    <csInputsCoordBox :inp_CoordX="inp_CoordX" :inp_CoordY="inp_CoordY"
                                                        @change-ObjCoordX="changeObjCoordX($event)"
                                                        @change-ObjCoordY="changeObjCoordY($event)" />
                                                </div>
                                                <div class="col-12" v-show="isAngle">
                                                    <csInputsAngle :inp_Angle="inp_Angle"
                                                        @change-ObjAngle="changeObjAngle($event)" />
                                                </div>
                                                <div class="col-12" v-show="isTextBox">
                                                    <csInputsTextBox :inp_font_size="inp_font_size"
                                                        :inp_font_style="inp_font_style"
                                                        @change-textSize="changeTextSize($event)"
                                                        @change-textWeight="changeTextWeight($event)" />
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
import csToolsTable from "./CS_Tools_Table.vue";
import ShopeBtnsList from "./CS_ShopeBtnsList.vue";
import DrawBoard from "./CS_DrawBoard.vue";
import csCanvasModel from "./CS_CanvasModel.vue";
import csInputsAngle from "./CS_InputsAngle.vue"
import csInputsArcBox from "./CS_InputsArcBox.vue"
import csInputsBorder from "./CS_InputsBorder.vue"
import csInputsCoordBox from "./CS_InputsCoordBox.vue"
import csInputsFillColor from "./CS_InputsFillColor.vue"
import csInputsPosition from "./CS_InputsPosition.vue"
import csInputsRadius from "./CS_InputsRadius.vue"
import csInputsTextBox from "./CS_InputsTextBox.vue";
import csInputsWidthHeight from "./CS_InputsWidthHeight.vue";
import csInputsRXY from "./CS_InputsRXY.vue";



export default {
    name: "CS",
    components: {
        csTable,
        csToolsTable,
        ShopeBtnsList,
        DrawBoard,
        csCanvasModel,
        csInputsAngle,//
        csInputsArcBox,//
        csInputsBorder,//
        csInputsCoordBox,//
        csInputsFillColor,//
        csInputsPosition,//
        csInputsRadius,//
        csInputsTextBox,//
        csInputsWidthHeight,//
        csInputsRXY,
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
                    type: "Ellipse",
                },
                {
                    type: "Acr",
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
            //ShopeEditor
            inp_width: 100,
            inp_height: 100,
            inp_radius: 50,
            inp_color: "#ff0000",
            inp_borderW: 3,
            inp_borderC: "#228b22",
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
            inp_arcStart: 360,
            inp_arcEnd: 0,
            inp_CoordX: [],
            inp_CoordY: [],
            inp_Angle: 0,
            inp_rx: 100,
            inp_ry: 20,
            canvasComponent: undefined,
            canvas: undefined,
            //component are show?
            isWH: false,
            isFillColor: false,
            isPosition: false,
            isRadius: false,
            isBorder: false,
            isArcBox: false,
            isCoordBox: false,
            isAngle: false,
            isTextBox: false,
            isRxy: false,
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
        changeObjRadius(event) {
            let value = event.target.value
            this.canvasComponent.changeObjRadius(value)
        },
        //  <!-- not worked -->
        changeObjZoom(event) {
            let value = event.target.value
            this.canvasComponent.changeObjZoom(value)
        },
        changeObjAngle(event) {
            let value = event.target.value
            this.canvasComponent.changeObjAngle(value)
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
        changeObjRx(event) {
            log
            let value = event.target.value
            this.canvasComponent.changeObjRx(value)
            
        },
        changeObjRy(event) {
            let value = event.target.value
            this.canvasComponent.changeObjRy(value)
        },

        createButton(event) {
            let key = event.target.dataset.key
            this.curBtnType = key
            switch (key) {
                case "Rectangle":
                    this.canvasComponent.createRec(this.canvas);
                    this.isWH = true;
                    this.isFillColor = true;
                    this.isPosition = true;
                    this.isRadius = false;
                    this.isBorder = true;
                    this.isArcBox = false;
                    this.isCoordBox = false;
                    this.isAngle = false;
                    this.isTextBox = false;
                    this.isRxy =false;
                    break;
                case "Circle":
                    this.canvasComponent.createCir(this.canvas);
                    this.isWH = false;
                    this.isFillColor = true;
                    this.isPosition = true;
                    this.isRadius = true;
                    this.isBorder = true;
                    this.isArcBox = false;
                    this.isCoordBox = false;
                    this.isAngle = false;
                    this.isTextBox = false;
                    this.isRxy =false;
                    break;
                //not yet
                case "Ellipse":
                    this.canvasComponent.createEllipse(this.canvas);
                    this.isWH = false;
                    this.isFillColor = true;
                    this.isPosition = true;
                    this.isRadius = false;
                    this.isBorder = true;
                    this.isArcBox = false;
                    this.isCoordBox = false;
                    this.isAngle = true;
                    this.isTextBox = false;
                    this.isRxy =true;
                    //rx ry

                    break;
                case "Acr":
                    this.canvasComponent.createAcr(this.canvas);
                    this.isWH = true;
                    this.isFillColor = false;
                    this.isPosition = true;
                    this.isRadius = false;
                    this.isBorder = true;
                    this.isArcBox = true;
                    this.isCoordBox = false;
                    this.isAngle = false;
                    this.isTextBox = false;
                    this.isRxy =false;
                    break;
                //not yet
                case "Triangle":
                    this.canvasComponent.createTriangle(this.canvas);
                    this.isEditor = true;
                    this.isRadius = false;
                    this.isTextBox = false;
                    this.isArcBox = true;
                    this.isCoordBox = false;
                    this.isAngle = true;
                    break;


                case "Line":
                    this.canvasComponent.createLine(this.canvas);
                    this.isEditor = true;
                    this.isRadius = false;
                    this.isTextBox = false;
                    this.isArcBox = false;
                    this.isCoordBox = true;
                    //points
                    break;

                case "Text":
                    this.canvasComponent.createText(this.canvas);
                    this.isEditor = true;
                    this.isRadius = false;
                    this.isTextBox = true;
                    this.isArcBox = false;
                    this.isCoordBox = false;
                    break;
                default:
            }


            this.$store.dispatch('curShapeStatus', key)
        },
        addImage(event) {
            let key = event.target.files[0].name;
            this.$store.dispatch('updateShapeStatus', key)
            this.$store.dispatch('curShapeStatus', key)
            this.canvasComponent.addImageCanvas();
            this.isEditor = true;
            this.isRadius = false;
            this.isTextBox = false;
            this.isArcBox = false;
            this.isCoordBox = false;
        },

        getCoordPoints(value) {
            //value.x/y -->> underfind 
            this.inp_CoordX.push(value)
            this.inp_CoordY.push(value.y)
        },


    },


    mounted() {
        this.canvasComponent = this.$refs.canvas;
        this.canvas = this.$refs.canvas._data.canvas;

    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#InputBoxs {
    width: 300px;
}
</style>
