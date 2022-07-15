<template>
    <div>
        <div id="custom_table">
            <h6>Custom Shapes</h6>
            <form>
                <label class="sr-only" for="paration_name">Name</label>
                <div class="input-group">

                    <input type="text" class="form-control" id="paration_name" placeholder="Name"
                        v-model.trim="newItem.name">
                    <button id="custom_addBtn">Add</button>
                </div>
            </form>
            <table class="table table-sm">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
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
                name: "",
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
            let objs = JSON.parse(localStorage.getItem("CustomerItem"));
            if (objs === null) {
                return;
            }
            this.CustomerItem = (objs);
        },
        // save new custom a Shope
        saveCustomShopes() {
            let canvas = this.editorCanvas;
            const objs = canvas.getObjects();

            let shopesList = localStorage.getItem("shopesList");
            let name = this.newItem.name;
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
            } else if (name == "" || shopesList == null) {
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
    height: 50vh;
    border: 1px solid black;
    text-align: center;
}

h6 {
    background: black;
    color: white;
}

#custom_addBtn {
    width: 50px;
    font-size: 10px;
    background-color: #007bff;
    color: white;
}
</style>
