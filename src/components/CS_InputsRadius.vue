<template>
    <div>
        <!-- text --  -->
        <div class="input">
            <!-- radius -->
            <div class="form-group col-md">
                <label for="inp_radius">radius</label>
                <input type="number" class="form-control" id="inp_radius" :value="inp_radius"
                    @input="$emit('change-ObjRadius', $event)" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "csInputsRadius",
    props: {  
        inp_radius: Number,
    }
}

</script>
<style scoped>
.input {
    border: 1px solid black;
}
</style>