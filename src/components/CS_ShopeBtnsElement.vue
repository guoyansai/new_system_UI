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
    font-size: 10px;
    background-color: #007bff;
    margin: 2px;
    border-radius: 5px;
    border: 0px;
}
button:hover{
    background-color: #4ca0fa;
}
</style>
