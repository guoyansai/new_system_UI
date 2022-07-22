<template >
    <div class="row">
           <div class="col">
            <form>
                <!-- position -- X / Y , zoom -->
                <div class="input">
                    <p>position</p>
                    <div class="form-row ">
                        <div class="form-group col-md-4">
                            <label for="inp_position_x">x</label>
                            <input type="number" class="form-control" id="inp_position_x" :value="inp_position_x"
                                @input="$emit('change-ObjPositionX', $event)">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inp_position_y">y</label>
                            <input type="number" class="form-control" id="inp_position_y" :value="inp_position_y"
                                @input="$emit('change-ObjPositionY', $event)">
                        </div>
                        <!-- not worked -->
                        <div class="form-group col-md-4">
                            <label for="inp_zoom">zoom</label>
                            <input type="number" class="form-control" id="inp_zoom" :value="inp_zoom"
                            @input="$emit('change-ObjZoom', $event)"><span>%</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>


</template>

<script>

export default {
    name: "csInputsPosition",
    props: {
        inp_position_x: Number,
        inp_position_y: Number,
        inp_zoom: Number,
    },
  
};
</script>

<style scoped>
.input {
    border: 1px solid black;
}

#coordPointBox {
    display: flex;
}

#coordPointBox button {
    width: 50px;
    height: 30px;
    font-size: 10px;
    margin: 2px;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
}
</style>