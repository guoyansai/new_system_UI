<template>
  <!-- WorldCat.vue -->
  <canvas :id="canvasId"></canvas>


</template>


<script>
import CanvasInit from "../../public/js/CanvasInit.js"

export default {
  name: "DrawBoard",

  data() {
    return {
      canvasId: "mycanvas",
      canvas: undefined,
      points: [],
      width: null,
    }
  },
  props:
  {
    inp_width: Number,
    inp_height: Number,
    inp_radius: Number,
    inp_color: String,
    inp_borderW: Number,
    inp_borderC: String,
    inp_position_x: Number,
    inp_position_y: Number,
    inp_zoom: Number,
    inp_font_size: Array,
    inp_font_style: Array,
    inp_arcStart: Number,
    inp_arcEnd: Number,
    inp_Angle:Number,
    inp_rx: Number,
    inp_ry: Number,
  },
  computed: {
    //  ...mapState({
    //     inp_width: state => state.input.width,
    //     inp_height: state => state.input.width
    // })
  },
  mounted() {
    this.init();

  },

  methods: {
    init() {
      let newCanvas = new CanvasInit(this.canvasId);
      this.canvas = newCanvas.initialiaze();
    },
    //CHANGE SHAPE PROPERTY
    setCanvasObjFillColor(event) {
      let curObj = this.canvas.getActiveObject()
      let color = event;
      if (curObj) {
        curObj.set({
          fill: color,
        });
        this.canvas.requestRenderAll();
      }
    },
    changeObjWidth(event) {
      let curObj = this.canvas.getActiveObject()
      let value = parseInt(event);

      if (curObj) {
        curObj.set({ width: value }).setCoords();
        this.canvas.requestRenderAll();
      }
    },
    changeObjHeight(event) {
      let curObj = this.canvas.getActiveObject()
      let value = parseInt(event);

      if (curObj) {
        curObj.set({ height: value }).setCoords();
        this.canvas.requestRenderAll();
      }
      console.log(this.canvas);
    },
    changeObjColor(event) {
      let curObj = this.canvas.getActiveObject()
      let color = event;
      if (curObj) {
        curObj.set({
          fill: color,
        });
        this.canvas.requestRenderAll();
      }
    },
    changeObjBorderW(event) {
      let curObj = this.canvas.getActiveObject()
      let w = parseInt(event);
      if (curObj) {
        curObj.set({
          strokeWidth: w,
        });
        this.canvas.requestRenderAll();
      }
    },
    changeObjBorderW(event) {
      let curObj = this.canvas.getActiveObject()
      let w = parseInt(event);
      if (curObj) {
        curObj.set({
          strokeWidth: w,
        });
        this.canvas.requestRenderAll();
      }
    },
    changeObjBorderC(event) {
      let curObj = this.canvas.getActiveObject()
      let c = event;
      if (curObj) {
        curObj.set({
          stroke: c,
        });
        this.canvas.requestRenderAll();
      }
    },
    changeObjPositionX(event) {
      console.log(event);
      let curObj = this.canvas.getActiveObject()
      let x = parseInt(event);
      if (curObj) {
        curObj.set({
          left: x,
        }).setCoords();
        this.canvas.requestRenderAll();
      }
    },
    changeObjPositionY(event) {
      console.log(event);
      let curObj = this.canvas.getActiveObject()
      let y = parseInt(event);
      if (curObj) {
        curObj.set({
          top: y,
        }).setCoords();
        this.canvas.requestRenderAll();
      }
    },
    changeObjRadius(event) {

      console.log("changeObjRadius", event);
      let curObj = this.canvas.getActiveObject()
      let r = parseInt(event);
      if (curObj) {
        curObj.set({
          radius: r,
        })
        this.canvas.requestRenderAll();
      }
    },

    changeObjZoom(event) {
      let canvas = this.canvas;
      let curObj = canvas.getActiveObject()

      canvas.setZoom(event)
      let getZoom = canvas.getZoom();
      console.log("getZoom", getZoom);

    },
    changeObjAngle(event) {
      console.log("event", event);
      let curObj = this.canvas.getActiveObject()
      let e = parseInt(event);
      if (curObj) {
        curObj.set({ angle: e })
        this.canvas.requestRenderAll();
      }
    },
    changeTextSize(event) {
      let curObj = this.canvas.getActiveObject()
      let size = parseInt(event);
      if (curObj) {
        curObj.set({
          fontSize: size,
        })
        this.canvas.requestRenderAll();
      }
    },
    changeTextWeight(event) {
      let curObj = this.canvas.getActiveObject()
      let w = event
      // switch (w) {
      //   case "normal":
      //     curObj.set("fontWeight", "normal");
      //     console.log(curObj);
      //     break;
      //   case "bold":
      //     curObj.set("fontWeight", "bold");
      //     console.log(curObj);
      //     break;
      //   case "italic":
      //     curObj.set("fontStyle", "italic");
      //     console.log(curObj);
      //     break;
      //   case "text-cmd-underline":
      //     curObj.set("underline", true);
      //     console.log(curObj);
      //     break;
      //   case "text-cmd-linethrough":
      //     curObj.set("linethrough", true);
      //     console.log(curObj);
      //     break;
      //   case "text-cmd-overline":
      //     curObj.set("overline", true);
      //     console.log(curObj);
      //     break;
      //   default:
      // }
      // if(curObj.fontStyle === "italic"){
      //   curObj.set("fontStyle", "");
      // }
      if (curObj) {
        if (w == "normal") {
          curObj.set("fontWeight", "normal");
        }
        if (w == "bold") {
          curObj.set("fontWeight", "bold");
        }
        if (w == "italic") {
          curObj.set("fontStyle", "italic");
        }
        if (w == "text-cmd-underline") {
          curObj.set("underline", true);
          console.log(curObj.underline);
        } else if (curObj.underline === true) {
          curObj.set("underline", false);
        }
        if (w == "text-cmd-linethrough") {
          curObj.set("linethrough", true);
        }
        if (w == "text-cmd-overline") {
          curObj.set("overline", true);
        }
        // } else {
        //   if (curObj.fontWeight == "normal") {
        //     curObj.set("fontWeight", "");
        //   }
        //   if (curObj.fontWeight == "bold") {
        //     curObj.set("fontWeight", "");
        //   }
        //   if (curObj.fontStyle == "italic") {
        //     curObj.set("fontStyle", "italic");
        //   }
        //   if (curObj.underline === true) {
        //     curObj.set("underline", false);

        //   }
        //   if (curObj.fontStyle == "text-cmd-overline") {
        //     canvas.getActiveObject().set("textDecoration", "");
        //   }
      }
      this.canvas.requestRenderAll();

    },
    changeObjArcStart(event) {
      let curObj = this.canvas.getActiveObject()
      let acr = parseInt(event);
      if (curObj) {
        curObj.set({
          startAngle: acr,
        });
        this.canvas.requestRenderAll();
      }
    },
    changeObjArcEnd(event) {
      let curObj = this.canvas.getActiveObject()
      let acr = parseInt(event);
      if (curObj) {
        curObj.set({
          endAngle: acr,
        });
        this.canvas.requestRenderAll();
      }
    },
    changeObjCoordX(event) {
      let points = this.points

      console.log("changeObjCoordX", points);


    },
    changeObjCoordY(event) {
      let points = this.points

      console.log("changeObjCoordY", points);
    },
    changeObjRx(event) {
      let curObj = this.canvas.getActiveObject()
      let e = parseInt(event);
      if (curObj) {
        curObj.set({
          rx: e,
        }).setCoords();
        this.canvas.requestRenderAll();
      }
    },
    changeObjRy(event) {
      console.log("changeRx", event);
      let curObj = this.canvas.getActiveObject()
      let e = parseInt(event);
      if (curObj) {
        curObj.set({
          ry: e,
        }).setCoords();
        this.canvas.requestRenderAll();
      }
    },

    //CREATE SHAPES
    createRec(canvas) {
      let w = parseInt(inp_width.value)
      let h = parseInt(inp_height.value)
      let color = inp_color.value
      let x = parseInt(inp_position_x.value)
      let y = parseInt(inp_position_y.value)
      let borderW = parseInt(inp_borderW.value)
      let borderC = inp_borderC.value
      const rect = new fabric.Rect({
        width: w,
        height: h,
        fill: color,
        left: x,
        top: y,
        stroke: borderC,
        strokeWidth: borderW,
      });
      canvas.add(rect);
      canvas.setActiveObject(rect);
      canvas.renderAll();

      let toJson = JSON.stringify(rect)
      this.$store.dispatch('updateShapeStatus', { toJson })
    },
    createCir(canvas) {
      let x = parseInt(inp_position_x.value)
      let y = parseInt(inp_position_y.value)
      let color = inp_color.value
      let borderW = parseInt(inp_borderW.value)
      let borderC = inp_borderC.value
      let radius = parseInt(inp_radius.value)

      const circle = new fabric.Circle({
        left: x,
        top: y,
        fill: color,
        stroke: borderC,
        strokeWidth: borderW,
        radius: radius,
      });
      canvas.add(circle);
      canvas.setActiveObject(circle);
      canvas.renderAll();
      let toJson = JSON.stringify(circle)
      this.$store.dispatch('updateShapeStatus', { toJson })
    },
    createEllipse(canvas) {
      let rx = parseInt(inp_rx.value)
      let ry = parseInt(inp_ry.value)
      let color = inp_color.value
      let borderW = parseInt(inp_borderW.value)
      let borderC = inp_borderC.value
      let angle = inp_Angle.value
      
      const ellipse = new fabric.Ellipse({
        rx: rx,
        ry: ry,
        fill: color,
        stroke: borderC,
        strokeWidth: borderW,
        angle: angle,
      });
      canvas.add(ellipse);
      canvas.setActiveObject(ellipse);
      canvas.renderAll();
      let toJson = JSON.stringify(ellipse)
      this.$store.dispatch('updateShapeStatus', { toJson })
    },
    createAcr(canvas) {
      let h = parseInt(inp_height.value)
      let w = parseInt(inp_width.value)
      //let color = inp_color.value
      let x = parseInt(inp_position_x.value)
      let y = parseInt(inp_position_y.value)
      let borderW = parseInt(inp_borderW.value)
      let borderC = inp_borderC.value
      let arcStart = parseInt(inp_arcStart.value)
      let arcEnd = parseInt(inp_arcEnd.value)

      console.log("");
      const acr = new fabric.Circle({
        height: h,
        width: w,
        left: x,
        right: y,
        radius: w / 2,
        //fill:color,
        startAngle: arcStart,
        endAngle: arcEnd,
        stroke: borderC,
        strokeWidth: borderW,
      });
      
      canvas.add(acr);
      canvas.setActiveObject(acr);
      console.log("acr",acr);
      canvas.renderAll();
      let toJson = JSON.stringify(acr)
      this.$store.dispatch('updateShapeStatus', { toJson })
    },
    createTriangle(canvas) {
      let w = parseInt(inp_width.value)
      let h = parseInt(inp_height.value)
      let color = inp_color.value
      let borderW = parseInt(inp_borderW.value)
      let borderC = inp_borderC.value
      const triangle = new fabric.Triangle({
        width: w,
        height: h,
        fill: color,
        stroke: borderC,
        strokeWidth: borderW,
        angle: 0,
      });
      canvas.add(triangle);
      canvas.setActiveObject(triangle);
    },
    createLine(canvas) {
      let h = parseInt(inp_height.value)
      let w = parseInt(inp_width.value)
      let color = inp_color.value
      let x = parseInt(inp_position_x.value)
      let y = parseInt(inp_position_y.value)
      let borderW = parseInt(inp_borderW.value)
      let borderC = inp_borderC.value
      let points = this.points
      points.push(new fabric.Point(parseInt(50), parseInt(50)));
      points.push(new fabric.Point(parseInt(0), parseInt(50)));


      this.$emit("points", points)

      // console.log(points);
      const line = new fabric.Polyline(points, {
        height: h,
        width: w,
        fill: color,
        left: x,
        top: y,
        stroke: borderC,
        strokeWidth: borderW,
      });
      canvas.add(line);
      canvas.setActiveObject(line);
      canvas.renderAll();
      let toJson = JSON.stringify(line)
      this.$store.dispatch('updateShapeStatus', { toJson })
    },
    createText(canvas) {
      let color = inp_color.value
      let x = parseInt(inp_position_x.value)
      let y = parseInt(inp_position_y.value)
      let s = inp_font_size.value
      const text = new fabric.IText("TEXT", {
        fill: color,
        left: x,
        top: y,
        fontSize: s,
        fontFamily: "Courier New",
        underline: false,
      });
      canvas.add(text);
      canvas.setActiveObject(text);
      canvas.renderAll();
      let toJson = JSON.stringify(text)
      this.$store.dispatch('updateShapeStatus', { toJson })
    },
    addImageCanvas() {
      const inputImage = document.getElementById("inpImage");
    },
    // addImageCanvas() {
    //   const reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     fabric.Image.fromURL(
    //       reader.result,
    //       (img) => {
    //         const canvCenter = this.canvas.getCenter();
    //         img.left = canvCenter.left;
    //         (img.originX = "center"), (img.scaleX = 0.5);
    //         img.scaleY = 0.5;
    //         this.canvas.add(img);
    //         this.canvas.requestRenderAll();
    //         // img.animate("top", 100, {
    //         //   onChange: this.canvas.renderAll.bind(this.canvas),
    //         //   duration: 1000,
    //         //   easing: fabric.util.ease.easeOutBounce,
    //         // });
    //       },
    //       { crossOrigin: "Anonymous" }
    //     );
    //   });
    //   const inputImage = document.getElementById("inpImage");
    //   const file = inputImage.files[0];
    //   reader.readAsDataURL(file);
    // },


  }


};
</script>

<style scoped>
</style>
