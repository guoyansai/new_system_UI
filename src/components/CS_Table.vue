<template>
    <div>
        <!-- Add Paration Modal -->
        <div class="modal fade" id="CS_AddBtn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">add a shope</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label for="custom_name" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="custom_name" required
                                        v-model="newItem.setname">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
                        <button type="button" class="btn btn-primary" @click="saveCustomShopes">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="custom_table">
            <h6>Custom Shapes</h6>
            <table class="table table-sm">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th>

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal"
                                data-target="#CS_AddBtn" id="addBtn">
                                + Add
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, key) in CustomerItem" :key="key" @click="getTableItem(item, key)"
                        :class="{ active: key == itemKey }">
                        <td>{{ key + 1 }}</td>
                        <td>{{ item.setname }}</td>

                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>

<script>
export default {
    name: "CS_Table",

    data() {
        return {
            newItem: {
                setname: "",
            },
            itemKey: -1,
            editorCanvas: null,
            CustomerItem: [],
            getCustomerItem: [],
        };
    },
    created() {
        //CS_Tools.vue
        this.$bus.$on("editorCanvas", (data) => {
            this.editorCanvas = data;
        });
    },

    mounted() {
        this.getItems();

        uibuilder.onChange("msg", (newMsg) => {
            console.info("Msg received from Node-RED server in Page1:", newMsg);
            //this.msg = newMsg
        });
    },

    methods: {
        getItems() {
            var objs = JSON.parse(localStorage.getItem("CustomerItem"));
            if (objs === null) {
                return;
            }
            this.CustomerItem = (objs);
        },
        // save new custom a Shope
        saveCustomShopes() {
            var canvas = this.editorCanvas;
            const objs = canvas.getObjects();

            var shopesList = localStorage.getItem("shopesList");
            var setname = this.newItem.setname;
            //var items = this.CustomerItem;
            if (objs != undefined) {
                if (objs.length >= 2) {
                    console.log(typeof objs);
                    console.log(objs);
                    const group = new fabric.Group(objs);
                    console.log(typeof objs);
                    console.log(group);
                    canvas.clear().renderAll();
                    canvas.add(group);
                    canvas.setActiveObject(group);
                } else if (objs.length <= 1) {
                    //  console.log(objs);
                }
            } else if (setname == "" || shopesList == null) {
                alert("cannot empty");
            }
            this.CustomerItem.push({
                setname: setname,
                shopesList: shopesList,
            });
            this.$bus.$emit("CustomerItem", this.CustomerItem);
            localStorage.setItem(
                "CustomerItem",
                JSON.stringify(this.CustomerItem)
            );
            localStorage.removeItem("shopesList");
            this.newItem.setname = "";
            this.editorCanvas.clear();
        },

        getTableItem(item, key) {
            this.itemKey = key;
            //console.log(item);

            //var obj_slice = item.shopesList.slice(40, -2);
            //console.log(obj_slice);
            //this.editorCanvas.clear();
            //console.log(JSON.parse(item.shopesList));

            // if (item != [] || item != null) {
            //   var shope = item.shopesList;
            //   var canvasJson = `{"version":"5.2.1","objects":[${shope}]}`;
            //   console.log(canvasJson);
            //   this.editorCanvas.loadFromJSON(canvasJson);
            // }
            this.$bus.$emit("CS_Table_Item", item);
            this.$bus.$emit("CS_Table_Item_Key", this.itemKey);
        },
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

tr th {
    background-color: white;
    cursor: default;
}

tr {
    border-bottom: 1px solid black;
    cursor: pointer;
}

tbody tr {
    cursor: pointer;
}

tbody tr:hover {
    background-color: rgb(167, 164, 164);
}

.active {
    cursor: pointer;
    color: red;
}

#custom_table {
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    text-align: center;
}

h6 {
    background: black;
    color: white;
}
</style>
