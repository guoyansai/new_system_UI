<template>
    <button
    :src="button.imgSrc" 
    @click="$emit('add-buttons', $event)" 
    :data-key="button.type"> 
    {{ button.type }}</button>
</template>

<script>

export default {
    name: "ShopeBtnsElement",
    props: {
        button: Object,
    },
};
</script>

<style scoped>
button{
    width: 100%;
    text-align: center;
    font-size: 14px;
    background-color: #007bff;
  
    border: 1px solid black;
}
button:hover{
    background-color: #4ca0fa;
}
</style>
