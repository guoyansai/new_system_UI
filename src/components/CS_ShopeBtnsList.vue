<template>
    <div>
       <div :key="button.text" v-for="button in buttons">
        <ShopeBtnsElement
          :button="button"
          @add-buttons="$emit('add-buttons', $event)"
          class="
            bg-indigo-500
            hover:bg-indigo-700
            text-white
            py-2
            px-4
            rounded-tr-lg
          "
        />
      </div>
      
     
    </div>
</template>

<script>
import ShopeBtnsElement from "./CS_ShopeBtnsElement.vue";

export default {
    name: "ShopeBtnsList",
    components: {
        ShopeBtnsElement,
    },
    props: {
        buttons: Array,
    },


};
</script>

<style scoped>
</style>
