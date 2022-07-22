<template >
    <div class="row">

        <div class="col">
            <form>
                <!-- width,height -->
                <div class="input">
                    <div class="form-group col-md">
                        <label for="inp_color">color</label>
                        <input type="color" class="form-control" id="inp_color" :value="inp_color"
                            @input="$emit('change-ObjColor', $event)" />
                    </div>
                </div>
            </form>
        </div>

    </div>


</template>

<script>

export default {
    name: "csInputsFillColor",

    props: {
        inp_color: String,
    },
    data() {
        return {
            shapeList: [],
        };
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