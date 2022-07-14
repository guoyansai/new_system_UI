import { fabric } from "fabric";
export default class CanvasInit {
  constructor(canvasId) {
    this.canvasId = canvasId;
  }
  initialiaze() {
    return new fabric.Canvas(this.canvasId, {
      width: window.innerWidth,
      height:window.innerHeight,
      backgroundColor: "black",
      preserveObjectStacking : true //圖層
    });
  }
}
