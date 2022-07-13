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
                        <tr v-for="(item, key) in getshopesList">
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
export default {
    name: "csToolsTable",
    props: {
        buttons: Array,
    },


    data() {
        return {
            getshopesList: [],
            itemKey: -1,
            curBtnType: "",
        };
    },
    watch: {
        '$props': {
            handler: function (val, oldVal) {
                console.log('watch val', val)
                console.log('watch oldVal', oldVal)
            },
            deep: true
        }
    },
    mounted() {
        this.getData();

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
    created() { },
    methods: {
        getData() {

            this.$bus.$on("curBtnType", (obj) => {
                this.curBtnType = obj
                this.getshopesList.push(this.curBtnType)
            })
            // var objs = JSON.parse(localStorage.getItem("shopesList"));
            // console.log(objs);
            // if (objs != null || []) {
            //     objs.forEach((element) => {
            //         var el = JSON.parse(element);
            //         //console.log(el);
            //         var obj = el.objects[0];
            //         this.getshopesList.push(obj);
            //         // console.log(this.getshopesList);
            //     });
            // }
            // this.$bus.$emit("ref", this.$refs.shopesTbody);
        },
        getDataItem(item, key) {
            this.itemKey = key;
            console.log(item);
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
