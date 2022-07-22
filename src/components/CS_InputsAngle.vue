<template>
    <div>
        <!-- text --  -->
        <div class="input">
                <!-- startAngle -->
                <div class="form-group col-md">
                    <label for="inp_Angle">Angle</label>
                    <input type="number" class="form-control" id="inp_Angle"
                        :value="inp_Angle"
                        @input="$emit('change-ObjAngle', $event)">
                </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "csInputsAngle",
    props: {
    inp_Angle:Number,
    },
}

</script>
<style scoped>
.input {
    border: 1px solid black;
}
</style>