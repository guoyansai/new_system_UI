<template>
    <div>
        <!-- line -- X / Y -->
        <div class="input">
            <p>Coord Point</p>
            <div class="form-row ">
                <div class="form-group col-md">
                    <table class="table table-sm table-dark">
                        <thead>
                            <tr>
                                <!-- <th scope="col">#</th> -->
                                <th scope="col">X</th>
                                <th scope="col">Y</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="number" class="form-control" id="inp_arcStart" :value="inp_CoordX"
                                        @input="$emit('change-ObjCoordX')">
                                </td>
                                <td>
                                    <input type="number" class="form-control" id="inp_arcStart"  :value="inp_CoordY"
                                        @input="$emit('change-ObjCoordY')">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="coordPointBox">
                        <span>
                            <button @click.prevent="$emit('add-coordPoints', $event)">Add</button>
                        </span>
                        <span><button>Update</button></span>
                        <span><button>Delete</button></span>
                    </div>

                </div>


            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "csInputsCoordBox",
    props: {
        inp_CoordX: Array,
        inp_CoordY: Array,
    },
    data() {
        return {
            points:[],
        }
    },
    created() {
        this.$bus.$on('points', function (data) {
            
            this.points = data;
            console.log('接收到的事件', this.points);
        })
    },
    method() {

    },
}

</script>
<style scoped>
.input {
    border: 1px solid black;
}
</style>