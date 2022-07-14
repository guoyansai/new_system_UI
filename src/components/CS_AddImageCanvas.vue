<template>
  <div>
    <label for="inpImage" id="imageLabel"> Image</label>
    <input type="file" class="form-control" accept="image/" 
    id="inpImage"
    @change="$emit('add-image')">
  
  </div>
</template>
<script>
export default {
  name: "csAddImageCanvas",
}
</script>
<style scoped>

#inpImage{
  display:none;
}
#imageLabel{
  width: 120%;
  height: 80%;
  font-size: 14px;
  background-color: #007bff;
    border: 1px solid black;
  text-align: center;
  cursor: pointer;
}
#imageLabel:hover{
      background-color: #4ca0fa;
}
</style>