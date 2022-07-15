<template>
    <div>
        <!-- drawing shape -->
    <div id="objectBtns">
      <p id="objectTitle">Shapes</p>
      <button type="button" class="btn btn-light">
        Rect
      </button>
      <button type="button" class="btn btn-light">
        Circle
      </button>
      <button
        type="button"
        class="btn btn-light"
      >
        Triangle
      </button>
      <button
        type="button"
        class="btn btn-light"
        @click.prevent="createPolyline()"
      >
        Polyline (no)
      </button>
      <button type="button" class="btn btn-light">
        Line
      </button>
      <button type="button" class="btn btn-light">
        Text
      </button>
      <button type="file" class="btn btn-light" accept="image/svg+xml">
        import img
      </button>
      <!-- <button type="button" class="btn btn-light">Polygon</button> 
      <button type="button" class="btn btn-light">Polyline</button>-->
      <!-- <button onclick="createCirc(canvas)">Cire</button>
      <button onclick="groupObjects(canvas,group,true)">Group</button>
      <button onclick="ungroupObjects(canvas,group,true)">Ungroup</button> -->
    </div>


    </div>
</template>

<script>
export default {
    name: "guiShapeTools",

    data() {
        return {};
    },
};
</script>

<style scoped>
</style>