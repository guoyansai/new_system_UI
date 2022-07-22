<template >
    <div class="row"> 
           <div class="col">
            <form>
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
            </form>
        </div>

    </div>


</template>

<script>

export default {
    name: "csInputsBorder",
    props: {
        inp_borderW: Number,
        inp_borderC: String,
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