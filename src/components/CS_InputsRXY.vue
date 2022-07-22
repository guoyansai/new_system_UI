<template>
    <div>
        <!-- Ellipse rx / ry --  -->
        <div class="input">
                <!-- rx -->
                <div class="form-group col-md">
                    <label for="inp_rx">width</label>
                    <input type="number" class="form-control" id="inp_rx"
                        :value="inp_rx"
                        @input="$emit('change-ObjRx', $event)">
                </div>
                <!-- ry -->
                  <div class="form-group col-md">
                    <label for="inp_ry">height</label>
                    <input type="number" class="form-control" id="inp_ry"
                        :value="inp_ry"
                        @input="$emit('change-ObjRy', $event)">
                </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "csInputsRXY",
    props: {
    inp_rx:Number,
    inp_ry:Number,
    },
}

</script>
<style scoped>
.input {
    border: 1px solid black;
}
</style>