<template>
  <div>
    <label for="inp_image">Image</label>
    <input type="file" class="form-control" accept="image/" 
    id="inp_image"  
    @change="$emit('add-image')">
  </div>
</template>
<script>
export default {
  name: "csAddImageCanvas",
}
</script>
<style scoped>
/* #inp_image{
  display: none;
} */
</style>