<template>
    <div id="aiContent_table" v-if="isSelected">
        <slot></slot>
        <div id="aiContent_title">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success mt-2 my-sm-0" type="submit">Search</button>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#AI_addModal">
                    + Add
                </button>
            </form>
        </div>

        <table class="table table-sm">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Min Value</th>
                    <th scope="col">Mix Value</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="tobdy">
                <tr v-for="(item, key) in currentPoints" :key="key">
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.AI_max }}</td>
                    <td>{{ item.AI_min }}</td>
                    <td>{{ item.AI_name }}</td>

                    <td @click="editSubmit(item)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-edit" data-toggle="modal" data-target="#AI_UpdateModal">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x" id="deleteBtn" @click="deleteSubmit(item)">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- add Modal -->
        <div class="modal fade" id="AI_addModal" tabindex="-1" aria-labelledby="AI_UpdateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="AI_AddModalTitle">
                            Create Physical Analog Input
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label for="input_name" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_name"
                                        v-model.trim="Physical_AI.name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_min" class="col-sm-3 col-form-label">Min Value</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_min"
                                        v-model.number="Physical_AI.min" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_max" class="col-sm-3 col-form-label">Max Value</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_max"
                                        v-model.number="Physical_AI.max" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary" @click="addPoint">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Update Modal -->
        <div class="modal fade" id="AI_UpdateModal" tabindex="-1" aria-labelledby="AI_UpdateModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="AI_UpdateModalTitle">
                            Update Physical Analog Input
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label for="input_name" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_name"
                                        v-model.trim="Physical_AI.name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_min" class="col-sm-3 col-form-label">Min Value</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_min"
                                        v-model.number="Physical_AI.min" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_max" class="col-sm-3 col-form-label">Max Value</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="input_max"
                                        v-model.number="Physical_AI.max" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary" @click="UpdatePoint">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import $ from "jquery";

export default {
    name: "cpDIContent",
    props: {
        isSelected: {
            type: Boolean
        }
    },
    data() {
        return {
            Physical_AI: {
                name: "",
                min: "",
                max: "",
            },
            old_Physical_AI: {},
            currentPoints: [],
            currentPartition: [],
            currentTab: "",
            currentPartition: {},
        };
    },

    mounted() {
        this.getCurData();
    },

    methods: {
        getCurData() {
            //from CP_.vue
            this.$bus.$on("bus:curParation", msg => {
                this.currentPartition = msg
            });
            //from CP_.vue
            this.$bus.$on("bus:curSelect", msg => {
                this.currentTab = msg
            });
        },
        addPoint() {
            let partition = this.currentPartition
            let tab = this.currentTab
            let name = this.Physical_AI.name;
            let min = this.Physical_AI.min;
            let max = this.Physical_AI.max;

            if (Object.keys(partition).length === 0 && partition.constructor === Object) {
                console.log("partition", partition);
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Please Select Partition`,
                });
                return;
            }
            if (tab === "Pysical Analog Input") {
                let pointData = {
                    AI_name: name,
                    AI_min: min,
                    AI_max: max,
                }

                this.currentPoints.push(pointData);
                let addData = { partition, tab, pointData };
                console.log("ai", addData);
                this.$socket.emit("client:AI_adding", addData)
            } else {
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Please Select Object Type`,
                });

            }
            this.Physical_AI.name = ""
            this.Physical_AI.min = ""
            this.Physical_AI.max = ""
            $("#AI_addModal").modal("hide");
            //this.$socket.emit("client:ai_add", ai_data);
        },
        editSubmit(item) {
            this.Physical_AI.name = item.AI_name
            this.Physical_AI.min = item.AI_min
            this.Physical_AI.max = item.AI_max
            this.old_Physical_AI = item;
        },
        UpdatePoint() {
            let partition = this.currentPartition
            let tab = this.currentTab
            let old_ = this.old_Physical_AI;
            let name = this.Physical_AI.name;
            let min = this.Physical_AI.min;
            let max = this.Physical_AI.max;
            let curent = {
                partition,
                tab
            }
            let new_ = {
                name,
                min,
                max
            }
            let data = {
                curent: curent,
                new: new_,
                old: old_,
            }
            console.log();
            this.$socket.emit("client:AI_updating", data)
            this.$socket.on("server:AI_updated", (obj) => {

            })
            this.Physical_AI.name = ""
            this.Physical_AI.min = ""
            this.Physical_AI.max = ""
            $("#AI_UpdateModal").modal("hide");
        },

        deleteSubmit(item) {
            let partition = this.currentPartition;
            let tab = this.currentTab;
            let curent = {
                partition,
                tab
            }
            let data = {
                curent: curent,
                object: item
            }
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                let cancel = result.isDismissed //===true
                let yes = result.isConfirmed //===true
                if (cancel) {
                    return;
                } else if (yes) {
                    this.$socket.emit("client:AI_deleteing", data);
                    this.$socket.on("server:AI_deleted", (obj) => {

                    });
                }
            })
        }
    }


};
</script>

<style scoped>
tbody tr {
    cursor: pointer;
}

#aiContent_table {
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    text-align: center;
}

.active {
    cursor: pointer;
    color: red;
    background-color: rgb(167, 164, 164);
}

.radio_second {
    margin-left: 10%;
}
</style>