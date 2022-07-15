import { fabric } from "fabric";
export default class CanvasInit {
  constructor(canvasId) {
    this.canvasId = canvasId;
  }
  initialiaze() {
    return new fabric.Canvas(this.canvasId, {
      width: 800,
      height:800,
      backgroundColor: "black",
      preserveObjectStacking : true //圖層
    });
  }
}
