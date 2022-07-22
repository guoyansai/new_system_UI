<template>
    <div id="aiContent_table" v-if="isSelected">
        <slot></slot>
        <div id="aiContent_title">
            <form class="form-inline my-2 my-lg-0">
                <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success mt-2 my-sm-0" type="submit">Search</button> -->
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#DO_addModal"
                    @click="setFocus">
                    + Add
                </button>
            </form>
        </div>

        <table class="table table-sm">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Digital Text</th>
                    <!-- 綁定的DI partition -->
                    <th scope="col">Digital Input Plan Partition</th>
                    <!-- 綁定的DI點位-->
                    <th scope="col">Digital Input</th>
                    <!-- 綁定的Local Remot  -->
                    <th scope="col">Inter Locking Partition</th>
                    <th scope="col">Inter Locking Name</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="tobdy">
                <tr v-for="(item, key) in currentPoints" :key="key">
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.DO_name }}</td>
                    <td>{{ item.DO_text }}</td>
                    <td>{{ item.DO_linkingPartitione }}</td>
                    <td>{{ item.DO_linkingName }}</td>
                    <td>{{ item.DO_lockingPartition }}</td>
                    <td>{{ item.DO_lockingName }}</td>
                    
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
        <div class="modal fade" id="DO_addModal" tabindex="-1" aria-labelledby="AI_UpdateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="DO_AddModalTitle">
                            Create Physical Digital Output
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label for="input_name" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="input_name"
                                        v-model.trim="Physical_DO.name" ref="firstInput" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_text" class="col-sm-3 col-form-label">Digital Text</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="input_text"
                                        v-model.trim="Physical_DO.text" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_partition" class="col-sm-3 col-form-label">Digital Input Plan
                                    Partition</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="input_partition"
                                        v-model.trim="Physical_DO.linkingPartition" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_digitalInput" class="col-sm-3 col-form-label">Digital Input</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="input_digitalInput"
                                        v-model.trim="Physical_DO.linkingName" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_lockingPartition" class="col-sm-3 col-form-label">Inter Locking
                                    Partition</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="input_lockingPartition"
                                        v-model.trim="Physical_DO.lockingPartition" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_lockingName" class="col-sm-3 col-form-label">Inter Locking
                                    Name</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="input_lockingName"
                                        v-model.trim="Physical_DO.lockingName" />
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
                        <h5 class="modal-title" id="DO_AddModalTitle">
                            Update Physical Digital Output
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label for="input_name" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="input_name"
                                        v-model.trim="Physical_DO.name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_text" class="col-sm-3 col-form-label">Digital Text</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="input_text"
                                        v-model.trim="Physical_DO.text" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_partition" class="col-sm-3 col-form-label">Digital Input Plan
                                    Partition</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="input_partition"
                                        v-model.trim="Physical_DO.linkingPartition" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_digitalInput" class="col-sm-3 col-form-label">Digital Input</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="input_digitalInput"
                                        v-model.trim="Physical_DO.linkingName" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_lockingPartition" class="col-sm-3 col-form-label">Inter Locking
                                    Partition</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="input_lockingPartition"
                                        v-model.trim="Physical_DO.lockingPartition" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input_lockingName" class="col-sm-3 col-form-label">Inter Locking
                                    Name</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="input_lockingName"
                                        v-model.trim="Physical_DO.lockingName" />
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
            Physical_DO: {
                name: "",
                text: "",
                // <!-- 綁定的DI partition -->
                linkingPartition: "",
                // <!-- 綁定的DI點位-->
                linkingName: "",
                // <!-- 綁定的Local Remot  -->
                lockingPartition: "",
                lockingName: "",
            },
            old_Physical_DO: {},
            currentPoints: [],
            currentTab: "",
            currentPartition: {},
        };
    },

    methods: {
        // not worked
        setFocus() {
            this.$refs.firstInput.focus();
        },
        addPoint() {
            let curpartition = this.currentPartition = this.$store.state.curPartition
            let curentTab = this.currentTab = this.$store.state.curTab
           
            let name = this.Physical_DO.name;
            let text = this.Physical_DO.text;
            let linkingPartition = this.Physical_DO.linkingPartition;
            let linkingName= this.Physical_DO.linkingName;
            let lockingPartition = this.Physical_DO.lockingPartition;
            let lockingName = this.Physical_DO.lockingName;
            // console.log("curpartition",curpartition);
            // console.log("curentTab",curentTab);
            // console.log("name",name);
            // console.log("text",text);
            // console.log("linkingPartition",linkingPartition);
            // console.log("linkingName",linkingName);
            // console.log("lockingPartition",lockingPartition);
            // console.log("lockingName",lockingName);
           
            if (Object.keys(curpartition).length === 0 && curpartition.constructor === Object) {
                console.log("partition", partition);
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Please Select Partition`,
                });
                return;
            }
            if (curentTab === "Pysical Digital Output") {
                let pointData = {
                    DO_name: name,
                    DO_text: text,
                    DO_linkingPartitione: linkingPartition,
                    DO_linkingName: linkingName,
                    DO_lockingPartition: lockingPartition,
                    DO_lockingName: lockingName,
                    
                }

                this.currentPoints.push(pointData);
                console.log("this.currentPoints",this.currentPoints);
                let addData = { curpartition, curentTab, pointData };
                this.$socket.emit("client:DO_adding", addData)
            } else {
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Please Select Object Type`,
                });

            }
            this.Physical_DO.name = ""
            this.Physical_DO.text = ""
            this.Physical_DO.linkingPartition = ""
            this.Physical_DO.linkingName = ""
            this.Physical_DO.lockingPartition = ""
            this.Physical_DO.lockingName = ""
            $("#DO_addModal").modal("hide");
            //this.$socket.emit("client:ai_add", ai_data);
        },
        editSubmit(item) {
            this.Physical_DO.name = item.AI_name
            this.Physical_DO.min = item.AI_min
            this.Physical_DO.max = item.AI_max
            this.old_Physical_DO = item;
        },
        UpdatePoint() {
            let partition = this.currentPartition
            let tab = this.currentTab
            let old_ = this.old_Physical_DO;
            let name = this.Physical_DO.name;
            let min = this.Physical_DO.min;
            let max = this.Physical_DO.max;
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
            this.Physical_DO.name = ""
            this.Physical_DO.min = ""
            this.Physical_DO.max = ""
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