<template>
    <div>
        <h5>Custom Shapes</h5>
        <div id="table">
            <table class="table-responsive-md">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(item, key) in CustomerItem"
                        :key="key"
                        @click="getTableItem(item, key)"
                        :class="{ active: key == itemKey }"
                    >
                        <td>{{ key + 1 }}</td>
                        <td>{{ item.setname }}</td>
                        <td>{{ item.setvalue }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="input-group" id="CS_addNmae_input">
            <div class="input-group-prepend">
                <span class="input-group-text">Name</span>
            </div>
            <input
                type="text"
                class="form-control"
                required
                v-model="newItem.setname"
            />
        </div>
        <div class="input-group" id="CS_addVal_input">
            <div class="input-group-prepend">
                <span class="input-group-text">Value</span>
            </div>
            <input
                type="number"
                class="form-control"
                required
                v-model="newItem.setvalue"
            />
        </div>
        <div>
            <br />
            <button
                @click="saveCustomShopes"
                type="button"
                class="btn btn-primary"
                id="CS_Add_btn"
            >
                Add
            </button>

            <button type="button" class="btn btn-secondary" id="CS_update_btn">
                Update
            </button>
            <button type="button" class="btn btn-success" id="CS_delete_btn">
                Delete
            </button>
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
                setvalue: "",
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
            if(objs === null){
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
            var setvalue = this.newItem.setvalue;
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
            } else if (setname == "" || setvalue == "" || shopesList == null) {
                alert("cannot empty");
            }
            this.CustomerItem.push({
                setname: setname,
                setvalue: setvalue,
                shopesList: shopesList,
            });
            this.$bus.$emit("CustomerItem", this.CustomerItem);
            localStorage.setItem(
                "CustomerItem",
                JSON.stringify(this.CustomerItem)
            );
            localStorage.removeItem("shopesList");
            this.newItem.setname = "";
            this.newItem.setvalue = "";
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
table {
    /* height: 400px; */
    border: 1px solid;
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

.table {
    border: 1px solid;
    text-align: center;
}
</style>
