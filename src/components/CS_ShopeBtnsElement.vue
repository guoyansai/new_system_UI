<template>
    <div>  
        <button @click="$emit('add-buttons', $event)" :data-key="button.type"> 
        {{ button.type }}</button>
    </div>
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
</style>
