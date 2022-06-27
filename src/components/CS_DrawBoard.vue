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
      let value = event;

      if (curObj) {
        curObj.set({
          width: value,
        });
        this.canvas.requestRenderAll();
        console.log(this.canvas);
      }
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

    }

  }


};
</script>

<style scoped>
</style>
