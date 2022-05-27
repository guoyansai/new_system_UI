<template>
    <div>
        <!-- <h5>Shapes</h5>
        <div id="table">
            <table class="table-responsive-md" >
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody id="shopesTbody" ref="shopesTbody">
                    <tr
                        v-for="(item, key) in getshopesList"
                        :key="key"
                        @click="getDataItem(item, key)"
                        :class="{ active: key == itemKey }"
                    >
                        <td>{{ key + 1 }}</td>
                        <td>{{ item.type }}</td>
                    </tr>
                </tbody>
            </table>
        <div>
        <div>
            <br />

            <ul id="btnBox">
                <li>
                    <button
                        type="button"
                        class="btn btn-success"
                        @click="changeZindexHandle('add')"
                    >
                         Move Up
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        class="btn btn-success"
                        @click="changeZindexHandle('down')"
                    >
                        <font-awesome-icon icon="fa-thin fa-down" />Move Down
                    </button>
                </li>
                <li>
                    <button type="button" class="btn btn-danger">Delet</button>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>
export default {
    name: "CS_Tools_Table",

    data() {
        return {
            getshopesList: [],
            isActive: false,
            hasError: false,
            itemKey: -1,
        };
    },

    mounted() {
        this.getData();
        uibuilder.onChange("msg", (newMsg) => {
            console.info("Msg received from Node-RED server in Page1:", newMsg);
            //this.msg = newMsg
        });
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
    created() {},
    methods: {
        getData() {
            var objs = JSON.parse(localStorage.getItem("shopesList"));
            console.log(objs);
            if (objs != null || []) {
                objs.forEach((element) => {
                    var el = JSON.parse(element);
                    //console.log(el);
                    var obj = el.objects[0];
                    this.getshopesList.push(obj);
                    // console.log(this.getshopesList);
                });
            }
            this.$bus.$emit("ref", this.$refs.shopesTbody);
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
table {
    /* height: 400px; */
    border: 1px solid;
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
