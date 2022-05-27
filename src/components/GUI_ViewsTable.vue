<template>
    <div>
        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
        >
            add a new view
        </button>
        <!-- Modal -->
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Add Views
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- input Name -->
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span
                                    class="input-group-text"
                                    id="inputGroup-sizing-sm"
                                    >Name</span
                                >
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                v-model="viewName"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>

                        <!-- input Color -->
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span
                                    class="input-group-text"
                                    id="inputGroup-sizing-sm"
                                    >BackGround Color</span
                                >
                            </div>
                            <input
                                type="color"
                                class="form-control"
                                v-model="viewBgColor"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="saveView"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="table">
            <table class="table">
                <thead class="thead-dark table-sm">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="(item, key) in viewList"
                        :key="item"
                        @click="getViewItem(item, key)"
                        :class="{ active: key == itemKey }"
                    >
                        <td>{{ key + 1 }}</td>
                        <td>{{ item.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    name: "guiViewsTable",
    props: {
        viewList: {
            type: String,
            required: true,
        },
        
    },
    data() {
        return {
            viewName: "",
            viewBgColor: "#000000",    
            itemKey: -1,
        };
    },

    created() {},

    mounted() {
        this.getViewList();
        uibuilder.onChange("msg", (newMsg) => {
            console.info("Msg received from Node-RED server in Home:", newMsg);
        });
    },

    methods: {
        getViewList() {
            var data = JSON.parse(localStorage.getItem("viewList"));
            if (data != null) {
                this.viewList = data;
            }
        },

        saveView() {
            var name = this.viewName;
            var color = this.viewBgColor;
            var viewData = {
                name: name,
                color: color,
            };

            var data = JSON.parse(localStorage.getItem("viewList"));

            if (data === null) {
                this.viewList.push(viewData);
                localStorage.setItem("viewList", JSON.stringify(this.viewList));
            } else {
                data.push(viewData);
                localStorage.setItem("viewList", JSON.stringify(data));
            }

            this.viewName = "";
            this.color = "#000000";
            $("#exampleModal").modal("hide");
        },

        getViewItem(item, key) {
            this.itemKey = key;
           // console.log(item);
            localStorage.setItem("currentViewItem", JSON.stringify(item));
            this.$bus.$emit("viewList", item);
            //this.$emit("viewItem", item);
           // console.log(item);
            
        },
    },
};
</script>

<style scoped>
tbody {
    border: 2px solid black;
}
tbody tr {
    cursor: pointer;
}
.active {
    cursor: pointer;
    color: red;
}
</style>