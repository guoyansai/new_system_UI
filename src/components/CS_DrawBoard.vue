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
    }
  },
  mounted() {
    this.init();
  },

  methods: {
    init() {
      let newCanvas = new CanvasInit(this.canvasId);
      this.canvas = newCanvas.initialiaze();
    },
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



    createCir(canvas) {
      const canvCenter = canvas.getCenter();
      const circle = new fabric.Circle({
        radius: 50,
        fill: "MediumPurple",
        left: canvCenter.left,
        top: -50,
        originX: "center",
        originY: "center",
        cornerColor: "white",
        objectCaching: false,
      });
      canvas.add(circle);
      canvas.setActiveObject(circle);
      canvas.renderAll();
      circle.animate("top", canvas.height - 50, {
        onChange: canvas.renderAll.bind(canvas),
        onComplete: () => {
          circle.animate("top", canvCenter.top, {
            onChange: canvas.renderAll.bind(canvas),
            duration: 200,
            easing: fabric.util.ease.easeOutBounce,
          });
        },
      });
    },
    createRec(canvas) {
      const canvCenter = canvas.getCenter();
      const rect = new fabric.Rect({
        height: 100,
        width: 100,
        fill: "yellow",
        left: canvCenter.left,
        top: 100,
        originX: "center",
        originY: "center",
        cornerColor: "white",
        objectCaching: false,
      });
      canvas.add(rect);
      canvas.setActiveObject(rect);
      canvas.renderAll();

    },
    createTri(canvas) {
      const canvCenter = canvas.getCenter();
      const trianlge = new fabric.Triangle({
        height: 150,
        width: 100,
        fill: "yellow",
        left: canvCenter.left,
        top: 100,
        stroke: 'green',
        strokeWidth: 3,
        cornerColor: 'blue',
        angle: 0,
      });
      canvas.add(trianlge);
      canvas.setActiveObject(trianlge);
      canvas.renderAll();
    },
    createLine(canvas) {
      const canvCenter = canvas.getCenter();
      let points = [];
      points.push(new fabric.Point(parseInt(0), parseInt(200)));
      points.push(new fabric.Point(parseInt(300), parseInt(400)));

      const line = new fabric.Polyline(points, {
        height: 150,
        width: 100,
        fill: "transparent",
        left: canvCenter.left,
        top: 100,
        stroke: 'green',
        strokeWidth: 3,
        cornerColor: 'blue',
        angle: 0,
      });
      canvas.add(line);
      canvas.setActiveObject(line);
      canvas.renderAll();
    },
    createText(canvas) {
      const canvCenter = canvas.getCenter();
      const text = new fabric.IText("TEXT", {
        fill: "yellow",
        left: canvCenter.left,
        top: 100,
        fontFamily: "Courier New",
        fontSize: 20,
        underline: false,
      });
      canvas.add(text);
      canvas.setActiveObject(text);
      canvas.renderAll();
    },
    addImageCanvas() {
       const reader = new FileReader();
      reader.addEventListener("load", () => {
        fabric.Image.fromURL(
          reader.result,
          (img) => {
            const canvCenter = this.canvas.getCenter();
            img.left = canvCenter.left;
            (img.originX = "center"), (img.scaleX = 0.5);
            img.scaleY = 0.5;
            this.canvas.add(img);
            this.canvas.requestRenderAll();
            img.animate("top", 100, {
              onChange: this.canvas.renderAll.bind(this.canvas),
              duration: 1000,
              easing: fabric.util.ease.easeOutBounce,
            });
          },
          { crossOrigin: "Anonymous" }
        );
      });

      const inputImage = document.getElementById("inp_image");
      const file = inputImage.files[0];
      reader.readAsDataURL(file);
    }

  }


};
</script>

<style scoped>
</style>
