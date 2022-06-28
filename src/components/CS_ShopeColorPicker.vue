<template>
    <div>
        <!-- fill color  -->
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Fill Color</span>
            </div>
            <Sketch :value="colors" @input="$emit('update-color', $event)" />
        </div>
    </div>
</template>

<script>
import { Sketch } from "vue-color"


export default {
    name: "csShopeColorPicker",
    components: { Sketch },
    data() {
        return {
            colors: "#000000",
        };
    },

};
</script>

