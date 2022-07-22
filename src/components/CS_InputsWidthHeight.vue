<template >
    <div class="row">
        
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
                    </div>
                </div>
            </form>
        </div>

    </div>


</template>

<script>

export default {
    name: "csInputsWidthHeight",

    props: {
        inp_width: Number,
        inp_height: Number,
    },
     data() {
        return {
            shapeList: [],
        };
    },
    computed: {
        getShapeStatus() {
            return this.$store.state.curShapeStatus
        }
    },
    methods:{
        // updateWidth(e){
        //     console.log(e.target.value);
        //     this.$store.commit('updateWidth', e.target.value)
        // },
        // updateHeight(e){
        //     console.log(e.target.value);
        //     this.$store.commit('updateHeight(', e.target.value)
        // },
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