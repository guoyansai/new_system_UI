<!-- <template>
    <div>
        <div class="row">
            Draw 
            <div class="col">
                <div id="canvasId">
                    <canvas ref="canvas"></canvas>
                </div>
            </div>-->
            <!-- Create Shopes 
            <div class="col">
                <h5>Shopes</h5>
                <div id="tools">
                    <h5>Shopes Tool</h5>
                    <div id="ShopeBtns">
                        <ul>
                            <li>
                                <button type="button" class="btn btn-outline-dark btn-sm" @click.prevent="createRect">
                                    Rect
                                </button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-outline-dark btn-sm" @click.prevent="createCircle">
                                    Circle
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    class="btn btn-outline-dark btn-sm"
                                    @click.prevent="createTriangle()"
                                >
                                    Triangle
                                </button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-outline-dark btn-sm" @click.prevent="createLine()">
                                    Line
                                </button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-outline-dark btn-sm" @click.prevent="createText">
                                    Text
                                </button>
                            </li>
                            <li>
                               
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Image</span>
                                    </div>
                                    <input type="file" class="form-control" id="imgLoader" accept="image/*"
                                        @change="imgUpload($event)" />
                                </div>

                            </li>
                            <li>
                                <button type="button" class="btn btn-light btn-sm" @click.prevent="createPolyline()">
                                    Polyline (no)
                                </button>
                            </li>
                            <li>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-secondary btn-sm dropdown-toggle"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-secondary btn-sm">
                                    Add
                                </button>


                            </li>
                           <li>
                                    <button type="button" class="btn btn-success btn-sm" @click="GroupObjects()">
                                        Group
                                    </button>
                                </li> 
                        </ul>
                    </div>
                </div>
            </div>-->
             <!--<div class="w-100"></div>
            Shope Parameters 
            <div class="col">
                <h5>Shope Parameter</h5>
                <div id="shopeParameter">
                    <div class="row">
                      
                        <div class="col">
                            <div id="parameter1">
                              
                                <div class="input-group input-group-sm mb-1" v-show="w">
                                 
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Width</span>
                                    </div>
                                    <input type="number" id="inp_width" v-model.number="inpWidth" class="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                 
                                     <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Height</span>
                                    </div>
                                    <input type="number" id="inp_height" v-model.number="inpHeight" class="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                               

                       
                                <div class="input-group input-group-sm mb-3" v-show="fill_color">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Fill Color</span>
                                    </div>
                                    <input type="color" id="fill_color" v-model="drawColor" class="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
      
                                <div class="input-group input-group-sm mb-3" v-show="border_w">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">BorderWidth</span>
                                    </div>
                                    <input type="number" id="inp_border" v-model.number="strokeWidth"
                                        class="form-control" aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm" />
                                </div>

                       
                                <div class="input-group input-group-sm mb-3" v-show="border_color">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">BorderColor</span>
                                    </div>
                                    <input type="color" id="borderColor" v-model.number="strokeColor"
                                        class="form-control" aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm" />
                                </div>
                            </div>
                        </div>
               
                        <div class="col">
                            <div id="parameter2">
                                <div class="input-group input-group-sm mb-3" v-show="font_size">
                                    <label for="text-font-size">Font size:</label>
                                    <select @change="setFontSize($event)">
                                        <option v-for="(font, key) in fontSize" :key="key" id="fontSize" :value="font">
                                            {{ font }}
                                        </option>
                                    </select>
                                </div>
                       
                                <div class="input-group input-group-sm mb-3" v-show="font_family">
                                    <select id="font-family">
                                        <option value="arial">Arial</option>
                                        <option value="helvetica" selected>
                                            Helvetica
                                        </option>
                                        <option value="myriad pro">
                                            Myriad Pro
                                        </option>
                                        <option value="delicious">
                                            Delicious
                                        </option>
                                        <option value="verdana">
                                            Verdana
                                        </option>
                                        <option value="georgia">
                                            Georgia
                                        </option>
                                        <option value="courier">
                                            Courier
                                        </option>
                                        <option value="comic sans ms">
                                            Comic Sans MS
                                        </option>
                                        <option value="impact">
                                            Impact
                                        </option>
                                        <option value="monaco">
                                            Monaco
                                        </option>
                                        <option value="optima">
                                            Optima
                                        </option>
                                        <option value="hoefler text">
                                            Hoefler Text
                                        </option>
                                        <option value="plaster">
                                            Plaster
                                        </option>
                                        <option value="engagement">
                                            Engagement
                                        </option>
                                    </select>
                                </div>

                                <div class="input-group input-group-sm mb-3" v-show="font_weight">
                                    <label for="text-font-size">Font Weight:</label>
                                    <select @change="
                                        setFontWeight($event, font)
                                    ">
                                     
                                        <option v-for="(
                                                    font, key
                                                ) in fontWeight" :key="key" :id="font.id">
                                            {{ font.text }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="w-100"></div>

            
                    <div class="col">
                        <div id="parameter3">
                            <div v-show="point_x">
                                <h5>Coord Point</h5>
                                <div class="
                                                input-group input-group-sm
                                                mb-3
                                            ">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">X</span>
                                    </div>
                                    <input type="number" id="position_x" v-model.number="inpPointX" class="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>

                           
                                <div class="
                                                input-group input-group-sm
                                                mb-3
                                            " v-show="point_y">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Y</span>
                                    </div>
                                    <input type="number" id="position_y" v-model.number="inpPointY" class="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col">
                        <div id="parameter4">
                            <div id="lineBox" v-show="line_X1">
                                 
                                    <h5>Coord Point</h5>
                                    <div>
                                        <table class="table table-sm table-dark" v-show="line_X1">
                                            <thead>
                                                <tr>
                                                  
                                                    <th scope="col">X</th>
                                                    <th scope="col">Y</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(
                                                        item, key
                                                    ) in points" :key="key" id="tr">
                                                   
                                                    <td>
                                                        <input type="number" v-model="item.x" class="
                                                                form-control
                                                                input
                                                            " aria-label="Sizing example input"
                                                            aria-describedby="inputGroup-sizing-sm" />
                                                    </td>
                                                    <td>
                                                        <input type="number" v-model="item.y" class="
                                                                form-control
                                                                input
                                                            " aria-label="Sizing example input"
                                                            aria-describedby="inputGroup-sizing-sm" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button @click="addPointsBtn" v-show="line_X1">
                                            Add
                                        </button>
                                        <button @click="UpdatePointsBtn" v-show="line_X1">
                                            Update
                                        </button>
                                        <button v-show="line_X1">Delete</button>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        <div class="col">
            <h5>Shopes</h5>
            <div id="shopesList">
                <table class="table-responsive-md">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody id="shopesTbody" ref="shopesTbody">
                        <tr v-for="(item, key) in shopesList" :key="key" @click="getCurrentShope(item)">
                            <td>{{ key + 1 }}</td>
                            <td>{{ item.set_name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="shopeListBtns">
                <ul>
                    <li>
                        <button type="button" class="btn btn-success" @click="changeZindexHandle('add')">
                            Move Up
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn btn-success" @click="changeZindexHandle('down')">
                            Down
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn btn-danger" @click="DeleteObj">
                            Delet
                        </button>
                    </li>
                </ul>
            </div>


        </div>
    </div>
    </div>
</template>

<script>
import { fabric } from "fabric";

//let editorCanvas = "";
fabric.Object.prototype.set({
    cornerStrokeColor: "#66b0ef",
    cornerColor: "#60abec",
    cornerStyle: "rectangele",
    cornerSize: 8,
    borderScaleFactor: 2,
    transparentCorners: false,
    borderColor: "#61abe8",
});
export default {
    name: "CS_Tools",
    props: {},

    data() {
        return {
            socket: {},
            editorCanvas: null,
            drawWidth: 4,
            drawColor: "#E34F51",
            inpWidth: Number("50"),
            inpHeight: Number("50"),

            //current create type
            set_name: "",
            strokeWidth: Number("0"),
            strokeColor: Number("2"),
            //object position
            inpPointX: Number("100"),
            inpPointY: Number("100"),
            //line
            editedValue: {
                x: Number,
                y: Number,
            },
            // editedTodo: null,
            // editedValue:null,
            //font
            fontSize: [6, 8, 10, 12, 14, 16, 18, 20, 24, 26, 28, 30, 32, 72],
            fontWeight: [
                {
                    text: "Regular",
                    //fontFamily
                    id: "Ubuntu",
                },
                {
                    text: "Bold",
                    //fontWeight: 'bold'
                    //text-cmd-bold
                    id: "bold",
                },
                {
                    text: "Italic",
                    //fontStyle: 'italic'
                    //text-cmd-italic
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
            line: null,
            //zoom
            //example2
            lastPosX: null,
            lastPosY: null,
            //example1
            offset: {
                x: 0,
                y: 0,
            },
            scale: 1,
            scaleStep: 0.1,
            Maxscale: 2,
            Minscale: 0.5,
            group: {},
            mouseFrom: {},
            mouseTo: {},
            drawingObject: null, //繪製物件
            shopesList: [],
            shopeListItems: [],
            trClass: false,
            points: [],
            //shape btn


            //input used

            w: false,
            h: false,
            fill_color: false,
            border_w: false,
            border_color: false,
            point_x: false,
            point_y: false,
            font_size: false,
            font_family: false,
            font_weight: false,
            line_X1: false,
            line_Y1: false,
            line_X2: false,
            line_Y2: false,
            zoom: false,
            //update data buttons
            updateRect: false,
        };
    },
    created() {
        this.socket = io("http://localhost:3030");
    },
    mounted() {
        this.$bus.$on("ref", (data) => {
            console.log(data);
            console.log(this.shopeListItems);
        });
        // this.$bus.$off("CustomerItem")
        this.$bus.$on("CustomerItem", (data) => {
            if (data != null) {
                this.shopesList = [];
            }
        });

        //CS_Table_Item_Key

        //初始化Canvas
        this.initCanvas();
        this.setFillColor();
        this.setWH();
        this.setBorder();
        this.setBorderColor();
        this.setPosition();
        // this.setLinePointer();

        this.getCanvasPosition();

        this.DeleteLocalStorage();

        uibuilder.onChange("msg", (newMsg) => {
            console.info("Msg received from Node-RED server in Page1:", newMsg);
            //this.msg = newMsg
        });
    },

    updated() {
        this.$nextTick(function () { });
    },

    methods: {
        //初始化Canvas
        initCanvas() {
            this.editorCanvas = new fabric.Canvas(this.$refs.canvas, {
                devicePixelRatio: true,
                width: 600,
                height: 400,
                //selection: false,
                //transparentCorners: false,
            });
            this.editorCanvas.preserveObjectStacking = true;
            this.ListenCanvasEvents();
            this.limitCanvas();
            this.$bus.$emit("editorCanvas", this.editorCanvas);
        },

        // 限制圖形不超出畫布範圍
        limitCanvas() {
            var canvas = this.editorCanvas;
            canvas.on("object:moving", (e) => {
                //if object is too big ignore
                var obj = e.target;
                if (
                    obj.canvas > obj.canvas.height ||
                    obj.canvas > obj.canvas.width
                ) {
                    return;
                }
                obj.setCoords();
                // top-left  corner
                if (
                    obj.getBoundingRect().top < 0 ||
                    obj.getBoundingRect().left < 0
                ) {
                    obj.top = Math.max(
                        obj.top,
                        obj.top - obj.getBoundingRect().top
                    );
                    obj.left = Math.max(
                        obj.left,
                        obj.left - obj.getBoundingRect().left
                    );
                }
                // bot-right corner
                if (
                    obj.getBoundingRect().top + obj.getBoundingRect().height >
                    obj.canvas.height ||
                    obj.getBoundingRect().left + obj.getBoundingRect().width >
                    obj.canvas.width
                ) {
                    obj.top = Math.min(
                        obj.top,
                        obj.canvas.height -
                        obj.getBoundingRect().height +
                        obj.top -
                        obj.getBoundingRect().top
                    );
                    obj.left = Math.min(
                        obj.left,
                        obj.canvas.width -
                        obj.getBoundingRect().width +
                        obj.left -
                        obj.getBoundingRect().left
                    );
                }
            });
        },
        ListenCanvasEvents() {
            this.editorCanvas.on({
                //zoom
                "mouse:wheel": (e) => {

                    // var canvas = this.editorCanvas;
                    // var delta = e.e.deltaY;

                    // var zoom = canvas.getZoom();
                    // zoom *= 0.999 ** delta;

                    // if (zoom > 10) zoom = 20;

                    // if (zoom < 0.01) zoom = 0.01;
                    // canvas.setZoom(zoom);
                    // var realZoom = Math.round(zoom * 10) * 10;
                    // var inp_zoom = document.getElementById("zoom");

                    // inp_zoom.value = realZoom + "%";

                    // e.e.preventDefault();
                    // e.e.stopPropagation();

                },

                "mouse:move": (e) => {
                    //viewportTransform
                    var canvas = this.editorCanvas;
                    //e.transform.action === "drag"
                    if (canvas.isDragging) {
                        var e = opt.e;
                        var vpt = canvas.viewportTransform;
                        vpt[4] += e.clientX - canvas.lastPosX;
                        vpt[5] += e.clientY - canvas.lastPosY;
                        canvas.requestRenderAll();
                        canvas.lastPosX = e.clientX;
                        canvas.lastPosY = e.clientY;
                    }
                },

                "mouse:down": (e) => {
                    // this.mouseFrom.x = e.pointer.x;
                    // this.mouseFrom.y = e.pointer.y;
                    // console.log(e);
                    var pointer = this.editorCanvas.getPointer(e);

                    //not working
                    // var x1 = document.getElementById("line_x1").value = Math.floor(parseInt(pointer.x));
                    // var y1 = document.getElementById("line_y1").value = Math.floor(parseInt(pointer.y));

                    //console.log(pointer);
                },

                "mouse:up": (e) => {
                    //console.log(e);
                    var pointer = this.editorCanvas.getPointer(e);
                    //console.log(pointer);
                    // this.mouseTo.x = e.pointer.x;
                    // this.mouseTo.y = e.pointer.y;
                    // this.drawingObject = null;
                },

                "object:scaling": (e) => {
                    var obj = this.editorCanvas.getActiveObject();
                    //console.log(e);
                    var et = e.target;
                    var scalex = et.scaleX;
                    var scaley = et.scaleY;
                    var width = et.width;
                    var height = et.height;

                    //設定長高
                    var w = (document.getElementById("inp_width").value =
                        Math.floor(width * scalex));
                    var h = (document.getElementById("inp_height").value =
                        Math.floor(height * scaley));

                    obj.set({
                        width: w,
                        height: h,
                        scaleX: 1,
                        scaleY: 1,
                    }).setCoords();
                    this.editorCanvas.requestRenderAll();

                    //設定線條X軸
                    //    console.log(e.pointer);
                },

                "object:moving": (e) => {
                    var x = e.pointer.x;
                    var y = e.pointer.y;

                    var obj = this.editorCanvas.getActiveObject();
                    var inp_top = (document.getElementById("position_x").value =
                        parseInt(x));
                    var inp_left = (document.getElementById(
                        "position_y"
                    ).value = parseInt(y));
                    // event target

                    obj.set({
                        left: parseInt(inp_top),
                        top: parseInt(inp_left),
                    }).setCoords();

                    this.editorCanvas.requestRenderAll();
                    console.log(obj);
                },

                "object:removed": (e) => {
                    // var objs = this.editorCanvas.getObjects;
                    // if(objs !=null){
                    //    e.target.opacity = 1;
                    // }
                },
                "object:added": (e) => { },

                "object:modified": (e) => {
                    console.log("modified", e);
                    var obj = this.editorCanvas.getActiveObject();
                    //a shope "scale"
                    var et = e.target;
                    if ((e.action = "scale")) {
                        var inp_top = (document.getElementById(
                            "position_x"
                        ).value = parseInt(et.top));
                        var inp_left = (document.getElementById(
                            "position_y"
                        ).value = parseInt(et.left));
                        // event target
                        console.log(et.top);
                        console.log(et.left);
                        obj.set({
                            left: Math.round(inp_top),
                            top: Math.round(inp_left),
                        }).setCoords();
                        this.editorCanvas.requestRenderAll();
                    }
                },

                "object:selected": (e) => {
                    console.log(e);
                },
            });
        },

        //setting color
        setFillColor() {
            var color = document.getElementById("fill_color");
            color.addEventListener("input", (e) => {
                var actObj = this.editorCanvas.getActiveObject();
                if (actObj) {
                    actObj.set({ fill: e.target.value });
                    this.editorCanvas.requestRenderAll();
                }
            });
        },
        //setting width height
        setWH() {
            var width = document.getElementById("inp_width");
            var height = document.getElementById("inp_height");
            width.addEventListener("input", (e) => {
                var actObj = this.editorCanvas.getActiveObject();
                if (actObj) {
                    actObj.set({ width: parseInt(e.target.value) }).setCoords();
                    this.editorCanvas.requestRenderAll();
                }
            });
            height.addEventListener("input", (e) => {
                var actObj = this.editorCanvas.getActiveObject();
                if (actObj) {
                    actObj
                        .set({ height: parseInt(e.target.value) })
                        .setCoords();
                    this.editorCanvas.requestRenderAll();
                }
            });
        },

        // set border width
        setBorder() {
            var border = document.getElementById("inp_border");
            border.addEventListener("input", (e) => {
                var actObj = this.editorCanvas.getActiveObject();
                if (actObj) {
                    actObj.set({ strokeWidth: parseInt(e.target.value) });
                    this.editorCanvas.requestRenderAll();
                }
            });
        },
        // set border color
        setBorderColor() {
            var borderColor = document.getElementById("borderColor");
            borderColor.addEventListener("input", (e) => {
                var actObj = this.editorCanvas.getActiveObject();
                if (actObj) {
                    actObj.set({ stroke: e.target.value });
                    this.editorCanvas.requestRenderAll();
                }
            });
        },
        // set x, y position
        setPosition() {
            var x = document.getElementById("position_x");
            x.addEventListener("input", (e) => {
                var actObj = this.editorCanvas.getActiveObject();
                if (actObj) {
                    actObj.set({ left: parseInt(e.target.value) });
                    this.editorCanvas.requestRenderAll();
                }
            });
            var y = document.getElementById("position_y");
            y.addEventListener("input", (e) => {
                var actObj = this.editorCanvas.getActiveObject();
                // if (actObj) {
                //     actObj.set({ top: parseInt(e.target.value) }).setCoords();
                //     this.editorCanvas.requestRenderAll();
                // }
            });
        },

        // setLinePointer() {
        //     //mouse : down
        //     var x1 = document.getElementById("line_x1");
        //     var y1 = document.getElementById("line_y1");

        //     //mouse : up
        //     var x2 = document.getElementById("line_x2");
        //     var y2 = document.getElementById("line_y2");

        //     x1.addEventListener("input", (e) => {
        //         console.log(e);
        //         var actObj = this.editorCanvas.getActiveObject();
        //         var currentPoint = this.editorCanvas.getCenterPoint();
        //         if (actObj) {
        //            // console.log(actObj);
        //             actObj.set(points.x, parseInt(e.target.value));
        //             this.editorCanvas.requestRenderAll();
        //         }

        //     });

        //     y1.addEventListener("input", (e) => {
        //         console.log(e);
        //         var actObj = this.editorCanvas.getActiveObject();
        //         console.log(actObj);
        //         if (actObj) {
        //             actObj.set(points.y[0], parseInt(e.target.value));
        //             this.editorCanvas.requestRenderAll();
        //         }
        //         console.log(actObj);
        //     });

        //     x2.addEventListener("input", (e) => {
        //         console.log(e);
        //         var actObj = this.editorCanvas.getActiveObject();
        //         if (actObj) {
        //             actObj.set(points.x[1], parseInt(e.target.value));
        //             this.editorCanvas.requestRenderAll();
        //         }
        //         console.log(actObj);
        //     });

        //     y2.addEventListener("input", (e) => {
        //         console.log(e);
        //         var actObj = this.editorCanvas.getActiveObject();
        //         if (actObj) {
        //             actObj.set(points.y[1], parseInt(e.target.value));
        //             this.editorCanvas.requestRenderAll();
        //         }
        //         console.log(actObj);
        //     });
        // },

        setFontSize(e) {
            var value = e.target.value;
            var canvas = this.editorCanvas;
            var size = (document.getElementById("fontSize").value = value);
            canvas.getActiveObject().set({
                fontSize: size,
            });
            canvas.requestRenderAll();
        },

        setFontWeight(e, font) {
            //value
            console.log(e);
            var value = e.target.value;
            console.log(value);
            //id: "text-cmd-bold" ,text: "Bold"
            console.log(font);

            var value = e.target.value;
            var canvas = this.editorCanvas;
            var actObj = canvas.getActiveObject();

            if ((e.tyee = "change")) {
                if (value == "Regular") {
                    actObj.set("fontFamily", "Ubuntu");
                }
                if (value == "Bold") {
                    actObj.set("fontWeight", "bold");
                    console.log(actObj);
                }
                if (value == "Italic") {
                    actObj.set("fontStyle", "italic");
                    console.log(actObj);
                }
                if (value == "Underline") {
                    actObj.set("underline", true);
                    console.log(actObj);
                }
                if (value == "Linethrough") {
                    actObj.set("linethrough", true);
                    console.log(actObj);
                }
                if (value == "Overline") {
                    actObj.set("overline", true);
                    console.log(actObj);
                }
            } else {
                if (value == "Regular") {
                    actObj.set("fontFamily", "");
                }
                if (value == "Bold") {
                    actObj.set("fontWeight", "");
                    console.log(actObj);
                }
                if (value == "Italic") {
                    actObj.set("fontStyle", "");
                    console.log(actObj);
                }
                if (value == "Underline") {
                    actObj.set("underline", false);
                    console.log(actObj);
                }
                if (value == "Linethrough") {
                    actObj.set("linethrough", false);
                    console.log(actObj);
                }
                if (value == "Overline") {
                    actObj.set("overline", false);
                    console.log(actObj);
                }

                canvas.requestRenderAll();
            }
        },

        // customer shopes : create rect
        createRect() {
            this.w = true;
            this.h = true;
            this.fill_color = true;
            this.border_w = true;
            this.border_color = true;
            this.point_x = true;
            this.point_y = true;
            this.zoom = true;
            this.updateRect = true;

            var canvas = this.editorCanvas;

            const rect = new fabric.Rect({
                left: this.inpPointX,
                top: this.inpPointY,
                width: this.inpWidth,
                height: this.inpHeight,
                fill: this.drawColor,
                strokeWidth: this.strokeWidth,
                stroke: this.strokeColor,
                set_name: "rect",
            });
            canvas.add(rect);
            canvas.setActiveObject(rect);

            this.shopesList.push(rect);
            //this.socket.emit("createRect",rect)


        },
        //customer shopes:create circle
        createCircle() {
            this.w = true;
            this.h = true;
            this.fill_color = true;
            this.border_w = true;
            this.border_color = true;
            this.point_x = true;
            this.point_y = true;
            this.zoom = true;

            // this.editorCanvas.clear();
            var canvas = this.editorCanvas;
            const circle = new fabric.Circle({
                left: this.inpPointX,
                top: this.inpPointY,
                width: this.inpWidth,
                height: this.inpHeight,
                radius: (this.inpWidth + this.inpHeight) / 2,
                fill: this.drawColor,
                strokeWidth: this.drawWidth,
                set_name: "circle",
            });

            canvas.add(circle);
            canvas.setActiveObject(circle);
            var tojson = `{"version": "5.2.1","objects": [${JSON.stringify(
                circle
            )}]}`;
            this.shopesList.push(circle);
            console.log(circle.calcCoords);
            var data = JSON.parse(localStorage.getItem("shopesList") || "[]");
            data.push(tojson);
            localStorage.setItem("shopesList", JSON.stringify(data));
        },

        //acr
        // createCircle() {
        //     // this.editorCanvas.clear();
        //     var canvas = this.editorCanvas;
        //     var vm = this;
        //     const circle = new fabric.Circle({
        //         width: vm.circle_width,
        //         height: vm.circle_height,
        //         radius: 300,
        //         // X ,Y 軸
        //         left: vm.circle_X,
        //         top: vm.circle_Y,
        //         //start PointX,Y
        //         startAngle: vm.circle_startAngle,
        //         // End Point X ,Y
        //         endAngle: vm.circle_endAngle,
        //         //arc border color
        //         //stroke: "#000",
        //         //border Width
        //         strokeWidth: 3,
        //         //fill color
        //         fill: "#E34F51",
        //     });
        //     console.log(circle);
        //     canvas.add(circle);
        //     canvas.setActiveObject(circle);
        //     //var circle_json = JSON.stringify(circle);
        //     // var data = JSON.parse(localStorage.getItem("shopesList"));
        //     // var list = this.shopesList;
        //     // if (data === null) {
        //     //     list.push(circle_json);
        //     //     localStorage.setItem("shopesList", JSON.stringify(list));
        //     // } else {
        //     //     data.push(circle_json);
        //     //     localStorage.setItem("shopesList", JSON.stringify(data));
        //     // }
        // },

        //customer shopes:create Triangle
        // createTriangle() {
        //     this.w = true;
        //     this.h = true;
        //     this.fill_color = true;
        //     this.border_w = true;
        //     this.border_color = true;
        //     this.point_x = true;
        //     this.point_y = true;
        //     this.zoom = true;

        //     var canvas = this.editorCanvas;
        //     //var vm = this.triangle;
        //     const triangle = new fabric.Triangle({
        //         left: this.inpPointX,
        //         top: this.inpPointY,
        //         width: this.inpWidth,
        //         height: this.inpHeight,
        //         fill: this.drawColor,
        //         strokeWidth: this.strokeWidth,
        //         stroke: this.strokeColor,
        //     });
        //     canvas.add(triangle);
        //     canvas.setActiveObject(triangle);

        //     var tojson = `{"version": "5.2.1","objects": [${JSON.stringify(
        //         triangle
        //     )}]}`;
        //     this.shopesList.push(tojson);
        //     var data = JSON.parse(localStorage.getItem("shopesList") || "[]");
        //     data.push(tojson);
        //     localStorage.setItem("shopesList", JSON.stringify(data));
        // },
        //customer shopes:create Ellipse
        createPolyline() { },
        //customer shopes:create Line
        createLine() {
            this.updateRect = true;
            this.fill_color = true;
            this.border_w = true;
            this.border_color = true;
            this.point_x = true;
            this.point_y = true;
            this.zoom = true;
            this.line_X1 = true;
            this.line_Y1 = true;
            this.line_X2 = true;
            this.line_Y2 = true;

            var points = this.points;
            // var random = fabric.util.getRandomInt;
            // points.push(new fabric.Point(random(100, 200), random(200, 300)));
            // points.push(new fabric.Point(random(200, 300), random(100, 200)));
            points.push(new fabric.Point(parseInt(0), parseInt(200)));
            points.push(new fabric.Point(parseInt(300), parseInt(400)));
            // points.push(new fabric.Point(parseInt(100), parseInt(300)));
            // points.push(new fabric.Point(parseInt(200), parseInt(200)));
            //console.log(points);
            var canvas = this.editorCanvas;
            //console.log(points);

            this.line = new fabric.Polyline(points, {
                stroke: this.strokeColor,
                strokeWidth: 6,
                left: 100,
                top: 100,
                fill: "transparent",
                ownCaching: false,
                objectCaching: false,
                set_name: "line",
            });
            canvas.add(this.line);
            // setPolyCoords();
            canvas.setActiveObject(this.line);

            // line.on("selected", (e) => {
            //     console.log(e);
            //     var et = e.target;
            //     console.log(et);

            // });
            var tojson = `{"version": "5.2.1","objects": [${JSON.stringify(
                this.line
            )}]}`;
            this.shopesList.push(this.line);
            var data = JSON.parse(localStorage.getItem("shopesList") || "[]");
            data.push(tojson);
            localStorage.setItem("shopesList", JSON.stringify(data));
        },
        addPointsBtn() {
            this.points.push(new fabric.Point(parseInt(200), parseInt(250)));
            // this.line.dirty = true;
            this.setPolyCoords();
        },

        UpdatePointsBtn() {
            var input = document.querySelectorAll(".input");

            var list = [];

            input.forEach((element, index) => {
                var p = parseInt(element.value);

                //odd y
                if (index % 2) {
                    var list = [];
                    var y_ = element.value;
                    console.log("y", element.value);
                } else {
                    //even x
                    var x_ = element.value;
                    console.log("x", element.value);
                }

                list.push({ x: x_, y: y_ });
                console.log("list", list);
            });

            // let odds = list.indexOf(300)

            // console.log(odds);
            // var p = this.points;
            // var p2 = [];

            // p.forEach((element) => {
            //     p2.push(element);
            // });
            // p = [];
            // p = p2;
        },
        setPolyCoords() {
            let v = this;
            let canvas = v.editorCanvas;
            var dims = {
                left: v.line.left,
                top: v.line.top,
                width: v.line.width,
                height: v.line.height,
            };
            console.log(dims);
            var newDims = v.line._calcDimensions();
            console.log(newDims);
            v.line.left = newDims.left;
            v.line.top = newDims.top;
            v.line.width = newDims.width;
            v.line.height = newDims.height;

            var deltaWidth = dims.width - newDims.width;
            var deltaHeight = dims.height - newDims.height;
            var deltaleft = dims.left - newDims.left;
            var deltaTop = dims.top - newDims.top;
            v.line.pathOffset.x -= deltaWidth / 2 + deltaleft;
            v.line.pathOffset.y -= deltaHeight / 2 + deltaTop;
            v.line.setCoords();
            v.line.dirty = true;

            canvas.setActiveObject(v.line);
            console.log(v.line);
            canvas.renderAll();
        },

        //customer shopes:create Text
        createText() {
            this.fill_color = true;
            this.point_x = true;
            this.point_y = true;
            this.zoom = true;
            this.font_size = true;
            this.font_family = false;
            this.font_weight = true;

            var canvas = this.editorCanvas;
            const textObj = new fabric.IText("TEXT", {
                set_name: "text",
                left: this.inpPointX,
                top: this.inpPointY,
                underline: false,

                fontFamily: "Courier New",
                fill: this.drawColor,
                fontSize: 6,

                // Font color ,Font family, Font size //Font border
            });
            textObj.on("selected", (e) => {
                var et = e.target;
                console.log(et);
                var w = (document.getElementById("inp_width").value = et.width);
                var h = (document.getElementById("inp_height").value =
                    et.height);
                var size = (document.getElementById("fontSize").value =
                    et.fontSize);

                canvas.getActiveObject().set({
                    width: Math.floor(w),
                    height: Math.floor(h),
                    fontSize: size,
                });
            });
            canvas.add(textObj);
            canvas.setActiveObject(textObj);

            var tojson = `{"version": "5.2.1","objects": [${JSON.stringify(
                textObj
            )}]}`;
            this.shopesList.push(textObj);

            var data = JSON.parse(localStorage.getItem("shopesList") || "[]");
            data.push(tojson);
            localStorage.setItem("shopesList", JSON.stringify(data));
        },

        imgUpload(e) {
            this.w = true;
            this.h = true;

            var reader = new FileReader();
            var canvas = this.editorCanvas;
            var x = this.inpPointX;
            var y = this.inpPointY;
            var inp_x = (document.getElementById("position_x").value = x);
            var inp_y = (document.getElementById("position_y").value = y);

            console.log(inp_x);
            console.log(inp_y);
            reader.onload = function (event) {
                console.log(event);
                var imgObj = new Image();
                imgObj.src = event.target.result;
                imgObj.onload = function () {
                    console.log(imgObj.width, imgObj.height);
                    var w = imgObj.width;
                    var h = imgObj.height;
                    var image = new fabric.Image(imgObj);
                    image.set({
                        set_name: "image",
                        left: inp_x,
                        top: inp_y,
                        width: w,
                        height: h,
                    });
                    canvas.add(image);
                    console.log(image);
                    var tojson = `{"version": "5.2.1","objects": [${JSON.stringify(
                        image
                    )}]}`;
                    this.shopesList.push(tojson);
                    var data = JSON.parse(
                        localStorage.getItem("shopesList") || "[]"
                    );
                    data.push(tojson);
                    localStorage.setItem("shopesList", JSON.stringify(data));
                };
            };

            reader.readAsDataURL(e.target.files[0]);
        },

        GroupObjects() {
            var objs = this.editorCanvas.getActiveObject().toGroup();
            console.log(objs);
            // const objs = this.editorCanvas.getObjects();

            // if (objs != undefined) {
            //     this.group = new fabric.Group(objs, {
            //         // left: this.inpPointX,
            //         // top: this.inpPointY,
            //     });
            //     this.editorCanvas.add(this.group);
            // }
        },

        updateActiveRect() {
            this.w = false;
            this.h = false;
            this.fill_color = false;
            this.border_w = false;
            this.border_color = false;
            this.point_x = false;
            this.point_y = false;
            this.zoom = false;
            this.updateRect = false;
            var canvas = this.editorCanvas;
            var objs = canvas.getActiveObject();

            objs.set({
                width: this.inpWidth,
                height: this.inpHeight,
                fill: this.drawColor,
                strokeWidth: this.strokeWidth,
                stroke: this.strokeColor,
            });

            objs.set({
                left: this.inpPointX,
                top: this.inpPointY,
                //尚未設定
                //zoom:this.inpHeight,
            }).setCoords();

            canvas.requestRenderAll();

        },
        setZoom(zoom) {
            console.log("zoom", zoom);
            // var canvas = this.editorCanvas;
            // var center = canvas.getCenter()
            // //{x: 200, y: 200}
            // var point = {x: center.left, y: center.top}
            // console.log(zoom);
            // //1[object HTMLInputElement]
            // const newZoom = canvas.getZoom()
            // canvas.zoomToPoint(point, newZoom)
            // console.log(newZoom);
            // var showZoom = document.getElementById("zoom")
            // showZoom.value = `${Math.round(newZoom * 100)}%`
            // // canvas.zoomToPoint(point, newZoom)
            // // showZoom.value = `${Math.round(newZoom * 100)}%`
        },
        getCanvasPosition() {
            var canvas = this.editorCanvas;
            var left = canvas.cacheCanvasEl.offsetLeft;
            var top = canvas.cacheCanvasEl.offsetTop;
        },
        //在shopesList table 取得當前的一筆資料
        getCurrentShope(item) {
            console.log(item);
        },

        //圖層移動
        changeZindexHandle(type) {
            console.log(this.shopesList);
            var canvas = this.editorCanvas;
            const obj = canvas.getActiveObject();

            if (type == "add") {
                canvas.bringForward(obj); // 上移
                this.shopesList = []
                this.shopesList.push(canvas._objects)
            } else {
                canvas.sendBackwards(obj); // 下移
                this.shopesList = []
                this.shopesList.push(canvas._objects)
            }
            canvas.renderAll(); //重新渲染
            console.log(canvas._objects);
        },
        //畫布上沒有物件清除local storage
        DeleteLocalStorage() {
            var objs = this.editorCanvas.getActiveObject();
            if (!objs) {
                localStorage.removeItem("shopesList");
            }
        },
        DeleteObj() {
            var activeObject = this.editorCanvas.getActiveObject();
            if (activeObject) {
                if (confirm("Are you sure?")) {
                    this.editorCanvas.remove(activeObject);
                }
            }
        },
    },
};
</script>

<style scoped>
/* tr:hover {
    background-color: yellow;
    cursor: pointer;
} */
#canvasId {
    width: 600px;
    height: 400px;
    border: 2px solid black;
    /* overflow: scroll; */
}

#shopeParameter {
    width: 600px;
    height: 200px;
    border: 2px solid black;
    /* overflow: scroll; */
}

.active {
    background: rgb(247, 52, 52);
}

ul {
    list-style-type: none;
}

input {
    width: 60%;
}

input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.card {
    border: none;
}

button {
    width: 100px;
    margin: 10px 0;
}

#shopeBtnGroup {
    /* width: 200px; */
    height: 400px;
    border: 1px solid black
}

#shopeList {
    /* width: 200px; */
    height: 200px;
    border: 1px solid black;
}
</style>-->