<template>
  <div id="shopebtnselement">
    <h6>Create Shopes</h6>
    <div :key="button.type" v-for="button in buttons">
      <ShopeBtnsElement :button="button" 
      @add-buttons="$emit('add-buttons', $event)"/>
    </div>
    <csAddImageCanvas @add-image="$emit('add-image')"/>


  </div>
</template>

<script>
import ShopeBtnsElement from "./CS_ShopeBtnsElement.vue";
import csAddImageCanvas from "./CS_AddImageCanvas.vue";

export default {
  name: "ShopeBtnsList",
  components: {
    ShopeBtnsElement,
    csAddImageCanvas,
  },
  props: {
    buttons: Array,
  },


};
</script>

<style scoped>
#shopebtnselement {
  width: 100%;
  border: 1px solid black;
}
</style>
