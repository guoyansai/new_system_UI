<template >
    <div class="row"  >
           <div class="col">
            <form>
                <!-- width,height -->
                <div class="input">
                    <p></p>
                    <div class="form-row">
                        <div class="form-group col-md">
                            <label for="inp_width">width</label>
                            <input type="number" class="form-control" id="inp_width" :value="inp_width"
                                @input="$emit('change-ObjWidth', $event)">
                        </div>
                        <div class="form-group col-md">
                            <label for="inp_height">height</label>
                            <input type="number" class="form-control" id="inp_height" :value="inp_height"
                                @input="$emit('change-ObjHeight', $event)">
                        </div>
                        <div class="form-group col-md">
                            <label for="inp_color">color</label>
                            <input type="color" class="form-control" id="inp_color" :value="inp_color"
                                @input="$emit('change-ObjColor', $event)" />
                        </div>

                    </div>
                </div>
                <!-- border -- width,color -->
                <div class="input">
                    <p>Border</p>
                    <div class="form-row ">
                        <div class="form-group col-md-4">
                            <label for="inp_borderW">width</label>
                            <input type="number" class="form-control" id="inp_borderW" :value="inp_borderW"
                                @input="$emit('change-ObjBorderW', $event)">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inp_borderC">color</label>
                            <input type="color" class="form-control" id="inp_borderC" :value="inp_borderC"
                                @input="$emit('change-ObjBorderC', $event)">
                        </div>

                    </div>
                </div>

                <!-- position -- X / Y , zoom -->
                <div class="input">
                    <p>position</p>
                    <div class="form-row ">
                        <div class="form-group col-md-4">
                            <label for="inp_position_x">x</label>
                            <input type="number" class="form-control" id="inp_position_x" :value="inp_position_x"
                                @input="$emit('change-ObjObjPositionX', $event)">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inp_position_y">y</label>
                            <input type="number" class="form-control" id="inp_position_y" :value="inp_position_y"
                                @input="$emit('change-ObjObjPositionY', $event)">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inp_zoom">zoom</label>
                            <input type="number" class="form-control" id="inp_zoom" :value="inp_zoom"><span>%</span>
                        </div>
                    </div>
                </div>




            </form>
        </div>

    </div>


</template>

<script>

export default {
    name: "csShopeEditor",

    props: {
        inp_width: Number,
        inp_height: Number,
        inp_color: String,
        inp_borderW: Number,
        inp_borderC: String,
        inp_position_x: Number,
        inp_position_y: Number,
        inp_zoom: Number,
        inp_font_size: Array,
        isSelectedBtn: Boolean,
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