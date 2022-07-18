<template>
    <div>
        <div>
            <!-- <h6>Shapes</h6> -->
            <div id="shopes_table">
                <table class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, key) in getshopesList" @click="getShapeItem(item)">
                            <td>{{ key + 1 }}</td>
                            <td>{{ item }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div id="shopesBtnBox">
                <span>
                    <button type="button" class="" @click="changeZindexHandle('add')">
                        Move Up
                    </button>
                </span>
                <span>
                    <button type="button" class="" @click="changeZindexHandle('down')">
                        Move Down
                    </button>
                </span>
                <span>
                    <button type="button" class="">Delet</button>
                </span>
                <span>
                    <button type="button" class="">Delet All</button>
                </span>
            </div>


        </div>



    </div>



</template>

<script>
import {mapState} from "vuex";
export default {
    name: "csToolsTable",
    props: {
        buttons: Array,
    },


    data() {
        return {
            getshopesList: [],
            itemKey: -1,
        };
    },
    // computed: {
    //      ...mapState({
    //         getShapeStatus: state => state.shapeStatus
    //     })
    // },
    mounted() {
        this.$bus.$on("editorCanvas", (canvas) => {
            var data = this.getshopesList;
            //console.log(data);
            if (data != [] || data != null) {
                data.forEach((element) => {
                    var e = JSON.stringify(element);

                    var tojson = `{"version": "5.2.1","objects": [${e}]}`;
                    console.log(tojson);
                    canvas.loadFromJSON(tojson);
                });
            }
        });
    },
    computed: {
        getShapeStatus() {
            return  this.getshopesList = this.$store.state.getShapeStatus
            
        }
    },
    methods: {
        getShapeItem(item) {
            console.log("getShapeItem",item);
            console.log("getshopesList",this.getshopesList);
        },
        changeZindexHandle(type) {
            const obj = editorCanvas.getActiveObject();

            if (type == "add") {
                editorCanvas.bringForward(obj); // 上移
            } else {
                editorCanvas.sendBackwards(obj); // 下移
            }
            editorCanvas.renderAll(); //重新渲染
        },
    },
};
</script>

<style scoped>
#shopes_table {
    width: 100%;
    height: 40vh;
    overflow: scroll;
    border: 1px solid black;
}

h6 {
    background: black;
    color: white;
}

#shopesBtnBox {
    display: flex;
}

#shopesBtnBox button {
    width: 50px;
    height: 50px;
    font-size: 10px;
    margin: 2px;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
}

div {
    font-size: 0;
}

.active {
    color: red;
}

tr {
    border-bottom: 1px solid black;
    cursor: pointer;
}

tr:hover {
    background-color: rgb(182, 182, 182);
}

tr th {
    background-color: white;
    cursor: default;
}
</style>
