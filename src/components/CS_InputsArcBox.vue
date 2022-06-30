<template>
    <div>
        <!-- text --  -->
        <div class="input">
                <!-- startAngle -->
                <div class="form-group col-md">
                    <label for="inp_arcStart">Start Angle</label>
                    <input type="number" class="form-control" id="inp_arcStart"
                        :value="inp_arcStart"
                        @input="$emit('change-ObjArcStart', $event)">
                </div>
                <!-- endAngle -->
                  <div class="form-group col-md">
                    <label for="inp_arcEnd">End Angle</label>
                    <input type="number" class="form-control" id="inp_arcEnd"
                        :value="inp_arcEnd"
                        @input="$emit('change-ObjArcEnd', $event)">
                </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "csInputsArcBox",
    props: {
    inp_arcStart:Number,
    inp_arcEnd:Number,
    },
}

</script>
<style scoped>
.input {
    border: 1px solid black;
}
</style>